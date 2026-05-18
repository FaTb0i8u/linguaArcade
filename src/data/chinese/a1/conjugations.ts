/**
 * Chinese (Mandarin) A1 — Measure Words (量詞) as "Conjugations"
 *
 * Chinese has no verb conjugation. We repurpose the ConjugationEntry
 * structure to teach MEASURE WORDS (量詞), which are the grammatical
 * classifiers required between a number/demonstrative and a noun.
 *
 * Structure mapping:
 *   infinitive   → measure word character
 *   translation  → what it classifies
 *   tense        → 'present' (Chinese is tenseless)
 *   isRegular    → true
 *   conjugations → example phrases using the measure word with various nouns
 *   subjectLabels→ descriptive labels for each key
 *
 * ConjugationPatterns teach three overarching rules for using
 * measure words at the A1 level.
 *
 * IDs: zh_a1_c001–zh_a1_c010 (entries), zh_a1_mw_* (patterns).
 */

import type { ConjugationEntry, ConjugationPattern } from '../../../types';

const lang = 'zh' as const;
const level = 'A1' as const;

// ── Measure-word subject labels (reused across entries) ───────

/** Labels describe the semantic slot each key represents. */
const GENERAL_LABELS: Record<string, string> = {
  person: 'person',
  object: 'object',
  abstract: 'abstract / general',
};

const BOOK_LABELS: Record<string, string> = {
  book: 'book',
  magazine: 'magazine',
  dictionary: 'dictionary',
};

const CUP_LABELS: Record<string, string> = {
  water: 'water',
  tea: 'tea',
  coffee: 'coffee',
};

const BOTTLE_LABELS: Record<string, string> = {
  water: 'water',
  beer: 'beer',
  milk: 'milk',
};

const MONEY_LABELS: Record<string, string> = {
  money: 'money (yuan)',
  cake: 'piece (cake)',
  soap: 'bar (soap)',
};

const ANIMAL_LABELS: Record<string, string> = {
  cat: 'cat',
  bird: 'bird',
  dog: 'small dog',
};

const LONG_LABELS: Record<string, string> = {
  fish: 'fish',
  road: 'road',
  river: 'river',
};

const FLAT_LABELS: Record<string, string> = {
  paper: 'paper',
  table: 'table',
  ticket: 'ticket',
};

const CLOTHING_LABELS: Record<string, string> = {
  shirt: 'shirt',
  coat: 'coat',
  matter: 'matter / affair',
};

const POLITE_LABELS: Record<string, string> = {
  teacher: 'teacher',
  guest: 'guest',
  doctor: 'doctor',
};

// ── Conjugation entries (measure words) ───────────────────────

