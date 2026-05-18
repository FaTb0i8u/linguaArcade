/**
 * Chinese (Mandarin) B1 / HSK 3-4 Vocabulary
 *
 * Organised by thematic category, matching CEFR B1 / HSK 3-4 expectations.
 * Each word includes part of speech, pinyin with tone marks,
 * an example sentence in simplified Chinese, and its English translation.
 *
 * Categories: education, technology, environment, media, professions,
 *             opinions, housing, culture.
 */

import type { VocabWord } from '../../../types';

const lang = 'zh' as const;
const level = 'B1' as const;

// ── Education ───────────────────────────────────────────────────

const education: VocabWord[] = [
  {
    id: 'zh_b1_v001', language: lang, level, category: 'education',
    word: '考試', translation: 'exam / test', partOfSpeech: 'noun',
    pronunciation: 'kǎo shì',
    exampleSentence: '明天有一場很重要的考試。', exampleTranslation: 'There is a very important exam tomorrow.',
  },
  {
    id: 'zh_b1_v002', language: lang, level, category: 'education',
    word: '成績', translation: 'grade / result', partOfSpeech: 'noun',
    pronunciation: 'chéng jì',
    exampleSentence: '他的成績越來越好了。', exampleTranslation: 'His grades are getting better and better.',
  },
  {
    id: 'zh_b1_v003', language: lang, level, category: 'education',
    word: '畢業', translation: 'to graduate', partOfSpeech: 'verb',
    pronunciation: 'bì yè',
    exampleSentence: '她去年大學畢業了。', exampleTranslation: 'She graduated from university last year.',
  },
  {
    id: 'zh_b1_v004', language: lang, level, category: 'education',
    word: '專業', translation: 'major / speciality', partOfSpeech: 'noun',
    pronunciation: 'zhuān yè',
    exampleSentence: '你大學學的什麼專業？', exampleTranslation: 'What was your major in university?',
  },
  {
    id: 'zh_b1_v005', language: lang, level, category: 'education',
    word: '作業', translation: 'homework / assignment', partOfSpeech: 'noun',
    pronunciation: 'zuò yè',
    exampleSentence: '老師佈置了很多作業。', exampleTranslation: 'The teacher assigned a lot of homework.',
  },
  {
    id: 'zh_b1_v006', language: lang, level, category: 'education',
    word: '課程', translation: 'course / curriculum', partOfSpeech: 'noun',
    pronunciation: 'kè chéng',
    exampleSentence: '這學期我選了五門課程。', exampleTranslation: 'I chose five courses this semester.',
  },
  {
    id: 'zh_b1_v007', language: lang, level, category: 'education',
    word: '獎學金', translation: 'scholarship', partOfSpeech: 'noun',
    pronunciation: 'jiǎng xué jīn',
    exampleSentence: '她獲得了全額獎學金。', exampleTranslation: 'She received a full scholarship.',
  },
  {
    id: 'zh_b1_v008', language: lang, level, category: 'education',
    word: '教育', translation: 'education', partOfSpeech: 'noun',
    pronunciation: 'jiào yù',
    exampleSentence: '教育對一個國家很重要。', exampleTranslation: 'Education is very important for a country.',
  },
];

// ── Technology ──────────────────────────────────────────────────

