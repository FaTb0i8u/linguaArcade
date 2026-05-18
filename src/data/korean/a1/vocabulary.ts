/**
 * Korean A1 Vocabulary
 *
 * Organised by thematic category, matching TOPIK I (Level 1) expectations.
 * Each word includes Romanisation, part of speech, and example sentences.
 *
 * Korean uses Hangul, so pronunciation fields use Revised Romanisation.
 */

import type { VocabWord } from '../../../types';

const lang = 'ko' as const;
const level = 'A1' as const;

// ── Greetings & Common Phrases ──────────────────────────────────

const greetings: VocabWord[] = [
  {
    id: 'ko_a1_v001', language: lang, level, category: 'greetings',
    word: '안녕하세요', translation: 'hello (formal)', partOfSpeech: 'interjection',
    pronunciation: 'an-nyeong-ha-se-yo',
    exampleSentence: '안녕하세요, 만나서 반갑습니다.', exampleTranslation: 'Hello, nice to meet you.',
  },
  {
    id: 'ko_a1_v002', language: lang, level, category: 'greetings',
    word: '안녕', translation: 'hi / bye (informal)', partOfSpeech: 'interjection',
    pronunciation: 'an-nyeong',
    exampleSentence: '안녕, 잘 지냈어?', exampleTranslation: 'Hi, how have you been?',
  },
  {
    id: 'ko_a1_v003', language: lang, level, category: 'greetings',
    word: '감사합니다', translation: 'thank you (formal)', partOfSpeech: 'interjection',
    pronunciation: 'gam-sa-ham-ni-da',
    exampleSentence: '도와주셔서 감사합니다.', exampleTranslation: 'Thank you for helping.',
  },
  {
    id: 'ko_a1_v004', language: lang, level, category: 'greetings',
    word: '고마워요', translation: 'thank you (polite)', partOfSpeech: 'interjection',
    pronunciation: 'go-ma-wo-yo',
    exampleSentence: '선물 고마워요.', exampleTranslation: 'Thank you for the gift.',
  },
  {
    id: 'ko_a1_v005', language: lang, level, category: 'greetings',
    word: '죄송합니다', translation: "I'm sorry (formal)", partOfSpeech: 'interjection',
    pronunciation: 'joe-song-ham-ni-da',
    exampleSentence: '늦어서 죄송합니다.', exampleTranslation: "I'm sorry for being late.",
  },
  {
    id: 'ko_a1_v006', language: lang, level, category: 'greetings',
    word: '네', translation: 'yes', partOfSpeech: 'interjection',
    pronunciation: 'ne',
    exampleSentence: '네, 알겠습니다.', exampleTranslation: 'Yes, I understand.',
  },
  {
    id: 'ko_a1_v007', language: lang, level, category: 'greetings',
    word: '아니요', translation: 'no', partOfSpeech: 'interjection',
    pronunciation: 'a-ni-yo',
    exampleSentence: '아니요, 괜찮아요.', exampleTranslation: "No, it's okay.",
  },
  {
    id: 'ko_a1_v008', language: lang, level, category: 'greetings',
    word: '안녕히 가세요', translation: 'goodbye (to someone leaving)', partOfSpeech: 'interjection',
    pronunciation: 'an-nyeong-hi ga-se-yo',
    exampleSentence: '안녕히 가세요! 내일 봐요.', exampleTranslation: 'Goodbye! See you tomorrow.',
  },
  {
    id: 'ko_a1_v009', language: lang, level, category: 'greetings',
    word: '안녕히 계세요', translation: 'goodbye (to someone staying)', partOfSpeech: 'interjection',
    pronunciation: 'an-nyeong-hi gye-se-yo',
    exampleSentence: '안녕히 계세요, 선생님.', exampleTranslation: 'Goodbye, teacher.',
  },
];

// ── Numbers (Sino-Korean) ───────────────────────────────────────

