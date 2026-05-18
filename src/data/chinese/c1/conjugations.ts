/**
 * Chinese (Mandarin) C1 — Literary & Formal Patterns
 *
 * Chinese has no verb conjugation. We repurpose the ConjugationEntry
 * structure to teach LITERARY/FORMAL PATTERNS at the C1 level.
 *
 * Structure mapping:
 *   infinitive   → grammar pattern / particle / idiom
 *   translation  → what the pattern means
 *   tense        → 'present' (Chinese is tenseless)
 *   isRegular    → true
 *   conjugations → example usages in different contexts
 *   subjectLabels→ descriptive labels for each key
 *
 * Three groups:
 *   1. Classical Chinese particles surviving in modern usage (5)
 *   2. Four-character expressions 成语 (5)
 *   3. Formal written structures (4)
 *
 * ConjugationPatterns:
 *   1. Classical particles in modern usage
 *   2. Four-character idiom (成语) pattern
 *   3. Formal written structures
 *
 * IDs: zh_c1_c001–zh_c1_c014 (entries), zh_c1_cp_* (patterns).
 */

import type { ConjugationEntry, ConjugationPattern } from '../../../types';

const lang = 'zh' as const;
const level = 'C1' as const;

// ── Subject labels ────────────────────────────────────────────

const ZHI_LABELS: Record<string, string> = {
  possessive: '之 as classical possessive',
  pronoun: '之 as classical pronoun',
  literary: '之 in fixed literary expression',
};

const NAI_LABELS: Record<string, string> = {
  identity: '乃 as "is" (formal)',
  consequence: '乃 as "then / consequently"',
  emphasis: '乃 for emphasis in literary style',
};

const QIE_LABELS: Record<string, string> = {
  moreover: '且 as moreover',
  temporary: '且 as "for now / temporarily"',
  literary: '且 in literary parallelism',
};

const ER_LABELS: Record<string, string> = {
  contrast: '而 as "but" (literary)',
  sequence: '而 as "and then" (literary)',
  manner: '而 linking manner to action',
};

const ZE_LABELS: Record<string, string> = {
  conditional: '则 as "then" (formal conditional)',
  contrast: '则 as "on the other hand"',
  rule: '则 stating a principle/rule',
};

const YIJULIANGDE_LABELS: Record<string, string> = {
  daily: 'daily conversation usage',
  work: 'work/professional context',
  strategy: 'strategic planning context',
};

const ZIZUOZISHOU_LABELS: Record<string, string> = {
  warning: 'warning someone',
  commentary: 'commenting on a situation',
  reflection: 'self-reflection',
};

const YOUBEIWUHUAN_LABELS: Record<string, string> = {
  planning: 'planning/preparation context',
  advice: 'giving advice',
  professional: 'professional/business context',
};

const GUOYOUBUJI_LABELS: Record<string, string> = {
  moderation: 'advising moderation',
  critique: 'critiquing excess',
  philosophy: 'philosophical discussion',
};

const HUALONGDIANJING_LABELS: Record<string, string> = {
  writing: 'about writing/art',
  speech: 'about speeches/presentations',
  design: 'about design/aesthetics',
};

const YI_WEI_LABELS: Record<string, string> = {
  policy: 'policy/governance context',
  motto: 'personal motto/principle',
  academic: 'academic writing',
};

const BENZHE_LABELS: Record<string, string> = {
  official: 'official/government statement',
  business: 'business communication',
  principle: 'stating guiding principles',
};

const JIANYU_LABELS: Record<string, string> = {
  formal_report: 'formal report opening',
  policy: 'policy justification',
  academic: 'academic argument',
};

const YOUJIANYUCI_LABELS: Record<string, string> = {
  conclusion: 'drawing a conclusion',
  transition: 'transitioning to action',
  formal: 'formal transition in writing',
};

// ── Conjugation entries ───────────────────────────────────────

