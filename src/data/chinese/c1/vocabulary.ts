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
    word: '論文', translation: 'thesis / paper / essay', partOfSpeech: 'noun',
    pronunciation: 'lùn wén',
    exampleSentence: '她的畢业論文研究了人工智能的倫理问题。', exampleTranslation: 'Her graduation thesis studied the ethical issues of artificial intelligence.',
  },
  {
    id: 'zh_c1_v002', language: lang, level, category: 'academia',
    word: '學位', translation: 'academic degree', partOfSpeech: 'noun',
    pronunciation: 'xué wèi',
    exampleSentence: '他花了五年時間才拿到博士學位。', exampleTranslation: 'It took him five years to obtain his doctoral degree.',
  },
  {
    id: 'zh_c1_v003', language: lang, level, category: 'academia',
    word: '教授', translation: 'professor', partOfSpeech: 'noun',
    pronunciation: 'jiào shòu',
    exampleSentence: '這位教授在語言學領域享有盛誉。', exampleTranslation: 'This professor enjoys a great reputation in the field of linguistics.',
  },
  {
    id: 'zh_c1_v004', language: lang, level, category: 'academia',
    word: '分析', translation: 'to analyse / analysis', partOfSpeech: 'verb',
    pronunciation: 'fēn xī',
    exampleSentence: '研究人员正在分析實驗數據。', exampleTranslation: 'Researchers are analysing the experimental data.',
  },
  {
    id: 'zh_c1_v005', language: lang, level, category: 'academia',
    word: '假設', translation: 'hypothesis / to hypothesise', partOfSpeech: 'noun',
    pronunciation: 'jiǎ shè',
    exampleSentence: '這個假設還需要更多的實驗来驗證。', exampleTranslation: 'This hypothesis still needs more experiments to verify.',
  },
  {
    id: 'zh_c1_v006', language: lang, level, category: 'academia',
    word: '方法論', translation: 'methodology', partOfSpeech: 'noun',
    pronunciation: 'fāng fǎ lùn',
    exampleSentence: '論文的方法論部分應該詳細說明研究步骤。', exampleTranslation: 'The methodology section of the paper should explain the research steps in detail.',
  },
  {
    id: 'zh_c1_v007', language: lang, level, category: 'academia',
    word: '學術', translation: 'academic / scholarly', partOfSpeech: 'adjective',
    pronunciation: 'xué shù',
    exampleSentence: '學術界對這個问题存在不同的看法。', exampleTranslation: 'The academic community has different views on this issue.',
  },
  {
    id: 'zh_c1_v008', language: lang, level, category: 'academia',
    word: '研究所', translation: 'research institute', partOfSpeech: 'noun',
    pronunciation: 'yán jiū suǒ',
    exampleSentence: '他在中國科學院的研究所工作了十年。', exampleTranslation: 'He worked at the Chinese Academy of Sciences research institute for ten years.',
  },
];

// ── Law ─────────────────────────────────────────────────────────

const law: VocabWord[] = [
  {
    id: 'zh_c1_v009', language: lang, level, category: 'law',
    word: '法院', translation: 'court (of law)', partOfSpeech: 'noun',
    pronunciation: 'fǎ yuàn',
    exampleSentence: '法院判決被告賠償原告的損失。', exampleTranslation: 'The court ruled that the defendant must compensate the plaintiff\'s losses.',
  },
  {
    id: 'zh_c1_v010', language: lang, level, category: 'law',
    word: '審判', translation: 'trial / to try (a case)', partOfSpeech: 'noun',
    pronunciation: 'shěn pàn',
    exampleSentence: '審判過程向社會公開透明。', exampleTranslation: 'The trial process is open and transparent to the public.',
  },
  {
    id: 'zh_c1_v011', language: lang, level, category: 'law',
    word: '判決', translation: 'verdict / to pass judgement', partOfSpeech: 'noun',
    pronunciation: 'pàn jué',
    exampleSentence: '被告對判決結果提出了上訴。', exampleTranslation: 'The defendant filed an appeal against the verdict.',
  },
  {
    id: 'zh_c1_v012', language: lang, level, category: 'law',
    word: '辯護', translation: 'to defend (in court) / defence', partOfSpeech: 'verb',
    pronunciation: 'biàn hù',
    exampleSentence: '律師為被告進行了有力的辯護。', exampleTranslation: 'The lawyer mounted a strong defence for the defendant.',
  },
  {
    id: 'zh_c1_v013', language: lang, level, category: 'law',
    word: '訴讼', translation: 'lawsuit / litigation', partOfSpeech: 'noun',
    pronunciation: 'sù sòng',
    exampleSentence: '雙方決定通過訴讼来解決糾紛。', exampleTranslation: 'Both sides decided to resolve the dispute through litigation.',
  },
  {
    id: 'zh_c1_v014', language: lang, level, category: 'law',
    word: '憲法', translation: 'constitution', partOfSpeech: 'noun',
    pronunciation: 'xiàn fǎ',
    exampleSentence: '憲法是國家的根本大法。', exampleTranslation: 'The constitution is the fundamental law of the state.',
  },
  {
    id: 'zh_c1_v015', language: lang, level, category: 'law',
    word: '權利', translation: 'right(s) / entitlement', partOfSpeech: 'noun',
    pronunciation: 'quán lì',
    exampleSentence: '每個公民都享有言論自由的權利。', exampleTranslation: 'Every citizen enjoys the right to freedom of speech.',
  },
  {
    id: 'zh_c1_v016', language: lang, level, category: 'law',
    word: '義務', translation: 'duty / obligation', partOfSpeech: 'noun',
    pronunciation: 'yì wù',
    exampleSentence: '纳税是每個公民應盡的義務。', exampleTranslation: 'Paying taxes is a duty every citizen should fulfil.',
  },
];