const numbers: VocabWord[] = [
  {
    id: 'ko_a1_v010', language: lang, level, category: 'numbers',
    word: '일', translation: 'one (1)', partOfSpeech: 'numeral',
    pronunciation: 'il',
    exampleSentence: '일월은 겨울이에요.', exampleTranslation: 'January is winter.',
  },
  {
    id: 'ko_a1_v011', language: lang, level, category: 'numbers',
    word: '이', translation: 'two (2)', partOfSpeech: 'numeral',
    pronunciation: 'i',
    exampleSentence: '이 더하기 이는 사예요.', exampleTranslation: 'Two plus two is four.',
  },
  {
    id: 'ko_a1_v012', language: lang, level, category: 'numbers',
    word: '삼', translation: 'three (3)', partOfSpeech: 'numeral',
    pronunciation: 'sam',
    exampleSentence: '삼층에 가세요.', exampleTranslation: 'Go to the third floor.',
  },
  {
    id: 'ko_a1_v013', language: lang, level, category: 'numbers',
    word: '사', translation: 'four (4)', partOfSpeech: 'numeral',
    pronunciation: 'sa',
    exampleSentence: '사월에 벚꽃이 펴요.', exampleTranslation: 'Cherry blossoms bloom in April.',
  },
  {
    id: 'ko_a1_v014', language: lang, level, category: 'numbers',
    word: '오', translation: 'five (5)', partOfSpeech: 'numeral',
    pronunciation: 'o',
    exampleSentence: '오 분 기다리세요.', exampleTranslation: 'Please wait five minutes.',
  },
  {
    id: 'ko_a1_v015', language: lang, level, category: 'numbers',
    word: '십', translation: 'ten (10)', partOfSpeech: 'numeral',
    pronunciation: 'sip',
    exampleSentence: '십 분 후에 만나요.', exampleTranslation: "Let's meet in ten minutes.",
  },
  {
    id: 'ko_a1_v016', language: lang, level, category: 'numbers',
    word: '백', translation: 'hundred (100)', partOfSpeech: 'numeral',
    pronunciation: 'baek',
    exampleSentence: '백 원짜리 동전이에요.', exampleTranslation: "It's a 100-won coin.",
  },
];

// ── Family ──────────────────────────────────────────────────────

const family: VocabWord[] = [
  {
    id: 'ko_a1_v020', language: lang, level, category: 'family',
    word: '엄마', translation: 'mom', partOfSpeech: 'noun',
    pronunciation: 'eom-ma',
    exampleSentence: '엄마가 요리해요.', exampleTranslation: 'Mom is cooking.',
  },
  {
    id: 'ko_a1_v021', language: lang, level, category: 'family',
    word: '아빠', translation: 'dad', partOfSpeech: 'noun',
    pronunciation: 'a-ppa',
    exampleSentence: '아빠가 회사에 가요.', exampleTranslation: 'Dad goes to the company.',
  },
  {
    id: 'ko_a1_v022', language: lang, level, category: 'family',
    word: '언니/누나', translation: 'older sister', partOfSpeech: 'noun',
    pronunciation: 'eon-ni / nu-na',
    exampleSentence: '언니가 대학생이에요.', exampleTranslation: 'My older sister is a college student.',
  },
  {
    id: 'ko_a1_v023', language: lang, level, category: 'family',
    word: '오빠/형', translation: 'older brother', partOfSpeech: 'noun',
    pronunciation: 'o-ppa / hyeong',
    exampleSentence: '형이 축구를 해요.', exampleTranslation: 'My older brother plays soccer.',
  },
  {
    id: 'ko_a1_v024', language: lang, level, category: 'family',
    word: '동생', translation: 'younger sibling', partOfSpeech: 'noun',
    pronunciation: 'dong-saeng',
    exampleSentence: '동생이 학생이에요.', exampleTranslation: 'My younger sibling is a student.',
  },
  {
    id: 'ko_a1_v025', language: lang, level, category: 'family',
    word: '친구', translation: 'friend', partOfSpeech: 'noun',
    pronunciation: 'chin-gu',
    exampleSentence: '친구를 만나요.', exampleTranslation: 'I meet a friend.',
  },
];

// ── Food & Drink ────────────────────────────────────────────────

