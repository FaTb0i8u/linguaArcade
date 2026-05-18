/**
 * Korean B2 Vocabulary
 *
 * TOPIK II Level 4 expectations.
 * Covers politics, science, business, health (advanced), arts,
 * emotions (advanced), and social issues.
 */

import type { VocabWord } from '../../../types';

const lang = 'ko' as const;
const level = 'B2' as const;

// ── Politics ────────────────────────────────────────────────────

const politics: VocabWord[] = [
  {
    id: 'ko_b2_v001', language: lang, level, category: 'politics',
    word: '정치', translation: 'politics', partOfSpeech: 'noun',
    pronunciation: 'jeong-chi',
    exampleSentence: '요즘 젊은 세대가 정치에 관심을 많이 갖게 되었다.', exampleTranslation: 'The younger generation has become very interested in politics these days.',
  },
  {
    id: 'ko_b2_v002', language: lang, level, category: 'politics',
    word: '정부', translation: 'government', partOfSpeech: 'noun',
    pronunciation: 'jeong-bu',
    exampleSentence: '정부는 새로운 경제 정책을 발표했다.', exampleTranslation: 'The government announced a new economic policy.',
  },
  {
    id: 'ko_b2_v003', language: lang, level, category: 'politics',
    word: '선거', translation: 'election', partOfSpeech: 'noun',
    pronunciation: 'seon-geo',
    exampleSentence: '이번 선거에서 투표율이 매우 높았다.', exampleTranslation: 'The voter turnout was very high in this election.',
  },
  {
    id: 'ko_b2_v004', language: lang, level, category: 'politics',
    word: '대통령', translation: 'president', partOfSpeech: 'noun',
    pronunciation: 'dae-tong-nyeong',
    exampleSentence: '대통령이 국민에게 담화를 발표했다.', exampleTranslation: 'The president delivered an address to the nation.',
  },
  {
    id: 'ko_b2_v005', language: lang, level, category: 'politics',
    word: '법률', translation: 'law / legislation', partOfSpeech: 'noun',
    pronunciation: 'beom-nyul',
    exampleSentence: '새로운 법률이 내년부터 시행될 예정이다.', exampleTranslation: 'The new law is scheduled to take effect next year.',
  },
  {
    id: 'ko_b2_v006', language: lang, level, category: 'politics',
    word: '국회', translation: 'National Assembly / parliament', partOfSpeech: 'noun',
    pronunciation: 'guk-oe',
    exampleSentence: '국회에서 환경 보호에 관한 법안을 심의하고 있다.', exampleTranslation: 'The National Assembly is deliberating on a bill regarding environmental protection.',
  },
  {
    id: 'ko_b2_v007', language: lang, level, category: 'politics',
    word: '정책', translation: 'policy', partOfSpeech: 'noun',
    pronunciation: 'jeong-chaek',
    exampleSentence: '이 정책은 저출산 문제를 해결하기 위해 마련되었다.', exampleTranslation: 'This policy was established to address the low birth-rate problem.',
  },
  {
    id: 'ko_b2_v008', language: lang, level, category: 'politics',
    word: '여당', translation: 'ruling party', partOfSpeech: 'noun',
    pronunciation: 'yeo-dang',
    exampleSentence: '여당과 야당이 복지 예산을 놓고 치열하게 대립했다.', exampleTranslation: 'The ruling party and the opposition fiercely clashed over the welfare budget.',
  },
];

// ── Science ─────────────────────────────────────────────────────

