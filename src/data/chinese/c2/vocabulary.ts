/**
 * Chinese (Mandarin) C2 / HSK 6+ Mastery Vocabulary
 *
 * Organised by thematic category, matching CEFR C2 / HSK 6+ expectations.
 * Each word includes part of speech, pinyin with tone marks,
 * an example sentence in simplified Chinese, and its English translation.
 *
 * Categories: diplomacy, linguistics, psychology, formal_register,
 *             proverbs, nuanced_verbs.
 */

import type { VocabWord } from '../../../types';

const lang = 'zh' as const;
const level = 'C2' as const;

// ── Diplomacy ───────────────────────────────────────────────────

const diplomacy: VocabWord[] = [
  {
    id: 'zh_c2_v001', language: lang, level, category: 'diplomacy',
    word: '外交', translation: 'diplomacy / foreign affairs', partOfSpeech: 'noun',
    pronunciation: 'wài jiāo',
    exampleSentence: '两国之间的外交关系日趋紧张。', exampleTranslation: 'Diplomatic relations between the two countries are growing increasingly tense.',
  },
  {
    id: 'zh_c2_v002', language: lang, level, category: 'diplomacy',
    word: '条约', translation: 'treaty / pact', partOfSpeech: 'noun',
    pronunciation: 'tiáo yuē',
    exampleSentence: '双方于昨日正式签署了和平条约。', exampleTranslation: 'Both parties formally signed the peace treaty yesterday.',
  },
  {
    id: 'zh_c2_v003', language: lang, level, category: 'diplomacy',
    word: '主权', translation: 'sovereignty', partOfSpeech: 'noun',
    pronunciation: 'zhǔ quán',
    exampleSentence: '国家主权不容任何外部势力侵犯。', exampleTranslation: 'National sovereignty must not be violated by any external force.',
  },
  {
    id: 'zh_c2_v004', language: lang, level, category: 'diplomacy',
    word: '制裁', translation: 'sanctions / to sanction', partOfSpeech: 'noun',
    pronunciation: 'zhì cái',
    exampleSentence: '国际社会对该国实施了经济制裁。', exampleTranslation: 'The international community imposed economic sanctions on that country.',
  },
  {
    id: 'zh_c2_v005', language: lang, level, category: 'diplomacy',
    word: '谈判', translation: 'negotiation / to negotiate', partOfSpeech: 'noun',
    pronunciation: 'tán pàn',
    exampleSentence: '经过数轮谈判，双方终于达成协议。', exampleTranslation: 'After several rounds of negotiations, both sides finally reached an agreement.',
  },
  {
    id: 'zh_c2_v006', language: lang, level, category: 'diplomacy',
    word: '大使', translation: 'ambassador', partOfSpeech: 'noun',
    pronunciation: 'dà shǐ',
    exampleSentence: '新任大使今日向总统递交了国书。', exampleTranslation: 'The newly appointed ambassador presented credentials to the president today.',
  },
  {
    id: 'zh_c2_v007', language: lang, level, category: 'diplomacy',
    word: '共识', translation: 'consensus', partOfSpeech: 'noun',
    pronunciation: 'gòng shí',
    exampleSentence: '各方在气候问题上达成了广泛共识。', exampleTranslation: 'All parties reached a broad consensus on climate issues.',
  },
];

// ── Linguistics ─────────────────────────────────────────────────

