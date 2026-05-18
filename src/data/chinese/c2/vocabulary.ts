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
    exampleSentence: '兩國之間的外交關系日趨紧張。', exampleTranslation: 'Diplomatic relations between the two countries are growing increasingly tense.',
  },
  {
    id: 'zh_c2_v002', language: lang, level, category: 'diplomacy',
    word: '条約', translation: 'treaty / pact', partOfSpeech: 'noun',
    pronunciation: 'tiáo yuē',
    exampleSentence: '雙方于昨日正式簽署了和平条約。', exampleTranslation: 'Both parties formally signed the peace treaty yesterday.',
  },
  {
    id: 'zh_c2_v003', language: lang, level, category: 'diplomacy',
    word: '主權', translation: 'sovereignty', partOfSpeech: 'noun',
    pronunciation: 'zhǔ quán',
    exampleSentence: '國家主權不容任何外部勢力侵犯。', exampleTranslation: 'National sovereignty must not be violated by any external force.',
  },
  {
    id: 'zh_c2_v004', language: lang, level, category: 'diplomacy',
    word: '制裁', translation: 'sanctions / to sanction', partOfSpeech: 'noun',
    pronunciation: 'zhì cái',
    exampleSentence: '國际社會對該國實施了經濟制裁。', exampleTranslation: 'The international community imposed economic sanctions on that country.',
  },
  {
    id: 'zh_c2_v005', language: lang, level, category: 'diplomacy',
    word: '談判', translation: 'negotiation / to negotiate', partOfSpeech: 'noun',
    pronunciation: 'tán pàn',
    exampleSentence: '經過數輪談判，雙方終于達成協議。', exampleTranslation: 'After several rounds of negotiations, both sides finally reached an agreement.',
  },
  {
    id: 'zh_c2_v006', language: lang, level, category: 'diplomacy',
    word: '大使', translation: 'ambassador', partOfSpeech: 'noun',
    pronunciation: 'dà shǐ',
    exampleSentence: '新任大使今日向總統遞交了國书。', exampleTranslation: 'The newly appointed ambassador presented credentials to the president today.',
  },
  {
    id: 'zh_c2_v007', language: lang, level, category: 'diplomacy',
    word: '共識', translation: 'consensus', partOfSpeech: 'noun',
    pronunciation: 'gòng shí',
    exampleSentence: '各方在氣候问题上達成了廣氾共識。', exampleTranslation: 'All parties reached a broad consensus on climate issues.',
  },
];

// ── Linguistics ─────────────────────────────────────────────────

const linguistics: VocabWord[] = [
  {
    id: 'zh_c2_v008', language: lang, level, category: 'linguistics',
    word: '語法', translation: 'grammar', partOfSpeech: 'noun',
    pronunciation: 'yǔ fǎ',
    exampleSentence: '汉語語法與印欧語系有着本質區别。', exampleTranslation: 'Chinese grammar differs fundamentally from the Indo-European language family.',
  },
  {
    id: 'zh_c2_v009', language: lang, level, category: 'linguistics',
    word: '語義學', translation: 'semantics', partOfSpeech: 'noun',
    pronunciation: 'yǔ yì xué',
    exampleSentence: '語義學研究語言符號所表達的意義。', exampleTranslation: 'Semantics studies the meaning expressed by linguistic signs.',
  },
  {
    id: 'zh_c2_v010', language: lang, level, category: 'linguistics',
    word: '語用學', translation: 'pragmatics', partOfSpeech: 'noun',
    pronunciation: 'yǔ yòng xué',
    exampleSentence: '語用學關注語言在具體語境中的使用。', exampleTranslation: 'Pragmatics focuses on how language is used in specific contexts.',
  },
  {
    id: 'zh_c2_v011', language: lang, level, category: 'linguistics',
    word: '方言', translation: 'dialect', partOfSpeech: 'noun',
    pronunciation: 'fāng yán',
    exampleSentence: '中國擁有上百種相互難以溝通的方言。', exampleTranslation: 'China has hundreds of mutually unintelligible dialects.',
  },
  {
    id: 'zh_c2_v012', language: lang, level, category: 'linguistics',
    word: '詞源', translation: 'etymology', partOfSpeech: 'noun',
    pronunciation: 'cí yuán',
    exampleSentence: '追溯詞源有助于深入理解詞語的本義。', exampleTranslation: 'Tracing etymology helps deepen understanding of a word\'s original meaning.',
  },
  {
    id: 'zh_c2_v013', language: lang, level, category: 'linguistics',
    word: '形態學', translation: 'morphology', partOfSpeech: 'noun',
    pronunciation: 'xíng tài xué',
    exampleSentence: '汉語被認為是一種形態學上的孤立語。', exampleTranslation: 'Chinese is considered a morphologically isolating language.',
  },
  {
    id: 'zh_c2_v014', language: lang, level, category: 'linguistics',
    word: '音韵學', translation: 'phonology', partOfSpeech: 'noun',
    pronunciation: 'yīn yùn xué',
    exampleSentence: '音韵學是研究語言声音系統的學科。', exampleTranslation: 'Phonology is the discipline that studies the sound system of languages.',
  },
];

