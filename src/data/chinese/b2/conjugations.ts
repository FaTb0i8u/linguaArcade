/**
 * Chinese (Mandarin) B2 — Advanced Grammar Structures
 *
 * Chinese has no verb conjugation. We repurpose the ConjugationEntry
 * structure to teach ADVANCED GRAMMAR STRUCTURES at the B2 level.
 *
 * Structure mapping:
 *   infinitive   → grammar pattern
 *   translation  → what the pattern means
 *   tense        → 'present' (Chinese is tenseless)
 *   isRegular    → true
 *   conjugations → example sentences with different topics
 *   subjectLabels→ descriptive labels for each key
 *
 * Three groups:
 *   1. Formal written patterns (5)
 *   2. Rhetorical structures (5)
 *   3. Advanced sentence-final particles (4)
 *
 * ConjugationPatterns:
 *   1. Formal parallel structures (不仅...而且 type)
 *   2. Conditional/concessive structures (即使...也 type)
 *   3. Advanced sentence-final particles pattern
 *
 * IDs: zh_b2_c001–zh_b2_c014 (entries), zh_b2_cp_* (patterns).
 */

import type { ConjugationEntry, ConjugationPattern } from '../../../types';

const lang = 'zh' as const;
const level = 'B2' as const;

// ── Subject labels ────────────────────────────────────────────

const JU_BAODAO_LABELS: Record<string, string> = {
  news: 'news report context',
  research: 'research report context',
  official: 'official statement context',
};

const YOUYU_YINCI_LABELS: Record<string, string> = {
  cause_effect: 'cause → effect',
  formal_reason: 'formal reasoning',
  written_explanation: 'written explanation',
};

const JINGUAN_RENGRAN_LABELS: Record<string, string> = {
  concession: 'conceding a fact',
  persistence: 'persisting despite difficulty',
  contrast: 'contrasting expectation vs. reality',
};

const BUJIN_ERQIE_LABELS: Record<string, string> = {
  addition: 'adding information',
  escalation: 'escalating importance',
  parallel: 'parallel qualities',
};

const WULUN_DOU_LABELS: Record<string, string> = {
  universal: 'universal condition',
  determination: 'determination regardless',
  inclusive: 'including all cases',
};

const YUQI_BURU_LABELS: Record<string, string> = {
  preference: 'expressing preference',
  advice: 'giving advice',
  comparison: 'comparing alternatives',
};

const JISHI_YE_LABELS: Record<string, string> = {
  hypothetical: 'hypothetical concession',
  extreme: 'extreme case',
  determination: 'firm determination',
};

const CHUFEI_FOUZE_LABELS: Record<string, string> = {
  condition: 'necessary condition',
  warning: 'warning about consequence',
  exception: 'only exception',
};

const JIRAN_JIU_LABELS: Record<string, string> = {
  logical: 'logical consequence',
  suggestion: 'suggestion based on fact',
  acceptance: 'accepting a situation',
};

const BUSHI_ERSHI_LABELS: Record<string, string> = {
  correction: 'correcting a misunderstanding',
  clarification: 'clarifying the truth',
  contrast: 'contrasting two things',
};

const NE_LABELS: Record<string, string> = {
  continuation: 'continuing a topic (呢)',
  softening: 'softening a question (呢)',
  rhetorical: 'rhetorical questioning (呢)',
};

const BA_LABELS: Record<string, string> = {
  suggestion: 'making a suggestion (吧)',
  confirmation: 'seeking confirmation (吧)',
  resignation: 'resigned acceptance (吧)',
};

const MA_LABELS: Record<string, string> = {
  obvious: 'stating the obvious (嘛)',
  emphatic: 'emphatic explanation (嘛)',
  persuasion: 'persuading someone (嘛)',
};

const BALE_LABELS: Record<string, string> = {
  minimizing: 'minimizing importance (罢了)',
  dismissive: 'dismissing concern (罢了)',
  modest: 'being modest (罢了)',
};

