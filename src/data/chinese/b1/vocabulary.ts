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
    word: '考试', translation: 'exam / test', partOfSpeech: 'noun',
    pronunciation: 'kǎo shì',
    exampleSentence: '明天有一场很重要的考试。', exampleTranslation: 'There is a very important exam tomorrow.',
  },
  {
    id: 'zh_b1_v002', language: lang, level, category: 'education',
    word: '成绩', translation: 'grade / result', partOfSpeech: 'noun',
    pronunciation: 'chéng jì',
    exampleSentence: '他的成绩越来越好了。', exampleTranslation: 'His grades are getting better and better.',
  },
  {
    id: 'zh_b1_v003', language: lang, level, category: 'education',
    word: '毕业', translation: 'to graduate', partOfSpeech: 'verb',
    pronunciation: 'bì yè',
    exampleSentence: '她去年大学毕业了。', exampleTranslation: 'She graduated from university last year.',
  },
  {
    id: 'zh_b1_v004', language: lang, level, category: 'education',
    word: '专业', translation: 'major / speciality', partOfSpeech: 'noun',
    pronunciation: 'zhuān yè',
    exampleSentence: '你大学学的什么专业？', exampleTranslation: 'What was your major in university?',
  },
  {
    id: 'zh_b1_v005', language: lang, level, category: 'education',
    word: '作业', translation: 'homework / assignment', partOfSpeech: 'noun',
    pronunciation: 'zuò yè',
    exampleSentence: '老师布置了很多作业。', exampleTranslation: 'The teacher assigned a lot of homework.',
  },
  {
    id: 'zh_b1_v006', language: lang, level, category: 'education',
    word: '课程', translation: 'course / curriculum', partOfSpeech: 'noun',
    pronunciation: 'kè chéng',
    exampleSentence: '这学期我选了五门课程。', exampleTranslation: 'I chose five courses this semester.',
  },
  {
    id: 'zh_b1_v007', language: lang, level, category: 'education',
    word: '奖学金', translation: 'scholarship', partOfSpeech: 'noun',
    pronunciation: 'jiǎng xué jīn',
    exampleSentence: '她获得了全额奖学金。', exampleTranslation: 'She received a full scholarship.',
  },
  {
    id: 'zh_b1_v008', language: lang, level, category: 'education',
    word: '教育', translation: 'education', partOfSpeech: 'noun',
    pronunciation: 'jiào yù',
    exampleSentence: '教育对一个国家很重要。', exampleTranslation: 'Education is very important for a country.',
  },
];

// ── Technology ──────────────────────────────────────────────────

const technology: VocabWord[] = [
  {
    id: 'zh_b1_v009', language: lang, level, category: 'technology',
    word: '电脑', translation: 'computer', partOfSpeech: 'noun',
    pronunciation: 'diàn nǎo',
    exampleSentence: '我的电脑坏了，需要修理。', exampleTranslation: 'My computer is broken and needs repair.',
  },
  {
    id: 'zh_b1_v010', language: lang, level, category: 'technology',
    word: '网络', translation: 'internet / network', partOfSpeech: 'noun',
    pronunciation: 'wǎng luò',
    exampleSentence: '这里的网络速度很慢。', exampleTranslation: 'The internet speed here is very slow.',
  },
  {
    id: 'zh_b1_v011', language: lang, level, category: 'technology',
    word: '软件', translation: 'software', partOfSpeech: 'noun',
    pronunciation: 'ruǎn jiàn',
    exampleSentence: '你需要下载一个新软件。', exampleTranslation: 'You need to download a new piece of software.',
  },
  {
    id: 'zh_b1_v012', language: lang, level, category: 'technology',
    word: '手机', translation: 'mobile phone', partOfSpeech: 'noun',
    pronunciation: 'shǒu jī',
    exampleSentence: '现在人人都离不开手机。', exampleTranslation: 'Nowadays nobody can live without a mobile phone.',
  },
  {
    id: 'zh_b1_v013', language: lang, level, category: 'technology',
    word: '密码', translation: 'password', partOfSpeech: 'noun',
    pronunciation: 'mì mǎ',
    exampleSentence: '请输入你的密码。', exampleTranslation: 'Please enter your password.',
  },
  {
    id: 'zh_b1_v014', language: lang, level, category: 'technology',
    word: '下载', translation: 'to download', partOfSpeech: 'verb',
    pronunciation: 'xià zǎi',
    exampleSentence: '我下载了一个学中文的软件。', exampleTranslation: 'I downloaded a Chinese-learning app.',
  },
  {
    id: 'zh_b1_v015', language: lang, level, category: 'technology',
    word: '网站', translation: 'website', partOfSpeech: 'noun',
    pronunciation: 'wǎng zhàn',
    exampleSentence: '这个网站的信息很有用。', exampleTranslation: 'The information on this website is very useful.',
  },
];

