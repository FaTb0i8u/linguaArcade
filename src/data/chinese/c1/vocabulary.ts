/**
 * Chinese (Mandarin) C1 / HSK 5-6 Vocabulary
 *
 * Organised by thematic category, matching CEFR C1 / HSK 5-6 expectations.
 * Each word includes part of speech, pinyin with tone marks,
 * an example sentence in simplified Chinese, and its English translation.
 *
 * Categories: academia, law, economics, philosophy,
 *             literature, advanced_emotions.
 */

import type { VocabWord } from '../../../types';

const lang = 'zh' as const;
const level = 'C1' as const;

// ── Academia ────────────────────────────────────────────────────

const academia: VocabWord[] = [
  {
    id: 'zh_c1_v001', language: lang, level, category: 'academia',
    word: '论文', translation: 'thesis / paper / essay', partOfSpeech: 'noun',
    pronunciation: 'lùn wén',
    exampleSentence: '她的毕业论文研究了人工智能的伦理问题。', exampleTranslation: 'Her graduation thesis studied the ethical issues of artificial intelligence.',
  },
  {
    id: 'zh_c1_v002', language: lang, level, category: 'academia',
    word: '学位', translation: 'academic degree', partOfSpeech: 'noun',
    pronunciation: 'xué wèi',
    exampleSentence: '他花了五年时间才拿到博士学位。', exampleTranslation: 'It took him five years to obtain his doctoral degree.',
  },
  {
    id: 'zh_c1_v003', language: lang, level, category: 'academia',
    word: '教授', translation: 'professor', partOfSpeech: 'noun',
    pronunciation: 'jiào shòu',
    exampleSentence: '这位教授在语言学领域享有盛誉。', exampleTranslation: 'This professor enjoys a great reputation in the field of linguistics.',
  },
  {
    id: 'zh_c1_v004', language: lang, level, category: 'academia',
    word: '分析', translation: 'to analyse / analysis', partOfSpeech: 'verb',
    pronunciation: 'fēn xī',
    exampleSentence: '研究人员正在分析实验数据。', exampleTranslation: 'Researchers are analysing the experimental data.',
  },
  {
    id: 'zh_c1_v005', language: lang, level, category: 'academia',
    word: '假设', translation: 'hypothesis / to hypothesise', partOfSpeech: 'noun',
    pronunciation: 'jiǎ shè',
    exampleSentence: '这个假设还需要更多的实验来验证。', exampleTranslation: 'This hypothesis still needs more experiments to verify.',
  },
  {
    id: 'zh_c1_v006', language: lang, level, category: 'academia',
    word: '方法论', translation: 'methodology', partOfSpeech: 'noun',
    pronunciation: 'fāng fǎ lùn',
    exampleSentence: '论文的方法论部分应该详细说明研究步骤。', exampleTranslation: 'The methodology section of the paper should explain the research steps in detail.',
  },
  {
    id: 'zh_c1_v007', language: lang, level, category: 'academia',
    word: '学术', translation: 'academic / scholarly', partOfSpeech: 'adjective',
    pronunciation: 'xué shù',
    exampleSentence: '学术界对这个问题存在不同的看法。', exampleTranslation: 'The academic community has different views on this issue.',
  },
  {
    id: 'zh_c1_v008', language: lang, level, category: 'academia',
    word: '研究所', translation: 'research institute', partOfSpeech: 'noun',
    pronunciation: 'yán jiū suǒ',
    exampleSentence: '他在中国科学院的研究所工作了十年。', exampleTranslation: 'He worked at the Chinese Academy of Sciences research institute for ten years.',
  },
];

// ── Law ─────────────────────────────────────────────────────────

