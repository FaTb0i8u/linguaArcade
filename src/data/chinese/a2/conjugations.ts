/**
 * Chinese (Mandarin) A2 — More Measure Words & Aspect Markers
 *
 * Chinese has no verb conjugation. We repurpose the ConjugationEntry
 * structure to teach MORE MEASURE WORDS and ASPECT MARKERS at the A2 level.
 *
 * Structure mapping:
 *   infinitive   → measure word / aspect particle
 *   translation  → what it classifies / how it's used
 *   tense        → 'present' (Chinese is tenseless)
 *   isRegular    → true
 *   conjugations → example phrases / sentences
 *   subjectLabels→ descriptive labels for each key
 *
 * ConjugationPatterns teach three rules:
 *   1. Specialised measure words (双, 把, 辆)
 *   2. Completion aspect with 了
 *   3. Experience aspect with 过
 *
 * IDs: zh_a2_c001–zh_a2_c012 (entries), zh_a2_cp_* (patterns).
 */

import type { ConjugationEntry, ConjugationPattern } from '../../../types';

const lang = 'zh' as const;
const level = 'A2' as const;

// ── Subject labels ────────────────────────────────────────────

const PAIR_LABELS: Record<string, string> = {
  shoes: 'shoes',
  chopsticks: 'chopsticks',
  gloves: 'gloves',
};

const HANDLE_LABELS: Record<string, string> = {
  umbrella: 'umbrella',
  chair: 'chair',
  knife: 'knife',
};

const VEHICLE_LABELS: Record<string, string> = {
  car: 'car',
  bicycle: 'bicycle',
  bus: 'bus',
};

const SET_LABELS: Record<string, string> = {
  clothes: 'set of clothes',
  furniture: 'set of furniture',
  books: 'set of books',
};

const PORTION_LABELS: Record<string, string> = {
  newspaper: 'newspaper',
  food: 'portion of food',
  document: 'document / copy',
};

const FLOOR_LABELS: Record<string, string> = {
  floor: 'floor / storey',
  cake: 'layer of cake',
  meaning: 'layer of meaning',
};

const LE_LABELS: Record<string, string> = {
  eat: 'eat (completed)',
  go: 'go (completed)',
  buy: 'buy (completed)',
};

const GUO_LABELS: Record<string, string> = {
  visit: 'visit (experienced)',
  eat: 'eat (experienced)',
  see: 'see (experienced)',
};

const ZHE_LABELS: Record<string, string> = {
  wear: 'wearing (state)',
  sit: 'sitting (state)',
  open: 'open (state)',
};

const ZAI_LABELS: Record<string, string> = {
  eat: 'eating (in progress)',
  study: 'studying (in progress)',
  watch: 'watching (in progress)',
};

const ABOUT_TO_LABELS: Record<string, string> = {
  rain: 'about to rain',
  depart: 'about to leave',
  start: 'about to start',
};

const NOT_YET_LABELS: Record<string, string> = {
  eat: 'haven\'t eaten yet',
  finish: 'haven\'t finished yet',
  come: 'haven\'t come yet',
};

// ── Conjugation entries ───────────────────────────────────────

