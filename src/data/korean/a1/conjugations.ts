/**
 * Korean A1 Verb Conjugations
 *
 * Korean verbs don't conjugate by person (I/you/he) like European
 * languages — instead they conjugate by POLITENESS level and tense.
 *
 * At A1 we focus on the present tense across three speech levels:
 *   - formal (합니다체): 갑니다 / 먹습니다
 *   - polite (해요체): 가요 / 먹어요   ← most useful
 *   - casual (해체): 가 / 먹어
 *
 * ConjugationPatterns teach the RULES for forming these levels.
 * Individual verb entries provide the actual forms for practice/quiz.
 */

import type { ConjugationEntry, ConjugationPattern } from '../../../types';

const lang = 'ko' as const;
const level = 'A1' as const;

// ── Subject labels (speech levels, not person pronouns) ─────────

export const KOREAN_SPEECH_LABELS: Record<string, string> = {
  formal: '합니다체 (formal)',
  polite: '해요체 (polite)',
  casual: '해체 (casual)',
};

export const KOREAN_SPEECH_LEVELS = Object.keys(KOREAN_SPEECH_LABELS);

// ── Regular verbs ───────────────────────────────────────────────

const rawConjugations: Omit<ConjugationEntry, 'subjectLabels'>[] = [
  // ㅏ/ㅗ stem verbs (아요 pattern)
  {
    id: 'ko_a1_c001', language: lang, level, infinitive: '가다',
    translation: 'to go', isRegular: true, tense: 'present',
    conjugations: { formal: '갑니다', polite: '가요', casual: '가' },
  },
  {
    id: 'ko_a1_c002', language: lang, level, infinitive: '오다',
    translation: 'to come', isRegular: true, tense: 'present',
    conjugations: { formal: '옵니다', polite: '와요', casual: '와' },
  },
  {
    id: 'ko_a1_c003', language: lang, level, infinitive: '보다',
    translation: 'to see / watch', isRegular: true, tense: 'present',
    conjugations: { formal: '봅니다', polite: '봐요', casual: '봐' },
  },
  {
    id: 'ko_a1_c004', language: lang, level, infinitive: '사다',
    translation: 'to buy', isRegular: true, tense: 'present',
    conjugations: { formal: '삽니다', polite: '사요', casual: '사' },
  },
  // Other vowel stem verbs (어요 pattern)
  {
    id: 'ko_a1_c010', language: lang, level, infinitive: '먹다',
    translation: 'to eat', isRegular: true, tense: 'present',
    conjugations: { formal: '먹습니다', polite: '먹어요', casual: '먹어' },
  },
  {
    id: 'ko_a1_c011', language: lang, level, infinitive: '마시다',
    translation: 'to drink', isRegular: true, tense: 'present',
    conjugations: { formal: '마십니다', polite: '마셔요', casual: '마셔' },
  },
  {
    id: 'ko_a1_c012', language: lang, level, infinitive: '읽다',
    translation: 'to read', isRegular: true, tense: 'present',
    conjugations: { formal: '읽습니다', polite: '읽어요', casual: '읽어' },
  },
  {
    id: 'ko_a1_c013', language: lang, level, infinitive: '쓰다',
    translation: 'to write / use', isRegular: true, tense: 'present',
    conjugations: { formal: '씁니다', polite: '써요', casual: '써' },
  },
  // 하다 verbs
  {
    id: 'ko_a1_c020', language: lang, level, infinitive: '하다',
    translation: 'to do', isRegular: true, tense: 'present',
    conjugations: { formal: '합니다', polite: '해요', casual: '해' },
  },
  {
    id: 'ko_a1_c021', language: lang, level, infinitive: '공부하다',
    translation: 'to study', isRegular: true, tense: 'present',
    conjugations: { formal: '공부합니다', polite: '공부해요', casual: '공부해' },
  },
  {
    id: 'ko_a1_c022', language: lang, level, infinitive: '좋아하다',
    translation: 'to like', isRegular: true, tense: 'present',
    conjugations: { formal: '좋아합니다', polite: '좋아해요', casual: '좋아해' },
  },
  {
    id: 'ko_a1_c023', language: lang, level, infinitive: '운동하다',
    translation: 'to exercise', isRegular: true, tense: 'present',
    conjugations: { formal: '운동합니다', polite: '운동해요', casual: '운동해' },
  },

  // ── Irregular verbs ─────────────────────────────────────────
  {
    id: 'ko_a1_c030', language: lang, level, infinitive: '있다',
    translation: 'to have / exist', isRegular: false, tense: 'present',
    conjugations: { formal: '있습니다', polite: '있어요', casual: '있어' },
  },
  {
    id: 'ko_a1_c031', language: lang, level, infinitive: '없다',
    translation: 'to not have / not exist', isRegular: false, tense: 'present',
    conjugations: { formal: '없습니다', polite: '없어요', casual: '없어' },
  },
  {
    id: 'ko_a1_c032', language: lang, level, infinitive: '알다',
    translation: 'to know', isRegular: false, tense: 'present',
    conjugations: { formal: '압니다', polite: '알아요', casual: '알아' },
  },
  {
    id: 'ko_a1_c033', language: lang, level, infinitive: '살다',
    translation: 'to live', isRegular: false, tense: 'present',
    conjugations: { formal: '삽니다', polite: '살아요', casual: '살아' },
  },
  {
    id: 'ko_a1_c034', language: lang, level, infinitive: '듣다',
    translation: 'to listen', isRegular: false, tense: 'present',
    conjugations: { formal: '듣습니다', polite: '들어요', casual: '들어' },
  },
  {
    id: 'ko_a1_c035', language: lang, level, infinitive: '걷다',
    translation: 'to walk', isRegular: false, tense: 'present',
    conjugations: { formal: '걷습니다', polite: '걸어요', casual: '걸어' },
  },
];