const linguistics: VocabWord[] = [
  {
    id: 'zh_c2_v008', language: lang, level, category: 'linguistics',
    word: '语法', translation: 'grammar', partOfSpeech: 'noun',
    pronunciation: 'yǔ fǎ',
    exampleSentence: '汉语语法与印欧语系有着本质区别。', exampleTranslation: 'Chinese grammar differs fundamentally from the Indo-European language family.',
  },
  {
    id: 'zh_c2_v009', language: lang, level, category: 'linguistics',
    word: '语义学', translation: 'semantics', partOfSpeech: 'noun',
    pronunciation: 'yǔ yì xué',
    exampleSentence: '语义学研究语言符号所表达的意义。', exampleTranslation: 'Semantics studies the meaning expressed by linguistic signs.',
  },
  {
    id: 'zh_c2_v010', language: lang, level, category: 'linguistics',
    word: '语用学', translation: 'pragmatics', partOfSpeech: 'noun',
    pronunciation: 'yǔ yòng xué',
    exampleSentence: '语用学关注语言在具体语境中的使用。', exampleTranslation: 'Pragmatics focuses on how language is used in specific contexts.',
  },
  {
    id: 'zh_c2_v011', language: lang, level, category: 'linguistics',
    word: '方言', translation: 'dialect', partOfSpeech: 'noun',
    pronunciation: 'fāng yán',
    exampleSentence: '中国拥有上百种相互难以沟通的方言。', exampleTranslation: 'China has hundreds of mutually unintelligible dialects.',
  },
  {
    id: 'zh_c2_v012', language: lang, level, category: 'linguistics',
    word: '词源', translation: 'etymology', partOfSpeech: 'noun',
    pronunciation: 'cí yuán',
    exampleSentence: '追溯词源有助于深入理解词语的本义。', exampleTranslation: 'Tracing etymology helps deepen understanding of a word\'s original meaning.',
  },
  {
    id: 'zh_c2_v013', language: lang, level, category: 'linguistics',
    word: '形态学', translation: 'morphology', partOfSpeech: 'noun',
    pronunciation: 'xíng tài xué',
    exampleSentence: '汉语被认为是一种形态学上的孤立语。', exampleTranslation: 'Chinese is considered a morphologically isolating language.',
  },
  {
    id: 'zh_c2_v014', language: lang, level, category: 'linguistics',
    word: '音韵学', translation: 'phonology', partOfSpeech: 'noun',
    pronunciation: 'yīn yùn xué',
    exampleSentence: '音韵学是研究语言声音系统的学科。', exampleTranslation: 'Phonology is the discipline that studies the sound system of languages.',
  },
];

// ── Psychology ───────────────────────────────────────────────────

const psychology: VocabWord[] = [
  {
    id: 'zh_c2_v015', language: lang, level, category: 'psychology',
    word: '潜意识', translation: 'subconscious / the unconscious', partOfSpeech: 'noun',
    pronunciation: 'qián yì shí',
    exampleSentence: '弗洛伊德认为潜意识在很大程度上支配人的行为。', exampleTranslation: 'Freud believed that the subconscious governs human behaviour to a great extent.',
  },
  {
    id: 'zh_c2_v016', language: lang, level, category: 'psychology',
    word: '认知', translation: 'cognition / cognitive', partOfSpeech: 'noun',
    pronunciation: 'rèn zhī',
    exampleSentence: '认知科学跨越了心理学与人工智能的边界。', exampleTranslation: 'Cognitive science crosses the boundaries of psychology and artificial intelligence.',
  },
  {
    id: 'zh_c2_v017', language: lang, level, category: 'psychology',
    word: '动机', translation: 'motivation / motive', partOfSpeech: 'noun',
    pronunciation: 'dòng jī',
    exampleSentence: '研究表明内在动机比外在奖励更能促进学习。', exampleTranslation: 'Research shows that intrinsic motivation promotes learning more than external rewards.',
  },
  {
    id: 'zh_c2_v018', language: lang, level, category: 'psychology',
    word: '创伤', translation: 'trauma', partOfSpeech: 'noun',
    pronunciation: 'chuāng shāng',
    exampleSentence: '童年创伤可能对成年后的心理健康产生深远影响。', exampleTranslation: 'Childhood trauma can have a profound impact on mental health in adulthood.',
  },
  {
    id: 'zh_c2_v019', language: lang, level, category: 'psychology',
    word: '自我', translation: 'ego / self', partOfSpeech: 'noun',
    pronunciation: 'zì wǒ',
    exampleSentence: '健康的自我认知是人格成熟的重要标志。', exampleTranslation: 'Healthy self-awareness is an important sign of personality maturity.',
  },
  {
    id: 'zh_c2_v020', language: lang, level, category: 'psychology',
    word: '偏见', translation: 'prejudice / bias', partOfSpeech: 'noun',
    pronunciation: 'piān jiàn',
    exampleSentence: '认知偏见常常在不知不觉中影响我们的判断。', exampleTranslation: 'Cognitive biases often influence our judgement unconsciously.',
  },
  {
    id: 'zh_c2_v021', language: lang, level, category: 'psychology',
    word: '身份认同', translation: 'identity / sense of identity', partOfSpeech: 'noun',
    pronunciation: 'shēn fèn rèn tóng',
    exampleSentence: '移民常常面临复杂的身份认同问题。', exampleTranslation: 'Immigrants often face complex issues of identity.',
  },
];

// ── Formal Register ─────────────────────────────────────────────

