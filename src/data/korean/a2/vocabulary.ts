/**
 * Korean A2 Vocabulary
 *
 * Builds on A1 with TOPIK I Level 2 expectations.
 * Covers travel, shopping, health, work, emotions, routines, and hobbies.
 */

import type { VocabWord } from '../../../types';

const lang = 'ko' as const;
const level = 'A2' as const;

// ── Travel & Transport ──────────────────────────────────────────

const travel: VocabWord[] = [
  {
    id: 'ko_a2_v001', language: lang, level, category: 'travel',
    word: '공항', translation: 'airport', partOfSpeech: 'noun',
    pronunciation: 'gong-hang',
    exampleSentence: '공항에 어떻게 가요?', exampleTranslation: 'How do I get to the airport?',
  },
  {
    id: 'ko_a2_v002', language: lang, level, category: 'travel',
    word: '비행기', translation: 'airplane', partOfSpeech: 'noun',
    pronunciation: 'bi-haeng-gi',
    exampleSentence: '비행기가 몇 시에 출발해요?', exampleTranslation: 'What time does the airplane depart?',
  },
  {
    id: 'ko_a2_v003', language: lang, level, category: 'travel',
    word: '기차', translation: 'train', partOfSpeech: 'noun',
    pronunciation: 'gi-cha',
    exampleSentence: '기차역이 어디예요?', exampleTranslation: 'Where is the train station?',
  },
  {
    id: 'ko_a2_v004', language: lang, level, category: 'travel',
    word: '호텔', translation: 'hotel', partOfSpeech: 'noun',
    pronunciation: 'ho-tel',
    exampleSentence: '호텔을 예약했어요.', exampleTranslation: 'I booked a hotel.',
  },
  {
    id: 'ko_a2_v005', language: lang, level, category: 'travel',
    word: '여권', translation: 'passport', partOfSpeech: 'noun',
    pronunciation: 'yeo-gwon',
    exampleSentence: '여권을 가져오세요.', exampleTranslation: 'Please bring your passport.',
  },
  {
    id: 'ko_a2_v006', language: lang, level, category: 'travel',
    word: '지도', translation: 'map', partOfSpeech: 'noun',
    pronunciation: 'ji-do',
    exampleSentence: '지도를 보여 주세요.', exampleTranslation: 'Please show me a map.',
  },
  {
    id: 'ko_a2_v007', language: lang, level, category: 'travel',
    word: '짐', translation: 'luggage', partOfSpeech: 'noun',
    pronunciation: 'jim',
    exampleSentence: '짐이 너무 무거워요.', exampleTranslation: 'The luggage is too heavy.',
  },
];

// ── Shopping ────────────────────────────────────────────────────

const shopping: VocabWord[] = [
  {
    id: 'ko_a2_v010', language: lang, level, category: 'shopping',
    word: '가게', translation: 'store / shop', partOfSpeech: 'noun',
    pronunciation: 'ga-ge',
    exampleSentence: '이 가게는 몇 시에 문을 닫아요?', exampleTranslation: 'What time does this store close?',
  },
  {
    id: 'ko_a2_v011', language: lang, level, category: 'shopping',
    word: '가격', translation: 'price', partOfSpeech: 'noun',
    pronunciation: 'ga-gyeok',
    exampleSentence: '가격이 얼마예요?', exampleTranslation: 'What is the price?',
  },
  {
    id: 'ko_a2_v012', language: lang, level, category: 'shopping',
    word: '비싸다', translation: 'expensive', partOfSpeech: 'adjective',
    pronunciation: 'bi-ssa-da',
    exampleSentence: '이것은 너무 비싸요.', exampleTranslation: 'This is too expensive.',
  },
  {
    id: 'ko_a2_v013', language: lang, level, category: 'shopping',
    word: '싸다', translation: 'cheap', partOfSpeech: 'adjective',
    pronunciation: 'ssa-da',
    exampleSentence: '이 가방은 싸요.', exampleTranslation: 'This bag is cheap.',
  },
  {
    id: 'ko_a2_v014', language: lang, level, category: 'shopping',
    word: '사다', translation: 'to buy', partOfSpeech: 'verb',
    pronunciation: 'sa-da',
    exampleSentence: '선물을 사고 싶어요.', exampleTranslation: 'I want to buy a gift.',
  },
  {
    id: 'ko_a2_v015', language: lang, level, category: 'shopping',
    word: '카드', translation: 'card (credit/debit)', partOfSpeech: 'noun',
    pronunciation: 'ka-deu',
    exampleSentence: '카드로 계산할게요.', exampleTranslation: 'I will pay by card.',
  },
  {
    id: 'ko_a2_v016', language: lang, level, category: 'shopping',
    word: '영수증', translation: 'receipt', partOfSpeech: 'noun',
    pronunciation: 'yeong-su-jeung',
    exampleSentence: '영수증 주세요.', exampleTranslation: 'Please give me the receipt.',
  },
];

