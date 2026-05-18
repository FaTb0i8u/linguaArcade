/**
 * Sentence Builder — drag-to-arrange word order game.
 *
 * Words are shuffled (with optional distractors). The user taps
 * words in the correct order to form a Spanish sentence.
 * Tap a placed word to remove it.
 */

import React, { useState, useCallback, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ArcadeStackParamList, AnsweredItem, GameSessionResult, SentencePattern } from '../../types';
import { getLevelContent, getLanguageMeta } from '../../data/registry';
import { useAuth } from '../../context/AuthContext';
import { shuffle } from '../../utils/array';
import { Colors, Spacing, FontSizes, FontWeights, BorderRadius, Shadows } from '../../config/theme';
import { Button } from '../../components/common/Button';
import { WordTile } from '../../components/games/WordTile';
import { ScoreDisplay } from '../../components/games/ScoreDisplay';
import { ProgressBar } from '../../components/common/ProgressBar';
import { SpeakButton } from '../../components/common/SpeakButton';
import { speak } from '../../utils/speech';
import { XP } from '../../config/constants';
import { useProgress } from '../../context/ProgressContext';

type Props = NativeStackScreenProps<ArcadeStackParamList, 'SentenceBuilder'>;

const TOTAL_SENTENCES = 8;

type Phase = 'ready' | 'playing' | 'results';