const food: VocabWord[] = [
  {
    id: 'ko_a1_v030', language: lang, level, category: 'food',
    word: '물', translation: 'water', partOfSpeech: 'noun',
    pronunciation: 'mul',
    exampleSentence: '물 주세요.', exampleTranslation: 'Water, please.',
  },
  {
    id: 'ko_a1_v031', language: lang, level, category: 'food',
    word: '밥', translation: 'rice / meal', partOfSpeech: 'noun',
    pronunciation: 'bap',
    exampleSentence: '밥을 먹었어요.', exampleTranslation: 'I ate rice.',
  },
  {
    id: 'ko_a1_v032', language: lang, level, category: 'food',
    word: '김치', translation: 'kimchi', partOfSpeech: 'noun',
    pronunciation: 'gim-chi',
    exampleSentence: '김치가 매워요.', exampleTranslation: 'Kimchi is spicy.',
  },
  {
    id: 'ko_a1_v033', language: lang, level, category: 'food',
    word: '사과', translation: 'apple', partOfSpeech: 'noun',
    pronunciation: 'sa-gwa',
    exampleSentence: '사과를 좋아해요.', exampleTranslation: 'I like apples.',
  },
  {
    id: 'ko_a1_v034', language: lang, level, category: 'food',
    word: '커피', translation: 'coffee', partOfSpeech: 'noun',
    pronunciation: 'keo-pi',
    exampleSentence: '커피 한 잔 주세요.', exampleTranslation: 'One cup of coffee, please.',
  },
  {
    id: 'ko_a1_v035', language: lang, level, category: 'food',
    word: '고기', translation: 'meat', partOfSpeech: 'noun',
    pronunciation: 'go-gi',
    exampleSentence: '고기를 구워요.', exampleTranslation: 'I grill meat.',
  },
  {
    id: 'ko_a1_v036', language: lang, level, category: 'food',
    word: '라면', translation: 'ramen / instant noodles', partOfSpeech: 'noun',
    pronunciation: 'ra-myeon',
    exampleSentence: '라면이 맛있어요.', exampleTranslation: 'The ramen is delicious.',
  },
];

// ── Common Verbs ────────────────────────────────────────────────

const verbs: VocabWord[] = [
  {
    id: 'ko_a1_v040', language: lang, level, category: 'verbs',
    word: '가다', translation: 'to go', partOfSpeech: 'verb',
    pronunciation: 'ga-da',
    exampleSentence: '학교에 가요.', exampleTranslation: 'I go to school.',
  },
  {
    id: 'ko_a1_v041', language: lang, level, category: 'verbs',
    word: '오다', translation: 'to come', partOfSpeech: 'verb',
    pronunciation: 'o-da',
    exampleSentence: '친구가 와요.', exampleTranslation: 'A friend is coming.',
  },
  {
    id: 'ko_a1_v042', language: lang, level, category: 'verbs',
    word: '먹다', translation: 'to eat', partOfSpeech: 'verb',
    pronunciation: 'meok-da',
    exampleSentence: '점심을 먹어요.', exampleTranslation: 'I eat lunch.',
  },
  {
    id: 'ko_a1_v043', language: lang, level, category: 'verbs',
    word: '마시다', translation: 'to drink', partOfSpeech: 'verb',
    pronunciation: 'ma-si-da',
    exampleSentence: '커피를 마셔요.', exampleTranslation: 'I drink coffee.',
  },
  {
    id: 'ko_a1_v044', language: lang, level, category: 'verbs',
    word: '하다', translation: 'to do', partOfSpeech: 'verb',
    pronunciation: 'ha-da',
    exampleSentence: '공부를 해요.', exampleTranslation: 'I study.',
  },
  {
    id: 'ko_a1_v045', language: lang, level, category: 'verbs',
    word: '보다', translation: 'to see / watch', partOfSpeech: 'verb',
    pronunciation: 'bo-da',
    exampleSentence: '영화를 봐요.', exampleTranslation: 'I watch a movie.',
  },
  {
    id: 'ko_a1_v046', language: lang, level, category: 'verbs',
    word: '있다', translation: 'to have / to exist', partOfSpeech: 'verb',
    pronunciation: 'it-da',
    exampleSentence: '시간이 있어요.', exampleTranslation: 'I have time.',
  },
  {
    id: 'ko_a1_v047', language: lang, level, category: 'verbs',
    word: '없다', translation: 'to not have / to not exist', partOfSpeech: 'verb',
    pronunciation: 'eop-da',
    exampleSentence: '돈이 없어요.', exampleTranslation: "I don't have money.",
  },
  {
    id: 'ko_a1_v048', language: lang, level, category: 'verbs',
    word: '좋아하다', translation: 'to like', partOfSpeech: 'verb',
    pronunciation: 'jo-a-ha-da',
    exampleSentence: '한국 음식을 좋아해요.', exampleTranslation: 'I like Korean food.',
  },
];