// ── Health ──────────────────────────────────────────────────────

const health: VocabWord[] = [
  {
    id: 'ko_a2_v020', language: lang, level, category: 'health',
    word: '병원', translation: 'hospital', partOfSpeech: 'noun',
    pronunciation: 'byeong-won',
    exampleSentence: '병원에 가야 해요.', exampleTranslation: 'I need to go to the hospital.',
  },
  {
    id: 'ko_a2_v021', language: lang, level, category: 'health',
    word: '의사', translation: 'doctor', partOfSpeech: 'noun',
    pronunciation: 'ui-sa',
    exampleSentence: '의사 선생님이 친절해요.', exampleTranslation: 'The doctor is kind.',
  },
  {
    id: 'ko_a2_v022', language: lang, level, category: 'health',
    word: '약', translation: 'medicine', partOfSpeech: 'noun',
    pronunciation: 'yak',
    exampleSentence: '약을 먹었어요.', exampleTranslation: 'I took medicine.',
  },
  {
    id: 'ko_a2_v023', language: lang, level, category: 'health',
    word: '아프다', translation: 'to be sick / to hurt', partOfSpeech: 'verb',
    pronunciation: 'a-peu-da',
    exampleSentence: '어디가 아파요?', exampleTranslation: 'Where does it hurt?',
  },
  {
    id: 'ko_a2_v024', language: lang, level, category: 'health',
    word: '열', translation: 'fever', partOfSpeech: 'noun',
    pronunciation: 'yeol',
    exampleSentence: '열이 나요.', exampleTranslation: 'I have a fever.',
  },
  {
    id: 'ko_a2_v025', language: lang, level, category: 'health',
    word: '감기', translation: 'cold (illness)', partOfSpeech: 'noun',
    pronunciation: 'gam-gi',
    exampleSentence: '감기에 걸렸어요.', exampleTranslation: 'I caught a cold.',
  },
  {
    id: 'ko_a2_v026', language: lang, level, category: 'health',
    word: '쉬다', translation: 'to rest', partOfSpeech: 'verb',
    pronunciation: 'swi-da',
    exampleSentence: '좀 쉬세요.', exampleTranslation: 'Please rest a bit.',
  },
];

// ── Work & Professions ──────────────────────────────────────────

const work: VocabWord[] = [
  {
    id: 'ko_a2_v030', language: lang, level, category: 'work',
    word: '회사', translation: 'company', partOfSpeech: 'noun',
    pronunciation: 'hoe-sa',
    exampleSentence: '회사에 다녀요.', exampleTranslation: 'I go to work (at a company).',
  },
  {
    id: 'ko_a2_v031', language: lang, level, category: 'work',
    word: '사무실', translation: 'office', partOfSpeech: 'noun',
    pronunciation: 'sa-mu-sil',
    exampleSentence: '사무실이 넓어요.', exampleTranslation: 'The office is spacious.',
  },
  {
    id: 'ko_a2_v032', language: lang, level, category: 'work',
    word: '선생님', translation: 'teacher', partOfSpeech: 'noun',
    pronunciation: 'seon-saeng-nim',
    exampleSentence: '선생님이 설명해 주세요.', exampleTranslation: 'Please explain, teacher.',
  },
  {
    id: 'ko_a2_v033', language: lang, level, category: 'work',
    word: '회의', translation: 'meeting', partOfSpeech: 'noun',
    pronunciation: 'hoe-ui',
    exampleSentence: '오늘 회의가 있어요.', exampleTranslation: 'There is a meeting today.',
  },
  {
    id: 'ko_a2_v034', language: lang, level, category: 'work',
    word: '일하다', translation: 'to work', partOfSpeech: 'verb',
    pronunciation: 'il-ha-da',
    exampleSentence: '어디에서 일해요?', exampleTranslation: 'Where do you work?',
  },
  {
    id: 'ko_a2_v035', language: lang, level, category: 'work',
    word: '월급', translation: 'salary', partOfSpeech: 'noun',
    pronunciation: 'wol-geup',
    exampleSentence: '월급이 적어요.', exampleTranslation: 'The salary is low.',
  },
];

