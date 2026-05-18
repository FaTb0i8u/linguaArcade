/**
 * Korean C2 Vocabulary
 *
 * TOPIK II Level 6 (mastery) expectations.
 * Covers diplomacy, linguistics, psychology, formal register,
 * proverbs (사자성어), and nuanced verbs.
 */

import type { VocabWord } from '../../../types';

const lang = 'ko' as const;
const level = 'C2' as const;

// ── Diplomacy ───────────────────────────────────────────────────

const diplomacy: VocabWord[] = [
  {
    id: 'ko_c2_v001', language: lang, level, category: 'diplomacy',
    word: '외교', translation: 'diplomacy', partOfSpeech: 'noun',
    pronunciation: 'oe-gyo',
    exampleSentence: '양국 간의 외교가 경색되면서 무역 협정 체결이 무기한 연기되었다.', exampleTranslation: 'As diplomacy between the two countries stiffened, the conclusion of the trade agreement was postponed indefinitely.',
  },
  {
    id: 'ko_c2_v002', language: lang, level, category: 'diplomacy',
    word: '조약', translation: 'treaty', partOfSpeech: 'noun',
    pronunciation: 'jo-yak',
    exampleSentence: '평화 조약이 비준되기까지 수년에 걸친 외교적 노력이 필요했다.', exampleTranslation: 'It took years of diplomatic effort for the peace treaty to be ratified.',
  },
  {
    id: 'ko_c2_v003', language: lang, level, category: 'diplomacy',
    word: '주권', translation: 'sovereignty', partOfSpeech: 'noun',
    pronunciation: 'ju-gwon',
    exampleSentence: '국가 주권을 침해하는 어떠한 외부 개입도 용납할 수 없다.', exampleTranslation: 'No external intervention that infringes on national sovereignty can be tolerated.',
  },
  {
    id: 'ko_c2_v004', language: lang, level, category: 'diplomacy',
    word: '제재', translation: 'sanctions', partOfSpeech: 'noun',
    pronunciation: 'je-jae',
    exampleSentence: '국제 사회는 핵 개발을 강행하는 해당 국가에 대해 강력한 경제 제재를 부과했다.', exampleTranslation: 'The international community imposed strong economic sanctions on the country that forced ahead with nuclear development.',
  },
  {
    id: 'ko_c2_v005', language: lang, level, category: 'diplomacy',
    word: '협상', translation: 'negotiation', partOfSpeech: 'noun',
    pronunciation: 'hyeop-sang',
    exampleSentence: '다자간 협상이 결렬된 후 각국은 양자 회담으로 전환했다.', exampleTranslation: 'After the multilateral negotiations broke down, each country shifted to bilateral talks.',
  },
  {
    id: 'ko_c2_v006', language: lang, level, category: 'diplomacy',
    word: '대사', translation: 'ambassador', partOfSpeech: 'noun',
    pronunciation: 'dae-sa',
    exampleSentence: '주미 대사는 기자회견에서 양국 관계의 새로운 장을 열겠다고 밝혔다.', exampleTranslation: 'The ambassador to the United States stated at a press conference that a new chapter in bilateral relations would be opened.',
  },
  {
    id: 'ko_c2_v007', language: lang, level, category: 'diplomacy',
    word: '합의', translation: 'agreement / consensus', partOfSpeech: 'noun',
    pronunciation: 'hap-ui',
    exampleSentence: '장시간의 논의 끝에 마침내 기후 변화 대응에 관한 다자간 합의가 도출되었다.', exampleTranslation: 'After lengthy discussions, a multilateral consensus on responding to climate change was finally reached.',
  },
];

// ── Linguistics ─────────────────────────────────────────────────

