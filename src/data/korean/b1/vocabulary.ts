/**
 * Korean B1 Vocabulary
 *
 * TOPIK II Level 3 expectations.
 * Covers education, technology, environment, media, professions,
 * opinions, housing, and culture.
 */

import type { VocabWord } from '../../../types';

const lang = 'ko' as const;
const level = 'B1' as const;

// ── Education ───────────────────────────────────────────────────

const education: VocabWord[] = [
  {
    id: 'ko_b1_v001', language: lang, level, category: 'education',
    word: '학교', translation: 'school', partOfSpeech: 'noun',
    pronunciation: 'hak-gyo',
    exampleSentence: '학교에서 한국어를 배우고 있어요.', exampleTranslation: 'I am learning Korean at school.',
  },
  {
    id: 'ko_b1_v002', language: lang, level, category: 'education',
    word: '수업', translation: 'class / lesson', partOfSpeech: 'noun',
    pronunciation: 'su-eop',
    exampleSentence: '오늘 수업이 세 시간이나 있어요.', exampleTranslation: 'I have as many as three hours of class today.',
  },
  {
    id: 'ko_b1_v003', language: lang, level, category: 'education',
    word: '시험', translation: 'exam / test', partOfSpeech: 'noun',
    pronunciation: 'si-heom',
    exampleSentence: '다음 주에 중요한 시험이 있어요.', exampleTranslation: 'There is an important exam next week.',
  },
  {
    id: 'ko_b1_v004', language: lang, level, category: 'education',
    word: '숙제', translation: 'homework', partOfSpeech: 'noun',
    pronunciation: 'suk-je',
    exampleSentence: '숙제를 아직 다 못 했어요.', exampleTranslation: 'I have not finished the homework yet.',
  },
  {
    id: 'ko_b1_v005', language: lang, level, category: 'education',
    word: '선생님', translation: 'teacher', partOfSpeech: 'noun',
    pronunciation: 'seon-saeng-nim',
    exampleSentence: '선생님이 아주 친절하게 설명해 주셨어요.', exampleTranslation: 'The teacher explained it very kindly.',
  },
  {
    id: 'ko_b1_v006', language: lang, level, category: 'education',
    word: '학생', translation: 'student', partOfSpeech: 'noun',
    pronunciation: 'hak-saeng',
    exampleSentence: '이 반에 학생이 스무 명 있어요.', exampleTranslation: 'There are twenty students in this class.',
  },
  {
    id: 'ko_b1_v007', language: lang, level, category: 'education',
    word: '대학교', translation: 'university', partOfSpeech: 'noun',
    pronunciation: 'dae-hak-gyo',
    exampleSentence: '저는 서울에 있는 대학교에 다녀요.', exampleTranslation: 'I attend a university in Seoul.',
  },
  {
    id: 'ko_b1_v008', language: lang, level, category: 'education',
    word: '도서관', translation: 'library', partOfSpeech: 'noun',
    pronunciation: 'do-seo-gwan',
    exampleSentence: '시험 기간에는 도서관에서 공부해요.', exampleTranslation: 'I study at the library during exam period.',
  },
];

// ── Technology ──────────────────────────────────────────────────

const technology: VocabWord[] = [
  {
    id: 'ko_b1_v009', language: lang, level, category: 'technology',
    word: '컴퓨터', translation: 'computer', partOfSpeech: 'noun',
    pronunciation: 'keom-pyu-teo',
    exampleSentence: '컴퓨터로 보고서를 작성했어요.', exampleTranslation: 'I wrote a report on the computer.',
  },
  {
    id: 'ko_b1_v010', language: lang, level, category: 'technology',
    word: '인터넷', translation: 'internet', partOfSpeech: 'noun',
    pronunciation: 'in-teo-net',
    exampleSentence: '인터넷이 갑자기 끊겼어요.', exampleTranslation: 'The internet suddenly cut out.',
  },
  {
    id: 'ko_b1_v011', language: lang, level, category: 'technology',
    word: '휴대폰', translation: 'mobile phone', partOfSpeech: 'noun',
    pronunciation: 'hyu-dae-pon',
    exampleSentence: '휴대폰을 새로 바꿨어요.', exampleTranslation: 'I got a new mobile phone.',
  },
  {
    id: 'ko_b1_v012', language: lang, level, category: 'technology',
    word: '이메일', translation: 'email', partOfSpeech: 'noun',
    pronunciation: 'i-me-il',
    exampleSentence: '이메일을 보냈는데 답장이 없어요.', exampleTranslation: 'I sent an email but there is no reply.',
  },
  {
    id: 'ko_b1_v013', language: lang, level, category: 'technology',
    word: '프로그램', translation: 'program / software', partOfSpeech: 'noun',
    pronunciation: 'peu-ro-geu-raem',
    exampleSentence: '이 프로그램은 사용하기 쉬워요.', exampleTranslation: 'This program is easy to use.',
  },
  {
    id: 'ko_b1_v014', language: lang, level, category: 'technology',
    word: '화면', translation: 'screen', partOfSpeech: 'noun',
    pronunciation: 'hwa-myeon',
    exampleSentence: '화면이 너무 작아서 눈이 아파요.', exampleTranslation: 'The screen is so small that my eyes hurt.',
  },
  {
    id: 'ko_b1_v015', language: lang, level, category: 'technology',
    word: '비밀번호', translation: 'password', partOfSpeech: 'noun',
    pronunciation: 'bi-mil-beon-ho',
    exampleSentence: '비밀번호를 잊어버려서 로그인을 못 해요.', exampleTranslation: 'I forgot my password so I cannot log in.',
  },
];

