/**
 * Conjugation Fighter — Street-Fighter-inspired verb conjugation game.
 *
 * The player faces an AI opponent. Each round, a conjugation prompt appears.
 * Correct answer = player attacks (opponent loses HP).
 * Wrong answer or timeout = opponent attacks (player loses HP).
 * First to 0 HP loses.
 */

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ArcadeStackParamList, AnsweredItem, GameSessionResult, ConjugationEntry } from '../../types';
import { getLevelContent } from '../../data/registry';
import { useAuth } from '../../context/AuthContext';
import { shuffle } from '../../utils/array';
import { Colors, Spacing, FontSizes, FontWeights, BorderRadius, Shadows } from '../../config/theme';
import { Button } from '../../components/common/Button';
import { HealthBar } from '../../components/games/HealthBar';
import { FighterCharacter } from '../../components/games/FighterCharacter';
import { Timer } from '../../components/games/Timer';
import { ScoreDisplay } from '../../components/games/ScoreDisplay';
import { GAME_TIMERS, XP } from '../../config/constants';
import { useProgress } from '../../context/ProgressContext';

type Props = NativeStackScreenProps<ArcadeStackParamList, 'ConjugationFighter'>;

const MAX_HP = 100;
const DAMAGE = 20;
const ROUNDS = GAME_TIMERS.FIGHTER_ROUNDS;

type Phase = 'ready' | 'fighting' | 'results';
type FighterAction = 'idle' | 'attack' | 'defend' | 'hurt' | 'victory' | 'defeat';

interface Round {
  verb: ConjugationEntry;
  subject: string;
  correctAnswer: string;
  options: string[];
}

function buildRounds(conjugations: ConjugationEntry[], count: number): Round[] {
  const rounds: Round[] = [];

  for (let i = 0; i < count; i++) {
    const verb = conjugations[Math.floor(Math.random() * conjugations.length)];
    const subjects = Object.keys(verb.conjugations);
    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    const correct = verb.conjugations[subject];

    // Distractors are OTHER conjugations of the SAME verb
    const sameVerbForms = Object.entries(verb.conjugations)
      .filter(([key]) => key !== subject)
      .map(([, val]) => val);
    const distractors = shuffle(sameVerbForms).slice(0, 3);

    rounds.push({
      verb,
      subject,
      correctAnswer: correct,
      options: shuffle([correct, ...distractors]),
    });
  }
  return rounds;
}