const law: VocabWord[] = [
  {
    id: 'zh_c1_v009', language: lang, level, category: 'law',
    word: '法院', translation: 'court (of law)', partOfSpeech: 'noun',
    pronunciation: 'fǎ yuàn',
    exampleSentence: '法院判决被告赔偿原告的损失。', exampleTranslation: 'The court ruled that the defendant must compensate the plaintiff\'s losses.',
  },
  {
    id: 'zh_c1_v010', language: lang, level, category: 'law',
    word: '审判', translation: 'trial / to try (a case)', partOfSpeech: 'noun',
    pronunciation: 'shěn pàn',
    exampleSentence: '审判过程向社会公开透明。', exampleTranslation: 'The trial process is open and transparent to the public.',
  },
  {
    id: 'zh_c1_v011', language: lang, level, category: 'law',
    word: '判决', translation: 'verdict / to pass judgement', partOfSpeech: 'noun',
    pronunciation: 'pàn jué',
    exampleSentence: '被告对判决结果提出了上诉。', exampleTranslation: 'The defendant filed an appeal against the verdict.',
  },
  {
    id: 'zh_c1_v012', language: lang, level, category: 'law',
    word: '辩护', translation: 'to defend (in court) / defence', partOfSpeech: 'verb',
    pronunciation: 'biàn hù',
    exampleSentence: '律师为被告进行了有力的辩护。', exampleTranslation: 'The lawyer mounted a strong defence for the defendant.',
  },
  {
    id: 'zh_c1_v013', language: lang, level, category: 'law',
    word: '诉讼', translation: 'lawsuit / litigation', partOfSpeech: 'noun',
    pronunciation: 'sù sòng',
    exampleSentence: '双方决定通过诉讼来解决纠纷。', exampleTranslation: 'Both sides decided to resolve the dispute through litigation.',
  },
  {
    id: 'zh_c1_v014', language: lang, level, category: 'law',
    word: '宪法', translation: 'constitution', partOfSpeech: 'noun',
    pronunciation: 'xiàn fǎ',
    exampleSentence: '宪法是国家的根本大法。', exampleTranslation: 'The constitution is the fundamental law of the state.',
  },
  {
    id: 'zh_c1_v015', language: lang, level, category: 'law',
    word: '权利', translation: 'right(s) / entitlement', partOfSpeech: 'noun',
    pronunciation: 'quán lì',
    exampleSentence: '每个公民都享有言论自由的权利。', exampleTranslation: 'Every citizen enjoys the right to freedom of speech.',
  },
  {
    id: 'zh_c1_v016', language: lang, level, category: 'law',
    word: '义务', translation: 'duty / obligation', partOfSpeech: 'noun',
    pronunciation: 'yì wù',
    exampleSentence: '纳税是每个公民应尽的义务。', exampleTranslation: 'Paying taxes is a duty every citizen should fulfil.',
  },
];

// ── Economics ───────────────────────────────────────────────────

