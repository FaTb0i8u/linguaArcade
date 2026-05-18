/**
 * Korean C2 Verb Conjugations (TOPIK II Level 6)
 *
 * Mastery-level conjugations covering three advanced areas:
 * 1. Archaic / literary forms — -노라, -리라, -도다
 * 2. Complex causative-passive chains — passive + -게 하다
 * 3. Elevated written imperatives — -시오 / -시기 바랍니다
 */

import type { ConjugationEntry, ConjugationPattern } from '../../../types';

const lang = 'ko' as const;
const level = 'C2' as const;

const LABELS: Record<string, string> = {
  polite_informal: '해요체 (polite informal)',
  polite_formal: '합쇼체 (polite formal)',
  casual: '해체 (casual)',
};

const rawConjugations: Omit<ConjugationEntry, 'subjectLabels'>[] = [
  // ── Literary / archaic verb forms ─────────────────────────────
  {
    id: 'ko_c2_c001', language: lang, level, infinitive: '가다',
    translation: 'I go (literary declarative)', isRegular: false, tense: 'present',
    conjugations: {
      polite_informal: '가노라',
      polite_formal: '가노라',
      casual: '가노라',
    },
  },
  {
    id: 'ko_c2_c002', language: lang, level, infinitive: '하다',
    translation: 'I shall do (literary future)', isRegular: false, tense: 'present',
    conjugations: {
      polite_informal: '하리라',
      polite_formal: '하리라',
      casual: '하리라',
    },
  },
  {
    id: 'ko_c2_c003', language: lang, level, infinitive: '오다',
    translation: 'lo, [it] comes! (literary exclamatory)', isRegular: false, tense: 'present',
    conjugations: {
      polite_informal: '오도다',
      polite_formal: '오도다',
      casual: '오도다',
    },
  },
  {
    id: 'ko_c2_c004', language: lang, level, infinitive: '알다',
    translation: 'I shall know (literary future)', isRegular: false, tense: 'present',
    conjugations: {
      polite_informal: '알리라',
      polite_formal: '알리라',
      casual: '알리라',
    },
  },

  // ── Complex causative-passive chains ──────────────────────────
  {
    id: 'ko_c2_c005', language: lang, level, infinitive: '읽다',
    translation: 'to make [it] be read (causative-passive)', isRegular: false, tense: 'present',
    conjugations: {
      polite_informal: '읽히게 해요',
      polite_formal: '읽히게 합니다',
      casual: '읽히게 해',
    },
  },
  {
    id: 'ko_c2_c006', language: lang, level, infinitive: '보다',
    translation: 'to make [it] be seen / visible (causative-passive)', isRegular: false, tense: 'present',
    conjugations: {
      polite_informal: '보이게 해요',
      polite_formal: '보이게 합니다',
      casual: '보이게 해',
    },
  },
  {
    id: 'ko_c2_c007', language: lang, level, infinitive: '듣다',
    translation: 'to make [it] be heard / audible (causative-passive)', isRegular: false, tense: 'present',
    conjugations: {
      polite_informal: '들리게 해요',
      polite_formal: '들리게 합니다',
      casual: '들리게 해',
    },
  },

  // ── Elevated written imperatives ──────────────────────────────
  {
    id: 'ko_c2_c008', language: lang, level, infinitive: '하다',
    translation: 'do (elevated written imperative)', isRegular: true, tense: 'present',
    conjugations: {
      polite_informal: '하세요',
      polite_formal: '하시기 바랍니다',
      casual: '하시오',
    },
  },
  {
    id: 'ko_c2_c009', language: lang, level, infinitive: '참고하다',
    translation: 'refer to (elevated written imperative)', isRegular: true, tense: 'present',
    conjugations: {
      polite_informal: '참고하세요',
      polite_formal: '참고하시기 바랍니다',
      casual: '참고하시오',
    },
  },
  {
    id: 'ko_c2_c010', language: lang, level, infinitive: '제출하다',
    translation: 'submit (elevated written imperative)', isRegular: true, tense: 'present',
    conjugations: {
      polite_informal: '제출하세요',
      polite_formal: '제출하시기 바랍니다',
      casual: '제출하시오',
    },
  },
];

