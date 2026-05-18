import type { SentencePattern } from '../../../types';

const lang = 'ko' as const;
const level = 'B1' as const;

export const KOREAN_B1_SENTENCES: SentencePattern[] = [
  // ── future_tense: -(으)ㄹ 거예요 ──
  {
    id: 'ko_b1_s001', language: lang, level, category: 'future_tense',
    words: ['내일', '친구를', '만날', '거예요'],
    translation: 'I will meet my friend tomorrow.',
    hint: 'future tense: verb stem + ㄹ/을 거예요',
    distractors: ['만났어요', '만나세요'],
  },
  {
    id: 'ko_b1_s002', language: lang, level, category: 'future_tense',
    words: ['주말에', '영화를', '볼', '거예요'],
    translation: 'I will watch a movie on the weekend.',
    hint: 'future tense: 보다 → 볼 거예요',
    distractors: ['봤어요', '보세요', '봅니다'],
  },
  {
    id: 'ko_b1_s003', language: lang, level, category: 'future_tense',
    words: ['다음 주에', '한국에', '갈', '거예요'],
    translation: 'I will go to Korea next week.',
    hint: 'future tense: 가다 → 갈 거예요',
    distractors: ['갔어요', '가세요'],
  },

  // ── progressive: -고 있다 ──
  {
    id: 'ko_b1_s004', language: lang, level, category: 'progressive',
    words: ['지금', '책을', '읽고', '있어요'],
    translation: 'I am reading a book right now.',
    hint: 'progressive: verb stem + 고 있다',
    distractors: ['읽었어요', '읽으세요'],
  },
  {
    id: 'ko_b1_s005', language: lang, level, category: 'progressive',
    words: ['아이가', '밖에서', '놀고', '있어요'],
    translation: 'The child is playing outside.',
    hint: 'progressive: 놀다 → 놀고 있다',
    distractors: ['놀았어요', '노세요', '놉니다'],
  },
  {
    id: 'ko_b1_s006', language: lang, level, category: 'progressive',
    words: ['언니가', '음악을', '듣고', '있어요'],
    translation: 'My older sister is listening to music.',
    hint: 'progressive: 듣다 → 듣고 있다',
    distractors: ['들었어요', '들으세요'],
  },

  // ── honorific: -(으)시다 ──
  {
    id: 'ko_b1_s007', language: lang, level, category: 'honorific',
    words: ['선생님이', '교실에', '들어오셨어요'],
    translation: 'The teacher came into the classroom.',
    hint: 'honorific past: verb stem + (으)셨어요',
    distractors: ['들어왔어요', '들어오세요', '들어옵니다'],
  },
  {
    id: 'ko_b1_s008', language: lang, level, category: 'honorific',
    words: ['할머니께서', '식사를', '하고', '계세요'],
    translation: 'Grandmother is having a meal.',
    hint: 'honorific progressive: 계시다 (honorific of 있다)',
    distractors: ['있어요', '했어요'],
  },

  // ── cause_sequence: -아/어서 ──
  {
    id: 'ko_b1_s009', language: lang, level, category: 'cause_sequence',
    words: ['비가', '와서', '우산을', '가져갔어요'],
    translation: 'It was raining, so I took an umbrella.',
    hint: 'cause/reason: verb stem + 아/어서',
    distractors: ['오니까', '오면', '왔어요'],
  },
  {
    id: 'ko_b1_s010', language: lang, level, category: 'cause_sequence',
    words: ['배가', '고파서', '밥을', '먹었어요'],
    translation: 'I was hungry, so I ate.',
    hint: 'cause/reason: 고프다 → 고파서',
    distractors: ['고프면', '고프니까'],
  },
  {
    id: 'ko_b1_s011', language: lang, level, category: 'cause_sequence',
    words: ['늦게', '일어나서', '학교에', '지각했어요'],
    translation: 'I woke up late, so I was late to school.',
    hint: 'cause/sequence: 일어나다 → 일어나서',
    distractors: ['일어나면', '일어나니까', '일어났어요'],
  },

  // ── conditional: -(으)면 ──
  {
    id: 'ko_b1_s012', language: lang, level, category: 'conditional',
    words: ['시간이', '있으면', '같이', '가요'],
    translation: 'If you have time, let\'s go together.',
    hint: 'conditional: 있다 → 있으면',
    distractors: ['있어서', '있으니까'],
  },
  {
    id: 'ko_b1_s013', language: lang, level, category: 'conditional',
    words: ['날씨가', '좋으면', '산책할', '거예요'],
    translation: 'If the weather is nice, I will take a walk.',
    hint: 'conditional: 좋다 → 좋으면',
    distractors: ['좋아서', '좋으니까', '좋았어요'],
  },
  {
    id: 'ko_b1_s014', language: lang, level, category: 'conditional',
    words: ['열심히', '공부하면', '시험에', '합격해요'],
    translation: 'If you study hard, you will pass the exam.',
    hint: 'conditional: 공부하다 → 공부하면',
    distractors: ['공부해서', '공부하니까'],
  },

  // ── indirect_speech: -다고/냐고 ──
  {
    id: 'ko_b1_s015', language: lang, level, category: 'indirect_speech',
    words: ['친구가', '내일', '온다고', '했어요'],
    translation: 'My friend said they are coming tomorrow.',
    hint: 'indirect speech (statement): verb stem + ㄴ/는다고 하다',
    distractors: ['오냐고', '오라고', '왔어요'],
  },
  {
    id: 'ko_b1_s016', language: lang, level, category: 'indirect_speech',
    words: ['선생님이', '어디', '가냐고', '물어봤어요'],
    translation: 'The teacher asked where I was going.',
    hint: 'indirect speech (question): verb stem + 냐고 하다',
    distractors: ['간다고', '가라고', '갔어요'],
  },
];