// ── Common Adjectives ───────────────────────────────────────────

const adjectives: VocabWord[] = [
  {
    id: 'ko_a1_v050', language: lang, level, category: 'adjectives',
    word: '크다', translation: 'to be big', partOfSpeech: 'adjective',
    pronunciation: 'keu-da',
    exampleSentence: '집이 커요.', exampleTranslation: 'The house is big.',
  },
  {
    id: 'ko_a1_v051', language: lang, level, category: 'adjectives',
    word: '작다', translation: 'to be small', partOfSpeech: 'adjective',
    pronunciation: 'jak-da',
    exampleSentence: '고양이가 작아요.', exampleTranslation: 'The cat is small.',
  },
  {
    id: 'ko_a1_v052', language: lang, level, category: 'adjectives',
    word: '좋다', translation: 'to be good', partOfSpeech: 'adjective',
    pronunciation: 'jo-ta',
    exampleSentence: '날씨가 좋아요.', exampleTranslation: 'The weather is nice.',
  },
  {
    id: 'ko_a1_v053', language: lang, level, category: 'adjectives',
    word: '맛있다', translation: 'to be delicious', partOfSpeech: 'adjective',
    pronunciation: 'ma-sit-da',
    exampleSentence: '이 음식이 맛있어요.', exampleTranslation: 'This food is delicious.',
  },
  {
    id: 'ko_a1_v054', language: lang, level, category: 'adjectives',
    word: '예쁘다', translation: 'to be pretty', partOfSpeech: 'adjective',
    pronunciation: 'ye-ppeu-da',
    exampleSentence: '꽃이 예뻐요.', exampleTranslation: 'The flower is pretty.',
  },
  {
    id: 'ko_a1_v055', language: lang, level, category: 'adjectives',
    word: '재미있다', translation: 'to be fun / interesting', partOfSpeech: 'adjective',
    pronunciation: 'jae-mi-it-da',
    exampleSentence: '이 영화가 재미있어요.', exampleTranslation: 'This movie is interesting.',
  },
  {
    id: 'ko_a1_v056', language: lang, level, category: 'adjectives',
    word: '비싸다', translation: 'to be expensive', partOfSpeech: 'adjective',
    pronunciation: 'bi-ssa-da',
    exampleSentence: '이 가방이 비싸요.', exampleTranslation: 'This bag is expensive.',
  },
];

// ── Places ──────────────────────────────────────────────────────

const places: VocabWord[] = [
  {
    id: 'ko_a1_v060', language: lang, level, category: 'places',
    word: '집', translation: 'house / home', partOfSpeech: 'noun',
    pronunciation: 'jip',
    exampleSentence: '집에 가요.', exampleTranslation: "I'm going home.",
  },
  {
    id: 'ko_a1_v061', language: lang, level, category: 'places',
    word: '학교', translation: 'school', partOfSpeech: 'noun',
    pronunciation: 'hak-gyo',
    exampleSentence: '학교에서 공부해요.', exampleTranslation: 'I study at school.',
  },
  {
    id: 'ko_a1_v062', language: lang, level, category: 'places',
    word: '식당', translation: 'restaurant', partOfSpeech: 'noun',
    pronunciation: 'sik-dang',
    exampleSentence: '식당에서 밥을 먹어요.', exampleTranslation: 'I eat at the restaurant.',
  },
  {
    id: 'ko_a1_v063', language: lang, level, category: 'places',
    word: '병원', translation: 'hospital', partOfSpeech: 'noun',
    pronunciation: 'byeong-won',
    exampleSentence: '병원에 가요.', exampleTranslation: 'I go to the hospital.',
  },
  {
    id: 'ko_a1_v064', language: lang, level, category: 'places',
    word: '가게', translation: 'store / shop', partOfSpeech: 'noun',
    pronunciation: 'ga-ge',
    exampleSentence: '가게에서 사요.', exampleTranslation: 'I buy it at the store.',
  },
  {
    id: 'ko_a1_v065', language: lang, level, category: 'places',
    word: '공원', translation: 'park', partOfSpeech: 'noun',
    pronunciation: 'gong-won',
    exampleSentence: '공원에서 산책해요.', exampleTranslation: 'I take a walk in the park.',
  },
];