// ── Environment ─────────────────────────────────────────────────

const environment: VocabWord[] = [
  {
    id: 'zh_b1_v016', language: lang, level, category: 'environment',
    word: '环境', translation: 'environment', partOfSpeech: 'noun',
    pronunciation: 'huán jìng',
    exampleSentence: '我们应该保护环境。', exampleTranslation: 'We should protect the environment.',
  },
  {
    id: 'zh_b1_v017', language: lang, level, category: 'environment',
    word: '污染', translation: 'pollution / to pollute', partOfSpeech: 'noun',
    pronunciation: 'wū rǎn',
    exampleSentence: '空气污染是一个严重的问题。', exampleTranslation: 'Air pollution is a serious problem.',
  },
  {
    id: 'zh_b1_v018', language: lang, level, category: 'environment',
    word: '垃圾', translation: 'rubbish / garbage', partOfSpeech: 'noun',
    pronunciation: 'lā jī',
    exampleSentence: '请不要在这里扔垃圾。', exampleTranslation: 'Please don\'t throw rubbish here.',
  },
  {
    id: 'zh_b1_v019', language: lang, level, category: 'environment',
    word: '回收', translation: 'to recycle', partOfSpeech: 'verb',
    pronunciation: 'huí shōu',
    exampleSentence: '这些瓶子可以回收利用。', exampleTranslation: 'These bottles can be recycled.',
  },
  {
    id: 'zh_b1_v020', language: lang, level, category: 'environment',
    word: '自然', translation: 'nature / natural', partOfSpeech: 'noun',
    pronunciation: 'zì rán',
    exampleSentence: '大自然非常美丽。', exampleTranslation: 'Nature is very beautiful.',
  },
  {
    id: 'zh_b1_v021', language: lang, level, category: 'environment',
    word: '能源', translation: 'energy / energy resources', partOfSpeech: 'noun',
    pronunciation: 'néng yuán',
    exampleSentence: '我们需要发展新能源。', exampleTranslation: 'We need to develop new energy sources.',
  },
  {
    id: 'zh_b1_v022', language: lang, level, category: 'environment',
    word: '保护', translation: 'to protect / protection', partOfSpeech: 'verb',
    pronunciation: 'bǎo hù',
    exampleSentence: '保护环境是每个人的责任。', exampleTranslation: 'Protecting the environment is everyone\'s responsibility.',
  },
  {
    id: 'zh_b1_v023', language: lang, level, category: 'environment',
    word: '气候', translation: 'climate', partOfSpeech: 'noun',
    pronunciation: 'qì hòu',
    exampleSentence: '气候变化越来越严重了。', exampleTranslation: 'Climate change is becoming more and more serious.',
  },
];

// ── Media ───────────────────────────────────────────────────────

