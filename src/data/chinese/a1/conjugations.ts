/**
 * Chinese (Mandarin) A1 — Measure Words (量词) as "Conjugations"
 *
 * Chinese has no verb conjugation. We repurpose the ConjugationEntry
 * structure to teach MEASURE WORDS (量词), which are the grammatical
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
  // 1. 个 (gè) — general / default measure word
  {
    id: 'zh_a1_c001', language: lang, level,
    infinitive: '个', translation: 'general measure word (people, things)',
    isRegular: true, tense: 'present',
    conjugations: {
      person: '一个人 (yī gè rén) — one person',
      object: '两个苹果 (liǎng gè píngguǒ) — two apples',
      abstract: '一个问题 (yī gè wèntí) — one question',
    },
  },
  // 2. 本 (běn) — books, magazines
  {
    id: 'zh_a1_c002', language: lang, level,
    infinitive: '本', translation: 'books, magazines, bound volumes',
    isRegular: true, tense: 'present',
    conjugations: {
      book: '一本书 (yī běn shū) — one book',
      magazine: '两本杂志 (liǎng běn zázhì) — two magazines',
      dictionary: '一本词典 (yī běn cídiǎn) — one dictionary',
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
      coffee: '两杯咖啡 (liǎng bēi kāfēi) — two cups of coffee',
    },
  },
  // 4. 瓶 (píng) — bottles
  {
    id: 'zh_a1_c004', language: lang, level,
    infinitive: '瓶', translation: 'bottles',
    isRegular: true, tense: 'present',
    conjugations: {
      water: '一瓶水 (yī píng shuǐ) — one bottle of water',
      beer: '两瓶啤酒 (liǎng píng píjiǔ) — two bottles of beer',
      milk: '一瓶牛奶 (yī píng niúnǎi) — one bottle of milk',
    },
  },
  // 5. 块 (kuài) — money (yuan), pieces
  {
    id: 'zh_a1_c005', language: lang, level,
    infinitive: '块', translation: 'money (yuan), pieces / chunks',
    isRegular: true, tense: 'present',
    conjugations: {
      money: '十块钱 (shí kuài qián) — ten yuan',
      cake: '一块蛋糕 (yī kuài dàngāo) — one piece of cake',
      soap: '一块肥皂 (yī kuài féizào) — one bar of soap',
    },
  },
  // 6. 只 (zhī) — small animals
  {
    id: 'zh_a1_c006', language: lang, level,
    infinitive: '只', translation: 'small animals',
    isRegular: true, tense: 'present',
    conjugations: {
      cat: '一只猫 (yī zhī māo) — one cat',
      bird: '两只鸟 (liǎng zhī niǎo) — two birds',
      dog: '一只小狗 (yī zhī xiǎo gǒu) — one small dog',
    },
  },
  // 7. 条 (tiáo) — long, thin things (fish, roads, rivers)
  {
    id: 'zh_a1_c007', language: lang, level,
    infinitive: '条', translation: 'long / thin things (fish, roads, rivers)',
    isRegular: true, tense: 'present',
    conjugations: {
      fish: '一条鱼 (yī tiáo yú) — one fish',
      road: '一条路 (yī tiáo lù) — one road',
      river: '一条河 (yī tiáo hé) — one river',
    },
  },
  // 8. 张 (zhāng) — flat things (paper, tables, tickets)
  {
    id: 'zh_a1_c008', language: lang, level,
    infinitive: '张', translation: 'flat things (paper, tables, tickets)',
    isRegular: true, tense: 'present',
    conjugations: {
      paper: '一张纸 (yī zhāng zhǐ) — one sheet of paper',
      table: '一张桌子 (yī zhāng zhuōzi) — one table',
      ticket: '两张票 (liǎng zhāng piào) — two tickets',
    },
  },
  // 9. 件 (jiàn) — clothing, matters / affairs
  {
    id: 'zh_a1_c009', language: lang, level,
    infinitive: '件', translation: 'clothing items, matters / affairs',
    isRegular: true, tense: 'present',
    conjugations: {
      shirt: '一件衬衫 (yī jiàn chènshān) — one shirt',
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
      teacher: '一位老师 (yī wèi lǎoshī) — one teacher',
      guest: '几位客人 (jǐ wèi kèrén) — several guests',
      doctor: '这位医生 (zhè wèi yīshēng) — this doctor',
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
    name: 'General Measure Word 个 (gè)',
    verbEnding: '个',
    tense: 'present',
    description:
      '个 is the most common measure word in Chinese. When you don\'t know ' +
      'the specific classifier for a noun, 个 is often an acceptable default. ' +
      'It is used with people, many everyday objects, and abstract concepts.',
    rule:
      'Use the pattern: Number/Demonstrative + 个 + Noun. ' +
      'Example: 一个人 (one person), 这个东西 (this thing).',
    endings: {
      person: '个人 (gè rén)',
      object: '个东西 (gè dōngxi)',
      abstract: '个问题 (gè wèntí)',
    },
    subjectLabels: GENERAL_LABELS,
    exampleVerbs: ['个'],
    tips: [
      '个 is the "safe" fallback — native speakers sometimes use it even when ' +
        'a more specific measure word exists, especially in casual speech.',
      'In spoken Mandarin the tone on 个 is often neutralised to "ge" (no tone).',
      'Common structure: 一个 (yī gè) = "one …", 两个 (liǎng gè) = "two …", ' +
        '几个 (jǐ gè) = "how many …".',
    ],
  },
  {
    id: 'zh_a1_mw_container', language: lang, level,
    name: 'Container Measure Words (杯, 瓶, 块)',
    verbEnding: '杯/瓶/块',
    tense: 'present',
    description:
      'Container and portion measure words describe how a noun is packaged ' +
      'or divided. 杯 (bēi) is for cups/glasses, 瓶 (píng) is for bottles, ' +
      'and 块 (kuài) is for pieces/chunks as well as the colloquial word for yuan (money).',
    rule:
      'Use the pattern: Number + Container MW + Noun. ' +
      'Example: 一杯茶 (one cup of tea), 两瓶水 (two bottles of water), 十块钱 (ten yuan).',
    endings: {
      cup: '杯 (bēi) — cup / glass',
      bottle: '瓶 (píng) — bottle',
      piece: '块 (kuài) — piece / yuan',
    },
    subjectLabels: {
      cup: 'cup / glass',
      bottle: 'bottle',
      piece: 'piece / yuan',
    },
    exampleVerbs: ['杯', '瓶', '块'],
    tips: [
      '杯 literally means "cup" — it works for any drink: 一杯水, 一杯咖啡, 一杯酒.',
      '块 does double duty: 一块蛋糕 (a piece of cake) vs 十块钱 (ten yuan). ' +
        'Context makes the meaning clear.',
      'These measure words behave like English "a glass of …" or "a bottle of …" — ' +
        'but in Chinese they are mandatory, not optional.',
    ],
  },
  {
    id: 'zh_a1_mw_shape', language: lang, level,
    name: 'Shape-Based Measure Words (条, 张, 只)',
    verbEnding: '条/张/只',
    tense: 'present',
    description:
      'Many Chinese measure words are chosen based on the SHAPE of the noun. ' +
      '条 (tiáo) is for long, thin things; 张 (zhāng) is for flat, spread-out things; ' +
      '只 (zhī) is for small animals (and some paired items like hands or ears).',
    rule:
      'Match the measure word to the shape of the noun: ' +
      'long/thin → 条, flat → 张, small animal → 只. ' +
      'Example: 一条河 (a river), 一张纸 (a sheet of paper), 一只猫 (a cat).',
    endings: {
      long: '条 (tiáo) — long / thin',
      flat: '张 (zhāng) — flat / spread out',
      animal: '只 (zhī) — small animal',
    },
    subjectLabels: {
      long: 'long / thin',
      flat: 'flat / spread out',
      animal: 'small animal',
    },
    exampleVerbs: ['条', '张', '只'],
    tips: [
      '条 covers fish (一条鱼), rivers (一条河), roads (一条路), trousers (一条裤子), ' +
        'and even news items (一条新闻) — all "long" in some sense.',
      '张 covers paper (一张纸), photos (一张照片), tables (一张桌子), beds (一张床), ' +
        'and tickets (一张票) — all "flat" surfaces.',
      '只 is mainly for small animals: 一只猫 (cat), 一只鸟 (bird), 一只兔子 (rabbit). ' +
        'Larger animals often use 头 (tóu) or 匹 (pǐ), but those are beyond A1.',
    ],
  },
];
