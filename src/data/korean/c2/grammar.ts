/**
 * Korean C2 Grammar Rules (TOPIK II Level 6 — Mastery)
 *
 * Covers advanced/literary structures:
 * literary verb forms (-노라/-리라/-도다), advanced register variation,
 * complex sentence embedding, 사자성어 (four-character idioms),
 * discourse coherence in formal writing, strong concessives,
 * nominalization (-음/-기), nuanced particle selection.
 */

import type { GrammarRule } from '../../../types';

const lang = 'ko' as const;
const level = 'C2' as const;

export const KOREAN_C2_GRAMMAR: GrammarRule[] = [
  // ── 1. Literary Verb Forms (-노라, -리라, -도다) ─────────
  {
    id: 'ko_c2_g001', language: lang, level,
    title: 'Literary Verb Forms (-노라, -리라, -도다)',
    explanation:
      'These archaic sentence-final endings appear in classical poetry, proverbs, legal texts, and literary prose. ' +
      '-노라: a declarative ending expressing the speaker\'s firm statement or resolve (나는 간다 → 나는 가노라 "I go [declaratively]"). ' +
      '-리라: a future/volitional ending conveying determination or prophecy (반드시 이기리라 "I shall surely win"). ' +
      '-도다: an exclamatory ending expressing admiration or deep emotion (아름답도다 "How beautiful!"). ' +
      'These forms belong to 해라체 (plain literary style) and are virtually never used in spoken conversation. ' +
      'They are essential for understanding Korean literature, traditional songs (가사, 시조), and formal proclamations.',
    examples: [
      { target: '나는 오늘도 이 길을 가노라.', english: 'I walk this path again today. (literary declaration)' },
      { target: '진리는 반드시 승리하리라.', english: 'Truth shall surely triumph. (volitional future)' },
      { target: '산천이 이리도 아름답도다!', english: 'How beautiful the mountains and rivers are! (literary exclamation)' },
    ],
  },

  // ── 2. Advanced Register Variation ───────────────────────
  {
    id: 'ko_c2_g002', language: lang, level,
    title: 'Advanced Register Variation (Speech Levels / 존댓말 체계)',
    explanation:
      'Korean has multiple speech levels (화계) that encode social relationships. Mastery requires choosing the right one in every context. ' +
      '하십시오체 (formal polite): -(스)ㅂ니다 / -(스)ㅂ니까 — used in news broadcasts, business presentations, military. ' +
      '해요체 (informal polite): -아/어요 — everyday polite speech with acquaintances, coworkers, strangers. ' +
      '해체 (casual): -아/어 — between close friends of similar age, informal online writing. ' +
      '해라체 (plain/literary): -ㄴ다/-다, -(으)라, -냐 — newspaper articles, academic writing, novels, diaries. ' +
      '하게체 (authoritative semi-formal): -ㄴ/는가, -게, -네 — used by an older person to a younger adult (e.g., professor to adult student, father-in-law to son-in-law). ' +
      'Mixing registers inappropriately signals social ignorance; e.g., using 해체 to a boss or 하십시오체 to a close friend feels jarring.',
    examples: [
      { target: '보고서를 제출하겠습니다. (하십시오체)', english: 'I will submit the report. (formal polite — to superiors)' },
      { target: '자네, 요즘 연구는 잘 되어 가는가? (하게체)', english: 'So, is your research going well these days? (senior to junior adult)' },
      { target: '그는 조용히 문을 닫고 방을 나갔다. (해라체)', english: 'He quietly closed the door and left the room. (literary/narrative)' },
    ],
  },

  // ── 3. Complex Sentence Embedding ────────────────────────
  {
    id: 'ko_c2_g003', language: lang, level,
    title: 'Complex Sentence Embedding (Multi-Clause Subordination)',
    explanation:
      'Advanced Korean routinely nests multiple subordinate clauses within a single sentence. ' +
      'Common stacking patterns: -는데 (background) + -(으)면서 (simultaneous) + -(으)ㄹ 수 있다 (ability/possibility). ' +
      'Key to clarity: each clause should have a clear subject marker (은/는 or 이/가) or a contextually recoverable subject. ' +
      'Connectors like -(으)ㄴ/는 반면(에) (whereas), -기 때문에 (because), -(으)므로 (since — formal) can also nest. ' +
      'In academic/formal writing, sentences of three or four clauses are standard. The main verb comes last, preceded by layers of modifying and conditional clauses. ' +
      'Practice: identify the main predicate first, then trace each subordinate clause backwards.',
    examples: [
      { target: '경기가 침체되고 있는데, 정부가 재정 정책을 조정하면서 민간 투자를 유도할 수 있다.', english: 'While the economy is in a slump, the government can attract private investment by adjusting fiscal policy.' },
      { target: '국제 정세가 불안정한 반면에, 국내 경제는 수출 호조에 힘입어 비교적 안정적인 성장세를 유지하고 있다.', english: 'Whereas the international situation is unstable, the domestic economy is maintaining relatively stable growth, driven by strong exports.' },
      { target: '기후 변화가 심화되고 있기 때문에, 각국이 탄소 배출을 줄이면서도 경제 성장을 도모해야 한다.', english: 'Because climate change is worsening, each country must pursue economic growth while also reducing carbon emissions.' },
    ],
  },

  // ── 4. 사자성어 (Four-Character Idioms) ──────────────────
  {
    id: 'ko_c2_g004', language: lang, level,
    title: '사자성어 — Four-Character Sino-Korean Idioms',
    explanation:
      '사자성어 are four-character idiomatic compounds borrowed from Classical Chinese. They are widely used in formal speeches, essays, editorials, and everyday proverbs. ' +
      '일석이조 (一石二鳥): "one stone, two birds" — killing two birds with one stone. ' +
      '자업자득 (自業自得): "one\'s own deed, one\'s own gain" — reaping what you sow. ' +
      '유비무환 (有備無患): "when there is preparation, there is no worry" — preparedness prevents calamity. ' +
      '과유불급 (過猶不及): "excess is as bad as deficiency" — too much is as bad as too little. ' +
      'Usage: they typically appear as a subject or complement (이번 일은 일석이조다) or as an adverbial expression to summarise a point. ' +
      'Knowing 사자성어 demonstrates cultural literacy and is expected at mastery level.',
    examples: [
      { target: '이번 정책은 환경도 보호하고 경제도 살리니 일석이조라 할 수 있다.', english: 'This policy protects the environment and revives the economy — one could call it killing two birds with one stone.' },
      { target: '남에게 사기를 치다가 본인이 손해를 봤으니, 자업자득이다.', english: 'He cheated others and ended up losing out himself — he reaped what he sowed.' },
      { target: '유비무환의 자세로 비상 대책을 미리 마련해 두어야 한다.', english: 'With a spirit of preparedness prevents calamity, we must put emergency measures in place in advance.' },
    ],
  },

  // ── 5. Discourse Coherence in Formal Writing ─────────────
  {
    id: 'ko_c2_g005', language: lang, level,
    title: 'Discourse Coherence in Formal Writing (담화 연결 표현)',
    explanation:
      'Mastery-level formal Korean requires a repertoire of discourse connectors that signal logical relationships between paragraphs and sentences. ' +
      '그러므로 (therefore): introduces a logical conclusion from the preceding argument. ' +
      '한편 (meanwhile/on the other hand): shifts to a different aspect or perspective. ' +
      '이에 반하여 (in contrast to this): explicitly contrasts two positions. ' +
      '요컨대 (in short / to sum up): summarises the main point. ' +
      '상기한 바와 같이 (as mentioned above): references earlier content in the text. ' +
      'Additional forms: 달리 말하면 (in other words), 이를테면 (for instance), 더 나아가 (furthermore). ' +
      'These are typically placed at the beginning of a sentence and followed by a comma in written Korean.',
    examples: [
      { target: '상기한 바와 같이, 인구 감소는 노동력 부족으로 이어진다.', english: 'As mentioned above, population decline leads to a labour shortage.' },
      { target: '경제 성장률은 둔화되었다. 한편, 실업률은 소폭 감소했다.', english: 'The economic growth rate slowed. Meanwhile, unemployment decreased slightly.' },
      { target: '요컨대, 이번 연구는 기존 이론의 한계를 극복하는 데 기여할 수 있다.', english: 'In short, this study can contribute to overcoming the limitations of existing theories.' },
    ],
  },

  // ── 6. Concessives: -ㄴ/는다 하더라도 / -(으)ㄹ지라도 ───
  {
    id: 'ko_c2_g006', language: lang, level,
    title: 'Strong Concessives: -ㄴ/는다 하더라도 / -(으)ㄹ지라도',
    explanation:
      'These forms express strong concession — "even if / even though" — and are more emphatic than the basic -아/어도. ' +
      '-ㄴ/는다 하더라도: verb stem + ㄴ다/는다 하더라도 (아무리 노력한다 하더라도 "even if one tries however hard"). ' +
      '-(으)ㄹ지라도: verb/adjective stem + (으)ㄹ지라도 — more literary/formal (실패할지라도 포기하지 않겠다 "even if I fail, I will not give up"). ' +
      'The 비록…-(으)ㄹ지라도 pattern adds further emphasis: 비록 어려울지라도 끝까지 해내겠다 ("even though it may be difficult, I will see it through"). ' +
      '-(으)ㄹ지언정: an even stronger literary variant meaning "rather than / I would sooner…" (죽을지언정 굴복하지 않겠다). ' +
      'These concessives are common in essays, speeches, and formal debates.',
    examples: [
      { target: '비록 실패할지라도 도전하는 것 자체에 의미가 있다.', english: 'Even if one fails, there is meaning in the act of trying itself.' },
      { target: '아무리 바쁘다 하더라도 건강을 소홀히 해서는 안 된다.', english: 'No matter how busy you are, you must not neglect your health.' },
      { target: '세상이 변할지언정, 진실의 가치는 영원하다.', english: 'Even if the world changes, the value of truth is eternal.' },
    ],
  },

  // ── 7. Nominalization: -음 / -기 ─────────────────────────
  {
    id: 'ko_c2_g007', language: lang, level,
    title: 'Nominalization: -음 / -기 (Turning Verbs into Nouns)',
    explanation:
      'Korean nominalizes verbs/adjectives with two key suffixes: -음 (concrete, completed, or factual nuance) and -기 (abstract, ongoing, or prospective nuance). ' +
      '-음: stem + 음 (걷다 → 걸음 "a step/walk", 알다 → 앎 "knowing/knowledge", 죽다 → 죽음 "death"). Often used in formal/written language. ' +
      '-기: stem + 기 (걷다 → 걷기 "walking [as activity]", 읽다 → 읽기 "reading", 듣다 → 듣기 "listening"). Used in titles, categories, and collocations. ' +
      'Key collocations with -기: -기로 하다 (decide to), -기 때문에 (because), -기 위해(서) (in order to), -기(가) 쉽다/어렵다 (easy/hard to). ' +
      'Key collocations with -음: -음이 분명하다 (it is clear that), -음에도 불구하고 (despite the fact that), -음을 알 수 있다 (one can see that). ' +
      'Compare: 걷기 (the activity of walking) vs. 걸음 (a step, the gait).',
    examples: [
      { target: '그가 거짓말을 했음이 명백하다.', english: 'It is evident that he told a lie.' },
      { target: '이 문제를 해결하기 위해 다방면의 노력이 필요하다.', english: 'Multifaceted efforts are needed in order to solve this problem.' },
      { target: '어려움에도 불구하고 끝까지 연구를 수행했음을 높이 평가한다.', english: 'We highly commend the fact that the research was carried out to the end despite difficulties.' },
    ],
  },

  // ── 8. Nuance in Particle Selection ──────────────────────
  {
    id: 'ko_c2_g008', language: lang, level,
    title: 'Nuance in Particle Selection (조사의 미묘한 차이)',
    explanation:
      'At mastery level, subtle particle choices carry significant meaning differences. ' +
      '은/는 (topic/contrast) vs. 이/가 (subject/new info): 저는 학생이에요 (as for me, I am a student — topic) vs. 제가 학생이에요 (I am the one who is the student — focus/new info). ' +
      '만 (only) vs. 밖에 (+negative verb): 하나만 있어요 ("there is only one") vs. 하나밖에 없어요 ("there is nothing but one" — emphasises scarcity). ' +
      '까지 (even/up to — neutral or positive surprise) vs. 마저 (even — last remaining, often negative) vs. 조차 (even — emphatically negative): ' +
      '친구까지 왔어요 ("even my friend came" — pleasant surprise), 마지막 희망마저 사라졌다 ("even the last hope vanished"), 이름조차 기억하지 못한다 ("can\'t even remember the name"). ' +
      '대로: (1) "as / according to" (계획대로 "as planned"), (2) "each in its own way" (각자 갈 대로 가라). ' +
      '(이)야말로: "truly / precisely X" — emphatic particle (이것이야말로 진정한 예술이다 "this is truly genuine art").',
    examples: [
      { target: '이것이야말로 우리가 추구해야 할 진정한 가치이다.', english: 'This is truly the genuine value we should pursue.' },
      { target: '그는 자기 이름조차 쓸 수 없을 만큼 손을 다쳤다.', english: 'He injured his hand to the extent that he couldn\'t even write his own name.' },
      { target: '계획대로 진행하되, 변수 발생 시 즉시 보고하십시오.', english: 'Proceed as planned, but report immediately if any variables arise.' },
    ],
  },
];