// ── Psychology ───────────────────────────────────────────────────

const psychology: VocabWord[] = [
  {
    id: 'zh_c2_v015', language: lang, level, category: 'psychology',
    word: '潜意識', translation: 'subconscious / the unconscious', partOfSpeech: 'noun',
    pronunciation: 'qián yì shí',
    exampleSentence: '弗洛伊德認為潜意識在很大程度上支配人的行為。', exampleTranslation: 'Freud believed that the subconscious governs human behaviour to a great extent.',
  },
  {
    id: 'zh_c2_v016', language: lang, level, category: 'psychology',
    word: '認知', translation: 'cognition / cognitive', partOfSpeech: 'noun',
    pronunciation: 'rèn zhī',
    exampleSentence: '認知科學跨越了心理學與人工智能的邊界。', exampleTranslation: 'Cognitive science crosses the boundaries of psychology and artificial intelligence.',
  },
  {
    id: 'zh_c2_v017', language: lang, level, category: 'psychology',
    word: '動机', translation: 'motivation / motive', partOfSpeech: 'noun',
    pronunciation: 'dòng jī',
    exampleSentence: '研究表明内在動机比外在獎勵更能促進學習。', exampleTranslation: 'Research shows that intrinsic motivation promotes learning more than external rewards.',
  },
  {
    id: 'zh_c2_v018', language: lang, level, category: 'psychology',
    word: '創傷', translation: 'trauma', partOfSpeech: 'noun',
    pronunciation: 'chuāng shāng',
    exampleSentence: '童年創傷可能對成年后的心理健康產生深遠影響。', exampleTranslation: 'Childhood trauma can have a profound impact on mental health in adulthood.',
  },
  {
    id: 'zh_c2_v019', language: lang, level, category: 'psychology',
    word: '自我', translation: 'ego / self', partOfSpeech: 'noun',
    pronunciation: 'zì wǒ',
    exampleSentence: '健康的自我認知是人格成熟的重要標志。', exampleTranslation: 'Healthy self-awareness is an important sign of personality maturity.',
  },
  {
    id: 'zh_c2_v020', language: lang, level, category: 'psychology',
    word: '偏见', translation: 'prejudice / bias', partOfSpeech: 'noun',
    pronunciation: 'piān jiàn',
    exampleSentence: '認知偏见常常在不知不覺中影響我们的判斷。', exampleTranslation: 'Cognitive biases often influence our judgement unconsciously.',
  },
  {
    id: 'zh_c2_v021', language: lang, level, category: 'psychology',
    word: '身份認同', translation: 'identity / sense of identity', partOfSpeech: 'noun',
    pronunciation: 'shēn fèn rèn tóng',
    exampleSentence: '移民常常面臨复雜的身份認同问题。', exampleTranslation: 'Immigrants often face complex issues of identity.',
  },
];

// ── Formal Register ─────────────────────────────────────────────