// ── Conjugation entries ───────────────────────────────────────

const rawConjugations: Omit<ConjugationEntry, 'subjectLabels'>[] = [
  // ── Formal written patterns ───────────────────────────────────

  // 1. 据...报道 (according to reports)
  {
    id: 'zh_b2_c001', language: lang, level,
    infinitive: '据...报道 (jù...bào dào)', translation: 'according to reports / it is reported that',
    isRegular: true, tense: 'present',
    conjugations: {
      news: '据新闻报道，今年的经济增长超过了预期。(Jù xīnwén bàodào, jīnnián de jīngjì zēngzhǎng chāoguò le yùqī.) — According to news reports, this year\'s economic growth exceeded expectations.',
      research: '据研究报道，这种药物对治疗很有效。(Jù yánjiū bàodào, zhè zhǒng yàowù duì zhìliáo hěn yǒuxiào.) — According to research reports, this medicine is very effective for treatment.',
      official: '据官方报道，失业率有所下降。(Jù guānfāng bàodào, shīyè lǜ yǒu suǒ xiàjiàng.) — According to official reports, the unemployment rate has dropped.',
    },
  },
  // 2. 由于...因此 (due to...therefore)
  {
    id: 'zh_b2_c002', language: lang, level,
    infinitive: '由于...因此 (yóuyú...yīncǐ)', translation: 'due to... therefore (formal cause-effect)',
    isRegular: true, tense: 'present',
    conjugations: {
      cause_effect: '由于天气恶劣，因此航班被取消了。(Yóuyú tiānqì èliè, yīncǐ hángbān bèi qǔxiāo le.) — Due to bad weather, the flights were cancelled.',
      formal_reason: '由于资金不足，因此项目被推迟了。(Yóuyú zījīn bùzú, yīncǐ xiàngmù bèi tuīchí le.) — Due to insufficient funds, the project was delayed.',
      written_explanation: '由于技术进步，因此生活更加便利了。(Yóuyú jìshù jìnbù, yīncǐ shēnghuó gèng jiā biànlì le.) — Due to technological progress, life has become more convenient.',
    },
  },
  // 3. 尽管...仍然 (despite...still)
  {
    id: 'zh_b2_c003', language: lang, level,
    infinitive: '尽管...仍然 (jǐnguǎn...réng rán)', translation: 'despite... still (formal concession)',
    isRegular: true, tense: 'present',
    conjugations: {
      concession: '尽管困难很多，他仍然坚持了下来。(Jǐnguǎn kùnnan hěn duō, tā réngrán jiānchí le xiàlái.) — Despite many difficulties, he still persevered.',
      persistence: '尽管下着大雨，她仍然准时到达了。(Jǐnguǎn xià zhe dà yǔ, tā réngrán zhǔnshí dàodá le.) — Despite the heavy rain, she still arrived on time.',
      contrast: '尽管他很年轻，仍然表现得很成熟。(Jǐnguǎn tā hěn niánqīng, réngrán biǎoxiàn de hěn chéngshú.) — Despite being very young, he still behaves maturely.',
    },
  },
  // 4. 不仅...而且 (not only...but also)
  {
    id: 'zh_b2_c004', language: lang, level,
    infinitive: '不仅...而且 (bùjǐn...érqiě)', translation: 'not only... but also (compound conjunction)',
    isRegular: true, tense: 'present',
    conjugations: {
      addition: '她不仅会说中文，而且会说日文。(Tā bùjǐn huì shuō Zhōngwén, érqiě huì shuō Rìwén.) — She not only speaks Chinese, but also speaks Japanese.',
      escalation: '这个问题不仅影响经济，而且影响社会稳定。(Zhège wèntí bùjǐn yǐngxiǎng jīngjì, érqiě yǐngxiǎng shèhuì wěndìng.) — This problem not only affects the economy, but also social stability.',
      parallel: '他不仅聪明，而且非常勤奋。(Tā bùjǐn cōngming, érqiě fēicháng qínfèn.) — He is not only smart, but also very diligent.',
    },
  },
  // 5. 无论...都 (regardless...all)
  {
    id: 'zh_b2_c005', language: lang, level,
    infinitive: '无论...都 (wúlùn...dōu)', translation: 'regardless of... all / no matter what',
    isRegular: true, tense: 'present',
    conjugations: {
      universal: '无论你去哪里，我都会支持你。(Wúlùn nǐ qù nǎlǐ, wǒ dōu huì zhīchí nǐ.) — No matter where you go, I will support you.',
      determination: '无论多忙，他都坚持锻炼。(Wúlùn duō máng, tā dōu jiānchí duànliàn.) — No matter how busy, he persists in exercising.',
      inclusive: '无论男女老少，都可以参加。(Wúlùn nán nǚ lǎo shào, dōu kěyǐ cānjiā.) — Regardless of age or gender, everyone can participate.',
    },
  },

  // ── Rhetorical structures ─────────────────────────────────────

  // 6. 与其...不如 (rather than...better to)
  {
    id: 'zh_b2_c006', language: lang, level,
    infinitive: '与其...不如 (yǔqí...bùrú)', translation: 'rather than... it would be better to',
    isRegular: true, tense: 'present',
    conjugations: {
      preference: '与其等待机会，不如自己创造机会。(Yǔqí děngdài jīhuì, bùrú zìjǐ chuàngzào jīhuì.) — Rather than waiting for opportunities, it\'s better to create them yourself.',
      advice: '与其花时间抱怨，不如想办法解决问题。(Yǔqí huā shíjiān bàoyuàn, bùrú xiǎng bànfǎ jiějué wèntí.) — Rather than spending time complaining, it\'s better to find a way to solve the problem.',
      comparison: '与其坐公交车，不如骑自行车去。(Yǔqí zuò gōngjiāo chē, bùrú qí zìxíngchē qù.) — Rather than taking the bus, it\'s better to ride a bike.',
    },
  },
  // 7. 即使...也 (even if...still)
  {
    id: 'zh_b2_c007', language: lang, level,
    infinitive: '即使...也 (jíshǐ...yě)', translation: 'even if... still (concessive conditional)',
    isRegular: true, tense: 'present',
    conjugations: {
      hypothetical: '即使下雨，我们也要去。(Jíshǐ xià yǔ, wǒmen yě yào qù.) — Even if it rains, we still need to go.',
      extreme: '即使失败了，也不要灰心。(Jíshǐ shībài le, yě bú yào huīxīn.) — Even if you fail, don\'t lose heart.',
      determination: '即使再难，我也不会放弃。(Jíshǐ zài nán, wǒ yě bú huì fàngqì.) — Even if it\'s difficult, I won\'t give up.',
    },
  },
  // 8. 除非...否则 (unless...otherwise)
  {
    id: 'zh_b2_c008', language: lang, level,
    infinitive: '除非...否则 (chúfēi...fǒuzé)', translation: 'unless... otherwise',
    isRegular: true, tense: 'present',
    conjugations: {
      condition: '除非你努力学习，否则考试不会通过。(Chúfēi nǐ nǔlì xuéxí, fǒuzé kǎoshì bú huì tōngguò.) — Unless you study hard, you won\'t pass the exam.',
      warning: '除非现在出发，否则会迟到。(Chúfēi xiànzài chūfā, fǒuzé huì chídào.) — Unless we leave now, we\'ll be late.',
      exception: '除非有特殊情况，否则会议不会取消。(Chúfēi yǒu tèshū qíngkuàng, fǒuzé huìyì bú huì qǔxiāo.) — Unless there are special circumstances, the meeting won\'t be cancelled.',
    },
  },
  // 9. 既然...就 (since...then)
  {
    id: 'zh_b2_c009', language: lang, level,
    infinitive: '既然...就 (jìrán...jiù)', translation: 'since... then (logical consequence)',
    isRegular: true, tense: 'present',
    conjugations: {
      logical: '既然你已经决定了，就去做吧。(Jìrán nǐ yǐjīng juédìng le, jiù qù zuò ba.) — Since you\'ve already decided, then go do it.',
      suggestion: '既然大家都同意，我们就开始吧。(Jìrán dàjiā dōu tóngyì, wǒmen jiù kāishǐ ba.) — Since everyone agrees, let\'s start.',
      acceptance: '既然事情已经发生了，就不要再后悔了。(Jìrán shìqing yǐjīng fāshēng le, jiù bú yào zài hòuhuǐ le.) — Since it\'s already happened, don\'t regret it anymore.',
    },
  },
  // 10. 不是...而是 (not...but rather)
  {
    id: 'zh_b2_c010', language: lang, level,
    infinitive: '不是...而是 (búshì...érshì)', translation: 'not... but rather (correction/contrast)',
    isRegular: true, tense: 'present',
    conjugations: {
      correction: '他不是不想帮忙，而是真的没有时间。(Tā búshì bù xiǎng bāngmáng, érshì zhēn de méiyǒu shíjiān.) — It\'s not that he doesn\'t want to help, but rather he really has no time.',
      clarification: '问题不是钱不够，而是时间不够。(Wèntí búshì qián bú gòu, érshì shíjiān bú gòu.) — The problem isn\'t insufficient money, but rather insufficient time.',
      contrast: '成功不是靠运气，而是靠努力。(Chénggōng búshì kào yùnqì, érshì kào nǔlì.) — Success isn\'t about luck, but rather about hard work.',
    },
  },

  // ── Advanced sentence-final particles ─────────────────────────

  // 11. 呢 (ne) — continuation/softening
  {
    id: 'zh_b2_c011', language: lang, level,
    infinitive: '呢 (ne)', translation: 'sentence-final particle: continuation, softening, or rhetorical',
    isRegular: true, tense: 'present',
    conjugations: {
      continuation: '他还在睡觉呢。(Tā hái zài shuìjiào ne.) — He\'s still sleeping (the situation is ongoing).',
      softening: '你觉得呢？(Nǐ juéde ne?) — What do you think? (softened question)',
      rhetorical: '那你呢？(Nà nǐ ne?) — And what about you?',
    },
  },
  // 12. 吧 (ba) — suggestion/confirmation
  {
    id: 'zh_b2_c012', language: lang, level,
    infinitive: '吧 (ba)', translation: 'sentence-final particle: suggestion, confirmation, or resignation',
    isRegular: true, tense: 'present',
    conjugations: {
      suggestion: '我们走吧。(Wǒmen zǒu ba.) — Let\'s go. (suggestion)',
      confirmation: '你是中国人吧？(Nǐ shì Zhōngguó rén ba?) — You\'re Chinese, right? (seeking confirmation)',
      resignation: '算了吧。(Suàn le ba.) — Forget it. (resigned acceptance)',
    },
  },
  // 13. 嘛 (ma) — obvious/emphatic
  {
    id: 'zh_b2_c013', language: lang, level,
    infinitive: '嘛 (ma)', translation: 'sentence-final particle: stating the obvious, emphatic',
    isRegular: true, tense: 'present',
    conjugations: {
      obvious: '他是你朋友嘛，你应该帮他。(Tā shì nǐ péngyou ma, nǐ yīnggāi bāng tā.) — He\'s your friend after all, you should help him.',
      emphatic: '大家都知道嘛！(Dàjiā dōu zhīdào ma!) — Everyone knows that! (obviously)',
      persuasion: '试试嘛，不会有问题的。(Shìshi ma, bú huì yǒu wèntí de.) — Just try it, there won\'t be any problems.',
    },
  },
  // 14. 罢了 (bàle) — merely/that's all
  {
    id: 'zh_b2_c014', language: lang, level,
    infinitive: '罢了 (bàle)', translation: 'sentence-final particle: merely, that\'s all, nothing more',
    isRegular: true, tense: 'present',
    conjugations: {
      minimizing: '我只是随便说说罢了。(Wǒ zhǐshì suíbiàn shuōshuo bàle.) — I was just saying it casually, that\'s all.',
      dismissive: '不过是一场误会罢了。(Búguò shì yì chǎng wùhuì bàle.) — It\'s merely a misunderstanding, that\'s all.',
      modest: '我只是一个普通人罢了。(Wǒ zhǐshì yí ge pǔtōng rén bàle.) — I\'m just an ordinary person, nothing more.',
    },
  },
];