const linguistics: VocabWord[] = [
  {
    id: 'ko_c2_v008', language: lang, level, category: 'linguistics',
    word: '형태론', translation: 'morphology', partOfSpeech: 'noun',
    pronunciation: 'hyeong-tae-ron',
    exampleSentence: '한국어 형태론은 교착어적 특성으로 인해 접사 분석이 핵심적인 연구 대상이다.', exampleTranslation: 'In Korean morphology, affix analysis is a key research subject due to the agglutinative nature of the language.',
  },
  {
    id: 'ko_c2_v009', language: lang, level, category: 'linguistics',
    word: '통사론', translation: 'syntax', partOfSpeech: 'noun',
    pronunciation: 'tong-sa-ron',
    exampleSentence: '통사론적 관점에서 한국어의 어순은 주어-목적어-서술어 구조를 따른다.', exampleTranslation: 'From a syntactic perspective, Korean word order follows a subject-object-predicate structure.',
  },
  {
    id: 'ko_c2_v010', language: lang, level, category: 'linguistics',
    word: '음운론', translation: 'phonology', partOfSpeech: 'noun',
    pronunciation: 'eum-un-ron',
    exampleSentence: '음운론에서는 음소의 체계적 대립과 변동 규칙을 중점적으로 다룬다.', exampleTranslation: 'Phonology focuses on the systematic opposition of phonemes and their alternation rules.',
  },
  {
    id: 'ko_c2_v011', language: lang, level, category: 'linguistics',
    word: '화용론', translation: 'pragmatics', partOfSpeech: 'noun',
    pronunciation: 'hwa-yong-ron',
    exampleSentence: '화용론은 발화의 문맥적 의미와 화자의 의도를 분석하는 데 초점을 맞춘다.', exampleTranslation: 'Pragmatics focuses on analyzing the contextual meaning of utterances and the speaker\'s intent.',
  },
  {
    id: 'ko_c2_v012', language: lang, level, category: 'linguistics',
    word: '방언', translation: 'dialect', partOfSpeech: 'noun',
    pronunciation: 'bang-eon',
    exampleSentence: '제주 방언은 표준어와의 차이가 워낙 커서 별도의 언어로 분류해야 한다는 주장도 있다.', exampleTranslation: 'The Jeju dialect differs so greatly from standard Korean that some argue it should be classified as a separate language.',
  },
  {
    id: 'ko_c2_v013', language: lang, level, category: 'linguistics',
    word: '어원', translation: 'etymology', partOfSpeech: 'noun',
    pronunciation: 'eo-won',
    exampleSentence: '이 단어의 어원을 추적하면 고대 한자어에서 파생된 것임을 알 수 있다.', exampleTranslation: 'Tracing the etymology of this word reveals that it was derived from an ancient Sino-Korean term.',
  },
  {
    id: 'ko_c2_v014', language: lang, level, category: 'linguistics',
    word: '의미론', translation: 'semantics', partOfSpeech: 'noun',
    pronunciation: 'ui-mi-ron',
    exampleSentence: '의미론에서는 동음이의어가 문맥에 따라 어떻게 해석되는지를 체계적으로 연구한다.', exampleTranslation: 'Semantics systematically studies how homonyms are interpreted depending on the context.',
  },
];

// ── Psychology ───────────────────────────────────────────────────

const psychology: VocabWord[] = [
  {
    id: 'ko_c2_v015', language: lang, level, category: 'psychology',
    word: '무의식', translation: 'unconscious / the unconscious', partOfSpeech: 'noun',
    pronunciation: 'mu-ui-sik',
    exampleSentence: '프로이트는 인간 행동의 상당 부분이 무의식에 의해 지배된다고 주장했다.', exampleTranslation: 'Freud argued that a significant portion of human behavior is governed by the unconscious.',
  },
  {
    id: 'ko_c2_v016', language: lang, level, category: 'psychology',
    word: '인지', translation: 'cognition', partOfSpeech: 'noun',
    pronunciation: 'in-ji',
    exampleSentence: '노화에 따른 인지 기능의 저하는 다양한 신경과학적 요인에 기인한다.', exampleTranslation: 'The decline in cognitive function due to aging is attributable to various neuroscientific factors.',
  },
  {
    id: 'ko_c2_v017', language: lang, level, category: 'psychology',
    word: '동기부여', translation: 'motivation', partOfSpeech: 'noun',
    pronunciation: 'dong-gi-bu-yeo',
    exampleSentence: '내재적 동기부여가 외재적 보상보다 장기적인 성취에 더 큰 영향을 미친다는 연구 결과가 있다.', exampleTranslation: 'Research shows that intrinsic motivation has a greater impact on long-term achievement than extrinsic rewards.',
  },
  {
    id: 'ko_c2_v018', language: lang, level, category: 'psychology',
    word: '트라우마', translation: 'trauma', partOfSpeech: 'noun',
    pronunciation: 'teu-ra-u-ma',
    exampleSentence: '전쟁으로 인한 집단적 트라우마는 세대를 초월하여 사회 전반에 깊은 흔적을 남긴다.', exampleTranslation: 'Collective trauma caused by war leaves deep traces across society, transcending generations.',
  },
  {
    id: 'ko_c2_v019', language: lang, level, category: 'psychology',
    word: '자아', translation: 'ego / self', partOfSpeech: 'noun',
    pronunciation: 'ja-a',
    exampleSentence: '건강한 자아를 형성하기 위해서는 유년기의 안정적인 애착 관계가 필수적이다.', exampleTranslation: 'A stable attachment relationship in early childhood is essential for forming a healthy ego.',
  },
  {
    id: 'ko_c2_v020', language: lang, level, category: 'psychology',
    word: '편견', translation: 'prejudice / bias', partOfSpeech: 'noun',
    pronunciation: 'pyeon-gyeon',
    exampleSentence: '사회적 편견은 개인의 잠재력을 억압하고 불평등을 고착화시키는 구조적 장벽으로 작용한다.', exampleTranslation: 'Social prejudice acts as a structural barrier that suppresses individual potential and entrenches inequality.',
  },
  {
    id: 'ko_c2_v021', language: lang, level, category: 'psychology',
    word: '정체성', translation: 'identity', partOfSpeech: 'noun',
    pronunciation: 'jeong-che-seong',
    exampleSentence: '이민자들은 새로운 문화에 적응하면서 고유한 정체성을 유지하는 데 복잡한 갈등을 겪는다.', exampleTranslation: 'Immigrants experience complex conflicts in maintaining their unique identity while adapting to a new culture.',
  },
];