const formalRegister: VocabWord[] = [
  {
    id: 'zh_c2_v022', language: lang, level, category: 'formal_register',
    word: '斟酌', translation: 'to deliberate carefully / to weigh (one\'s words)', partOfSpeech: 'verb',
    pronunciation: 'zhēn zhuó',
    exampleSentence: '這份声明的措辞需要反复斟酌。', exampleTranslation: 'The wording of this statement needs to be deliberated carefully.',
  },
  {
    id: 'zh_c2_v023', language: lang, level, category: 'formal_register',
    word: '敦促', translation: 'to urge / to press', partOfSpeech: 'verb',
    pronunciation: 'dūn cù',
    exampleSentence: '聯合國敦促各方立即停火。', exampleTranslation: 'The United Nations urged all parties to immediately cease fire.',
  },
  {
    id: 'zh_c2_v024', language: lang, level, category: 'formal_register',
    word: '視為', translation: 'to regard as / to view as', partOfSpeech: 'verb',
    pronunciation: 'shì wéi',
    exampleSentence: '該協議被視為兩國關系的新起點。', exampleTranslation: 'The agreement was regarded as a new starting point for bilateral relations.',
  },
  {
    id: 'zh_c2_v025', language: lang, level, category: 'formal_register',
    word: '徵收', translation: 'to levy / to impose (tax)', partOfSpeech: 'verb',
    pronunciation: 'zhēng shōu',
    exampleSentence: '政府決定對高收入群體徵收附加税。', exampleTranslation: 'The government decided to levy a surcharge on high-income groups.',
  },
  {
    id: 'zh_c2_v026', language: lang, level, category: 'formal_register',
    word: '遵循', translation: 'to comply with / to follow', partOfSpeech: 'verb',
    pronunciation: 'zūn xún',
    exampleSentence: '所有成员國必須遵循國际法的基本原則。', exampleTranslation: 'All member states must comply with the fundamental principles of international law.',
  },
  {
    id: 'zh_c2_v027', language: lang, level, category: 'formal_register',
    word: '履行', translation: 'to fulfil / to carry out (duties)', partOfSpeech: 'verb',
    pronunciation: 'lǚ xíng',
    exampleSentence: '缔約方應當切實履行条約規定的義務。', exampleTranslation: 'Contracting parties shall faithfully fulfil obligations stipulated in the treaty.',
  },
  {
    id: 'zh_c2_v028', language: lang, level, category: 'formal_register',
    word: '審議', translation: 'to deliberate / to review (formally)', partOfSpeech: 'verb',
    pronunciation: 'shěn yì',
    exampleSentence: '委员會將于下周審議該提案。', exampleTranslation: 'The committee will deliberate on the proposal next week.',
  },
];

// ── Proverbs / 成語 ─────────────────────────────────────────────

const proverbs: VocabWord[] = [
  {
    id: 'zh_c2_v029', language: lang, level, category: 'proverbs',
    word: '塞翁失马', translation: 'a blessing in disguise (lit. the old man at the frontier lost his horse)', partOfSpeech: 'noun',
    pronunciation: 'sài wēng shī mǎ',
    exampleSentence: '虽然落選了，但塞翁失马，他因此發現了更好的机會。', exampleTranslation: 'Although he lost the election, it was a blessing in disguise — he discovered a better opportunity.',
  },
  {
    id: 'zh_c2_v030', language: lang, level, category: 'proverbs',
    word: '對牛彈琴', translation: 'to cast pearls before swine (lit. to play the lute to a cow)', partOfSpeech: 'noun',
    pronunciation: 'duì niú tán qín',
    exampleSentence: '跟他講量子物理簡直是對牛彈琴。', exampleTranslation: 'Explaining quantum physics to him is like casting pearls before swine.',
  },
  {
    id: 'zh_c2_v031', language: lang, level, category: 'proverbs',
    word: '臥薪尝膽', translation: 'to endure hardship to prepare for revenge (lit. to sleep on brushwood and taste gall)', partOfSpeech: 'noun',
    pronunciation: 'wò xīn cháng dǎn',
    exampleSentence: '經歷了破產后，他臥薪尝膽十年，終于東山再起。', exampleTranslation: 'After going bankrupt, he endured a decade of hardship and finally made a comeback.',
  },
  {
    id: 'zh_c2_v032', language: lang, level, category: 'proverbs',
    word: '杞人憂天', translation: 'to worry needlessly (lit. the man of Qǐ who worried the sky would fall)', partOfSpeech: 'noun',
    pronunciation: 'qǐ rén yōu tiān',
    exampleSentence: '不要杞人憂天，事情没有你想象的那么糟糕。', exampleTranslation: 'Don\'t worry needlessly — things aren\'t as bad as you imagine.',
  },
  {
    id: 'zh_c2_v033', language: lang, level, category: 'proverbs',
    word: '守株待兔', translation: 'to wait for windfalls (lit. to guard a tree stump waiting for a rabbit)', partOfSpeech: 'noun',
    pronunciation: 'shǒu zhū dài tù',
    exampleSentence: '創业不能守株待兔，要主動尋找市場机遇。', exampleTranslation: 'In business you can\'t just wait for windfalls — you must actively seek market opportunities.',
  },
  {
    id: 'zh_c2_v034', language: lang, level, category: 'proverbs',
    word: '刻舟求劍', translation: 'to stubbornly stick to old ways (lit. to carve the boat to find the sword)', partOfSpeech: 'noun',
    pronunciation: 'kè zhōu qiú jiàn',
    exampleSentence: '用舊方法解決新问题，無異于刻舟求劍。', exampleTranslation: 'Using old methods to solve new problems is no different from stubbornly clinging to outdated ways.',
  },
  {
    id: 'zh_c2_v035', language: lang, level, category: 'proverbs',
    word: '望梅止渴', translation: 'to console oneself with false hopes (lit. to quench thirst by gazing at plums)', partOfSpeech: 'noun',
    pronunciation: 'wàng méi zhǐ kě',
    exampleSentence: '空談理想而不行動，不過是望梅止渴罷了。', exampleTranslation: 'Talking about ideals without acting is merely consoling yourself with false hopes.',
  },
  {
    id: 'zh_c2_v036', language: lang, level, category: 'proverbs',
    word: '亡羊補牢', translation: 'better late than never (lit. to mend the pen after losing a sheep)', partOfSpeech: 'noun',
    pronunciation: 'wáng yáng bǔ láo',
    exampleSentence: '虽然亡羊補牢，但現在采取措施還来得及。', exampleTranslation: 'Although it\'s after the fact, it\'s still not too late to take measures now.',
  },
];