export function ConjugationFighterScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const { recordGame } = useProgress();
  const { user } = useAuth();

  const lang = user?.currentLanguage ?? 'es';
  const level = user?.currentLevel ?? 'A1';
  const content = getLevelContent(lang, level);

  const [phase, setPhase] = useState<Phase>('ready');
  const [rounds, setRounds] = useState<Round[]>([]);
  const [roundIdx, setRoundIdx] = useState(0);
  const [playerHP, setPlayerHP] = useState(MAX_HP);
  const [enemyHP, setEnemyHP] = useState(MAX_HP);
  const [playerAction, setPlayerAction] = useState<FighterAction>('idle');
  const [enemyAction, setEnemyAction] = useState<FighterAction>('idle');
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<AnsweredItem[]>([]);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [timerKey, setTimerKey] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const startTime = useRef(Date.now());
  const roundStartTime = useRef(Date.now());

  const currentRound = rounds[roundIdx] ?? null;

  const initGame = useCallback(() => {
    setRounds(buildRounds(content.conjugations, ROUNDS));
    setRoundIdx(0);
    setPlayerHP(MAX_HP);
    setEnemyHP(MAX_HP);
    setPlayerAction('idle');
    setEnemyAction('idle');
    setScore(0);
    setAnswered([]);
    setFeedback(null);
    setIsProcessing(false);
    startTime.current = Date.now();
    roundStartTime.current = Date.now();
    setTimerKey((k) => k + 1);
  }, []);

  const endGame = useCallback((pHP: number, eHP: number) => {
    const won = pHP > 0 && eHP <= 0;
    setPlayerAction(won ? 'victory' : 'defeat');
    setEnemyAction(won ? 'defeat' : 'victory');

    const correct = answered.filter((a) => a.wasCorrect).length;
    const elapsed = (Date.now() - startTime.current) / 1000;
    const xp = correct * XP.CORRECT_ANSWER + (won ? XP.GAME_WIN : XP.GAME_PARTICIPATION);

    const result: GameSessionResult = {
      gameMode: 'conjugation_fighter',
      score,
      maxScore: ROUNDS * 100,
      correctAnswers: correct,
      totalQuestions: answered.length,
      xpEarned: xp,
      timeElapsed: elapsed,
      answeredItems: answered,
    };
    recordGame(result);
    setPhase('results');
  }, [answered, score, recordGame]);

  // Check for game end
  useEffect(() => {
    if (phase !== 'fighting') return;
    if (playerHP <= 0 || enemyHP <= 0 || roundIdx >= rounds.length) {
      endGame(playerHP, enemyHP);
    }
  }, [playerHP, enemyHP, roundIdx, rounds.length, phase, endGame]);

  const processAnswer = useCallback((selectedAnswer: string) => {
    if (!currentRound || isProcessing) return;
    setIsProcessing(true);

    const responseTime = Date.now() - roundStartTime.current;
    const correct = selectedAnswer === currentRound.correctAnswer;

    setAnswered((prev) => [...prev, {
      contentId: currentRound.verb.id,
      contentType: 'conjugation',
      wasCorrect: correct,
      responseTime,
      userAnswer: selectedAnswer,
      correctAnswer: currentRound.correctAnswer,
    }]);

    if (correct) {
      setScore((s) => s + 100);
      setPlayerAction('attack');
      setEnemyAction('hurt');
      setEnemyHP((hp) => Math.max(0, hp - DAMAGE));
      setFeedback(`✅ Correct! ${currentRound.verb.infinitive} → ${currentRound.correctAnswer}`);
    } else {
      setEnemyAction('attack');
      setPlayerAction('hurt');
      setPlayerHP((hp) => Math.max(0, hp - DAMAGE));
      setFeedback(`❌ Answer: ${currentRound.correctAnswer}`);
    }

    setTimeout(() => {
      setPlayerAction('idle');
      setEnemyAction('idle');
      setFeedback(null);
      setIsProcessing(false);
      setRoundIdx((i) => i + 1);
      roundStartTime.current = Date.now();
      setTimerKey((k) => k + 1);
    }, 1500);
  }, [currentRound, isProcessing]);

  const handleTimeUp = useCallback(() => {
    if (!currentRound || isProcessing) return;
    processAnswer('__timeout__');
  }, [currentRound, isProcessing, processAnswer]);

  // ── Ready Phase ─────────────────────────────────────────────
  if (phase === 'ready') {
    return (
      <View style={[styles.screen, styles.center, { paddingTop: insets.top }]}>
        <Text style={styles.readyEmoji}>🥊</Text>
        <Text style={styles.readyTitle}>Conjugation Fighter</Text>
        <Text style={styles.readyDesc}>
          Conjugate verbs correctly to attack your opponent!{'\n'}
          Wrong answers or timeouts — they attack YOU!
        </Text>
        <Text style={styles.readyRule}>❤️ {MAX_HP} HP  •  💥 {DAMAGE} damage  •  ⏱️ {GAME_TIMERS.FIGHTER_ANSWER_TIME / 1000}s per round</Text>
        <Button title="FIGHT!" onPress={() => { initGame(); setPhase('fighting'); }} size="lg" variant="danger" style={{ marginTop: Spacing.xl }} />
        <Button title="← Back" onPress={() => navigation.goBack()} variant="ghost" style={{ marginTop: Spacing.sm }} />
      </View>
    );
  }

  // ── Results Phase ───────────────────────────────────────────
  if (phase === 'results') {
    const won = playerHP > 0 && enemyHP <= 0;
    const correct = answered.filter((a) => a.wasCorrect).length;
    const xp = correct * XP.CORRECT_ANSWER + (won ? XP.GAME_WIN : XP.GAME_PARTICIPATION);
    return (
      <View style={[styles.screen, styles.center, { paddingTop: insets.top }]}>
        <Text style={styles.resultEmoji}>{won ? '🏆' : '😤'}</Text>
        <Text style={styles.resultTitle}>{won ? 'You Win!' : 'You Lost!'}</Text>
        <Text style={styles.resultScore}>Score: {score}</Text>
        <Text style={styles.resultDetail}>{correct}/{answered.length} correct</Text>
        <Text style={styles.resultXp}>+{xp} XP</Text>
        <Button title="Rematch" onPress={() => { initGame(); setPhase('fighting'); }} style={{ marginTop: Spacing.lg }} />
        <Button title="← Back to Arcade" onPress={() => navigation.goBack()} variant="ghost" style={{ marginTop: Spacing.sm }} />
      </View>
    );
  }

  // ── Fighting Phase ──────────────────────────────────────────
  if (!currentRound) return null;

  return (
    <View style={[styles.screen, { paddingTop: insets.top + Spacing.xs }]}>
      {/* Health bars */}
      <View style={styles.healthRow}>
        <HealthBar current={playerHP} max={MAX_HP} label="You" side="left" />
        <Text style={styles.vs}>VS</Text>
        <HealthBar current={enemyHP} max={MAX_HP} label="Enemy" side="right" />
      </View>

      {/* Characters */}
      <View style={styles.arena}>
        <FighterCharacter name="You" action={playerAction} side="left" isPlayer />
        <FighterCharacter name="Enemy" action={enemyAction} side="right" isPlayer={false} />
      </View>

      {/* Score & Timer */}
      <View style={styles.hudRow}>
        <ScoreDisplay score={score} />
        <Text style={styles.roundText}>Round {roundIdx + 1}/{rounds.length}</Text>
      </View>

      <View style={styles.timerRow}>
        <Timer
          durationMs={GAME_TIMERS.FIGHTER_ANSWER_TIME}
          onTimeUp={handleTimeUp}
          resetKey={timerKey}
          isPaused={isProcessing}
        />
      </View>

      {/* Prompt */}
      <View style={styles.promptArea}>
        <Text style={styles.promptLabel}>Conjugate:</Text>
        <Text style={styles.promptVerb}>
          {currentRound.verb.infinitive} ({currentRound.verb.translation})
        </Text>
        <Text style={styles.promptSubject}>
          for → <Text style={styles.subjectHighlight}>{currentRound.verb.subjectLabels[currentRound.subject] ?? currentRound.subject}</Text>
        </Text>
      </View>

      {/* Options */}
      <View style={styles.optionsGrid}>
        {currentRound.options.map((opt, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.optionBtn}
            onPress={() => processAnswer(opt)}
            disabled={isProcessing}
            activeOpacity={0.7}
          >
            <Text style={styles.optionText}>{opt}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Feedback */}
      {feedback && (
        <View style={styles.feedbackBar}>
          <Text style={styles.feedbackText}>{feedback}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#1A1A2E', padding: Spacing.md },
  center: { justifyContent: 'center', alignItems: 'center' },
  // Ready
  readyEmoji: { fontSize: 64, marginBottom: Spacing.md },
  readyTitle: { fontSize: FontSizes.hero, fontWeight: FontWeights.bold, color: Colors.danger },
  readyDesc: { fontSize: FontSizes.md, color: Colors.textSecondary, textAlign: 'center', marginTop: Spacing.sm, lineHeight: 22, paddingHorizontal: Spacing.md },
  readyRule: { fontSize: FontSizes.sm, color: Colors.textPrimary, marginTop: Spacing.md, fontWeight: FontWeights.medium },
  // Health
  healthRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm, marginBottom: Spacing.sm },
  vs: { fontSize: FontSizes.md, fontWeight: FontWeights.bold, color: Colors.danger },
  // Arena
  arena: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: Spacing.md,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: BorderRadius.lg,
    marginBottom: Spacing.sm,
  },
  // HUD
  hudRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: Spacing.xs },
  roundText: { fontSize: FontSizes.sm, color: Colors.textLight },
  timerRow: { marginBottom: Spacing.sm },
  // Prompt
  promptArea: { alignItems: 'center', marginBottom: Spacing.md },
  promptLabel: { fontSize: FontSizes.sm, color: Colors.textLight },
  promptVerb: { fontSize: FontSizes.xl, fontWeight: FontWeights.bold, color: Colors.white, marginTop: 4 },
  promptSubject: { fontSize: FontSizes.lg, color: Colors.textLight, marginTop: 4 },
  subjectHighlight: { color: Colors.warning, fontWeight: FontWeights.bold },
  // Options
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
    justifyContent: 'center',
  },
  optionBtn: {
    width: '47%',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderWidth: 2,
    borderColor: Colors.primaryLight,
    borderRadius: BorderRadius.md,
    paddingVertical: Spacing.md,
    alignItems: 'center',
  },
  optionText: { fontSize: FontSizes.lg, fontWeight: FontWeights.semibold, color: Colors.white },
  // Feedback
  feedbackBar: {
    marginTop: Spacing.sm,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.md,
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
  feedbackText: { fontSize: FontSizes.md, fontWeight: FontWeights.semibold, color: Colors.white, textAlign: 'center' },
  // Results
  resultEmoji: { fontSize: 64, marginBottom: Spacing.md },
  resultTitle: { fontSize: FontSizes.xxl, fontWeight: FontWeights.bold, color: Colors.white },
  resultScore: { fontSize: FontSizes.xl, fontWeight: FontWeights.bold, color: Colors.primary, marginTop: Spacing.sm },
  resultDetail: { fontSize: FontSizes.md, color: Colors.textLight, marginTop: Spacing.xs },
  resultXp: { fontSize: FontSizes.lg, fontWeight: FontWeights.bold, color: Colors.xpGold, marginTop: Spacing.xs },
});
