/**
 * Korean C1 Sentence Patterns (TOPIK II Level 5)
 *
 * Covers: reported speech (indirect quotation), retrospective -더-,
 * double past -았/었었-, equivalence -는 셈이다,
 * addition -는 데다가, necessary condition -아/어야.
 */

import type { SentencePattern } from '../../../types';

const lang = 'ko' as const;
const level = 'C1' as const;

export const KOREAN_C1_SENTENCES: SentencePattern[] = [
  // ── reported_speech: indirect quotation (3) ──────────────
  {
    id: 'ko_c1_s001', language: lang, level, category: 'reported_speech',
    words: ['친구가', '내일', '시간이', '없다고', '했어요'],
    translation: 'My friend said they don\'t have time tomorrow.',
    hint: 'indirect statement: adjective stem + 다고 하다',
    distractors: ['없어요', '없으니까', '없다면'],
  },
  {
    id: 'ko_c1_s002', language: lang, level, category: 'reported_speech',
    words: ['선생님이', '왜', '숙제를', '안', '했냐고', '물어보셨어요'],
    translation: 'The teacher asked why I didn\'t do the homework.',
    hint: 'indirect question: -냐고 하다',
    distractors: ['했다고', '하라고', '했어요'],
  },
  {
    id: 'ko_c1_s003', language: lang, level, category: 'reported_speech',
    words: ['동생이', '같이', '영화를', '보자고', '했어요'],
    translation: 'My younger sibling suggested we watch a movie together.',
    hint: 'indirect suggestion: -자고 하다',
    distractors: ['보라고', '본다고', '봤다고'],
  },

  // ── retrospective: personal observation recall (3) ───────
  {
    id: 'ko_c1_s004', language: lang, level, category: 'retrospective',
    words: ['그', '식당', '음식이', '정말', '맛있더라고요'],
    translation: 'I found that the food at that restaurant was really delicious.',
    hint: 'retrospective: stem + 더라고요 (personal observation)',
    distractors: ['맛있어요', '맛있었어요', '맛있겠어요'],
  },
  {
    id: 'ko_c1_s005', language: lang, level, category: 'retrospective',
    words: ['밖에', '나가', '보니까', '눈이', '오더군요'],
    translation: 'When I went outside, I noticed it was snowing.',
    hint: 'retrospective surprise: stem + 더군요',
    distractors: ['와요', '왔어요', '올까요'],
  },
  {
    id: 'ko_c1_s006', language: lang, level, category: 'retrospective',
    words: ['어렸을', '때', '자주', '가던', '공원이', '없어졌어요'],
    translation: 'The park I used to go to often as a child is gone.',
    hint: 'retrospective modifier: stem + 던 (recalled past)',
    distractors: ['가는', '간', '갔던'],
  },

  // ── double_past: changed state (2) ───────────────────────
  {
    id: 'ko_c1_s007', language: lang, level, category: 'double_past',
    words: ['전에', '서울에', '살았었어요'],
    translation: 'I had lived in Seoul (but I don\'t anymore).',
    hint: 'double past: stem + 았/었었 (discontinued state)',
    distractors: ['살아요', '살았어요', '살겠어요'],
  },
  {
    id: 'ko_c1_s008', language: lang, level, category: 'double_past',
    words: ['어렸을', '때', '피아노를', '배웠었는데', '지금은', '못', '쳐요'],
    translation: 'I had learned piano when I was young, but now I can\'t play.',
    hint: 'double past + contrast: -았/었었는데 지금은…',
    distractors: ['배웠는데', '배우는데', '배울 텐데'],
  },

  // ── equivalence: -는 셈이다 (2) ──────────────────────────
  {
    id: 'ko_c1_s009', language: lang, level, category: 'equivalence',
    words: ['거의', '다', '한', '셈이에요'],
    translation: 'It\'s as good as done.',
    hint: 'equivalence: (으)ㄴ 셈이다 — "amounts to"',
    distractors: ['했어요', '할까요', '하겠어요'],
  },
  {
    id: 'ko_c1_s010', language: lang, level, category: 'equivalence',
    words: ['매일', '야근하니까', '회사에서', '사는', '셈이에요'],
    translation: 'Since I work overtime every day, it\'s practically like living at the office.',
    hint: 'equivalence: verb stem + 는 셈이다',
    distractors: ['살아요', '살았어요', '살겠어요'],
  },

  // ── addition: -는 데다가 (3) ─────────────────────────────
  {
    id: 'ko_c1_s011', language: lang, level, category: 'addition',
    words: ['비가', '오는', '데다가', '바람도', '불어요'],
    translation: 'On top of it raining, the wind is blowing too.',
    hint: 'addition: verb stem + 는 데다가 — piling on factors',
    distractors: ['오니까', '오면', '와서'],
  },
  {
    id: 'ko_c1_s012', language: lang, level, category: 'addition',
    words: ['그', '식당은', '맛있는', '데다가', '가격도', '저렴해요'],
    translation: 'That restaurant is tasty and, on top of that, the prices are low.',
    hint: 'addition: adjective stem + (으)ㄴ 데다가',
    distractors: ['맛있어서', '맛있지만', '맛있으면'],
  },
  {
    id: 'ko_c1_s013', language: lang, level, category: 'addition',
    words: ['오늘', '피곤한', '데다가', '머리도', '아파요'],
    translation: 'I\'m tired today, and on top of that I have a headache.',
    hint: 'addition: 피곤하다 → 피곤한 데다가',
    distractors: ['피곤해서', '피곤하면', '피곤하니까'],
  },

  // ── necessary_condition: -아/어야 (2) ────────────────────
  {
    id: 'ko_c1_s014', language: lang, level, category: 'necessary_condition',
    words: ['연습해야', '잘할', '수', '있어요'],
    translation: 'Only if you practice can you do it well.',
    hint: 'necessary condition: stem + 아/어야 — "only if"',
    distractors: ['연습하면', '연습해서', '연습하고'],
  },
  {
    id: 'ko_c1_s015', language: lang, level, category: 'necessary_condition',
    words: ['직접', '가', '봐야', '알', '수', '있어요'],
    translation: 'You can only know by going there yourself.',
    hint: 'necessary condition: 가 보다 → 가 봐야 — must experience it',
    distractors: ['가면', '가서', '가니까'],
  },
];