// ── Nuanced Verbs ───────────────────────────────────────────────

const nuancedVerbs: VocabWord[] = [
  {
    id: 'zh_c2_v037', language: lang, level, category: 'nuanced_verbs',
    word: '涵蓋', translation: 'to encompass / to cover', partOfSpeech: 'verb',
    pronunciation: 'hán gài',
    exampleSentence: '這份報告涵蓋了經濟、社會和環境三個方面。', exampleTranslation: 'This report encompasses economic, social, and environmental aspects.',
  },
  {
    id: 'zh_c2_v038', language: lang, level, category: 'nuanced_verbs',
    word: '侵袭', translation: 'to assail / to invade (disease, cold, etc.)', partOfSpeech: 'verb',
    pronunciation: 'qīn xí',
    exampleSentence: '寒潮侵袭了整個北方地區。', exampleTranslation: 'A cold wave assailed the entire northern region.',
  },
  {
    id: 'zh_c2_v039', language: lang, level, category: 'nuanced_verbs',
    word: '凝視', translation: 'to gaze (at) / to stare intently', partOfSpeech: 'verb',
    pronunciation: 'níng shì',
    exampleSentence: '她凝視着窗外，陷入了沉思。', exampleTranslation: 'She gazed out of the window, lost in deep thought.',
  },
  {
    id: 'zh_c2_v040', language: lang, level, category: 'nuanced_verbs',
    word: '超越', translation: 'to transcend / to surpass', partOfSpeech: 'verb',
    pronunciation: 'chāo yuè',
    exampleSentence: '艺術的价值在于超越時空的限制。', exampleTranslation: 'The value of art lies in transcending the limits of time and space.',
  },
  {
    id: 'zh_c2_v041', language: lang, level, category: 'nuanced_verbs',
    word: '贯徹', translation: 'to carry through / to implement thoroughly', partOfSpeech: 'verb',
    pronunciation: 'guàn chè',
    exampleSentence: '各部門必須贯徹執行中央的決策。', exampleTranslation: 'All departments must thoroughly implement the central government\'s decisions.',
  },
  {
    id: 'zh_c2_v042', language: lang, level, category: 'nuanced_verbs',
    word: '谴责', translation: 'to condemn / to denounce', partOfSpeech: 'verb',
    pronunciation: 'qiǎn zé',
    exampleSentence: '國际社會強烈谴责了這一暴力行為。', exampleTranslation: 'The international community strongly condemned this act of violence.',
  },
  {
    id: 'zh_c2_v043', language: lang, level, category: 'nuanced_verbs',
    word: '蕴含', translation: 'to embody / to contain (implicitly)', partOfSpeech: 'verb',
    pronunciation: 'yùn hán',
    exampleSentence: '這首古詩蕴含着深刻的哲理。', exampleTranslation: 'This classical poem embodies profound philosophical truth.',
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
