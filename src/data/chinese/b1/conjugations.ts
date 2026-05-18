/**
 * Chinese (Mandarin) B1 — Complement Structures & Advanced Patterns
 *
 * Chinese has no verb conjugation. We repurpose the ConjugationEntry
 * structure to teach COMPLEMENT STRUCTURES at the B1 level.
 *
 * Structure mapping:
 *   infinitive   → complement pattern (verb + complement)
 *   translation  → what the complement means
 *   tense        → 'present' (Chinese is tenseless)
 *   isRegular    → true
 *   conjugations → affirmative, negative, and question examples
 *   subjectLabels→ descriptive labels for each key
 *
 * ConjugationPatterns teach three rules:
 *   1. Result complement V+结果
 *   2. Direction complement V+方向
 *   3. Degree complement V+得+adj
 *
 * IDs: zh_b1_c001–zh_b1_c014 (entries), zh_b1_cp_* (patterns).
 */

import type { ConjugationEntry, ConjugationPattern } from '../../../types';

const lang = 'zh' as const;
const level = 'B1' as const;

// ── Subject labels ────────────────────────────────────────────

const WAN_LABELS: Record<string, string> = {
  affirmative: 'completed (affirmative)',
  negative: 'not completed (negative)',
  question: 'completed? (question)',
};

const DAO_LABELS: Record<string, string> = {
  affirmative: 'achieved (affirmative)',
  negative: 'not achieved (negative)',
  question: 'achieved? (question)',
};

const HAO_LABELS: Record<string, string> = {
  affirmative: 'done well / ready (affirmative)',
  negative: 'not ready (negative)',
  question: 'ready? (question)',
};

const CUO_LABELS: Record<string, string> = {
  affirmative: 'done wrongly (affirmative)',
  negative: 'not done wrongly (negative)',
  question: 'done wrongly? (question)',
};

const DONG_LABELS: Record<string, string> = {
  affirmative: 'understood (affirmative)',
  negative: 'not understood (negative)',
  question: 'understood? (question)',
};

const SHANGLAI_LABELS: Record<string, string> = {
  affirmative: 'come up (affirmative)',
  negative: 'not come up (negative)',
  question: 'come up? (question)',
};

const XIAQU_LABELS: Record<string, string> = {
  affirmative: 'go down / continue (affirmative)',
  negative: 'cannot continue (negative)',
  question: 'continue? (question)',
};

const JINLAI_LABELS: Record<string, string> = {
  affirmative: 'come in (affirmative)',
  negative: 'not come in (negative)',
  question: 'come in? (question)',
};

const CHUQU_LABELS: Record<string, string> = {
  affirmative: 'go out (affirmative)',
  negative: 'not go out (negative)',
  question: 'go out? (question)',
};

const HUILAI_LABELS: Record<string, string> = {
  affirmative: 'come back (affirmative)',
  negative: 'not come back (negative)',
  question: 'come back? (question)',
};

const DE_HEN_LABELS: Record<string, string> = {
  affirmative: 'V 得很… (very)',
  negative: 'V 得不… (not)',
  question: 'V 得…吗？(question)',
};

const DE_BUCUO_LABELS: Record<string, string> = {
  affirmative: 'V 得不错 (not bad)',
  negative: 'V 得不太好 (not so good)',
  question: 'V 得怎么样？(how?)',
};

const DE_BUHAO_LABELS: Record<string, string> = {
  affirmative: 'V 得不好 (not well)',
  negative: 'V 得还好 (still okay)',
  question: 'V 得好不好？(well?)',
};

const JILE_LABELS: Record<string, string> = {
  affirmative: 'Adj 极了 (extremely)',
  negative: '一点儿也不… (not at all)',
  question: '是不是…极了？(question)',
};

// ── Conjugation entries ───────────────────────────────────────

