/**
 * Vocab Blitz — typing speed game.
 *
 * Words appear one at a time with a countdown. The user types the
 * English translation as fast as possible. Correct answers score
 * points; wrong answers or time-outs lose a life.
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ArcadeStackParamList, AnsweredItem, GameSessionResult, VocabWord } from '../../types';
import { getLevelContent, getLanguageMeta } from '../../data/registry';
import { isAnswerAcceptable } from '../../utils/answer';
import { useAuth } from '../../context/AuthContext';
import { shuffle } from '../../utils/array';
import { Colors, Spacing, FontSizes, FontWeights, BorderRadius } from '../../config/theme';
import { Button } from '../../components/common/Button';
import { ExitButton } from '../../components/common/ExitButton';
import { ProgressBar } from '../../components/common/ProgressBar';
import { SpeakButton } from '../../components/common/SpeakButton';
import { speak } from '../../utils/speech';
import { ScoreDisplay } from '../../components/games/ScoreDisplay';
import { Timer } from '../../components/games/Timer';
import { XP, GAME_TIMERS } from '../../config/constants';
import { useProgress } from '../../context/ProgressContext';
import { SRSEngine } from '../../services/srs';

type Props = NativeStackScreenProps<ArcadeStackParamList, 'VocabBlitz'>;

const TOTAL_WORDS = 15;
const LIVES = 3;

type Phase = 'ready' | 'playing' | 'results';

export function VocabBlitzScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const { recordGame } = useProgress();
  const { user } = useAuth();
  const inputRef = useRef<TextInput>(null);

  const lang = user?.currentLanguage ?? 'es';
  const level = user?.currentLevel ?? 'A1';
  const meta = getLanguageMeta(lang);
  const content = getLevelContent(lang, level);

  const [phase, setPhase] = useState<Phase>('ready');
  const [words, setWords] = useState<VocabWord[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [lives, setLives] = useState(LIVES);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [typedAnswer, setTypedAnswer] = useState('');
  const [answered, setAnswered] = useState<AnsweredItem[]>([]);
  const [timerKey, setTimerKey] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [finalXp, setFinalXp] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const startTime = useRef(Date.now());
  const wordStartTime = useRef(Date.now());

  // Initialise round
  const initRound = useCallback(() => {
    setWords(shuffle(content.vocab).slice(0, TOTAL_WORDS));
    setCurrentIdx(0);
    setLives(LIVES);
    setScore(0);
    setCombo(0);
    setTypedAnswer('');
    setAnswered([]);
    setFeedback(null);
    setFinalXp(0);
    setIsProcessing(false);
    startTime.current = Date.now();
    wordStartTime.current = Date.now();
    setTimerKey((k) => k + 1);
  }, []);

  const currentWord = words[currentIdx] ?? null;

  // Auto-speak each new word when it appears
  useEffect(() => {
    if (phase === 'playing' && currentWord) {
      speak({ text: currentWord.word, language: lang });
    }
  }, [currentIdx, phase]);

  const endGame = useCallback(() => {
    const elapsed = (Date.now() - startTime.current) / 1000;
    const correct = answered.filter((a) => a.wasCorrect).length;
    const xp = correct * XP.CORRECT_ANSWER
      + (correct === answered.length && answered.length > 0 ? XP.PERFECT_ROUND : 0)
      + XP.GAME_PARTICIPATION;

    setFinalXp(xp);

    const result: GameSessionResult = {
      gameMode: 'vocab_blitz',
      score,
      maxScore: TOTAL_WORDS * 100,
      correctAnswers: correct,
      totalQuestions: answered.length,
      xpEarned: xp,
      timeElapsed: elapsed,
      answeredItems: answered,
    };
    recordGame(result);
    setPhase('results');
  }, [answered, score, recordGame]);

  // Check if game should end
  useEffect(() => {
    if (phase === 'playing' && (lives <= 0 || currentIdx >= words.length)) {
      endGame();
    }
  }, [lives, currentIdx, words.length, phase, endGame]);

  const handleSubmit = () => {
    if (!currentWord || phase !== 'playing' || isProcessing) return;
    setIsProcessing(true);
    const responseTime = Date.now() - wordStartTime.current;
    const correct = isAnswerAcceptable(typedAnswer, currentWord.translation);

    const item: AnsweredItem = {
      contentId: currentWord.id,
      contentType: 'vocab',
      wasCorrect: correct,
      responseTime,
      userAnswer: typedAnswer,
      correctAnswer: currentWord.translation,
    };
    setAnswered((prev) => [...prev, item]);

    if (correct) {
      const comboBonus = combo * 5;
      setScore((s) => s + 100 + comboBonus);
      setCombo((c) => c + 1);
      setFeedback('correct');
    } else {
      setLives((l) => l - 1);
      setCombo(0);
      setFeedback('incorrect');
    }

    setTimeout(() => {
      setFeedback(null);
      setTypedAnswer('');
      setIsProcessing(false);
      setCurrentIdx((i) => i + 1);
      wordStartTime.current = Date.now();
      setTimerKey((k) => k + 1);
      inputRef.current?.focus();
    }, 800);
  };

  const handleTimeUp = useCallback(() => {
    if (!currentWord || phase !== 'playing' || isProcessing) return;
    setAnswered((prev) => [
      ...prev,
      {
        contentId: currentWord.id,
        contentType: 'vocab',
        wasCorrect: false,
        responseTime: GAME_TIMERS.VOCAB_BLITZ_FALL_SPEED,
        userAnswer: '',
        correctAnswer: currentWord.translation,
      },
    ]);
    setLives((l) => l - 1);
    setCombo(0);
    setFeedback('incorrect');
    setTimeout(() => {
      setFeedback(null);
      setTypedAnswer('');
      setIsProcessing(false);
      setCurrentIdx((i) => i + 1);
      wordStartTime.current = Date.now();
      setTimerKey((k) => k + 1);
    }, 800);
  }, [currentWord, phase, isProcessing]);

  // ── Ready Phase ─────────────────────────────────────────────
  if (phase === 'ready') {
    return (
      <View style={[styles.screen, styles.center, { paddingTop: insets.top }]}>
        <Text style={styles.readyEmoji}>⚡</Text>
        <Text style={styles.readyTitle}>Vocab Blitz</Text>
        <Text style={styles.readyDesc}>
          A {meta.name} word appears — type its English translation before time runs out!
        </Text>
        <Text style={styles.readyRule}>❤️ {LIVES} lives  •  📝 {TOTAL_WORDS} words</Text>
        <Button
          title="Start!"
          onPress={() => { initRound(); setPhase('playing'); }}
          size="lg"
          style={{ marginTop: Spacing.xl }}
        />
        <Button
          title="← Back"
          onPress={() => navigation.goBack()}
          variant="ghost"
          style={{ marginTop: Spacing.sm }}
        />
      </View>
    );
  }

  // ── Results Phase ───────────────────────────────────────────
  if (phase === 'results') {
    const correct = answered.filter((a) => a.wasCorrect).length;
    const pct = answered.length > 0 ? Math.round((correct / answered.length) * 100) : 0;
    return (
      <View style={[styles.screen, styles.center, { paddingTop: insets.top }]}>
        <Text style={styles.resultEmoji}>{pct >= 70 ? '🎉' : '💪'}</Text>
        <Text style={styles.resultTitle}>{pct >= 70 ? 'Great Blitz!' : 'Keep Practicing!'}</Text>
        <Text style={styles.resultScore}>Score: {score}</Text>
        <Text style={styles.resultDetail}>{correct}/{answered.length} correct ({pct}%)</Text>
        <Text style={styles.resultXp}>+{finalXp} XP</Text>
        <Button title="Play Again" onPress={() => { initRound(); setPhase('playing'); }} style={{ marginTop: Spacing.lg }} />
        <Button title="← Back to Arcade" onPress={() => navigation.goBack()} variant="ghost" style={{ marginTop: Spacing.sm }} />
      </View>
    );
  }

  // ── Playing Phase ───────────────────────────────────────────
  if (!currentWord) return null;

  return (
    <View style={[styles.screen, { paddingTop: insets.top + Spacing.sm }]}>
      {/* Exit button */}
      <ExitButton onExit={() => navigation.goBack()} />

      {/* HUD */}
      <View style={styles.hud}>
        <View style={styles.livesRow}>
          {Array.from({ length: LIVES }).map((_, i) => (
            <Text key={i} style={styles.heart}>{i < lives ? '❤️' : '🖤'}</Text>
          ))}
        </View>
        <ScoreDisplay score={score} />
      </View>

      {/* Timer */}
      <View style={styles.timerRow}>
        <Timer
          durationMs={GAME_TIMERS.VOCAB_BLITZ_FALL_SPEED}
          onTimeUp={handleTimeUp}
          resetKey={timerKey}
          isPaused={feedback !== null}
        />
      </View>

      {/* Combo */}
      {combo > 1 && (
        <Text style={styles.combo}>🔥 {combo}x Combo!</Text>
      )}

      {/* Word display */}
      <View style={styles.wordArea}>
        <Text style={styles.progressText}>Word {currentIdx + 1} of {words.length}</Text>
        <Text style={[
          styles.wordDisplay,
          feedback === 'correct' && styles.wordCorrect,
          feedback === 'incorrect' && styles.wordIncorrect,
        ]}>
          {currentWord.word}
        </Text>
        {currentWord.pronunciation && (
          <Text style={styles.pronunciation}>[{currentWord.pronunciation}]</Text>
        )}
        <SpeakButton text={currentWord.word} language={lang} size="md" style={{ marginTop: Spacing.sm }} />
      </View>

      {/* Input */}
      <View style={styles.inputArea}>
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder="Type the English translation…"
          placeholderTextColor={Colors.textLight}
          value={typedAnswer}
          onChangeText={setTypedAnswer}
          onSubmitEditing={handleSubmit}
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus
          editable={feedback === null}
        />
        <Button title="Submit" onPress={handleSubmit} disabled={!typedAnswer.trim() || feedback !== null} />
      </View>

      {/* Feedback */}
      {feedback && (
        <View style={[styles.feedbackBar, feedback === 'correct' ? styles.correctBar : styles.incorrectBar]}>
          <Text style={styles.feedbackText}>
            {feedback === 'correct'
              ? '✅ Correct!'
              : `❌ It was: ${currentWord.translation}`}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Colors.background, padding: Spacing.md },
  center: { justifyContent: 'center', alignItems: 'center' },
  // Ready
  readyEmoji: { fontSize: 64, marginBottom: Spacing.md },
  readyTitle: { fontSize: FontSizes.hero, fontWeight: FontWeights.bold, color: Colors.primary },
  readyDesc: { fontSize: FontSizes.md, color: Colors.textSecondary, textAlign: 'center', marginTop: Spacing.sm, lineHeight: 22, paddingHorizontal: Spacing.lg },
  readyRule: { fontSize: FontSizes.md, color: Colors.textPrimary, marginTop: Spacing.md, fontWeight: FontWeights.medium },
  // HUD
  hud: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: Spacing.sm },
  livesRow: { flexDirection: 'row', gap: 4 },
  heart: { fontSize: 20 },
  timerRow: { marginBottom: Spacing.sm },
  combo: { fontSize: FontSizes.md, fontWeight: FontWeights.bold, color: Colors.comboBlue, textAlign: 'center', marginBottom: Spacing.xs },
  // Word
  wordArea: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  progressText: { fontSize: FontSizes.sm, color: Colors.textSecondary, marginBottom: Spacing.sm },
  wordDisplay: {
    fontSize: 48,
    fontWeight: FontWeights.bold,
    color: Colors.textPrimary,
    textAlign: 'center',
  },
  wordCorrect: { color: Colors.correctGreen },
  wordIncorrect: { color: Colors.incorrectRed },
  pronunciation: { fontSize: FontSizes.md, color: Colors.textLight, marginTop: Spacing.xs },
  // Input
  inputArea: { gap: Spacing.sm, marginBottom: Spacing.md },
  input: {
    backgroundColor: Colors.surface,
    borderWidth: 2,
    borderColor: Colors.border,
    borderRadius: BorderRadius.md,
    paddingVertical: Spacing.sm + 4,
    paddingHorizontal: Spacing.md,
    fontSize: FontSizes.lg,
    color: Colors.textPrimary,
    textAlign: 'center',
  },
  // Feedback
  feedbackBar: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.md,
    marginBottom: Spacing.sm,
  },
  correctBar: { backgroundColor: '#E6FFF5' },
  incorrectBar: { backgroundColor: '#FFF0ED' },
  feedbackText: { fontSize: FontSizes.md, fontWeight: FontWeights.semibold, textAlign: 'center' },
  // Results
  resultEmoji: { fontSize: 64, marginBottom: Spacing.md },
  resultTitle: { fontSize: FontSizes.xxl, fontWeight: FontWeights.bold, color: Colors.textPrimary },
  resultScore: { fontSize: FontSizes.xl, fontWeight: FontWeights.bold, color: Colors.primary, marginTop: Spacing.sm },
  resultDetail: { fontSize: FontSizes.md, color: Colors.textSecondary, marginTop: Spacing.xs },
  resultXp: { fontSize: FontSizes.lg, fontWeight: FontWeights.bold, color: Colors.xpGold, marginTop: Spacing.xs },
});
