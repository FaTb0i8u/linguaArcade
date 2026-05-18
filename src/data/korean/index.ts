/**
 * Korean content index.
 *
 * Re-exports individual data modules AND registers the complete
 * Korean content pack with the language registry.
 */

import type { LanguageMeta } from '../../types';
import type { LanguageContentPack } from '../registry';
import { registerLanguage } from '../registry';
import {
  KOREAN_A1_VOCAB,
  KOREAN_A1_CONJUGATIONS,
  KOREAN_A1_CONJUGATION_PATTERNS,
  KOREAN_A1_SENTENCES,
  KOREAN_A1_GRAMMAR,
} from './a1';
import {
  KOREAN_A2_VOCAB,
  KOREAN_A2_CONJUGATIONS,
  KOREAN_A2_CONJUGATION_PATTERNS,
  KOREAN_A2_GRAMMAR,
  KOREAN_A2_SENTENCES,
} from './a2';
import {
  KOREAN_B1_VOCAB,
  KOREAN_B1_CONJUGATIONS,
  KOREAN_B1_CONJUGATION_PATTERNS,
  KOREAN_B1_GRAMMAR,
  KOREAN_B1_SENTENCES,
} from './b1';
import {
  KOREAN_B2_VOCAB,
  KOREAN_B2_CONJUGATIONS,
  KOREAN_B2_CONJUGATION_PATTERNS,
  KOREAN_B2_GRAMMAR,
  KOREAN_B2_SENTENCES,
} from './b2';
import {
  KOREAN_C1_VOCAB,
  KOREAN_C1_CONJUGATIONS,
  KOREAN_C1_CONJUGATION_PATTERNS,
  KOREAN_C1_GRAMMAR,
  KOREAN_C1_SENTENCES,
} from './c1';
import {
  KOREAN_C2_VOCAB,
  KOREAN_C2_CONJUGATIONS,
  KOREAN_C2_CONJUGATION_PATTERNS,
  KOREAN_C2_GRAMMAR,
  KOREAN_C2_SENTENCES,
} from './c2';

// Re-exports
export { KOREAN_A1_VOCAB, getVocabByCategory, getVocabCategories, KOREAN_A1_CONJUGATIONS, KOREAN_A1_CONJUGATION_PATTERNS, KOREAN_SPEECH_LABELS, KOREAN_SPEECH_LEVELS, getRegularConjugations, getIrregularConjugations, KOREAN_A1_SENTENCES, getSentencesByCategory, getSentenceCategories, KOREAN_A1_GRAMMAR } from './a1';

// ── Language metadata ───────────────────────────────────────────

export const KOREAN_META: LanguageMeta = {
  code: 'ko',
  name: 'Korean',
  nativeName: '한국어',
  flag: '🇰🇷',
  hasConjugations: true,
  writingDirection: 'ltr',
};

// ── Learning tips ───────────────────────────────────────────────

const KOREAN_TIPS: string[] = [
  'Korean word order is Subject-Object-Verb. The verb ALWAYS goes at the end: 나는 밥을 먹어요 (I rice eat).',
  'Hangul was scientifically designed! Consonant shapes mimic the position of your mouth when you say them.',
  'Korean has TWO number systems: Sino-Korean (일, 이, 삼) for dates/money and Native Korean (하나, 둘, 셋) for counting.',
  'Particles like 은/는 (topic) and 이/가 (subject) are added AFTER the noun — they\'re Korean\'s "grammar glue".',
  'The 해요체 (polite informal) ending covers 90% of daily conversation — learn it first!',
  '하다 verbs are your secret weapon: learn "noun + 하다" and you instantly know hundreds of verbs.',
  'Korean doesn\'t conjugate by person (I/you/he). Instead it conjugates by POLITENESS LEVEL — much simpler!',
];

// ── Content pack definition ─────────────────────────────────────

export const KOREAN_CONTENT_PACK: LanguageContentPack = {
  meta: KOREAN_META,
  levels: {
    A1: {
      vocab: KOREAN_A1_VOCAB,
      conjugations: KOREAN_A1_CONJUGATIONS,
      conjugationPatterns: KOREAN_A1_CONJUGATION_PATTERNS,
      sentences: KOREAN_A1_SENTENCES,
      grammar: KOREAN_A1_GRAMMAR,
    },
    A2: {
      vocab: KOREAN_A2_VOCAB,
      conjugations: KOREAN_A2_CONJUGATIONS,
      conjugationPatterns: KOREAN_A2_CONJUGATION_PATTERNS,
      sentences: KOREAN_A2_SENTENCES,
      grammar: KOREAN_A2_GRAMMAR,
    },
    B1: {
      vocab: KOREAN_B1_VOCAB,
      conjugations: KOREAN_B1_CONJUGATIONS,
      conjugationPatterns: KOREAN_B1_CONJUGATION_PATTERNS,
      sentences: KOREAN_B1_SENTENCES,
      grammar: KOREAN_B1_GRAMMAR,
    },
    B2: {
      vocab: KOREAN_B2_VOCAB,
      conjugations: KOREAN_B2_CONJUGATIONS,
      conjugationPatterns: KOREAN_B2_CONJUGATION_PATTERNS,
      sentences: KOREAN_B2_SENTENCES,
      grammar: KOREAN_B2_GRAMMAR,
    },
    C1: {
      vocab: KOREAN_C1_VOCAB,
      conjugations: KOREAN_C1_CONJUGATIONS,
      conjugationPatterns: KOREAN_C1_CONJUGATION_PATTERNS,
      sentences: KOREAN_C1_SENTENCES,
      grammar: KOREAN_C1_GRAMMAR,
    },
    C2: {
      vocab: KOREAN_C2_VOCAB,
      conjugations: KOREAN_C2_CONJUGATIONS,
      conjugationPatterns: KOREAN_C2_CONJUGATION_PATTERNS,
      sentences: KOREAN_C2_SENTENCES,
      grammar: KOREAN_C2_GRAMMAR,
    },
  },
  tips: KOREAN_TIPS,
};

// ── Auto-register on import ─────────────────────────────────────
registerLanguage(KOREAN_CONTENT_PACK);