const science: VocabWord[] = [
  {
    id: 'ko_b2_v009', language: lang, level, category: 'science',
    word: '과학', translation: 'science', partOfSpeech: 'noun',
    pronunciation: 'gwa-hak',
    exampleSentence: '과학의 발전이 인류의 삶을 크게 변화시켰다.', exampleTranslation: 'The advancement of science has greatly changed human life.',
  },
  {
    id: 'ko_b2_v010', language: lang, level, category: 'science',
    word: '연구', translation: 'research / study', partOfSpeech: 'noun',
    pronunciation: 'yeon-gu',
    exampleSentence: '이 연구는 암 치료에 중요한 단서를 제공했다.', exampleTranslation: 'This research provided an important clue for cancer treatment.',
  },
  {
    id: 'ko_b2_v011', language: lang, level, category: 'science',
    word: '실험', translation: 'experiment', partOfSpeech: 'noun',
    pronunciation: 'sil-heom',
    exampleSentence: '실험 결과가 기존의 가설과 일치하지 않았다.', exampleTranslation: 'The experiment results did not match the existing hypothesis.',
  },
  {
    id: 'ko_b2_v012', language: lang, level, category: 'science',
    word: '데이터', translation: 'data', partOfSpeech: 'noun',
    pronunciation: 'de-i-teo',
    exampleSentence: '정확한 데이터 없이는 올바른 결론을 내릴 수 없다.', exampleTranslation: 'Without accurate data, one cannot draw correct conclusions.',
  },
  {
    id: 'ko_b2_v013', language: lang, level, category: 'science',
    word: '결과', translation: 'result / outcome', partOfSpeech: 'noun',
    pronunciation: 'gyeol-gwa',
    exampleSentence: '연구 결과는 학술지에 게재될 예정이다.', exampleTranslation: 'The research results are scheduled to be published in an academic journal.',
  },
  {
    id: 'ko_b2_v014', language: lang, level, category: 'science',
    word: '발견', translation: 'discovery', partOfSpeech: 'noun',
    pronunciation: 'bal-gyeon',
    exampleSentence: '이번 발견은 의학계에 큰 영향을 미칠 것이다.', exampleTranslation: 'This discovery will have a major impact on the medical community.',
  },
  {
    id: 'ko_b2_v015', language: lang, level, category: 'science',
    word: '기술', translation: 'technology / technique', partOfSpeech: 'noun',
    pronunciation: 'gi-sul',
    exampleSentence: '인공지능 기술이 다양한 산업에 적용되고 있다.', exampleTranslation: 'Artificial intelligence technology is being applied to various industries.',
  },
  {
    id: 'ko_b2_v016', language: lang, level, category: 'science',
    word: '이론', translation: 'theory', partOfSpeech: 'noun',
    pronunciation: 'i-ron',
    exampleSentence: '그 이론은 아직 실험으로 완전히 증명되지 않았다.', exampleTranslation: 'That theory has not yet been fully proven by experiments.',
  },
];

// ── Business ────────────────────────────────────────────────────

const business: VocabWord[] = [
  {
    id: 'ko_b2_v017', language: lang, level, category: 'business',
    word: '회사', translation: 'company', partOfSpeech: 'noun',
    pronunciation: 'hoe-sa',
    exampleSentence: '그 회사는 올해 해외 시장에 진출할 계획이다.', exampleTranslation: 'That company plans to enter the overseas market this year.',
  },
  {
    id: 'ko_b2_v018', language: lang, level, category: 'business',
    word: '경제', translation: 'economy', partOfSpeech: 'noun',
    pronunciation: 'gyeong-je',
    exampleSentence: '세계 경제가 불확실한 상황에 놓여 있다.', exampleTranslation: 'The global economy is in an uncertain situation.',
  },
  {
    id: 'ko_b2_v019', language: lang, level, category: 'business',
    word: '투자', translation: 'investment', partOfSpeech: 'noun',
    pronunciation: 'tu-ja',
    exampleSentence: '장기적인 투자가 안정적인 수익을 가져올 수 있다.', exampleTranslation: 'Long-term investment can bring stable returns.',
  },
  {
    id: 'ko_b2_v020', language: lang, level, category: 'business',
    word: '수익', translation: 'profit / revenue', partOfSpeech: 'noun',
    pronunciation: 'su-ik',
    exampleSentence: '올해 회사의 수익이 전년 대비 크게 증가했다.', exampleTranslation: 'The company\'s revenue increased significantly compared to the previous year.',
  },
  {
    id: 'ko_b2_v021', language: lang, level, category: 'business',
    word: '계약', translation: 'contract', partOfSpeech: 'noun',
    pronunciation: 'gye-yak',
    exampleSentence: '양측은 3년 계약을 체결했다.', exampleTranslation: 'Both sides signed a three-year contract.',
  },
  {
    id: 'ko_b2_v022', language: lang, level, category: 'business',
    word: '마케팅', translation: 'marketing', partOfSpeech: 'noun',
    pronunciation: 'ma-ke-ting',
    exampleSentence: '효과적인 마케팅 전략이 매출 증가에 기여했다.', exampleTranslation: 'An effective marketing strategy contributed to the increase in sales.',
  },
  {
    id: 'ko_b2_v023', language: lang, level, category: 'business',
    word: '경쟁', translation: 'competition', partOfSpeech: 'noun',
    pronunciation: 'gyeong-jaeng',
    exampleSentence: '기업 간의 경쟁이 점점 치열해지고 있다.', exampleTranslation: 'Competition between companies is becoming increasingly fierce.',
  },
  {
    id: 'ko_b2_v024', language: lang, level, category: 'business',
    word: '기업', translation: 'enterprise / corporation', partOfSpeech: 'noun',
    pronunciation: 'gi-eop',
    exampleSentence: '대기업과 중소기업 간의 상생이 중요하다.', exampleTranslation: 'Mutual growth between large corporations and small businesses is important.',
  },
];