const media: VocabWord[] = [
  {
    id: 'zh_b1_v024', language: lang, level, category: 'media',
    word: '新闻', translation: 'news', partOfSpeech: 'noun',
    pronunciation: 'xīn wén',
    exampleSentence: '你今天看新闻了吗？', exampleTranslation: 'Did you watch the news today?',
  },
  {
    id: 'zh_b1_v025', language: lang, level, category: 'media',
    word: '报纸', translation: 'newspaper', partOfSpeech: 'noun',
    pronunciation: 'bào zhǐ',
    exampleSentence: '现在很少有人看报纸了。', exampleTranslation: 'Very few people read newspapers nowadays.',
  },
  {
    id: 'zh_b1_v026', language: lang, level, category: 'media',
    word: '广告', translation: 'advertisement', partOfSpeech: 'noun',
    pronunciation: 'guǎng gào',
    exampleSentence: '这个广告做得很有意思。', exampleTranslation: 'This advertisement is made very interestingly.',
  },
  {
    id: 'zh_b1_v027', language: lang, level, category: 'media',
    word: '节目', translation: 'programme / show', partOfSpeech: 'noun',
    pronunciation: 'jié mù',
    exampleSentence: '这个电视节目很受欢迎。', exampleTranslation: 'This TV programme is very popular.',
  },
  {
    id: 'zh_b1_v028', language: lang, level, category: 'media',
    word: '记者', translation: 'journalist / reporter', partOfSpeech: 'noun',
    pronunciation: 'jì zhě',
    exampleSentence: '记者们正在采访那位科学家。', exampleTranslation: 'Reporters are interviewing that scientist.',
  },
  {
    id: 'zh_b1_v029', language: lang, level, category: 'media',
    word: '杂志', translation: 'magazine', partOfSpeech: 'noun',
    pronunciation: 'zá zhì',
    exampleSentence: '她喜欢看时尚杂志。', exampleTranslation: 'She likes reading fashion magazines.',
  },
  {
    id: 'zh_b1_v030', language: lang, level, category: 'media',
    word: '社交媒体', translation: 'social media', partOfSpeech: 'noun',
    pronunciation: 'shè jiāo méi tǐ',
    exampleSentence: '社交媒体改变了人们的生活。', exampleTranslation: 'Social media has changed people\'s lives.',
  },
];

// ── Professions ─────────────────────────────────────────────────

const professions: VocabWord[] = [
  {
    id: 'zh_b1_v031', language: lang, level, category: 'professions',
    word: '律师', translation: 'lawyer', partOfSpeech: 'noun',
    pronunciation: 'lǜ shī',
    exampleSentence: '她的梦想是成为一名律师。', exampleTranslation: 'Her dream is to become a lawyer.',
  },
  {
    id: 'zh_b1_v032', language: lang, level, category: 'professions',
    word: '工程师', translation: 'engineer', partOfSpeech: 'noun',
    pronunciation: 'gōng chéng shī',
    exampleSentence: '他是一位软件工程师。', exampleTranslation: 'He is a software engineer.',
  },
  {
    id: 'zh_b1_v033', language: lang, level, category: 'professions',
    word: '护士', translation: 'nurse', partOfSpeech: 'noun',
    pronunciation: 'hù shi',
    exampleSentence: '护士每天照顾很多病人。', exampleTranslation: 'Nurses take care of many patients every day.',
  },
  {
    id: 'zh_b1_v034', language: lang, level, category: 'professions',
    word: '厨师', translation: 'chef / cook', partOfSpeech: 'noun',
    pronunciation: 'chú shī',
    exampleSentence: '这位厨师做的菜特别好吃。', exampleTranslation: 'The dishes this chef makes are especially delicious.',
  },
  {
    id: 'zh_b1_v035', language: lang, level, category: 'professions',
    word: '警察', translation: 'police officer', partOfSpeech: 'noun',
    pronunciation: 'jǐng chá',
    exampleSentence: '警察帮助我们找到了钱包。', exampleTranslation: 'The police helped us find the wallet.',
  },
  {
    id: 'zh_b1_v036', language: lang, level, category: 'professions',
    word: '司机', translation: 'driver', partOfSpeech: 'noun',
    pronunciation: 'sī jī',
    exampleSentence: '出租车司机很熟悉这座城市。', exampleTranslation: 'The taxi driver is very familiar with this city.',
  },
  {
    id: 'zh_b1_v037', language: lang, level, category: 'professions',
    word: '会计', translation: 'accountant', partOfSpeech: 'noun',
    pronunciation: 'kuài jì',
    exampleSentence: '公司需要一位有经验的会计。', exampleTranslation: 'The company needs an experienced accountant.',
  },
  {
    id: 'zh_b1_v038', language: lang, level, category: 'professions',
    word: '翻译', translation: 'translator / to translate', partOfSpeech: 'noun',
    pronunciation: 'fān yì',
    exampleSentence: '他是一位中英翻译。', exampleTranslation: 'He is a Chinese-English translator.',
  },
];