// ── Formal Register ─────────────────────────────────────────────

const formalRegister: VocabWord[] = [
  {
    id: 'ko_c2_v022', language: lang, level, category: 'formal_register',
    word: '상기하다', translation: 'to recall / to bring up', partOfSpeech: 'verb',
    pronunciation: 'sang-gi-ha-da',
    exampleSentence: '위원장은 회의 서두에 전차 회의에서 결의된 사안을 상기하였다.', exampleTranslation: 'The chairperson recalled the matters resolved at the previous meeting at the outset of the session.',
  },
  {
    id: 'ko_c2_v023', language: lang, level, category: 'formal_register',
    word: '숙고하다', translation: 'to deliberate / to ponder deeply', partOfSpeech: 'verb',
    pronunciation: 'suk-go-ha-da',
    exampleSentence: '정부는 해당 법안의 사회적 파급 효과를 면밀히 숙고한 끝에 수정안을 제출했다.', exampleTranslation: 'The government submitted an amendment after carefully deliberating the social ramifications of the bill.',
  },
  {
    id: 'ko_c2_v024', language: lang, level, category: 'formal_register',
    word: '촉구하다', translation: 'to urge / to call upon', partOfSpeech: 'verb',
    pronunciation: 'chok-gu-ha-da',
    exampleSentence: '국제 인권 단체는 해당 정부에 즉각적인 정치범 석방을 촉구했다.', exampleTranslation: 'The international human rights organization urged the government to immediately release political prisoners.',
  },
  {
    id: 'ko_c2_v025', language: lang, level, category: 'formal_register',
    word: '간주하다', translation: 'to regard as / to consider', partOfSpeech: 'verb',
    pronunciation: 'gan-ju-ha-da',
    exampleSentence: '기한 내에 이의를 제기하지 않으면 동의한 것으로 간주합니다.', exampleTranslation: 'If no objection is raised within the deadline, it will be regarded as consent.',
  },
  {
    id: 'ko_c2_v026', language: lang, level, category: 'formal_register',
    word: '부과하다', translation: 'to impose / to levy', partOfSpeech: 'verb',
    pronunciation: 'bu-gwa-ha-da',
    exampleSentence: '정부는 환경 오염을 유발한 기업에 거액의 과징금을 부과했다.', exampleTranslation: 'The government imposed a hefty penalty on the company that caused environmental pollution.',
  },
  {
    id: 'ko_c2_v027', language: lang, level, category: 'formal_register',
    word: '준수하다', translation: 'to comply with / to observe', partOfSpeech: 'verb',
    pronunciation: 'jun-su-ha-da',
    exampleSentence: '모든 회원국은 국제법에 명시된 의무를 성실히 준수해야 한다.', exampleTranslation: 'All member states must faithfully comply with the obligations stipulated in international law.',
  },
  {
    id: 'ko_c2_v028', language: lang, level, category: 'formal_register',
    word: '이행하다', translation: 'to implement / to fulfill', partOfSpeech: 'verb',
    pronunciation: 'i-haeng-ha-da',
    exampleSentence: '체결된 합의 내용을 성실히 이행하지 않을 경우 법적 제재가 뒤따를 수 있다.', exampleTranslation: 'Failure to faithfully implement the terms of the concluded agreement may result in legal sanctions.',
  },
];