// ── Health (Advanced) ───────────────────────────────────────────

const health_advanced: VocabWord[] = [
  {
    id: 'ko_b2_v025', language: lang, level, category: 'health_advanced',
    word: '증상', translation: 'symptom', partOfSpeech: 'noun',
    pronunciation: 'jeung-sang',
    exampleSentence: '감기의 초기 증상으로 목이 아프고 열이 난다.', exampleTranslation: 'Early symptoms of a cold include a sore throat and fever.',
  },
  {
    id: 'ko_b2_v026', language: lang, level, category: 'health_advanced',
    word: '진단', translation: 'diagnosis', partOfSpeech: 'noun',
    pronunciation: 'jin-dan',
    exampleSentence: '의사가 정확한 진단을 내리기 위해 추가 검사를 요청했다.', exampleTranslation: 'The doctor requested additional tests to make an accurate diagnosis.',
  },
  {
    id: 'ko_b2_v027', language: lang, level, category: 'health_advanced',
    word: '치료', translation: 'treatment / therapy', partOfSpeech: 'noun',
    pronunciation: 'chi-ryo',
    exampleSentence: '조기 치료가 질병의 악화를 막을 수 있다.', exampleTranslation: 'Early treatment can prevent the worsening of a disease.',
  },
  {
    id: 'ko_b2_v028', language: lang, level, category: 'health_advanced',
    word: '수술', translation: 'surgery / operation', partOfSpeech: 'noun',
    pronunciation: 'su-sul',
    exampleSentence: '수술 후 환자의 상태가 빠르게 호전되었다.', exampleTranslation: 'The patient\'s condition improved rapidly after surgery.',
  },
  {
    id: 'ko_b2_v029', language: lang, level, category: 'health_advanced',
    word: '처방', translation: 'prescription', partOfSpeech: 'noun',
    pronunciation: 'cheo-bang',
    exampleSentence: '의사의 처방 없이 약을 복용하면 위험할 수 있다.', exampleTranslation: 'Taking medicine without a doctor\'s prescription can be dangerous.',
  },
  {
    id: 'ko_b2_v030', language: lang, level, category: 'health_advanced',
    word: '면역', translation: 'immunity', partOfSpeech: 'noun',
    pronunciation: 'myeon-yeok',
    exampleSentence: '규칙적인 운동은 면역 체계를 강화시킨다.', exampleTranslation: 'Regular exercise strengthens the immune system.',
  },
  {
    id: 'ko_b2_v031', language: lang, level, category: 'health_advanced',
    word: '예방', translation: 'prevention', partOfSpeech: 'noun',
    pronunciation: 'ye-bang',
    exampleSentence: '질병 예방을 위해 정기적으로 건강 검진을 받아야 한다.', exampleTranslation: 'One should get regular health checkups for disease prevention.',
  },
];

// ── Arts ────────────────────────────────────────────────────────