/** Korean A1 conjugations with speech level labels injected. */
export const KOREAN_A1_CONJUGATIONS: ConjugationEntry[] = rawConjugations.map(
  (entry) => ({ ...entry, subjectLabels: KOREAN_SPEECH_LABELS }),
);

// ── Conjugation Patterns (rules-based teaching) ───────────────

export const KOREAN_A1_CONJUGATION_PATTERNS: ConjugationPattern[] = [
  {
    id: 'ko_a1_p001', language: lang, level,
    name: 'Present Tense: ㅏ/ㅗ Stem Verbs',
    verbEnding: 'ㅏ/ㅗ stem',
    tense: 'present',
    description:
      'When the last vowel of the verb STEM contains ㅏ or ㅗ, ' +
      'use 아요 for polite speech. The ㅏ + 아 often contracts: 가 + 아요 = 가요.',
    rule: 'Remove 다 to get the stem. If the stem\'s last vowel is ㅏ or ㅗ, add these endings:',
    endings: {
      formal: '-ㅂ니다/습니다',
      polite: '-아요 (contracts with ㅏ/ㅗ)',
      casual: '-아',
    },
    subjectLabels: KOREAN_SPEECH_LABELS,
    exampleVerbs: ['가다', '오다', '보다', '사다'],
    tips: [
      '가다 → 가 + 아요 = 가요 (ㅏ+ㅏ contracts to just ㅏ)',
      '오다 → 오 + 아요 = 와요 (ㅗ+ㅏ merges into 와)',
      'The formal ending: consonant stem → 습니다, vowel stem → ㅂ니다',
    ],
  },
  {
    id: 'ko_a1_p002', language: lang, level,
    name: 'Present Tense: Other Vowel Stems',
    verbEnding: 'other vowel stem',
    tense: 'present',
    description:
      'When the last vowel of the verb stem is NOT ㅏ or ㅗ ' +
      '(e.g. ㅓ, ㅜ, ㅡ, ㅣ), use 어요 for polite speech.',
    rule: 'Remove 다 to get the stem. If the stem\'s last vowel is NOT ㅏ or ㅗ, add these endings:',
    endings: {
      formal: '-습니다/ㅂ니다',
      polite: '-어요',
      casual: '-어',
    },
    subjectLabels: KOREAN_SPEECH_LABELS,
    exampleVerbs: ['먹다', '마시다', '읽다', '쓰다'],
    tips: [
      '먹다 → 먹 + 어요 = 먹어요 (consonant stem → clear separation)',
      '마시다 → 마시 + 어요 = 마셔요 (ㅣ+ㅓ contracts to ㅕ)',
      '쓰다 → 쓰 + 어요 = 써요 (ㅡ drops, then ㅓ becomes ㅓ → 써요)',
    ],
  },
  {
    id: 'ko_a1_p003', language: lang, level,
    name: 'Present Tense: 하다 Verbs',
    verbEnding: '하다',
    tense: 'present',
    description:
      '하다 (to do) is the most productive verb pattern in Korean. ' +
      'Hundreds of verbs are formed by adding 하다 to a noun: ' +
      '공부(study) + 하다 = 공부하다 (to study). They ALL conjugate the same way.',
    rule: 'For ANY 하다 verb, the polite form is always 해요:',
    endings: {
      formal: '-합니다',
      polite: '-해요',
      casual: '-해',
    },
    subjectLabels: KOREAN_SPEECH_LABELS,
    exampleVerbs: ['하다', '공부하다', '좋아하다', '운동하다'],
    tips: [
      'This is the easiest pattern — 하다 ALWAYS becomes 해요 in polite speech.',
      'Once you learn this rule, you unlock hundreds of verbs! ' +
        '요리하다 (cook), 전화하다 (call), 여행하다 (travel)…',
      'The formal form is also easy: always -합니다. 공부합니다, 운동합니다, etc.',
    ],
  },
];

/** Get regular conjugation entries. */
export function getRegularConjugations(): ConjugationEntry[] {
  return KOREAN_A1_CONJUGATIONS.filter((c) => c.isRegular);
}

/** Get irregular conjugation entries. */
export function getIrregularConjugations(): ConjugationEntry[] {
  return KOREAN_A1_CONJUGATIONS.filter((c) => !c.isRegular);
}
