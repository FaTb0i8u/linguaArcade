/**
 * Korean B2 Verb Conjugations (TOPIK II Level 4)
 *
 * At B2 we introduce three key grammatical structures:
 * 1. Causative -게 하다 (make someone do)
 * 2. Passive voice -이/히/리/기
 * 3. Retrospective discovery -았/었더니
 */

import type { ConjugationEntry, ConjugationPattern } from '../../../types';

const lang = 'ko' as const;
const level = 'B2' as const;

const LABELS: Record<string, string> = {
  polite_informal: '해요체 (polite informal)',
  polite_formal: '합쇼체 (polite formal)',
  casual: '해체 (casual)',
};

const rawConjugations: Omit<ConjugationEntry, 'subjectLabels'>[] = [
  // ── Causative — -게 하다 ───────────────────────────────────
  {
    id: 'ko_b2_c001', language: lang, level, infinitive: '먹다',
    translation: 'to make someone eat', isRegular: true, tense: 'present',
    conjugations: {
      polite_informal: '먹게 해요',
      polite_formal: '먹게 합니다',
      casual: '먹게 해',
    },
  },
  {
    id: 'ko_b2_c002', language: lang, level, infinitive: '웃다',
    translation: 'to make someone laugh', isRegular: true, tense: 'present',
    conjugations: {
      polite_informal: '웃게 해요',
      polite_formal: '웃게 합니다',
      casual: '웃게 해',
    },
  },
  {
    id: 'ko_b2_c003', language: lang, level, infinitive: '울다',
    translation: 'to make someone cry', isRegular: true, tense: 'present',
    conjugations: {
      polite_informal: '울게 해요',
      polite_formal: '울게 합니다',
      casual: '울게 해',
    },
  },
  {
    id: 'ko_b2_c004', language: lang, level, infinitive: '알다',
    translation: 'to make someone know / to inform', isRegular: true, tense: 'present',
    conjugations: {
      polite_informal: '알게 해요',
      polite_formal: '알게 합니다',
      casual: '알게 해',
    },
  },
  {
    id: 'ko_b2_c005', language: lang, level, infinitive: '기다리다',
    translation: 'to make someone wait', isRegular: true, tense: 'present',
    conjugations: {
      polite_informal: '기다리게 해요',
      polite_formal: '기다리게 합니다',
      casual: '기다리게 해',
    },
  },

  // ── Passive voice — -이/히/리/기 ───────────────────────────
  {
    id: 'ko_b2_c006', language: lang, level, infinitive: '보다',
    translation: 'to be seen (보이다)', isRegular: false, tense: 'present',
    conjugations: {
      polite_informal: '보여요',
      polite_formal: '보입니다',
      casual: '보여',
    },
  },
  {
    id: 'ko_b2_c007', language: lang, level, infinitive: '잡다',
    translation: 'to be caught (잡히다)', isRegular: false, tense: 'present',
    conjugations: {
      polite_informal: '잡혀요',
      polite_formal: '잡힙니다',
      casual: '잡혀',
    },
  },
  {
    id: 'ko_b2_c008', language: lang, level, infinitive: '열다',
    translation: 'to be opened (열리다)', isRegular: false, tense: 'present',
    conjugations: {
      polite_informal: '열려요',
      polite_formal: '열립니다',
      casual: '열려',
    },
  },
  {
    id: 'ko_b2_c009', language: lang, level, infinitive: '잠그다',
    translation: 'to be locked (잠기다)', isRegular: false, tense: 'present',
    conjugations: {
      polite_informal: '잠겨요',
      polite_formal: '잠깁니다',
      casual: '잠겨',
    },
  },
  {
    id: 'ko_b2_c010', language: lang, level, infinitive: '쓰다',
    translation: 'to be used (쓰이다)', isRegular: false, tense: 'present',
    conjugations: {
      polite_informal: '쓰여요',
      polite_formal: '쓰입니다',
      casual: '쓰여',
    },
  },

  // ── Retrospective discovery — -았/었더니 ───────────────────
  {
    id: 'ko_b2_c011', language: lang, level, infinitive: '먹다',
    translation: 'having eaten, [I discovered that]…', isRegular: true, tense: 'preterite',
    conjugations: {
      polite_informal: '먹었더니',
      polite_formal: '먹었더니',
      casual: '먹었더니',
    },
  },
  {
    id: 'ko_b2_c012', language: lang, level, infinitive: '자다',
    translation: 'having slept, [I discovered that]…', isRegular: true, tense: 'preterite',
    conjugations: {
      polite_informal: '잤더니',
      polite_formal: '잤더니',
      casual: '잤더니',
    },
  },
  {
    id: 'ko_b2_c013', language: lang, level, infinitive: '운동하다',
    translation: 'having exercised, [I discovered that]…', isRegular: true, tense: 'preterite',
    conjugations: {
      polite_informal: '운동했더니',
      polite_formal: '운동했더니',
      casual: '운동했더니',
    },
  },
  {
    id: 'ko_b2_c014', language: lang, level, infinitive: '공부하다',
    translation: 'having studied, [I discovered that]…', isRegular: true, tense: 'preterite',
    conjugations: {
      polite_informal: '공부했더니',
      polite_formal: '공부했더니',
      casual: '공부했더니',
    },
  },
];

