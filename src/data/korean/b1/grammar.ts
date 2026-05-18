import type { GrammarRule } from '../../../types';

const lang = 'ko' as const;
const level = 'B1' as const;

export const KOREAN_B1_GRAMMAR: GrammarRule[] = [
  {
    id: 'ko_b1_g001', language: lang, level,
    title: 'Future Tense -(으)ㄹ 거예요',
    explanation:
      'Express future plans or predictions with -(으)ㄹ 거예요. ' +
      'If the verb stem ends in a vowel or ㄹ, add -ㄹ 거예요 (가다 → 갈 거예요). ' +
      'If the verb stem ends in a consonant (other than ㄹ), add -을 거예요 (먹다 → 먹을 거예요). ' +
      'Use it for intentions ("I will …") and predictions ("It will probably …"). ' +
      'The formal equivalent is -(으)ㄹ 겁니다.',
    examples: [
      { target: '내일 친구를 만날 거예요.', english: 'I will meet a friend tomorrow.' },
      { target: '이번 주말에 영화를 볼 거예요.', english: 'I am going to watch a movie this weekend.' },
      { target: '내년에 한국에 갈 거예요.', english: 'I will go to Korea next year.' },
    ],
  },
  {
    id: 'ko_b1_g002', language: lang, level,
    title: 'Progressive -고 있다',
    explanation:
      'Attach -고 있다 to a verb stem to express an action in progress, similar to English "-ing". ' +
      'Formation: verb stem + 고 있다 (먹다 → 먹고 있다, 읽다 → 읽고 있다). ' +
      'Unlike the simple present (which can describe habitual actions), -고 있다 emphasises that the action is happening right now. ' +
      'It conjugates like 있다: 있어요 (polite), 있습니다 (formal).',
    examples: [
      { target: '지금 책을 읽고 있어요.', english: 'I am reading a book right now.' },
      { target: '동생이 음악을 듣고 있어요.', english: 'My younger sibling is listening to music.' },
      { target: '밖에 비가 오고 있어요.', english: 'It is raining outside.' },
    ],
  },
  {
    id: 'ko_b1_g003', language: lang, level,
    title: 'Honorific -(으)시다',
    explanation:
      'Add -(으)시- to a verb stem to show respect toward the subject of the sentence. ' +
      'Vowel-ending stems take -시- (가다 → 가시다), consonant-ending stems take -으시- (읽다 → 읽으시다). ' +
      'Use honorifics when the subject is an elder, a superior, or someone you want to show respect to. ' +
      'Some verbs have special honorific forms: 먹다/마시다 → 드시다, 자다 → 주무시다, 있다 → 계시다, 말하다 → 말씀하시다.',
    examples: [
      { target: '할머니께서 지금 주무시고 계세요.', english: 'Grandmother is sleeping now.' },
      { target: '선생님께서 책을 읽으셨어요.', english: 'The teacher read a book.' },
      { target: '아버지께서 식사를 드시고 계세요.', english: 'Father is having a meal.' },
    ],
  },
  {
    id: 'ko_b1_g004', language: lang, level,
    title: '-아/어서 (Cause / Sequence)',
    explanation:
      'The connective ending -아/어서 has two uses: (1) expressing a reason or cause ("because"), and (2) indicating sequential actions ("and then"). ' +
      'Formation: 양성 모음 (bright vowels ㅏ, ㅗ) → -아서; 음성 모음 (other vowels) → -어서; 하다 → 해서. ' +
      'Unlike -(으)니까, the -아/어서 clause cannot be used with imperative or propositive endings, and past tense -았/었- is not added before -아/어서 when expressing cause.',
    examples: [
      { target: '배가 아파서 병원에 갔어요.', english: 'I went to the hospital because my stomach hurt.' },
      { target: '시장에 가서 과일을 샀어요.', english: 'I went to the market and then bought fruit.' },
      { target: '늦게 일어나서 지각했어요.', english: 'I woke up late, so I was late.' },
    ],
  },
  {
    id: 'ko_b1_g005', language: lang, level,
    title: '-(으)면 (Conditional "if / when")',
    explanation:
      'Use -(으)면 to express a condition ("if") or a temporal condition ("when"). ' +
      'If the verb stem ends in a vowel or ㄹ, add -면 (가다 → 가면, 살다 → 살면). ' +
      'If the verb stem ends in a consonant (other than ㄹ), add -으면 (먹다 → 먹으면). ' +
      'Important: past tense cannot appear in the -(으)면 clause itself; only the main clause carries tense marking.',
    examples: [
      { target: '시간이 있으면 같이 영화 볼까요?', english: 'If you have time, shall we watch a movie together?' },
      { target: '봄이 오면 꽃이 펴요.', english: 'When spring comes, flowers bloom.' },
      { target: '열심히 공부하면 시험에 합격할 거예요.', english: 'If you study hard, you will pass the exam.' },
    ],
  },
  {
    id: 'ko_b1_g006', language: lang, level,
    title: '-지 않다 / 안 (Long vs Short Negation)',
    explanation:
      'Korean has two main negation patterns. ' +
      'Long negation: verb stem + -지 않다 (먹다 → 먹지 않다). This form works with all verbs and adjectives. ' +
      'Short negation: 안 + verb (안 먹다). This is more colloquial but cannot be used with 하다 compound verbs directly (공부하다 → 공부를 안 하다 or 공부하지 않다). ' +
      'For inability, use 못 + verb (못 가다) or verb stem + -지 못하다 (가지 못하다).',
    examples: [
      { target: '오늘은 운동하지 않았어요.', english: 'I did not exercise today.' },
      { target: '아침을 안 먹었어요.', english: 'I did not eat breakfast.' },
      { target: '다리를 다쳐서 걷지 못해요.', english: 'I cannot walk because I hurt my leg.' },
    ],
  },
  {
    id: 'ko_b1_g007', language: lang, level,
    title: 'Indirect Speech -다고/냐고/자고/라고',
    explanation:
      'Indirect (reported) speech changes the sentence ending depending on the type of original utterance. ' +
      'Statements: -다고 하다 (present/past) — "He says/said that …" (e.g., 춥다고 했어요). ' +
      'Questions: -냐고 하다 — "He asked whether …" (e.g., 어디 가냐고 했어요). ' +
      'Suggestions: -자고 하다 — "He suggested that …" (e.g., 같이 가자고 했어요). ' +
      'Commands: -(으)라고 하다 — "He told (someone) to …" (e.g., 빨리 오라고 했어요). ' +
      'In casual speech, 하다 is often shortened to 하다 → 했어요 or replaced with the quoting particle alone.',
    examples: [
      { target: '친구가 내일 비가 온다고 했어요.', english: 'My friend said that it will rain tomorrow.' },
      { target: '선생님이 숙제를 했냐고 물어보셨어요.', english: 'The teacher asked whether I did my homework.' },
      { target: '동생이 같이 놀자고 했어요.', english: 'My younger sibling suggested that we play together.' },
    ],
  },
  {
    id: 'ko_b1_g008', language: lang, level,
    title: '-(으)ㄹ 수 있다/없다 (Can / Cannot)',
    explanation:
      'Express ability or possibility with -(으)ㄹ 수 있다, and inability or impossibility with -(으)ㄹ 수 없다. ' +
      'If the verb stem ends in a vowel or ㄹ, add -ㄹ 수 있다 (가다 → 갈 수 있다, 만들다 → 만들 수 있다). ' +
      'If the verb stem ends in a consonant (other than ㄹ), add -을 수 있다 (읽다 → 읽을 수 있다). ' +
      'This pattern is used for both learned skills ("I can speak Korean") and situational possibility ("You can park here").',
    examples: [
      { target: '한국어를 말할 수 있어요.', english: 'I can speak Korean.' },
      { target: '이 문제를 혼자 풀 수 없어요.', english: 'I cannot solve this problem alone.' },
      { target: '여기에서 수영할 수 있어요.', english: 'You can swim here.' },
    ],
  },
];
