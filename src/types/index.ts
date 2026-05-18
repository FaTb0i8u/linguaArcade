/**
 * LinguaArcade — Core Type Definitions
 *
 * All shared types live here so every module imports from one place.
 * When adding a new language, add its code to SupportedLanguage and
 * create a matching content pack under src/data/<lang>/.
 */

// ──────────────────────────────────────────────
// Language & Content
// ──────────────────────────────────────────────

/** ISO 639-1 codes we support. Extend this union when adding a language. */
export type SupportedLanguage = 'es' | 'ko' | 'zh' | 'fr' | 'de' | 'ja' | 'pt' | 'it' | 'en';

/** Metadata for a supported language — used for UI display. */
export interface LanguageMeta {
  code: SupportedLanguage;
  name: string;              // e.g. "Spanish"
  nativeName: string;        // e.g. "Español"
  flag: string;              // e.g. "🇪🇸"
  hasConjugations: boolean;  // false for Chinese, etc.
  writingDirection: 'ltr' | 'rtl';
}

/** CEFR proficiency levels */
export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

/** A single vocabulary item */
export interface VocabWord {
  id: string;
  language: SupportedLanguage;
  level: CEFRLevel;
  category: string;            // e.g. "greetings", "food", "travel"
  word: string;                // target language word
  translation: string;         // English translation
  pronunciation?: string;      // IPA or simplified phonetic
  exampleSentence?: string;    // usage in context
  exampleTranslation?: string; // English version of example
  gender?: 'masculine' | 'feminine' | 'neutral'; // for gendered languages
  partOfSpeech: PartOfSpeech;
  audioUrl?: string;           // future: link to audio file
}

export type PartOfSpeech =
  | 'noun'
  | 'verb'
  | 'adjective'
  | 'adverb'
  | 'pronoun'
  | 'preposition'
  | 'conjunction'
  | 'interjection'
  | 'article'
  | 'numeral';

/** Verb conjugation entry — language-agnostic.
 *  `conjugations` uses subject keys that vary by language
 *  (e.g. 'yo', 'tú' for Spanish; 'I', 'you' for English).
 *  `subjectLabels` maps each key to a display label.
 */
export interface ConjugationEntry {
  id: string;
  language: SupportedLanguage;
  level: CEFRLevel;
  infinitive: string;          // e.g. "hablar"
  translation: string;         // "to speak"
  isRegular: boolean;
  tense: VerbTense;
  conjugations: Record<string, string>;
  subjectLabels: Record<string, string>;
}

export type VerbTense =
  | 'present'
  | 'preterite'
  | 'imperfect'
  | 'future'
  | 'conditional'
  | 'present_subjunctive'
  | 'imperfect_subjunctive'
  | 'pluperfect'
  | 'future_perfect'
  | 'conditional_perfect'
  | 'pluperfect_subjunctive';

export type SubjectPronoun = string; // language-specific; no longer a fixed union

/**
 * A conjugation PATTERN teaches a rule (e.g. "present tense -AR verbs")
 * rather than individual verb forms. Links to example verbs that follow
 * the pattern, with the endings the student needs to memorize.
 */
export interface ConjugationPattern {
  id: string;
  language: SupportedLanguage;
  level: CEFRLevel;
  name: string;                // e.g. "Present Tense -AR Verbs"
  verbEnding: string;          // e.g. "-ar", "-er", "-ir"
  tense: VerbTense;
  description: string;         // Teaching explanation of the rule
  rule: string;                // Concise rule: "Drop -ar, add the endings below"
  endings: Record<string, string>;  // { yo: '-o', tú: '-as', ... }
  subjectLabels: Record<string, string>; // display labels for subjects
  exampleVerbs: string[];      // infinitives that follow this pattern (references ConjugationEntry)
  tips?: string[];             // Extra teaching notes
}

/** A sentence pattern for the Sentence Builder game */
export interface SentencePattern {
  id: string;
  language: SupportedLanguage;
  level: CEFRLevel;
  category: string;            // e.g. "basic_statements", "questions"
  words: string[];             // correct word order
  translation: string;         // English translation
  hint?: string;               // grammar hint
  distractors?: string[];      // extra wrong words to make it harder
}

