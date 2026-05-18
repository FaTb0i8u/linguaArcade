/**
 * Chinese (Mandarin) A1 / HSK 1 Vocabulary
 *
 * Organised by thematic category, matching CEFR A1 / HSK 1 expectations.
 * Each word includes part of speech, pinyin with tone marks,
 * an example sentence in simplified Chinese, and its English translation.
 *
 * To add more words, simply append to the relevant category array
 * or add a new category to CHINESE_A1_VOCAB.
 */

import type { VocabWord } from '../../../types';

const lang = 'zh' as const;
const level = 'A1' as const;

// ── Greetings & Common Phrases ──────────────────────────────────

const greetings: VocabWord[] = [
  {
    id: 'zh_a1_v001', language: lang, level, category: 'greetings',
    word: '你好', translation: 'hello', partOfSpeech: 'interjection',
    pronunciation: 'nǐ hǎo',
    exampleSentence: '你好，我是李明。', exampleTranslation: 'Hello, I am Li Ming.',
  },
  {
    id: 'zh_a1_v002', language: lang, level, category: 'greetings',
    word: '謝謝', translation: 'thank you', partOfSpeech: 'interjection',
    pronunciation: 'xiè xie',
    exampleSentence: '謝謝你的幫助。', exampleTranslation: 'Thank you for your help.',
  },
  {
    id: 'zh_a1_v003', language: lang, level, category: 'greetings',
    word: '對不起', translation: 'sorry', partOfSpeech: 'interjection',
    pronunciation: 'duì bu qǐ',
    exampleSentence: '對不起，我遲到了。', exampleTranslation: 'Sorry, I am late.',
  },
  {
    id: 'zh_a1_v004', language: lang, level, category: 'greetings',
    word: '再見', translation: 'goodbye', partOfSpeech: 'interjection',
    pronunciation: 'zài jiàn',
    exampleSentence: '再見，明天見！', exampleTranslation: 'Goodbye, see you tomorrow!',
  },
  {
    id: 'zh_a1_v005', language: lang, level, category: 'greetings',
    word: '請', translation: 'please', partOfSpeech: 'adverb',
    pronunciation: 'qǐng',
    exampleSentence: '請坐。', exampleTranslation: 'Please sit down.',
  },
  {
    id: 'zh_a1_v006', language: lang, level, category: 'greetings',
    word: '不客氣', translation: "you're welcome", partOfSpeech: 'interjection',
    pronunciation: 'bú kè qi',
    exampleSentence: '——謝謝。——不客氣。', exampleTranslation: '—Thank you. —You\'re welcome.',
  },
  {
    id: 'zh_a1_v007', language: lang, level, category: 'greetings',
    word: '你好嗎', translation: 'how are you', partOfSpeech: 'interjection',
    pronunciation: 'nǐ hǎo ma',
    exampleSentence: '你好嗎？我很好。', exampleTranslation: 'How are you? I am fine.',
  },
  {
    id: 'zh_a1_v008', language: lang, level, category: 'greetings',
    word: '早上好', translation: 'good morning', partOfSpeech: 'interjection',
    pronunciation: 'zǎo shang hǎo',
    exampleSentence: '早上好，老師！', exampleTranslation: 'Good morning, teacher!',
  },
  {
    id: 'zh_a1_v009', language: lang, level, category: 'greetings',
    word: '晚上好', translation: 'good evening', partOfSpeech: 'interjection',
    pronunciation: 'wǎn shang hǎo',
    exampleSentence: '晚上好，歡迎來我家。', exampleTranslation: 'Good evening, welcome to my home.',
  },
];

// ── Numbers ─────────────────────────────────────────────────────

