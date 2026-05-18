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
  rhetorical: '豈 as rhetorical "how could"',
  indignation: '豈 expressing moral outrage',
  literary: '豈 in classical quotation',
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
  legal_basis: '依據 citing legal basis',
  regulation: '依據 referencing regulation',
  policy: '依據 in policy statement',
};

const DUIZHANG_LABELS: Record<string, string> = {
  poetry: '對仗 in classical poetry',
  couplet: '對仗 in Spring Festival couplets',
  prose: '對仗 in formal prose',
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
      causal: '民以食為天，故糧食安全至關重要。(Mín yǐ shí wéi tiān, gù liángshí ānquán zhìguān zhòngyào.) — The people regard food as paramount; therefore food security is of vital importance.',
      narrative: '此人才德兼備，故委以重任。(Cǐ rén cái dé jiān bèi, gù wěi yǐ zhòngrèn.) — This person possesses both talent and virtue; hence he was entrusted with a major responsibility.',
      formal: '綜合以上分析，故本文得出以下結論。(Zōnghé yǐshàng fēnxī, gù běn wén dé chū yǐxià jiélùn.) — Integrating the above analysis, therefore this paper draws the following conclusions.',
    },
  },

  // 2. 虽 (suī) — although (classical, cf. modern 虽然)
  {
    id: 'zh_c2_c002', language: lang, level,
    infinitive: '虽 (suī)', translation: 'classical concessive: "although" (cf. modern 虽然)',
    isRegular: true, tense: 'present',
    conjugations: {
      classical: '虽千万人，吾往矣。(Suī qiān wàn rén, wú wǎng yǐ.) — Even if there are tens of thousands of people [opposing me], I shall go forth. (Mencius)',
      contrast: '虽有良策，然執行不力則無益。(Suī yǒu liáng cè, rán zhíxíng bú lì zé wú yì.) — Although there are good strategies, their poor execution renders them useless.',
      formal: '虽事出有因，然不可因此而免除责任。(Suī shì chū yǒu yīn, rán bù kě yīncǐ ér miǎnchú zérèn.) — Although there were justifiable reasons, responsibility cannot be waived on that account.',
    },
  },

  // 3. 亦 (yì) — also (classical, cf. modern 也)
  {
    id: 'zh_c2_c003', language: lang, level,
    infinitive: '亦 (yì)', translation: 'classical adverb: "also" / "likewise" (cf. modern 也)',
    isRegular: true, tense: 'present',
    conjugations: {
      additive: '此理亦適用于國际關系。(Cǐ lǐ yì shìyòng yú guójì guānxì.) — This principle also applies to international relations.',
      literary: '生亦何歡，死亦何苦。(Shēng yì hé huān, sǐ yì hé kǔ.) — What joy is there in living, what suffering in dying? (Literary parallel)',
      formal: '經濟發展固然重要，文化建設亦不可忽視。(Jīngjì fāzhǎn gùrán zhòngyào, wénhuà jiànshè yì bù kě hūshì.) — Economic development is certainly important, but cultural development must likewise not be neglected.',
    },
  },

  // 4. 豈 (qǐ) — how could / rhetorical
  {
    id: 'zh_c2_c004', language: lang, level,
    infinitive: '豈 (qǐ)', translation: 'classical rhetorical particle: "how could" / "could it be that"',
    isRegular: true, tense: 'present',
    conjugations: {
      rhetorical: '豈有此理！(Qǐ yǒu cǐ lǐ!) — How can this be! / This is outrageous!',
      indignation: '豈能坐視不管？(Qǐ néng zuòshì bù guǎn?) — How could we just sit by and do nothing?',
      literary: '人生豈無挫折，要在于如何面對。(Rénshēng qǐ wú cuòzhé, yào zàiyú rúhé miànduì.) — How could life be without setbacks? The key lies in how one faces them.',
    },
  },

  // ── Government/legal register ────────────────────────────────

  // 5. 予以 (yǔyǐ) — give/grant (legal)
  {
    id: 'zh_c2_c005', language: lang, level,
    infinitive: '予以 (yǔyǐ)', translation: 'to give / to grant / to impose (legal/government register)',
    isRegular: true, tense: 'present',
    conjugations: {
      legal: '對違法行為，依法予以处罰。(Duì wéifǎ xíngwéi, yīfǎ yǔyǐ chǔfá.) — Illegal acts shall be punished in accordance with the law.',
      government: '對有突出貢獻者，予以表彰和獎勵。(Duì yǒu tūchū gòngxiàn zhě, yǔyǐ biǎozhāng hé jiǎnglì.) — Those with outstanding contributions shall be commended and rewarded.',
      formal: '經審查，對該申請予以批準。(Jīng shěnchá, duì gāi shēnqǐng yǔyǐ pīzhǔn.) — Upon review, the application is hereby approved.',
    },
  },

  // 6. 责令 (zélìng) — order (legal/government)
  {
    id: 'zh_c2_c006', language: lang, level,
    infinitive: '责令 (zélìng)', translation: 'to order / to instruct (legal/administrative directive)',
    isRegular: true, tense: 'present',
    conjugations: {
      enforcement: '责令該企业立即停產整頓。(Zélìng gāi qǐyè lìjí tíng chǎn zhěngdùn.) — The enterprise is ordered to immediately cease production and rectify.',
      administrative: '環保部門责令限期治理汙染。(Huánbǎo bùmén zélìng xiànqī zhìlǐ wūrǎn.) — The environmental protection department ordered pollution control within a deadline.',
      official: '市政府责令相關部門徹查此事。(Shì zhèngfǔ zélìng xiāngguān bùmén chè chá cǐ shì.) — The municipal government ordered the relevant departments to thoroughly investigate this matter.',
    },
  },

  // 7. 依據 (yījù) — in accordance with
  {
    id: 'zh_c2_c007', language: lang, level,
    infinitive: '依據 (yījù)', translation: 'in accordance with / on the basis of (legal/formal)',
    isRegular: true, tense: 'present',
    conjugations: {
      legal_basis: '依據《合同法》第四十二条，判決如下。(Yījù "Hétong Fǎ" dì sìshí\'èr tiáo, pànjué rúxià.) — In accordance with Article 42 of the Contract Law, the ruling is as follows.',
      regulation: '依據相關規定，申請人需提交以下材料。(Yījù xiāngguān guīdìng, shēnqǐng rén xū tíjiāo yǐxià cáiliào.) — In accordance with relevant regulations, applicants must submit the following materials.',
      policy: '依據國務院批复，該項目正式啟動。(Yījù Guówùyuàn pīfù, gāi xiàngmù zhèngshì qǐdòng.) — On the basis of the State Council\'s approval, the project officially launches.',
    },
  },

  // ── Literary rhetorical devices ──────────────────────────────

  // 8. 對仗 (duìzhàng) — parallel structure
  {
    id: 'zh_c2_c008', language: lang, level,
    infinitive: '對仗 (duìzhàng)', translation: 'parallel structure / antithetical couplet (literary device)',
    isRegular: true, tense: 'present',
    conjugations: {
      poetry: '海内存知己，天涯若比鄰。(Hǎi nèi cún zhījǐ, tiānyá ruò bǐlín.) — If you have a true friend within the seas, even the ends of the earth feel like next door. (Wang Bo)',
      couplet: '春回大地千山秀，日照神州万象新。(Chūn huí dàdì qiān shān xiù, rì zhào shénzhōu wàn xiàng xīn.) — Spring returns to the land, a thousand mountains are beautiful; the sun shines on China, everything is renewed.',
      prose: '有志者事竟成，無志者事難成。(Yǒu zhì zhě shì jìng chéng, wú zhì zhě shì nán chéng.) — Where there is a will, things are accomplished; without will, things remain undone.',
    },
  },

  // 9. 排比 (páibǐ) — parallelism in threes
  {
    id: 'zh_c2_c009', language: lang, level,
    infinitive: '排比 (páibǐ)', translation: 'parallelism / rhetorical repetition in threes (or more)',
    isRegular: true, tense: 'present',
    conjugations: {
      speech: '人民需要和平，人民需要發展，人民需要合作。(Rénmín xūyào hépíng, rénmín xūyào fāzhǎn, rénmín xūyào hézuò.) — The people need peace, the people need development, the people need cooperation.',
      essay: '没有理想的人是可悲的，没有勇氣的人是懦弱的，没有行動的人是空洞的。(Méiyǒu lǐxiǎng de rén shì kěbēi de, méiyǒu yǒngqì de rén shì nuòruò de, méiyǒu xíngdòng de rén shì kōngdòng de.) — People without ideals are pitiable, people without courage are cowardly, people without action are hollow.',
      slogan: '為人民服務，為社會奉獻，為國家效力。(Wèi rénmín fúwù, wèi shèhuì fèngxiàn, wèi guójiā xiàolì.) — Serve the people, contribute to society, work for the nation.',
    },
  },

  // 10. 反问 (fǎnwèn) — rhetorical question
  {
    id: 'zh_c2_c010', language: lang, level,
    infinitive: '反问 (fǎnwèn)', translation: 'rhetorical question (expects no answer, reinforces a point)',
    isRegular: true, tense: 'present',
    conjugations: {
      emphasis: '難道我们能對此無動于衷吗？(Nándào wǒmen néng duì cǐ wúdòng yú zhōng ma?) — Can we really remain indifferent to this? (Of course not!)',
      persuasion: '試问，有誰不渴望和平？(Shì wèn, yǒu shuí bù kěwàng hépíng?) — May I ask, who does not yearn for peace?',
      debate: '這難道不正說明了问题的嚴重性吗？(Zhè nándào bú zhèng shuōmíng le wèntí de yánzhòng xìng ma?) — Doesn\'t this very thing demonstrate the severity of the problem?',
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
    verbEnding: '故 / 虽 / 亦 / 豈',
    tense: 'present',
    description:
      'At the mastery level, learners encounter classical Chinese (文言文) particles ' +
      'that permeate formal modern prose — editorials, legal texts, political speeches, ' +
      'and literary essays. These are distinct from the C1 classical particles (之/而/則/乃) ' +
      'and complete the set needed for near-native reading.\n\n' +
      '• 故 (gù) — "therefore / hence" — classical causal connector\n' +
      '  Modern 所以 equivalent; appears in formal conclusions and argumentation\n' +
      '• 虽 (suī) — "although" — classical concessive\n' +
      '  Used alone (not 虽然) in literary/formal style; often paired with 然/則\n' +
      '• 亦 (yì) — "also / likewise" — classical additive\n' +
      '  Replaces 也 in formal writing; common in parallel structures\n' +
      '• 豈 (qǐ) — "how could / could it be" — rhetorical negation\n' +
      '  Introduces rhetorical questions implying "of course not" or indignation',
    rule:
      'Use these particles in formal written registers: academic papers, legal documents, ' +
      'editorials, and literary prose. They are NOT appropriate for casual conversation ' +
      'except in well-known set phrases like 豈有此理.',
    endings: {
      gu: '故 (gù) — therefore / hence',
      sui: '虽 (suī) — although (literary)',
      yi: '亦 (yì) — also / likewise',
      qi: '豈 (qǐ) — how could (rhetorical)',
    },
    subjectLabels: {
      gu: 'causal/conclusive',
      sui: 'concessive',
      yi: 'additive/parallel',
      qi: 'rhetorical negation',
    },
    exampleVerbs: ['故', '虽', '亦', '豈'],
    tips: [
      '故 frequently opens conclusions in academic papers: 故本文認為... (Therefore this paper argues...)',
      '虽 without 然 is highly literary: 虽千万人，吾往矣 (Mencius).',
      '亦 appears in news headlines and formal reports: 中方亦表示關注 (China likewise expressed concern).',
      '豈有此理 is the most common modern usage of 豈 — an exclamation meaning "How outrageous!"',
    ],
  },
  {
    id: 'zh_c2_cp_legal', language: lang, level,
    name: 'Legal/Government Register Patterns',
    verbEnding: '予以 / 责令 / 依據',
    tense: 'present',
    description:
      'Chinese legal and government texts use a distinctive register with specific ' +
      'vocabulary and sentence structures that differ markedly from everyday language. ' +
      'Mastering these patterns is essential for reading laws, regulations, court rulings, ' +
      'and government directives.\n\n' +
      '• 予以 (yǔyǐ) — "to give / grant / impose" — precedes the action in legal rulings\n' +
      '  Pattern: 對 + Target + 予以 + Action\n' +
      '  e.g. 對違規行為予以处罰 (impose punishment on violations)\n\n' +
      '• 责令 (zélìng) — "to order" — used by authorities to mandate corrective action\n' +
      '  Pattern: 责令 + Target + Action\n' +
      '  e.g. 责令限期整改 (order rectification within a deadline)\n\n' +
      '• 依據 (yījù) — "in accordance with / on the basis of" — cites legal authority\n' +
      '  Pattern: 依據 + Law/Regulation + Clause\n' +
      '  e.g. 依據《刑法》第N条 (in accordance with Article N of the Criminal Law)\n\n' +
      'These terms are markers of official authority and should be used only in their ' +
      'appropriate formal contexts.',
    rule:
      '予以 always precedes the action noun (予以批準, 予以处罰). ' +
      '责令 is followed by the ordered party and the required action. ' +
      '依據 introduces the legal or regulatory basis at the start of a clause.',
    endings: {
      yuyi: '予以 — give/grant/impose (legal)',
      zeling: '责令 — order (administrative)',
      yiju: '依據 — in accordance with',
    },
    subjectLabels: {
      yuyi: 'legal action/granting',
      zeling: 'administrative order',
      yiju: 'legal basis/citation',
    },
    exampleVerbs: ['予以', '责令', '依據'],
    tips: [
      '予以 is always followed by a disyllabic action word: 予以批準 (approve), 予以支持 (support), 予以駁回 (reject).',
      '责令 implies the speaker has formal authority — never use it casually.',
      '依據 vs 根據: 依據 is more formal/legal; 根據 is general "based on".',
      'These terms frequently appear together: 依據...規定，责令...予以... (In accordance with...regulations, [we] order...and impose...)',
    ],
  },
];