export const KOREAN_B2_CONJUGATIONS: ConjugationEntry[] = rawConjugations.map((c) => ({
  ...c,
  subjectLabels: LABELS,
}));

// ── Conjugation Patterns ────────────────────────────────────────

export const KOREAN_B2_CONJUGATION_PATTERNS: ConjugationPattern[] = [
  {
    id: 'ko_b2_caus',
    language: lang,
    level,
    name: 'Causative — -게 하다',
    verbEnding: '-게 하다',
    tense: 'present',
    description:
      'Attach -게 하다 to any verb stem to express causation ("make / let someone do…").\n' +
      'The auxiliary 하다 conjugates for tense and speech level while the main stem stays unchanged.',
    rule: 'Remove 다 → add 게 하다. Conjugate 하다 for speech level: 해요 / 합니다 / 해.',
    endings: {
      polite_informal: '-게 해요',
      polite_formal: '-게 합니다',
      casual: '-게 해',
    },
    subjectLabels: LABELS,
    exampleVerbs: ['먹다', '웃다', '울다', '알다', '기다리다'],
    tips: [
      '먹다 → 먹 + 게 해요 → 먹게 해요 ("I make [someone] eat").',
      '-게 하다 can mean either "make" (강제) or "let" (허용) depending on context.',
      'Past tense: 먹게 했어요 ("made someone eat"). Future: 먹게 할 거예요.',
      'Do not confuse with -게 되다 ("end up doing"), which expresses an involuntary result.',
    ],
  },
  {
    id: 'ko_b2_pass',
    language: lang,
    level,
    name: 'Passive Voice — -이/히/리/기',
    verbEnding: '-이/히/리/기',
    tense: 'present',
    description:
      'Korean forms the passive by adding one of four suffixes (-이, -히, -리, -기) to the verb stem.\n' +
      'The choice of suffix is lexically determined — there is no universal rule, so each verb must be memorised.',
    rule: 'Replace 다 with the appropriate passive suffix: -이다, -히다, -리다, or -기다. Conjugate the resulting verb normally.',
    endings: {
      polite_informal: '-(이/히/리/기) + 어요',
      polite_formal: '-(이/히/리/기) + ㅂ니다',
      casual: '-(이/히/리/기) + 어',
    },
    subjectLabels: LABELS,
    exampleVerbs: ['보다', '잡다', '열다', '잠그다', '쓰다'],
    tips: [
      '-이: 보다 → 보이다, 쓰다 → 쓰이다, 놓다 → 놓이다.',
      '-히: 잡다 → 잡히다, 먹다 → 먹히다, 읽다 → 읽히다.',
      '-리: 열다 → 열리다, 팔다 → 팔리다, 풀다 → 풀리다.',
      '-기: 잠그다 → 잠기다, 안다 → 안기다, 끊다 → 끊기다.',
      'The passive suffix must be memorised per verb — no shortcut rule exists.',
      'Do NOT double-stack -이/히/리/기 with -아/어지다; use one or the other.',
    ],
  },
  {
    id: 'ko_b2_retro',
    language: lang,
    level,
    name: 'Retrospective Discovery — -았/었더니',
    verbEnding: '-았/었더니',
    tense: 'preterite',
    description:
      'Attach -았/었더니 to a verb stem to express that the speaker performed an action in the past\n' +
      'and subsequently discovered an outcome or result. The second clause states the discovery.',
    rule: 'Remove 다 → apply past-tense vowel contraction (아/어) → add 더니. -더니 is a clause connector and does not change by speech level.',
    endings: {
      polite_informal: '-았/었더니',
      polite_formal: '-았/었더니',
      casual: '-았/었더니',
    },
    subjectLabels: LABELS,
    exampleVerbs: ['먹다', '자다', '운동하다', '공부하다'],
    tips: [
      '먹다 → 먹었더니 배가 불러요 ("I ate, and [as a result] I\'m full").',
      '자다 → 잤더니 피곤이 풀렸어요 ("I slept, and my fatigue was relieved").',
      '-더니 is a connective ending — speech level is set by the SECOND clause\'s final verb.',
      'First-person subject uses -았/었더니; third-person uses -더니 (without past marker) for observed change.',
    ],
  },
];