const rawConjugations: Omit<ConjugationEntry, 'subjectLabels'>[] = [
  // ── Result complements ────────────────────────────────────────

  // 1. V + 完 (wán) — finish
  {
    id: 'zh_b1_c001', language: lang, level,
    infinitive: 'V + 完 (wán)', translation: 'finish doing (result complement)',
    isRegular: true, tense: 'present',
    conjugations: {
      affirmative: '我吃完了。(Wǒ chī wán le.) — I finished eating.',
      negative: '我还没吃完。(Wǒ hái méi chī wán.) — I haven\'t finished eating yet.',
      question: '你做完作业了吗？(Nǐ zuò wán zuòyè le ma?) — Have you finished your homework?',
    },
  },
  // 2. V + 到 (dào) — achieve / reach
  {
    id: 'zh_b1_c002', language: lang, level,
    infinitive: 'V + 到 (dào)', translation: 'achieve / reach / succeed in doing',
    isRegular: true, tense: 'present',
    conjugations: {
      affirmative: '我找到了钥匙。(Wǒ zhǎo dào le yàoshi.) — I found the key.',
      negative: '我没看到他。(Wǒ méi kàn dào tā.) — I didn\'t see him.',
      question: '你买到票了吗？(Nǐ mǎi dào piào le ma?) — Did you manage to buy the ticket?',
    },
  },
  // 3. V + 好 (hǎo) — done well / ready
  {
    id: 'zh_b1_c003', language: lang, level,
    infinitive: 'V + 好 (hǎo)', translation: 'done well / finished properly / ready',
    isRegular: true, tense: 'present',
    conjugations: {
      affirmative: '饭做好了。(Fàn zuò hǎo le.) — The food is ready.',
      negative: '还没准备好。(Hái méi zhǔnbèi hǎo.) — Not ready yet.',
      question: '你想好了吗？(Nǐ xiǎng hǎo le ma?) — Have you made up your mind?',
    },
  },
  // 4. V + 错 (cuò) — done wrongly
  {
    id: 'zh_b1_c004', language: lang, level,
    infinitive: 'V + 错 (cuò)', translation: 'done wrongly / mistakenly',
    isRegular: true, tense: 'present',
    conjugations: {
      affirmative: '我写错了。(Wǒ xiě cuò le.) — I wrote it wrong.',
      negative: '我没说错。(Wǒ méi shuō cuò.) — I didn\'t say it wrong.',
      question: '你是不是拿错了？(Nǐ shì bú shì ná cuò le?) — Did you take the wrong one?',
    },
  },
  // 5. V + 懂 (dǒng) — understand through doing
  {
    id: 'zh_b1_c005', language: lang, level,
    infinitive: 'V + 懂 (dǒng)', translation: 'understand through (listening/reading/etc.)',
    isRegular: true, tense: 'present',
    conjugations: {
      affirmative: '我听懂了。(Wǒ tīng dǒng le.) — I understood (by listening).',
      negative: '我没听懂。(Wǒ méi tīng dǒng.) — I didn\'t understand.',
      question: '你看懂了吗？(Nǐ kàn dǒng le ma?) — Did you understand (by reading)?',
    },
  },

  // ── Direction complements ─────────────────────────────────────

  // 6. V + 上来 (shàng lái) — come up
  {
    id: 'zh_b1_c006', language: lang, level,
    infinitive: 'V + 上来 (shàng lái)', translation: 'come up / move upward toward speaker',
    isRegular: true, tense: 'present',
    conjugations: {
      affirmative: '他跑上来了。(Tā pǎo shàng lái le.) — He ran up (toward the speaker).',
      negative: '他没爬上来。(Tā méi pá shàng lái.) — He didn\'t climb up.',
      question: '你能走上来吗？(Nǐ néng zǒu shàng lái ma?) — Can you walk up here?',
    },
  },
  // 7. V + 下去 (xià qù) — go down / continue
  {
    id: 'zh_b1_c007', language: lang, level,
    infinitive: 'V + 下去 (xià qù)', translation: 'go down / continue doing',
    isRegular: true, tense: 'present',
    conjugations: {
      affirmative: '请继续说下去。(Qǐng jìxù shuō xià qù.) — Please continue speaking.',
      negative: '我坚持不下去了。(Wǒ jiānchí bú xià qù le.) — I can\'t keep going.',
      question: '你还能坚持下去吗？(Nǐ hái néng jiānchí xià qù ma?) — Can you keep going?',
    },
  },
  // 8. V + 进来 (jìn lái) — come in
  {
    id: 'zh_b1_c008', language: lang, level,
    infinitive: 'V + 进来 (jìn lái)', translation: 'come in / enter toward speaker',
    isRegular: true, tense: 'present',
    conjugations: {
      affirmative: '他走进来了。(Tā zǒu jìn lái le.) — He walked in.',
      negative: '风没吹进来。(Fēng méi chuī jìn lái.) — The wind didn\'t blow in.',
      question: '我可以走进来吗？(Wǒ kěyǐ zǒu jìn lái ma?) — May I come in?',
    },
  },
  // 9. V + 出去 (chū qù) — go out
  {
    id: 'zh_b1_c009', language: lang, level,
    infinitive: 'V + 出去 (chū qù)', translation: 'go out / move outward away from speaker',
    isRegular: true, tense: 'present',
    conjugations: {
      affirmative: '他跑出去了。(Tā pǎo chū qù le.) — He ran out.',
      negative: '猫没跑出去。(Māo méi pǎo chū qù.) — The cat didn\'t run out.',
      question: '你想出去走走吗？(Nǐ xiǎng chū qù zǒu zou ma?) — Do you want to go out for a walk?',
    },
  },
  // 10. V + 回来 (huí lái) — come back
  {
    id: 'zh_b1_c010', language: lang, level,
    infinitive: 'V + 回来 (huí lái)', translation: 'come back / return toward speaker',
    isRegular: true, tense: 'present',
    conjugations: {
      affirmative: '他走回来了。(Tā zǒu huí lái le.) — He walked back.',
      negative: '她还没回来。(Tā hái méi huí lái.) — She hasn\'t come back yet.',
      question: '你什么时候回来？(Nǐ shénme shíhou huí lái?) — When are you coming back?',
    },
  },

  // ── Degree complements ────────────────────────────────────────

  // 11. V + 得很 (de hěn) — very
  {
    id: 'zh_b1_c011', language: lang, level,
    infinitive: 'V + 得很 (de hěn)', translation: 'do very (well/fast/etc.)',
    isRegular: true, tense: 'present',
    conjugations: {
      affirmative: '她唱得很好听。(Tā chàng de hěn hǎo tīng.) — She sings very nicely.',
      negative: '他说得不太清楚。(Tā shuō de bú tài qīngchu.) — He doesn\'t speak very clearly.',
      question: '你跑得快吗？(Nǐ pǎo de kuài ma?) — Do you run fast?',
    },
  },
  // 12. V + 得不错 (de búcuò) — not bad
  {
    id: 'zh_b1_c012', language: lang, level,
    infinitive: 'V + 得不错 (de búcuò)', translation: 'do pretty well / not bad',
    isRegular: true, tense: 'present',
    conjugations: {
      affirmative: '你中文说得不错。(Nǐ Zhōngwén shuō de búcuò.) — Your Chinese is pretty good.',
      negative: '他这次考得不太好。(Tā zhè cì kǎo de bú tài hǎo.) — He didn\'t do so well on this exam.',
      question: '他做得怎么样？(Tā zuò de zěnme yàng?) — How did he do?',
    },
  },
  // 13. V + 得不好 (de bù hǎo) — not well
  {
    id: 'zh_b1_c013', language: lang, level,
    infinitive: 'V + 得不好 (de bù hǎo)', translation: 'do not well / poorly',
    isRegular: true, tense: 'present',
    conjugations: {
      affirmative: '他睡得不好。(Tā shuì de bù hǎo.) — He didn\'t sleep well.',
      negative: '其实她做得还好。(Qíshí tā zuò de hái hǎo.) — Actually she did okay.',
      question: '你昨天睡得好不好？(Nǐ zuótiān shuì de hǎo bù hǎo?) — Did you sleep well yesterday?',
    },
  },
  // 14. Adj + 极了 (jí le) — extremely
  {
    id: 'zh_b1_c014', language: lang, level,
    infinitive: 'Adj + 极了 (jí le)', translation: 'extremely (degree complement)',
    isRegular: true, tense: 'present',
    conjugations: {
      affirmative: '今天热极了。(Jīntiān rè jí le.) — It\'s extremely hot today.',
      negative: '一点儿也不热。(Yì diǎnr yě bú rè.) — Not hot at all.',
      question: '是不是累极了？(Shì bú shì lèi jí le?) — Are you extremely tired?',
    },
  },
];

