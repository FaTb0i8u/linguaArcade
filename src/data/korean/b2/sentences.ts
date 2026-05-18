/**
 * Korean B2 Sentence Patterns (TOPIK II Level 4)
 *
 * Covers: causative (-게 하다), passive (-이/히/리/기),
 * unintended cause (-는 바람에), contrast (-는 반면에),
 * personal experience (-더라고요), near-miss (-(으)ㄹ 뻔하다).
 */

import type { SentencePattern } from '../../../types';

const lang = 'ko' as const;
const level = 'B2' as const;

export const KOREAN_B2_SENTENCES: SentencePattern[] = [
  // ── causative: -게 하다 (3) ───────────────────────────────
  {
    id: 'ko_b2_s001', language: lang, level, category: 'causative',
    words: ['엄마가', '아이에게', '야채를', '먹게', '했어요'],
    translation: 'The mother made the child eat vegetables.',
    hint: 'causative: verb stem + 게 하다',
    distractors: ['먹었어요', '먹어요', '먹히다'],
  },
  {
    id: 'ko_b2_s002', language: lang, level, category: 'causative',
    words: ['선생님이', '학생들을', '발표하게', '했어요'],
    translation: 'The teacher had the students give a presentation.',
    hint: 'causative: 발표하다 → 발표하게 하다',
    distractors: ['발표했어요', '발표시켰어요', '발표해요'],
  },
  {
    id: 'ko_b2_s003', language: lang, level, category: 'causative',
    words: ['그', '영화가', '저를', '울게', '했어요'],
    translation: 'That movie made me cry.',
    hint: 'causative: 울다 → 울게 하다',
    distractors: ['울었어요', '울려요'],
  },

  // ── passive: -이/히/리/기 (3) ─────────────────────────────
  {
    id: 'ko_b2_s004', language: lang, level, category: 'passive',
    words: ['산이', '여기서', '보여요'],
    translation: 'The mountain can be seen from here.',
    hint: 'passive: 보다 → 보이다',
    distractors: ['봐요', '보세요', '봤어요'],
  },
  {
    id: 'ko_b2_s005', language: lang, level, category: 'passive',
    words: ['그', '책이', '많이', '팔렸어요'],
    translation: 'That book was sold a lot.',
    hint: 'passive: 팔다 → 팔리다',
    distractors: ['팔았어요', '팔아요', '팔게요'],
  },
  {
    id: 'ko_b2_s006', language: lang, level, category: 'passive',
    words: ['멀리서', '음악이', '들려요'],
    translation: 'Music can be heard from afar.',
    hint: 'passive: 듣다 → 들리다',
    distractors: ['들어요', '들었어요'],
  },

  // ── unintended_cause: -는 바람에 (2) ─────────────────────
  {
    id: 'ko_b2_s007', language: lang, level, category: 'unintended_cause',
    words: ['갑자기', '비가', '오는', '바람에', '옷이', '다', '젖었어요'],
    translation: 'Because it suddenly rained, all my clothes got wet.',
    hint: 'unintended cause: verb stem + 는 바람에 → negative result',
    distractors: ['와서', '오니까', '오면'],
  },
  {
    id: 'ko_b2_s008', language: lang, level, category: 'unintended_cause',
    words: ['알람이', '안', '울리는', '바람에', '회의에', '늦었어요'],
    translation: 'Because my alarm didn\'t go off, I was late for the meeting.',
    hint: 'unintended cause: unexpected event + 는 바람에',
    distractors: ['울려서', '울리니까'],
  },

  // ── contrast: -는 반면에 (3) ──────────────────────────────
  {
    id: 'ko_b2_s009', language: lang, level, category: 'contrast',
    words: ['이', '식당은', '음식이', '맛있는', '반면에', '가격이', '비싸요'],
    translation: 'This restaurant\'s food is delicious; on the other hand, the prices are expensive.',
    hint: 'contrast: adjective/verb stem + (으)ㄴ/는 반면에',
    distractors: ['맛있어서', '맛있지만', '맛있으면'],
  },
  {
    id: 'ko_b2_s010', language: lang, level, category: 'contrast',
    words: ['형은', '키가', '큰', '반면에', '저는', '키가', '작아요'],
    translation: 'My older brother is tall, whereas I am short.',
    hint: 'contrast: adjective stem + ㄴ 반면에',
    distractors: ['크지만', '커서', '크면'],
  },
  {
    id: 'ko_b2_s011', language: lang, level, category: 'contrast',
    words: ['서울은', '교통이', '편리한', '반면에', '집값이', '높아요'],
    translation: 'Seoul has convenient transportation, but housing prices are high.',
    hint: 'contrast: 편리하다 → 편리한 반면에',
    distractors: ['편리해서', '편리하면'],
  },

  // ── personal_experience: -더라고요 (3) ────────────────────
  {
    id: 'ko_b2_s012', language: lang, level, category: 'personal_experience',
    words: ['한국', '음식이', '생각보다', '맵더라고요'],
    translation: 'I found that Korean food was spicier than I expected.',
    hint: 'personal experience: stem + 더라고요 (what you witnessed)',
    distractors: ['매워요', '매웠어요', '맵지요'],
  },
  {
    id: 'ko_b2_s013', language: lang, level, category: 'personal_experience',
    words: ['어제', '날씨가', '정말', '춥더라고요'],
    translation: 'I noticed the weather was really cold yesterday.',
    hint: 'personal experience: 춥다 → 춥더라고요',
    distractors: ['추워요', '추웠어요'],
  },
  {
    id: 'ko_b2_s014', language: lang, level, category: 'personal_experience',
    words: ['그', '영화가', '재미있더라고요'],
    translation: 'I found that movie to be interesting.',
    hint: 'personal experience: 재미있다 → 재미있더라고요',
    distractors: ['재미있어요', '재미있었어요', '재미있지요'],
  },

  // ── near_miss: -(으)ㄹ 뻔하다 (2) ────────────────────────
  {
    id: 'ko_b2_s015', language: lang, level, category: 'near_miss',
    words: ['오늘', '아침에', '늦을', '뻔했어요'],
    translation: 'I almost was late this morning.',
    hint: 'near-miss: verb stem + (으)ㄹ 뻔하다',
    distractors: ['늦었어요', '늦어요', '늦겠어요'],
  },
  {
    id: 'ko_b2_s016', language: lang, level, category: 'near_miss',
    words: ['비행기를', '놓칠', '뻔했어요'],
    translation: 'I almost missed the flight.',
    hint: 'near-miss: 놓치다 → 놓칠 뻔하다',
    distractors: ['놓쳤어요', '놓쳐요'],
  },
];