const technology: VocabWord[] = [
  {
    id: 'zh_b1_v009', language: lang, level, category: 'technology',
    word: '電腦', translation: 'computer', partOfSpeech: 'noun',
    pronunciation: 'diàn nǎo',
    exampleSentence: '我的電腦壞了，需要修理。', exampleTranslation: 'My computer is broken and needs repair.',
  },
  {
    id: 'zh_b1_v010', language: lang, level, category: 'technology',
    word: '網絡', translation: 'internet / network', partOfSpeech: 'noun',
    pronunciation: 'wǎng luò',
    exampleSentence: '這裡的網絡速度很慢。', exampleTranslation: 'The internet speed here is very slow.',
  },
  {
    id: 'zh_b1_v011', language: lang, level, category: 'technology',
    word: '軟件', translation: 'software', partOfSpeech: 'noun',
    pronunciation: 'ruǎn jiàn',
    exampleSentence: '你需要下載一個新軟件。', exampleTranslation: 'You need to download a new piece of software.',
  },
  {
    id: 'zh_b1_v012', language: lang, level, category: 'technology',
    word: '手機', translation: 'mobile phone', partOfSpeech: 'noun',
    pronunciation: 'shǒu jī',
    exampleSentence: '現在人人都離不開手機。', exampleTranslation: 'Nowadays nobody can live without a mobile phone.',
  },
  {
    id: 'zh_b1_v013', language: lang, level, category: 'technology',
    word: '密碼', translation: 'password', partOfSpeech: 'noun',
    pronunciation: 'mì mǎ',
    exampleSentence: '請輸入你的密碼。', exampleTranslation: 'Please enter your password.',
  },
  {
    id: 'zh_b1_v014', language: lang, level, category: 'technology',
    word: '下載', translation: 'to download', partOfSpeech: 'verb',
    pronunciation: 'xià zǎi',
    exampleSentence: '我下載了一個學中文的軟件。', exampleTranslation: 'I downloaded a Chinese-learning app.',
  },
  {
    id: 'zh_b1_v015', language: lang, level, category: 'technology',
    word: '網站', translation: 'website', partOfSpeech: 'noun',
    pronunciation: 'wǎng zhàn',
    exampleSentence: '這個網站的信息很有用。', exampleTranslation: 'The information on this website is very useful.',
  },
];

// ── Environment ─────────────────────────────────────────────────

const environment: VocabWord[] = [
  {
    id: 'zh_b1_v016', language: lang, level, category: 'environment',
    word: '環境', translation: 'environment', partOfSpeech: 'noun',
    pronunciation: 'huán jìng',
    exampleSentence: '我們應該保護環境。', exampleTranslation: 'We should protect the environment.',
  },
  {
    id: 'zh_b1_v017', language: lang, level, category: 'environment',
    word: '污染', translation: 'pollution / to pollute', partOfSpeech: 'noun',
    pronunciation: 'wū rǎn',
    exampleSentence: '空氣污染是一個嚴重的問題。', exampleTranslation: 'Air pollution is a serious problem.',
  },
  {
    id: 'zh_b1_v018', language: lang, level, category: 'environment',
    word: '垃圾', translation: 'rubbish / garbage', partOfSpeech: 'noun',
    pronunciation: 'lā jī',
    exampleSentence: '請不要在這裡扔垃圾。', exampleTranslation: 'Please don\'t throw rubbish here.',
  },
  {
    id: 'zh_b1_v019', language: lang, level, category: 'environment',
    word: '回收', translation: 'to recycle', partOfSpeech: 'verb',
    pronunciation: 'huí shōu',
    exampleSentence: '這些瓶子可以回收利用。', exampleTranslation: 'These bottles can be recycled.',
  },
  {
    id: 'zh_b1_v020', language: lang, level, category: 'environment',
    word: '自然', translation: 'nature / natural', partOfSpeech: 'noun',
    pronunciation: 'zì rán',
    exampleSentence: '大自然非常美麗。', exampleTranslation: 'Nature is very beautiful.',
  },
  {
    id: 'zh_b1_v021', language: lang, level, category: 'environment',
    word: '能源', translation: 'energy / energy resources', partOfSpeech: 'noun',
    pronunciation: 'néng yuán',
    exampleSentence: '我們需要發展新能源。', exampleTranslation: 'We need to develop new energy sources.',
  },
  {
    id: 'zh_b1_v022', language: lang, level, category: 'environment',
    word: '保護', translation: 'to protect / protection', partOfSpeech: 'verb',
    pronunciation: 'bǎo hù',
    exampleSentence: '保護環境是每個人的責任。', exampleTranslation: 'Protecting the environment is everyone\'s responsibility.',
  },
  {
    id: 'zh_b1_v023', language: lang, level, category: 'environment',
    word: '氣候', translation: 'climate', partOfSpeech: 'noun',
    pronunciation: 'qì hòu',
    exampleSentence: '氣候變化越來越嚴重了。', exampleTranslation: 'Climate change is becoming more and more serious.',
  },
];

// ── Media ───────────────────────────────────────────────────────

