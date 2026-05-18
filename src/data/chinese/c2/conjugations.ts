/**
 * Chinese (Mandarin) C2 — Mastery-Level Patterns
 *
 * Chinese has no verb conjugation. We repurpose the ConjugationEntry
 * structure to teach MASTERY PATTERNS at the C2 level.
 *
 * Structure mapping:
 *   infinitive   → grammar pattern / particle / device
 *   translation  → what the pattern means
 *   tense        → 'present' (Chinese is tenseless)
 *   isRegular    → true
 *   conjugations → example usages in different contexts
 *   subjectLabels→ descriptive labels for each key
 *
 * Three groups:
 *   1. Classical Chinese (文言文) survival expressions (4)
 *   2. Government/legal register (3)
 *   3. Literary rhetorical devices (3)
 *
 * ConjugationPatterns:
 *   1. Classical Chinese particles in modern formal prose
 *   2. Legal/government register patterns
 *
 * IDs: zh_c2_c001–zh_c2_c010 (entries), zh_c2_cp_* (patterns).
 */

import type { ConjugationEntry, ConjugationPattern } from '../../../types';

const lang = 'zh' as const;
const level = 'C2' as const;

// ── Subject labels ────────────────────────────────────────────

const GU_LABELS: Record<string, string> = {
  causal: '故 as classical "therefore"',
  narrative: '故 in narrative/literary prose',
  formal: '故 in formal modern writing',
};

const SUI_LABELS: Record<string, string> = {
  classical: '虽 as classical "although"',
  contrast: '虽...然 concessive pattern',
  formal: '虽 in formal argumentation',
};

const YI_LABELS: Record<string, string> = {
  additive: '亦 as classical "also"',
  literary: '亦 in literary parallel structures',
  formal: '亦 in modern formal prose',
};

const QI_LABELS: Record<string, string> = {
  rhetorical: '岂 as rhetorical "how could"',
  indignation: '岂 expressing moral outrage',
  literary: '岂 in classical quotation',
};

const YUYI_LABELS: Record<string, string> = {
  legal: '予以 in legal ruling',
  government: '予以 in government directive',
  formal: '予以 in formal notification',
};

const ZELING_LABELS: Record<string, string> = {
  enforcement: '责令 ordering correction',
  administrative: '责令 in administrative penalty',
  official: '责令 in official announcement',
};

const YIJU_LABELS: Record<string, string> = {
  legal_basis: '依据 citing legal basis',
  regulation: '依据 referencing regulation',
  policy: '依据 in policy statement',
};

const DUIZHANG_LABELS: Record<string, string> = {
  poetry: '对仗 in classical poetry',
  couplet: '对仗 in Spring Festival couplets',
  prose: '对仗 in formal prose',
};

const PAIBI_LABELS: Record<string, string> = {
  speech: '排比 in oratory',
  essay: '排比 in argumentative essay',
  slogan: '排比 in political slogans',
};

const FANWEN_LABELS: Record<string, string> = {
  emphasis: '反问 for emphatic assertion',
  persuasion: '反问 in persuasive writing',
  debate: '反问 in debate/rebuttal',
};

// ── Conjugation entries ───────────────────────────────────────

