/**
 * Lesson Engine
 *
 * Generates structured lessons from the content registry.
 * Language-agnostic — works with any registered language pack.
 * Each lesson mixes introduction steps with practice exercises,
 * applying interleaving and progressive difficulty.
 */

import type { Lesson, LessonStep, VocabWord, ConjugationEntry, ConjugationPattern, GrammarRule, SRSCard, SupportedLanguage, CEFRLevel } from '../types';
import { shuffle, pickRandom, generateDistractors } from '../utils/array';
import { getLevelContent, getLanguageMeta } from '../data/registry';
import { SRSEngine } from '../services/srs';

/**
 * Extract the verb stem from an infinitive.
 * Language-aware: Spanish drops 2 chars (-ar/-er/-ir), Korean drops 1 (다).
 */
function getVerbStem(infinitive: string, lang: SupportedLanguage): string {
  switch (lang) {
    case 'ko':
      return infinitive.endsWith('다') ? infinitive.slice(0, -1) : infinitive;
    case 'es':
    case 'fr':
    case 'pt':
    case 'it':
      // Romance languages: drop 2-char infinitive ending (-ar, -er, -ir, -re)
      return infinitive.slice(0, -2);
    case 'de':
      // German: drop -en or -n
      if (infinitive.endsWith('en')) return infinitive.slice(0, -2);
      if (infinitive.endsWith('n')) return infinitive.slice(0, -1);
      return infinitive;
    default:
      return infinitive.slice(0, -2);
  }
}

/**
 * CEFR-recommended category order for A1 vocabulary.
 * Categories not listed here appear at the end alphabetically.
 */
const CATEGORY_ORDER: string[] = [
  'greetings',
  'numbers',
  'family',
  'colors',
  'food',
  'body',
  'clothing',
  'weather',
  'places',
  'time',
  'verbs',
  'adjectives',
  'questions',
];

// ──────────────────────────────────────────────────────────────
// Public API
// ──────────────────────────────────────────────────────────────