const formalRegister: VocabWord[] = [
  {
    id: 'zh_c2_v022', language: lang, level, category: 'formal_register',
    word: '斟酌', translation: 'to deliberate carefully / to weigh (one\'s words)', partOfSpeech: 'verb',
    pronunciation: 'zhēn zhuó',
    exampleSentence: '这份声明的措辞需要反复斟酌。', exampleTranslation: 'The wording of this statement needs to be deliberated carefully.',
  },
  {
    id: 'zh_c2_v023', language: lang, level, category: 'formal_register',
    word: '敦促', translation: 'to urge / to press', partOfSpeech: 'verb',
    pronunciation: 'dūn cù',
    exampleSentence: '联合国敦促各方立即停火。', exampleTranslation: 'The United Nations urged all parties to immediately cease fire.',
  },
  {
    id: 'zh_c2_v024', language: lang, level, category: 'formal_register',
    word: '视为', translation: 'to regard as / to view as', partOfSpeech: 'verb',
    pronunciation: 'shì wéi',
    exampleSentence: '该协议被视为两国关系的新起点。', exampleTranslation: 'The agreement was regarded as a new starting point for bilateral relations.',
  },
  {
    id: 'zh_c2_v025', language: lang, level, category: 'formal_register',
    word: '征收', translation: 'to levy / to impose (tax)', partOfSpeech: 'verb',
    pronunciation: 'zhēng shōu',
    exampleSentence: '政府决定对高收入群体征收附加税。', exampleTranslation: 'The government decided to levy a surcharge on high-income groups.',
  },
  {
    id: 'zh_c2_v026', language: lang, level, category: 'formal_register',
    word: '遵循', translation: 'to comply with / to follow', partOfSpeech: 'verb',
    pronunciation: 'zūn xún',
    exampleSentence: '所有成员国必须遵循国际法的基本原则。', exampleTranslation: 'All member states must comply with the fundamental principles of international law.',
  },
  {
    id: 'zh_c2_v027', language: lang, level, category: 'formal_register',
    word: '履行', translation: 'to fulfil / to carry out (duties)', partOfSpeech: 'verb',
    pronunciation: 'lǚ xíng',
    exampleSentence: '缔约方应当切实履行条约规定的义务。', exampleTranslation: 'Contracting parties shall faithfully fulfil obligations stipulated in the treaty.',
  },
  {
    id: 'zh_c2_v028', language: lang, level, category: 'formal_register',
    word: '审议', translation: 'to deliberate / to review (formally)', partOfSpeech: 'verb',
    pronunciation: 'shěn yì',
    exampleSentence: '委员会将于下周审议该提案。', exampleTranslation: 'The committee will deliberate on the proposal next week.',
  },
];

// ── Proverbs / 成语 ─────────────────────────────────────────────

const proverbs: VocabWord[] = [
  {
    id: 'zh_c2_v029', language: lang, level, category: 'proverbs',
    word: '塞翁失马', translation: 'a blessing in disguise (lit. the old man at the frontier lost his horse)', partOfSpeech: 'noun',
    pronunciation: 'sài wēng shī mǎ',
    exampleSentence: '虽然落选了，但塞翁失马，他因此发现了更好的机会。', exampleTranslation: 'Although he lost the election, it was a blessing in disguise — he discovered a better opportunity.',
  },
  {
    id: 'zh_c2_v030', language: lang, level, category: 'proverbs',
    word: '对牛弹琴', translation: 'to cast pearls before swine (lit. to play the lute to a cow)', partOfSpeech: 'noun',
    pronunciation: 'duì niú tán qín',
    exampleSentence: '跟他讲量子物理简直是对牛弹琴。', exampleTranslation: 'Explaining quantum physics to him is like casting pearls before swine.',
  },
  {
    id: 'zh_c2_v031', language: lang, level, category: 'proverbs',
    word: '卧薪尝胆', translation: 'to endure hardship to prepare for revenge (lit. to sleep on brushwood and taste gall)', partOfSpeech: 'noun',
    pronunciation: 'wò xīn cháng dǎn',
    exampleSentence: '经历了破产后，他卧薪尝胆十年，终于东山再起。', exampleTranslation: 'After going bankrupt, he endured a decade of hardship and finally made a comeback.',
  },
  {
    id: 'zh_c2_v032', language: lang, level, category: 'proverbs',
    word: '杞人忧天', translation: 'to worry needlessly (lit. the man of Qǐ who worried the sky would fall)', partOfSpeech: 'noun',
    pronunciation: 'qǐ rén yōu tiān',
    exampleSentence: '不要杞人忧天，事情没有你想象的那么糟糕。', exampleTranslation: 'Don\'t worry needlessly — things aren\'t as bad as you imagine.',
  },
  {
    id: 'zh_c2_v033', language: lang, level, category: 'proverbs',
    word: '守株待兔', translation: 'to wait for windfalls (lit. to guard a tree stump waiting for a rabbit)', partOfSpeech: 'noun',
    pronunciation: 'shǒu zhū dài tù',
    exampleSentence: '创业不能守株待兔，要主动寻找市场机遇。', exampleTranslation: 'In business you can\'t just wait for windfalls — you must actively seek market opportunities.',
  },
  {
    id: 'zh_c2_v034', language: lang, level, category: 'proverbs',
    word: '刻舟求剑', translation: 'to stubbornly stick to old ways (lit. to carve the boat to find the sword)', partOfSpeech: 'noun',
    pronunciation: 'kè zhōu qiú jiàn',
    exampleSentence: '用旧方法解决新问题，无异于刻舟求剑。', exampleTranslation: 'Using old methods to solve new problems is no different from stubbornly clinging to outdated ways.',
  },
  {
    id: 'zh_c2_v035', language: lang, level, category: 'proverbs',
    word: '望梅止渴', translation: 'to console oneself with false hopes (lit. to quench thirst by gazing at plums)', partOfSpeech: 'noun',
    pronunciation: 'wàng méi zhǐ kě',
    exampleSentence: '空谈理想而不行动，不过是望梅止渴罢了。', exampleTranslation: 'Talking about ideals without acting is merely consoling yourself with false hopes.',
  },
  {
    id: 'zh_c2_v036', language: lang, level, category: 'proverbs',
    word: '亡羊补牢', translation: 'better late than never (lit. to mend the pen after losing a sheep)', partOfSpeech: 'noun',
    pronunciation: 'wáng yáng bǔ láo',
    exampleSentence: '虽然亡羊补牢，但现在采取措施还来得及。', exampleTranslation: 'Although it\'s after the fact, it\'s still not too late to take measures now.',
  },
];

