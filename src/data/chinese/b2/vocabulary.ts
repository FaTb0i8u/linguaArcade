/**
 * Chinese (Mandarin) B2 / HSK 4-5 Vocabulary
 *
 * Organised by thematic category, matching CEFR B2 / HSK 4-5 expectations.
 * Each word includes part of speech, pinyin with tone marks,
 * an example sentence in simplified Chinese, and its English translation.
 *
 * Categories: politics, science, business, health_advanced,
 *             arts, emotions_advanced, social_issues.
 */

import type { VocabWord } from '../../../types';

const lang = 'zh' as const;
const level = 'B2' as const;

// ── Politics ────────────────────────────────────────────────────

const politics: VocabWord[] = [
  {
    id: 'zh_b2_v001', language: lang, level, category: 'politics',
    word: '政治', translation: 'politics', partOfSpeech: 'noun',
    pronunciation: 'zhèng zhì',
    exampleSentence: '他對政治非常感興趣。', exampleTranslation: 'He is very interested in politics.',
  },
  {
    id: 'zh_b2_v002', language: lang, level, category: 'politics',
    word: '政府', translation: 'government', partOfSpeech: 'noun',
    pronunciation: 'zhèng fǔ',
    exampleSentence: '政府發布了新的經濟政策。', exampleTranslation: 'The government released a new economic policy.',
  },
  {
    id: 'zh_b2_v003', language: lang, level, category: 'politics',
    word: '選舉', translation: 'election', partOfSpeech: 'noun',
    pronunciation: 'xuǎn jǔ',
    exampleSentence: '今年的選舉競争非常激烈。', exampleTranslation: 'This year\'s election is very competitive.',
  },
  {
    id: 'zh_b2_v004', language: lang, level, category: 'politics',
    word: '總統', translation: 'president (of a country)', partOfSpeech: 'noun',
    pronunciation: 'zǒng tǒng',
    exampleSentence: '總統在电視上發表了講話。', exampleTranslation: 'The president gave a speech on television.',
  },
  {
    id: 'zh_b2_v005', language: lang, level, category: 'politics',
    word: '法律', translation: 'law', partOfSpeech: 'noun',
    pronunciation: 'fǎ lǜ',
    exampleSentence: '每個公民都應該遵守法律。', exampleTranslation: 'Every citizen should obey the law.',
  },
  {
    id: 'zh_b2_v006', language: lang, level, category: 'politics',
    word: '政策', translation: 'policy', partOfSpeech: 'noun',
    pronunciation: 'zhèng cè',
    exampleSentence: '這項政策對年輕人很有幫助。', exampleTranslation: 'This policy is very helpful for young people.',
  },
  {
    id: 'zh_b2_v007', language: lang, level, category: 'politics',
    word: '權力', translation: 'power / authority', partOfSpeech: 'noun',
    pronunciation: 'quán lì',
    exampleSentence: '權力應該受到監督和制約。', exampleTranslation: 'Power should be supervised and constrained.',
  },
  {
    id: 'zh_b2_v008', language: lang, level, category: 'politics',
    word: '民主', translation: 'democracy', partOfSpeech: 'noun',
    pronunciation: 'mín zhǔ',
    exampleSentence: '民主是一種重要的政治制度。', exampleTranslation: 'Democracy is an important political system.',
  },
];

// ── Science ─────────────────────────────────────────────────────