const arts: VocabWord[] = [
  {
    id: 'ko_b2_v032', language: lang, level, category: 'arts',
    word: '작품', translation: 'work (of art) / piece', partOfSpeech: 'noun',
    pronunciation: 'jak-pum',
    exampleSentence: '이 작품은 현대 사회의 문제를 깊이 있게 다루고 있다.', exampleTranslation: 'This work addresses the problems of modern society in depth.',
  },
  {
    id: 'ko_b2_v033', language: lang, level, category: 'arts',
    word: '전시회', translation: 'exhibition', partOfSpeech: 'noun',
    pronunciation: 'jeon-si-hoe',
    exampleSentence: '이번 전시회에는 세계 각국의 현대 미술 작품이 전시된다.', exampleTranslation: 'This exhibition displays contemporary art pieces from countries around the world.',
  },
  {
    id: 'ko_b2_v034', language: lang, level, category: 'arts',
    word: '소설', translation: 'novel', partOfSpeech: 'noun',
    pronunciation: 'so-seol',
    exampleSentence: '그 작가의 최신 소설이 베스트셀러에 올랐다.', exampleTranslation: 'That author\'s latest novel made it onto the bestseller list.',
  },
  {
    id: 'ko_b2_v035', language: lang, level, category: 'arts',
    word: '영화감독', translation: 'film director', partOfSpeech: 'noun',
    pronunciation: 'yeong-hwa-gam-dok',
    exampleSentence: '그 영화감독은 독특한 시각으로 사회 문제를 표현한다.', exampleTranslation: 'That film director expresses social issues from a unique perspective.',
  },
  {
    id: 'ko_b2_v036', language: lang, level, category: 'arts',
    word: '배우', translation: 'actor / actress', partOfSpeech: 'noun',
    pronunciation: 'bae-u',
    exampleSentence: '그 배우는 뛰어난 연기력으로 관객을 사로잡았다.', exampleTranslation: 'That actor captivated the audience with outstanding acting skills.',
  },
  {
    id: 'ko_b2_v037', language: lang, level, category: 'arts',
    word: '무대', translation: 'stage', partOfSpeech: 'noun',
    pronunciation: 'mu-dae',
    exampleSentence: '배우들이 무대 위에서 열정적으로 연기했다.', exampleTranslation: 'The actors performed passionately on stage.',
  },
  {
    id: 'ko_b2_v038', language: lang, level, category: 'arts',
    word: '비평', translation: 'criticism / review', partOfSpeech: 'noun',
    pronunciation: 'bi-pyeong',
    exampleSentence: '그 영화는 평론가들의 비평에서 높은 평가를 받았다.', exampleTranslation: 'That movie received high praise in critics\' reviews.',
  },
  {
    id: 'ko_b2_v039', language: lang, level, category: 'arts',
    word: '창작', translation: 'creative work / creation', partOfSpeech: 'noun',
    pronunciation: 'chang-jak',
    exampleSentence: '예술적 창작에는 자유로운 환경이 필요하다.', exampleTranslation: 'Artistic creation requires a free environment.',
  },
];

// ── Emotions (Advanced) ─────────────────────────────────────────

const emotions_advanced: VocabWord[] = [
  {
    id: 'ko_b2_v040', language: lang, level, category: 'emotions_advanced',
    word: '불안', translation: 'anxiety / unease', partOfSpeech: 'noun',
    pronunciation: 'bul-an',
    exampleSentence: '시험을 앞두고 불안한 마음을 떨칠 수 없었다.', exampleTranslation: 'I could not shake off the anxiety before the exam.',
  },
  {
    id: 'ko_b2_v041', language: lang, level, category: 'emotions_advanced',
    word: '절망', translation: 'despair', partOfSpeech: 'noun',
    pronunciation: 'jeol-mang',
    exampleSentence: '실패를 거듭하며 절망에 빠졌지만 다시 일어섰다.', exampleTranslation: 'I fell into despair from repeated failures but got back up again.',
  },
  {
    id: 'ko_b2_v042', language: lang, level, category: 'emotions_advanced',
    word: '감동', translation: 'being moved / deep impression', partOfSpeech: 'noun',
    pronunciation: 'gam-dong',
    exampleSentence: '그 영화의 마지막 장면에서 큰 감동을 받았다.', exampleTranslation: 'I was deeply moved by the final scene of that movie.',
  },
  {
    id: 'ko_b2_v043', language: lang, level, category: 'emotions_advanced',
    word: '자부심', translation: 'pride / self-esteem', partOfSpeech: 'noun',
    pronunciation: 'ja-bu-sim',
    exampleSentence: '그녀는 자신의 직업에 대한 자부심이 대단하다.', exampleTranslation: 'She has tremendous pride in her profession.',
  },
  {
    id: 'ko_b2_v044', language: lang, level, category: 'emotions_advanced',
    word: '후회', translation: 'regret', partOfSpeech: 'noun',
    pronunciation: 'hu-hoe',
    exampleSentence: '그때 솔직하게 말하지 못한 것이 지금도 후회된다.', exampleTranslation: 'I still regret not being honest at that time.',
  },
  {
    id: 'ko_b2_v045', language: lang, level, category: 'emotions_advanced',
    word: '동정', translation: 'sympathy / compassion', partOfSpeech: 'noun',
    pronunciation: 'dong-jeong',
    exampleSentence: '그는 어려운 처지에 있는 사람들에게 깊은 동정을 느꼈다.', exampleTranslation: 'He felt deep sympathy for people in difficult circumstances.',
  },
  {
    id: 'ko_b2_v046', language: lang, level, category: 'emotions_advanced',
    word: '질투', translation: 'jealousy', partOfSpeech: 'noun',
    pronunciation: 'jil-tu',
    exampleSentence: '질투는 인간관계를 파괴할 수 있는 감정이다.', exampleTranslation: 'Jealousy is an emotion that can destroy human relationships.',
  },
  {
    id: 'ko_b2_v047', language: lang, level, category: 'emotions_advanced',
    word: '열정', translation: 'passion / enthusiasm', partOfSpeech: 'noun',
    pronunciation: 'yeol-jeong',
    exampleSentence: '그는 음악에 대한 열정으로 매일 연습을 거르지 않았다.', exampleTranslation: 'He never skipped daily practice because of his passion for music.',
  },
];

