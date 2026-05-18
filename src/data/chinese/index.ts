/**
 * Chinese (Mandarin) content index.
 *
 * Re-exports individual data modules AND registers the complete
 * Chinese content pack with the language registry.
 *
 * Chinese is unique in several ways:
 *   - No verb conjugations — verbs never change form
 *   - The "conjugation" slots are repurposed for measure words (量詞),
 *     aspect markers, complement structures, and literary patterns
 *   - Tones are critical — pronunciation always includes pinyin tone marks
 *   - Characters are simplified (簡體字)
 */

import type { LanguageMeta } from '../../types';
import type { LanguageContentPack } from '../registry';
import { registerLanguage } from '../registry';
import {
  CHINESE_A1_VOCAB,
  CHINESE_A1_CONJUGATIONS,
  CHINESE_A1_CONJUGATION_PATTERNS,
  CHINESE_A1_GRAMMAR,
  CHINESE_A1_SENTENCES,
} from './a1';
import {
  CHINESE_A2_VOCAB,
  CHINESE_A2_CONJUGATIONS,
  CHINESE_A2_CONJUGATION_PATTERNS,
  CHINESE_A2_GRAMMAR,
  CHINESE_A2_SENTENCES,
} from './a2';
import {
  CHINESE_B1_VOCAB,
  CHINESE_B1_CONJUGATIONS,
  CHINESE_B1_CONJUGATION_PATTERNS,
  CHINESE_B1_GRAMMAR,
  CHINESE_B1_SENTENCES,
} from './b1';
import {
  CHINESE_B2_VOCAB,
  CHINESE_B2_CONJUGATIONS,
  CHINESE_B2_CONJUGATION_PATTERNS,
  CHINESE_B2_GRAMMAR,
  CHINESE_B2_SENTENCES,
} from './b2';
import {
  CHINESE_C1_VOCAB,
  CHINESE_C1_CONJUGATIONS,
  CHINESE_C1_CONJUGATION_PATTERNS,
  CHINESE_C1_GRAMMAR,
  CHINESE_C1_SENTENCES,
} from './c1';
import {
  CHINESE_C2_VOCAB,
  CHINESE_C2_CONJUGATIONS,
  CHINESE_C2_CONJUGATION_PATTERNS,
  CHINESE_C2_GRAMMAR,
  CHINESE_C2_SENTENCES,
} from './c2';

// ── Language metadata ───────────────────────────────────────────

export const CHINESE_META: LanguageMeta = {
  code: 'zh',
  name: 'Chinese',
  nativeName: '繁體中文',
  flag: '🇨🇳',
  hasConjugations: false,
  writingDirection: 'ltr',
};

// ── Learning tips ───────────────────────────────────────────────

const CHINESE_TIPS: string[] = [
  'Chinese has FOUR tones + a neutral tone. The same syllable "ma" can mean mother (mā), hemp (má), horse (mǎ), or scold (mà)!',
  'Chinese verbs NEVER change form — no conjugations, no tenses. Instead, particles like 了, 過, and 着 indicate aspect.',
  'Every noun needs a MEASURE WORD (量詞) between the number and the noun: 一個人, 兩本書, 三杯水.',
  'Chinese word order is generally Subject-Verb-Object, similar to English: 我吃飯 (I eat rice).',
  'The particle 的 is Chinese\'s Swiss Army knife: possessive (我的), attributive (紅色的), and nominaliser (吃的).',
  '成語 (chéngyǔ) are four-character idioms from classical stories. Using them well is a hallmark of fluency.',
  'Chinese has no alphabet — each character represents a syllable and a meaning. But ~80% of characters are phono-semantic compounds with a meaning radical and a sound component.',
  'Pinyin is your best friend for learning pronunciation, but native Chinese writing never uses it. Think of pinyin as training wheels.',
];

// ── Content pack definition ─────────────────────────────────────

export const CHINESE_CONTENT_PACK: LanguageContentPack = {
  meta: CHINESE_META,
  levels: {
    A1: {
      vocab: CHINESE_A1_VOCAB,
      conjugations: CHINESE_A1_CONJUGATIONS,
      conjugationPatterns: CHINESE_A1_CONJUGATION_PATTERNS,
      sentences: CHINESE_A1_SENTENCES,
      grammar: CHINESE_A1_GRAMMAR,
    },
    A2: {
      vocab: CHINESE_A2_VOCAB,
      conjugations: CHINESE_A2_CONJUGATIONS,
      conjugationPatterns: CHINESE_A2_CONJUGATION_PATTERNS,
      sentences: CHINESE_A2_SENTENCES,
      grammar: CHINESE_A2_GRAMMAR,
    },
    B1: {
      vocab: CHINESE_B1_VOCAB,
      conjugations: CHINESE_B1_CONJUGATIONS,
      conjugationPatterns: CHINESE_B1_CONJUGATION_PATTERNS,
      sentences: CHINESE_B1_SENTENCES,
      grammar: CHINESE_B1_GRAMMAR,
    },
    B2: {
      vocab: CHINESE_B2_VOCAB,
      conjugations: CHINESE_B2_CONJUGATIONS,
      conjugationPatterns: CHINESE_B2_CONJUGATION_PATTERNS,
      sentences: CHINESE_B2_SENTENCES,
      grammar: CHINESE_B2_GRAMMAR,
    },
    C1: {
      vocab: CHINESE_C1_VOCAB,
      conjugations: CHINESE_C1_CONJUGATIONS,
      conjugationPatterns: CHINESE_C1_CONJUGATION_PATTERNS,
      sentences: CHINESE_C1_SENTENCES,
      grammar: CHINESE_C1_GRAMMAR,
    },
    C2: {
      vocab: CHINESE_C2_VOCAB,
      conjugations: CHINESE_C2_CONJUGATIONS,
      conjugationPatterns: CHINESE_C2_CONJUGATION_PATTERNS,
      sentences: CHINESE_C2_SENTENCES,
      grammar: CHINESE_C2_GRAMMAR,
    },
  },
  tips: CHINESE_TIPS,
};

// ── Auto-register on import ─────────────────────────────────────
registerLanguage(CHINESE_CONTENT_PACK);