const rawConjugations: Omit<ConjugationEntry, 'subjectLabels'>[] = [
  // ── Classical Chinese particles ───────────────────────────────

  // 1. 之 (zhī) — classical "of" / "it"
  {
    id: 'zh_c1_c001', language: lang, level,
    infinitive: '之 (zhī)', translation: 'classical particle: "of", "it", or structural connector',
    isRegular: true, tense: 'present',
    conjugations: {
      possessive: '学习之目的在于应用。(Xuéxí zhī mùdì zàiyú yìngyòng.) — The purpose of learning lies in application.',
      pronoun: '取之不尽，用之不竭。(Qǔ zhī bú jìn, yòng zhī bú jié.) — Inexhaustible in taking, limitless in using.',
      literary: '总之，这是一个重要的决定。(Zǒngzhī, zhè shì yí ge zhòngyào de juédìng.) — In short, this is an important decision.',
    },
  },
  // 2. 乃 (nǎi) — classical "is" / "then"
  {
    id: 'zh_c1_c002', language: lang, level,
    infinitive: '乃 (nǎi)', translation: 'classical particle: "is", "then", or "consequently"',
    isRegular: true, tense: 'present',
    conjugations: {
      identity: '失败乃成功之母。(Shībài nǎi chénggōng zhī mǔ.) — Failure is the mother of success.',
      consequence: '事已至此，乃不可挽回。(Shì yǐ zhì cǐ, nǎi bù kě wǎnhuí.) — Things have come to this; consequently it is irreversible.',
      emphasis: '此乃当务之急。(Cǐ nǎi dāngwù zhī jí.) — This is the most pressing matter.',
    },
  },
  // 3. 且 (qiě) — moreover / and / for now
  {
    id: 'zh_c1_c003', language: lang, level,
    infinitive: '且 (qiě)', translation: 'literary connector: "moreover", "and", or "for now"',
    isRegular: true, tense: 'present',
    conjugations: {
      moreover: '这个方案经济实惠，且操作简便。(Zhège fāng\'àn jīngjì shíhuì, qiě cāozuò jiǎnbiàn.) — This plan is economical, and moreover easy to operate.',
      temporary: '你且等一等，我马上来。(Nǐ qiě děng yì děng, wǒ mǎshàng lái.) — Wait for now; I\'ll be right there.',
      literary: '且行且珍惜。(Qiě xíng qiě zhēnxī.) — As we journey on, let us cherish it.',
    },
  },
  // 4. 而 (ér) — but / and (literary connector)
  {
    id: 'zh_c1_c004', language: lang, level,
    infinitive: '而 (ér)', translation: 'literary connector: "but", "and", or linking manner to verb',
    isRegular: true, tense: 'present',
    conjugations: {
      contrast: '不劳而获是不道德的。(Bù láo ér huò shì bú dàodé de.) — Getting something without working for it is immoral.',
      sequence: '学而时习之，不亦说乎。(Xué ér shí xí zhī, bú yì yuè hū.) — To learn and regularly practise it — is that not a pleasure?',
      manner: '他们满怀信心而来。(Tāmen mǎnhuái xìnxīn ér lái.) — They came full of confidence.',
    },
  },
  // 5. 则 (zé) — then / in that case
  {
    id: 'zh_c1_c005', language: lang, level,
    infinitive: '则 (zé)', translation: 'literary connector: "then", "in that case", or "on the other hand"',
    isRegular: true, tense: 'present',
    conjugations: {
      conditional: '欲速则不达。(Yù sù zé bù dá.) — Haste makes waste. (If you rush, then you won\'t succeed.)',
      contrast: '大城市热闹，小城市则安静。(Dà chéngshì rènao, xiǎo chéngshì zé ānjìng.) — Big cities are lively; small cities, on the other hand, are quiet.',
      rule: '学而不思则罔，思而不学则殆。(Xué ér bù sī zé wǎng, sī ér bù xué zé dài.) — To learn without thinking is futile; to think without learning is perilous.',
    },
  },

  // ── Four-character expressions (成语) ─────────────────────────

  // 6. 一举两得 (kill two birds with one stone)
  {
    id: 'zh_c1_c006', language: lang, level,
    infinitive: '一举两得 (yì jǔ liǎng dé)', translation: 'kill two birds with one stone / one action, two gains',
    isRegular: true, tense: 'present',
    conjugations: {
      daily: '骑自行车上班，既锻炼身体又节省交通费，真是一举两得。(Qí zìxíngchē shàngbān, jì duànliàn shēntǐ yòu jiéshěng jiāotōng fèi, zhēn shì yì jǔ liǎng dé.) — Cycling to work exercises your body and saves transport costs — two birds with one stone.',
      work: '这个方案一举两得，既提高了效率又降低了成本。(Zhège fāng\'àn yì jǔ liǎng dé, jì tígāo le xiàolǜ yòu jiàngdī le chéngběn.) — This plan kills two birds with one stone: it improves efficiency and lowers costs.',
      strategy: '与他们合作一举两得，我们获得了技术和市场。(Yǔ tāmen hézuò yì jǔ liǎng dé, wǒmen huòdé le jìshù hé shìchǎng.) — Cooperating with them achieves two gains at once — we gained technology and market access.',
    },
  },
  // 7. 自作自受 (reap what you sow)
  {
    id: 'zh_c1_c007', language: lang, level,
    infinitive: '自作自受 (zì zuò zì shòu)', translation: 'reap what you sow / suffer the consequences of one\'s own actions',
    isRegular: true, tense: 'present',
    conjugations: {
      warning: '你不听劝告，现在自作自受。(Nǐ bù tīng quàngào, xiànzài zì zuò zì shòu.) — You didn\'t listen to advice, and now you\'re reaping what you sowed.',
      commentary: '他不努力学习，考试不及格是自作自受。(Tā bù nǔlì xuéxí, kǎoshì bù jígé shì zì zuò zì shòu.) — He didn\'t study hard; failing the exam was his own doing.',
      reflection: '回想起来，那是自作自受的结果。(Huí xiǎng qǐlái, nà shì zì zuò zì shòu de jiéguǒ.) — Looking back, it was a consequence of my own actions.',
    },
  },
  // 8. 有备无患 (preparedness prevents problems)
  {
    id: 'zh_c1_c008', language: lang, level,
    infinitive: '有备无患 (yǒu bèi wú huàn)', translation: 'preparedness averts peril / better safe than sorry',
    isRegular: true, tense: 'present',
    conjugations: {
      planning: '多带一把伞吧，有备无患。(Duō dài yì bǎ sǎn ba, yǒu bèi wú huàn.) — Bring an extra umbrella — better safe than sorry.',
      advice: '出国旅行前应该买保险，有备无患。(Chūguó lǚxíng qián yīnggāi mǎi bǎoxiǎn, yǒu bèi wú huàn.) — Buy insurance before travelling abroad — preparedness prevents problems.',
      professional: '公司制定了应急预案，有备无患。(Gōngsī zhìdìng le yìngjí yù\'àn, yǒu bèi wú huàn.) — The company developed an emergency plan — preparedness averts peril.',
    },
  },
  // 9. 过犹不及 (too much is as bad as too little)
  {
    id: 'zh_c1_c009', language: lang, level,
    infinitive: '过犹不及 (guò yóu bù jí)', translation: 'going too far is as bad as not going far enough / excess is as bad as deficiency',
    isRegular: true, tense: 'present',
    conjugations: {
      moderation: '运动虽然好，但过犹不及，要注意适度。(Yùndòng suīrán hǎo, dàn guò yóu bù jí, yào zhùyì shìdù.) — Exercise is good, but too much is as bad as too little — moderation matters.',
      critique: '管理太严格反而适得其反，过犹不及。(Guǎnlǐ tài yángé fǎn\'ér shìdéqífǎn, guò yóu bù jí.) — Management that is too strict backfires — excess is as bad as deficiency.',
      philosophy: '孔子说"过犹不及"，强调中庸之道。(Kǒngzǐ shuō "guò yóu bù jí", qiángdiào zhōngyōng zhī dào.) — Confucius said "excess is as bad as deficiency", emphasising the doctrine of the mean.',
    },
  },
  // 10. 画龙点睛 (the finishing touch)
  {
    id: 'zh_c1_c010', language: lang, level,
    infinitive: '画龙点睛 (huà lóng diǎn jīng)', translation: 'the finishing touch / adding the eyes to a painted dragon',
    isRegular: true, tense: 'present',
    conjugations: {
      writing: '结尾这句话起到了画龙点睛的作用。(Jiéwěi zhè jù huà qǐ dào le huà lóng diǎn jīng de zuòyòng.) — This final sentence served as the finishing touch.',
      speech: '他的总结陈词画龙点睛，令全场印象深刻。(Tā de zǒngjié chéncí huà lóng diǎn jīng, lìng quán chǎng yìnxiàng shēnkè.) — His closing remarks were the finishing touch, leaving a deep impression on the audience.',
      design: '这幅画加上一抹红色，真是画龙点睛。(Zhè fú huà jiā shàng yì mǒ hóngsè, zhēn shì huà lóng diǎn jīng.) — Adding a touch of red to this painting was truly the finishing touch.',
    },
  },

  // ── Formal written structures ─────────────────────────────────

  // 11. 以...为 (take...as)
  {
    id: 'zh_c1_c011', language: lang, level,
    infinitive: '以...为 (yǐ...wéi)', translation: 'to take X as Y / to regard X as Y (formal)',
    isRegular: true, tense: 'present',
    conjugations: {
      policy: '国家以教育为本，大力发展教育事业。(Guójiā yǐ jiàoyù wéi běn, dàlì fāzhǎn jiàoyù shìyè.) — The nation takes education as its foundation and vigorously develops the education sector.',
      motto: '他以诚信为原则，赢得了大家的信任。(Tā yǐ chéngxìn wéi yuánzé, yíngdé le dàjiā de xìnrèn.) — He takes integrity as his principle and has earned everyone\'s trust.',
      academic: '本研究以语料库数据为基础。(Běn yánjiū yǐ yǔliàokù shùjù wéi jīchǔ.) — This research takes corpus data as its foundation.',
    },
  },
  // 12. 本着...的原则 (based on the principle of)
  {
    id: 'zh_c1_c012', language: lang, level,
    infinitive: '本着...的原则 (běnzhe...de yuánzé)', translation: 'based on / in accordance with the principle of',
    isRegular: true, tense: 'present',
    conjugations: {
      official: '本着公平公正的原则，我们重新审理了此案。(Běnzhe gōngpíng gōngzhèng de yuánzé, wǒmen chóngxīn shěnlǐ le cǐ àn.) — Based on the principle of fairness and justice, we re-examined this case.',
      business: '本着互利共赢的原则，双方签署了合作协议。(Běnzhe hùlì gòng yíng de yuánzé, shuāngfāng qiānshǔ le hézuò xiéyì.) — Based on the principle of mutual benefit, both parties signed a cooperation agreement.',
      principle: '本着节约资源的原则，公司减少了纸张使用。(Běnzhe jiéyuē zīyuán de yuánzé, gōngsī jiǎnshǎo le zhǐzhāng shǐyòng.) — In accordance with the principle of conserving resources, the company reduced paper usage.',
    },
  },
  // 13. 鉴于 (in view of)
  {
    id: 'zh_c1_c013', language: lang, level,
    infinitive: '鉴于 (jiànyú)', translation: 'in view of / considering that (formal)',
    isRegular: true, tense: 'present',
    conjugations: {
      formal_report: '鉴于当前的经济形势，政府决定出台新政策。(Jiànyú dāngqián de jīngjì xíngshì, zhèngfǔ juédìng chūtái xīn zhèngcè.) — In view of the current economic situation, the government decided to introduce new policies.',
      policy: '鉴于疫情的严重性，学校决定推迟开学。(Jiànyú yìqíng de yánzhòng xìng, xuéxiào juédìng tuīchí kāixué.) — Considering the severity of the epidemic, the school decided to postpone the start of term.',
      academic: '鉴于前人研究的不足，本文提出新的理论框架。(Jiànyú qiánrén yánjiū de bùzú, běn wén tíchū xīn de lǐlùn kuàngjià.) — In view of the shortcomings of previous research, this paper proposes a new theoretical framework.',
    },
  },
  // 14. 有鉴于此 (in light of this)
  {
    id: 'zh_c1_c014', language: lang, level,
    infinitive: '有鉴于此 (yǒu jiàn yú cǐ)', translation: 'in light of this / given the above (formal transition)',
    isRegular: true, tense: 'present',
    conjugations: {
      conclusion: '有鉴于此，我们建议采取以下措施。(Yǒu jiàn yú cǐ, wǒmen jiànyì cǎiqǔ yǐxià cuòshī.) — In light of this, we recommend adopting the following measures.',
      transition: '有鉴于此，下文将详细分析其原因。(Yǒu jiàn yú cǐ, xià wén jiāng xiángxì fēnxī qí yuányīn.) — Given the above, the following will analyse the reasons in detail.',
      formal: '有鉴于此，公司决定调整战略方向。(Yǒu jiàn yú cǐ, gōngsī juédìng tiáozhěng zhànlüè fāngxiàng.) — In light of this, the company has decided to adjust its strategic direction.',
    },
  },
];