const rawConjugations: Omit<ConjugationEntry, 'subjectLabels'>[] = [
  // ── More measure words ────────────────────────────────────────

  // 1. 双 (shuāng) — pairs
  {
    id: 'zh_a2_c001', language: lang, level,
    infinitive: '双', translation: 'pairs (shoes, chopsticks, gloves)',
    isRegular: true, tense: 'present',
    conjugations: {
      shoes: '一双鞋 (yī shuāng xié) — one pair of shoes',
      chopsticks: '一双筷子 (yī shuāng kuàizi) — one pair of chopsticks',
      gloves: '一双手套 (yī shuāng shǒutào) — one pair of gloves',
    },
  },
  // 2. 把 (bǎ) — things with handles
  {
    id: 'zh_a2_c002', language: lang, level,
    infinitive: '把', translation: 'things with handles (umbrella, chair, knife)',
    isRegular: true, tense: 'present',
    conjugations: {
      umbrella: '一把伞 (yī bǎ sǎn) — one umbrella',
      chair: '一把椅子 (yī bǎ yǐzi) — one chair',
      knife: '一把刀 (yī bǎ dāo) — one knife',
    },
  },
  // 3. 辆 (liàng) — vehicles
  {
    id: 'zh_a2_c003', language: lang, level,
    infinitive: '辆', translation: 'vehicles (car, bicycle, bus)',
    isRegular: true, tense: 'present',
    conjugations: {
      car: '一辆车 (yī liàng chē) — one car',
      bicycle: '一辆自行车 (yī liàng zìxíngchē) — one bicycle',
      bus: '两辆公共汽车 (liǎng liàng gōnggòng qìchē) — two buses',
    },
  },
  // 4. 套 (tào) — sets
  {
    id: 'zh_a2_c004', language: lang, level,
    infinitive: '套', translation: 'sets (clothes, furniture, books)',
    isRegular: true, tense: 'present',
    conjugations: {
      clothes: '一套衣服 (yī tào yīfu) — one set of clothes',
      furniture: '一套家具 (yī tào jiājù) — one set of furniture',
      books: '一套书 (yī tào shū) — one set of books',
    },
  },
  // 5. 份 (fèn) — portions / copies
  {
    id: 'zh_a2_c005', language: lang, level,
    infinitive: '份', translation: 'portions, copies (newspaper, food, document)',
    isRegular: true, tense: 'present',
    conjugations: {
      newspaper: '一份报纸 (yī fèn bàozhǐ) — one newspaper',
      food: '一份炒饭 (yī fèn chǎofàn) — one portion of fried rice',
      document: '三份文件 (sān fèn wénjiàn) — three copies of a document',
    },
  },
  // 6. 层 (céng) — floors / layers
  {
    id: 'zh_a2_c006', language: lang, level,
    infinitive: '层', translation: 'floors, layers (building floors, cake layers)',
    isRegular: true, tense: 'present',
    conjugations: {
      floor: '三层楼 (sān céng lóu) — third floor',
      cake: '两层蛋糕 (liǎng céng dàngāo) — two-layer cake',
      meaning: '这句话有好几层意思 (zhè jù huà yǒu hǎo jǐ céng yìsi) — this sentence has multiple layers of meaning',
    },
  },

  // ── Aspect markers ────────────────────────────────────────────

  // 7. 了 (le) — completed action
  {
    id: 'zh_a2_c007', language: lang, level,
    infinitive: '了', translation: 'completed action marker (verb + 了)',
    isRegular: true, tense: 'present',
    conjugations: {
      eat: '我吃了饭 (wǒ chī le fàn) — I ate / I\'ve eaten',
      go: '他去了北京 (tā qù le Běijīng) — He went to Beijing',
      buy: '她买了一本书 (tā mǎi le yī běn shū) — She bought a book',
    },
  },
  // 8. 过 (guò) — experienced
  {
    id: 'zh_a2_c008', language: lang, level,
    infinitive: '过', translation: 'experience marker — "have ever done"',
    isRegular: true, tense: 'present',
    conjugations: {
      visit: '我去过中国 (wǒ qù guò Zhōngguó) — I have been to China',
      eat: '你吃过北京烤鸭吗？(nǐ chī guò Běijīng kǎoyā ma?) — Have you ever eaten Peking duck?',
      see: '我看过这个电影 (wǒ kàn guò zhè ge diànyǐng) — I have seen this movie',
    },
  },
  // 9. 着 (zhe) — ongoing state
  {
    id: 'zh_a2_c009', language: lang, level,
    infinitive: '着', translation: 'ongoing state marker (verb + 着)',
    isRegular: true, tense: 'present',
    conjugations: {
      wear: '她穿着红色的衣服 (tā chuān zhe hóngsè de yīfu) — She is wearing red clothes',
      sit: '他坐着看书 (tā zuò zhe kàn shū) — He sits reading a book',
      open: '门开着呢 (mén kāi zhe ne) — The door is open',
    },
  },
  // 10. 在 (zài) — in progress
  {
    id: 'zh_a2_c010', language: lang, level,
    infinitive: '在', translation: 'progressive marker — "currently doing"',
    isRegular: true, tense: 'present',
    conjugations: {
      eat: '我在吃饭 (wǒ zài chī fàn) — I am eating',
      study: '他在学习中文 (tā zài xuéxí Zhōngwén) — He is studying Chinese',
      watch: '她在看电视 (tā zài kàn diànshì) — She is watching TV',
    },
  },
  // 11. 要...了 (yào...le) — about to happen
  {
    id: 'zh_a2_c011', language: lang, level,
    infinitive: '要...了', translation: 'about to happen — imminent action',
    isRegular: true, tense: 'present',
    conjugations: {
      rain: '要下雨了 (yào xià yǔ le) — It\'s about to rain',
      depart: '火车要开了 (huǒchē yào kāi le) — The train is about to depart',
      start: '电影要开始了 (diànyǐng yào kāishǐ le) — The movie is about to start',
    },
  },
  // 12. 还没...呢 (hái méi...ne) — haven't yet
  {
    id: 'zh_a2_c012', language: lang, level,
    infinitive: '还没...呢', translation: 'haven\'t yet — action not completed',
    isRegular: true, tense: 'present',
    conjugations: {
      eat: '我还没吃饭呢 (wǒ hái méi chī fàn ne) — I haven\'t eaten yet',
      finish: '作业还没做完呢 (zuòyè hái méi zuò wán ne) — The homework isn\'t finished yet',
      come: '他还没来呢 (tā hái méi lái ne) — He hasn\'t come yet',
    },
  },
];

// Map each entry to the correct subject labels
const LABEL_MAP: Record<string, Record<string, string>> = {
  zh_a2_c001: PAIR_LABELS,
  zh_a2_c002: HANDLE_LABELS,
  zh_a2_c003: VEHICLE_LABELS,
  zh_a2_c004: SET_LABELS,
  zh_a2_c005: PORTION_LABELS,
  zh_a2_c006: FLOOR_LABELS,
  zh_a2_c007: LE_LABELS,
  zh_a2_c008: GUO_LABELS,
  zh_a2_c009: ZHE_LABELS,
  zh_a2_c010: ZAI_LABELS,
  zh_a2_c011: ABOUT_TO_LABELS,
  zh_a2_c012: NOT_YET_LABELS,
};