const science: VocabWord[] = [
  {
    id: 'zh_b2_v009', language: lang, level, category: 'science',
    word: '科學', translation: 'science', partOfSpeech: 'noun',
    pronunciation: 'kē xué',
    exampleSentence: '科學技術改變了我们的生活。', exampleTranslation: 'Science and technology have changed our lives.',
  },
  {
    id: 'zh_b2_v010', language: lang, level, category: 'science',
    word: '研究', translation: 'research / to research', partOfSpeech: 'verb',
    pronunciation: 'yán jiū',
    exampleSentence: '他在大學里研究人工智能。', exampleTranslation: 'He researches artificial intelligence at university.',
  },
  {
    id: 'zh_b2_v011', language: lang, level, category: 'science',
    word: '實驗', translation: 'experiment', partOfSpeech: 'noun',
    pronunciation: 'shí yàn',
    exampleSentence: '這個實驗需要很長時間才能完成。', exampleTranslation: 'This experiment takes a long time to complete.',
  },
  {
    id: 'zh_b2_v012', language: lang, level, category: 'science',
    word: '數據', translation: 'data', partOfSpeech: 'noun',
    pronunciation: 'shù jù',
    exampleSentence: '我们需要更多的數據来支持這個結論。', exampleTranslation: 'We need more data to support this conclusion.',
  },
  {
    id: 'zh_b2_v013', language: lang, level, category: 'science',
    word: '發現', translation: 'to discover / discovery', partOfSpeech: 'verb',
    pronunciation: 'fā xiàn',
    exampleSentence: '科學家發現了一種新的材料。', exampleTranslation: 'Scientists discovered a new type of material.',
  },
  {
    id: 'zh_b2_v014', language: lang, level, category: 'science',
    word: '技術', translation: 'technology / technique', partOfSpeech: 'noun',
    pronunciation: 'jì shù',
    exampleSentence: '這項技術在醫學領域非常有用。', exampleTranslation: 'This technology is very useful in the medical field.',
  },
  {
    id: 'zh_b2_v015', language: lang, level, category: 'science',
    word: '理論', translation: 'theory', partOfSpeech: 'noun',
    pronunciation: 'lǐ lùn',
    exampleSentence: '理論和實践同樣重要。', exampleTranslation: 'Theory and practice are equally important.',
  },
  {
    id: 'zh_b2_v016', language: lang, level, category: 'science',
    word: '結論', translation: 'conclusion', partOfSpeech: 'noun',
    pronunciation: 'jié lùn',
    exampleSentence: '根據數據，我们得出了以下結論。', exampleTranslation: 'Based on the data, we reached the following conclusion.',
  },
];

// ── Business ────────────────────────────────────────────────────

const business: VocabWord[] = [
  {
    id: 'zh_b2_v017', language: lang, level, category: 'business',
    word: '經濟', translation: 'economy / economics', partOfSpeech: 'noun',
    pronunciation: 'jīng jì',
    exampleSentence: '中國的經濟發展得很快。', exampleTranslation: 'China\'s economy has developed very quickly.',
  },
  {
    id: 'zh_b2_v018', language: lang, level, category: 'business',
    word: '投資', translation: 'to invest / investment', partOfSpeech: 'verb',
    pronunciation: 'tóu zī',
    exampleSentence: '他決定投資一家科技公司。', exampleTranslation: 'He decided to invest in a tech company.',
  },
  {
    id: 'zh_b2_v019', language: lang, level, category: 'business',
    word: '利潤', translation: 'profit', partOfSpeech: 'noun',
    pronunciation: 'lì rùn',
    exampleSentence: '這個季度公司的利潤增長了百分之二十。', exampleTranslation: 'The company\'s profit grew by 20% this quarter.',
  },
  {
    id: 'zh_b2_v020', language: lang, level, category: 'business',
    word: '合同', translation: 'contract', partOfSpeech: 'noun',
    pronunciation: 'hé tong',
    exampleSentence: '請仔細閱讀合同的每一条。', exampleTranslation: 'Please read every clause of the contract carefully.',
  },
  {
    id: 'zh_b2_v021', language: lang, level, category: 'business',
    word: '競争', translation: 'competition / to compete', partOfSpeech: 'noun',
    pronunciation: 'jìng zhēng',
    exampleSentence: '市場競争越来越激烈了。', exampleTranslation: 'Market competition is getting fiercer and fiercer.',
  },
  {
    id: 'zh_b2_v022', language: lang, level, category: 'business',
    word: '市場', translation: 'market', partOfSpeech: 'noun',
    pronunciation: 'shì chǎng',
    exampleSentence: '他们正在開拓海外市場。', exampleTranslation: 'They are expanding into overseas markets.',
  },
  {
    id: 'zh_b2_v023', language: lang, level, category: 'business',
    word: '貿易', translation: 'trade', partOfSpeech: 'noun',
    pronunciation: 'mào yì',
    exampleSentence: '國际貿易對經濟增長很重要。', exampleTranslation: 'International trade is important for economic growth.',
  },
  {
    id: 'zh_b2_v024', language: lang, level, category: 'business',
    word: '企业', translation: 'enterprise / business', partOfSpeech: 'noun',
    pronunciation: 'qǐ yè',
    exampleSentence: '很多中小企业面臨着資金困難。', exampleTranslation: 'Many small and medium enterprises face financial difficulties.',
  },
];