const numbers: VocabWord[] = [
  {
    id: 'zh_a1_v010', language: lang, level, category: 'numbers',
    word: '一', translation: 'one', partOfSpeech: 'numeral',
    pronunciation: 'yī',
    exampleSentence: '我有一個蘋果。', exampleTranslation: 'I have one apple.',
  },
  {
    id: 'zh_a1_v011', language: lang, level, category: 'numbers',
    word: '二', translation: 'two', partOfSpeech: 'numeral',
    pronunciation: 'èr',
    exampleSentence: '我有二十塊錢。', exampleTranslation: 'I have twenty yuan.',
  },
  {
    id: 'zh_a1_v012', language: lang, level, category: 'numbers',
    word: '三', translation: 'three', partOfSpeech: 'numeral',
    pronunciation: 'sān',
    exampleSentence: '桌子上有三本書。', exampleTranslation: 'There are three books on the table.',
  },
  {
    id: 'zh_a1_v013', language: lang, level, category: 'numbers',
    word: '四', translation: 'four', partOfSpeech: 'numeral',
    pronunciation: 'sì',
    exampleSentence: '一年有四個季節。', exampleTranslation: 'There are four seasons in a year.',
  },
  {
    id: 'zh_a1_v014', language: lang, level, category: 'numbers',
    word: '五', translation: 'five', partOfSpeech: 'numeral',
    pronunciation: 'wǔ',
    exampleSentence: '我每天工作五個小時。', exampleTranslation: 'I work five hours every day.',
  },
  {
    id: 'zh_a1_v015', language: lang, level, category: 'numbers',
    word: '六', translation: 'six', partOfSpeech: 'numeral',
    pronunciation: 'liù',
    exampleSentence: '他六歲了。', exampleTranslation: 'He is six years old.',
  },
  {
    id: 'zh_a1_v016', language: lang, level, category: 'numbers',
    word: '七', translation: 'seven', partOfSpeech: 'numeral',
    pronunciation: 'qī',
    exampleSentence: '一個星期有七天。', exampleTranslation: 'There are seven days in a week.',
  },
  {
    id: 'zh_a1_v017', language: lang, level, category: 'numbers',
    word: '十', translation: 'ten', partOfSpeech: 'numeral',
    pronunciation: 'shí',
    exampleSentence: '這個蘋果十塊錢。', exampleTranslation: 'This apple costs ten yuan.',
  },
  {
    id: 'zh_a1_v018', language: lang, level, category: 'numbers',
    word: '百', translation: 'hundred', partOfSpeech: 'numeral',
    pronunciation: 'bǎi',
    exampleSentence: '這本書一百塊。', exampleTranslation: 'This book costs one hundred yuan.',
  },
];

// ── Family ──────────────────────────────────────────────────────

const family: VocabWord[] = [
  {
    id: 'zh_a1_v019', language: lang, level, category: 'family',
    word: '爸爸', translation: 'father / dad', partOfSpeech: 'noun',
    pronunciation: 'bà ba',
    exampleSentence: '我爸爸是老師。', exampleTranslation: 'My father is a teacher.',
  },
  {
    id: 'zh_a1_v020', language: lang, level, category: 'family',
    word: '媽媽', translation: 'mother / mom', partOfSpeech: 'noun',
    pronunciation: 'mā ma',
    exampleSentence: '我媽媽做飯很好吃。', exampleTranslation: 'My mother cooks delicious food.',
  },
  {
    id: 'zh_a1_v021', language: lang, level, category: 'family',
    word: '哥哥', translation: 'older brother', partOfSpeech: 'noun',
    pronunciation: 'gē ge',
    exampleSentence: '我哥哥比我高。', exampleTranslation: 'My older brother is taller than me.',
  },
  {
    id: 'zh_a1_v022', language: lang, level, category: 'family',
    word: '姐姐', translation: 'older sister', partOfSpeech: 'noun',
    pronunciation: 'jiě jie',
    exampleSentence: '我姐姐在北京工作。', exampleTranslation: 'My older sister works in Beijing.',
  },
  {
    id: 'zh_a1_v023', language: lang, level, category: 'family',
    word: '弟弟', translation: 'younger brother', partOfSpeech: 'noun',
    pronunciation: 'dì di',
    exampleSentence: '我弟弟今年十歲。', exampleTranslation: 'My younger brother is ten years old this year.',
  },
  {
    id: 'zh_a1_v024', language: lang, level, category: 'family',
    word: '妹妹', translation: 'younger sister', partOfSpeech: 'noun',
    pronunciation: 'mèi mei',
    exampleSentence: '我妹妹喜歡畫畫。', exampleTranslation: 'My younger sister likes to draw.',
  },
  {
    id: 'zh_a1_v025', language: lang, level, category: 'family',
    word: '兒子', translation: 'son', partOfSpeech: 'noun',
    pronunciation: 'ér zi',
    exampleSentence: '他的兒子很聰明。', exampleTranslation: 'His son is very smart.',
  },
  {
    id: 'zh_a1_v026', language: lang, level, category: 'family',
    word: '女兒', translation: 'daughter', partOfSpeech: 'noun',
    pronunciation: 'nǚ ér',
    exampleSentence: '她的女兒喜歡唱歌。', exampleTranslation: 'Her daughter likes to sing.',
  },
];