const economics: VocabWord[] = [
  {
    id: 'zh_c1_v017', language: lang, level, category: 'economics',
    word: '通货膨胀', translation: 'inflation', partOfSpeech: 'noun',
    pronunciation: 'tōng huò péng zhàng',
    exampleSentence: '通货膨胀导致物价持续上涨。', exampleTranslation: 'Inflation has caused prices to rise continuously.',
  },
  {
    id: 'zh_c1_v018', language: lang, level, category: 'economics',
    word: '利率', translation: 'interest rate', partOfSpeech: 'noun',
    pronunciation: 'lì lǜ',
    exampleSentence: '央行决定下调基准利率。', exampleTranslation: 'The central bank decided to lower the benchmark interest rate.',
  },
  {
    id: 'zh_c1_v019', language: lang, level, category: 'economics',
    word: '股票', translation: 'stock / shares', partOfSpeech: 'noun',
    pronunciation: 'gǔ piào',
    exampleSentence: '近期股票市场波动很大。', exampleTranslation: 'The stock market has been very volatile recently.',
  },
  {
    id: 'zh_c1_v020', language: lang, level, category: 'economics',
    word: '贸易顺差', translation: 'trade surplus', partOfSpeech: 'noun',
    pronunciation: 'mào yì shùn chā',
    exampleSentence: '该国连续多年保持贸易顺差。', exampleTranslation: 'The country has maintained a trade surplus for many consecutive years.',
  },
  {
    id: 'zh_c1_v021', language: lang, level, category: 'economics',
    word: '不景气', translation: 'recession / economic downturn', partOfSpeech: 'adjective',
    pronunciation: 'bù jǐng qì',
    exampleSentence: '经济不景气时，失业率往往上升。', exampleTranslation: 'When the economy is in a downturn, unemployment tends to rise.',
  },
  {
    id: 'zh_c1_v022', language: lang, level, category: 'economics',
    word: '汇率', translation: 'exchange rate', partOfSpeech: 'noun',
    pronunciation: 'huì lǜ',
    exampleSentence: '人民币对美元的汇率最近有所变化。', exampleTranslation: 'The exchange rate of RMB against the US dollar has changed recently.',
  },
  {
    id: 'zh_c1_v023', language: lang, level, category: 'economics',
    word: '国内生产总值', translation: 'GDP (gross domestic product)', partOfSpeech: 'noun',
    pronunciation: 'guó nèi shēng chǎn zǒng zhí',
    exampleSentence: '国内生产总值是衡量经济发展的重要指标。', exampleTranslation: 'GDP is an important indicator for measuring economic development.',
  },
  {
    id: 'zh_c1_v024', language: lang, level, category: 'economics',
    word: '财政赤字', translation: 'fiscal deficit', partOfSpeech: 'noun',
    pronunciation: 'cái zhèng chì zì',
    exampleSentence: '政府正在想办法减少财政赤字。', exampleTranslation: 'The government is trying to reduce the fiscal deficit.',
  },
];

// ── Philosophy ──────────────────────────────────────────────────

const philosophy: VocabWord[] = [
  {
    id: 'zh_c1_v025', language: lang, level, category: 'philosophy',
    word: '哲学', translation: 'philosophy', partOfSpeech: 'noun',
    pronunciation: 'zhé xué',
    exampleSentence: '哲学是对人类根本问题的思考。', exampleTranslation: 'Philosophy is the contemplation of fundamental human questions.',
  },
  {
    id: 'zh_c1_v026', language: lang, level, category: 'philosophy',
    word: '伦理', translation: 'ethics', partOfSpeech: 'noun',
    pronunciation: 'lún lǐ',
    exampleSentence: '人工智能的发展引发了新的伦理问题。', exampleTranslation: 'The development of AI has raised new ethical issues.',
  },
  {
    id: 'zh_c1_v027', language: lang, level, category: 'philosophy',
    word: '道德', translation: 'morality / moral', partOfSpeech: 'noun',
    pronunciation: 'dào dé',
    exampleSentence: '道德标准因文化的不同而有所差异。', exampleTranslation: 'Moral standards vary across different cultures.',
  },
  {
    id: 'zh_c1_v028', language: lang, level, category: 'philosophy',
    word: '价值观', translation: 'values / value system', partOfSpeech: 'noun',
    pronunciation: 'jià zhí guān',
    exampleSentence: '每个人的价值观都受到成长环境的影响。', exampleTranslation: 'Everyone\'s values are influenced by their upbringing.',
  },
  {
    id: 'zh_c1_v029', language: lang, level, category: 'philosophy',
    word: '存在', translation: 'existence / to exist', partOfSpeech: 'noun',
    pronunciation: 'cún zài',
    exampleSentence: '存在主义是二十世纪重要的哲学流派。', exampleTranslation: 'Existentialism is an important philosophical school of the twentieth century.',
  },
  {
    id: 'zh_c1_v030', language: lang, level, category: 'philosophy',
    word: '意识', translation: 'consciousness / awareness', partOfSpeech: 'noun',
    pronunciation: 'yì shí',
    exampleSentence: '意识的本质至今仍是哲学和科学的难题。', exampleTranslation: 'The nature of consciousness remains a puzzle for both philosophy and science.',
  },
  {
    id: 'zh_c1_v031', language: lang, level, category: 'philosophy',
    word: '理性', translation: 'rationality / reason', partOfSpeech: 'noun',
    pronunciation: 'lǐ xìng',
    exampleSentence: '理性思维是做出正确决策的基础。', exampleTranslation: 'Rational thinking is the foundation for making correct decisions.',
  },
  {
    id: 'zh_c1_v032', language: lang, level, category: 'philosophy',
    word: '自由意志', translation: 'free will', partOfSpeech: 'noun',
    pronunciation: 'zì yóu yì zhì',
    exampleSentence: '自由意志是否存在，哲学家们争论了几个世纪。', exampleTranslation: 'Philosophers have debated for centuries whether free will exists.',
  },
];

