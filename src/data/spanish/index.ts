/**
 * Spanish content index.
 *
 * Re-exports individual data modules AND registers the complete
 * Spanish content pack with the language registry.
 */

import type { LanguageMeta } from '../../types';
import type { LanguageContentPack } from '../registry';
import { registerLanguage } from '../registry';
import {
  SPANISH_A1_VOCAB,
  SPANISH_A1_CONJUGATIONS,
  SPANISH_A1_CONJUGATION_PATTERNS,
  SPANISH_A1_SENTENCES,
  SPANISH_A1_GRAMMAR,
} from './a1';
import {
  SPANISH_A2_VOCAB,
  SPANISH_A2_CONJUGATIONS,
  SPANISH_A2_CONJUGATION_PATTERNS,
  SPANISH_A2_GRAMMAR,
  SPANISH_A2_SENTENCES,
} from './a2';
import {
  SPANISH_B1_VOCAB,
  SPANISH_B1_CONJUGATIONS,
  SPANISH_B1_CONJUGATION_PATTERNS,
  SPANISH_B1_GRAMMAR,
  SPANISH_B1_SENTENCES,
} from './b1';
import {
  SPANISH_B2_VOCAB,
  SPANISH_B2_CONJUGATIONS,
  SPANISH_B2_CONJUGATION_PATTERNS,
  SPANISH_B2_GRAMMAR,
  SPANISH_B2_SENTENCES,
} from './b2';
import {
  SPANISH_C1_VOCAB,
  SPANISH_C1_CONJUGATIONS,
  SPANISH_C1_CONJUGATION_PATTERNS,
  SPANISH_C1_GRAMMAR,
  SPANISH_C1_SENTENCES,
} from './c1';
import {
  SPANISH_C2_VOCAB,
  SPANISH_C2_CONJUGATIONS,
  SPANISH_C2_CONJUGATION_PATTERNS,
  SPANISH_C2_GRAMMAR,
  SPANISH_C2_SENTENCES,
} from './c2';

// Re-exports for backward compat / direct access
export { SPANISH_A1_VOCAB, getVocabByCategory, getVocabCategories, SPANISH_A1_CONJUGATIONS, SPANISH_A1_CONJUGATION_PATTERNS, SPANISH_SUBJECT_LABELS, SPANISH_SUBJECTS, getConjugation, randomSubject, getRegularConjugations, getIrregularConjugations, SPANISH_A1_SENTENCES, getSentencesByCategory, getSentenceCategories, SPANISH_A1_GRAMMAR } from './a1';

// ── Language metadata ───────────────────────────────────────────

export const SPANISH_META: LanguageMeta = {
  code: 'es',
  name: 'Spanish',
  nativeName: 'Español',
  flag: '🇪🇸',
  hasConjugations: true,
  writingDirection: 'ltr',
};

// ── Learning tips (shown randomly on home screen) ───────────────

const SPANISH_TIPS: string[] = [
  'In Spanish, adjectives usually come AFTER the noun:\n"el coche rojo" (the red car), not "el rojo coche".',
  'Spanish has TWO verbs for "to be": SER (permanent) and ESTAR (temporary).\nMnemonic: "How you feel and where you are, that is when you use ESTAR."',
  'Most Spanish nouns ending in -o are masculine, and those ending in -a are feminine.\nExceptions: el día (day), la mano (hand).',
  'In Spanish, subject pronouns (yo, tú, él...) are often dropped because the verb ending already tells you the person.',
  'All Spanish questions are wrapped in ¿...? — don\'t forget the inverted question mark at the beginning!',
  'Negative sentences are easy: just put "no" before the verb.\n"No hablo francés" = I don\'t speak French.',
  'Use "me gusta" (it pleases me) instead of "I like". Think of it as the opposite structure from English.',
];

// ── Content pack definition ─────────────────────────────────────

export const SPANISH_CONTENT_PACK: LanguageContentPack = {
  meta: SPANISH_META,
  levels: {
    A1: {
      vocab: SPANISH_A1_VOCAB,
      conjugations: SPANISH_A1_CONJUGATIONS,
      conjugationPatterns: SPANISH_A1_CONJUGATION_PATTERNS,
      sentences: SPANISH_A1_SENTENCES,
      grammar: SPANISH_A1_GRAMMAR,
    },
    A2: {
      vocab: SPANISH_A2_VOCAB,
      conjugations: SPANISH_A2_CONJUGATIONS,
      conjugationPatterns: SPANISH_A2_CONJUGATION_PATTERNS,
      sentences: SPANISH_A2_SENTENCES,
      grammar: SPANISH_A2_GRAMMAR,
    },
    B1: {
      vocab: SPANISH_B1_VOCAB,
      conjugations: SPANISH_B1_CONJUGATIONS,
      conjugationPatterns: SPANISH_B1_CONJUGATION_PATTERNS,
      sentences: SPANISH_B1_SENTENCES,
      grammar: SPANISH_B1_GRAMMAR,
    },
    B2: {
      vocab: SPANISH_B2_VOCAB,
      conjugations: SPANISH_B2_CONJUGATIONS,
      conjugationPatterns: SPANISH_B2_CONJUGATION_PATTERNS,
      sentences: SPANISH_B2_SENTENCES,
      grammar: SPANISH_B2_GRAMMAR,
    },
    C1: {
      vocab: SPANISH_C1_VOCAB,
      conjugations: SPANISH_C1_CONJUGATIONS,
      conjugationPatterns: SPANISH_C1_CONJUGATION_PATTERNS,
      sentences: SPANISH_C1_SENTENCES,
      grammar: SPANISH_C1_GRAMMAR,
    },
    C2: {
      vocab: SPANISH_C2_VOCAB,
      conjugations: SPANISH_C2_CONJUGATIONS,
      conjugationPatterns: SPANISH_C2_CONJUGATION_PATTERNS,
      sentences: SPANISH_C2_SENTENCES,
      grammar: SPANISH_C2_GRAMMAR,
    },
  },
  tips: SPANISH_TIPS,
};

// ── Auto-register on import ─────────────────────────────────────
registerLanguage(SPANISH_CONTENT_PACK);