// ── Opinions ────────────────────────────────────────────────────

const opinions: VocabWord[] = [
  {
    id: 'zh_b1_v039', language: lang, level, category: 'opinions',
    word: '意见', translation: 'opinion / suggestion', partOfSpeech: 'noun',
    pronunciation: 'yì jiàn',
    exampleSentence: '你对这件事有什么意见？', exampleTranslation: 'What\'s your opinion on this matter?',
  },
  {
    id: 'zh_b1_v040', language: lang, level, category: 'opinions',
    word: '同意', translation: 'to agree', partOfSpeech: 'verb',
    pronunciation: 'tóng yì',
    exampleSentence: '我完全同意你的看法。', exampleTranslation: 'I completely agree with your view.',
  },
  {
    id: 'zh_b1_v041', language: lang, level, category: 'opinions',
    word: '反对', translation: 'to oppose / to object', partOfSpeech: 'verb',
    pronunciation: 'fǎn duì',
    exampleSentence: '有些人反对这个计划。', exampleTranslation: 'Some people oppose this plan.',
  },
  {
    id: 'zh_b1_v042', language: lang, level, category: 'opinions',
    word: '理由', translation: 'reason / grounds', partOfSpeech: 'noun',
    pronunciation: 'lǐ yóu',
    exampleSentence: '你有什么理由反对？', exampleTranslation: 'What reason do you have to object?',
  },
  {
    id: 'zh_b1_v043', language: lang, level, category: 'opinions',
    word: '观点', translation: 'viewpoint / standpoint', partOfSpeech: 'noun',
    pronunciation: 'guān diǎn',
    exampleSentence: '每个人都有自己的观点。', exampleTranslation: 'Everyone has their own viewpoint.',
  },
  {
    id: 'zh_b1_v044', language: lang, level, category: 'opinions',
    word: '支持', translation: 'to support', partOfSpeech: 'verb',
    pronunciation: 'zhī chí',
    exampleSentence: '我们都支持这个决定。', exampleTranslation: 'We all support this decision.',
  },
  {
    id: 'zh_b1_v045', language: lang, level, category: 'opinions',
    word: '建议', translation: 'suggestion / to suggest', partOfSpeech: 'noun',
    pronunciation: 'jiàn yì',
    exampleSentence: '医生建议他多运动。', exampleTranslation: 'The doctor suggested he exercise more.',
  },
];

// ── Housing ─────────────────────────────────────────────────────