// ── Question Words ──────────────────────────────────────────────

const questions: VocabWord[] = [
  {
    id: 'ko_a1_v070', language: lang, level, category: 'questions',
    word: '뭐/무엇', translation: 'what', partOfSpeech: 'pronoun',
    pronunciation: 'mwo / mu-eot',
    exampleSentence: '뭐 먹을 거예요?', exampleTranslation: 'What will you eat?',
  },
  {
    id: 'ko_a1_v071', language: lang, level, category: 'questions',
    word: '어디', translation: 'where', partOfSpeech: 'adverb',
    pronunciation: 'eo-di',
    exampleSentence: '어디에 가요?', exampleTranslation: 'Where are you going?',
  },
  {
    id: 'ko_a1_v072', language: lang, level, category: 'questions',
    word: '언제', translation: 'when', partOfSpeech: 'adverb',
    pronunciation: 'eon-je',
    exampleSentence: '언제 와요?', exampleTranslation: 'When are you coming?',
  },
  {
    id: 'ko_a1_v073', language: lang, level, category: 'questions',
    word: '누구', translation: 'who', partOfSpeech: 'pronoun',
    pronunciation: 'nu-gu',
    exampleSentence: '누구예요?', exampleTranslation: 'Who is it?',
  },
  {
    id: 'ko_a1_v074', language: lang, level, category: 'questions',
    word: '왜', translation: 'why', partOfSpeech: 'adverb',
    pronunciation: 'wae',
    exampleSentence: '왜 안 와요?', exampleTranslation: "Why aren't you coming?",
  },
  {
    id: 'ko_a1_v075', language: lang, level, category: 'questions',
    word: '어떻게', translation: 'how', partOfSpeech: 'adverb',
    pronunciation: 'eo-tteo-ke',
    exampleSentence: '어떻게 가요?', exampleTranslation: 'How do you get there?',
  },
  {
    id: 'ko_a1_v076', language: lang, level, category: 'questions',
    word: '얼마', translation: 'how much', partOfSpeech: 'adverb',
    pronunciation: 'eol-ma',
    exampleSentence: '이거 얼마예요?', exampleTranslation: 'How much is this?',
  },
];

// ── Colors ──────────────────────────────────────────────────────

const colors: VocabWord[] = [
  {
    id: 'ko_a1_v080', language: lang, level, category: 'colors',
    word: '빨간색', translation: 'red', partOfSpeech: 'noun',
    pronunciation: 'ppal-gan-saek',
    exampleSentence: '빨간색 사과가 맛있어요.', exampleTranslation: 'Red apples are delicious.',
  },
  {
    id: 'ko_a1_v081', language: lang, level, category: 'colors',
    word: '파란색', translation: 'blue', partOfSpeech: 'noun',
    pronunciation: 'pa-ran-saek',
    exampleSentence: '하늘이 파란색이에요.', exampleTranslation: 'The sky is blue.',
  },
  {
    id: 'ko_a1_v082', language: lang, level, category: 'colors',
    word: '노란색', translation: 'yellow', partOfSpeech: 'noun',
    pronunciation: 'no-ran-saek',
    exampleSentence: '바나나는 노란색이에요.', exampleTranslation: 'Bananas are yellow.',
  },
  {
    id: 'ko_a1_v083', language: lang, level, category: 'colors',
    word: '초록색', translation: 'green', partOfSpeech: 'noun',
    pronunciation: 'cho-rok-saek',
    exampleSentence: '나무는 초록색이에요.', exampleTranslation: 'Trees are green.',
  },
  {
    id: 'ko_a1_v084', language: lang, level, category: 'colors',
    word: '하얀색', translation: 'white', partOfSpeech: 'noun',
    pronunciation: 'ha-yan-saek',
    exampleSentence: '눈은 하얀색이에요.', exampleTranslation: 'Snow is white.',
  },
  {
    id: 'ko_a1_v085', language: lang, level, category: 'colors',
    word: '검은색', translation: 'black', partOfSpeech: 'noun',
    pronunciation: 'geo-meun-saek',
    exampleSentence: '검은색 고양이가 있어요.', exampleTranslation: 'There is a black cat.',
  },
  {
    id: 'ko_a1_v086', language: lang, level, category: 'colors',
    word: '주황색', translation: 'orange', partOfSpeech: 'noun',
    pronunciation: 'ju-hwang-saek',
    exampleSentence: '주황색 꽃이 예뻐요.', exampleTranslation: 'Orange flowers are pretty.',
  },
  {
    id: 'ko_a1_v087', language: lang, level, category: 'colors',
    word: '분홍색', translation: 'pink', partOfSpeech: 'noun',
    pronunciation: 'bun-hong-saek',
    exampleSentence: '분홍색 원피스를 입었어요.', exampleTranslation: 'I wore a pink dress.',
  },
];