// ── Health (Advanced) ───────────────────────────────────────────

const healthAdvanced: VocabWord[] = [
  {
    id: 'zh_b2_v025', language: lang, level, category: 'health_advanced',
    word: '症状', translation: 'symptom', partOfSpeech: 'noun',
    pronunciation: 'zhèng zhuàng',
    exampleSentence: '你有什么症状？', exampleTranslation: 'What symptoms do you have?',
  },
  {
    id: 'zh_b2_v026', language: lang, level, category: 'health_advanced',
    word: '診斷', translation: 'diagnosis / to diagnose', partOfSpeech: 'noun',
    pronunciation: 'zhěn duàn',
    exampleSentence: '醫生的診斷結果是什么？', exampleTranslation: 'What was the doctor\'s diagnosis?',
  },
  {
    id: 'zh_b2_v027', language: lang, level, category: 'health_advanced',
    word: '治疗', translation: 'treatment / to treat', partOfSpeech: 'verb',
    pronunciation: 'zhì liáo',
    exampleSentence: '這種病需要長期治疗。', exampleTranslation: 'This illness requires long-term treatment.',
  },
  {
    id: 'zh_b2_v028', language: lang, level, category: 'health_advanced',
    word: '手術', translation: 'surgery / operation', partOfSpeech: 'noun',
    pronunciation: 'shǒu shù',
    exampleSentence: '他明天要做一個小手術。', exampleTranslation: 'He is going to have a minor operation tomorrow.',
  },
  {
    id: 'zh_b2_v029', language: lang, level, category: 'health_advanced',
    word: '处方', translation: 'prescription', partOfSpeech: 'noun',
    pronunciation: 'chǔ fāng',
    exampleSentence: '醫生給他開了一張处方。', exampleTranslation: 'The doctor wrote a prescription for him.',
  },
  {
    id: 'zh_b2_v030', language: lang, level, category: 'health_advanced',
    word: '免疫', translation: 'immunity / immune', partOfSpeech: 'noun',
    pronunciation: 'miǎn yì',
    exampleSentence: '運動可以增強免疫力。', exampleTranslation: 'Exercise can strengthen immunity.',
  },
  {
    id: 'zh_b2_v031', language: lang, level, category: 'health_advanced',
    word: '預防', translation: 'prevention / to prevent', partOfSpeech: 'verb',
    pronunciation: 'yù fáng',
    exampleSentence: '預防比治疗更重要。', exampleTranslation: 'Prevention is more important than cure.',
  },
];

// ── Arts ────────────────────────────────────────────────────────