export const KOREAN_C2_CONJUGATIONS: ConjugationEntry[] = rawConjugations.map((c) => ({
  ...c,
  subjectLabels: LABELS,
}));

// ── Conjugation Patterns ────────────────────────────────────────

export const KOREAN_C2_CONJUGATION_PATTERNS: ConjugationPattern[] = [
  {
    id: 'ko_c2_literary',
    language: lang,
    level,
    name: 'Literary Declarative Forms — -노라 / -리라 / -도다',
    verbEnding: '-노라/-리라/-도다',
    tense: 'present',
    description:
      'Archaic literary endings used in classical Korean prose, poetry, and formal proclamations.\n' +
      '-노라 declares a present action ("I go"), -리라 proclaims a future resolve ("I shall do"),\n' +
      'and -도다 expresses exclamatory wonder ("lo, it comes!").',
    rule:
      '-노라: stem + 노라 (가다 → 가노라). Used for first-person present declarations.\n' +
      '-리라: stem + 리라 (하다 → 하리라, 알다 → 알리라). Literary future / vow.\n' +
      '-도다: stem + 도다 (오다 → 오도다). Exclamatory literary ending.',
    endings: {
      polite_informal: '-노라 / -리라 / -도다',
      polite_formal: '-노라 / -리라 / -도다',
      casual: '-노라 / -리라 / -도다',
    },
    subjectLabels: LABELS,
    exampleVerbs: ['가다', '하다', '오다', '알다'],
    tips: [
      '가노라 — "I go / I am going" (poetic declaration, found in sijo and classical texts).',
      '하리라 — "I shall do" (solemn vow or literary future resolve).',
      '오도다 — "Lo, it comes!" (exclamatory wonder, rarely used in modern speech).',
      'These forms do not vary by speech level — they transcend the modern politeness system.',
      'Commonly encountered in Korean classical literature (고전 문학) and formal ceremony texts.',
      'Modern usage is mostly rhetorical or as fixed literary expressions.',
    ],
  },
  {
    id: 'ko_c2_caus_pass',
    language: lang,
    level,
    name: 'Complex Causative-Passive — -이/히/리/기 + -게 하다',
    verbEnding: '-이/히/리/기 + -게 하다',
    tense: 'present',
    description:
      'Korean passive suffixes -이, -히, -리, -기 create passive verbs from active ones.\n' +
      'Adding -게 하다 to the passive form creates a causative-passive chain:\n' +
      '"to make something be [verb]-ed".',
    rule:
      '1. Form the passive: 읽다 → 읽히다 (-히), 보다 → 보이다 (-이), 듣다 → 들리다 (-리).\n' +
      '2. Take the passive stem and add -게 하다 for causative-passive:\n' +
      '   읽히다 → 읽히게 하다 ("to make [it] be read").\n' +
      '   보이다 → 보이게 하다 ("to make [it] visible / be seen").\n' +
      '   들리다 → 들리게 하다 ("to make [it] audible / be heard").',
    endings: {
      polite_informal: '-게 해요',
      polite_formal: '-게 합니다',
      casual: '-게 해',
    },
    subjectLabels: LABELS,
    exampleVerbs: ['읽다', '보다', '듣다'],
    tips: [
      '읽다 → 읽히다 (passive: to be read) → 읽히게 하다 (to make [it] be read).',
      '보다 → 보이다 (to be seen) → 보이게 하다 (to make [it] visible).',
      '듣다 → 들리다 (to be heard) → 들리게 하다 (to make [it] audible).',
      'Passive suffixes are lexically determined — memorise which verbs take which suffix.',
      'The -게 하다 causative layer conjugates normally: 해요, 합니다, 해.',
      'Distinguish from simple causative -게 하다 (먹게 하다 "make [someone] eat") — here the base is already passive.',
    ],
  },
];