// ── Food & Drinks ───────────────────────────────────────────────

const food: VocabWord[] = [
  {
    id: 'zh_a1_v027', language: lang, level, category: 'food',
    word: '米飯', translation: 'rice (cooked)', partOfSpeech: 'noun',
    pronunciation: 'mǐ fàn',
    exampleSentence: '我每天吃米飯。', exampleTranslation: 'I eat rice every day.',
  },
  {
    id: 'zh_a1_v028', language: lang, level, category: 'food',
    word: '麵條', translation: 'noodles', partOfSpeech: 'noun',
    pronunciation: 'miàn tiáo',
    exampleSentence: '我想吃一碗麵條。', exampleTranslation: 'I want to eat a bowl of noodles.',
  },
  {
    id: 'zh_a1_v029', language: lang, level, category: 'food',
    word: '水', translation: 'water', partOfSpeech: 'noun',
    pronunciation: 'shuǐ',
    exampleSentence: '請給我一杯水。', exampleTranslation: 'Please give me a glass of water.',
  },
  {
    id: 'zh_a1_v030', language: lang, level, category: 'food',
    word: '茶', translation: 'tea', partOfSpeech: 'noun',
    pronunciation: 'chá',
    exampleSentence: '中國人喜歡喝茶。', exampleTranslation: 'Chinese people like to drink tea.',
  },
  {
    id: 'zh_a1_v031', language: lang, level, category: 'food',
    word: '咖啡', translation: 'coffee', partOfSpeech: 'noun',
    pronunciation: 'kā fēi',
    exampleSentence: '我早上喝一杯咖啡。', exampleTranslation: 'I drink a cup of coffee in the morning.',
  },
  {
    id: 'zh_a1_v032', language: lang, level, category: 'food',
    word: '蘋果', translation: 'apple', partOfSpeech: 'noun',
    pronunciation: 'píng guǒ',
    exampleSentence: '這個蘋果很甜。', exampleTranslation: 'This apple is very sweet.',
  },
  {
    id: 'zh_a1_v033', language: lang, level, category: 'food',
    word: '雞蛋', translation: 'egg', partOfSpeech: 'noun',
    pronunciation: 'jī dàn',
    exampleSentence: '我早上吃了兩個雞蛋。', exampleTranslation: 'I ate two eggs this morning.',
  },
  {
    id: 'zh_a1_v034', language: lang, level, category: 'food',
    word: '菜', translation: 'vegetable / dish', partOfSpeech: 'noun',
    pronunciation: 'cài',
    exampleSentence: '這個菜很好吃。', exampleTranslation: 'This dish is very delicious.',
  },
  {
    id: 'zh_a1_v035', language: lang, level, category: 'food',
    word: '肉', translation: 'meat', partOfSpeech: 'noun',
    pronunciation: 'ròu',
    exampleSentence: '我不吃肉。', exampleTranslation: 'I don\'t eat meat.',
  },
  {
    id: 'zh_a1_v036', language: lang, level, category: 'food',
    word: '牛奶', translation: 'milk', partOfSpeech: 'noun',
    pronunciation: 'niú nǎi',
    exampleSentence: '孩子們喜歡喝牛奶。', exampleTranslation: 'Children like to drink milk.',
  },
];

// ── Verbs ───────────────────────────────────────────────────────