const arts: VocabWord[] = [
  {
    id: 'zh_b2_v032', language: lang, level, category: 'arts',
    word: '作品', translation: 'work (of art/literature)', partOfSpeech: 'noun',
    pronunciation: 'zuò pǐn',
    exampleSentence: '這是他最有名的作品。', exampleTranslation: 'This is his most famous work.',
  },
  {
    id: 'zh_b2_v033', language: lang, level, category: 'arts',
    word: '展覽', translation: 'exhibition', partOfSpeech: 'noun',
    pronunciation: 'zhǎn lǎn',
    exampleSentence: '博物館正在舉辦一個新展覽。', exampleTranslation: 'The museum is holding a new exhibition.',
  },
  {
    id: 'zh_b2_v034', language: lang, level, category: 'arts',
    word: '小說', translation: 'novel', partOfSpeech: 'noun',
    pronunciation: 'xiǎo shuō',
    exampleSentence: '她喜歡讀各種各樣的小說。', exampleTranslation: 'She likes to read all kinds of novels.',
  },
  {
    id: 'zh_b2_v035', language: lang, level, category: 'arts',
    word: '導演', translation: 'director (film)', partOfSpeech: 'noun',
    pronunciation: 'dǎo yǎn',
    exampleSentence: '這部电影的導演很有才華。', exampleTranslation: 'The director of this film is very talented.',
  },
  {
    id: 'zh_b2_v036', language: lang, level, category: 'arts',
    word: '演员', translation: 'actor / actress', partOfSpeech: 'noun',
    pronunciation: 'yǎn yuán',
    exampleSentence: '她是中國最受歡迎的演员之一。', exampleTranslation: 'She is one of China\'s most popular actresses.',
  },
  {
    id: 'zh_b2_v037', language: lang, level, category: 'arts',
    word: '舞台', translation: 'stage', partOfSpeech: 'noun',
    pronunciation: 'wǔ tái',
    exampleSentence: '他站在舞台上表演了一首歌。', exampleTranslation: 'He stood on stage and performed a song.',
  },
  {
    id: 'zh_b2_v038', language: lang, level, category: 'arts',
    word: '評論', translation: 'comment / review / to critique', partOfSpeech: 'noun',
    pronunciation: 'píng lùn',
    exampleSentence: '這部电影收到了很多好評論。', exampleTranslation: 'This film received many good reviews.',
  },
  {
    id: 'zh_b2_v039', language: lang, level, category: 'arts',
    word: '創作', translation: 'to create (art) / creation', partOfSpeech: 'verb',
    pronunciation: 'chuàng zuò',
    exampleSentence: '他花了三年時間創作這部小說。', exampleTranslation: 'He spent three years creating this novel.',
  },
];

// ── Emotions (Advanced) ─────────────────────────────────────────

const emotionsAdvanced: VocabWord[] = [
  {
    id: 'zh_b2_v040', language: lang, level, category: 'emotions_advanced',
    word: '焦慮', translation: 'anxiety / anxious', partOfSpeech: 'adjective',
    pronunciation: 'jiāo lǜ',
    exampleSentence: '考試前他感到很焦慮。', exampleTranslation: 'He felt very anxious before the exam.',
  },
  {
    id: 'zh_b2_v041', language: lang, level, category: 'emotions_advanced',
    word: '絕望', translation: 'despair / hopeless', partOfSpeech: 'adjective',
    pronunciation: 'jué wàng',
    exampleSentence: '即使在最絕望的時候，也不要放棄。', exampleTranslation: 'Even in the most desperate times, don\'t give up.',
  },
  {
    id: 'zh_b2_v042', language: lang, level, category: 'emotions_advanced',
    word: '感動', translation: 'to be moved / touching', partOfSpeech: 'verb',
    pronunciation: 'gǎn dòng',
    exampleSentence: '那個故事讓所有人都很感動。', exampleTranslation: 'That story moved everyone.',
  },
  {
    id: 'zh_b2_v043', language: lang, level, category: 'emotions_advanced',
    word: '自豪', translation: 'proud / pride', partOfSpeech: 'adjective',
    pronunciation: 'zì háo',
    exampleSentence: '他為自己的成就感到自豪。', exampleTranslation: 'He feels proud of his achievements.',
  },
  {
    id: 'zh_b2_v044', language: lang, level, category: 'emotions_advanced',
    word: '后悔', translation: 'regret / to regret', partOfSpeech: 'verb',
    pronunciation: 'hòu huǐ',
    exampleSentence: '他后悔没有好好學習。', exampleTranslation: 'He regrets not having studied hard.',
  },
  {
    id: 'zh_b2_v045', language: lang, level, category: 'emotions_advanced',
    word: '同情', translation: 'sympathy / to sympathize', partOfSpeech: 'verb',
    pronunciation: 'tóng qíng',
    exampleSentence: '我们都很同情他的遭遇。', exampleTranslation: 'We all sympathize with what happened to him.',
  },
  {
    id: 'zh_b2_v046', language: lang, level, category: 'emotions_advanced',
    word: '嫉妒', translation: 'jealousy / to be jealous', partOfSpeech: 'verb',
    pronunciation: 'jí dù',
    exampleSentence: '嫉妒别人對自己没有好处。', exampleTranslation: 'Being jealous of others does yourself no good.',
  },
  {
    id: 'zh_b2_v047', language: lang, level, category: 'emotions_advanced',
    word: '熱情', translation: 'enthusiasm / passionate', partOfSpeech: 'adjective',
    pronunciation: 'rè qíng',
    exampleSentence: '她對工作充滿了熱情。', exampleTranslation: 'She is full of enthusiasm for her work.',
  },
];

