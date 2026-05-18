/**
 * Korean C1 Verb Conjugations (TOPIK II Level 5)
 *
 * At C1 we introduce three advanced grammatical structures:
 * 1. Reported speech (formal) — -다고 하다 / -냐고 하다 (indirect quotation)
 * 2. Retrospective past — -더- 회상 (recollection)
 * 3. Double past — -았/었었- 대과거 (had done, more-than-past)
 */

import type { ConjugationEntry, ConjugationPattern } from '../../../types';

const lang = 'ko' as const;
const level = 'C1' as const;

const LABELS: Record<string, string> = {
  polite_informal: '해요체 (polite informal)',
  polite_formal: '합쇼체 (polite formal)',
  casual: '해체 (casual)',
};

const rawConjugations: Omit<ConjugationEntry, 'subjectLabels'>[] = [
  // ── Reported speech — -다고 하다 ──────────────────────────────
  {
    id: 'ko_c1_c001', language: lang, level, infinitive: '가다',
    translation: 'they say [someone] goes', isRegular: true, tense: 'present',
    conjugations: {
      polite_informal: '간다고 해요',
      polite_formal: '간다고 합니다',
      casual: '간다고 해',
    },
  },
  {
    id: 'ko_c1_c002', language: lang, level, infinitive: '먹다',
    translation: 'they say [someone] eats', isRegular: true, tense: 'present',
    conjugations: {
      polite_informal: '먹는다고 해요',
      polite_formal: '먹는다고 합니다',
      casual: '먹는다고 해',
    },
  },
  {
    id: 'ko_c1_c003', language: lang, level, infinitive: '좋다',
    translation: 'they say [it] is good', isRegular: true, tense: 'present',
    conjugations: {
      polite_informal: '좋다고 해요',
      polite_formal: '좋다고 합니다',
      casual: '좋다고 해',
    },
  },
  {
    id: 'ko_c1_c004', language: lang, level, infinitive: '학생이다',
    translation: 'they say [someone] is a student', isRegular: true, tense: 'present',
    conjugations: {
      polite_informal: '학생이라고 해요',
      polite_formal: '학생이라고 합니다',
      casual: '학생이라고 해',
    },
  },
  {
    id: 'ko_c1_c005', language: lang, level, infinitive: '하다',
    translation: 'they say [someone] does', isRegular: true, tense: 'present',
    conjugations: {
      polite_informal: '한다고 해요',
      polite_formal: '한다고 합니다',
      casual: '한다고 해',
    },
  },

  // ── Retrospective — -더라고요 (회상) ──────────────────────────
  {
    id: 'ko_c1_c006', language: lang, level, infinitive: '맛있다',
    translation: 'I recall it was delicious', isRegular: true, tense: 'imperfect',
    conjugations: {
      polite_informal: '맛있더라고요',
      polite_formal: '맛있더라고요',
      casual: '맛있더라고',
    },
  },
  {
    id: 'ko_c1_c007', language: lang, level, infinitive: '춥다',
    translation: 'I recall it was cold', isRegular: false, tense: 'imperfect',
    conjugations: {
      polite_informal: '춥더라고요',
      polite_formal: '춥더라고요',
      casual: '춥더라고',
    },
  },
  {
    id: 'ko_c1_c008', language: lang, level, infinitive: '바쁘다',
    translation: 'I recall [someone] was busy', isRegular: true, tense: 'imperfect',
    conjugations: {
      polite_informal: '바쁘더라고요',
      polite_formal: '바쁘더라고요',
      casual: '바쁘더라고',
    },
  },
  {
    id: 'ko_c1_c009', language: lang, level, infinitive: '재미있다',
    translation: 'I recall it was fun / interesting', isRegular: true, tense: 'imperfect',
    conjugations: {
      polite_informal: '재미있더라고요',
      polite_formal: '재미있더라고요',
      casual: '재미있더라고',
    },
  },
  {
    id: 'ko_c1_c010', language: lang, level, infinitive: '많다',
    translation: 'I recall there were many', isRegular: true, tense: 'imperfect',
    conjugations: {
      polite_informal: '많더라고요',
      polite_formal: '많더라고요',
      casual: '많더라고',
    },
  },

  // ── Double past — -았/었었- 대과거 ────────────────────────────
  {
    id: 'ko_c1_c011', language: lang, level, infinitive: '가다',
    translation: 'had gone (but not anymore)', isRegular: true, tense: 'pluperfect',
    conjugations: {
      polite_informal: '갔었어요',
      polite_formal: '갔었습니다',
      casual: '갔었어',
    },
  },
  {
    id: 'ko_c1_c012', language: lang, level, infinitive: '살다',
    translation: 'had lived [there] (no longer)', isRegular: true, tense: 'pluperfect',
    conjugations: {
      polite_informal: '살았었어요',
      polite_formal: '살았었습니다',
      casual: '살았었어',
    },
  },
  {
    id: 'ko_c1_c013', language: lang, level, infinitive: '좋아하다',
    translation: 'used to like (no longer)', isRegular: true, tense: 'pluperfect',
    conjugations: {
      polite_informal: '좋아했었어요',
      polite_formal: '좋아했었습니다',
      casual: '좋아했었어',
    },
  },
  {
    id: 'ko_c1_c014', language: lang, level, infinitive: '공부하다',
    translation: 'had studied (no longer)', isRegular: true, tense: 'pluperfect',
    conjugations: {
      polite_informal: '공부했었어요',
      polite_formal: '공부했었습니다',
      casual: '공부했었어',
    },
  },
];