const media: VocabWord[] = [
  {
    id: 'zh_b1_v024', language: lang, level, category: 'media',
    word: '新聞', translation: 'news', partOfSpeech: 'noun',
    pronunciation: 'xīn wén',
    exampleSentence: '你今天看新聞了嗎？', exampleTranslation: 'Did you watch the news today?',
  },
  {
    id: 'zh_b1_v025', language: lang, level, category: 'media',
    word: '報紙', translation: 'newspaper', partOfSpeech: 'noun',
    pronunciation: 'bào zhǐ',
    exampleSentence: '現在很少有人看報紙了。', exampleTranslation: 'Very few people read newspapers nowadays.',
  },
  {
    id: 'zh_b1_v026', language: lang, level, category: 'media',
    word: '廣告', translation: 'advertisement', partOfSpeech: 'noun',
    pronunciation: 'guǎng gào',
    exampleSentence: '這個廣告做得很有意思。', exampleTranslation: 'This advertisement is made very interestingly.',
  },
  {
    id: 'zh_b1_v027', language: lang, level, category: 'media',
    word: '節目', translation: 'programme / show', partOfSpeech: 'noun',
    pronunciation: 'jié mù',
    exampleSentence: '這個電視節目很受歡迎。', exampleTranslation: 'This TV programme is very popular.',
  },
  {
    id: 'zh_b1_v028', language: lang, level, category: 'media',
    word: '記者', translation: 'journalist / reporter', partOfSpeech: 'noun',
    pronunciation: 'jì zhě',
    exampleSentence: '記者們正在採訪那位科學家。', exampleTranslation: 'Reporters are interviewing that scientist.',
  },
  {
    id: 'zh_b1_v029', language: lang, level, category: 'media',
    word: '雜誌', translation: 'magazine', partOfSpeech: 'noun',
    pronunciation: 'zá zhì',
    exampleSentence: '她喜歡看時尚雜誌。', exampleTranslation: 'She likes reading fashion magazines.',
  },
  {
    id: 'zh_b1_v030', language: lang, level, category: 'media',
    word: '社交媒體', translation: 'social media', partOfSpeech: 'noun',
    pronunciation: 'shè jiāo méi tǐ',
    exampleSentence: '社交媒體改變了人們的生活。', exampleTranslation: 'Social media has changed people\'s lives.',
  },
];

// ── Professions ─────────────────────────────────────────────────

const professions: VocabWord[] = [
  {
    id: 'zh_b1_v031', language: lang, level, category: 'professions',
    word: '律師', translation: 'lawyer', partOfSpeech: 'noun',
    pronunciation: 'lǜ shī',
    exampleSentence: '她的夢想是成為一名律師。', exampleTranslation: 'Her dream is to become a lawyer.',
  },
  {
    id: 'zh_b1_v032', language: lang, level, category: 'professions',
    word: '工程師', translation: 'engineer', partOfSpeech: 'noun',
    pronunciation: 'gōng chéng shī',
    exampleSentence: '他是一位軟件工程師。', exampleTranslation: 'He is a software engineer.',
  },
  {
    id: 'zh_b1_v033', language: lang, level, category: 'professions',
    word: '護士', translation: 'nurse', partOfSpeech: 'noun',
    pronunciation: 'hù shi',
    exampleSentence: '護士每天照顧很多病人。', exampleTranslation: 'Nurses take care of many patients every day.',
  },
  {
    id: 'zh_b1_v034', language: lang, level, category: 'professions',
    word: '廚師', translation: 'chef / cook', partOfSpeech: 'noun',
    pronunciation: 'chú shī',
    exampleSentence: '這位廚師做的菜特別好吃。', exampleTranslation: 'The dishes this chef makes are especially delicious.',
  },
  {
    id: 'zh_b1_v035', language: lang, level, category: 'professions',
    word: '警察', translation: 'police officer', partOfSpeech: 'noun',
    pronunciation: 'jǐng chá',
    exampleSentence: '警察幫助我們找到了錢包。', exampleTranslation: 'The police helped us find the wallet.',
  },
  {
    id: 'zh_b1_v036', language: lang, level, category: 'professions',
    word: '司機', translation: 'driver', partOfSpeech: 'noun',
    pronunciation: 'sī jī',
    exampleSentence: '出租車司機很熟悉這座城市。', exampleTranslation: 'The taxi driver is very familiar with this city.',
  },
  {
    id: 'zh_b1_v037', language: lang, level, category: 'professions',
    word: '會計', translation: 'accountant', partOfSpeech: 'noun',
    pronunciation: 'kuài jì',
    exampleSentence: '公司需要一位有經驗的會計。', exampleTranslation: 'The company needs an experienced accountant.',
  },
  {
    id: 'zh_b1_v038', language: lang, level, category: 'professions',
    word: '翻譯', translation: 'translator / to translate', partOfSpeech: 'noun',
    pronunciation: 'fān yì',
    exampleSentence: '他是一位中英翻譯。', exampleTranslation: 'He is a Chinese-English translator.',
  },
];