const verbs: VocabWord[] = [
  {
    id: 'zh_a1_v037', language: lang, level, category: 'verbs',
    word: '吃', translation: 'to eat', partOfSpeech: 'verb',
    pronunciation: 'chī',
    exampleSentence: '你想吃什麼？', exampleTranslation: 'What do you want to eat?',
  },
  {
    id: 'zh_a1_v038', language: lang, level, category: 'verbs',
    word: '喝', translation: 'to drink', partOfSpeech: 'verb',
    pronunciation: 'hē',
    exampleSentence: '你喝茶還是咖啡？', exampleTranslation: 'Do you drink tea or coffee?',
  },
  {
    id: 'zh_a1_v039', language: lang, level, category: 'verbs',
    word: '看', translation: 'to look / to watch', partOfSpeech: 'verb',
    pronunciation: 'kàn',
    exampleSentence: '我們一起看電影吧。', exampleTranslation: 'Let\'s watch a movie together.',
  },
  {
    id: 'zh_a1_v040', language: lang, level, category: 'verbs',
    word: '聽', translation: 'to listen', partOfSpeech: 'verb',
    pronunciation: 'tīng',
    exampleSentence: '我喜歡聽音樂。', exampleTranslation: 'I like to listen to music.',
  },
  {
    id: 'zh_a1_v041', language: lang, level, category: 'verbs',
    word: '說', translation: 'to speak / to say', partOfSpeech: 'verb',
    pronunciation: 'shuō',
    exampleSentence: '你會說中文嗎？', exampleTranslation: 'Can you speak Chinese?',
  },
  {
    id: 'zh_a1_v042', language: lang, level, category: 'verbs',
    word: '寫', translation: 'to write', partOfSpeech: 'verb',
    pronunciation: 'xiě',
    exampleSentence: '請寫你的名字。', exampleTranslation: 'Please write your name.',
  },
  {
    id: 'zh_a1_v043', language: lang, level, category: 'verbs',
    word: '讀', translation: 'to read', partOfSpeech: 'verb',
    pronunciation: 'dú',
    exampleSentence: '我每天讀書。', exampleTranslation: 'I read every day.',
  },
  {
    id: 'zh_a1_v044', language: lang, level, category: 'verbs',
    word: '去', translation: 'to go', partOfSpeech: 'verb',
    pronunciation: 'qù',
    exampleSentence: '你去哪裡？', exampleTranslation: 'Where are you going?',
  },
  {
    id: 'zh_a1_v045', language: lang, level, category: 'verbs',
    word: '來', translation: 'to come', partOfSpeech: 'verb',
    pronunciation: 'lái',
    exampleSentence: '請來我家吃飯。', exampleTranslation: 'Please come to my home for dinner.',
  },
  {
    id: 'zh_a1_v046', language: lang, level, category: 'verbs',
    word: '做', translation: 'to do / to make', partOfSpeech: 'verb',
    pronunciation: 'zuò',
    exampleSentence: '你在做什麼？', exampleTranslation: 'What are you doing?',
  },
];

// ── Adjectives ──────────────────────────────────────────────────

const adjectives: VocabWord[] = [
  {
    id: 'zh_a1_v047', language: lang, level, category: 'adjectives',
    word: '大', translation: 'big / large', partOfSpeech: 'adjective',
    pronunciation: 'dà',
    exampleSentence: '這個房間很大。', exampleTranslation: 'This room is very big.',
  },
  {
    id: 'zh_a1_v048', language: lang, level, category: 'adjectives',
    word: '小', translation: 'small / little', partOfSpeech: 'adjective',
    pronunciation: 'xiǎo',
    exampleSentence: '我有一隻小貓。', exampleTranslation: 'I have a small cat.',
  },
  {
    id: 'zh_a1_v049', language: lang, level, category: 'adjectives',
    word: '好', translation: 'good / fine', partOfSpeech: 'adjective',
    pronunciation: 'hǎo',
    exampleSentence: '今天天氣很好。', exampleTranslation: 'The weather is very good today.',
  },
  {
    id: 'zh_a1_v050', language: lang, level, category: 'adjectives',
    word: '多', translation: 'many / much', partOfSpeech: 'adjective',
    pronunciation: 'duō',
    exampleSentence: '這裡人很多。', exampleTranslation: 'There are many people here.',
  },
  {
    id: 'zh_a1_v051', language: lang, level, category: 'adjectives',
    word: '少', translation: 'few / little', partOfSpeech: 'adjective',
    pronunciation: 'shǎo',
    exampleSentence: '我的錢很少。', exampleTranslation: 'I have very little money.',
  },
  {
    id: 'zh_a1_v052', language: lang, level, category: 'adjectives',
    word: '熱', translation: 'hot', partOfSpeech: 'adjective',
    pronunciation: 'rè',
    exampleSentence: '今天很熱。', exampleTranslation: 'Today is very hot.',
  },
  {
    id: 'zh_a1_v053', language: lang, level, category: 'adjectives',
    word: '冷', translation: 'cold', partOfSpeech: 'adjective',
    pronunciation: 'lěng',
    exampleSentence: '冬天很冷。', exampleTranslation: 'Winter is very cold.',
  },
  {
    id: 'zh_a1_v054', language: lang, level, category: 'adjectives',
    word: '高', translation: 'tall / high', partOfSpeech: 'adjective',
    pronunciation: 'gāo',
    exampleSentence: '他很高。', exampleTranslation: 'He is very tall.',
  },
];