/** Grammar rule (for reference / tooltips) */
export interface GrammarRule {
  id: string;
  language: SupportedLanguage;
  level: CEFRLevel;
  title: string;
  explanation: string;
  examples: { target: string; english: string }[];
}

// ──────────────────────────────────────────────
// SRS (Spaced Repetition System)
// ──────────────────────────────────────────────

/** Quality of a user's recall — maps to SM-2 grades 0-5 */
export type RecallQuality = 0 | 1 | 2 | 3 | 4 | 5;

/** Per-item SRS review state */
export interface SRSCard {
  contentId: string;           // references VocabWord.id, ConjugationEntry.id, etc.
  contentType: ContentType;
  easeFactor: number;          // starts at 2.5
  interval: number;            // days until next review
  repetitions: number;         // successful reps in a row
  nextReviewDate: string;      // ISO date string
  lastReviewDate?: string;
}

export type ContentType = 'vocab' | 'conjugation' | 'sentence';

// ──────────────────────────────────────────────
// User & Progress
// ──────────────────────────────────────────────

export interface UserProfile {
  id: string;
  email: string;
  displayName: string;
  avatarUrl?: string;
  createdAt: string;
  currentLanguage: SupportedLanguage;
  currentLevel: CEFRLevel;
}

export interface UserProgress {
  userId: string;
  language: SupportedLanguage;
  level: CEFRLevel;
  xp: number;
  streak: number;              // consecutive days
  lastActiveDate: string;
  lessonsCompleted: number;
  wordsLearned: number;
  gamesPlayed: number;
  totalCorrect: number;
  totalAttempts: number;
  srsCards: SRSCard[];
  unlockedGameModes: GameModeType[];
}

// ──────────────────────────────────────────────
// Game Modes
// ──────────────────────────────────────────────

export type GameModeType = 'vocab_blitz' | 'conjugation_fighter' | 'sentence_builder';

export interface GameModeConfig {
  type: GameModeType;
  name: string;
  description: string;
  icon: string;                // emoji for now
  unlockLevel: CEFRLevel;
  minWordsRequired: number;    // vocab learned before this unlocks
  contentTypes: ContentType[];
}

/** Shared result object every game mode returns when a session ends */
export interface GameSessionResult {
  gameMode: GameModeType;
  score: number;
  maxScore: number;
  correctAnswers: number;
  totalQuestions: number;
  xpEarned: number;
  timeElapsed: number;         // seconds
  answeredItems: AnsweredItem[];
}

export interface AnsweredItem {
  contentId: string;
  contentType: ContentType;
  wasCorrect: boolean;
  responseTime: number;        // ms
  userAnswer: string;
  correctAnswer: string;
}

// ──────────────────────────────────────────────
// Lesson Engine
// ──────────────────────────────────────────────

export type LessonStepType =
  | 'introduce'    // show new word/concept
  | 'teach_rule'   // show a conjugation pattern rule with endings table
  | 'show_example' // show a worked example of a pattern applied to a verb
  | 'multiple_choice'
  | 'type_answer';

export interface LessonStep {
  type: LessonStepType;
  contentId: string;
  contentType: ContentType;
  prompt: string;
  correctAnswer: string;
  options?: string[];          // for multiple choice
  hint?: string;
  /** For teach_rule steps: the endings table to display. */
  endingsTable?: Record<string, string>;
  /** For teach_rule steps: subject labels for display. */
  subjectLabels?: Record<string, string>;
  /** For show_example steps: the full conjugation table. */
  exampleTable?: Record<string, string>;
  /** For teach_rule/show_example: additional tips or notes. */
  tips?: string[];
}

export interface Lesson {
  id: string;
  language: SupportedLanguage;
  level: CEFRLevel;
  category: string;
  title: string;
  description: string;
  steps: LessonStep[];
  xpReward: number;
}

// ──────────────────────────────────────────────
// Navigation
// ──────────────────────────────────────────────

export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Arcade: undefined;
  Lessons: undefined;
  Profile: undefined;
};

export type ArcadeStackParamList = {
  ArcadeHome: undefined;
  VocabBlitz: undefined;
  ConjugationFighter: undefined;
  SentenceBuilder: undefined;
};
