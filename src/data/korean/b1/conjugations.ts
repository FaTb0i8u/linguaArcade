/**
 * Korean B1 Verb Conjugations (TOPIK II Level 3)
 *
 * At B1 we introduce three key grammatical structures:
 * 1. Future tense — -(으)ㄹ 거예요 / -(으)ㄹ 겁니다
 * 2. Progressive aspect — -고 있다
 * 3. Honorific forms — -(으)시다
 */

import type { ConjugationEntry, ConjugationPattern } from '../../../types';

const lang = 'ko' as const;
const level = 'B1' as const;

const LABELS: Record<string, string> = {
  polite_informal: '해요체 (polite informal)',
  polite_formal: '합쇼체 (polite formal)',
  casual: '해체 (casual)',
};

const rawConjugations: Omit<ConjugationEntry, 'subjectLabels'>[] = [
  // ── Future tense — -(으)ㄹ 거예요 ──────────────────────────
  {
    id: 'ko_b1_c001', language: lang, level, infinitive: '가다',
    translation: 'to go', isRegular: true, tense: 'future',
    conjugations: {
      polite_informal: '갈 거예요',
      polite_formal: '갈 겁니다',
      casual: '갈 거야',
    },
  },
  {
    id: 'ko_b1_c002', language: lang, level, infinitive: '먹다',
    translation: 'to eat', isRegular: true, tense: 'future',
    conjugations: {
      polite_informal: '먹을 거예요',
      polite_formal: '먹을 겁니다',
      casual: '먹을 거야',
    },
  },
  {
    id: 'ko_b1_c003', language: lang, level, infinitive: '하다',
    translation: 'to do', isRegular: true, tense: 'future',
    conjugations: {
      polite_informal: '할 거예요',
      polite_formal: '할 겁니다',
      casual: '할 거야',
    },
  },
  {
    id: 'ko_b1_c004', language: lang, level, infinitive: '보다',
    translation: 'to see / watch', isRegular: true, tense: 'future',
    conjugations: {
      polite_informal: '볼 거예요',
      polite_formal: '볼 겁니다',
      casual: '볼 거야',
    },
  },
  {
    id: 'ko_b1_c005', language: lang, level, infinitive: '읽다',
    translation: 'to read', isRegular: true, tense: 'future',
    conjugations: {
      polite_informal: '읽을 거예요',
      polite_formal: '읽을 겁니다',
      casual: '읽을 거야',
    },
  },
  {
    id: 'ko_b1_c006', language: lang, level, infinitive: '만들다',
    translation: 'to make', isRegular: true, tense: 'future',
    conjugations: {
      polite_informal: '만들 거예요',
      polite_formal: '만들 겁니다',
      casual: '만들 거야',
    },
  },

  // ── Progressive aspect — -고 있다 ──────────────────────────
  {
    id: 'ko_b1_c007', language: lang, level, infinitive: '먹다',
    translation: 'to eat (progressive)', isRegular: true, tense: 'present',
    conjugations: {
      polite_informal: '먹고 있어요',
      polite_formal: '먹고 있습니다',
      casual: '먹고 있어',
    },
  },
  {
    id: 'ko_b1_c008', language: lang, level, infinitive: '읽다',
    translation: 'to read (progressive)', isRegular: true, tense: 'present',
    conjugations: {
      polite_informal: '읽고 있어요',
      polite_formal: '읽고 있습니다',
      casual: '읽고 있어',
    },
  },
  {
    id: 'ko_b1_c009', language: lang, level, infinitive: '공부하다',
    translation: 'to study (progressive)', isRegular: true, tense: 'present',
    conjugations: {
      polite_informal: '공부하고 있어요',
      polite_formal: '공부하고 있습니다',
      casual: '공부하고 있어',
    },
  },
  {
    id: 'ko_b1_c010', language: lang, level, infinitive: '기다리다',
    translation: 'to wait (progressive)', isRegular: true, tense: 'present',
    conjugations: {
      polite_informal: '기다리고 있어요',
      polite_formal: '기다리고 있습니다',
      casual: '기다리고 있어',
    },
  },
  {
    id: 'ko_b1_c011', language: lang, level, infinitive: '자다',
    translation: 'to sleep (progressive)', isRegular: true, tense: 'present',
    conjugations: {
      polite_informal: '자고 있어요',
      polite_formal: '자고 있습니다',
      casual: '자고 있어',
    },
  },
  {
    id: 'ko_b1_c012', language: lang, level, infinitive: '운동하다',
    translation: 'to exercise (progressive)', isRegular: true, tense: 'present',
    conjugations: {
      polite_informal: '운동하고 있어요',
      polite_formal: '운동하고 있습니다',
      casual: '운동하고 있어',
    },
  },

  // ── Honorific forms — -(으)시다 ─────────────────────────────
  {
    id: 'ko_b1_c013', language: lang, level, infinitive: '가다',
    translation: 'to go (honorific)', isRegular: true, tense: 'present',
    conjugations: {
      polite_informal: '가세요',
      polite_formal: '가십니다',
      casual: '가셔',
    },
  },
  {
    id: 'ko_b1_c014', language: lang, level, infinitive: '먹다',
    translation: 'to eat (honorific: 드시다)', isRegular: false, tense: 'present',
    conjugations: {
      polite_informal: '드세요',
      polite_formal: '드십니다',
      casual: '드셔',
    },
  },
  {
    id: 'ko_b1_c015', language: lang, level, infinitive: '자다',
    translation: 'to sleep (honorific: 주무시다)', isRegular: false, tense: 'present',
    conjugations: {
      polite_informal: '주무세요',
      polite_formal: '주무십니다',
      casual: '주무셔',
    },
  },
  {
    id: 'ko_b1_c016', language: lang, level, infinitive: '말하다',
    translation: 'to speak (honorific: 말씀하시다)', isRegular: true, tense: 'present',
    conjugations: {
      polite_informal: '말씀하세요',
      polite_formal: '말씀하십니다',
      casual: '말씀하셔',
    },
  },
  {
    id: 'ko_b1_c017', language: lang, level, infinitive: '보다',
    translation: 'to see (honorific)', isRegular: true, tense: 'present',
    conjugations: {
      polite_informal: '보세요',
      polite_formal: '보십니다',
      casual: '보셔',
    },
  },
  {
    id: 'ko_b1_c018', language: lang, level, infinitive: '있다',
    translation: 'to be / exist (honorific: 계시다)', isRegular: false, tense: 'present',
    conjugations: {
      polite_informal: '계세요',
      polite_formal: '계십니다',
      casual: '계셔',
    },
  },
];