// ── Places ──────────────────────────────────────────────────────

const places: VocabWord[] = [
  {
    id: 'zh_a1_v055', language: lang, level, category: 'places',
    word: '學校', translation: 'school', partOfSpeech: 'noun',
    pronunciation: 'xué xiào',
    exampleSentence: '我每天去學校。', exampleTranslation: 'I go to school every day.',
  },
  {
    id: 'zh_a1_v056', language: lang, level, category: 'places',
    word: '醫院', translation: 'hospital', partOfSpeech: 'noun',
    pronunciation: 'yī yuàn',
    exampleSentence: '他在醫院工作。', exampleTranslation: 'He works at the hospital.',
  },
  {
    id: 'zh_a1_v057', language: lang, level, category: 'places',
    word: '商店', translation: 'shop / store', partOfSpeech: 'noun',
    pronunciation: 'shāng diàn',
    exampleSentence: '我去商店買東西。', exampleTranslation: 'I go to the store to buy things.',
  },
  {
    id: 'zh_a1_v058', language: lang, level, category: 'places',
    word: '餐廳', translation: 'restaurant', partOfSpeech: 'noun',
    pronunciation: 'cān tīng',
    exampleSentence: '我們去餐廳吃飯吧。', exampleTranslation: 'Let\'s go to the restaurant to eat.',
  },
  {
    id: 'zh_a1_v059', language: lang, level, category: 'places',
    word: '家', translation: 'home / family', partOfSpeech: 'noun',
    pronunciation: 'jiā',
    exampleSentence: '我想回家。', exampleTranslation: 'I want to go home.',
  },
  {
    id: 'zh_a1_v060', language: lang, level, category: 'places',
    word: '公司', translation: 'company', partOfSpeech: 'noun',
    pronunciation: 'gōng sī',
    exampleSentence: '他在一家大公司工作。', exampleTranslation: 'He works at a big company.',
  },
  {
    id: 'zh_a1_v061', language: lang, level, category: 'places',
    word: '銀行', translation: 'bank', partOfSpeech: 'noun',
    pronunciation: 'yín háng',
    exampleSentence: '我去銀行取錢。', exampleTranslation: 'I go to the bank to withdraw money.',
  },
  {
    id: 'zh_a1_v062', language: lang, level, category: 'places',
    word: '機場', translation: 'airport', partOfSpeech: 'noun',
    pronunciation: 'jī chǎng',
    exampleSentence: '請送我去機場。', exampleTranslation: 'Please take me to the airport.',
  },
];

// ── Time ────────────────────────────────────────────────────────

const time: VocabWord[] = [
  {
    id: 'zh_a1_v063', language: lang, level, category: 'time',
    word: '今天', translation: 'today', partOfSpeech: 'noun',
    pronunciation: 'jīn tiān',
    exampleSentence: '今天是星期一。', exampleTranslation: 'Today is Monday.',
  },
  {
    id: 'zh_a1_v064', language: lang, level, category: 'time',
    word: '明天', translation: 'tomorrow', partOfSpeech: 'noun',
    pronunciation: 'míng tiān',
    exampleSentence: '明天你有空嗎？', exampleTranslation: 'Are you free tomorrow?',
  },
  {
    id: 'zh_a1_v065', language: lang, level, category: 'time',
    word: '昨天', translation: 'yesterday', partOfSpeech: 'noun',
    pronunciation: 'zuó tiān',
    exampleSentence: '昨天我去了商店。', exampleTranslation: 'Yesterday I went to the store.',
  },
  {
    id: 'zh_a1_v066', language: lang, level, category: 'time',
    word: '現在', translation: 'now', partOfSpeech: 'adverb',
    pronunciation: 'xiàn zài',
    exampleSentence: '現在幾點了？', exampleTranslation: 'What time is it now?',
  },
  {
    id: 'zh_a1_v067', language: lang, level, category: 'time',
    word: '上午', translation: 'morning (a.m.)', partOfSpeech: 'noun',
    pronunciation: 'shàng wǔ',
    exampleSentence: '我上午有課。', exampleTranslation: 'I have class in the morning.',
  },
  {
    id: 'zh_a1_v068', language: lang, level, category: 'time',
    word: '下午', translation: 'afternoon (p.m.)', partOfSpeech: 'noun',
    pronunciation: 'xià wǔ',
    exampleSentence: '下午我們去公園。', exampleTranslation: 'In the afternoon we go to the park.',
  },
  {
    id: 'zh_a1_v069', language: lang, level, category: 'time',
    word: '小時', translation: 'hour', partOfSpeech: 'noun',
    pronunciation: 'xiǎo shí',
    exampleSentence: '我等了兩個小時。', exampleTranslation: 'I waited for two hours.',
  },
  {
    id: 'zh_a1_v070', language: lang, level, category: 'time',
    word: '分鐘', translation: 'minute', partOfSpeech: 'noun',
    pronunciation: 'fēn zhōng',
    exampleSentence: '再等五分鐘。', exampleTranslation: 'Wait five more minutes.',
  },
];