// ── Body ────────────────────────────────────────────────────────

const body: VocabWord[] = [
  {
    id: 'ko_a1_v090', language: lang, level, category: 'body',
    word: '머리', translation: 'head', partOfSpeech: 'noun',
    pronunciation: 'meo-ri',
    exampleSentence: '머리가 아파요.', exampleTranslation: 'My head hurts.',
  },
  {
    id: 'ko_a1_v091', language: lang, level, category: 'body',
    word: '눈', translation: 'eye', partOfSpeech: 'noun',
    pronunciation: 'nun',
    exampleSentence: '눈이 커요.', exampleTranslation: 'The eyes are big.',
  },
  {
    id: 'ko_a1_v092', language: lang, level, category: 'body',
    word: '코', translation: 'nose', partOfSpeech: 'noun',
    pronunciation: 'ko',
    exampleSentence: '코가 높아요.', exampleTranslation: 'The nose is tall (high bridge).',
  },
  {
    id: 'ko_a1_v093', language: lang, level, category: 'body',
    word: '입', translation: 'mouth', partOfSpeech: 'noun',
    pronunciation: 'ip',
    exampleSentence: '입을 크게 벌리세요.', exampleTranslation: 'Open your mouth wide.',
  },
  {
    id: 'ko_a1_v094', language: lang, level, category: 'body',
    word: '귀', translation: 'ear', partOfSpeech: 'noun',
    pronunciation: 'gwi',
    exampleSentence: '귀가 작아요.', exampleTranslation: 'The ears are small.',
  },
  {
    id: 'ko_a1_v095', language: lang, level, category: 'body',
    word: '손', translation: 'hand', partOfSpeech: 'noun',
    pronunciation: 'son',
    exampleSentence: '손을 씻으세요.', exampleTranslation: 'Please wash your hands.',
  },
  {
    id: 'ko_a1_v096', language: lang, level, category: 'body',
    word: '발', translation: 'foot', partOfSpeech: 'noun',
    pronunciation: 'bal',
    exampleSentence: '발이 아파요.', exampleTranslation: 'My foot hurts.',
  },
  {
    id: 'ko_a1_v097', language: lang, level, category: 'body',
    word: '배', translation: 'stomach / belly', partOfSpeech: 'noun',
    pronunciation: 'bae',
    exampleSentence: '배가 고파요.', exampleTranslation: "I'm hungry. (Stomach is empty.)",
  },
];

// ── Weather ─────────────────────────────────────────────────────