// ── Opinions ────────────────────────────────────────────────────

const opinions: VocabWord[] = [
  {
    id: 'zh_b1_v039', language: lang, level, category: 'opinions',
    word: '意見', translation: 'opinion / suggestion', partOfSpeech: 'noun',
    pronunciation: 'yì jiàn',
    exampleSentence: '你對這件事有什麼意見？', exampleTranslation: 'What\'s your opinion on this matter?',
  },
  {
    id: 'zh_b1_v040', language: lang, level, category: 'opinions',
    word: '同意', translation: 'to agree', partOfSpeech: 'verb',
    pronunciation: 'tóng yì',
    exampleSentence: '我完全同意你的看法。', exampleTranslation: 'I completely agree with your view.',
  },
  {
    id: 'zh_b1_v041', language: lang, level, category: 'opinions',
    word: '反對', translation: 'to oppose / to object', partOfSpeech: 'verb',
    pronunciation: 'fǎn duì',
    exampleSentence: '有些人反對這個計劃。', exampleTranslation: 'Some people oppose this plan.',
  },
  {
    id: 'zh_b1_v042', language: lang, level, category: 'opinions',
    word: '理由', translation: 'reason / grounds', partOfSpeech: 'noun',
    pronunciation: 'lǐ yóu',
    exampleSentence: '你有什麼理由反對？', exampleTranslation: 'What reason do you have to object?',
  },
  {
    id: 'zh_b1_v043', language: lang, level, category: 'opinions',
    word: '觀點', translation: 'viewpoint / standpoint', partOfSpeech: 'noun',
    pronunciation: 'guān diǎn',
    exampleSentence: '每個人都有自己的觀點。', exampleTranslation: 'Everyone has their own viewpoint.',
  },
  {
    id: 'zh_b1_v044', language: lang, level, category: 'opinions',
    word: '支持', translation: 'to support', partOfSpeech: 'verb',
    pronunciation: 'zhī chí',
    exampleSentence: '我們都支持這個決定。', exampleTranslation: 'We all support this decision.',
  },
  {
    id: 'zh_b1_v045', language: lang, level, category: 'opinions',
    word: '建議', translation: 'suggestion / to suggest', partOfSpeech: 'noun',
    pronunciation: 'jiàn yì',
    exampleSentence: '醫生建議他多運動。', exampleTranslation: 'The doctor suggested he exercise more.',
  },
];

// ── Housing ─────────────────────────────────────────────────────