// ── Literature ──────────────────────────────────────────────────

const literature: VocabWord[] = [
  {
    id: 'zh_c1_v033', language: lang, level, category: 'literature',
    word: '文学', translation: 'literature', partOfSpeech: 'noun',
    pronunciation: 'wén xué',
    exampleSentence: '中国文学有着数千年的悠久历史。', exampleTranslation: 'Chinese literature has a history spanning thousands of years.',
  },
  {
    id: 'zh_c1_v034', language: lang, level, category: 'literature',
    word: '诗歌', translation: 'poetry / poem', partOfSpeech: 'noun',
    pronunciation: 'shī gē',
    exampleSentence: '唐代是中国诗歌发展的黄金时代。', exampleTranslation: 'The Tang Dynasty was the golden age of Chinese poetry.',
  },
  {
    id: 'zh_c1_v035', language: lang, level, category: 'literature',
    word: '散文', translation: 'prose / essay', partOfSpeech: 'noun',
    pronunciation: 'sǎn wén',
    exampleSentence: '他的散文以细腻的描写著称。', exampleTranslation: 'His prose is renowned for its delicate descriptions.',
  },
  {
    id: 'zh_c1_v036', language: lang, level, category: 'literature',
    word: '比喻', translation: 'simile / analogy', partOfSpeech: 'noun',
    pronunciation: 'bǐ yù',
    exampleSentence: '"人生如戏"是一个常见的比喻。', exampleTranslation: '"Life is like a play" is a common simile.',
  },
  {
    id: 'zh_c1_v037', language: lang, level, category: 'literature',
    word: '隐喻', translation: 'metaphor', partOfSpeech: 'noun',
    pronunciation: 'yǐn yù',
    exampleSentence: '这首诗中使用了大量的隐喻手法。', exampleTranslation: 'This poem uses a great deal of metaphor.',
  },
  {
    id: 'zh_c1_v038', language: lang, level, category: 'literature',
    word: '叙事', translation: 'narrative / narration', partOfSpeech: 'noun',
    pronunciation: 'xù shì',
    exampleSentence: '这部小说采用了多视角的叙事方式。', exampleTranslation: 'This novel employs a multi-perspective narrative approach.',
  },
  {
    id: 'zh_c1_v039', language: lang, level, category: 'literature',
    word: '主题', translation: 'theme / subject', partOfSpeech: 'noun',
    pronunciation: 'zhǔ tí',
    exampleSentence: '这部作品的主题是对人性的深刻反思。', exampleTranslation: 'The theme of this work is profound reflection on human nature.',
  },
  {
    id: 'zh_c1_v040', language: lang, level, category: 'literature',
    word: '解读', translation: 'interpretation / to interpret', partOfSpeech: 'verb',
    pronunciation: 'jiě dú',
    exampleSentence: '不同的读者对同一部作品会有不同的解读。', exampleTranslation: 'Different readers will have different interpretations of the same work.',
  },
];

// ── Advanced Emotions ───────────────────────────────────────────

