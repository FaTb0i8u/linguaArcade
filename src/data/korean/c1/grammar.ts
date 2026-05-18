/**
 * Korean C1 Grammar Rules (TOPIK II Level 5)
 *
 * Covers advanced structures:
 * reported speech (indirect quotation), retrospective -더-,
 * double past -았/었었-, equivalence -는 셈이다,
 * addition -는 데다가, necessary condition -아/어야,
 * speculation -(으)ㄹ 텐데, academic writing connectors.
 */

import type { GrammarRule } from '../../../types';

const lang = 'ko' as const;
const level = 'C1' as const;

export const KOREAN_C1_GRAMMAR: GrammarRule[] = [
  // ── 1. Reported Speech (Indirect Quotation) ──────────────
  {
    id: 'ko_c1_g001', language: lang, level,
    title: 'Reported Speech — Indirect Quotation (-다고/냐고/자고/라고 하다)',
    explanation:
      'Korean indirect quotation changes the sentence ending depending on type. ' +
      'Statement (verb): -ㄴ/는다고 하다 — action verbs with 받침 take -는다고, without 받침 take -ㄴ다고 (가다 → 간다고, 먹다 → 먹는다고). ' +
      'Statement (adjective/이다): -다고 하다 / -이라고 하다 (좋다 → 좋다고, 학생이다 → 학생이라고). ' +
      'Question: -냐고 하다 (어디 가냐고 했어요). ' +
      'Suggestion: -자고 하다 (같이 가자고 했어요). ' +
      'Command: -(으)라고 하다 (빨리 오라고 했어요). ' +
      'Past tense in the quoted clause: -았/었다고 하다 (갔다고 했어요). ' +
      'The quoting verb 하다 is conjugated for tense and politeness.',
    examples: [
      { target: '친구가 내일 시간이 없다고 했어요.', english: 'My friend said they don\'t have time tomorrow.' },
      { target: '선생님이 왜 숙제를 안 했냐고 물어보셨어요.', english: 'The teacher asked why I didn\'t do the homework.' },
      { target: '동생이 같이 영화를 보자고 했어요.', english: 'My younger sibling suggested we watch a movie together.' },
    ],
  },

  // ── 2. Retrospective -더- ────────────────────────────────
  {
    id: 'ko_c1_g002', language: lang, level,
    title: 'Retrospective -더- (Recounting Personal Observations)',
    explanation:
      'The morpheme -더- conveys that the speaker is recounting something they personally witnessed or experienced in the past. ' +
      'Key endings: -더라고요 (reporting to the listener what you observed), -더군요 (expressing mild surprise at what you noticed), ' +
      '-던 (modifying a noun with a recalled/incomplete past action or state). ' +
      'Formation: verb/adjective stem + 더라고요 (춥다 → 춥더라고요, 먹다 → 먹더라고요). ' +
      '-던 modifies nouns: 읽던 책 ("the book I was reading [at that time]"), 살던 곳 ("the place where I used to live"). ' +
      'Important: -더- is generally NOT used about your own intentional actions — it reports observations, feelings you discovered, or others\' actions.',
    examples: [
      { target: '그 식당 음식이 정말 맛있더라고요.', english: 'I found that the food at that restaurant was really delicious.' },
      { target: '밖에 나가 보니까 눈이 오더군요.', english: 'When I went outside, I noticed it was snowing.' },
      { target: '어렸을 때 자주 가던 공원이 없어졌어요.', english: 'The park I used to go to often as a child is gone.' },
    ],
  },

  // ── 3. Double Past -았/었었- ─────────────────────────────
  {
    id: 'ko_c1_g003', language: lang, level,
    title: 'Double Past -았/었었- (Discontinued Past)',
    explanation:
      'The double past tense -았/었었- (also called 대과거) indicates a past state or action that has since changed or is no longer true. ' +
      'Formation: verb/adjective stem + 았었/었었 + ending (살다 → 살았었어요, 좋다 → 좋았었어요). ' +
      'Vowel harmony applies: 양성모음 (ㅏ, ㅗ) → -았었-, 음성모음 → -었었-, 하다 → 했었. ' +
      'Compare: 서울에 살았어요 ("I lived in Seoul" — neutral past) vs. 서울에 살았었어요 ("I had lived in Seoul [but no longer do]"). ' +
      'Use it when the speaker wants to emphasise the discontinuity between the past situation and the present.',
    examples: [
      { target: '전에 서울에 살았었어요.', english: 'I had lived in Seoul (but I don\'t anymore).' },
      { target: '어렸을 때 피아노를 배웠었는데 지금은 못 쳐요.', english: 'I had learned piano when I was young, but now I can\'t play.' },
      { target: '그 가게가 유명했었는데 지금은 문을 닫았어요.', english: 'That shop had been famous, but now it\'s closed.' },
    ],
  },

  // ── 4. -는 셈이다 / -ㄴ 셈이다 (Amounts to / Equivalent to) ──
  {
    id: 'ko_c1_g004', language: lang, level,
    title: '-는 셈이다 / -(으)ㄴ 셈이다 (Amounts To / Is Practically)',
    explanation:
      'Use -는 셈이다 (action verbs, present) or -(으)ㄴ 셈이다 (adjectives, past tense verbs) to express that something is approximately equivalent to, or practically amounts to, a certain state. ' +
      'Formation: action verb stem + 는 셈이다 (매일 운동하는 셈이다 "it amounts to exercising every day"); ' +
      'past action: verb stem + (으)ㄴ 셈이다 (거의 다 한 셈이다 "it\'s as good as done"); ' +
      'adjective: adjective stem + (으)ㄴ 셈이다 (싼 셈이다 "it\'s practically cheap"). ' +
      '셈 literally means "calculation/count", so the expression implies an estimation or approximation.',
    examples: [
      { target: '거의 다 한 셈이에요.', english: 'It\'s as good as done.' },
      { target: '매일 야근하니까 회사에서 사는 셈이에요.', english: 'Since I work overtime every day, it\'s practically like living at the office.' },
      { target: '이 가격이면 공짜나 다름없는 셈이에요.', english: 'At this price, it practically amounts to being free.' },
    ],
  },

  // ── 5. -(으)ㄴ/는 데다가 (On Top of That / Moreover) ─────
  {
    id: 'ko_c1_g005', language: lang, level,
    title: '-(으)ㄴ/는 데다가 (On Top of That / Moreover)',
    explanation:
      'Use -(으)ㄴ/는 데다(가) to add a reason or fact on top of another, creating a cumulative effect. ' +
      'Formation: action verb stem + 는 데다가 (비가 오는 데다가); ' +
      'adjective / past verb stem + (으)ㄴ 데다가 (추운 데다가, 늦은 데다가). ' +
      'The two clauses usually share the same positive or negative tone — both good or both bad. ' +
      'It is stronger than -고 because it emphasises the piling-on of factors.',
    examples: [
      { target: '비가 오는 데다가 바람도 불어요.', english: 'On top of it raining, the wind is blowing too.' },
      { target: '그 식당은 맛있는 데다가 가격도 저렴해요.', english: 'That restaurant is tasty and, on top of that, the prices are low.' },
      { target: '오늘 피곤한 데다가 머리도 아파요.', english: 'I\'m tired today, and on top of that I have a headache.' },
    ],
  },

  // ── 6. -아/어야 (Only If / Must) ─────────────────────────
  {
    id: 'ko_c1_g006', language: lang, level,
    title: '-아/어야 (Only If / Must — Necessary Condition)',
    explanation:
      'Attach -아/어야 to a verb or adjective stem to express a necessary condition — "only if X happens can Y occur". ' +
      'Formation: stem + 아야/어야 (vowel harmony): 하다 → 해야, 가다 → 가야, 먹다 → 먹어야, 오다 → 와야. ' +
      'Often followed by a result clause with 할 수 있다, 되다, etc.: 연습해야 잘할 수 있어요 ("Only if you practice can you do it well"). ' +
      'Compare with -(으)면: -(으)면 is a general condition ("if"), whereas -아/어야 stresses that the condition is essential or mandatory. ' +
      '가면 좋아요 ("If you go, it\'s nice") vs. 가야 좋아요 ("You have to go for it to be good — going is a must").',
    examples: [
      { target: '연습해야 잘할 수 있어요.', english: 'Only if you practice can you do it well.' },
      { target: '직접 가 봐야 알 수 있어요.', english: 'You can only know by going there yourself.' },
      { target: '건강해야 무엇이든 할 수 있어요.', english: 'Only when you\'re healthy can you do anything.' },
    ],
  },

  // ── 7. -(으)ㄹ 텐데 (I Expect That / It Would Probably) ──
  {
    id: 'ko_c1_g007', language: lang, level,
    title: '-(으)ㄹ 텐데 (I Expect That… / It Would Probably…)',
    explanation:
      'Use -(으)ㄹ 텐데 to speculate about a situation and then add a related suggestion, worry, or contrasting fact. ' +
      'Formation: verb/adjective stem + (으)ㄹ 텐데 — vowel/ㄹ stems: -ㄹ 텐데 (가다 → 갈 텐데), consonant stems: -을 텐데 (먹다 → 먹을 텐데). ' +
      '텐데 is a contraction of 터인데 (터 = expectation + 인데 = but/so). ' +
      'Common usages: 내일 추울 텐데 따뜻하게 입으세요 ("It will probably be cold tomorrow, so dress warmly"). ' +
      'The second clause typically contains advice, concern, or a contrasting reality.',
    examples: [
      { target: '내일 추울 텐데 따뜻하게 입으세요.', english: 'It\'ll probably be cold tomorrow, so dress warmly.' },
      { target: '길이 막힐 텐데 지하철로 가는 게 좋겠어요.', english: 'The roads will probably be jammed, so it would be better to take the subway.' },
      { target: '혼자서 힘들 텐데 도와줄까요?', english: 'It must be hard by yourself — shall I help?' },
    ],
  },

  // ── 8. Academic Writing Connectors ───────────────────────
  {
    id: 'ko_c1_g008', language: lang, level,
    title: 'Academic Writing Connectors (학술적 접속 표현)',
    explanation:
      'Formal written Korean relies on a set of Sino-Korean and native connectors rarely used in casual speech. ' +
      'Key connectors: 그러므로 (therefore — introduces a logical conclusion), ' +
      '반면에 (on the other hand — presents a contrast), ' +
      '즉 (namely / that is — rephrases or clarifies), ' +
      '이에 따라 (accordingly / in line with this — shows consequence), ' +
      '결론적으로 (in conclusion — signals the final point). ' +
      'Additional useful forms: 뿐만 아니라 (not only… but also), 이와 같이 (like this / in this way), ' +
      '한편 (meanwhile / on the other hand). ' +
      'These connectors appear at the beginning of a sentence or clause and are followed by a comma in writing.',
    examples: [
      { target: '경제 성장률이 둔화되었다. 그러므로 새로운 정책이 필요하다.', english: 'The economic growth rate has slowed. Therefore, new policies are necessary.' },
      { target: '도시는 편리한 반면에 자연환경이 부족하다.', english: 'Cities are convenient; on the other hand, they lack a natural environment.' },
      { target: '결론적으로, 이 연구는 교육의 질 향상에 기여할 수 있다.', english: 'In conclusion, this study can contribute to improving the quality of education.' },
    ],
  },
];