const housing: VocabWord[] = [
  {
    id: 'zh_b1_v046', language: lang, level, category: 'housing',
    word: '房间', translation: 'room', partOfSpeech: 'noun',
    pronunciation: 'fáng jiān',
    exampleSentence: '这个房间又大又亮。', exampleTranslation: 'This room is big and bright.',
  },
  {
    id: 'zh_b1_v047', language: lang, level, category: 'housing',
    word: '客厅', translation: 'living room', partOfSpeech: 'noun',
    pronunciation: 'kè tīng',
    exampleSentence: '我们在客厅看电视。', exampleTranslation: 'We watch TV in the living room.',
  },
  {
    id: 'zh_b1_v048', language: lang, level, category: 'housing',
    word: '厨房', translation: 'kitchen', partOfSpeech: 'noun',
    pronunciation: 'chú fáng',
    exampleSentence: '妈妈在厨房做饭。', exampleTranslation: 'Mom is cooking in the kitchen.',
  },
  {
    id: 'zh_b1_v049', language: lang, level, category: 'housing',
    word: '卫生间', translation: 'bathroom / restroom', partOfSpeech: 'noun',
    pronunciation: 'wèi shēng jiān',
    exampleSentence: '卫生间在走廊的尽头。', exampleTranslation: 'The bathroom is at the end of the corridor.',
  },
  {
    id: 'zh_b1_v050', language: lang, level, category: 'housing',
    word: '阳台', translation: 'balcony', partOfSpeech: 'noun',
    pronunciation: 'yáng tái',
    exampleSentence: '阳台上种了很多花。', exampleTranslation: 'Many flowers are planted on the balcony.',
  },
  {
    id: 'zh_b1_v051', language: lang, level, category: 'housing',
    word: '租房', translation: 'to rent a house/flat', partOfSpeech: 'verb',
    pronunciation: 'zū fáng',
    exampleSentence: '在北京租房很贵。', exampleTranslation: 'Renting in Beijing is very expensive.',
  },
  {
    id: 'zh_b1_v052', language: lang, level, category: 'housing',
    word: '搬家', translation: 'to move house', partOfSpeech: 'verb',
    pronunciation: 'bān jiā',
    exampleSentence: '我们下个月要搬家。', exampleTranslation: 'We\'re moving house next month.',
  },
  {
    id: 'zh_b1_v053', language: lang, level, category: 'housing',
    word: '装修', translation: 'to renovate / decoration', partOfSpeech: 'verb',
    pronunciation: 'zhuāng xiū',
    exampleSentence: '他们正在装修新房子。', exampleTranslation: 'They are renovating the new house.',
  },
];

// ── Culture ─────────────────────────────────────────────────────

const culture: VocabWord[] = [
  {
    id: 'zh_b1_v054', language: lang, level, category: 'culture',
    word: '文化', translation: 'culture', partOfSpeech: 'noun',
    pronunciation: 'wén huà',
    exampleSentence: '中国有悠久的文化历史。', exampleTranslation: 'China has a long cultural history.',
  },
  {
    id: 'zh_b1_v055', language: lang, level, category: 'culture',
    word: '传统', translation: 'tradition / traditional', partOfSpeech: 'noun',
    pronunciation: 'chuán tǒng',
    exampleSentence: '春节是中国最重要的传统节日。', exampleTranslation: 'Spring Festival is China\'s most important traditional holiday.',
  },
  {
    id: 'zh_b1_v056', language: lang, level, category: 'culture',
    word: '节日', translation: 'festival / holiday', partOfSpeech: 'noun',
    pronunciation: 'jié rì',
    exampleSentence: '每个节日都有特别的活动。', exampleTranslation: 'Every festival has special activities.',
  },
  {
    id: 'zh_b1_v057', language: lang, level, category: 'culture',
    word: '博物馆', translation: 'museum', partOfSpeech: 'noun',
    pronunciation: 'bó wù guǎn',
    exampleSentence: '故宫博物馆非常值得参观。', exampleTranslation: 'The Palace Museum is very worth visiting.',
  },
  {
    id: 'zh_b1_v058', language: lang, level, category: 'culture',
    word: '艺术', translation: 'art', partOfSpeech: 'noun',
    pronunciation: 'yì shù',
    exampleSentence: '她对中国艺术很感兴趣。', exampleTranslation: 'She is very interested in Chinese art.',
  },
  {
    id: 'zh_b1_v059', language: lang, level, category: 'culture',
    word: '历史', translation: 'history', partOfSpeech: 'noun',
    pronunciation: 'lì shǐ',
    exampleSentence: '学习历史可以帮助我们理解现在。', exampleTranslation: 'Studying history can help us understand the present.',
  },
  {
    id: 'zh_b1_v060', language: lang, level, category: 'culture',
    word: '风俗', translation: 'custom / folk custom', partOfSpeech: 'noun',
    pronunciation: 'fēng sú',
    exampleSentence: '不同地方有不同的风俗习惯。', exampleTranslation: 'Different places have different customs.',
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