// ── Questions ───────────────────────────────────────────────────

const questions: VocabWord[] = [
  {
    id: 'zh_a1_v071', language: lang, level, category: 'questions',
    word: '什麼', translation: 'what', partOfSpeech: 'pronoun',
    pronunciation: 'shén me',
    exampleSentence: '你叫什麼名字？', exampleTranslation: 'What is your name?',
  },
  {
    id: 'zh_a1_v072', language: lang, level, category: 'questions',
    word: '誰', translation: 'who', partOfSpeech: 'pronoun',
    pronunciation: 'shéi',
    exampleSentence: '他是誰？', exampleTranslation: 'Who is he?',
  },
  {
    id: 'zh_a1_v073', language: lang, level, category: 'questions',
    word: '哪裡', translation: 'where', partOfSpeech: 'pronoun',
    pronunciation: 'nǎ lǐ',
    exampleSentence: '你住在哪裡？', exampleTranslation: 'Where do you live?',
  },
  {
    id: 'zh_a1_v074', language: lang, level, category: 'questions',
    word: '怎麼', translation: 'how', partOfSpeech: 'adverb',
    pronunciation: 'zěn me',
    exampleSentence: '這個字怎麼讀？', exampleTranslation: 'How do you read this character?',
  },
  {
    id: 'zh_a1_v075', language: lang, level, category: 'questions',
    word: '幾', translation: 'how many (small numbers)', partOfSpeech: 'pronoun',
    pronunciation: 'jǐ',
    exampleSentence: '你有幾個孩子？', exampleTranslation: 'How many children do you have?',
  },
  {
    id: 'zh_a1_v076', language: lang, level, category: 'questions',
    word: '多少', translation: 'how many / how much', partOfSpeech: 'pronoun',
    pronunciation: 'duō shǎo',
    exampleSentence: '這個多少錢？', exampleTranslation: 'How much does this cost?',
  },
  {
    id: 'zh_a1_v077', language: lang, level, category: 'questions',
    word: '為什麼', translation: 'why', partOfSpeech: 'adverb',
    pronunciation: 'wèi shén me',
    exampleSentence: '你為什麼學中文？', exampleTranslation: 'Why are you learning Chinese?',
  },
];

// ── Colors ──────────────────────────────────────────────────────

const colors: VocabWord[] = [
  {
    id: 'zh_a1_v078', language: lang, level, category: 'colors',
    word: '紅色', translation: 'red', partOfSpeech: 'noun',
    pronunciation: 'hóng sè',
    exampleSentence: '她喜歡紅色的衣服。', exampleTranslation: 'She likes red clothes.',
  },
  {
    id: 'zh_a1_v079', language: lang, level, category: 'colors',
    word: '藍色', translation: 'blue', partOfSpeech: 'noun',
    pronunciation: 'lán sè',
    exampleSentence: '天空是藍色的。', exampleTranslation: 'The sky is blue.',
  },
  {
    id: 'zh_a1_v080', language: lang, level, category: 'colors',
    word: '綠色', translation: 'green', partOfSpeech: 'noun',
    pronunciation: 'lǜ sè',
    exampleSentence: '草地是綠色的。', exampleTranslation: 'The grass is green.',
  },
  {
    id: 'zh_a1_v081', language: lang, level, category: 'colors',
    word: '白色', translation: 'white', partOfSpeech: 'noun',
    pronunciation: 'bái sè',
    exampleSentence: '雪是白色的。', exampleTranslation: 'Snow is white.',
  },
  {
    id: 'zh_a1_v082', language: lang, level, category: 'colors',
    word: '黑色', translation: 'black', partOfSpeech: 'noun',
    pronunciation: 'hēi sè',
    exampleSentence: '我有一隻黑色的貓。', exampleTranslation: 'I have a black cat.',
  },
  {
    id: 'zh_a1_v083', language: lang, level, category: 'colors',
    word: '黃色', translation: 'yellow', partOfSpeech: 'noun',
    pronunciation: 'huáng sè',
    exampleSentence: '香蕉是黃色的。', exampleTranslation: 'Bananas are yellow.',
  },
];