const rawConjugations: Omit<ConjugationEntry, 'subjectLabels'>[] = [
  // ── Classical Chinese (文言文) survival expressions ───────────

  // 1. 故 (gù) — therefore (classical)
  {
    id: 'zh_c2_c001', language: lang, level,
    infinitive: '故 (gù)', translation: 'classical particle: "therefore" / "so" / "hence"',
    isRegular: true, tense: 'present',
    conjugations: {
      causal: '民以食为天，故粮食安全至关重要。(Mín yǐ shí wéi tiān, gù liángshí ānquán zhìguān zhòngyào.) — The people regard food as paramount; therefore food security is of vital importance.',
      narrative: '此人才德兼备，故委以重任。(Cǐ rén cái dé jiān bèi, gù wěi yǐ zhòngrèn.) — This person possesses both talent and virtue; hence he was entrusted with a major responsibility.',
      formal: '综合以上分析，故本文得出以下结论。(Zōnghé yǐshàng fēnxī, gù běn wén dé chū yǐxià jiélùn.) — Integrating the above analysis, therefore this paper draws the following conclusions.',
    },
  },

  // 2. 虽 (suī) — although (classical, cf. modern 虽然)
  {
    id: 'zh_c2_c002', language: lang, level,
    infinitive: '虽 (suī)', translation: 'classical concessive: "although" (cf. modern 虽然)',
    isRegular: true, tense: 'present',
    conjugations: {
      classical: '虽千万人，吾往矣。(Suī qiān wàn rén, wú wǎng yǐ.) — Even if there are tens of thousands of people [opposing me], I shall go forth. (Mencius)',
      contrast: '虽有良策，然执行不力则无益。(Suī yǒu liáng cè, rán zhíxíng bú lì zé wú yì.) — Although there are good strategies, their poor execution renders them useless.',
      formal: '虽事出有因，然不可因此而免除责任。(Suī shì chū yǒu yīn, rán bù kě yīncǐ ér miǎnchú zérèn.) — Although there were justifiable reasons, responsibility cannot be waived on that account.',
    },
  },

  // 3. 亦 (yì) — also (classical, cf. modern 也)
  {
    id: 'zh_c2_c003', language: lang, level,
    infinitive: '亦 (yì)', translation: 'classical adverb: "also" / "likewise" (cf. modern 也)',
    isRegular: true, tense: 'present',
    conjugations: {
      additive: '此理亦适用于国际关系。(Cǐ lǐ yì shìyòng yú guójì guānxì.) — This principle also applies to international relations.',
      literary: '生亦何欢，死亦何苦。(Shēng yì hé huān, sǐ yì hé kǔ.) — What joy is there in living, what suffering in dying? (Literary parallel)',
      formal: '经济发展固然重要，文化建设亦不可忽视。(Jīngjì fāzhǎn gùrán zhòngyào, wénhuà jiànshè yì bù kě hūshì.) — Economic development is certainly important, but cultural development must likewise not be neglected.',
    },
  },

  // 4. 岂 (qǐ) — how could / rhetorical
  {
    id: 'zh_c2_c004', language: lang, level,
    infinitive: '岂 (qǐ)', translation: 'classical rhetorical particle: "how could" / "could it be that"',
    isRegular: true, tense: 'present',
    conjugations: {
      rhetorical: '岂有此理！(Qǐ yǒu cǐ lǐ!) — How can this be! / This is outrageous!',
      indignation: '岂能坐视不管？(Qǐ néng zuòshì bù guǎn?) — How could we just sit by and do nothing?',
      literary: '人生岂无挫折，要在于如何面对。(Rénshēng qǐ wú cuòzhé, yào zàiyú rúhé miànduì.) — How could life be without setbacks? The key lies in how one faces them.',
    },
  },

  // ── Government/legal register ────────────────────────────────

  // 5. 予以 (yǔyǐ) — give/grant (legal)
  {
    id: 'zh_c2_c005', language: lang, level,
    infinitive: '予以 (yǔyǐ)', translation: 'to give / to grant / to impose (legal/government register)',
    isRegular: true, tense: 'present',
    conjugations: {
      legal: '对违法行为，依法予以处罚。(Duì wéifǎ xíngwéi, yīfǎ yǔyǐ chǔfá.) — Illegal acts shall be punished in accordance with the law.',
      government: '对有突出贡献者，予以表彰和奖励。(Duì yǒu tūchū gòngxiàn zhě, yǔyǐ biǎozhāng hé jiǎnglì.) — Those with outstanding contributions shall be commended and rewarded.',
      formal: '经审查，对该申请予以批准。(Jīng shěnchá, duì gāi shēnqǐng yǔyǐ pīzhǔn.) — Upon review, the application is hereby approved.',
    },
  },

  // 6. 责令 (zélìng) — order (legal/government)
  {
    id: 'zh_c2_c006', language: lang, level,
    infinitive: '责令 (zélìng)', translation: 'to order / to instruct (legal/administrative directive)',
    isRegular: true, tense: 'present',
    conjugations: {
      enforcement: '责令该企业立即停产整顿。(Zélìng gāi qǐyè lìjí tíng chǎn zhěngdùn.) — The enterprise is ordered to immediately cease production and rectify.',
      administrative: '环保部门责令限期治理污染。(Huánbǎo bùmén zélìng xiànqī zhìlǐ wūrǎn.) — The environmental protection department ordered pollution control within a deadline.',
      official: '市政府责令相关部门彻查此事。(Shì zhèngfǔ zélìng xiāngguān bùmén chè chá cǐ shì.) — The municipal government ordered the relevant departments to thoroughly investigate this matter.',
    },
  },

  // 7. 依据 (yījù) — in accordance with
  {
    id: 'zh_c2_c007', language: lang, level,
    infinitive: '依据 (yījù)', translation: 'in accordance with / on the basis of (legal/formal)',
    isRegular: true, tense: 'present',
    conjugations: {
      legal_basis: '依据《合同法》第四十二条，判决如下。(Yījù "Hétong Fǎ" dì sìshí\'èr tiáo, pànjué rúxià.) — In accordance with Article 42 of the Contract Law, the ruling is as follows.',
      regulation: '依据相关规定，申请人需提交以下材料。(Yījù xiāngguān guīdìng, shēnqǐng rén xū tíjiāo yǐxià cáiliào.) — In accordance with relevant regulations, applicants must submit the following materials.',
      policy: '依据国务院批复，该项目正式启动。(Yījù Guówùyuàn pīfù, gāi xiàngmù zhèngshì qǐdòng.) — On the basis of the State Council\'s approval, the project officially launches.',
    },
  },

  // ── Literary rhetorical devices ──────────────────────────────

  // 8. 对仗 (duìzhàng) — parallel structure
  {
    id: 'zh_c2_c008', language: lang, level,
    infinitive: '对仗 (duìzhàng)', translation: 'parallel structure / antithetical couplet (literary device)',
    isRegular: true, tense: 'present',
    conjugations: {
      poetry: '海内存知己，天涯若比邻。(Hǎi nèi cún zhījǐ, tiānyá ruò bǐlín.) — If you have a true friend within the seas, even the ends of the earth feel like next door. (Wang Bo)',
      couplet: '春回大地千山秀，日照神州万象新。(Chūn huí dàdì qiān shān xiù, rì zhào shénzhōu wàn xiàng xīn.) — Spring returns to the land, a thousand mountains are beautiful; the sun shines on China, everything is renewed.',
      prose: '有志者事竟成，无志者事难成。(Yǒu zhì zhě shì jìng chéng, wú zhì zhě shì nán chéng.) — Where there is a will, things are accomplished; without will, things remain undone.',
    },
  },

  // 9. 排比 (páibǐ) — parallelism in threes
  {
    id: 'zh_c2_c009', language: lang, level,
    infinitive: '排比 (páibǐ)', translation: 'parallelism / rhetorical repetition in threes (or more)',
    isRegular: true, tense: 'present',
    conjugations: {
      speech: '人民需要和平，人民需要发展，人民需要合作。(Rénmín xūyào hépíng, rénmín xūyào fāzhǎn, rénmín xūyào hézuò.) — The people need peace, the people need development, the people need cooperation.',
      essay: '没有理想的人是可悲的，没有勇气的人是懦弱的，没有行动的人是空洞的。(Méiyǒu lǐxiǎng de rén shì kěbēi de, méiyǒu yǒngqì de rén shì nuòruò de, méiyǒu xíngdòng de rén shì kōngdòng de.) — People without ideals are pitiable, people without courage are cowardly, people without action are hollow.',
      slogan: '为人民服务，为社会奉献，为国家效力。(Wèi rénmín fúwù, wèi shèhuì fèngxiàn, wèi guójiā xiàolì.) — Serve the people, contribute to society, work for the nation.',
    },
  },

  // 10. 反问 (fǎnwèn) — rhetorical question
  {
    id: 'zh_c2_c010', language: lang, level,
    infinitive: '反问 (fǎnwèn)', translation: 'rhetorical question (expects no answer, reinforces a point)',
    isRegular: true, tense: 'present',
    conjugations: {
      emphasis: '难道我们能对此无动于衷吗？(Nándào wǒmen néng duì cǐ wúdòng yú zhōng ma?) — Can we really remain indifferent to this? (Of course not!)',
      persuasion: '试问，有谁不渴望和平？(Shì wèn, yǒu shuí bù kěwàng hépíng?) — May I ask, who does not yearn for peace?',
      debate: '这难道不正说明了问题的严重性吗？(Zhè nándào bú zhèng shuōmíng le wèntí de yánzhòng xìng ma?) — Doesn\'t this very thing demonstrate the severity of the problem?',
    },
  },
];