const rawConjugations: Omit<ConjugationEntry, 'subjectLabels'>[] = [
  // 1. 個 (gè) — general / default measure word
  {
    id: 'zh_a1_c001', language: lang, level,
    infinitive: '個', translation: 'general measure word (people, things)',
    isRegular: true, tense: 'present',
    conjugations: {
      person: '一個人 (yī gè rén) — one person',
      object: '兩個蘋果 (liǎng gè píngguǒ) — two apples',
      abstract: '一個問題 (yī gè wèntí) — one question',
    },
  },
  // 2. 本 (běn) — books, magazines
  {
    id: 'zh_a1_c002', language: lang, level,
    infinitive: '本', translation: 'books, magazines, bound volumes',
    isRegular: true, tense: 'present',
    conjugations: {
      book: '一本書 (yī běn shū) — one book',
      magazine: '兩本雜誌 (liǎng běn zázhì) — two magazines',
      dictionary: '一本詞典 (yī běn cídiǎn) — one dictionary',
    },
  },
  // 3. 杯 (bēi) — cups, glasses of liquid
  {
    id: 'zh_a1_c003', language: lang, level,
    infinitive: '杯', translation: 'cups / glasses (of liquid)',
    isRegular: true, tense: 'present',
    conjugations: {
      water: '一杯水 (yī bēi shuǐ) — one glass of water',
      tea: '一杯茶 (yī bēi chá) — one cup of tea',
      coffee: '兩杯咖啡 (liǎng bēi kāfēi) — two cups of coffee',
    },
  },
  // 4. 瓶 (píng) — bottles
  {
    id: 'zh_a1_c004', language: lang, level,
    infinitive: '瓶', translation: 'bottles',
    isRegular: true, tense: 'present',
    conjugations: {
      water: '一瓶水 (yī píng shuǐ) — one bottle of water',
      beer: '兩瓶啤酒 (liǎng píng píjiǔ) — two bottles of beer',
      milk: '一瓶牛奶 (yī píng niúnǎi) — one bottle of milk',
    },
  },
  // 5. 塊 (kuài) — money (yuan), pieces
  {
    id: 'zh_a1_c005', language: lang, level,
    infinitive: '塊', translation: 'money (yuan), pieces / chunks',
    isRegular: true, tense: 'present',
    conjugations: {
      money: '十塊錢 (shí kuài qián) — ten yuan',
      cake: '一塊蛋糕 (yī kuài dàngāo) — one piece of cake',
      soap: '一塊肥皂 (yī kuài féizào) — one bar of soap',
    },
  },
  // 6. 隻 (zhī) — small animals
  {
    id: 'zh_a1_c006', language: lang, level,
    infinitive: '隻', translation: 'small animals',
    isRegular: true, tense: 'present',
    conjugations: {
      cat: '一隻貓 (yī zhī māo) — one cat',
      bird: '兩隻鳥 (liǎng zhī niǎo) — two birds',
      dog: '一隻小狗 (yī zhī xiǎo gǒu) — one small dog',
    },
  },
  // 7. 條 (tiáo) — long, thin things (fish, roads, rivers)
  {
    id: 'zh_a1_c007', language: lang, level,
    infinitive: '條', translation: 'long / thin things (fish, roads, rivers)',
    isRegular: true, tense: 'present',
    conjugations: {
      fish: '一條魚 (yī tiáo yú) — one fish',
      road: '一條路 (yī tiáo lù) — one road',
      river: '一條河 (yī tiáo hé) — one river',
    },
  },
  // 8. 張 (zhāng) — flat things (paper, tables, tickets)
  {
    id: 'zh_a1_c008', language: lang, level,
    infinitive: '張', translation: 'flat things (paper, tables, tickets)',
    isRegular: true, tense: 'present',
    conjugations: {
      paper: '一張紙 (yī zhāng zhǐ) — one sheet of paper',
      table: '一張桌子 (yī zhāng zhuōzi) — one table',
      ticket: '兩張票 (liǎng zhāng piào) — two tickets',
    },
  },
  // 9. 件 (jiàn) — clothing, matters / affairs
  {
    id: 'zh_a1_c009', language: lang, level,
    infinitive: '件', translation: 'clothing items, matters / affairs',
    isRegular: true, tense: 'present',
    conjugations: {
      shirt: '一件襯衫 (yī jiàn chènshān) — one shirt',
      coat: '一件外套 (yī jiàn wàitào) — one coat',
      matter: '一件事 (yī jiàn shì) — one matter / affair',
    },
  },
  // 10. 位 (wèi) — people (polite)
  {
    id: 'zh_a1_c010', language: lang, level,
    infinitive: '位', translation: 'people (polite / respectful)',
    isRegular: true, tense: 'present',
    conjugations: {
      teacher: '一位老師 (yī wèi lǎoshī) — one teacher',
      guest: '幾位客人 (jǐ wèi kèrén) — several guests',
      doctor: '這位醫生 (zhè wèi yīshēng) — this doctor',
    },
  },
];

// Map each entry to the correct subject labels
const LABEL_MAP: Record<string, Record<string, string>> = {
  zh_a1_c001: GENERAL_LABELS,
  zh_a1_c002: BOOK_LABELS,
  zh_a1_c003: CUP_LABELS,
  zh_a1_c004: BOTTLE_LABELS,
  zh_a1_c005: MONEY_LABELS,
  zh_a1_c006: ANIMAL_LABELS,
  zh_a1_c007: LONG_LABELS,
  zh_a1_c008: FLAT_LABELS,
  zh_a1_c009: CLOTHING_LABELS,
  zh_a1_c010: POLITE_LABELS,
};

/** Chinese A1 measure-word entries (ConjugationEntry shape). */
export const CHINESE_A1_CONJUGATIONS: ConjugationEntry[] = rawConjugations.map(
  (entry) => ({ ...entry, subjectLabels: LABEL_MAP[entry.id] }),
);

// ── Measure-word Patterns (rules-based teaching) ──────────────