const housing: VocabWord[] = [
  {
    id: 'zh_b1_v046', language: lang, level, category: 'housing',
    word: '房間', translation: 'room', partOfSpeech: 'noun',
    pronunciation: 'fáng jiān',
    exampleSentence: '這個房間又大又亮。', exampleTranslation: 'This room is big and bright.',
  },
  {
    id: 'zh_b1_v047', language: lang, level, category: 'housing',
    word: '客廳', translation: 'living room', partOfSpeech: 'noun',
    pronunciation: 'kè tīng',
    exampleSentence: '我們在客廳看電視。', exampleTranslation: 'We watch TV in the living room.',
  },
  {
    id: 'zh_b1_v048', language: lang, level, category: 'housing',
    word: '廚房', translation: 'kitchen', partOfSpeech: 'noun',
    pronunciation: 'chú fáng',
    exampleSentence: '媽媽在廚房做飯。', exampleTranslation: 'Mom is cooking in the kitchen.',
  },
  {
    id: 'zh_b1_v049', language: lang, level, category: 'housing',
    word: '衛生間', translation: 'bathroom / restroom', partOfSpeech: 'noun',
    pronunciation: 'wèi shēng jiān',
    exampleSentence: '衛生間在走廊的盡頭。', exampleTranslation: 'The bathroom is at the end of the corridor.',
  },
  {
    id: 'zh_b1_v050', language: lang, level, category: 'housing',
    word: '陽臺', translation: 'balcony', partOfSpeech: 'noun',
    pronunciation: 'yáng tái',
    exampleSentence: '陽臺上種了很多花。', exampleTranslation: 'Many flowers are planted on the balcony.',
  },
  {
    id: 'zh_b1_v051', language: lang, level, category: 'housing',
    word: '租房', translation: 'to rent a house/flat', partOfSpeech: 'verb',
    pronunciation: 'zū fáng',
    exampleSentence: '在北京租房很貴。', exampleTranslation: 'Renting in Beijing is very expensive.',
  },
  {
    id: 'zh_b1_v052', language: lang, level, category: 'housing',
    word: '搬家', translation: 'to move house', partOfSpeech: 'verb',
    pronunciation: 'bān jiā',
    exampleSentence: '我們下個月要搬家。', exampleTranslation: 'We\'re moving house next month.',
  },
  {
    id: 'zh_b1_v053', language: lang, level, category: 'housing',
    word: '裝修', translation: 'to renovate / decoration', partOfSpeech: 'verb',
    pronunciation: 'zhuāng xiū',
    exampleSentence: '他們正在裝修新房子。', exampleTranslation: 'They are renovating the new house.',
  },
];

// ── Culture ─────────────────────────────────────────────────────

const culture: VocabWord[] = [
  {
    id: 'zh_b1_v054', language: lang, level, category: 'culture',
    word: '文化', translation: 'culture', partOfSpeech: 'noun',
    pronunciation: 'wén huà',
    exampleSentence: '中國有悠久的文化歷史。', exampleTranslation: 'China has a long cultural history.',
  },
  {
    id: 'zh_b1_v055', language: lang, level, category: 'culture',
    word: '傳統', translation: 'tradition / traditional', partOfSpeech: 'noun',
    pronunciation: 'chuán tǒng',
    exampleSentence: '春節是中國最重要的傳統節日。', exampleTranslation: 'Spring Festival is China\'s most important traditional holiday.',
  },
  {
    id: 'zh_b1_v056', language: lang, level, category: 'culture',
    word: '節日', translation: 'festival / holiday', partOfSpeech: 'noun',
    pronunciation: 'jié rì',
    exampleSentence: '每個節日都有特別的活動。', exampleTranslation: 'Every festival has special activities.',
  },
  {
    id: 'zh_b1_v057', language: lang, level, category: 'culture',
    word: '博物館', translation: 'museum', partOfSpeech: 'noun',
    pronunciation: 'bó wù guǎn',
    exampleSentence: '故宮博物館非常值得參觀。', exampleTranslation: 'The Palace Museum is very worth visiting.',
  },
  {
    id: 'zh_b1_v058', language: lang, level, category: 'culture',
    word: '藝術', translation: 'art', partOfSpeech: 'noun',
    pronunciation: 'yì shù',
    exampleSentence: '她對中國藝術很感興趣。', exampleTranslation: 'She is very interested in Chinese art.',
  },
  {
    id: 'zh_b1_v059', language: lang, level, category: 'culture',
    word: '歷史', translation: 'history', partOfSpeech: 'noun',
    pronunciation: 'lì shǐ',
    exampleSentence: '學習歷史可以幫助我們理解現在。', exampleTranslation: 'Studying history can help us understand the present.',
  },
  {
    id: 'zh_b1_v060', language: lang, level, category: 'culture',
    word: '風俗', translation: 'custom / folk custom', partOfSpeech: 'noun',
    pronunciation: 'fēng sú',
    exampleSentence: '不同地方有不同的風俗習慣。', exampleTranslation: 'Different places have different customs.',
  },
];

// ── Export ───────────────────────────────────────────────────────

export const CHINESE_B1_VOCAB: VocabWord[] = [
  ...education,
  ...technology,
  ...environment,
  ...media,
  ...professions,
  ...opinions,
  ...housing,
  ...culture,
];