export const LessonEngine = {
  /**
   * Build a vocabulary lesson for a given category.
   * Introduces 5 words then quizzes them with multiple choice + typing.
   */
  buildVocabLesson(lang: SupportedLanguage, level: CEFRLevel, category: string): Lesson {
    const content = getLevelContent(lang, level);
    const meta = getLanguageMeta(lang);

    const pool = content.vocab.filter((w) => w.category === category);
    const selected = pickRandom(pool, 5);

    const steps: LessonStep[] = [];

    // Phase 1 — Introduce each word
    for (const word of selected) {
      steps.push({
        type: 'introduce',
        contentId: word.id,
        contentType: 'vocab',
        prompt: `${word.word} — ${word.translation}`,
        correctAnswer: word.translation,
        hint: word.exampleSentence,
      });
    }

    // Phase 2 — Multiple choice (English → target language)
    for (const word of shuffle(selected)) {
      const distractors = generateDistractors(
        word.word,
        content.vocab.map((w) => w.word),
      );
      steps.push({
        type: 'multiple_choice',
        contentId: word.id,
        contentType: 'vocab',
        prompt: `What is "${word.translation}" in ${meta.name}?`,
        correctAnswer: word.word,
        options: shuffle([word.word, ...distractors]),
      });
    }

    // Phase 3 — Type the translation (target language → English)
    for (const word of shuffle(selected)) {
      steps.push({
        type: 'type_answer',
        contentId: word.id,
        contentType: 'vocab',
        prompt: `Translate: "${word.word}"`,
        correctAnswer: word.translation,
        hint: word.exampleSentence,
      });
    }

    return {
      id: `lesson_vocab_${category}_${Date.now()}`,
      language: lang,
      level,
      category,
      title: `Vocabulary: ${category.charAt(0).toUpperCase() + category.slice(1)}`,
      description: `Learn ${selected.length} new ${category} words.`,
      steps,
      xpReward: 50,
    };
  },

  /**
   * Build a conjugation PATTERN lesson that teaches the RULE first,
   * then shows example verbs, then quizzes the student.
   *
   * Flow: teach rule → show 2-3 examples → quiz conjugations
   */
  buildConjugationPatternLesson(lang: SupportedLanguage, level: CEFRLevel, patternId: string): Lesson {
    const content = getLevelContent(lang, level);
    const meta = getLanguageMeta(lang);

    const pattern = content.conjugationPatterns.find((p) => p.id === patternId);
    if (!pattern) throw new Error(`Pattern "${patternId}" not found in ${lang} ${level} data.`);

    // Gather the example verb entries for this pattern
    const exampleEntries = pattern.exampleVerbs
      .map((inf) => content.conjugations.find((c) => c.infinitive === inf))
      .filter((e): e is ConjugationEntry => e != null);

    const steps: LessonStep[] = [];
    const subjects = Object.keys(pattern.endings);

    // ─ Phase 1: Teach the rule ─────────────────────────────────
    steps.push({
      type: 'teach_rule',
      contentId: pattern.id,
      contentType: 'conjugation',
      prompt: pattern.name,
      correctAnswer: pattern.verbEnding,
      hint: `${pattern.description}\n\n${pattern.rule}`,
      endingsTable: pattern.endings,
      subjectLabels: pattern.subjectLabels,
      tips: pattern.tips,
    });

    // ─ Phase 2: Show 2-3 worked examples ───────────────────────
    const examples = exampleEntries.slice(0, 3);
    for (const verb of examples) {
      steps.push({
        type: 'show_example',
        contentId: verb.id,
        contentType: 'conjugation',
        prompt: `${verb.infinitive} → ${verb.translation}`,
        correctAnswer: verb.infinitive,
        hint: `Apply the ${pattern.verbEnding} endings to the stem "${getVerbStem(verb.infinitive, lang)}-"`,
        exampleTable: verb.conjugations,
        subjectLabels: verb.subjectLabels,
      });
    }

    // ─ Phase 3: Quiz — multiple choice on random verbs/subjects ─
    const quizVerbs = shuffle(exampleEntries);
    for (const verb of quizVerbs) {
      const subj = subjects[Math.floor(Math.random() * subjects.length)];
      const correct = verb.conjugations[subj];
      const label = pattern.subjectLabels[subj] ?? subj;

      // Distractors: other conjugations of the same verb
      const sameVerbForms = Object.entries(verb.conjugations)
        .filter(([key]) => key !== subj)
        .map(([, val]) => val);
      const distractors = shuffle(sameVerbForms).slice(0, 3);

      steps.push({
        type: 'multiple_choice',
        contentId: verb.id,
        contentType: 'conjugation',
        prompt: `Conjugate "${verb.infinitive}" for ${label}:`,
        correctAnswer: correct,
        options: shuffle([correct, ...distractors]),
      });
    }

    // ─ Phase 4: Type-answer round for 3 random forms ───────────
    for (const verb of pickRandom(exampleEntries, Math.min(3, exampleEntries.length))) {
      const subj = subjects[Math.floor(Math.random() * subjects.length)];
      const label = pattern.subjectLabels[subj] ?? subj;
      steps.push({
        type: 'type_answer',
        contentId: verb.id,
        contentType: 'conjugation',
        prompt: `Type the "${verb.infinitive}" conjugation for ${label}:`,
        correctAnswer: verb.conjugations[subj],
        hint: `Remember the ${pattern.verbEnding} endings: ${label} → ${pattern.endings[subj]}`,
      });
    }

    return {
      id: `lesson_conj_pattern_${pattern.id}_${Date.now()}`,
      language: lang,
      level,
      category: 'conjugation_pattern',
      title: pattern.name,
      description: `Learn the rule for conjugating ${pattern.verbEnding} verbs in the ${pattern.tense} tense.`,
      steps,
      xpReward: 70,
    };
  },

  /**
   * Build a lesson for an IRREGULAR verb (exception that doesn't follow standard patterns).
   * These must be memorized, so the lesson introduces the full table then quizzes.
   */
  buildIrregularVerbLesson(lang: SupportedLanguage, level: CEFRLevel, infinitive: string): Lesson {
    const content = getLevelContent(lang, level);

    const entry = content.conjugations.find(
      (c) => c.infinitive === infinitive && !c.isRegular,
    );
    if (!entry) throw new Error(`Irregular verb "${infinitive}" not found in ${lang} ${level} data.`);

    const subjects = Object.keys(entry.conjugations);
    const labels = entry.subjectLabels;

    const steps: LessonStep[] = [];

    // Introduce — show it's irregular and show the full table
    steps.push({
      type: 'show_example',
      contentId: entry.id,
      contentType: 'conjugation',
      prompt: `⚠️ Irregular: ${entry.infinitive} → ${entry.translation}`,
      correctAnswer: entry.infinitive,
      hint: 'This verb does NOT follow the regular pattern — you need to memorize these forms.',
      exampleTable: entry.conjugations,
      subjectLabels: entry.subjectLabels,
    });

    // Quiz each subject with multiple choice (same-verb distractors)
    for (const subj of shuffle(subjects)) {
      const correct = entry.conjugations[subj];
      const sameVerbForms = Object.entries(entry.conjugations)
        .filter(([key]) => key !== subj)
        .map(([, val]) => val);
      const distractors = shuffle(sameVerbForms).slice(0, 3);

      steps.push({
        type: 'multiple_choice',
        contentId: entry.id,
        contentType: 'conjugation',
        prompt: `Conjugate "${entry.infinitive}" for ${labels[subj] ?? subj}:`,
        correctAnswer: correct,
        options: shuffle([correct, ...distractors]),
      });
    }

    // Type-answer round for 3 random subjects
    for (const subj of pickRandom(subjects, 3)) {
      steps.push({
        type: 'type_answer',
        contentId: entry.id,
        contentType: 'conjugation',
        prompt: `Type the "${entry.infinitive}" form for ${labels[subj] ?? subj}:`,
        correctAnswer: entry.conjugations[subj],
        hint: `${entry.translation} — ${entry.tense} tense (irregular!)`,
      });
    }

    return {
      id: `lesson_conj_irreg_${entry.infinitive}_${Date.now()}`,
      language: lang,
      level,
      category: 'conjugation_irregular',
      title: `Exception: ${entry.infinitive}`,
      description: `Memorize the irregular ${entry.tense} tense forms of "${entry.infinitive}" (${entry.translation}).`,
      steps,
      xpReward: 60,
    };
  },

  /** Get all available vocab categories for a language + level, sorted by CEFR recommendation. */
  getAvailableVocabCategories(lang: SupportedLanguage, level: CEFRLevel): string[] {
    const content = getLevelContent(lang, level);
    const cats = [...new Set(content.vocab.map((w) => w.category))];
    return cats.sort((a, b) => {
      const idxA = CATEGORY_ORDER.indexOf(a);
      const idxB = CATEGORY_ORDER.indexOf(b);
      const orderA = idxA >= 0 ? idxA : CATEGORY_ORDER.length;
      const orderB = idxB >= 0 ? idxB : CATEGORY_ORDER.length;
      return orderA - orderB || a.localeCompare(b);
    });
  },

  /** Get all conjugation patterns for a language + level. */
  getAvailablePatterns(lang: SupportedLanguage, level: CEFRLevel): ConjugationPattern[] {
    const content = getLevelContent(lang, level);
    return content.conjugationPatterns;
  },

  /** Get irregular verbs for a language + level. */
  getIrregularVerbs(lang: SupportedLanguage, level: CEFRLevel): ConjugationEntry[] {
    const content = getLevelContent(lang, level);
    return content.conjugations.filter((c) => !c.isRegular);
  },

  /** Get all available verbs for conjugation lessons (used by arcade). */
  getAvailableVerbs(lang: SupportedLanguage, level: CEFRLevel): string[] {
    const content = getLevelContent(lang, level);
    return content.conjugations.map((c) => c.infinitive);
  },

  /** Check whether a language + level has conjugation content. */
  hasConjugations(lang: SupportedLanguage, level: CEFRLevel): boolean {
    try {
      const content = getLevelContent(lang, level);
      return content.conjugations.length > 0;
    } catch {
      return false;
    }
  },

  // ── SRS-driven Review ──────────────────────────────────────

  /**
   * Get the number of items currently due for spaced-repetition review.
   */
  async getDueReviewCount(): Promise<number> {
    const cards = await SRSEngine.loadCards();
    return SRSEngine.getDueCards(cards).length;
  },

  /**
   * Build a review lesson from SRS-due items.
   * Pulls up to `maxItems` due cards, looks up the corresponding
   * content, and generates multiple-choice + type-answer steps.
   */
  async buildReviewLesson(
    lang: SupportedLanguage,
    level: CEFRLevel,
    maxItems: number = 10,
  ): Promise<Lesson | null> {
    const allCards = await SRSEngine.loadCards();
    const dueCards = SRSEngine.sortByPriority(SRSEngine.getDueCards(allCards));

    if (dueCards.length === 0) return null;

    const content = getLevelContent(lang, level);
    const meta = getLanguageMeta(lang);
    const selected = dueCards.slice(0, maxItems);
    const steps: LessonStep[] = [];

    for (const card of selected) {
      if (card.contentType === 'vocab') {
        const word = content.vocab.find((w) => w.id === card.contentId);
        if (!word) continue;

        // Multiple-choice: English → target
        const distractors = generateDistractors(
          word.word,
          content.vocab.map((w) => w.word),
        );
        steps.push({
          type: 'multiple_choice',
          contentId: word.id,
          contentType: 'vocab',
          prompt: `What is "${word.translation}" in ${meta.name}?`,
          correctAnswer: word.word,
          options: shuffle([word.word, ...distractors]),
        });

        // Type-answer: target → English
        steps.push({
          type: 'type_answer',
          contentId: word.id,
          contentType: 'vocab',
          prompt: `Translate: "${word.word}"`,
          correctAnswer: word.translation,
          hint: word.exampleSentence,
        });
      } else if (card.contentType === 'conjugation') {
        const entry = content.conjugations.find((c) => c.id === card.contentId);
        if (!entry) continue;

        const subjects = Object.keys(entry.conjugations);
        const subj = subjects[Math.floor(Math.random() * subjects.length)];
        const label = entry.subjectLabels[subj] ?? subj;
        const correct = entry.conjugations[subj];

        const sameVerbForms = Object.entries(entry.conjugations)
          .filter(([key]) => key !== subj)
          .map(([, val]) => val);
        const distractors = shuffle(sameVerbForms).slice(0, 3);

        steps.push({
          type: 'multiple_choice',
          contentId: entry.id,
          contentType: 'conjugation',
          prompt: `Conjugate "${entry.infinitive}" for ${label}:`,
          correctAnswer: correct,
          options: shuffle([correct, ...distractors]),
        });
      }
    }

    if (steps.length === 0) return null;

    return {
      id: `lesson_review_${Date.now()}`,
      language: lang,
      level,
      category: 'review',
      title: '🔄 Spaced Repetition Review',
      description: `Review ${selected.length} items due for practice.`,
      steps: shuffle(steps),
      xpReward: Math.min(steps.length * 5, 50),
    };
  },

  // ── Grammar Lessons ────────────────────────────────────────

  /** Get all grammar rules for a language + level. */
  getAvailableGrammarRules(lang: SupportedLanguage, level: CEFRLevel): GrammarRule[] {
    try {
      const content = getLevelContent(lang, level);
      return content.grammar;
    } catch {
      return [];
    }
  },

  /**
   * Build a grammar lesson: teach the rule, show examples, then quiz.
   */
  buildGrammarLesson(lang: SupportedLanguage, level: CEFRLevel, ruleId: string): Lesson {
    const content = getLevelContent(lang, level);
    const meta = getLanguageMeta(lang);

    const rule = content.grammar.find((r) => r.id === ruleId);
    if (!rule) throw new Error(`Grammar rule "${ruleId}" not found in ${lang} ${level} data.`);

    const steps: LessonStep[] = [];

    // Phase 1: Teach the rule
    steps.push({
      type: 'teach_rule',
      contentId: rule.id,
      contentType: 'vocab', // grammar doesn't have its own ContentType, use vocab as carrier
      prompt: rule.title,
      correctAnswer: rule.title,
      hint: rule.explanation,
      tips: rule.examples.map((ex) => `${ex.target} — ${ex.english}`),
    });

    // Phase 2: Show each example
    for (const example of rule.examples) {
      steps.push({
        type: 'show_example',
        contentId: rule.id,
        contentType: 'vocab',
        prompt: example.target,
        correctAnswer: example.english,
        hint: `Translation: ${example.english}`,
      });
    }

    // Phase 3: Quiz — type the translation of the examples
    for (const example of shuffle(rule.examples)) {
      steps.push({
        type: 'type_answer',
        contentId: rule.id,
        contentType: 'vocab',
        prompt: `Translate: "${example.target}"`,
        correctAnswer: example.english,
        hint: rule.title,
      });
    }

    // Phase 4: Reverse — type the target language sentence
    for (const example of shuffle(rule.examples).slice(0, 2)) {
      steps.push({
        type: 'type_answer',
        contentId: rule.id,
        contentType: 'vocab',
        prompt: `How do you say "${example.english}" in ${meta.name}?`,
        correctAnswer: example.target,
        hint: rule.title,
      });
    }

    return {
      id: `lesson_grammar_${rule.id}_${Date.now()}`,
      language: lang,
      level,
      category: 'grammar',
      title: rule.title,
      description: rule.explanation.split('\n')[0], // first line as description
      steps,
      xpReward: 40,
    };
  },
};