// ── Social Issues ───────────────────────────────────────────────

const social_issues: VocabWord[] = [
  {
    id: 'ko_b2_v048', language: lang, level, category: 'social_issues',
    word: '차별', translation: 'discrimination', partOfSpeech: 'noun',
    pronunciation: 'cha-byeol',
    exampleSentence: '성별에 따른 차별은 법으로 금지되어 있다.', exampleTranslation: 'Discrimination based on gender is prohibited by law.',
  },
  {
    id: 'ko_b2_v049', language: lang, level, category: 'social_issues',
    word: '평등', translation: 'equality', partOfSpeech: 'noun',
    pronunciation: 'pyeong-deung',
    exampleSentence: '모든 시민은 법 앞에서 평등해야 한다.', exampleTranslation: 'All citizens should be equal before the law.',
  },
  {
    id: 'ko_b2_v050', language: lang, level, category: 'social_issues',
    word: '인권', translation: 'human rights', partOfSpeech: 'noun',
    pronunciation: 'in-gwon',
    exampleSentence: '국제 사회는 인권 보호를 위해 함께 노력해야 한다.', exampleTranslation: 'The international community must work together to protect human rights.',
  },
  {
    id: 'ko_b2_v051', language: lang, level, category: 'social_issues',
    word: '빈곤', translation: 'poverty', partOfSpeech: 'noun',
    pronunciation: 'bin-gon',
    exampleSentence: '빈곤 문제를 해결하려면 교육과 복지가 함께 이루어져야 한다.', exampleTranslation: 'To solve the poverty problem, education and welfare must go hand in hand.',
  },
  {
    id: 'ko_b2_v052', language: lang, level, category: 'social_issues',
    word: '복지', translation: 'welfare', partOfSpeech: 'noun',
    pronunciation: 'bok-ji',
    exampleSentence: '정부는 노인 복지 예산을 대폭 늘렸다.', exampleTranslation: 'The government significantly increased the elderly welfare budget.',
  },
  {
    id: 'ko_b2_v053', language: lang, level, category: 'social_issues',
    word: '범죄', translation: 'crime', partOfSpeech: 'noun',
    pronunciation: 'beom-joe',
    exampleSentence: '사이버 범죄가 점점 증가하고 있어 대책이 시급하다.', exampleTranslation: 'Cybercrime is increasing, and countermeasures are urgently needed.',
  },
  {
    id: 'ko_b2_v054', language: lang, level, category: 'social_issues',
    word: '환경오염', translation: 'environmental pollution', partOfSpeech: 'noun',
    pronunciation: 'hwan-gyeong-o-yeom',
    exampleSentence: '환경오염을 줄이기 위해 재활용을 생활화해야 한다.', exampleTranslation: 'We must make recycling a daily habit to reduce environmental pollution.',
  },
  {
    id: 'ko_b2_v055', language: lang, level, category: 'social_issues',
    word: '실업', translation: 'unemployment', partOfSpeech: 'noun',
    pronunciation: 'sil-eop',
    exampleSentence: '청년 실업 문제가 심각한 사회적 과제로 떠오르고 있다.', exampleTranslation: 'Youth unemployment is emerging as a serious social challenge.',
  },
];

// ── Export ───────────────────────────────────────────────────────

export const KOREAN_B2_VOCAB: VocabWord[] = [
  ...politics,
  ...science,
  ...business,
  ...health_advanced,
  ...arts,
  ...emotions_advanced,
  ...social_issues,
];