export const CHINESE_A1_CONJUGATION_PATTERNS: ConjugationPattern[] = [
  {
    id: 'zh_a1_mw_gen', language: lang, level,
    name: 'General Measure Word 個 (gè)',
    verbEnding: '個',
    tense: 'present',
    description:
      '個 is the most common measure word in Chinese. When you don\'t know ' +
      'the specific classifier for a noun, 個 is often an acceptable default. ' +
      'It is used with people, many everyday objects, and abstract concepts.',
    rule:
      'Use the pattern: Number/Demonstrative + 個 + Noun. ' +
      'Example: 一個人 (one person), 這個東西 (this thing).',
    endings: {
      person: '個人 (gè rén)',
      object: '個東西 (gè dōngxi)',
      abstract: '個問題 (gè wèntí)',
    },
    subjectLabels: GENERAL_LABELS,
    exampleVerbs: ['個'],
    tips: [
      '個 is the "safe" fallback — native speakers sometimes use it even when ' +
        'a more specific measure word exists, especially in casual speech.',
      'In spoken Mandarin the tone on 個 is often neutralised to "ge" (no tone).',
      'Common structure: 一個 (yī gè) = "one …", 兩個 (liǎng gè) = "two …", ' +
        '幾個 (jǐ gè) = "how many …".',
    ],
  },
  {
    id: 'zh_a1_mw_container', language: lang, level,
    name: 'Container Measure Words (杯, 瓶, 塊)',
    verbEnding: '杯/瓶/塊',
    tense: 'present',
    description:
      'Container and portion measure words describe how a noun is packaged ' +
      'or divided. 杯 (bēi) is for cups/glasses, 瓶 (píng) is for bottles, ' +
      'and 塊 (kuài) is for pieces/chunks as well as the colloquial word for yuan (money).',
    rule:
      'Use the pattern: Number + Container MW + Noun. ' +
      'Example: 一杯茶 (one cup of tea), 兩瓶水 (two bottles of water), 十塊錢 (ten yuan).',
    endings: {
      cup: '杯 (bēi) — cup / glass',
      bottle: '瓶 (píng) — bottle',
      piece: '塊 (kuài) — piece / yuan',
    },
    subjectLabels: {
      cup: 'cup / glass',
      bottle: 'bottle',
      piece: 'piece / yuan',
    },
    exampleVerbs: ['杯', '瓶', '塊'],
    tips: [
      '杯 literally means "cup" — it works for any drink: 一杯水, 一杯咖啡, 一杯酒.',
      '塊 does double duty: 一塊蛋糕 (a piece of cake) vs 十塊錢 (ten yuan). ' +
        'Context makes the meaning clear.',
      'These measure words behave like English "a glass of …" or "a bottle of …" — ' +
        'but in Chinese they are mandatory, not optional.',
    ],
  },
  {
    id: 'zh_a1_mw_shape', language: lang, level,
    name: 'Shape-Based Measure Words (條, 張, 隻)',
    verbEnding: '條/張/隻',
    tense: 'present',
    description:
      'Many Chinese measure words are chosen based on the SHAPE of the noun. ' +
      '條 (tiáo) is for long, thin things; 張 (zhāng) is for flat, spread-out things; ' +
      '隻 (zhī) is for small animals (and some paired items like hands or ears).',
    rule:
      'Match the measure word to the shape of the noun: ' +
      'long/thin → 條, flat → 張, small animal → 隻. ' +
      'Example: 一條河 (a river), 一張紙 (a sheet of paper), 一隻貓 (a cat).',
    endings: {
      long: '條 (tiáo) — long / thin',
      flat: '張 (zhāng) — flat / spread out',
      animal: '隻 (zhī) — small animal',
    },
    subjectLabels: {
      long: 'long / thin',
      flat: 'flat / spread out',
      animal: 'small animal',
    },
    exampleVerbs: ['條', '張', '隻'],
    tips: [
      '條 covers fish (一條魚), rivers (一條河), roads (一條路), trousers (一條褲子), ' +
        'and even news items (一條新聞) — all "long" in some sense.',
      '張 covers paper (一張紙), photos (一張照片), tables (一張桌子), beds (一張床), ' +
        'and tickets (一張票) — all "flat" surfaces.',
      '隻 is mainly for small animals: 一隻貓 (cat), 一隻鳥 (bird), 一隻兔子 (rabbit). ' +
        'Larger animals often use 頭 (tóu) or 匹 (pǐ), but those are beyond A1.',
    ],
  },
];