/** Chinese A2 measure-word & aspect-marker entries (ConjugationEntry shape). */
export const CHINESE_A2_CONJUGATIONS: ConjugationEntry[] = rawConjugations.map(
  (entry) => ({ ...entry, subjectLabels: LABEL_MAP[entry.id] }),
);

// ── Patterns (rules-based teaching) ───────────────────────────

export const CHINESE_A2_CONJUGATION_PATTERNS: ConjugationPattern[] = [
  {
    id: 'zh_a2_cp_mw', language: lang, level,
    name: 'Specialised Measure Words (双, 把, 辆)',
    verbEnding: '双/把/辆',
    tense: 'present',
    description:
      'Beyond the basic measure words learned at A1, Chinese has many specialised ' +
      'classifiers tied to the nature or shape of the object. ' +
      '双 (shuāng) is for things that come in pairs, ' +
      '把 (bǎ) is for objects with handles or that you grasp, ' +
      'and 辆 (liàng) is specifically for wheeled vehicles.',
    rule:
      'Use the pattern: Number + Measure Word + Noun. ' +
      'Example: 一双鞋 (one pair of shoes), 一把伞 (one umbrella), 一辆车 (one car).',
    endings: {
      pair: '双 (shuāng) — pairs',
      handle: '把 (bǎ) — things with handles',
      vehicle: '辆 (liàng) — vehicles',
    },
    subjectLabels: {
      pair: 'pairs (shoes, chopsticks)',
      handle: 'things with handles',
      vehicle: 'wheeled vehicles',
    },
    exampleVerbs: ['双', '把', '辆'],
    tips: [
      '双 is specifically for things that come in pairs: 鞋 (shoes), 筷子 (chopsticks), 手套 (gloves).',
      '把 covers umbrellas, chairs, knives, keys — anything you grip or that has a handle.',
      '辆 is exclusively for vehicles: 车, 自行车, 公共汽车, 出租车.',
    ],
  },
  {
    id: 'zh_a2_cp_le', language: lang, level,
    name: 'Completion Aspect with 了 (le)',
    verbEnding: '了',
    tense: 'present',
    description:
      '了 (le) placed directly after a verb signals that the action has been completed. ' +
      'It is NOT a past tense marker — it indicates completion, which can happen in the ' +
      'past, present, or future. Sentence-final 了 can also indicate a change of state.',
    rule:
      'Verb + 了 (+ object) for completed actions. ' +
      'Example: 我吃了饭 (I ate). For change of state: 下雨了 (It\'s started to rain). ' +
      'Negative: 没 + verb (drop 了). 我没吃饭 (I didn\'t eat).',
    endings: {
      completed: 'Verb + 了 = completed',
      change: 'Sentence + 了 = change of state',
      negative: '没 + Verb (了 removed)',
    },
    subjectLabels: {
      completed: 'completed action',
      change: 'change of state',
      negative: 'negation (没)',
    },
    exampleVerbs: ['吃了', '去了', '买了'],
    tips: [
      '了 is NOT "past tense". It marks COMPLETION. You can use it for future completed actions too: ' +
        '你吃了饭再走 (eat first, then leave).',
      'To negate, use 没 and DROP 了: 我没吃饭 (I didn\'t eat), NOT *我没吃了饭.',
      'Sentence-final 了 signals change: 天冷了 (It\'s gotten cold) — the weather changed.',
    ],
  },
  {
    id: 'zh_a2_cp_guo', language: lang, level,
    name: 'Experience Aspect with 过 (guò)',
    verbEnding: '过',
    tense: 'present',
    description:
      '过 (guò) placed after a verb indicates that someone has HAD THE EXPERIENCE ' +
      'of doing something at some unspecified time in the past. It is similar to ' +
      '"have ever…" in English.',
    rule:
      'Verb + 过 (+ object) for life experiences. ' +
      'Example: 我去过中国 (I have been to China). ' +
      'Negative: 没 + verb + 过. 我没去过日本 (I have never been to Japan). ' +
      'Question: …verb + 过…吗？你吃过北京烤鸭吗？(Have you ever had Peking duck?)',
    endings: {
      positive: 'Verb + 过 = have experienced',
      negative: '没 + Verb + 过 = have never',
      question: 'Verb + 过 + 吗？ = have you ever?',
    },
    subjectLabels: {
      positive: 'positive experience',
      negative: 'negative — never done',
      question: 'asking about experience',
    },
    exampleVerbs: ['去过', '吃过', '看过'],
    tips: [
      'Unlike 了 (completion), 过 emphasises the EXPERIENCE itself, not when it happened.',
      'Compare: 我吃了烤鸭 (I ate Peking duck [specific event]) vs. ' +
        '我吃过烤鸭 (I have had Peking duck [at some point in my life]).',
      'Negative keeps 过: 没去过 (have never been), 没吃过 (have never eaten).',
    ],
  },
];
