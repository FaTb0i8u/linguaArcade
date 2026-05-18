/**
 * Chinese (Mandarin) C1 Grammar Rules
 *
 * Advanced/proficient grammar concepts for CEFR C1 / HSK 5-6 learners.
 * Covers classical particles in modern Chinese, 成语 usage, 以...为 structures,
 * formal connectors, rhetorical questions, advanced passives, emphatic
 * structures, and academic writing style.
 */

import type { GrammarRule } from '../../../types';

const lang = 'zh' as const;
const level = 'C1' as const;

export const CHINESE_C1_GRAMMAR: GrammarRule[] = [
  {
    id: 'zh_c1_g001', language: lang, level,
    title: 'Classical Particles in Modern Chinese (之/而/则/乃)',
    explanation:
      'Several classical Chinese (文言文) particles survive in modern formal writing, ' +
      'proverbs, and fixed expressions. Mastering them is essential for reading news, ' +
      'official documents, and academic papers.\n\n' +
      '• 之 (zhī) — replaces 的 as possessive or serves as a pronoun ("it")\n' +
      '  学习之目的 = the purpose of learning\n' +
      '• 而 (ér) — connects clauses as "but" or "and"; links manner to action\n' +
      '  不劳而获 = gain without effort (lit. not-work-but-gain)\n' +
      '• 则 (zé) — "then" in conditional/contrastive sentences\n' +
      '  欲速则不达 = haste makes waste\n' +
      '• 乃 (nǎi) — "is" or "then"; highly literary, mostly in proverbs\n' +
      '  失败乃成功之母 = failure is the mother of success\n\n' +
      'These particles appear in formal registers — avoid them in casual conversation ' +
      'except in well-known set phrases.',
    examples: [
      { target: '学习之目的在于应用。(Xuéxí zhī mùdì zàiyú yìngyòng.)', english: 'The purpose of learning lies in application.' },
      { target: '不劳而获是不道德的。(Bù láo ér huò shì bú dàodé de.)', english: 'Getting something without working for it is immoral.' },
      { target: '欲速则不达。(Yù sù zé bù dá.)', english: 'Haste makes waste. (If you desire speed, you won\'t reach your goal.)' },
    ],
  },
  {
    id: 'zh_c1_g002', language: lang, level,
    title: '成语 (Four-Character Idioms) — Structure, Origins & Usage',
    explanation:
      'Chéngyǔ (成语) are fixed four-character idiomatic expressions originating from ' +
      'classical stories, fables, and historical texts.\n\n' +
      'Structure:\n' +
      '• Always exactly 4 characters — never broken apart or rearranged\n' +
      '• Often parallel: AB + CD where A↔C and B↔D are related\n' +
      '  e.g. 有(have)备(preparation)无(no)患(worry)\n\n' +
      'Origins (典故):\n' +
      '• 画龙点睛 — from a story of a painter whose dragons flew away when he added eyes\n' +
      '• 过犹不及 — from Confucius (《论语》)\n\n' +
      'Usage:\n' +
      '• Appropriate in formal writing, speeches, editorials, educated conversation\n' +
      '• Using 1–2 naturally shows high proficiency\n' +
      '• Overusing them or using them in casual chat can sound pretentious',
    examples: [
      { target: '这个方案一举两得，既省时又省钱。(Zhège fāng\'àn yì jǔ liǎng dé, jì shěng shí yòu shěng qián.)', english: 'This plan kills two birds with one stone — it saves both time and money.' },
      { target: '过犹不及，做事要讲究适度。(Guò yóu bù jí, zuòshì yào jiǎngjiū shìdù.)', english: 'Too much is as bad as too little — one should value moderation in all things.' },
      { target: '结尾这句话起到了画龙点睛的作用。(Jiéwěi zhè jù huà qǐ dào le huà lóng diǎn jīng de zuòyòng.)', english: 'This final sentence served as the finishing touch.' },
    ],
  },
  {
    id: 'zh_c1_g003', language: lang, level,
    title: '以...为 / 将...作为 (Taking X as Y)',
    explanation:
      'A formal construction used to express "taking/regarding X as Y". Common in ' +
      'policy statements, mission statements, and academic writing.\n\n' +
      'Structure: 以 + Noun A + 为 + Noun B (role/quality)\n' +
      '• 以教育为本 — taking education as fundamental\n' +
      '• 以人为本 — people-oriented (taking people as the basis)\n\n' +
      'Variant: 将...作为\n' +
      '• 将教育作为国家发展的基础 — taking education as the foundation of national development\n\n' +
      '以...为 is more formal and literary; 将...作为 is slightly more modern but still formal.',
    examples: [
      { target: '国家以教育为本，大力发展教育事业。(Guójiā yǐ jiàoyù wéi běn, dàlì fāzhǎn jiàoyù shìyè.)', english: 'The nation takes education as its foundation and vigorously develops the education sector.' },
      { target: '他以诚信为原则，赢得了大家的信任。(Tā yǐ chéngxìn wéi yuánzé, yíngdé le dàjiā de xìnrèn.)', english: 'He takes integrity as his principle and has earned everyone\'s trust.' },
      { target: '本研究将语料库数据作为主要分析对象。(Běn yánjiū jiāng yǔliàokù shùjù zuòwéi zhǔyào fēnxī duìxiàng.)', english: 'This research takes corpus data as its primary analysis object.' },
    ],
  },
  {
    id: 'zh_c1_g004', language: lang, level,
    title: 'Formal Connectors — 鉴于, 基于, 就...而言, 与其说...不如说',
    explanation:
      'Advanced connectors used in formal writing and speeches to introduce reasons, ' +
      'perspectives, and nuanced comparisons.\n\n' +
      '• 鉴于 (jiànyú) — "in view of / considering"\n' +
      '  鉴于目前的形势... (In view of the current situation...)\n' +
      '• 基于 (jīyú) — "based on"\n' +
      '  基于以上分析... (Based on the above analysis...)\n' +
      '• 就...而言 (jiù...éryán) — "in terms of / as far as X is concerned"\n' +
      '  就经济发展而言... (In terms of economic development...)\n' +
      '• 与其说...不如说 (yǔqíshuō...bùrúshuō) — "rather than saying X, it would be ' +
      'better to say Y"\n' +
      '  与其说他懒，不如说他缺乏动力。(Rather than saying he\'s lazy, it\'s better to say ' +
      'he lacks motivation.)\n\n' +
      'These connectors significantly elevate the formality and precision of your writing.',
    examples: [
      { target: '鉴于当前的经济形势，政府决定出台新政策。(Jiànyú dāngqián de jīngjì xíngshì, zhèngfǔ juédìng chūtái xīn zhèngcè.)', english: 'In view of the current economic situation, the government decided to introduce new policies.' },
      { target: '就教育质量而言，这所大学名列前茅。(Jiù jiàoyù zhìliàng éryán, zhè suǒ dàxué míngliè qiánmáo.)', english: 'In terms of educational quality, this university ranks among the top.' },
      { target: '与其说他聪明，不如说他非常努力。(Yǔqíshuō tā cōngming, bùrúshuō tā fēicháng nǔlì.)', english: 'Rather than saying he\'s smart, it would be better to say he\'s extremely hard-working.' },
    ],
  },
  {
    id: 'zh_c1_g005', language: lang, level,
    title: 'Rhetorical Questions — 难道...吗, 不是...吗, 何必',
    explanation:
      'Rhetorical questions in Chinese express strong assertions, emphasis, or ' +
      'suggestions. They do NOT seek information — they make a point.\n\n' +
      '• 难道...吗 (nándào...ma) — "surely / could it be that...?" (implies the opposite)\n' +
      '  难道你不知道吗？ = Surely you know! (You must know!)\n' +
      '• 不是...吗 (búshì...ma) — "isn\'t it...?" (reminds of a known fact)\n' +
      '  你不是说过要来吗？ = Didn\'t you say you would come?\n' +
      '• 何必 (hébì) — "why bother / there\'s no need to" (literary/formal)\n' +
      '  何必这么紧张？ = Why be so nervous? (There\'s no need.)\n\n' +
      '难道 is the strongest, expressing surprise or indignation that someone doesn\'t see ' +
      'the obvious truth.',
    examples: [
      { target: '难道你不明白这个道理吗？(Nándào nǐ bù míngbai zhège dàolǐ ma?)', english: 'Surely you understand this principle? (You must understand!)' },
      { target: '你不是答应过我吗？(Nǐ búshì dāying guò wǒ ma?)', english: 'Didn\'t you promise me? (You did promise me!)' },
      { target: '何必为这种小事生气呢？(Hébì wèi zhè zhǒng xiǎoshì shēngqì ne?)', english: 'Why bother getting angry over such a small matter?' },
    ],
  },
  {
    id: 'zh_c1_g006', language: lang, level,
    title: 'Advanced Passive Constructions — 受到, 遭到, 得到, 为...所',
    explanation:
      'Beyond the basic 被 passive, C1 learners should master nuanced passive ' +
      'constructions that convey different shades of meaning.\n\n' +
      '• 受到 (shòudào) — "receive" (neutral to positive passive)\n' +
      '  受到欢迎 (to be welcomed), 受到关注 (to receive attention)\n' +
      '• 遭到 (zāodào) — "suffer / meet with" (negative passive)\n' +
      '  遭到批评 (to be criticised), 遭到拒绝 (to be rejected)\n' +
      '• 得到 (dédào) — "obtain / receive" (positive result passive)\n' +
      '  得到认可 (to gain recognition), 得到支持 (to receive support)\n' +
      '• 为...所 (wéi...suǒ) — literary passive, very formal\n' +
      '  为世人所知 (known by all), 为人所敬仰 (admired by people)\n\n' +
      'Choose the construction based on whether the outcome is positive, negative, ' +
      'or neutral, and the desired level of formality.',
    examples: [
      { target: '这部电影受到了观众的热烈欢迎。(Zhè bù diànyǐng shòudào le guānzhòng de rèliè huānyíng.)', english: 'This film received an enthusiastic welcome from the audience.' },
      { target: '他的提议遭到了强烈的反对。(Tā de tíyì zāodào le qiángliè de fǎnduì.)', english: 'His proposal met with strong opposition.' },
      { target: '这位科学家的成就为世人所敬仰。(Zhè wèi kēxuéjiā de chéngjiù wéi shìrén suǒ jìngyǎng.)', english: 'This scientist\'s achievements are admired by all.' },
    ],
  },
  {
    id: 'zh_c1_g007', language: lang, level,
    title: 'Emphatic Structures — 正是, 确实, 恰恰, 偏偏',
    explanation:
      'These adverbs add emphasis, precision, or unexpected contrast to statements.\n\n' +
      '• 正是 (zhèng shì) — "precisely / exactly / it is precisely"\n' +
      '  正是这个原因... (It is precisely for this reason...)\n' +
      '• 确实 (quèshí) — "indeed / truly / it is true that"\n' +
      '  他确实很努力。(He is indeed very hard-working.)\n' +
      '• 恰恰 (qiàqià) — "exactly / as it happens" (often with surprising precision)\n' +
      '  恰恰相反 (exactly the opposite)\n' +
      '• 偏偏 (piānpiān) — "contrary to expectations / just when you don\'t want it"\n' +
      '  我不想见他，他偏偏来了。(I didn\'t want to see him, but he came anyway.)\n\n' +
      '偏偏 expresses frustration at circumstances going against one\'s wishes.',
    examples: [
      { target: '正是因为有了大家的支持，项目才能成功。(Zhèng shì yīnwèi yǒu le dàjiā de zhīchí, xiàngmù cái néng chénggōng.)', english: 'It is precisely because of everyone\'s support that the project could succeed.' },
      { target: '事实恰恰相反。(Shìshí qiàqià xiāngfǎn.)', english: 'The fact is exactly the opposite.' },
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
      '• 据研究表明 (jù yánjiū biǎomíng) — "according to research / studies show that"\n' +
      '• 众所周知 (zhòng suǒ zhōu zhī) — "as is well known"\n' +
      '• 值得注意的是 (zhíde zhùyì de shì) — "it is worth noting that"\n\n' +
      'Conclusions / Transitions:\n' +
      '• 由此可见 (yóucǐ kějiàn) — "from this we can see that"\n' +
      '• 综上所述 (zōng shàng suǒ shù) — "to summarise the above / in conclusion"\n' +
      '• 总而言之 (zǒng ér yán zhī) — "all in all / in a word"\n\n' +
      'Hedging:\n' +
      '• 在一定程度上 (zài yídìng chéngdù shang) — "to a certain extent"\n' +
      '• 可能 / 或许 — "possibly / perhaps"',
    examples: [
      { target: '据研究表明，双语教育对儿童认知发展有积极影响。(Jù yánjiū biǎomíng, shuāngyǔ jiàoyù duì értóng rènzhī fāzhǎn yǒu jījí yǐngxiǎng.)', english: 'Research shows that bilingual education has a positive impact on children\'s cognitive development.' },
      { target: '由此可见，经济增长并不等于生活质量的提高。(Yóucǐ kějiàn, jīngjì zēngzhǎng bìng bù děngyú shēnghuó zhìliàng de tígāo.)', english: 'From this we can see that economic growth does not equal improvement in quality of life.' },
      { target: '综上所述，本文认为教育改革势在必行。(Zōng shàng suǒ shù, běn wén rènwéi jiàoyù gǎigé shì zài bì xíng.)', english: 'To summarise the above, this paper argues that education reform is imperative.' },
    ],
  },
];