// ── Environment ─────────────────────────────────────────────────

const environment: VocabWord[] = [
  {
    id: 'ko_b1_v016', language: lang, level, category: 'environment',
    word: '환경', translation: 'environment', partOfSpeech: 'noun',
    pronunciation: 'hwan-gyeong',
    exampleSentence: '환경을 보호하는 것이 중요해요.', exampleTranslation: 'It is important to protect the environment.',
  },
  {
    id: 'ko_b1_v017', language: lang, level, category: 'environment',
    word: '자연', translation: 'nature', partOfSpeech: 'noun',
    pronunciation: 'ja-yeon',
    exampleSentence: '자연 속에서 쉬면 스트레스가 풀려요.', exampleTranslation: 'Resting in nature relieves stress.',
  },
  {
    id: 'ko_b1_v018', language: lang, level, category: 'environment',
    word: '공기', translation: 'air', partOfSpeech: 'noun',
    pronunciation: 'gong-gi',
    exampleSentence: '산에 올라가면 공기가 맑아요.', exampleTranslation: 'The air is clear when you go up the mountain.',
  },
  {
    id: 'ko_b1_v019', language: lang, level, category: 'environment',
    word: '쓰레기', translation: 'trash / garbage', partOfSpeech: 'noun',
    pronunciation: 'sseu-re-gi',
    exampleSentence: '쓰레기를 함부로 버리면 안 돼요.', exampleTranslation: 'You must not throw trash away carelessly.',
  },
  {
    id: 'ko_b1_v020', language: lang, level, category: 'environment',
    word: '재활용', translation: 'recycling', partOfSpeech: 'noun',
    pronunciation: 'jae-hwal-yong',
    exampleSentence: '한국에서는 재활용을 철저히 해야 해요.', exampleTranslation: 'In Korea, you have to recycle thoroughly.',
  },
  {
    id: 'ko_b1_v021', language: lang, level, category: 'environment',
    word: '오염', translation: 'pollution', partOfSpeech: 'noun',
    pronunciation: 'o-yeom',
    exampleSentence: '대기 오염이 점점 심해지고 있어요.', exampleTranslation: 'Air pollution is getting worse and worse.',
  },
  {
    id: 'ko_b1_v022', language: lang, level, category: 'environment',
    word: '에너지', translation: 'energy', partOfSpeech: 'noun',
    pronunciation: 'e-neo-ji',
    exampleSentence: '에너지를 절약하는 습관을 길러야 해요.', exampleTranslation: 'We need to develop the habit of saving energy.',
  },
  {
    id: 'ko_b1_v023', language: lang, level, category: 'environment',
    word: '지구', translation: 'Earth', partOfSpeech: 'noun',
    pronunciation: 'ji-gu',
    exampleSentence: '지구 온난화 문제가 심각해요.', exampleTranslation: 'The problem of global warming is serious.',
  },
];

// ── Media ───────────────────────────────────────────────────────