// ── Economics ───────────────────────────────────────────────────

const economics: VocabWord[] = [
  {
    id: 'zh_c1_v017', language: lang, level, category: 'economics',
    word: '通货膨胀', translation: 'inflation', partOfSpeech: 'noun',
    pronunciation: 'tōng huò péng zhàng',
    exampleSentence: '通货膨胀導致物价持續上漲。', exampleTranslation: 'Inflation has caused prices to rise continuously.',
  },
  {
    id: 'zh_c1_v018', language: lang, level, category: 'economics',
    word: '利率', translation: 'interest rate', partOfSpeech: 'noun',
    pronunciation: 'lì lǜ',
    exampleSentence: '央行決定下調基準利率。', exampleTranslation: 'The central bank decided to lower the benchmark interest rate.',
  },
  {
    id: 'zh_c1_v019', language: lang, level, category: 'economics',
    word: '股票', translation: 'stock / shares', partOfSpeech: 'noun',
    pronunciation: 'gǔ piào',
    exampleSentence: '近期股票市場波動很大。', exampleTranslation: 'The stock market has been very volatile recently.',
  },
  {
    id: 'zh_c1_v020', language: lang, level, category: 'economics',
    word: '貿易顺差', translation: 'trade surplus', partOfSpeech: 'noun',
    pronunciation: 'mào yì shùn chā',
    exampleSentence: '該國連續多年保持貿易顺差。', exampleTranslation: 'The country has maintained a trade surplus for many consecutive years.',
  },
  {
    id: 'zh_c1_v021', language: lang, level, category: 'economics',
    word: '不景氣', translation: 'recession / economic downturn', partOfSpeech: 'adjective',
    pronunciation: 'bù jǐng qì',
    exampleSentence: '經濟不景氣時，失业率往往上升。', exampleTranslation: 'When the economy is in a downturn, unemployment tends to rise.',
  },
  {
    id: 'zh_c1_v022', language: lang, level, category: 'economics',
    word: '匯率', translation: 'exchange rate', partOfSpeech: 'noun',
    pronunciation: 'huì lǜ',
    exampleSentence: '人民幣對美元的匯率最近有所變化。', exampleTranslation: 'The exchange rate of RMB against the US dollar has changed recently.',
  },
  {
    id: 'zh_c1_v023', language: lang, level, category: 'economics',
    word: '國内生產總值', translation: 'GDP (gross domestic product)', partOfSpeech: 'noun',
    pronunciation: 'guó nèi shēng chǎn zǒng zhí',
    exampleSentence: '國内生產總值是衡量經濟發展的重要指標。', exampleTranslation: 'GDP is an important indicator for measuring economic development.',
  },
  {
    id: 'zh_c1_v024', language: lang, level, category: 'economics',
    word: '財政赤字', translation: 'fiscal deficit', partOfSpeech: 'noun',
    pronunciation: 'cái zhèng chì zì',
    exampleSentence: '政府正在想辦法減少財政赤字。', exampleTranslation: 'The government is trying to reduce the fiscal deficit.',
  },
];

// ── Philosophy ──────────────────────────────────────────────────

