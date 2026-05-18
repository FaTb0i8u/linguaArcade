/**
 * Chinese (Mandarin) C1 Grammar Rules
 *
 * Advanced/proficient grammar concepts for CEFR C1 / HSK 5-6 learners.
 * Covers classical particles in modern Chinese, 成語 usage, 以...為 structures,
 * formal connectors, rhetorical questions, advanced passives, emphatic
 * structures, and academic writing style.
 */

import type { GrammarRule } from '../../../types';

const lang = 'zh' as const;
const level = 'C1' as const;

export const CHINESE_C1_GRAMMAR: GrammarRule[] = [
  {
    id: 'zh_c1_g001', language: lang, level,
    title: 'Classical Particles in Modern Chinese (之/而/則/乃)',
    explanation:
      'Several classical Chinese (文言文) particles survive in modern formal writing, ' +
      'proverbs, and fixed expressions. Mastering them is essential for reading news, ' +
      'official documents, and academic papers.\n\n' +
      '• 之 (zhī) — replaces 的 as possessive or serves as a pronoun ("it")\n' +
      '  學習之目的 = the purpose of learning\n' +
      '• 而 (ér) — connects clauses as "but" or "and"; links manner to action\n' +
      '  不勞而獲 = gain without effort (lit. not-work-but-gain)\n' +
      '• 則 (zé) — "then" in conditional/contrastive sentences\n' +
      '  欲速則不達 = haste makes waste\n' +
      '• 乃 (nǎi) — "is" or "then"; highly literary, mostly in proverbs\n' +
      '  失败乃成功之母 = failure is the mother of success\n\n' +
      'These particles appear in formal registers — avoid them in casual conversation ' +
      'except in well-known set phrases.',
    examples: [
      { target: '學習之目的在于應用。(Xuéxí zhī mùdì zàiyú yìngyòng.)', english: 'The purpose of learning lies in application.' },
      { target: '不勞而獲是不道德的。(Bù láo ér huò shì bú dàodé de.)', english: 'Getting something without working for it is immoral.' },
      { target: '欲速則不達。(Yù sù zé bù dá.)', english: 'Haste makes waste. (If you desire speed, you won\'t reach your goal.)' },
    ],
  },
  {
    id: 'zh_c1_g002', language: lang, level,
    title: '成語 (Four-Character Idioms) — Structure, Origins & Usage',
    explanation:
      'Chéngyǔ (成語) are fixed four-character idiomatic expressions originating from ' +
      'classical stories, fables, and historical texts.\n\n' +
      'Structure:\n' +
      '• Always exactly 4 characters — never broken apart or rearranged\n' +
      '• Often parallel: AB + CD where A↔C and B↔D are related\n' +
      '  e.g. 有(have)備(preparation)無(no)患(worry)\n\n' +
      'Origins (典故):\n' +
      '• 画龍點睛 — from a story of a painter whose dragons flew away when he added eyes\n' +
      '• 過猶不及 — from Confucius (《論語》)\n\n' +
      'Usage:\n' +
      '• Appropriate in formal writing, speeches, editorials, educated conversation\n' +
      '• Using 1–2 naturally shows high proficiency\n' +
      '• Overusing them or using them in casual chat can sound pretentious',
    examples: [
      { target: '這個方案一舉兩得，既省時又省錢。(Zhège fāng\'àn yì jǔ liǎng dé, jì shěng shí yòu shěng qián.)', english: 'This plan kills two birds with one stone — it saves both time and money.' },
      { target: '過猶不及，做事要講究適度。(Guò yóu bù jí, zuòshì yào jiǎngjiū shìdù.)', english: 'Too much is as bad as too little — one should value moderation in all things.' },
      { target: '結尾這句話起到了画龍點睛的作用。(Jiéwěi zhè jù huà qǐ dào le huà lóng diǎn jīng de zuòyòng.)', english: 'This final sentence served as the finishing touch.' },
    ],
  },
  {
    id: 'zh_c1_g003', language: lang, level,
    title: '以...為 / 將...作為 (Taking X as Y)',
    explanation:
      'A formal construction used to express "taking/regarding X as Y". Common in ' +
      'policy statements, mission statements, and academic writing.\n\n' +
      'Structure: 以 + Noun A + 為 + Noun B (role/quality)\n' +
      '• 以教育為本 — taking education as fundamental\n' +
      '• 以人為本 — people-oriented (taking people as the basis)\n\n' +
      'Variant: 將...作為\n' +
      '• 將教育作為國家發展的基礎 — taking education as the foundation of national development\n\n' +
      '以...為 is more formal and literary; 將...作為 is slightly more modern but still formal.',
    examples: [
      { target: '國家以教育為本，大力發展教育事业。(Guójiā yǐ jiàoyù wéi běn, dàlì fāzhǎn jiàoyù shìyè.)', english: 'The nation takes education as its foundation and vigorously develops the education sector.' },
      { target: '他以誠信為原則，赢得了大家的信任。(Tā yǐ chéngxìn wéi yuánzé, yíngdé le dàjiā de xìnrèn.)', english: 'He takes integrity as his principle and has earned everyone\'s trust.' },
      { target: '本研究將語料库數據作為主要分析對象。(Běn yánjiū jiāng yǔliàokù shùjù zuòwéi zhǔyào fēnxī duìxiàng.)', english: 'This research takes corpus data as its primary analysis object.' },
    ],
  },
  {
    id: 'zh_c1_g004', language: lang, level,
    title: 'Formal Connectors — 鉴于, 基于, 就...而言, 與其說...不如說',
    explanation:
      'Advanced connectors used in formal writing and speeches to introduce reasons, ' +
      'perspectives, and nuanced comparisons.\n\n' +
      '• 鉴于 (jiànyú) — "in view of / considering"\n' +
      '  鉴于目前的形勢... (In view of the current situation...)\n' +
      '• 基于 (jīyú) — "based on"\n' +
      '  基于以上分析... (Based on the above analysis...)\n' +
      '• 就...而言 (jiù...éryán) — "in terms of / as far as X is concerned"\n' +
      '  就經濟發展而言... (In terms of economic development...)\n' +
      '• 與其說...不如說 (yǔqíshuō...bùrúshuō) — "rather than saying X, it would be ' +
      'better to say Y"\n' +
      '  與其說他懶，不如說他缺乏動力。(Rather than saying he\'s lazy, it\'s better to say ' +
      'he lacks motivation.)\n\n' +
      'These connectors significantly elevate the formality and precision of your writing.',
    examples: [
      { target: '鉴于當前的經濟形勢，政府決定出台新政策。(Jiànyú dāngqián de jīngjì xíngshì, zhèngfǔ juédìng chūtái xīn zhèngcè.)', english: 'In view of the current economic situation, the government decided to introduce new policies.' },
      { target: '就教育質量而言，這所大學名列前茅。(Jiù jiàoyù zhìliàng éryán, zhè suǒ dàxué míngliè qiánmáo.)', english: 'In terms of educational quality, this university ranks among the top.' },
      { target: '與其說他聪明，不如說他非常努力。(Yǔqíshuō tā cōngming, bùrúshuō tā fēicháng nǔlì.)', english: 'Rather than saying he\'s smart, it would be better to say he\'s extremely hard-working.' },
    ],
  },
  {
    id: 'zh_c1_g005', language: lang, level,
    title: 'Rhetorical Questions — 難道...吗, 不是...吗, 何必',
    explanation:
      'Rhetorical questions in Chinese express strong assertions, emphasis, or ' +
      'suggestions. They do NOT seek information — they make a point.\n\n' +
      '• 難道...吗 (nándào...ma) — "surely / could it be that...?" (implies the opposite)\n' +
      '  難道你不知道吗？ = Surely you know! (You must know!)\n' +
      '• 不是...吗 (búshì...ma) — "isn\'t it...?" (reminds of a known fact)\n' +
      '  你不是說過要来吗？ = Didn\'t you say you would come?\n' +
      '• 何必 (hébì) — "why bother / there\'s no need to" (literary/formal)\n' +
      '  何必這么紧張？ = Why be so nervous? (There\'s no need.)\n\n' +
      '難道 is the strongest, expressing surprise or indignation that someone doesn\'t see ' +
      'the obvious truth.',
    examples: [
      { target: '難道你不明白這個道理吗？(Nándào nǐ bù míngbai zhège dàolǐ ma?)', english: 'Surely you understand this principle? (You must understand!)' },
      { target: '你不是答應過我吗？(Nǐ búshì dāying guò wǒ ma?)', english: 'Didn\'t you promise me? (You did promise me!)' },
      { target: '何必為這種小事生氣呢？(Hébì wèi zhè zhǒng xiǎoshì shēngqì ne?)', english: 'Why bother getting angry over such a small matter?' },
    ],
  },
  {
    id: 'zh_c1_g006', language: lang, level,
    title: 'Advanced Passive Constructions — 受到, 遭到, 得到, 為...所',
    explanation:
      'Beyond the basic 被 passive, C1 learners should master nuanced passive ' +
      'constructions that convey different shades of meaning.\n\n' +
      '• 受到 (shòudào) — "receive" (neutral to positive passive)\n' +
      '  受到歡迎 (to be welcomed), 受到關注 (to receive attention)\n' +
      '• 遭到 (zāodào) — "suffer / meet with" (negative passive)\n' +
      '  遭到批評 (to be criticised), 遭到拒絕 (to be rejected)\n' +
      '• 得到 (dédào) — "obtain / receive" (positive result passive)\n' +
      '  得到認可 (to gain recognition), 得到支持 (to receive support)\n' +
      '• 為...所 (wéi...suǒ) — literary passive, very formal\n' +
      '  為世人所知 (known by all), 為人所敬仰 (admired by people)\n\n' +
      'Choose the construction based on whether the outcome is positive, negative, ' +
      'or neutral, and the desired level of formality.',
    examples: [
      { target: '這部电影受到了觀眾的熱烈歡迎。(Zhè bù diànyǐng shòudào le guānzhòng de rèliè huānyíng.)', english: 'This film received an enthusiastic welcome from the audience.' },
      { target: '他的提議遭到了強烈的反對。(Tā de tíyì zāodào le qiángliè de fǎnduì.)', english: 'His proposal met with strong opposition.' },
      { target: '這位科學家的成就為世人所敬仰。(Zhè wèi kēxuéjiā de chéngjiù wéi shìrén suǒ jìngyǎng.)', english: 'This scientist\'s achievements are admired by all.' },
    ],
  },
  {
    id: 'zh_c1_g007', language: lang, level,
    title: 'Emphatic Structures — 正是, 確實, 恰恰, 偏偏',
    explanation:
      'These adverbs add emphasis, precision, or unexpected contrast to statements.\n\n' +
      '• 正是 (zhèng shì) — "precisely / exactly / it is precisely"\n' +
      '  正是這個原因... (It is precisely for this reason...)\n' +
      '• 確實 (quèshí) — "indeed / truly / it is true that"\n' +
      '  他確實很努力。(He is indeed very hard-working.)\n' +
      '• 恰恰 (qiàqià) — "exactly / as it happens" (often with surprising precision)\n' +
      '  恰恰相反 (exactly the opposite)\n' +
      '• 偏偏 (piānpiān) — "contrary to expectations / just when you don\'t want it"\n' +
      '  我不想见他，他偏偏来了。(I didn\'t want to see him, but he came anyway.)\n\n' +
      '偏偏 expresses frustration at circumstances going against one\'s wishes.',
    examples: [
      { target: '正是因為有了大家的支持，項目才能成功。(Zhèng shì yīnwèi yǒu le dàjiā de zhīchí, xiàngmù cái néng chénggōng.)', english: 'It is precisely because of everyone\'s support that the project could succeed.' },
      { target: '事實恰恰相反。(Shìshí qiàqià xiāngfǎn.)', english: 'The fact is exactly the opposite.' },
      { target: '我带了伞的那天偏偏没下雨。(Wǒ dài le sǎn de nà tiān piānpiān méi xià yǔ.)', english: 'The day I brought an umbrella, it just so happened not to rain.' },
    ],
  },
  {
    id: 'zh_c1_g008', language: lang, level,
    title: 'Academic Writing Style — Introductions, Conclusions & Hedging',
    explanation:
      'Academic Chinese has distinctive structures for introducing topics, presenting ' +
      'evidence, hedging claims, and drawing conclusions.\n\n' +
      'Introductions / Evidence:\n' +
      '• 據研究表明 (jù yánjiū biǎomíng) — "according to research / studies show that"\n' +
      '• 眾所周知 (zhòng suǒ zhōu zhī) — "as is well known"\n' +
      '• 值得注意的是 (zhíde zhùyì de shì) — "it is worth noting that"\n\n' +
      'Conclusions / Transitions:\n' +
      '• 由此可见 (yóucǐ kějiàn) — "from this we can see that"\n' +
      '• 綜上所述 (zōng shàng suǒ shù) — "to summarise the above / in conclusion"\n' +
      '• 總而言之 (zǒng ér yán zhī) — "all in all / in a word"\n\n' +
      'Hedging:\n' +
      '• 在一定程度上 (zài yídìng chéngdù shang) — "to a certain extent"\n' +
      '• 可能 / 或許 — "possibly / perhaps"',
    examples: [
      { target: '據研究表明，雙語教育對兒童認知發展有積極影響。(Jù yánjiū biǎomíng, shuāngyǔ jiàoyù duì értóng rènzhī fāzhǎn yǒu jījí yǐngxiǎng.)', english: 'Research shows that bilingual education has a positive impact on children\'s cognitive development.' },
      { target: '由此可见，經濟增長并不等于生活質量的提高。(Yóucǐ kějiàn, jīngjì zēngzhǎng bìng bù děngyú shēnghuó zhìliàng de tígāo.)', english: 'From this we can see that economic growth does not equal improvement in quality of life.' },
      { target: '綜上所述，本文認為教育改革勢在必行。(Zōng shàng suǒ shù, běn wén rènwéi jiàoyù gǎigé shì zài bì xíng.)', english: 'To summarise the above, this paper argues that education reform is imperative.' },
    ],
  },
];