const media: VocabWord[] = [
  {
    id: 'ko_b1_v024', language: lang, level, category: 'media',
    word: '뉴스', translation: 'news', partOfSpeech: 'noun',
    pronunciation: 'nyu-seu',
    exampleSentence: '매일 아침 뉴스를 확인해요.', exampleTranslation: 'I check the news every morning.',
  },
  {
    id: 'ko_b1_v025', language: lang, level, category: 'media',
    word: '신문', translation: 'newspaper', partOfSpeech: 'noun',
    pronunciation: 'sin-mun',
    exampleSentence: '요즘은 신문을 읽는 사람이 줄었어요.', exampleTranslation: 'These days, the number of people who read newspapers has decreased.',
  },
  {
    id: 'ko_b1_v026', language: lang, level, category: 'media',
    word: '방송', translation: 'broadcast', partOfSpeech: 'noun',
    pronunciation: 'bang-song',
    exampleSentence: '그 가수가 방송에 출연했어요.', exampleTranslation: 'That singer appeared on a broadcast.',
  },
  {
    id: 'ko_b1_v027', language: lang, level, category: 'media',
    word: '기사', translation: 'article / news story', partOfSpeech: 'noun',
    pronunciation: 'gi-sa',
    exampleSentence: '이 기사를 읽고 깜짝 놀랐어요.', exampleTranslation: 'I was surprised after reading this article.',
  },
  {
    id: 'ko_b1_v028', language: lang, level, category: 'media',
    word: '광고', translation: 'advertisement', partOfSpeech: 'noun',
    pronunciation: 'gwang-go',
    exampleSentence: '요즘 광고가 너무 많아서 불편해요.', exampleTranslation: 'There are so many ads these days that it is inconvenient.',
  },
  {
    id: 'ko_b1_v029', language: lang, level, category: 'media',
    word: '잡지', translation: 'magazine', partOfSpeech: 'noun',
    pronunciation: 'jap-ji',
    exampleSentence: '패션 잡지를 즐겨 봐요.', exampleTranslation: 'I enjoy reading fashion magazines.',
  },
  {
    id: 'ko_b1_v030', language: lang, level, category: 'media',
    word: '프로그램', translation: 'TV program', partOfSpeech: 'noun',
    pronunciation: 'peu-ro-geu-raem',
    exampleSentence: '재미있는 프로그램을 추천해 주세요.', exampleTranslation: 'Please recommend an interesting program.',
  },
];

// ── Professions ─────────────────────────────────────────────────

const professions: VocabWord[] = [
  {
    id: 'ko_b1_v031', language: lang, level, category: 'professions',
    word: '의사', translation: 'doctor', partOfSpeech: 'noun',
    pronunciation: 'ui-sa',
    exampleSentence: '의사가 건강 검진을 받으라고 했어요.', exampleTranslation: 'The doctor told me to get a health check-up.',
  },
  {
    id: 'ko_b1_v032', language: lang, level, category: 'professions',
    word: '간호사', translation: 'nurse', partOfSpeech: 'noun',
    pronunciation: 'gan-ho-sa',
    exampleSentence: '간호사가 친절하게 돌봐 주었어요.', exampleTranslation: 'The nurse took care of me kindly.',
  },
  {
    id: 'ko_b1_v033', language: lang, level, category: 'professions',
    word: '변호사', translation: 'lawyer', partOfSpeech: 'noun',
    pronunciation: 'byeon-ho-sa',
    exampleSentence: '이 문제는 변호사와 상담하는 게 좋겠어요.', exampleTranslation: 'It would be good to consult a lawyer about this issue.',
  },
  {
    id: 'ko_b1_v034', language: lang, level, category: 'professions',
    word: '요리사', translation: 'chef / cook', partOfSpeech: 'noun',
    pronunciation: 'yo-ri-sa',
    exampleSentence: '그 식당의 요리사가 유명해요.', exampleTranslation: 'The chef at that restaurant is famous.',
  },
  {
    id: 'ko_b1_v035', language: lang, level, category: 'professions',
    word: '경찰', translation: 'police', partOfSpeech: 'noun',
    pronunciation: 'gyeong-chal',
    exampleSentence: '경찰에 신고하는 게 좋겠어요.', exampleTranslation: 'It would be best to report it to the police.',
  },
  {
    id: 'ko_b1_v036', language: lang, level, category: 'professions',
    word: '소방관', translation: 'firefighter', partOfSpeech: 'noun',
    pronunciation: 'so-bang-gwan',
    exampleSentence: '소방관들이 빠르게 불을 껐어요.', exampleTranslation: 'The firefighters put out the fire quickly.',
  },
  {
    id: 'ko_b1_v037', language: lang, level, category: 'professions',
    word: '기자', translation: 'journalist / reporter', partOfSpeech: 'noun',
    pronunciation: 'gi-ja',
    exampleSentence: '기자가 사건 현장에서 취재하고 있어요.', exampleTranslation: 'The reporter is covering the story at the scene.',
  },
  {
    id: 'ko_b1_v038', language: lang, level, category: 'professions',
    word: '회사원', translation: 'office worker', partOfSpeech: 'noun',
    pronunciation: 'hoe-sa-won',
    exampleSentence: '회사원들이 출근 시간에 지하철을 많이 타요.', exampleTranslation: 'Office workers ride the subway a lot during commute hours.',
  },
];