// Map each entry to the correct subject labels
const LABEL_MAP: Record<string, Record<string, string>> = {
  zh_c1_c001: ZHI_LABELS,
  zh_c1_c002: NAI_LABELS,
  zh_c1_c003: QIE_LABELS,
  zh_c1_c004: ER_LABELS,
  zh_c1_c005: ZE_LABELS,
  zh_c1_c006: YIJULIANGDE_LABELS,
  zh_c1_c007: ZIZUOZISHOU_LABELS,
  zh_c1_c008: YOUBEIWUHUAN_LABELS,
  zh_c1_c009: GUOYOUBUJI_LABELS,
  zh_c1_c010: HUALONGDIANJING_LABELS,
  zh_c1_c011: YI_WEI_LABELS,
  zh_c1_c012: BENZHE_LABELS,
  zh_c1_c013: JIANYU_LABELS,
  zh_c1_c014: YOUJIANYUCI_LABELS,
};

/** Chinese C1 literary/formal-pattern entries (ConjugationEntry shape). */
export const CHINESE_C1_CONJUGATIONS: ConjugationEntry[] = rawConjugations.map(
  (entry) => ({ ...entry, subjectLabels: LABEL_MAP[entry.id] }),
);

// ── Patterns (rules-based teaching) ───────────────────────────

