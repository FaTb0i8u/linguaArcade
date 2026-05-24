/**
 * Lesson selection & execution screen.
 *
 * Shows available categories, lets the user pick one, runs the
 * lesson steps, and records results on completion.
 */

import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { showAlert } from '../../utils/alert';
import { isAnswerAcceptable } from '../../utils/answer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, Spacing, FontSizes, FontWeights, BorderRadius, Shadows } from '../../config/theme';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { ProgressBar } from '../../components/common/ProgressBar';
import { SpeakButton } from '../../components/common/SpeakButton';
import { speak } from '../../utils/speech';
import { LessonEngine } from '../../engines/lesson';
import { SRSEngine } from '../../services/srs';
import { useProgress } from '../../context/ProgressContext';
import { useAuth } from '../../context/AuthContext';
import { getLanguageMeta } from '../../data/registry';
import type { Lesson, LessonStep, ConjugationPattern, ConjugationEntry, GrammarRule, AnsweredItem } from '../../types';

type Phase = 'select' | 'running' | 'results';

export function LessonScreen() {
  const insets = useSafeAreaInsets();
  const { recordLesson, addWords } = useProgress();
  const { user } = useAuth();

  const lang = user?.currentLanguage ?? 'es';
  const level = user?.currentLevel ?? 'A1';
  const meta = getLanguageMeta(lang);
  const showConjugations = LessonEngine.hasConjugations(lang, level);

  const [phase, setPhase] = useState<Phase>('select');
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [typedAnswer, setTypedAnswer] = useState('');
  const [showResult, setShowResult] = useState<'correct' | 'incorrect' | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Track score/total via refs to avoid stale closure in setTimeout → advanceStep
  const scoreRef = useRef(0);
  const totalRef = useRef(0);
  // Track unique content IDs answered correctly (for accurate "words learned" count)
  const correctContentIds = useRef(new Set<string>());

  const categories = LessonEngine.getAvailableVocabCategories(lang, level);
  const patterns = showConjugations ? LessonEngine.getAvailablePatterns(lang, level) : [];
  const irregularVerbs = showConjugations ? LessonEngine.getIrregularVerbs(lang, level) : [];
  const grammarRules = LessonEngine.getAvailableGrammarRules(lang, level);

  // SRS review count
  const [dueReviewCount, setDueReviewCount] = useState(0);
  useEffect(() => {
    LessonEngine.getDueReviewCount().then(setDueReviewCount);
  }, [phase]); // refresh when returning to select phase

  // Track answered items for SRS feed
  const answeredItems = useRef<AnsweredItem[]>([]);
  const stepStartTime = useRef<number>(Date.now());

  const startVocabLesson = (category: string) => {
    const l = LessonEngine.buildVocabLesson(lang, level, category);
    setLesson(l);
    setStepIndex(0);
    setScore(0); scoreRef.current = 0;
    setTotalAnswered(0); totalRef.current = 0;
    correctContentIds.current = new Set();
    answeredItems.current = [];
    stepStartTime.current = Date.now();
    setPhase('running');
  };

  const startPatternLesson = (patternId: string) => {
    const l = LessonEngine.buildConjugationPatternLesson(lang, level, patternId);
    setLesson(l);
    setStepIndex(0);
    setScore(0); scoreRef.current = 0;
    setTotalAnswered(0); totalRef.current = 0;
    correctContentIds.current = new Set();
    answeredItems.current = [];
    stepStartTime.current = Date.now();
    setPhase('running');
  };

  const startIrregularLesson = (infinitive: string) => {
    const l = LessonEngine.buildIrregularVerbLesson(lang, level, infinitive);
    setLesson(l);
    setStepIndex(0);
    setScore(0); scoreRef.current = 0;
    setTotalAnswered(0); totalRef.current = 0;
    correctContentIds.current = new Set();
    answeredItems.current = [];
    stepStartTime.current = Date.now();
    setPhase('running');
  };

  const startGrammarLesson = (ruleId: string) => {
    const l = LessonEngine.buildGrammarLesson(lang, level, ruleId);
    setLesson(l);
    setStepIndex(0);
    setScore(0); scoreRef.current = 0;
    setTotalAnswered(0); totalRef.current = 0;
    correctContentIds.current = new Set();
    answeredItems.current = [];
    stepStartTime.current = Date.now();
    setPhase('running');
  };

  const startReviewLesson = async () => {
    const l = await LessonEngine.buildReviewLesson(lang, level);
    if (!l) {
      showAlert('All caught up!', 'No items are due for review right now. Keep learning!');
      return;
    }
    setLesson(l);
    setStepIndex(0);
    setScore(0); scoreRef.current = 0;
    setTotalAnswered(0); totalRef.current = 0;
    correctContentIds.current = new Set();
    answeredItems.current = [];
    stepStartTime.current = Date.now();
    setPhase('running');
  };

  const currentStep: LessonStep | null = lesson ? lesson.steps[stepIndex] ?? null : null;

  // Auto-speak the target word/prompt when introducing new vocabulary
  useEffect(() => {
    if (phase === 'running' && currentStep?.type === 'introduce' && currentStep.speakText) {
      speak({ text: currentStep.speakText, language: lang });
    }
  }, [stepIndex, phase]);

  const advanceStep = useCallback(() => {
    setShowResult(null);
    setTypedAnswer('');
    setSelectedOption(null);
    stepStartTime.current = Date.now();
    if (lesson && stepIndex < lesson.steps.length - 1) {
      setStepIndex((i) => i + 1);
    } else {
      // Lesson complete — use refs to get current values (avoids stale closure via setTimeout)
      setPhase('results');
      recordLesson(scoreRef.current, totalRef.current, answeredItems.current);
      addWords(correctContentIds.current.size);
    }
  }, [lesson, stepIndex, recordLesson, addWords]);

  const handleAnswer = (answer: string) => {
    if (!currentStep) return;
    setSelectedOption(answer);
    // For type_answer steps, use flexible matching that accepts the base word
    // without parenthetical annotations (e.g. "hello" matches "hello (formal)").
    const isCorrect = currentStep.type === 'type_answer'
      ? isAnswerAcceptable(answer, currentStep.correctAnswer)
      : answer.toLowerCase().trim() === currentStep.correctAnswer.toLowerCase().trim();
    const responseTime = Date.now() - stepStartTime.current;
    setTotalAnswered((t) => { totalRef.current = t + 1; return t + 1; });

    // Track for SRS
    answeredItems.current.push({
      contentId: currentStep.contentId,
      contentType: currentStep.contentType,
      wasCorrect: isCorrect,
      responseTime,
      userAnswer: answer,
      correctAnswer: currentStep.correctAnswer,
    });

    if (isCorrect) {
      setScore((s) => { scoreRef.current = s + 1; return s + 1; });
      if (currentStep.contentType === 'vocab') {
        correctContentIds.current.add(currentStep.contentId);
      }
      setShowResult('correct');
    } else {
      setShowResult('incorrect');
    }
    // Auto-advance after a short delay
    setTimeout(advanceStep, 1200);
  };

  const handleTypeSubmit = () => {
    handleAnswer(typedAnswer);
  };

  // ── Select Phase ────────────────────────────────────────────
  if (phase === 'select') {
    return (
      <ScrollView
        style={styles.screen}
        contentContainerStyle={[styles.content, { paddingTop: insets.top + Spacing.md }]}
      >
        <Text style={styles.heading}>📚 {meta.name} Lessons</Text>
        <Text style={styles.desc}>Choose a topic to practice. {meta.flag}</Text>

        <Text style={styles.sectionTitle}>Vocabulary</Text>
        <View style={styles.grid}>
          {categories.map((cat) => (
            <TouchableOpacity key={cat} style={styles.categoryCard} onPress={() => startVocabLesson(cat)}>
              <Text style={styles.catEmoji}>{getCategoryEmoji(cat)}</Text>
              <Text style={styles.catName}>{capitalize(cat)}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {showConjugations && patterns.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Conjugation Rules</Text>
            <Text style={styles.sectionDesc}>Learn the patterns — once you know the rule, you can conjugate any regular verb!</Text>
            <View style={styles.grid}>
              {patterns.map((p) => (
                <TouchableOpacity key={p.id} style={styles.categoryCard} onPress={() => startPatternLesson(p.id)}>
                  <Text style={styles.catEmoji}>📐</Text>
                  <Text style={styles.catName}>{p.verbEnding}</Text>
                  <Text style={styles.catSub}>{p.tense}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}

        {showConjugations && irregularVerbs.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Exceptions (Irregular Verbs)</Text>
            <Text style={styles.sectionDesc}>These verbs break the rules — they must be memorized individually.</Text>
            <View style={styles.grid}>
              {irregularVerbs.map((verb) => (
                <TouchableOpacity key={verb.id} style={[styles.categoryCard, styles.irregularCard]} onPress={() => startIrregularLesson(verb.infinitive)}>
                  <Text style={styles.catEmoji}>⚠️</Text>
                  <Text style={styles.catName}>{verb.infinitive}</Text>
                  <Text style={styles.catSub}>{verb.translation}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}

        {grammarRules.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Grammar Rules</Text>
            <Text style={styles.sectionDesc}>Learn the building blocks of {meta.name} grammar.</Text>
            <View style={styles.grid}>
              {grammarRules.map((rule) => (
                <TouchableOpacity key={rule.id} style={styles.categoryCard} onPress={() => startGrammarLesson(rule.id)}>
                  <Text style={styles.catEmoji}>📏</Text>
                  <Text style={styles.catName}>{rule.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}

        {dueReviewCount > 0 && (
          <>
            <Text style={styles.sectionTitle}>🔄 Review</Text>
            <TouchableOpacity style={[styles.categoryCard, styles.reviewCard]} onPress={startReviewLesson}>
              <Text style={styles.catEmoji}>🧠</Text>
              <Text style={styles.catName}>Review Due Items</Text>
              <Text style={styles.catSub}>{dueReviewCount} item{dueReviewCount !== 1 ? 's' : ''} due</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    );
  }

  // ── Results Phase ───────────────────────────────────────────
  if (phase === 'results') {
    const pct = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0;
    return (
      <View style={[styles.screen, styles.center]}>
        <Text style={styles.resultEmoji}>{pct >= 70 ? '🎉' : '💪'}</Text>
        <Text style={styles.resultTitle}>
          {pct >= 70 ? 'Great Job!' : 'Keep Practicing!'}
        </Text>
        <Text style={styles.resultScore}>{score} / {totalAnswered} correct ({pct}%)</Text>
        <Text style={styles.resultXp}>+{lesson?.xpReward ?? 0} XP</Text>
        <Button title="Back to Lessons" onPress={() => setPhase('select')} style={{ marginTop: Spacing.lg }} />
      </View>
    );
  }

  // ── Running Phase ───────────────────────────────────────────
  if (!currentStep || !lesson) return null;

  const progress = (stepIndex + 1) / lesson.steps.length;

  return (
    <View style={[styles.screen, { paddingTop: insets.top + Spacing.sm }]}>
      {/* Progress */}
      <View style={styles.progressRow}>
        <ProgressBar progress={progress} color={Colors.primary} />
        <Text style={styles.stepCounter}>{stepIndex + 1} / {lesson.steps.length}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.stepContainer}>
        {/* Teach Rule step — show the conjugation pattern with endings table */}
        {currentStep.type === 'teach_rule' && (
          <View style={styles.introBlock}>
            <Text style={styles.introEmoji}>📐</Text>
            <Text style={styles.introLabel}>Conjugation Rule</Text>
            <Text style={styles.ruleTitle}>{currentStep.prompt}</Text>
            {currentStep.hint && <Text style={styles.ruleDescription}>{currentStep.hint}</Text>}

            {/* Endings table */}
            {currentStep.endingsTable && currentStep.subjectLabels && (
              <View style={styles.endingsTable}>
                <Text style={styles.tableHeader}>Endings</Text>
                {Object.entries(currentStep.endingsTable).map(([key, ending]) => (
                  <View key={key} style={styles.tableRow}>
                    <Text style={styles.tableSubject}>{currentStep.subjectLabels?.[key] ?? key}</Text>
                    <Text style={styles.tableEnding}>{ending}</Text>
                  </View>
                ))}
              </View>
            )}

            {/* Tips */}
            {currentStep.tips && currentStep.tips.length > 0 && (
              <View style={styles.tipsContainer}>
                <Text style={styles.tipsHeader}>💡 Tips</Text>
                {currentStep.tips.map((tip, i) => (
                  <Text key={i} style={styles.tipText}>• {tip}</Text>
                ))}
              </View>
            )}

            <Button title="Got it!" onPress={advanceStep} style={{ marginTop: Spacing.lg }} />
          </View>
        )}

        {/* Show Example step — display a verb fully conjugated */}
        {currentStep.type === 'show_example' && (
          <View style={styles.introBlock}>
            <Text style={styles.introEmoji}>📝</Text>
            <Text style={styles.introLabel}>Example</Text>
            <Text style={styles.ruleTitle}>{currentStep.prompt}</Text>
            {currentStep.hint && <Text style={styles.introHint}>{currentStep.hint}</Text>}

            {/* Conjugation table */}
            {currentStep.exampleTable && currentStep.subjectLabels && (
              <View style={styles.endingsTable}>
                {Object.entries(currentStep.exampleTable).map(([key, form]) => (
                  <View key={key} style={styles.tableRow}>
                    <Text style={styles.tableSubject}>{currentStep.subjectLabels?.[key] ?? key}</Text>
                    <Text style={styles.tableForm}>{form}</Text>
                  </View>
                ))}
              </View>
            )}

            <Button title="Next" onPress={advanceStep} style={{ marginTop: Spacing.lg }} />
          </View>
        )}

        {/* Introduce step */}
        {currentStep.type === 'introduce' && (
          <View style={styles.introBlock}>
            <Text style={styles.introEmoji}>📖</Text>
            <Text style={styles.introLabel}>New Word</Text>
            <View style={styles.promptRow}>
              <Text style={styles.introPrompt}>{currentStep.prompt}</Text>
              <SpeakButton text={currentStep.speakText ?? currentStep.prompt} language={lang} size="md" />
            </View>
            {currentStep.hint && <Text style={styles.introHint}>{currentStep.hint}</Text>}
            <Button title="Got it!" onPress={advanceStep} style={{ marginTop: Spacing.lg }} />
          </View>
        )}

        {/* Multiple choice */}
        {currentStep.type === 'multiple_choice' && (
          <View style={styles.quizBlock}>
            <View style={styles.promptRow}>
              <Text style={styles.quizPrompt}>{currentStep.prompt}</Text>
              <SpeakButton text={currentStep.speakText ?? currentStep.correctAnswer} language={lang} size="sm" />
            </View>
            <View style={styles.optionsGrid}>
              {currentStep.options?.map((opt, idx) => {
                const isSelected = selectedOption === opt;
                const isCorrectAnswer = opt.toLowerCase().trim() === currentStep.correctAnswer.toLowerCase().trim();
                let btnStyle: any = styles.optionBtn;
                let txtStyle: any = styles.optionText;
                if (showResult !== null) {
                  if (isSelected && showResult === 'correct') {
                    btnStyle = [styles.optionBtn, styles.optionCorrect];
                    txtStyle = [styles.optionText, styles.optionTextFeedback];
                  } else if (isSelected && showResult === 'incorrect') {
                    btnStyle = [styles.optionBtn, styles.optionIncorrect];
                    txtStyle = [styles.optionText, styles.optionTextFeedback];
                  } else if (showResult === 'incorrect' && isCorrectAnswer) {
                    btnStyle = [styles.optionBtn, styles.optionCorrect];
                    txtStyle = [styles.optionText, styles.optionTextFeedback];
                  }
                }
                return (
                  <TouchableOpacity
                    key={idx}
                    style={btnStyle}
                    onPress={() => handleAnswer(opt)}
                    disabled={showResult !== null}
                  >
                    <Text style={txtStyle}>{opt}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        )}

        {/* Type answer */}
        {currentStep.type === 'type_answer' && (
          <View style={styles.quizBlock}>
            <View style={styles.promptRow}>
              <Text style={styles.quizPrompt}>{currentStep.prompt}</Text>
              <SpeakButton text={currentStep.speakText ?? currentStep.correctAnswer} language={lang} size="sm" />
            </View>
            {currentStep.hint && <Text style={styles.hintText}>💡 {currentStep.hint}</Text>}
            <TextInput
              style={[
                styles.typeInput,
                showResult === 'correct' && styles.typeInputCorrect,
                showResult === 'incorrect' && styles.typeInputIncorrect,
              ]}
              placeholder="Type your answer…"
              placeholderTextColor={Colors.textLight}
              value={typedAnswer}
              onChangeText={setTypedAnswer}
              onSubmitEditing={handleTypeSubmit}
              autoCapitalize="none"
              autoCorrect={false}
              editable={showResult === null}
            />
            {showResult === 'incorrect' && (
              <Text style={styles.correctAnswerHint}>Correct answer: {currentStep.correctAnswer}</Text>
            )}
            <Button
              title="Check"
              onPress={handleTypeSubmit}
              disabled={!typedAnswer.trim() || showResult !== null}
              style={{ marginTop: Spacing.sm }}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
}

// ── Helpers ──────────────────────────────────────────────────

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1).replace('_', ' ');
}

function getCategoryEmoji(cat: string): string {
  const map: Record<string, string> = {
    greetings: '👋',
    numbers: '🔢',
    family: '👨‍👩‍👧‍👦',
    food: '🍎',
    verbs: '🏃',
    adjectives: '🎨',
    places: '🏠',
    time: '⏰',
    questions: '❓',
    colors: '🌈',
    body: '🫀',
    weather: '🌤️',
    clothing: '👕',
  };
  return map[cat] ?? '📝';
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Colors.background },
  content: { padding: Spacing.md, paddingBottom: Spacing.xxl },
  center: { justifyContent: 'center', alignItems: 'center', padding: Spacing.lg },
  heading: {
    fontSize: FontSizes.xxl,
    fontWeight: FontWeights.bold,
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
  },
  desc: { fontSize: FontSizes.md, color: Colors.textSecondary, marginBottom: Spacing.lg },
  sectionTitle: {
    fontSize: FontSizes.lg,
    fontWeight: FontWeights.semibold,
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
    marginTop: Spacing.md,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  categoryCard: {
    width: '30%',
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    alignItems: 'center',
    ...Shadows.sm,
  },
  catEmoji: { fontSize: 28, marginBottom: 6 },
  catName: { fontSize: FontSizes.sm, fontWeight: FontWeights.medium, color: Colors.textPrimary, textAlign: 'center' },
  catSub: { fontSize: FontSizes.xs, color: Colors.textSecondary, textAlign: 'center', marginTop: 2 },
  irregularCard: { borderWidth: 1, borderColor: Colors.warning },
  reviewCard: { width: '95%', borderWidth: 1, borderColor: Colors.primary, backgroundColor: '#EEF6FF' },
  sectionDesc: { fontSize: FontSizes.sm, color: Colors.textSecondary, marginBottom: Spacing.sm },
  // Running phase
  progressRow: { paddingHorizontal: Spacing.md, marginBottom: Spacing.sm },
  stepCounter: { fontSize: FontSizes.xs, color: Colors.textSecondary, textAlign: 'right', marginTop: 4 },

  stepContainer: { padding: Spacing.md, flexGrow: 1 },
  // Introduce
  introBlock: { alignItems: 'center', paddingTop: Spacing.xl },
  introEmoji: { fontSize: 48, marginBottom: Spacing.sm },
  introLabel: { fontSize: FontSizes.md, color: Colors.textSecondary, marginBottom: Spacing.sm },
  introPrompt: {
    fontSize: FontSizes.xxl,
    fontWeight: FontWeights.bold,
    color: Colors.textPrimary,
    textAlign: 'center',
  },
  introHint: { fontSize: FontSizes.md, color: Colors.textSecondary, marginTop: Spacing.md, fontStyle: 'italic' },
  // Quiz
  quizBlock: { paddingTop: Spacing.lg },
  promptRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.sm,
    marginBottom: Spacing.lg,
  },
  quizPrompt: {
    fontSize: FontSizes.xl,
    fontWeight: FontWeights.semibold,
    color: Colors.textPrimary,
    textAlign: 'center',
    flexShrink: 1,
  },
  hintText: { fontSize: FontSizes.sm, color: Colors.textSecondary, textAlign: 'center', marginBottom: Spacing.md },
  optionsGrid: { gap: Spacing.sm },
  optionBtn: {
    backgroundColor: Colors.surface,
    borderWidth: 2,
    borderColor: Colors.border,
    borderRadius: BorderRadius.md,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    ...Shadows.sm,
  },
  optionCorrect: {
    backgroundColor: '#D4EDDA',
    borderColor: '#28A745',
  },
  optionIncorrect: {
    backgroundColor: '#F8D7DA',
    borderColor: '#DC3545',
  },
  optionText: { fontSize: FontSizes.md, fontWeight: FontWeights.medium, color: Colors.textPrimary, textAlign: 'center' },
  optionTextFeedback: { fontWeight: FontWeights.bold as any },
  typeInput: {
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
  typeInputCorrect: {
    borderColor: '#28A745',
    backgroundColor: '#D4EDDA',
  },
  typeInputIncorrect: {
    borderColor: '#DC3545',
    backgroundColor: '#F8D7DA',
  },
  correctAnswerHint: {
    fontSize: FontSizes.sm,
    color: '#28A745',
    textAlign: 'center' as const,
    marginTop: Spacing.xs,
    fontWeight: FontWeights.semibold,
  },
  // Rule / Example steps
  ruleTitle: {
    fontSize: FontSizes.xl,
    fontWeight: FontWeights.bold,
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: Spacing.sm,
  },
  ruleDescription: {
    fontSize: FontSizes.md,
    color: Colors.textPrimary,
    lineHeight: 24,
    marginBottom: Spacing.md,
    textAlign: 'left',
    paddingHorizontal: Spacing.sm,
  },
  endingsTable: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    marginVertical: Spacing.md,
    ...Shadows.sm,
  },
  tableHeader: {
    fontSize: FontSizes.md,
    fontWeight: FontWeights.bold,
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: Spacing.sm,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: Spacing.xs + 2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.border,
  },
  tableSubject: {
    fontSize: FontSizes.md,
    color: Colors.textSecondary,
    fontWeight: FontWeights.medium,
    flex: 1,
  },
  tableEnding: {
    fontSize: FontSizes.md,
    fontWeight: FontWeights.bold,
    color: Colors.accent,
    flex: 1,
    textAlign: 'right',
  },
  tableForm: {
    fontSize: FontSizes.md,
    fontWeight: FontWeights.bold,
    color: Colors.textPrimary,
    flex: 1,
    textAlign: 'right',
  },
  tipsContainer: {
    backgroundColor: '#FFF8E1',
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    marginTop: Spacing.sm,
  },
  tipsHeader: {
    fontSize: FontSizes.md,
    fontWeight: FontWeights.bold,
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
  },
  tipText: {
    fontSize: FontSizes.sm,
    color: Colors.textSecondary,
    lineHeight: 20,
    marginBottom: Spacing.xs,
  },
  // Results
  resultEmoji: { fontSize: 64, marginBottom: Spacing.md },
  resultTitle: {
    fontSize: FontSizes.xxl,
    fontWeight: FontWeights.bold,
    color: Colors.textPrimary,
  },
  resultScore: { fontSize: FontSizes.lg, color: Colors.textSecondary, marginTop: Spacing.sm },
  resultXp: {
    fontSize: FontSizes.xl,
    fontWeight: FontWeights.bold,
    color: Colors.xpGold,
    marginTop: Spacing.sm,
  },
});