export function SentenceBuilderScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const { recordGame } = useProgress();
  const { user } = useAuth();

  const lang = user?.currentLanguage ?? 'es';
  const level = user?.currentLevel ?? 'A1';
  const meta = getLanguageMeta(lang);
  const content = getLevelContent(lang, level);

  const [phase, setPhase] = useState<Phase>('ready');
  const [sentences, setSentences] = useState<SentencePattern[]>([]);
  const [sentenceIdx, setSentenceIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<AnsweredItem[]>([]);

  // Current sentence state
  const [availableWords, setAvailableWords] = useState<string[]>([]);
  const [placedWords, setPlacedWords] = useState<string[]>([]);
  const [checkResult, setCheckResult] = useState<boolean | null>(null);
  const startTime = useRef(Date.now());
  const sentenceStartTime = useRef(Date.now());

  const currentSentence = sentences[sentenceIdx] ?? null;

  const setupSentence = useCallback((sentence: SentencePattern) => {
    const words = [...sentence.words, ...(sentence.distractors ?? [])];
    setAvailableWords(shuffle(words));
    setPlacedWords([]);
    setCheckResult(null);
    sentenceStartTime.current = Date.now();
  }, []);

  const initGame = useCallback(() => {
    const selected = shuffle(content.sentences).slice(0, TOTAL_SENTENCES);
    setSentences(selected);
    setSentenceIdx(0);
    setScore(0);
    setAnswered([]);
    startTime.current = Date.now();
    if (selected.length > 0) setupSentence(selected[0]);
  }, [setupSentence]);

  const handleSelectWord = (word: string, idx: number) => {
    if (checkResult !== null) return;
    setAvailableWords((prev) => prev.filter((_, i) => i !== idx));
    setPlacedWords((prev) => [...prev, word]);
  };

  const handleRemoveWord = (word: string, idx: number) => {
    if (checkResult !== null) return;
    setPlacedWords((prev) => prev.filter((_, i) => i !== idx));
    setAvailableWords((prev) => [...prev, word]);
  };

  const checkAnswer = () => {
    if (!currentSentence) return;
    const userAnswer = placedWords.join(' ');
    const correctAnswer = currentSentence.words.join(' ');
    const isCorrect = userAnswer === correctAnswer;
    const responseTime = Date.now() - sentenceStartTime.current;

    setCheckResult(isCorrect);
    // Speak the correct sentence so the user hears proper pronunciation
    speak({ text: correctAnswer, language: lang });
    setAnswered((prev) => [...prev, {
      contentId: currentSentence.id,
      contentType: 'sentence',
      wasCorrect: isCorrect,
      responseTime,
      userAnswer,
      correctAnswer,
    }]);

    if (isCorrect) {
      setScore((s) => s + 100);
    }
  };

  const nextSentence = () => {
    const nextIdx = sentenceIdx + 1;
    if (nextIdx >= sentences.length) {
      // Game over
      const correct = answered.filter((a) => a.wasCorrect).length;
      const elapsed = (Date.now() - startTime.current) / 1000;
      const xp = correct * XP.CORRECT_ANSWER + XP.GAME_PARTICIPATION
        + (correct === answered.length ? XP.PERFECT_ROUND : 0);

      const result: GameSessionResult = {
        gameMode: 'sentence_builder',
        score,
        maxScore: TOTAL_SENTENCES * 100,
        correctAnswers: correct,
        totalQuestions: answered.length,
        xpEarned: xp,
        timeElapsed: elapsed,
        answeredItems: answered,
      };
      recordGame(result);
      setPhase('results');
    } else {
      setSentenceIdx(nextIdx);
      setupSentence(sentences[nextIdx]);
    }
  };

  // ── Ready Phase ─────────────────────────────────────────────
  if (phase === 'ready') {
    return (
      <View style={[styles.screen, styles.center, { paddingTop: insets.top }]}>
        <Text style={styles.readyEmoji}>🧩</Text>
        <Text style={styles.readyTitle}>Sentence Builder</Text>
        <Text style={styles.readyDesc}>
          Tap words in the correct order to build {meta.name} sentences.{'\n'}
          Watch out for distractor words!
        </Text>
        <Text style={styles.readyRule}>📝 {TOTAL_SENTENCES} sentences</Text>
        <Button
          title="Start Building!"
          onPress={() => { initGame(); setPhase('playing'); }}
          size="lg"
          variant="secondary"
          style={{ marginTop: Spacing.xl }}
        />
        <Button title="← Back" onPress={() => navigation.goBack()} variant="ghost" style={{ marginTop: Spacing.sm }} />
      </View>
    );
  }

  // ── Results Phase ───────────────────────────────────────────
  if (phase === 'results') {
    const correct = answered.filter((a) => a.wasCorrect).length;
    const pct = answered.length > 0 ? Math.round((correct / answered.length) * 100) : 0;
    const xp = correct * XP.CORRECT_ANSWER + XP.GAME_PARTICIPATION;
    return (
      <View style={[styles.screen, styles.center, { paddingTop: insets.top }]}>
        <Text style={styles.resultEmoji}>{pct >= 70 ? '🎉' : '💪'}</Text>
        <Text style={styles.resultTitle}>{pct >= 70 ? 'Excellent!' : 'Keep Practicing!'}</Text>
        <Text style={styles.resultScore}>Score: {score}</Text>
        <Text style={styles.resultDetail}>{correct}/{answered.length} correct ({pct}%)</Text>
        <Text style={styles.resultXp}>+{xp} XP</Text>
        <Button title="Play Again" onPress={() => { initGame(); setPhase('playing'); }} style={{ marginTop: Spacing.lg }} />
        <Button title="← Back to Arcade" onPress={() => navigation.goBack()} variant="ghost" style={{ marginTop: Spacing.sm }} />
      </View>
    );
  }

  // ── Playing Phase ───────────────────────────────────────────
  if (!currentSentence) return null;

  const progress = (sentenceIdx + 1) / sentences.length;

  return (
    <View style={[styles.screen, { paddingTop: insets.top + Spacing.sm }]}>
      {/* HUD */}
      <View style={styles.hudRow}>
        <ScoreDisplay score={score} />
        <Text style={styles.counter}>{sentenceIdx + 1} / {sentences.length}</Text>
      </View>
      <ProgressBar progress={progress} color={Colors.accent} />

      <ScrollView contentContainerStyle={styles.playArea}>
        {/* Translation prompt */}
        <View style={styles.promptCard}>
          <Text style={styles.promptLabel}>Build this sentence:</Text>
          <Text style={styles.promptTranslation}>"{currentSentence.translation}"</Text>
          {currentSentence.hint && (
            <Text style={styles.hintText}>💡 {currentSentence.hint}</Text>
          )}
          {checkResult !== null && (
            <SpeakButton
              text={currentSentence.words.join(' ')}
              language={lang}
              size="md"
              style={{ marginTop: Spacing.sm }}
            />
          )}
        </View>

        {/* Placed words area (answer zone) */}
        <View style={styles.answerZone}>
          <Text style={styles.zoneLabel}>Your sentence:</Text>
          <View style={styles.wordRow}>
            {placedWords.length === 0 ? (
              <Text style={styles.placeholder}>Tap words below to build the sentence…</Text>
            ) : (
              placedWords.map((w, i) => (
                <WordTile
                  key={`placed-${i}`}
                  word={w}
                  onPress={() => handleRemoveWord(w, i)}
                  isSelected
                  isCorrect={checkResult}
                  disabled={checkResult !== null}
                />
              ))
            )}
          </View>
        </View>

        {/* Available words */}
        <View style={styles.wordBank}>
          <Text style={styles.zoneLabel}>Available words:</Text>
          <View style={styles.wordRow}>
            {availableWords.map((w, i) => (
              <WordTile
                key={`avail-${i}`}
                word={w}
                onPress={() => handleSelectWord(w, i)}
                disabled={checkResult !== null}
              />
            ))}
          </View>
        </View>

        {/* Feedback */}
        {checkResult !== null && (
          <View style={[styles.feedbackBar, checkResult ? styles.correctBar : styles.incorrectBar]}>
            <Text style={styles.feedbackText}>
              {checkResult
                ? '✅ Perfect!'
                : `❌ Correct: ${currentSentence.words.join(' ')}`}
            </Text>
          </View>
        )}

        {/* Actions */}
        <View style={styles.actions}>
          {checkResult === null ? (
            <Button
              title="Check"
              onPress={checkAnswer}
              disabled={placedWords.length === 0}
              size="lg"
            />
          ) : (
            <Button
              title={sentenceIdx + 1 >= sentences.length ? 'See Results' : 'Next Sentence →'}
              onPress={nextSentence}
              size="lg"
              variant="secondary"
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Colors.background, padding: Spacing.md },
  center: { justifyContent: 'center', alignItems: 'center' },
  // Ready
  readyEmoji: { fontSize: 64, marginBottom: Spacing.md },
  readyTitle: { fontSize: FontSizes.hero, fontWeight: FontWeights.bold, color: Colors.accent },
  readyDesc: { fontSize: FontSizes.md, color: Colors.textSecondary, textAlign: 'center', marginTop: Spacing.sm, lineHeight: 22, paddingHorizontal: Spacing.md },
  readyRule: { fontSize: FontSizes.md, color: Colors.textPrimary, marginTop: Spacing.md, fontWeight: FontWeights.medium },
  // HUD
  hudRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: Spacing.sm },
  counter: { fontSize: FontSizes.sm, color: Colors.textSecondary },
  // Play area
  playArea: { paddingTop: Spacing.md, paddingBottom: Spacing.xxl },
  promptCard: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    alignItems: 'center',
    marginBottom: Spacing.lg,
    ...Shadows.sm,
  },
  promptLabel: { fontSize: FontSizes.sm, color: Colors.textSecondary, marginBottom: 4 },
  promptTranslation: {
    fontSize: FontSizes.xl,
    fontWeight: FontWeights.semibold,
    color: Colors.textPrimary,
    textAlign: 'center',
  },
  hintText: { fontSize: FontSizes.sm, color: Colors.textSecondary, marginTop: Spacing.sm, fontStyle: 'italic' },
  // Answer zone
  answerZone: {
    backgroundColor: Colors.surfaceAlt,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    minHeight: 80,
    marginBottom: Spacing.md,
    borderWidth: 2,
    borderColor: Colors.border,
    borderStyle: 'dashed',
  },
  zoneLabel: { fontSize: FontSizes.sm, color: Colors.textSecondary, marginBottom: Spacing.xs },
  placeholder: { fontSize: FontSizes.sm, color: Colors.textLight, fontStyle: 'italic', textAlign: 'center', paddingVertical: Spacing.md },
  wordRow: { flexDirection: 'row', flexWrap: 'wrap' },
  // Word bank
  wordBank: { marginBottom: Spacing.lg },
  // Feedback
  feedbackBar: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.md,
    marginBottom: Spacing.md,
  },
  correctBar: { backgroundColor: '#E6FFF5' },
  incorrectBar: { backgroundColor: '#FFF0ED' },
  feedbackText: { fontSize: FontSizes.md, fontWeight: FontWeights.semibold, textAlign: 'center' },
  // Actions
  actions: { marginTop: Spacing.sm },
  // Results
  resultEmoji: { fontSize: 64, marginBottom: Spacing.md },
  resultTitle: { fontSize: FontSizes.xxl, fontWeight: FontWeights.bold, color: Colors.textPrimary },
  resultScore: { fontSize: FontSizes.xl, fontWeight: FontWeights.bold, color: Colors.primary, marginTop: Spacing.sm },
  resultDetail: { fontSize: FontSizes.md, color: Colors.textSecondary, marginTop: Spacing.xs },
  resultXp: { fontSize: FontSizes.lg, fontWeight: FontWeights.bold, color: Colors.xpGold, marginTop: Spacing.xs },
});