export const KOREAN_B1_CONJUGATIONS: ConjugationEntry[] = rawConjugations.map((c) => ({
  ...c,
  subjectLabels: LABELS,
}));

// ── Conjugation Patterns ────────────────────────────────────────

export const KOREAN_B1_CONJUGATION_PATTERNS: ConjugationPattern[] = [
  {
    id: 'ko_b1_fut_cons',
    language: lang,
    level,
    name: 'Future Tense — Consonant-ending Stems',
    verbEnding: '-(으)ㄹ 거예요',
    tense: 'future',
    description:
      'When the verb stem ends in a consonant, add 을 거예요 to express future intention or plan.\n' +
      'This is the most common future construction in spoken Korean.',
    rule: 'Remove 다 → if stem ends in consonant → add 을 거예요 (polite).',
    endings: {
      polite_informal: '-을 거예요',
      polite_formal: '-을 겁니다',
      casual: '-을 거야',
    },
    subjectLabels: LABELS,
    exampleVerbs: ['먹다', '읽다'],
    tips: [
      '먹다 → 먹 + 을 거예요 → 먹을 거예요.',
      'This form expresses intent ("I will…") or prediction ("It will…").',
      'In very formal writing, -(으)ㄹ 것입니다 is used instead of -(으)ㄹ 겁니다.',
    ],
  },
  {
    id: 'ko_b1_fut_vow',
    language: lang,
    level,
    name: 'Future Tense — Vowel-ending Stems',
    verbEnding: '-ㄹ 거예요',
    tense: 'future',
    description:
      'When the verb stem ends in a vowel, attach ㄹ 거예요 directly (ㄹ is added as a batchim).\n' +
      'Stems already ending in ㄹ simply keep it.',
    rule: 'Remove 다 → if stem ends in vowel → add ㄹ 거예요 (polite).',
    endings: {
      polite_informal: '-ㄹ 거예요',
      polite_formal: '-ㄹ 겁니다',
      casual: '-ㄹ 거야',
    },
    subjectLabels: LABELS,
    exampleVerbs: ['가다', '하다', '보다', '만들다'],
    tips: [
      '가다 → 가 + ㄹ 거예요 → 갈 거예요 (ㄹ merges as batchim on 가).',
      '만들다 already ends in ㄹ, so: 만들 + 거예요 → 만들 거예요.',
      'For ㄹ-ending stems, the ㄹ batchim stays; don\'t double it.',
    ],
  },
  {
    id: 'ko_b1_prog',
    language: lang,
    level,
    name: 'Progressive Aspect — -고 있다',
    verbEnding: '-고 있다',
    tense: 'present',
    description:
      'Attach -고 있다 to any verb stem to express an ongoing action ("is doing…").\n' +
      'This works identically for ALL verb types — no vowel harmony needed.',
    rule: 'Remove 다 → add 고 있어요 (polite), 고 있습니다 (formal), or 고 있어 (casual).',
    endings: {
      polite_informal: '-고 있어요',
      polite_formal: '-고 있습니다',
      casual: '-고 있어',
    },
    subjectLabels: LABELS,
    exampleVerbs: ['먹다', '읽다', '공부하다', '기다리다', '자다', '운동하다'],
    tips: [
      'Unlike English, Korean also uses -고 있다 with "wear" verbs to mean a resulting state: 모자를 쓰고 있다 = "is wearing a hat".',
      'The progressive can combine with past: 먹고 있었어요 = "was eating".',
      '-고 있다 is purely mechanical: just drop 다 and add 고 있다. No stem changes!',
    ],
  },
  {
    id: 'ko_b1_honor',
    language: lang,
    level,
    name: 'Honorific Forms — -(으)시다',
    verbEnding: '-(으)시다',
    tense: 'present',
    description:
      'Add -(으)시- to the verb stem to show respect for the subject of the sentence.\n' +
      'Use when the subject is someone older, higher in status, or a stranger.\n' +
      'Some common verbs have completely irregular honorific replacements.',
    rule: 'Remove 다 → if stem ends in consonant: add 으세요 (polite); if vowel: add 세요 (polite).',
    endings: {
      polite_informal: '-(으)세요',
      polite_formal: '-(으)십니다',
      casual: '-(으)셔',
    },
    subjectLabels: LABELS,
    exampleVerbs: ['가다', '보다', '말하다'],
    tips: [
      'Vowel stems: 가다 → 가 + 세요 → 가세요. 보다 → 보 + 세요 → 보세요.',
      'Consonant stems: 읽다 → 읽 + 으세요 → 읽으세요.',
      'Irregular honorifics must be memorized: 먹다 → 드시다, 자다 → 주무시다, 있다 → 계시다.',
      'Never use honorific forms about yourself — only about the respected subject.',
    ],
  },
];