export const KOREAN_C1_CONJUGATIONS: ConjugationEntry[] = rawConjugations.map((c) => ({
  ...c,
  subjectLabels: LABELS,
}));

// ── Conjugation Patterns ────────────────────────────────────────

export const KOREAN_C1_CONJUGATION_PATTERNS: ConjugationPattern[] = [
  {
    id: 'ko_c1_report',
    language: lang,
    level,
    name: 'Reported Speech — -ㄴ/는다고 하다',
    verbEnding: '-ㄴ/는다고 하다',
    tense: 'present',
    description:
      'Indirect quotation: report what someone said using -다고 하다.\n' +
      'Action verbs take -ㄴ/는다고, descriptive verbs (adjectives) take -다고,\n' +
      'and nouns with 이다 take -(이)라고.',
    rule:
      'Action verb with 받침: stem + 는다고 하다 (먹다 → 먹는다고 하다).\n' +
      'Action verb without 받침: stem + ㄴ다고 하다 (가다 → 간다고 하다).\n' +
      'Descriptive verb: stem + 다고 하다 (좋다 → 좋다고 하다).\n' +
      'Noun + 이다: noun + (이)라고 하다 (학생이다 → 학생이라고 하다).',
    endings: {
      polite_informal: '-ㄴ/는다고 해요',
      polite_formal: '-ㄴ/는다고 합니다',
      casual: '-ㄴ/는다고 해',
    },
    subjectLabels: LABELS,
    exampleVerbs: ['가다', '먹다', '좋다', '학생이다', '하다'],
    tips: [
      '가다 → 간다고 해요 (vowel stem: add ㄴ다고).',
      '먹다 → 먹는다고 해요 (consonant stem: add 는다고).',
      '좋다 → 좋다고 해요 (adjective: base form + 다고).',
      '학생이다 → 학생이라고 해요 (noun + 이라고).',
      'Past tense reported: -았/었다고 하다. Future: -(으)ㄹ 거라고 하다.',
      'Question form uses -냐고 하다: 간다고 → 가냐고 해요.',
    ],
  },
  {
    id: 'ko_c1_retro',
    language: lang,
    level,
    name: 'Retrospective Recollection — -더라고요',
    verbEnding: '-더라고요',
    tense: 'imperfect',
    description:
      'Express personal recollection of something the speaker directly experienced or witnessed.\n' +
      '-더- is a retrospective marker; -라고(요) wraps it as a reported observation.',
    rule:
      'Remove 다 from the dictionary form → attach 더라고요 directly to the stem.\n' +
      'No vowel harmony or contraction — the suffix is invariant.',
    endings: {
      polite_informal: '-더라고요',
      polite_formal: '-더라고요',
      casual: '-더라고',
    },
    subjectLabels: LABELS,
    exampleVerbs: ['맛있다', '춥다', '바쁘다', '재미있다', '많다'],
    tips: [
      '맛있다 → 맛있더라고요 ("I recall it was delicious").',
      '춥다 → 춥더라고요 ("I recall it was cold").',
      'Cannot be used about the speaker\'s own deliberate actions — only observations/feelings.',
      'Past recollection: -았/었더라고요 (e.g. 먹었더라고요 "I recall [they] had eaten").',
      '-더라고요 is commonly used in spoken Korean to share first-hand impressions.',
    ],
  },
  {
    id: 'ko_c1_dbl_past',
    language: lang,
    level,
    name: 'Double Past (대과거) — -았/었었-',
    verbEnding: '-았/었었-',
    tense: 'pluperfect',
    description:
      'The double past -았/었었- expresses that a past state or action is now discontinued.\n' +
      'It conveys "had done (but no longer)" — the Korean pluperfect / more-than-past.',
    rule:
      'Apply normal past-tense vowel contraction (아/어 → 았/었) TWICE:\n' +
      'stem + 았/었 + 었 + speech-level ending.\n' +
      '하다 verbs: 했었 + ending.',
    endings: {
      polite_informal: '-았/었었어요',
      polite_formal: '-았/었었습니다',
      casual: '-았/었었어',
    },
    subjectLabels: LABELS,
    exampleVerbs: ['가다', '살다', '좋아하다', '공부하다'],
    tips: [
      '가다 → 갔었어요 ("I had gone [but came back / no longer there]").',
      '살다 → 살았었어요 ("I had lived there [but moved away]").',
      'Simple past 갔어요 = "went"; double past 갔었어요 = "had gone (discontinued)".',
      '하다 → 했었어요. The 하 contracts to 해 → 했, then add 었 → 했었.',
      'Commonly used to reminisce: 어렸을 때 서울에서 살았었어요 ("When I was young, I had lived in Seoul").',
    ],
  },
];