// Map each entry to the correct subject labels
const LABEL_MAP: Record<string, Record<string, string>> = {
  zh_b2_c001: JU_BAODAO_LABELS,
  zh_b2_c002: YOUYU_YINCI_LABELS,
  zh_b2_c003: JINGUAN_RENGRAN_LABELS,
  zh_b2_c004: BUJIN_ERQIE_LABELS,
  zh_b2_c005: WULUN_DOU_LABELS,
  zh_b2_c006: YUQI_BURU_LABELS,
  zh_b2_c007: JISHI_YE_LABELS,
  zh_b2_c008: CHUFEI_FOUZE_LABELS,
  zh_b2_c009: JIRAN_JIU_LABELS,
  zh_b2_c010: BUSHI_ERSHI_LABELS,
  zh_b2_c011: NE_LABELS,
  zh_b2_c012: BA_LABELS,
  zh_b2_c013: MA_LABELS,
  zh_b2_c014: BALE_LABELS,
};

/** Chinese B2 advanced-grammar-structure entries (ConjugationEntry shape). */
export const CHINESE_B2_CONJUGATIONS: ConjugationEntry[] = rawConjugations.map(
  (entry) => ({ ...entry, subjectLabels: LABEL_MAP[entry.id] }),
);

// ── Patterns (rules-based teaching) ───────────────────────────