// ── Body ────────────────────────────────────────────────────────

const body: VocabWord[] = [
  {
    id: 'zh_a1_v084', language: lang, level, category: 'body',
    word: '頭', translation: 'head', partOfSpeech: 'noun',
    pronunciation: 'tóu',
    exampleSentence: '我頭疼。', exampleTranslation: 'I have a headache.',
  },
  {
    id: 'zh_a1_v085', language: lang, level, category: 'body',
    word: '手', translation: 'hand', partOfSpeech: 'noun',
    pronunciation: 'shǒu',
    exampleSentence: '請洗手。', exampleTranslation: 'Please wash your hands.',
  },
  {
    id: 'zh_a1_v086', language: lang, level, category: 'body',
    word: '腳', translation: 'foot', partOfSpeech: 'noun',
    pronunciation: 'jiǎo',
    exampleSentence: '我的腳很累。', exampleTranslation: 'My feet are very tired.',
  },
  {
    id: 'zh_a1_v087', language: lang, level, category: 'body',
    word: '眼睛', translation: 'eye', partOfSpeech: 'noun',
    pronunciation: 'yǎn jing',
    exampleSentence: '她的眼睛很大。', exampleTranslation: 'Her eyes are very big.',
  },
  {
    id: 'zh_a1_v088', language: lang, level, category: 'body',
    word: '嘴巴', translation: 'mouth', partOfSpeech: 'noun',
    pronunciation: 'zuǐ ba',
    exampleSentence: '請張開嘴巴。', exampleTranslation: 'Please open your mouth.',
  },
  {
    id: 'zh_a1_v089', language: lang, level, category: 'body',
    word: '耳朵', translation: 'ear', partOfSpeech: 'noun',
    pronunciation: 'ěr duo',
    exampleSentence: '他的耳朵很大。', exampleTranslation: 'His ears are very big.',
  },
];

// ── Weather ─────────────────────────────────────────────────────

const weather: VocabWord[] = [
  {
    id: 'zh_a1_v090', language: lang, level, category: 'weather',
    word: '天氣', translation: 'weather', partOfSpeech: 'noun',
    pronunciation: 'tiān qì',
    exampleSentence: '今天天氣怎麼樣？', exampleTranslation: 'How is the weather today?',
  },
  {
    id: 'zh_a1_v091', language: lang, level, category: 'weather',
    word: '下雨', translation: 'to rain', partOfSpeech: 'verb',
    pronunciation: 'xià yǔ',
    exampleSentence: '明天會下雨嗎？', exampleTranslation: 'Will it rain tomorrow?',
  },
  {
    id: 'zh_a1_v092', language: lang, level, category: 'weather',
    word: '晴天', translation: 'sunny day', partOfSpeech: 'noun',
    pronunciation: 'qíng tiān',
    exampleSentence: '今天是晴天。', exampleTranslation: 'Today is a sunny day.',
  },
  {
    id: 'zh_a1_v093', language: lang, level, category: 'weather',
    word: '風', translation: 'wind', partOfSpeech: 'noun',
    pronunciation: 'fēng',
    exampleSentence: '今天風很大。', exampleTranslation: 'The wind is very strong today.',
  },
  {
    id: 'zh_a1_v094', language: lang, level, category: 'weather',
    word: '雪', translation: 'snow', partOfSpeech: 'noun',
    pronunciation: 'xuě',
    exampleSentence: '北京冬天會下雪。', exampleTranslation: 'It snows in Beijing in winter.',
  },
];

// ── Export ───────────────────────────────────────────────────────

export const CHINESE_A1_VOCAB: VocabWord[] = [
  ...greetings,
  ...numbers,
  ...family,
  ...food,
  ...verbs,
  ...adjectives,
  ...places,
  ...time,
  ...questions,
  ...colors,
  ...body,
  ...weather,
];
