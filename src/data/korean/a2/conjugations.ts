/**
 * Korean A2 Verb Conjugations
 *
 * At A2 we introduce the past tense (았/었/했) — the most important
 * additional tense for TOPIK I Level 2.
 */

import type { ConjugationEntry, ConjugationPattern } from '../../../types';

const lang = 'ko' as const;
const level = 'A2' as const;

const LABELS: Record<string, string> = {
  polite_informal: '해요체 (polite informal)',
  polite_formal: '합쇼체 (polite formal)',
  casual: '해체 (casual)',
};

const rawConjugations: Omit<ConjugationEntry, 'subjectLabels'>[] = [
  // ── Past tense — ㅏ/ㅗ stem (았) ────────────────────────────
  {
    id: 'ko_a2_c001', language: lang, level, infinitive: '가다',
    translation: 'to go', isRegular: true, tense: 'preterite',
    conjugations: {
      polite_informal: '갔어요',
      polite_formal: '갔습니다',
      casual: '갔어',
    },
  },
  {
    id: 'ko_a2_c002', language: lang, level, infinitive: '보다',
    translation: 'to see / watch', isRegular: true, tense: 'preterite',
    conjugations: {
      polite_informal: '봤어요',
      polite_formal: '봤습니다',
      casual: '봤어',
    },
  },
  {
    id: 'ko_a2_c003', language: lang, level, infinitive: '오다',
    translation: 'to come', isRegular: true, tense: 'preterite',
    conjugations: {
      polite_informal: '왔어요',
      polite_formal: '왔습니다',
      casual: '왔어',
    },
  },
  {
    id: 'ko_a2_c004', language: lang, level, infinitive: '살다',
    translation: 'to live', isRegular: true, tense: 'preterite',
    conjugations: {
      polite_informal: '살았어요',
      polite_formal: '살았습니다',
      casual: '살았어',
    },
  },
  // ── Past tense — other vowel stems (었) ─────────────────────
  {
    id: 'ko_a2_c005', language: lang, level, infinitive: '먹다',
    translation: 'to eat', isRegular: true, tense: 'preterite',
    conjugations: {
      polite_informal: '먹었어요',
      polite_formal: '먹었습니다',
      casual: '먹었어',
    },
  },
  {
    id: 'ko_a2_c006', language: lang, level, infinitive: '읽다',
    translation: 'to read', isRegular: true, tense: 'preterite',
    conjugations: {
      polite_informal: '읽었어요',
      polite_formal: '읽었습니다',
      casual: '읽었어',
    },
  },
  {
    id: 'ko_a2_c007', language: lang, level, infinitive: '마시다',
    translation: 'to drink', isRegular: true, tense: 'preterite',
    conjugations: {
      polite_informal: '마셨어요',
      polite_formal: '마셨습니다',
      casual: '마셨어',
    },
  },
  {
    id: 'ko_a2_c008', language: lang, level, infinitive: '쉬다',
    translation: 'to rest', isRegular: true, tense: 'preterite',
    conjugations: {
      polite_informal: '쉬었어요',
      polite_formal: '쉬었습니다',
      casual: '쉬었어',
    },
  },
  // ── Past tense — 하다 verbs (했) ────────────────────────────
  {
    id: 'ko_a2_c009', language: lang, level, infinitive: '공부하다',
    translation: 'to study', isRegular: true, tense: 'preterite',
    conjugations: {
      polite_informal: '공부했어요',
      polite_formal: '공부했습니다',
      casual: '공부했어',
    },
  },
  {
    id: 'ko_a2_c010', language: lang, level, infinitive: '운동하다',
    translation: 'to exercise', isRegular: true, tense: 'preterite',
    conjugations: {
      polite_informal: '운동했어요',
      polite_formal: '운동했습니다',
      casual: '운동했어',
    },
  },
  {
    id: 'ko_a2_c011', language: lang, level, infinitive: '일하다',
    translation: 'to work', isRegular: true, tense: 'preterite',
    conjugations: {
      polite_informal: '일했어요',
      polite_formal: '일했습니다',
      casual: '일했어',
    },
  },
  // ── Irregular past tense ────────────────────────────────────
  {
    id: 'ko_a2_c012', language: lang, level, infinitive: '듣다',
    translation: 'to listen', isRegular: false, tense: 'preterite',
    conjugations: {
      polite_informal: '들었어요',
      polite_formal: '들었습니다',
      casual: '들었어',
    },
  },
  {
    id: 'ko_a2_c013', language: lang, level, infinitive: '걷다',
    translation: 'to walk', isRegular: false, tense: 'preterite',
    conjugations: {
      polite_informal: '걸었어요',
      polite_formal: '걸었습니다',
      casual: '걸었어',
    },
  },
  {
    id: 'ko_a2_c014', language: lang, level, infinitive: '돕다',
    translation: 'to help', isRegular: false, tense: 'preterite',
    conjugations: {
      polite_informal: '도왔어요',
      polite_formal: '도왔습니다',
      casual: '도왔어',
    },
  },
];