// Map each entry to the correct subject labels
const LABEL_MAP: Record<string, Record<string, string>> = {
  zh_c2_c001: GU_LABELS,
  zh_c2_c002: SUI_LABELS,
  zh_c2_c003: YI_LABELS,
  zh_c2_c004: QI_LABELS,
  zh_c2_c005: YUYI_LABELS,
  zh_c2_c006: ZELING_LABELS,
  zh_c2_c007: YIJU_LABELS,
  zh_c2_c008: DUIZHANG_LABELS,
  zh_c2_c009: PAIBI_LABELS,
  zh_c2_c010: FANWEN_LABELS,
};

/** Chinese C2 mastery-pattern entries (ConjugationEntry shape). */
export const CHINESE_C2_CONJUGATIONS: ConjugationEntry[] = rawConjugations.map(
  (entry) => ({ ...entry, subjectLabels: LABEL_MAP[entry.id] }),
);

// ── Patterns (rules-based teaching) ───────────────────────────

export const CHINESE_C2_CONJUGATION_PATTERNS: ConjugationPattern[] = [
  {
    id: 'zh_c2_cp_classical', language: lang, level,
    name: 'Classical Chinese Particles in Modern Formal Prose',
    verbEnding: '故 / 虽 / 亦 / 岂',
    tense: 'present',
    description:
      'At the mastery level, learners encounter classical Chinese (文言文) particles ' +
      'that permeate formal modern prose — editorials, legal texts, political speeches, ' +
      'and literary essays. These are distinct from the C1 classical particles (之/而/则/乃) ' +
      'and complete the set needed for near-native reading.\n\n' +
      '• 故 (gù) — "therefore / hence" — classical causal connector\n' +
      '  Modern 所以 equivalent; appears in formal conclusions and argumentation\n' +
      '• 虽 (suī) — "although" — classical concessive\n' +
      '  Used alone (not 虽然) in literary/formal style; often paired with 然/则\n' +
      '• 亦 (yì) — "also / likewise" — classical additive\n' +
      '  Replaces 也 in formal writing; common in parallel structures\n' +
      '• 岂 (qǐ) — "how could / could it be" — rhetorical negation\n' +
      '  Introduces rhetorical questions implying "of course not" or indignation',
    rule:
      'Use these particles in formal written registers: academic papers, legal documents, ' +
      'editorials, and literary prose. They are NOT appropriate for casual conversation ' +
      'except in well-known set phrases like 岂有此理.',
    endings: {
      gu: '故 (gù) — therefore / hence',
      sui: '虽 (suī) — although (literary)',
      yi: '亦 (yì) — also / likewise',
      qi: '岂 (qǐ) — how could (rhetorical)',
    },
    subjectLabels: {
      gu: 'causal/conclusive',
      sui: 'concessive',
      yi: 'additive/parallel',
      qi: 'rhetorical negation',
    },
    exampleVerbs: ['故', '虽', '亦', '岂'],
    tips: [
      '故 frequently opens conclusions in academic papers: 故本文认为... (Therefore this paper argues...)',
      '虽 without 然 is highly literary: 虽千万人，吾往矣 (Mencius).',
      '亦 appears in news headlines and formal reports: 中方亦表示关注 (China likewise expressed concern).',
      '岂有此理 is the most common modern usage of 岂 — an exclamation meaning "How outrageous!"',
    ],
  },
  {
    id: 'zh_c2_cp_legal', language: lang, level,
    name: 'Legal/Government Register Patterns',
    verbEnding: '予以 / 责令 / 依据',
    tense: 'present',
    description:
      'Chinese legal and government texts use a distinctive register with specific ' +
      'vocabulary and sentence structures that differ markedly from everyday language. ' +
      'Mastering these patterns is essential for reading laws, regulations, court rulings, ' +
      'and government directives.\n\n' +
      '• 予以 (yǔyǐ) — "to give / grant / impose" — precedes the action in legal rulings\n' +
      '  Pattern: 对 + Target + 予以 + Action\n' +
      '  e.g. 对违规行为予以处罚 (impose punishment on violations)\n\n' +
      '• 责令 (zélìng) — "to order" — used by authorities to mandate corrective action\n' +
      '  Pattern: 责令 + Target + Action\n' +
      '  e.g. 责令限期整改 (order rectification within a deadline)\n\n' +
      '• 依据 (yījù) — "in accordance with / on the basis of" — cites legal authority\n' +
      '  Pattern: 依据 + Law/Regulation + Clause\n' +
      '  e.g. 依据《刑法》第N条 (in accordance with Article N of the Criminal Law)\n\n' +
      'These terms are markers of official authority and should be used only in their ' +
      'appropriate formal contexts.',
    rule:
      '予以 always precedes the action noun (予以批准, 予以处罚). ' +
      '责令 is followed by the ordered party and the required action. ' +
      '依据 introduces the legal or regulatory basis at the start of a clause.',
    endings: {
      yuyi: '予以 — give/grant/impose (legal)',
      zeling: '责令 — order (administrative)',
      yiju: '依据 — in accordance with',
    },
    subjectLabels: {
      yuyi: 'legal action/granting',
      zeling: 'administrative order',
      yiju: 'legal basis/citation',
    },
    exampleVerbs: ['予以', '责令', '依据'],
    tips: [
      '予以 is always followed by a disyllabic action word: 予以批准 (approve), 予以支持 (support), 予以驳回 (reject).',
      '责令 implies the speaker has formal authority — never use it casually.',
      '依据 vs 根据: 依据 is more formal/legal; 根据 is general "based on".',
      'These terms frequently appear together: 依据...规定，责令...予以... (In accordance with...regulations, [we] order...and impose...)',
    ],
  },
];