const advancedEmotions: VocabWord[] = [
  {
    id: 'zh_c1_v041', language: lang, level, category: 'advanced_emotions',
    word: '悲痛', translation: 'grief / deep sorrow', partOfSpeech: 'noun',
    pronunciation: 'bēi tòng',
    exampleSentence: '他对朋友的离世感到无比悲痛。', exampleTranslation: 'He felt immense grief at the passing of his friend.',
  },
  {
    id: 'zh_c1_v042', language: lang, level, category: 'advanced_emotions',
    word: '敬畏', translation: 'awe / reverence', partOfSpeech: 'noun',
    pronunciation: 'jìng wèi',
    exampleSentence: '站在大自然面前，人们常常感到敬畏。', exampleTranslation: 'Standing before nature, people often feel a sense of awe.',
  },
  {
    id: 'zh_c1_v043', language: lang, level, category: 'advanced_emotions',
    word: '释然', translation: 'relief / sense of release', partOfSpeech: 'adjective',
    pronunciation: 'shì rán',
    exampleSentence: '得知真相后，她终于感到释然。', exampleTranslation: 'After learning the truth, she finally felt a sense of relief.',
  },
  {
    id: 'zh_c1_v044', language: lang, level, category: 'advanced_emotions',
    word: '欣慰', translation: 'gratified / comforted', partOfSpeech: 'adjective',
    pronunciation: 'xīn wèi',
    exampleSentence: '看到孩子们健康成长，她感到非常欣慰。', exampleTranslation: 'Seeing the children grow up healthily, she felt very gratified.',
  },
  {
    id: 'zh_c1_v045', language: lang, level, category: 'advanced_emotions',
    word: '怜悯', translation: 'compassion / pity', partOfSpeech: 'noun',
    pronunciation: 'lián mǐn',
    exampleSentence: '他对弱势群体充满了怜悯之心。', exampleTranslation: 'He is full of compassion for vulnerable groups.',
  },
  {
    id: 'zh_c1_v046', language: lang, level, category: 'advanced_emotions',
    word: '怀疑', translation: 'doubt / suspicion / to suspect', partOfSpeech: 'verb',
    pronunciation: 'huái yí',
    exampleSentence: '她开始怀疑自己的判断是否正确。', exampleTranslation: 'She began to doubt whether her judgement was correct.',
  },
  {
    id: 'zh_c1_v047', language: lang, level, category: 'advanced_emotions',
    word: '蔑视', translation: 'contempt / disdain', partOfSpeech: 'noun',
    pronunciation: 'miè shì',
    exampleSentence: '她用蔑视的眼光看着对手。', exampleTranslation: 'She looked at her opponent with contempt.',
  },
  {
    id: 'zh_c1_v048', language: lang, level, category: 'advanced_emotions',
    word: '内疚', translation: 'guilt / remorse', partOfSpeech: 'adjective',
    pronunciation: 'nèi jiù',
    exampleSentence: '他对自己当初的决定感到深深的内疚。', exampleTranslation: 'He felt deep guilt about his earlier decision.',
  },
  {
    id: 'zh_c1_v049', language: lang, level, category: 'advanced_emotions',
    word: '茫然', translation: 'bewildered / at a loss', partOfSpeech: 'adjective',
    pronunciation: 'máng rán',
    exampleSentence: '面对突如其来的变化，他感到一阵茫然。', exampleTranslation: 'Facing the sudden change, he felt a wave of bewilderment.',
  },
  {
    id: 'zh_c1_v050', language: lang, level, category: 'advanced_emotions',
    word: '愤慨', translation: 'indignation / outrage', partOfSpeech: 'noun',
    pronunciation: 'fèn kǎi',
    exampleSentence: '民众对腐败现象表示了强烈的愤慨。', exampleTranslation: 'The public expressed strong indignation at the corruption.',
  },
];

// ── Export ───────────────────────────────────────────────────────

export const CHINESE_C1_VOCAB: VocabWord[] = [
  ...academia,
  ...law,
  ...economics,
  ...philosophy,
  ...literature,
  ...advancedEmotions,
];