// ── Emotions ────────────────────────────────────────────────────

const emotions: VocabWord[] = [
  {
    id: 'ko_a2_v040', language: lang, level, category: 'emotions',
    word: '행복하다', translation: 'happy', partOfSpeech: 'adjective',
    pronunciation: 'haeng-bo-ka-da',
    exampleSentence: '저는 행복해요.', exampleTranslation: 'I am happy.',
  },
  {
    id: 'ko_a2_v041', language: lang, level, category: 'emotions',
    word: '슬프다', translation: 'sad', partOfSpeech: 'adjective',
    pronunciation: 'seul-peu-da',
    exampleSentence: '그 영화가 슬퍼요.', exampleTranslation: 'That movie is sad.',
  },
  {
    id: 'ko_a2_v042', language: lang, level, category: 'emotions',
    word: '피곤하다', translation: 'tired', partOfSpeech: 'adjective',
    pronunciation: 'pi-gon-ha-da',
    exampleSentence: '오늘 너무 피곤해요.', exampleTranslation: 'I am so tired today.',
  },
  {
    id: 'ko_a2_v043', language: lang, level, category: 'emotions',
    word: '걱정하다', translation: 'to worry', partOfSpeech: 'verb',
    pronunciation: 'geok-jeong-ha-da',
    exampleSentence: '걱정하지 마세요.', exampleTranslation: 'Please do not worry.',
  },
  {
    id: 'ko_a2_v044', language: lang, level, category: 'emotions',
    word: '기쁘다', translation: 'glad / pleased', partOfSpeech: 'adjective',
    pronunciation: 'gi-ppeu-da',
    exampleSentence: '만나서 기뻐요.', exampleTranslation: 'I am glad to meet you.',
  },
  {
    id: 'ko_a2_v045', language: lang, level, category: 'emotions',
    word: '화나다', translation: 'angry / upset', partOfSpeech: 'verb',
    pronunciation: 'hwa-na-da',
    exampleSentence: '왜 화났어요?', exampleTranslation: 'Why are you upset?',
  },
  {
    id: 'ko_a2_v046', language: lang, level, category: 'emotions',
    word: '무섭다', translation: 'scary / afraid', partOfSpeech: 'adjective',
    pronunciation: 'mu-seop-da',
    exampleSentence: '그 영화가 무서워요.', exampleTranslation: 'That movie is scary.',
  },
];

// ── Daily Routines ──────────────────────────────────────────────