export const CHINESE_B2_CONJUGATION_PATTERNS: ConjugationPattern[] = [
  {
    id: 'zh_b2_cp_parallel', language: lang, level,
    name: 'Formal Parallel Structures — 不仅...而且 Type',
    verbEnding: '不仅...而且 / 不是...而是',
    tense: 'present',
    description:
      'Formal parallel structures join two clauses with paired connectors. They are essential ' +
      'in upper-intermediate written and spoken Chinese.\n\n' +
      '• 不仅...而且 (not only...but also) — adds information progressively\n' +
      '• 不是...而是 (not...but rather) — corrects or contrasts\n' +
      '• 与其...不如 (rather than...better to) — expresses preference\n\n' +
      'The subject can appear before 不仅 (same subject for both clauses) or after 不仅 ' +
      '(different subjects in each clause).',
    rule:
      'Subject + 不仅 + Clause A，而且 + Clause B. ' +
      'For different subjects: 不仅 + SubjA + ClauseA，而且 + SubjB + ClauseB.',
    endings: {
      bujin_erqie: '不仅...而且 — not only...but also',
      bushi_ershi: '不是...而是 — not...but rather',
      yuqi_buru: '与其...不如 — rather than...better to',
    },
    subjectLabels: {
      bujin_erqie: 'additive parallel',
      bushi_ershi: 'corrective parallel',
      yuqi_buru: 'preferential parallel',
    },
    exampleVerbs: ['不仅...而且', '不是...而是', '与其...不如'],
    tips: [
      'When both clauses share the same subject, place the subject before 不仅: 她不仅漂亮，而且聪明。',
      'When subjects differ, place each subject in its own clause: 不仅他来了，而且她也来了。',
      '不是...而是 is especially useful for correcting misunderstandings in formal settings.',
    ],
  },
  {
    id: 'zh_b2_cp_conditional', language: lang, level,
    name: 'Conditional & Concessive Structures — 即使...也 Type',
    verbEnding: '即使...也 / 除非...否则 / 无论...都',
    tense: 'present',
    description:
      'These structures express conditions, concessions, and universal statements.\n\n' +
      '• 即使...也 (even if...still) — concessive conditional; the result holds even given the condition\n' +
      '• 除非...否则 (unless...otherwise) — states a necessary condition\n' +
      '• 无论...都 (no matter...all) — universal condition, the result is always true\n' +
      '• 既然...就 (since...then) — logical consequence of accepted fact\n' +
      '• 尽管...仍然 (despite...still) — formal concession\n\n' +
      '即使 introduces HYPOTHETICAL situations; 尽管 introduces REAL situations.',
    rule:
      '即使 + Condition，Subject + 也 + Result. ' +
      '除非 + Condition，否则 + Consequence. ' +
      '无论 + Question-Word Phrase，Subject + 都 + Result.',
    endings: {
      jishi_ye: '即使...也 — even if...still',
      chufei_fouze: '除非...否则 — unless...otherwise',
      wulun_dou: '无论...都 — no matter...all',
      jiran_jiu: '既然...就 — since...then',
      jinguan_rengran: '尽管...仍然 — despite...still',
    },
    subjectLabels: {
      jishi_ye: 'hypothetical concession',
      chufei_fouze: 'necessary condition',
      wulun_dou: 'universal condition',
      jiran_jiu: 'logical consequence',
      jinguan_rengran: 'factual concession',
    },
    exampleVerbs: ['即使...也', '除非...否则', '无论...都', '既然...就', '尽管...仍然'],
    tips: [
      '即使 = hypothetical (may or may not happen); 尽管 = factual (it DID happen but…).',
      '无论 often pairs with question words: 无论谁/什么/哪里/多少…都…',
      '既然 implies the speaker accepts the premise as a given fact.',
    ],
  },
  {
    id: 'zh_b2_cp_particles', language: lang, level,
    name: 'Advanced Sentence-Final Particles',
    verbEnding: '呢 / 吧 / 嘛 / 罢了',
    tense: 'present',
    description:
      'Sentence-final particles modulate tone, attitude, and pragmatic meaning. At B2, ' +
      'learners need to master the nuanced differences between them.\n\n' +
      '• 呢 (ne) — marks continuation ("still…"), softens questions, or asks "what about…?"\n' +
      '• 吧 (ba) — makes suggestions, seeks confirmation, or expresses mild resignation\n' +
      '• 嘛 (ma) — marks something as obvious; persuades, emphasizes, or implies "after all"\n' +
      '• 罢了 (bàle) — "that\'s all", used to minimize or downplay; slightly literary\n\n' +
      'NOTE: 嘛 (ma) is different from the yes/no question particle 吗 (ma). ' +
      '嘛 states the obvious; 吗 asks a genuine question.',
    rule:
      'Statement / Question + Particle. ' +
      'Choose the particle based on the intended tone: 呢 (ongoing/soft), ' +
      '吧 (suggestion/guess), 嘛 (obvious), 罢了 (merely).',
    endings: {
      ne: '呢 (ne) — continuation / softening',
      ba: '吧 (ba) — suggestion / confirmation',
      ma_obvious: '嘛 (ma) — obvious / emphatic',
      bale: '罢了 (bàle) — merely / that\'s all',
    },
    subjectLabels: {
      ne: 'ongoing / softened',
      ba: 'suggested / guessed',
      ma_obvious: 'obvious / persuasive',
      bale: 'minimized / dismissed',
    },
    exampleVerbs: ['呢', '吧', '嘛', '罢了'],
    tips: [
      '呢 at the end of a wh-question is natural: 你去哪儿呢？ — but avoid it on yes/no questions (use 吗 instead).',
      '吧 makes commands/requests softer and more polite: 请坐吧 (please sit down).',
      '嘛 can sound slightly colloquial; use with care in very formal writing.',
      '罢了 is more literary; in casual speech you might hear 而已 instead.',
    ],
  },
];