// Map each entry to the correct subject labels
const LABEL_MAP: Record<string, Record<string, string>> = {
  zh_b1_c001: WAN_LABELS,
  zh_b1_c002: DAO_LABELS,
  zh_b1_c003: HAO_LABELS,
  zh_b1_c004: CUO_LABELS,
  zh_b1_c005: DONG_LABELS,
  zh_b1_c006: SHANGLAI_LABELS,
  zh_b1_c007: XIAQU_LABELS,
  zh_b1_c008: JINLAI_LABELS,
  zh_b1_c009: CHUQU_LABELS,
  zh_b1_c010: HUILAI_LABELS,
  zh_b1_c011: DE_HEN_LABELS,
  zh_b1_c012: DE_BUCUO_LABELS,
  zh_b1_c013: DE_BUHAO_LABELS,
  zh_b1_c014: JILE_LABELS,
};

/** Chinese B1 complement-structure entries (ConjugationEntry shape). */
export const CHINESE_B1_CONJUGATIONS: ConjugationEntry[] = rawConjugations.map(
  (entry) => ({ ...entry, subjectLabels: LABEL_MAP[entry.id] }),
);

// ── Patterns (rules-based teaching) ───────────────────────────

export const CHINESE_B1_CONJUGATION_PATTERNS: ConjugationPattern[] = [
  {
    id: 'zh_b1_cp_result', language: lang, level,
    name: 'Result Complement V+结果',
    verbEnding: 'V+完/到/好/错/懂',
    tense: 'present',
    description:
      'A result complement is attached directly after the verb to indicate the OUTCOME ' +
      'of the action. Chinese verbs often need a complement to show what happened as a result.\n\n' +
      '• 完 (wán) = finish — 吃完 (finished eating)\n' +
      '• 到 (dào) = reach/achieve — 找到 (found/managed to find)\n' +
      '• 好 (hǎo) = done well/ready — 做好 (prepared/ready)\n' +
      '• 错 (cuò) = wrongly — 写错 (wrote wrong)\n' +
      '• 懂 (dǒng) = understand — 听懂 (understood by listening)',
    rule:
      'Verb + Result Complement (+ 了). ' +
      'Negative: 没 + Verb + Result. Potential form: Verb + 得/不 + Result.',
    endings: {
      wan: '完 (wán) — finish',
      dao: '到 (dào) — achieve / reach',
      hao: '好 (hǎo) — done well / ready',
      cuo: '错 (cuò) — wrongly',
      dong: '懂 (dǒng) — understand through',
    },
    subjectLabels: {
      wan: 'finish doing',
      dao: 'achieve / reach',
      hao: 'done well / ready',
      cuo: 'done wrongly',
      dong: 'understand through perception',
    },
    exampleVerbs: ['V+完', 'V+到', 'V+好', 'V+错', 'V+懂'],
    tips: [
      'The potential form inserts 得 (can) or 不 (cannot) between verb and complement: ' +
        '听得懂 (can understand), 听不懂 (cannot understand).',
      'Negative completed actions use 没: 没吃完 (haven\'t finished eating), 没找到 (didn\'t find).',
      'Result complements are very productive — you can combine many verbs with these complements.',
    ],
  },
  {
    id: 'zh_b1_cp_direction', language: lang, level,
    name: 'Direction Complement V+方向',
    verbEnding: 'V+上来/下去/进来/出去/回来',
    tense: 'present',
    description:
      'Direction complements indicate the DIRECTION of movement relative to the speaker.\n\n' +
      'Simple direction words: 上 (up), 下 (down), 进 (in), 出 (out), 回 (back), 过 (across).\n' +
      'Combined with 来 (toward speaker) or 去 (away from speaker):\n' +
      '• 上来 = come up, 上去 = go up\n' +
      '• 进来 = come in, 出去 = go out\n' +
      '• 回来 = come back, 回去 = go back\n\n' +
      'They can also have ABSTRACT meanings:\n' +
      '• 说下去 = continue talking\n' +
      '• 想出来 = figure out / think of',
    rule:
      'Verb + Direction Complement. With an object: Verb + Direction1 + Object + 来/去. ' +
      'Example: 走进教室来 (walk into the classroom toward speaker).',
    endings: {
      shanglai: '上来 (shàng lái) — come up',
      xiaqu: '下去 (xià qù) — go down / continue',
      jinlai: '进来 (jìn lái) — come in',
      chuqu: '出去 (chū qù) — go out',
      huilai: '回来 (huí lái) — come back',
    },
    subjectLabels: {
      shanglai: 'upward toward speaker',
      xiaqu: 'downward away / continue',
      jinlai: 'inward toward speaker',
      chuqu: 'outward away from speaker',
      huilai: 'back toward speaker',
    },
    exampleVerbs: ['V+上来', 'V+下去', 'V+进来', 'V+出去', 'V+回来'],
    tips: [
      '来 = motion toward the speaker; 去 = motion away from the speaker.',
      'When an object is present, it goes between the two parts: 走进教室来 (walk into the classroom).',
      'Abstract / figurative uses are common at B1+: 坚持下去 (keep going), 想出来 (figure out).',
    ],
  },
  {
    id: 'zh_b1_cp_degree', language: lang, level,
    name: 'Degree Complement V+得+Adj',
    verbEnding: 'V+得+Adj',
    tense: 'present',
    description:
      'A degree complement describes HOW an action is performed or to what degree. ' +
      'It uses the structural particle 得 (de) between the verb and the descriptive phrase.\n\n' +
      '• 她唱得很好听。(She sings very nicely.)\n' +
      '• 他跑得很快。(He runs very fast.)\n' +
      '• 我睡得不好。(I didn\'t sleep well.)\n\n' +
      'The complement after 得 can be simple (好, 快) or complex (非常好, 不太清楚).\n' +
      '极了 (jí le) is a special intensifier meaning "extremely".',
    rule:
      'Verb + 得 + Adjective/Description. ' +
      'Negative: Verb + 得 + 不 + Adj. ' +
      'Question: Verb + 得 + Adj + 吗？ or Verb + 得 + Adj + 不 + Adj？',
    endings: {
      hen: '得很 (de hěn) — very',
      bucuo: '得不错 (de búcuò) — not bad',
      buhao: '得不好 (de bù hǎo) — not well',
      jile: '极了 (jí le) — extremely',
    },
    subjectLabels: {
      hen: 'very (positive degree)',
      bucuo: 'not bad (moderate positive)',
      buhao: 'not well (negative degree)',
      jile: 'extremely (superlative)',
    },
    exampleVerbs: ['V+得很', 'V+得不错', 'V+得不好', 'Adj+极了'],
    tips: [
      'When the verb has an object, repeat the verb: 她说中文说得很好 or 她中文说得很好 ' +
        '(NOT *她说中文得很好).',
      '得 here is pronounced "de" (neutral tone), not "dé" (to get) or "děi" (must).',
      '极了 attaches directly to an adjective without 得: 热极了, 好极了, 高兴极了.',
    ],
  },
];