// ── Proverbs (사자성어) ─────────────────────────────────────────

const proverbs: VocabWord[] = [
  {
    id: 'ko_c2_v029', language: lang, level, category: 'proverbs',
    word: '일석이조', translation: 'killing two birds with one stone (一石二鳥)', partOfSpeech: 'noun',
    pronunciation: 'il-seok-i-jo',
    exampleSentence: '그 정책은 경기 침체를 극복하면서 환경 문제도 해결하는 일석이조의 효과를 거두었다.', exampleTranslation: 'The policy achieved the effect of killing two birds with one stone by overcoming the economic downturn while also solving environmental problems.',
  },
  {
    id: 'ko_c2_v030', language: lang, level, category: 'proverbs',
    word: '자업자득', translation: 'reaping what one sows (自業自得)', partOfSpeech: 'noun',
    pronunciation: 'ja-eop-ja-deuk',
    exampleSentence: '규정을 어기고도 처벌을 면하려 했으나 결국 자업자득으로 더 큰 벌을 받았다.', exampleTranslation: 'He tried to escape punishment despite violating regulations, but ultimately reaped what he sowed and received an even greater penalty.',
  },
  {
    id: 'ko_c2_v031', language: lang, level, category: 'proverbs',
    word: '유비무환', translation: 'preparedness averts disaster (有備無患)', partOfSpeech: 'noun',
    pronunciation: 'yu-bi-mu-hwan',
    exampleSentence: '유비무환의 자세로 평소 재난 대비 훈련을 철저히 해 두어야 한다.', exampleTranslation: 'One must thoroughly conduct disaster preparedness drills on a regular basis with the attitude that preparedness averts disaster.',
  },
  {
    id: 'ko_c2_v032', language: lang, level, category: 'proverbs',
    word: '과유불급', translation: 'excess is as bad as deficiency (過猶不及)', partOfSpeech: 'noun',
    pronunciation: 'gwa-yu-bul-geup',
    exampleSentence: '과유불급이라는 말처럼 지나친 완벽주의는 오히려 생산성을 떨어뜨릴 수 있다.', exampleTranslation: 'As the saying "excess is as bad as deficiency" warns, excessive perfectionism can actually lower productivity.',
  },
  {
    id: 'ko_c2_v033', language: lang, level, category: 'proverbs',
    word: '오매불망', translation: 'yearning day and night; unable to forget (寤寐不忘)', partOfSpeech: 'noun',
    pronunciation: 'o-mae-bul-mang',
    exampleSentence: '고국을 떠난 이민자들은 고향을 오매불망 그리워하며 살아간다.', exampleTranslation: 'Immigrants who have left their homeland live yearning day and night for the place they once called home.',
  },
  {
    id: 'ko_c2_v034', language: lang, level, category: 'proverbs',
    word: '백문이불여일견', translation: 'seeing once is better than hearing a hundred times (百聞不如一見)', partOfSpeech: 'noun',
    pronunciation: 'baek-mun-i-bul-lyeo-il-gyeon',
    exampleSentence: '백문이불여일견이라고, 직접 현장을 방문하니 보고서만으로는 알 수 없었던 실태가 드러났다.', exampleTranslation: 'As the saying goes, seeing once is better than hearing a hundred times — visiting the site in person revealed realities that reports alone could not convey.',
  },
  {
    id: 'ko_c2_v035', language: lang, level, category: 'proverbs',
    word: '어부지리', translation: 'the fisherman\'s profit; benefiting from others\' conflict (漁父之利)', partOfSpeech: 'noun',
    pronunciation: 'eo-bu-ji-ri',
    exampleSentence: '두 대기업이 치열하게 경쟁하는 사이에 중소기업이 어부지리로 시장 점유율을 확보했다.', exampleTranslation: 'While two major corporations competed fiercely, a small company secured market share as the fisherman\'s profit.',
  },
  {
    id: 'ko_c2_v036', language: lang, level, category: 'proverbs',
    word: '고진감래', translation: 'sweetness follows bitterness; after hardship comes happiness (苦盡甘來)', partOfSpeech: 'noun',
    pronunciation: 'go-jin-gam-rae',
    exampleSentence: '수년간의 고된 수련 끝에 올림픽 금메달을 획득하니 고진감래라는 말이 실감 났다.', exampleTranslation: 'After years of arduous training, winning an Olympic gold medal made the saying "sweetness follows bitterness" truly resonate.',
  },
];