// ── Nuanced Verbs ───────────────────────────────────────────────

const nuancedVerbs: VocabWord[] = [
  {
    id: 'zh_c2_v037', language: lang, level, category: 'nuanced_verbs',
    word: '涵盖', translation: 'to encompass / to cover', partOfSpeech: 'verb',
    pronunciation: 'hán gài',
    exampleSentence: '这份报告涵盖了经济、社会和环境三个方面。', exampleTranslation: 'This report encompasses economic, social, and environmental aspects.',
  },
  {
    id: 'zh_c2_v038', language: lang, level, category: 'nuanced_verbs',
    word: '侵袭', translation: 'to assail / to invade (disease, cold, etc.)', partOfSpeech: 'verb',
    pronunciation: 'qīn xí',
    exampleSentence: '寒潮侵袭了整个北方地区。', exampleTranslation: 'A cold wave assailed the entire northern region.',
  },
  {
    id: 'zh_c2_v039', language: lang, level, category: 'nuanced_verbs',
    word: '凝视', translation: 'to gaze (at) / to stare intently', partOfSpeech: 'verb',
    pronunciation: 'níng shì',
    exampleSentence: '她凝视着窗外，陷入了沉思。', exampleTranslation: 'She gazed out of the window, lost in deep thought.',
  },
  {
    id: 'zh_c2_v040', language: lang, level, category: 'nuanced_verbs',
    word: '超越', translation: 'to transcend / to surpass', partOfSpeech: 'verb',
    pronunciation: 'chāo yuè',
    exampleSentence: '艺术的价值在于超越时空的限制。', exampleTranslation: 'The value of art lies in transcending the limits of time and space.',
  },
  {
    id: 'zh_c2_v041', language: lang, level, category: 'nuanced_verbs',
    word: '贯彻', translation: 'to carry through / to implement thoroughly', partOfSpeech: 'verb',
    pronunciation: 'guàn chè',
    exampleSentence: '各部门必须贯彻执行中央的决策。', exampleTranslation: 'All departments must thoroughly implement the central government\'s decisions.',
  },
  {
    id: 'zh_c2_v042', language: lang, level, category: 'nuanced_verbs',
    word: '谴责', translation: 'to condemn / to denounce', partOfSpeech: 'verb',
    pronunciation: 'qiǎn zé',
    exampleSentence: '国际社会强烈谴责了这一暴力行为。', exampleTranslation: 'The international community strongly condemned this act of violence.',
  },
  {
    id: 'zh_c2_v043', language: lang, level, category: 'nuanced_verbs',
    word: '蕴含', translation: 'to embody / to contain (implicitly)', partOfSpeech: 'verb',
    pronunciation: 'yùn hán',
    exampleSentence: '这首古诗蕴含着深刻的哲理。', exampleTranslation: 'This classical poem embodies profound philosophical truth.',
  },
];

// ── Export ───────────────────────────────────────────────────────

export const CHINESE_C2_VOCAB: VocabWord[] = [
  ...diplomacy,
  ...linguistics,
  ...psychology,
  ...formalRegister,
  ...proverbs,
  ...nuancedVerbs,
];