export const KOREAN_A2_CONJUGATIONS: ConjugationEntry[] = rawConjugations.map((c) => ({
  ...c,
  subjectLabels: LABELS,
}));

// ── Conjugation Patterns ────────────────────────────────────────

export const KOREAN_A2_CONJUGATION_PATTERNS: ConjugationPattern[] = [
  {
    id: 'ko_a2_past_ao',
    language: lang,
    level,
    name: 'Past Tense — ㅏ/ㅗ Stems',
    verbEnding: '-았-',
    tense: 'preterite',
    description:
      'When the verb stem\'s last vowel is ㅏ or ㅗ, add 았 to form the past tense.\n' +
      'This is the "bright vowel" rule (양성 모음).',
    rule: 'Remove 다 → if last stem vowel is ㅏ/ㅗ → add 았어요 (polite).',
    endings: {
      polite_informal: '-았어요',
      polite_formal: '-았습니다',
      casual: '-았어',
    },
    subjectLabels: LABELS,
    exampleVerbs: ['가다', '보다', '오다', '살다'],
    tips: [
      'If the stem already ends in 아, it contracts: 가 + 았 → 갔 (not 가았).',
      'ㅗ contracts too: 오 + 았 → 왔.',
      'This is the same vowel harmony rule from present tense, just with 았 instead of 아.',
    ],
  },
  {
    id: 'ko_a2_past_other',
    language: lang,
    level,
    name: 'Past Tense — Other Vowel Stems',
    verbEnding: '-었-',
    tense: 'preterite',
    description:
      'When the verb stem\'s last vowel is NOT ㅏ or ㅗ, add 었 to form the past tense.\n' +
      'These are the "dark vowel" stems (음성 모음).',
    rule: 'Remove 다 → if last stem vowel is not ㅏ/ㅗ → add 었어요 (polite).',
    endings: {
      polite_informal: '-었어요',
      polite_formal: '-었습니다',
      casual: '-었어',
    },
    subjectLabels: LABELS,
    exampleVerbs: ['먹다', '읽다', '마시다', '쉬다'],
    tips: [
      'ㅣ contracts: 마시 + 었 → 마셨 (the ㅣ+ㅓ merges into ㅕ).',
      'For stems ending in ㅜ: 배우 + 었 → 배웠 (ㅜ+ㅓ = ㅝ).',
    ],
  },
  {
    id: 'ko_a2_past_hada',
    language: lang,
    level,
    name: 'Past Tense — 하다 Verbs',
    verbEnding: '-했-',
    tense: 'preterite',
    description:
      '하다 ("to do") verbs ALWAYS use 했 in the past tense, regardless of vowel harmony.\n' +
      'Since hundreds of Korean verbs are "noun + 하다", this one pattern covers a huge number of verbs.',
    rule: 'Replace 하다 with 했어요 (polite), 했습니다 (formal), or 했어 (casual).',
    endings: {
      polite_informal: '-했어요',
      polite_formal: '-했습니다',
      casual: '-했어',
    },
    subjectLabels: LABELS,
    exampleVerbs: ['공부하다', '운동하다', '일하다'],
    tips: [
      '하 + 였 contracts to 했. So 공부하다 → 공부했어요.',
      'ANY "noun + 하다" verb follows this exact pattern: 요리했어요, 청소했어요, 전화했어요...',
      'This is one of the most productive patterns in Korean! Learn it once, use it thousands of times.',
    ],
  },
];