const philosophy: VocabWord[] = [
  {
    id: 'zh_c1_v025', language: lang, level, category: 'philosophy',
    word: '哲學', translation: 'philosophy', partOfSpeech: 'noun',
    pronunciation: 'zhé xué',
    exampleSentence: '哲學是對人類根本问题的思考。', exampleTranslation: 'Philosophy is the contemplation of fundamental human questions.',
  },
  {
    id: 'zh_c1_v026', language: lang, level, category: 'philosophy',
    word: '倫理', translation: 'ethics', partOfSpeech: 'noun',
    pronunciation: 'lún lǐ',
    exampleSentence: '人工智能的發展引發了新的倫理问题。', exampleTranslation: 'The development of AI has raised new ethical issues.',
  },
  {
    id: 'zh_c1_v027', language: lang, level, category: 'philosophy',
    word: '道德', translation: 'morality / moral', partOfSpeech: 'noun',
    pronunciation: 'dào dé',
    exampleSentence: '道德標準因文化的不同而有所差異。', exampleTranslation: 'Moral standards vary across different cultures.',
  },
  {
    id: 'zh_c1_v028', language: lang, level, category: 'philosophy',
    word: '价值觀', translation: 'values / value system', partOfSpeech: 'noun',
    pronunciation: 'jià zhí guān',
    exampleSentence: '每個人的价值觀都受到成長環境的影響。', exampleTranslation: 'Everyone\'s values are influenced by their upbringing.',
  },
  {
    id: 'zh_c1_v029', language: lang, level, category: 'philosophy',
    word: '存在', translation: 'existence / to exist', partOfSpeech: 'noun',
    pronunciation: 'cún zài',
    exampleSentence: '存在主義是二十世紀重要的哲學流派。', exampleTranslation: 'Existentialism is an important philosophical school of the twentieth century.',
  },
  {
    id: 'zh_c1_v030', language: lang, level, category: 'philosophy',
    word: '意識', translation: 'consciousness / awareness', partOfSpeech: 'noun',
    pronunciation: 'yì shí',
    exampleSentence: '意識的本質至今仍是哲學和科學的難题。', exampleTranslation: 'The nature of consciousness remains a puzzle for both philosophy and science.',
  },
  {
    id: 'zh_c1_v031', language: lang, level, category: 'philosophy',
    word: '理性', translation: 'rationality / reason', partOfSpeech: 'noun',
    pronunciation: 'lǐ xìng',
    exampleSentence: '理性思維是做出正確決策的基礎。', exampleTranslation: 'Rational thinking is the foundation for making correct decisions.',
  },
  {
    id: 'zh_c1_v032', language: lang, level, category: 'philosophy',
    word: '自由意志', translation: 'free will', partOfSpeech: 'noun',
    pronunciation: 'zì yóu yì zhì',
    exampleSentence: '自由意志是否存在，哲學家们争論了几個世紀。', exampleTranslation: 'Philosophers have debated for centuries whether free will exists.',
  },
];

// ── Literature ──────────────────────────────────────────────────

const literature: VocabWord[] = [
  {
    id: 'zh_c1_v033', language: lang, level, category: 'literature',
    word: '文學', translation: 'literature', partOfSpeech: 'noun',
    pronunciation: 'wén xué',
    exampleSentence: '中國文學有着數千年的悠久歷史。', exampleTranslation: 'Chinese literature has a history spanning thousands of years.',
  },
  {
    id: 'zh_c1_v034', language: lang, level, category: 'literature',
    word: '詩歌', translation: 'poetry / poem', partOfSpeech: 'noun',
    pronunciation: 'shī gē',
    exampleSentence: '唐代是中國詩歌發展的黄金時代。', exampleTranslation: 'The Tang Dynasty was the golden age of Chinese poetry.',
  },
  {
    id: 'zh_c1_v035', language: lang, level, category: 'literature',
    word: '散文', translation: 'prose / essay', partOfSpeech: 'noun',
    pronunciation: 'sǎn wén',
    exampleSentence: '他的散文以細膩的描写著稱。', exampleTranslation: 'His prose is renowned for its delicate descriptions.',
  },
  {
    id: 'zh_c1_v036', language: lang, level, category: 'literature',
    word: '比喻', translation: 'simile / analogy', partOfSpeech: 'noun',
    pronunciation: 'bǐ yù',
    exampleSentence: '"人生如戲"是一個常见的比喻。', exampleTranslation: '"Life is like a play" is a common simile.',
  },
  {
    id: 'zh_c1_v037', language: lang, level, category: 'literature',
    word: '隱喻', translation: 'metaphor', partOfSpeech: 'noun',
    pronunciation: 'yǐn yù',
    exampleSentence: '這首詩中使用了大量的隱喻手法。', exampleTranslation: 'This poem uses a great deal of metaphor.',
  },
  {
    id: 'zh_c1_v038', language: lang, level, category: 'literature',
    word: '敘事', translation: 'narrative / narration', partOfSpeech: 'noun',
    pronunciation: 'xù shì',
    exampleSentence: '這部小說采用了多視角的敘事方式。', exampleTranslation: 'This novel employs a multi-perspective narrative approach.',
  },
  {
    id: 'zh_c1_v039', language: lang, level, category: 'literature',
    word: '主题', translation: 'theme / subject', partOfSpeech: 'noun',
    pronunciation: 'zhǔ tí',
    exampleSentence: '這部作品的主题是對人性的深刻反思。', exampleTranslation: 'The theme of this work is profound reflection on human nature.',
  },
  {
    id: 'zh_c1_v040', language: lang, level, category: 'literature',
    word: '解讀', translation: 'interpretation / to interpret', partOfSpeech: 'verb',
    pronunciation: 'jiě dú',
    exampleSentence: '不同的讀者對同一部作品會有不同的解讀。', exampleTranslation: 'Different readers will have different interpretations of the same work.',
  },
];

