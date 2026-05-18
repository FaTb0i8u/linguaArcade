/**
 * Chinese (Mandarin) A1 Grammar Rules
 *
 * Core grammar concepts for absolute beginners, mapped to
 * CEFR A1 / HSK 1 expectations. Chinese grammar is notably
 * simpler in morphology (no conjugation, no gender, no articles)
 * but has unique structures like tones, measure words, and
 * sentence-final particles.
 *
 * Each rule is displayed in tooltips / help screens and is
 * available for the "Learn" / intro steps in each lesson.
 */

import type { GrammarRule } from '../../../types';

const lang = 'zh' as const;
const level = 'A1' as const;

export const CHINESE_A1_GRAMMAR: GrammarRule[] = [
  {
    id: 'zh_a1_g001', language: lang, level,
    title: 'Basic Word Order (SVO)',
    explanation:
      'Chinese follows Subject-Verb-Object order, just like English.\n\n' +
      '• 我吃飯。(Wǒ chī fàn.) — I eat rice.\n' +
      '• 她喝水。(Tā hē shuǐ.) — She drinks water.\n\n' +
      'Unlike many European languages, Chinese verbs NEVER change form — ' +
      'no conjugation for person, number, or tense. ' +
      'The same verb is used regardless of who does the action or when it happens.',
    examples: [
      { target: '我吃飯。(Wǒ chī fàn.)', english: 'I eat rice.' },
      { target: '他學中文。(Tā xué Zhōngwén.)', english: 'He studies Chinese.' },
      { target: '我們喜歡音樂。(Wǒmen xǐhuan yīnyuè.)', english: 'We like music.' },
    ],
  },
  {
    id: 'zh_a1_g002', language: lang, level,
    title: 'The Four Tones',
    explanation:
      'Mandarin is a tonal language with four tones plus a neutral (light) tone. ' +
      'The tone changes the meaning of a syllable completely.\n\n' +
      '• Tone 1 (ā) — high and level: 媽 (mā) = mother\n' +
      '• Tone 2 (á) — rising: 麻 (má) = hemp / numb\n' +
      '• Tone 3 (ǎ) — dipping (fall-rise): 馬 (mǎ) = horse\n' +
      '• Tone 4 (à) — falling: 罵 (mà) = to scold\n' +
      '• Neutral tone (ma) — light and short: 嗎 (ma) = question particle\n\n' +
      'Getting tones right is essential — mā (mother) and mǎ (horse) sound very different to native ears!',
    examples: [
      { target: '媽 (mā), 麻 (má), 馬 (mǎ), 罵 (mà)', english: 'mother, hemp, horse, scold — same syllable, four meanings' },
      { target: '八 (bā) vs. 爸 (bà)', english: 'eight (tone 1) vs. dad (tone 4)' },
      { target: '書 (shū) vs. 樹 (shù)', english: 'book (tone 1) vs. tree (tone 4)' },
    ],
  },
  {
    id: 'zh_a1_g003', language: lang, level,
    title: '是 (shì) — "To Be"',
    explanation:
      '是 (shì) is used to link a subject to a NOUN or noun phrase — similar to ' +
      '"am / is / are" in English.\n\n' +
      '• 我是學生。(Wǒ shì xuéshēng.) — I am a student.\n' +
      '• 她是中國人。(Tā shì Zhōngguó rén.) — She is Chinese.\n\n' +
      'IMPORTANT: 是 is NOT used with adjectives! To say "I am happy", ' +
      'use 很 (hěn) instead: 我很高興 (Wǒ hěn gāoxìng), NOT *我是高興.',
    examples: [
      { target: '我是學生。(Wǒ shì xuéshēng.)', english: 'I am a student.' },
      { target: '他是老師。(Tā shì lǎoshī.)', english: 'He is a teacher.' },
      { target: '這是我的書。(Zhè shì wǒ de shū.)', english: 'This is my book.' },
    ],
  },
  {
    id: 'zh_a1_g004', language: lang, level,
    title: 'Negation with 不 (bù) and 沒 (méi)',
    explanation:
      'Chinese has two main negation words:\n\n' +
      '• 不 (bù) — negates habits, preferences, the future, and adjectives.\n' +
      '  我不喜歡咖啡。(Wǒ bù xǐhuan kāfēi.) — I don\'t like coffee.\n\n' +
      '• 沒 (méi) — negates past actions and 有 (yǒu, "to have").\n' +
      '  我沒去。(Wǒ méi qù.) — I didn\'t go.\n' +
      '  我沒有錢。(Wǒ méi yǒu qián.) — I don\'t have money.\n\n' +
      'Tone sandhi: 不 is normally bù (tone 4), but before another tone 4 ' +
      'it changes to bú. Example: 不是 → bú shì.',
    examples: [
      { target: '我不吃肉。(Wǒ bù chī ròu.)', english: 'I don\'t eat meat.' },
      { target: '他沒來。(Tā méi lái.)', english: 'He didn\'t come.' },
      { target: '我沒有時間。(Wǒ méi yǒu shíjiān.)', english: 'I don\'t have time.' },
    ],
  },
  {
    id: 'zh_a1_g005', language: lang, level,
    title: 'Questions with 嗎 (ma)',
    explanation:
      'The simplest way to form a yes/no question in Chinese is to add the ' +
      'particle 嗎 (ma) to the end of a statement. The word order stays exactly the same!\n\n' +
      '• Statement: 你好。(Nǐ hǎo.) — You are well.\n' +
      '• Question:  你好嗎？(Nǐ hǎo ma?) — Are you well? / How are you?\n\n' +
      'To answer, simply repeat the verb (positive) or negate it:\n' +
      '你是中國人嗎？→ 是。/ 不是。(Shì. / Bú shì.)',
    examples: [
      { target: '你好嗎？(Nǐ hǎo ma?)', english: 'How are you?' },
      { target: '你是中國人嗎？(Nǐ shì Zhōngguó rén ma?)', english: 'Are you Chinese?' },
      { target: '你喜歡茶嗎？(Nǐ xǐhuan chá ma?)', english: 'Do you like tea?' },
    ],
  },
  {
    id: 'zh_a1_g006', language: lang, level,
    title: 'Measure Words (量詞)',
    explanation:
      'In Chinese, you cannot say "one book" directly. Every noun requires a MEASURE WORD ' +
      '(量詞, liàngcí) between the number (or demonstrative) and the noun.\n\n' +
      '• 一個人 (yī gè rén) — one person (個 = general MW)\n' +
      '• 兩本書 (liǎng běn shū) — two books (本 = books MW)\n' +
      '• 這杯茶 (zhè bēi chá) — this cup of tea (杯 = cups MW)\n\n' +
      'The default measure word 個 (gè) can be used when you don\'t know the ' +
      'specific classifier, but learning the correct one for common nouns is important.',
    examples: [
      { target: '一個人 (yī gè rén)', english: 'one person (個 = general)' },
      { target: '兩本書 (liǎng běn shū)', english: 'two books (本 = books)' },
      { target: '這杯茶 (zhè bēi chá)', english: 'this cup of tea (杯 = cups)' },
    ],
  },
  {
    id: 'zh_a1_g007', language: lang, level,
    title: '的 (de) — Possessive / Attributive Particle',
    explanation:
      '的 (de) is one of the most common characters in Chinese. It marks possession ' +
      '(like English \'s or "of") and connects modifiers to nouns.\n\n' +
      '• 我的書 (wǒ de shū) — my book\n' +
      '• 紅色的花 (hóngsè de huā) — red flower (lit. "red-coloured DE flower")\n' +
      '• 媽媽做的菜 (māma zuò de cài) — food (that) mom made\n\n' +
      'Exception: With close relationships, 的 is often dropped:\n' +
      '我媽媽 (wǒ māma) = my mom (not 我的媽媽, though that is also correct).',
    examples: [
      { target: '我的書 (wǒ de shū)', english: 'my book' },
      { target: '紅色的花 (hóngsè de huā)', english: 'red flower' },
      { target: '我媽媽 (wǒ māma)', english: 'my mom (的 dropped for close relationships)' },
    ],
  },
];