export const CHINESE_C1_CONJUGATION_PATTERNS: ConjugationPattern[] = [
  {
    id: 'zh_c1_cp_classical', language: lang, level,
    name: 'Classical Particles in Modern Usage',
    verbEnding: '之 / 乃 / 且 / 而 / 则',
    tense: 'present',
    description:
      'Classical Chinese (文言文) particles that survive in modern formal, literary, ' +
      'and idiomatic usage. Understanding these is essential for reading news, ' +
      'formal documents, proverbs, and academic writing.\n\n' +
      '• 之 (zhī) — "of" or pronoun "it"; replaces 的 in literary style\n' +
      '• 乃 (nǎi) — "is" or "then"; highly literary, found in proverbs\n' +
      '• 且 (qiě) — "moreover", "and", or "for now"\n' +
      '• 而 (ér) — "but" or "and" connecting clauses; links manner to verb\n' +
      '• 则 (zé) — "then" or "on the other hand" in conditional statements',
    rule:
      'These particles are NOT interchangeable with their modern equivalents in all contexts. ' +
      'Use them in fixed expressions, formal writing, proverbs, and literary quotations.',
    endings: {
      zhi: '之 (zhī) — possessive / pronoun',
      nai: '乃 (nǎi) — is / then',
      qie: '且 (qiě) — moreover / for now',
      er: '而 (ér) — but / and / manner',
      ze: '则 (zé) — then / on the other hand',
    },
    subjectLabels: {
      zhi: 'classical possessive/pronoun',
      nai: 'classical copula/consequence',
      qie: 'additive/temporal',
      er: 'contrastive/sequential',
      ze: 'conditional/contrastive',
    },
    exampleVerbs: ['之', '乃', '且', '而', '则'],
    tips: [
      '之 appears in many fixed expressions: 总之 (in short), 之后 (after), 之前 (before).',
      '乃 is rare in speech but common in proverbs: 失败乃成功之母 (Failure is the mother of success).',
      '而 is one of the most versatile classical particles — learn its usages in context.',
      '则 often appears in if-then proverbs: 欲速则不达 (Haste makes waste).',
    ],
  },
  {
    id: 'zh_c1_cp_chengyu', language: lang, level,
    name: 'Four-Character Idioms (成语) Pattern',
    verbEnding: '四字成语',
    tense: 'present',
    description:
      'Chéngyǔ (成语) are fixed four-character idiomatic expressions, most originating ' +
      'from classical Chinese stories, fables, and historical texts. They are used ' +
      'extensively in formal writing, speeches, and educated conversation.\n\n' +
      'Structure: Usually 4 characters in a compressed format.\n' +
      'Origin: Each has a classical story (典故) behind it.\n' +
      'Usage: Formal/written contexts, speeches, news. Using them appropriately ' +
      'demonstrates high proficiency; overusing them can sound pretentious.\n\n' +
      '• 一举两得 — one move, two gains (kill two birds with one stone)\n' +
      '• 自作自受 — self-done, self-suffered (reap what you sow)\n' +
      '• 有备无患 — have preparation, no worry (preparedness prevents problems)\n' +
      '• 过犹不及 — excess is like insufficiency (too much is as bad as too little)\n' +
      '• 画龙点睛 — paint the dragon, dot the eyes (the finishing touch)',
    rule:
      'Insert the 成语 as a predicate, modifier, or standalone comment. ' +
      'Match the idiom\'s meaning to the situation. ' +
      'Do NOT break the four characters apart or rearrange them.',
    endings: {
      yijuliangde: '一举两得 — two gains in one move',
      zizuozishou: '自作自受 — reap what you sow',
      youbeiwuhuan: '有备无患 — preparedness prevents problems',
      guoyoubuji: '过犹不及 — excess is as bad as deficiency',
      hualongdianjing: '画龙点睛 — the finishing touch',
    },
    subjectLabels: {
      yijuliangde: 'efficiency / double benefit',
      zizuozishou: 'consequence / self-inflicted',
      youbeiwuhuan: 'preparation / caution',
      guoyoubuji: 'moderation / balance',
      hualongdianjing: 'finishing touch / highlight',
    },
    exampleVerbs: ['一举两得', '自作自受', '有备无患', '过犹不及', '画龙点睛'],
    tips: [
      'Learn the story (典故) behind each 成语 to use it authentically.',
      'In conversation, using 1–2 成语 naturally shows high proficiency; overusing them sounds forced.',
      'Many 成语 come from Confucian classics, historical records, or folk tales.',
      '成语 are especially common in editorials, academic writing, and formal speeches.',
    ],
  },
  {
    id: 'zh_c1_cp_formal_written', language: lang, level,
    name: 'Formal Written Structures',
    verbEnding: '以...为 / 本着...的原则 / 鉴于 / 有鉴于此',
    tense: 'present',
    description:
      'These structures are essential for formal Chinese writing — government documents, ' +
      'academic papers, business communications, and news reports.\n\n' +
      '• 以...为 (yǐ...wéi) — "to take X as Y" (e.g. 以教育为本)\n' +
      '• 本着...的原则 (běnzhe...de yuánzé) — "based on the principle of"\n' +
      '• 鉴于 (jiànyú) — "in view of / considering that"\n' +
      '• 有鉴于此 (yǒu jiàn yú cǐ) — "in light of this / given the above"\n\n' +
      'These are rarely used in casual speech but are standard in written registers.',
    rule:
      '以 + Noun + 为 + Role/Quality. ' +
      '本着 + Principle + 的原则. ' +
      '鉴于 + Situation/Fact + Main Clause. ' +
      '有鉴于此 begins a concluding/transitional clause.',
    endings: {
      yi_wei: '以...为 — take X as Y',
      benzhe: '本着...的原则 — based on the principle of',
      jianyu: '鉴于 — in view of',
      youjianyuci: '有鉴于此 — in light of this',
    },
    subjectLabels: {
      yi_wei: 'foundational statement',
      benzhe: 'principle-based reasoning',
      jianyu: 'situation-based reasoning',
      youjianyuci: 'transition/conclusion',
    },
    exampleVerbs: ['以...为', '本着...的原则', '鉴于', '有鉴于此'],
    tips: [
      '以...为 is very common in mottos and mission statements: 以人为本 (people-oriented).',
      '本着 always precedes the principle: 本着合作的精神 (based on the spirit of cooperation).',
      '鉴于 is similar to English "in view of" and always introduces a factual basis.',
      '有鉴于此 typically appears at the start of a paragraph to transition to recommendations.',
    ],
  },
];