const routines: VocabWord[] = [
  {
    id: 'ko_a2_v050', language: lang, level, category: 'routines',
    word: '일어나다', translation: 'to get up / wake up', partOfSpeech: 'verb',
    pronunciation: 'i-reo-na-da',
    exampleSentence: '매일 일곱 시에 일어나요.', exampleTranslation: 'I get up at 7 every day.',
  },
  {
    id: 'ko_a2_v051', language: lang, level, category: 'routines',
    word: '씻다', translation: 'to wash (oneself)', partOfSpeech: 'verb',
    pronunciation: 'ssit-da',
    exampleSentence: '아침에 세수를 씻어요.', exampleTranslation: 'I wash my face in the morning.',
  },
  {
    id: 'ko_a2_v052', language: lang, level, category: 'routines',
    word: '아침', translation: 'morning / breakfast', partOfSpeech: 'noun',
    pronunciation: 'a-chim',
    exampleSentence: '아침을 먹었어요.', exampleTranslation: 'I ate breakfast.',
  },
  {
    id: 'ko_a2_v053', language: lang, level, category: 'routines',
    word: '점심', translation: 'lunch', partOfSpeech: 'noun',
    pronunciation: 'jeom-sim',
    exampleSentence: '점심 같이 먹을래요?', exampleTranslation: 'Shall we eat lunch together?',
  },
  {
    id: 'ko_a2_v054', language: lang, level, category: 'routines',
    word: '저녁', translation: 'evening / dinner', partOfSpeech: 'noun',
    pronunciation: 'jeo-nyeok',
    exampleSentence: '저녁에 뭐 해요?', exampleTranslation: 'What do you do in the evening?',
  },
  {
    id: 'ko_a2_v055', language: lang, level, category: 'routines',
    word: '자다', translation: 'to sleep', partOfSpeech: 'verb',
    pronunciation: 'ja-da',
    exampleSentence: '어제 일찍 잤어요.', exampleTranslation: 'I slept early yesterday.',
  },
  {
    id: 'ko_a2_v056', language: lang, level, category: 'routines',
    word: '운동하다', translation: 'to exercise', partOfSpeech: 'verb',
    pronunciation: 'un-dong-ha-da',
    exampleSentence: '매일 운동해요.', exampleTranslation: 'I exercise every day.',
  },
];

// ── Hobbies ─────────────────────────────────────────────────────

const hobbies: VocabWord[] = [
  {
    id: 'ko_a2_v060', language: lang, level, category: 'hobbies',
    word: '읽다', translation: 'to read', partOfSpeech: 'verb',
    pronunciation: 'ik-da',
    exampleSentence: '책을 읽는 것을 좋아해요.', exampleTranslation: 'I like reading books.',
  },
  {
    id: 'ko_a2_v061', language: lang, level, category: 'hobbies',
    word: '요리하다', translation: 'to cook', partOfSpeech: 'verb',
    pronunciation: 'yo-ri-ha-da',
    exampleSentence: '한국 음식을 요리해요.', exampleTranslation: 'I cook Korean food.',
  },
  {
    id: 'ko_a2_v062', language: lang, level, category: 'hobbies',
    word: '수영하다', translation: 'to swim', partOfSpeech: 'verb',
    pronunciation: 'su-yeong-ha-da',
    exampleSentence: '여름에 수영해요.', exampleTranslation: 'I swim in summer.',
  },
  {
    id: 'ko_a2_v063', language: lang, level, category: 'hobbies',
    word: '노래하다', translation: 'to sing', partOfSpeech: 'verb',
    pronunciation: 'no-rae-ha-da',
    exampleSentence: '노래방에서 노래해요.', exampleTranslation: 'I sing at the karaoke room.',
  },
  {
    id: 'ko_a2_v064', language: lang, level, category: 'hobbies',
    word: '여행하다', translation: 'to travel', partOfSpeech: 'verb',
    pronunciation: 'yeo-haeng-ha-da',
    exampleSentence: '제주도에 여행하고 싶어요.', exampleTranslation: 'I want to travel to Jeju Island.',
  },
  {
    id: 'ko_a2_v065', language: lang, level, category: 'hobbies',
    word: '영화', translation: 'movie', partOfSpeech: 'noun',
    pronunciation: 'yeong-hwa',
    exampleSentence: '영화를 자주 봐요.', exampleTranslation: 'I watch movies often.',
  },
  {
    id: 'ko_a2_v066', language: lang, level, category: 'hobbies',
    word: '음악', translation: 'music', partOfSpeech: 'noun',
    pronunciation: 'eum-ak',
    exampleSentence: '음악을 듣는 것을 좋아해요.', exampleTranslation: 'I like listening to music.',
  },
];

// ── Export ───────────────────────────────────────────────────────

export const KOREAN_A2_VOCAB: VocabWord[] = [
  ...travel,
  ...shopping,
  ...health,
  ...work,
  ...emotions,
  ...routines,
  ...hobbies,
];