// ── Opinions ────────────────────────────────────────────────────

const opinions: VocabWord[] = [
  {
    id: 'ko_b1_v039', language: lang, level, category: 'opinions',
    word: '생각', translation: 'thought / idea', partOfSpeech: 'noun',
    pronunciation: 'saeng-gak',
    exampleSentence: '이 문제에 대해 어떤 생각을 가지고 계세요?', exampleTranslation: 'What do you think about this issue?',
  },
  {
    id: 'ko_b1_v040', language: lang, level, category: 'opinions',
    word: '의견', translation: 'opinion', partOfSpeech: 'noun',
    pronunciation: 'ui-gyeon',
    exampleSentence: '다른 사람의 의견도 들어 보세요.', exampleTranslation: 'Listen to other people\'s opinions too.',
  },
  {
    id: 'ko_b1_v041', language: lang, level, category: 'opinions',
    word: '찬성', translation: 'agreement / approval', partOfSpeech: 'noun',
    pronunciation: 'chan-seong',
    exampleSentence: '저는 그 계획에 찬성해요.', exampleTranslation: 'I agree with that plan.',
  },
  {
    id: 'ko_b1_v042', language: lang, level, category: 'opinions',
    word: '반대', translation: 'opposition / disagreement', partOfSpeech: 'noun',
    pronunciation: 'ban-dae',
    exampleSentence: '많은 사람들이 그 정책에 반대했어요.', exampleTranslation: 'Many people opposed that policy.',
  },
  {
    id: 'ko_b1_v043', language: lang, level, category: 'opinions',
    word: '이유', translation: 'reason', partOfSpeech: 'noun',
    pronunciation: 'i-yu',
    exampleSentence: '반대하는 이유를 설명해 주세요.', exampleTranslation: 'Please explain the reason you oppose it.',
  },
  {
    id: 'ko_b1_v044', language: lang, level, category: 'opinions',
    word: '장점', translation: 'advantage / strength', partOfSpeech: 'noun',
    pronunciation: 'jang-jeom',
    exampleSentence: '이 방법의 장점은 시간이 절약된다는 거예요.', exampleTranslation: 'The advantage of this method is that it saves time.',
  },
  {
    id: 'ko_b1_v045', language: lang, level, category: 'opinions',
    word: '단점', translation: 'disadvantage / weakness', partOfSpeech: 'noun',
    pronunciation: 'dan-jeom',
    exampleSentence: '장점도 있지만 단점도 있어요.', exampleTranslation: 'There are advantages, but there are also disadvantages.',
  },
];

// ── Housing ─────────────────────────────────────────────────────

