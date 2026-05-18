/**
 * Korean B2 Grammar Rules (TOPIK II Level 4)
 *
 * Covers intermediate-advanced structures:
 * causative, passive, unintended cause, purpose/extent,
 * contrast, reporting experience, near-miss, concession.
 */

import type { GrammarRule } from '../../../types';

const lang = 'ko' as const;
const level = 'B2' as const;

export const KOREAN_B2_GRAMMAR: GrammarRule[] = [
  // ── 1. Causative -게 하다 ──────────────────────────────────
  {
    id: 'ko_b2_g001', language: lang, level,
    title: 'Causative -게 하다 (Making Someone Do)',
    explanation:
      'Attach -게 하다 to a verb stem to express making, letting, or having someone do something. ' +
      'Formation: verb stem + 게 하다 (먹다 → 먹게 하다, 웃다 → 웃게 하다). ' +
      'The person being made to act is marked with 을/를 (when emphasising the person) or 에게 (indirect). ' +
      'Conjugate 하다 for tense: 하게 해요 (polite present), 하게 했어요 (polite past). ' +
      'This is the productive (periphrastic) causative — it works with virtually any verb.',
    examples: [
      { target: '엄마가 아이에게 야채를 먹게 했어요.', english: 'The mother made the child eat vegetables.' },
      { target: '선생님이 학생들을 발표하게 했어요.', english: 'The teacher had the students give a presentation.' },
      { target: '그 영화가 저를 울게 했어요.', english: 'That movie made me cry.' },
    ],
  },

  // ── 2. Passive Voice -이/히/리/기 ─────────────────────────
  {
    id: 'ko_b2_g002', language: lang, level,
    title: 'Passive Voice -이/히/리/기',
    explanation:
      'Korean forms lexical passives by attaching one of four suffixes to the verb stem: ' +
      '-이 (보다 → 보이다 "to be seen"), -히 (먹다 → 먹히다 "to be eaten", 잡다 → 잡히다 "to be caught"), ' +
      '-리 (듣다 → 들리다 "to be heard", 팔다 → 팔리다 "to be sold"), ' +
      '-기 (잠그다 → 잠기다 "to be locked", 안다 → 안기다 "to be held"). ' +
      'Which suffix a verb takes must be memorised — there is no fully predictable rule. ' +
      'The agent in a passive sentence is marked with 에게 or 에 의해, and the subject takes 이/가.',
    examples: [
      { target: '산이 여기서 보여요.', english: 'The mountain can be seen from here.' },
      { target: '그 책이 많이 팔렸어요.', english: 'That book was sold a lot.' },
      { target: '멀리서 음악이 들려요.', english: 'Music can be heard from afar.' },
    ],
  },

  // ── 3. -는 바람에 (Unintended Cause) ──────────────────────
  {
    id: 'ko_b2_g003', language: lang, level,
    title: '-는 바람에 (Because of — Unintended Cause)',
    explanation:
      'Use verb stem + 는 바람에 to express an unexpected or unintended cause that led to a negative result. ' +
      'It always implies the speaker did not plan or want the outcome. ' +
      'Formation: action verb stem + 는 바람에 (넘어지다 → 넘어지는 바람에). ' +
      'For past events the verb before 바람에 stays in plain present form (는 바람에), NOT past tense. ' +
      'The result clause is always negative or undesirable.',
    examples: [
      { target: '갑자기 비가 오는 바람에 옷이 다 젖었어요.', english: 'Because it suddenly rained, all my clothes got wet.' },
      { target: '알람이 안 울리는 바람에 회의에 늦었어요.', english: 'Because my alarm didn\'t go off, I was late for the meeting.' },
      { target: '버스가 갑자기 서는 바람에 넘어질 뻔했어요.', english: 'Because the bus suddenly stopped, I almost fell over.' },
    ],
  },

  // ── 4. -도록 (So That / Until) ────────────────────────────
  {
    id: 'ko_b2_g004', language: lang, level,
    title: '-도록 (So That / Until)',
    explanation:
      'Attach -도록 to a verb stem to express (1) purpose ("so that …") or (2) extent/degree ("to the point that …"). ' +
      'Formation: verb stem + 도록 (이해하다 → 이해하도록, 늦다 → 늦도록). ' +
      'Purpose: 선생님이 이해하도록 설명했어요 ("The teacher explained so that [they] would understand"). ' +
      'Extent: 목이 아프도록 노래했어요 ("I sang to the point that my throat hurt"). ' +
      'Compare with -게: -도록 is more formal and slightly stronger in nuance.',
    examples: [
      { target: '선생님이 학생들이 이해하도록 쉽게 설명했어요.', english: 'The teacher explained simply so the students would understand.' },
      { target: '밤늦도록 공부했어요.', english: 'I studied until late at night.' },
      { target: '다시는 실수하지 않도록 조심하겠습니다.', english: 'I will be careful so that I don\'t make a mistake again.' },
    ],
  },

  // ── 5. -(으)ㄴ/는 반면에 (On the Other Hand) ─────────────
  {
    id: 'ko_b2_g005', language: lang, level,
    title: '-(으)ㄴ/는 반면에 (On the Other Hand)',
    explanation:
      'Use -(으)ㄴ/는 반면(에) to contrast two facts about the same subject or topic. ' +
      'Formation: adjective stem + (으)ㄴ 반면에 (비싸다 → 비싼 반면에); ' +
      'action verb stem + 는 반면에 (일하다 → 일하는 반면에); ' +
      'past: verb stem + (으)ㄴ 반면에 (갔다 → 간 반면에). ' +
      'The clause after 반면에 states a contrasting or opposing fact.',
    examples: [
      { target: '이 식당은 음식이 맛있는 반면에 가격이 비싸요.', english: 'This restaurant\'s food is delicious; on the other hand, the prices are expensive.' },
      { target: '형은 키가 큰 반면에 저는 키가 작아요.', english: 'My older brother is tall, whereas I am short.' },
      { target: '서울은 교통이 편리한 반면에 집값이 높아요.', english: 'Seoul has convenient transportation, but on the other hand housing prices are high.' },
    ],
  },

  // ── 6. -더라고요 (Reporting Personal Experience) ──────────
  {
    id: 'ko_b2_g006', language: lang, level,
    title: '-더라고요 (Reporting Personal Experience)',
    explanation:
      'Use -더라고요 to report something you personally witnessed, felt, or discovered in the past. ' +
      'Formation: verb/adjective stem + 더라고요 (맛있다 → 맛있더라고요, 춥다 → 춥더라고요). ' +
      'For actions: verb stem + 더라고요 (가다 → 가더라고요). ' +
      'This ending is NOT used for your own intentional actions — it conveys that you observed or realised something. ' +
      'It naturally translates as "I noticed that …" or "I found that …".',
    examples: [
      { target: '한국 음식이 생각보다 맵더라고요.', english: 'I found that Korean food was spicier than I expected.' },
      { target: '어제 날씨가 정말 춥더라고요.', english: 'I noticed the weather was really cold yesterday.' },
      { target: '그 영화가 재미있더라고요.', english: 'I found that movie to be interesting.' },
    ],
  },

  // ── 7. -(으)ㄹ 뻔하다 (Almost Did) ────────────────────────
  {
    id: 'ko_b2_g007', language: lang, level,
    title: '-(으)ㄹ 뻔하다 (Almost Did)',
    explanation:
      'Use -(으)ㄹ 뻔하다 to express that something almost happened but ultimately did not. ' +
      'Formation: verb stem + (으)ㄹ 뻔하다, conjugated: 뻔했어요 (polite past). ' +
      'Vowel / ㄹ-ending stems: -ㄹ 뻔하다 (가다 → 갈 뻔하다). ' +
      'Consonant-ending stems: -을 뻔하다 (먹다 → 먹을 뻔하다). ' +
      'It often carries a sense of relief or close call: 늦을 뻔했어요 ("I almost was late — but I wasn\'t").',
    examples: [
      { target: '오늘 아침에 늦을 뻔했어요.', english: 'I almost was late this morning.' },
      { target: '넘어질 뻔했어요.', english: 'I almost fell down.' },
      { target: '비행기를 놓칠 뻔했어요.', english: 'I almost missed the flight.' },
    ],
  },

  // ── 8. -기는 하다 (Acknowledging but…) ────────────────────
  {
    id: 'ko_b2_g008', language: lang, level,
    title: '-기는 하다 (Acknowledging but…)',
    explanation:
      'Use verb/adjective stem + 기는 하다 to concede a point while implying a contrasting follow-up. ' +
      'Formation: stem + 기는 하다 (맛있다 → 맛있기는 하다, 읽다 → 읽기는 하다). ' +
      'In speech 기는 often contracts to 긴: 맛있긴 한데 비싸요 ("It IS tasty, but it\'s expensive"). ' +
      'The second clause (often connected with -지만, -는데, or -다) presents the contrasting reality.',
    examples: [
      { target: '맛있기는 한데 너무 비싸요.', english: 'It is tasty, I\'ll give you that, but it\'s too expensive.' },
      { target: '운동을 하기는 하는데 자주 못 해요.', english: 'I do exercise, but I can\'t do it often.' },
      { target: '한국어를 읽기는 하지만 말하기는 어려워요.', english: 'I can read Korean, but speaking is difficult.' },
    ],
  },
];