const weather: VocabWord[] = [
  {
    id: 'ko_a1_v100', language: lang, level, category: 'weather',
    word: '날씨', translation: 'weather', partOfSpeech: 'noun',
    pronunciation: 'nal-ssi',
    exampleSentence: '오늘 날씨가 좋아요.', exampleTranslation: "Today's weather is nice.",
  },
  {
    id: 'ko_a1_v101', language: lang, level, category: 'weather',
    word: '비', translation: 'rain', partOfSpeech: 'noun',
    pronunciation: 'bi',
    exampleSentence: '비가 와요.', exampleTranslation: "It's raining.",
  },
  {
    id: 'ko_a1_v102', language: lang, level, category: 'weather',
    word: '눈', translation: 'snow', partOfSpeech: 'noun',
    pronunciation: 'nun',
    exampleSentence: '눈이 와요.', exampleTranslation: "It's snowing.",
  },
  {
    id: 'ko_a1_v103', language: lang, level, category: 'weather',
    word: '바람', translation: 'wind', partOfSpeech: 'noun',
    pronunciation: 'ba-ram',
    exampleSentence: '바람이 불어요.', exampleTranslation: "It's windy.",
  },
  {
    id: 'ko_a1_v104', language: lang, level, category: 'weather',
    word: '덥다', translation: 'hot (weather)', partOfSpeech: 'adjective',
    pronunciation: 'deop-da',
    exampleSentence: '여름은 더워요.', exampleTranslation: 'Summer is hot.',
  },
  {
    id: 'ko_a1_v105', language: lang, level, category: 'weather',
    word: '춥다', translation: 'cold (weather)', partOfSpeech: 'adjective',
    pronunciation: 'chup-da',
    exampleSentence: '겨울은 추워요.', exampleTranslation: 'Winter is cold.',
  },
  {
    id: 'ko_a1_v106', language: lang, level, category: 'weather',
    word: '구름', translation: 'cloud', partOfSpeech: 'noun',
    pronunciation: 'gu-reum',
    exampleSentence: '구름이 많아요.', exampleTranslation: 'There are many clouds.',
  },
];

// ── Clothing ────────────────────────────────────────────────────

const clothing: VocabWord[] = [
  {
    id: 'ko_a1_v110', language: lang, level, category: 'clothing',
    word: '옷', translation: 'clothes', partOfSpeech: 'noun',
    pronunciation: 'ot',
    exampleSentence: '옷을 입으세요.', exampleTranslation: 'Please put on clothes.',
  },
  {
    id: 'ko_a1_v111', language: lang, level, category: 'clothing',
    word: '바지', translation: 'pants / trousers', partOfSpeech: 'noun',
    pronunciation: 'ba-ji',
    exampleSentence: '바지가 길어요.', exampleTranslation: 'The pants are long.',
  },
  {
    id: 'ko_a1_v112', language: lang, level, category: 'clothing',
    word: '치마', translation: 'skirt', partOfSpeech: 'noun',
    pronunciation: 'chi-ma',
    exampleSentence: '치마를 입었어요.', exampleTranslation: 'I wore a skirt.',
  },
  {
    id: 'ko_a1_v113', language: lang, level, category: 'clothing',
    word: '신발', translation: 'shoes', partOfSpeech: 'noun',
    pronunciation: 'sin-bal',
    exampleSentence: '신발을 신으세요.', exampleTranslation: 'Please put on shoes.',
  },
  {
    id: 'ko_a1_v114', language: lang, level, category: 'clothing',
    word: '모자', translation: 'hat / cap', partOfSpeech: 'noun',
    pronunciation: 'mo-ja',
    exampleSentence: '모자를 쓰세요.', exampleTranslation: 'Please wear a hat.',
  },
  {
    id: 'ko_a1_v115', language: lang, level, category: 'clothing',
    word: '양말', translation: 'socks', partOfSpeech: 'noun',
    pronunciation: 'yang-mal',
    exampleSentence: '양말이 하얀색이에요.', exampleTranslation: 'The socks are white.',
  },
];

// ── Export ───────────────────────────────────────────────────────

export const KOREAN_A1_VOCAB: VocabWord[] = [
  ...greetings,
  ...numbers,
  ...family,
  ...food,
  ...verbs,
  ...adjectives,
  ...places,
  ...questions,
  ...colors,
  ...body,
  ...weather,
  ...clothing,
];

export function getVocabByCategory(category: string): VocabWord[] {
  return KOREAN_A1_VOCAB.filter((w) => w.category === category);
}

export function getVocabCategories(): string[] {
  return [...new Set(KOREAN_A1_VOCAB.map((w) => w.category))];
}