// ── Advanced Emotions ───────────────────────────────────────────

const advancedEmotions: VocabWord[] = [
  {
    id: 'zh_c1_v041', language: lang, level, category: 'advanced_emotions',
    word: '悲痛', translation: 'grief / deep sorrow', partOfSpeech: 'noun',
    pronunciation: 'bēi tòng',
    exampleSentence: '他對朋友的離世感到無比悲痛。', exampleTranslation: 'He felt immense grief at the passing of his friend.',
  },
  {
    id: 'zh_c1_v042', language: lang, level, category: 'advanced_emotions',
    word: '敬畏', translation: 'awe / reverence', partOfSpeech: 'noun',
    pronunciation: 'jìng wèi',
    exampleSentence: '站在大自然面前，人们常常感到敬畏。', exampleTranslation: 'Standing before nature, people often feel a sense of awe.',
  },
  {
    id: 'zh_c1_v043', language: lang, level, category: 'advanced_emotions',
    word: '釋然', translation: 'relief / sense of release', partOfSpeech: 'adjective',
    pronunciation: 'shì rán',
    exampleSentence: '得知真相后，她終于感到釋然。', exampleTranslation: 'After learning the truth, she finally felt a sense of relief.',
  },
  {
    id: 'zh_c1_v044', language: lang, level, category: 'advanced_emotions',
    word: '欣慰', translation: 'gratified / comforted', partOfSpeech: 'adjective',
    pronunciation: 'xīn wèi',
    exampleSentence: '看到孩子们健康成長，她感到非常欣慰。', exampleTranslation: 'Seeing the children grow up healthily, she felt very gratified.',
  },
  {
    id: 'zh_c1_v045', language: lang, level, category: 'advanced_emotions',
    word: '怜悯', translation: 'compassion / pity', partOfSpeech: 'noun',
    pronunciation: 'lián mǐn',
    exampleSentence: '他對弱勢群體充滿了怜悯之心。', exampleTranslation: 'He is full of compassion for vulnerable groups.',
  },
  {
    id: 'zh_c1_v046', language: lang, level, category: 'advanced_emotions',
    word: '懷疑', translation: 'doubt / suspicion / to suspect', partOfSpeech: 'verb',
    pronunciation: 'huái yí',
    exampleSentence: '她開始懷疑自己的判斷是否正確。', exampleTranslation: 'She began to doubt whether her judgement was correct.',
  },
  {
    id: 'zh_c1_v047', language: lang, level, category: 'advanced_emotions',
    word: '蔑視', translation: 'contempt / disdain', partOfSpeech: 'noun',
    pronunciation: 'miè shì',
    exampleSentence: '她用蔑視的眼光看着對手。', exampleTranslation: 'She looked at her opponent with contempt.',
  },
  {
    id: 'zh_c1_v048', language: lang, level, category: 'advanced_emotions',
    word: '内疚', translation: 'guilt / remorse', partOfSpeech: 'adjective',
    pronunciation: 'nèi jiù',
    exampleSentence: '他對自己當初的決定感到深深的内疚。', exampleTranslation: 'He felt deep guilt about his earlier decision.',
  },
  {
    id: 'zh_c1_v049', language: lang, level, category: 'advanced_emotions',
    word: '茫然', translation: 'bewildered / at a loss', partOfSpeech: 'adjective',
    pronunciation: 'máng rán',
    exampleSentence: '面對突如其来的變化，他感到一陣茫然。', exampleTranslation: 'Facing the sudden change, he felt a wave of bewilderment.',
  },
  {
    id: 'zh_c1_v050', language: lang, level, category: 'advanced_emotions',
    word: '憤慨', translation: 'indignation / outrage', partOfSpeech: 'noun',
    pronunciation: 'fèn kǎi',
    exampleSentence: '民眾對腐败現象表示了強烈的憤慨。', exampleTranslation: 'The public expressed strong indignation at the corruption.',
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