const housing: VocabWord[] = [
  {
    id: 'ko_b1_v046', language: lang, level, category: 'housing',
    word: '아파트', translation: 'apartment', partOfSpeech: 'noun',
    pronunciation: 'a-pa-teu',
    exampleSentence: '한국에서는 아파트에 사는 사람이 많아요.', exampleTranslation: 'In Korea, many people live in apartments.',
  },
  {
    id: 'ko_b1_v047', language: lang, level, category: 'housing',
    word: '방', translation: 'room', partOfSpeech: 'noun',
    pronunciation: 'bang',
    exampleSentence: '방이 넓어서 마음에 들어요.', exampleTranslation: 'I like the room because it is spacious.',
  },
  {
    id: 'ko_b1_v048', language: lang, level, category: 'housing',
    word: '부엌', translation: 'kitchen', partOfSpeech: 'noun',
    pronunciation: 'bu-eok',
    exampleSentence: '부엌에서 맛있는 냄새가 나요.', exampleTranslation: 'A delicious smell is coming from the kitchen.',
  },
  {
    id: 'ko_b1_v049', language: lang, level, category: 'housing',
    word: '거실', translation: 'living room', partOfSpeech: 'noun',
    pronunciation: 'geo-sil',
    exampleSentence: '거실에서 가족과 함께 영화를 봤어요.', exampleTranslation: 'I watched a movie with my family in the living room.',
  },
  {
    id: 'ko_b1_v050', language: lang, level, category: 'housing',
    word: '화장실', translation: 'bathroom / restroom', partOfSpeech: 'noun',
    pronunciation: 'hwa-jang-sil',
    exampleSentence: '화장실이 깨끗해서 좋아요.', exampleTranslation: 'I like it because the bathroom is clean.',
  },
  {
    id: 'ko_b1_v051', language: lang, level, category: 'housing',
    word: '이사', translation: 'moving (house)', partOfSpeech: 'noun',
    pronunciation: 'i-sa',
    exampleSentence: '다음 달에 이사할 예정이에요.', exampleTranslation: 'I am planning to move next month.',
  },
  {
    id: 'ko_b1_v052', language: lang, level, category: 'housing',
    word: '계약', translation: 'contract', partOfSpeech: 'noun',
    pronunciation: 'gye-yak',
    exampleSentence: '집 계약을 하기 전에 잘 확인하세요.', exampleTranslation: 'Check carefully before signing the housing contract.',
  },
  {
    id: 'ko_b1_v053', language: lang, level, category: 'housing',
    word: '월세', translation: 'monthly rent', partOfSpeech: 'noun',
    pronunciation: 'wol-se',
    exampleSentence: '월세가 올라서 부담이 돼요.', exampleTranslation: 'The monthly rent went up, so it is a burden.',
  },
];

// ── Culture ─────────────────────────────────────────────────────

const culture: VocabWord[] = [
  {
    id: 'ko_b1_v054', language: lang, level, category: 'culture',
    word: '문화', translation: 'culture', partOfSpeech: 'noun',
    pronunciation: 'mun-hwa',
    exampleSentence: '한국 문화에 관심이 많아요.', exampleTranslation: 'I am very interested in Korean culture.',
  },
  {
    id: 'ko_b1_v055', language: lang, level, category: 'culture',
    word: '전통', translation: 'tradition', partOfSpeech: 'noun',
    pronunciation: 'jeon-tong',
    exampleSentence: '전통 음식을 만들어 보고 싶어요.', exampleTranslation: 'I want to try making traditional food.',
  },
  {
    id: 'ko_b1_v056', language: lang, level, category: 'culture',
    word: '축제', translation: 'festival', partOfSpeech: 'noun',
    pronunciation: 'chuk-je',
    exampleSentence: '가을에 유명한 축제가 열려요.', exampleTranslation: 'A famous festival is held in autumn.',
  },
  {
    id: 'ko_b1_v057', language: lang, level, category: 'culture',
    word: '공연', translation: 'performance / show', partOfSpeech: 'noun',
    pronunciation: 'gong-yeon',
    exampleSentence: '어제 본 공연이 정말 감동적이었어요.', exampleTranslation: 'The performance I saw yesterday was really moving.',
  },
  {
    id: 'ko_b1_v058', language: lang, level, category: 'culture',
    word: '박물관', translation: 'museum', partOfSpeech: 'noun',
    pronunciation: 'bang-mul-gwan',
    exampleSentence: '주말에 국립 박물관에 갔어요.', exampleTranslation: 'I went to the national museum on the weekend.',
  },
  {
    id: 'ko_b1_v059', language: lang, level, category: 'culture',
    word: '역사', translation: 'history', partOfSpeech: 'noun',
    pronunciation: 'yeok-sa',
    exampleSentence: '한국의 역사를 공부하면 재미있어요.', exampleTranslation: 'It is interesting to study Korean history.',
  },
  {
    id: 'ko_b1_v060', language: lang, level, category: 'culture',
    word: '예술', translation: 'art', partOfSpeech: 'noun',
    pronunciation: 'ye-sul',
    exampleSentence: '서울에는 예술을 즐길 수 있는 곳이 많아요.', exampleTranslation: 'There are many places in Seoul where you can enjoy art.',
  },
];

// ── Export ───────────────────────────────────────────────────────

export const KOREAN_B1_VOCAB: VocabWord[] = [
  ...education,
  ...technology,
  ...environment,
  ...media,
  ...professions,
  ...opinions,
  ...housing,
  ...culture,
];