// ── Nuanced Verbs ───────────────────────────────────────────────

const nuancedVerbs: VocabWord[] = [
  {
    id: 'ko_c2_v037', language: lang, level, category: 'nuanced_verbs',
    word: '아우르다', translation: 'to encompass / to embrace', partOfSpeech: 'verb',
    pronunciation: 'a-u-reu-da',
    exampleSentence: '이 저서는 동서양의 철학적 전통을 폭넓게 아우르는 통찰을 제공한다.', exampleTranslation: 'This work provides insights that broadly encompass the philosophical traditions of both East and West.',
  },
  {
    id: 'ko_c2_v038', language: lang, level, category: 'nuanced_verbs',
    word: '엄습하다', translation: 'to overwhelm / to assail', partOfSpeech: 'verb',
    pronunciation: 'eom-seup-ha-da',
    exampleSentence: '사고 현장을 목격한 순간 형언할 수 없는 공포가 그를 엄습했다.', exampleTranslation: 'The moment he witnessed the scene of the accident, an indescribable fear assailed him.',
  },
  {
    id: 'ko_c2_v039', language: lang, level, category: 'nuanced_verbs',
    word: '응시하다', translation: 'to gaze at / to stare intently', partOfSpeech: 'verb',
    pronunciation: 'eung-si-ha-da',
    exampleSentence: '그녀는 아무 말 없이 창밖의 어둠을 한참 동안 응시했다.', exampleTranslation: 'She silently gazed at the darkness outside the window for a long time.',
  },
  {
    id: 'ko_c2_v040', language: lang, level, category: 'nuanced_verbs',
    word: '초월하다', translation: 'to transcend / to surpass', partOfSpeech: 'verb',
    pronunciation: 'cho-wol-ha-da',
    exampleSentence: '위대한 예술 작품은 시대와 문화를 초월하여 보편적인 감동을 선사한다.', exampleTranslation: 'Great works of art transcend era and culture, offering universal inspiration.',
  },
  {
    id: 'ko_c2_v041', language: lang, level, category: 'nuanced_verbs',
    word: '관철하다', translation: 'to carry through / to push through', partOfSpeech: 'verb',
    pronunciation: 'gwan-cheol-ha-da',
    exampleSentence: '그는 반대 여론에도 불구하고 자신의 소신을 끝까지 관철했다.', exampleTranslation: 'He carried through his convictions to the end despite opposition from public opinion.',
  },
  {
    id: 'ko_c2_v042', language: lang, level, category: 'nuanced_verbs',
    word: '매도하다', translation: 'to condemn / to denounce', partOfSpeech: 'verb',
    pronunciation: 'mae-do-ha-da',
    exampleSentence: '언론은 사실 확인 없이 특정 인물을 일방적으로 매도해서는 안 된다.', exampleTranslation: 'The media must not unilaterally condemn a particular individual without fact-checking.',
  },
  {
    id: 'ko_c2_v043', language: lang, level, category: 'nuanced_verbs',
    word: '내포하다', translation: 'to embody / to contain implicitly', partOfSpeech: 'verb',
    pronunciation: 'nae-po-ha-da',
    exampleSentence: '이 선언문은 인류 보편적 가치에 대한 깊은 철학적 함의를 내포하고 있다.', exampleTranslation: 'This declaration embodies deep philosophical implications regarding universal human values.',
  },
];

// ── Combined Export ─────────────────────────────────────────────

export const KOREAN_C2_VOCAB: VocabWord[] = [
  ...diplomacy,
  ...linguistics,
  ...psychology,
  ...formalRegister,
  ...proverbs,
  ...nuancedVerbs,
];