// ── Social Issues ───────────────────────────────────────────────

const socialIssues: VocabWord[] = [
  {
    id: 'zh_b2_v048', language: lang, level, category: 'social_issues',
    word: '歧視', translation: 'discrimination / to discriminate', partOfSpeech: 'noun',
    pronunciation: 'qí shì',
    exampleSentence: '我们應該反對一切形式的歧視。', exampleTranslation: 'We should oppose all forms of discrimination.',
  },
  {
    id: 'zh_b2_v049', language: lang, level, category: 'social_issues',
    word: '平等', translation: 'equality / equal', partOfSpeech: 'adjective',
    pronunciation: 'píng děng',
    exampleSentence: '人人生而平等。', exampleTranslation: 'All people are born equal.',
  },
  {
    id: 'zh_b2_v050', language: lang, level, category: 'social_issues',
    word: '人權', translation: 'human rights', partOfSpeech: 'noun',
    pronunciation: 'rén quán',
    exampleSentence: '保護人權是每個國家的责任。', exampleTranslation: 'Protecting human rights is every country\'s responsibility.',
  },
  {
    id: 'zh_b2_v051', language: lang, level, category: 'social_issues',
    word: '貧困', translation: 'poverty', partOfSpeech: 'noun',
    pronunciation: 'pín kùn',
    exampleSentence: '政府制定了消除貧困的计划。', exampleTranslation: 'The government has formulated a plan to eliminate poverty.',
  },
  {
    id: 'zh_b2_v052', language: lang, level, category: 'social_issues',
    word: '福利', translation: 'welfare / benefits', partOfSpeech: 'noun',
    pronunciation: 'fú lì',
    exampleSentence: '這家公司的员工福利很好。', exampleTranslation: 'This company\'s employee benefits are very good.',
  },
  {
    id: 'zh_b2_v053', language: lang, level, category: 'social_issues',
    word: '犯罪', translation: 'crime / to commit a crime', partOfSpeech: 'noun',
    pronunciation: 'fàn zuì',
    exampleSentence: '犯罪率近年来有所下降。', exampleTranslation: 'The crime rate has decreased in recent years.',
  },
  {
    id: 'zh_b2_v054', language: lang, level, category: 'social_issues',
    word: '失业', translation: 'unemployment / to lose one\'s job', partOfSpeech: 'noun',
    pronunciation: 'shī yè',
    exampleSentence: '失业是一個嚴重的社會问题。', exampleTranslation: 'Unemployment is a serious social problem.',
  },
  {
    id: 'zh_b2_v055', language: lang, level, category: 'social_issues',
    word: '環保', translation: 'environmental protection', partOfSpeech: 'noun',
    pronunciation: 'huán bǎo',
    exampleSentence: '越来越多的人開始關注環保。', exampleTranslation: 'More and more people are starting to pay attention to environmental protection.',
  },
];

// ── Export ───────────────────────────────────────────────────────

export const CHINESE_B2_VOCAB: VocabWord[] = [
  ...politics,
  ...science,
  ...business,
  ...healthAdvanced,
  ...arts,
  ...emotionsAdvanced,
  ...socialIssues,
];
