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
      '• 我吃饭。(Wǒ chī fàn.) — I eat rice.\n' +
      '• 她喝水。(Tā hē shuǐ.) — She drinks water.\n\n' +
      'Unlike many European languages, Chinese verbs NEVER change form — ' +
      'no conjugation for person, number, or tense. ' +
      'The same verb is used regardless of who does the action or when it happens.',
    examples: [
      { target: '我吃饭。(Wǒ chī fàn.)', english: 'I eat rice.' },
      { target: '他学中文。(Tā xué Zhōngwén.)', english: 'He studies Chinese.' },
      { target: '我们喜欢音乐。(Wǒmen xǐhuan yīnyuè.)', english: 'We like music.' },
    ],
  },
  {
    id: 'zh_a1_g002', language: lang, level,
    title: 'The Four Tones',
    explanation:
      'Mandarin is a tonal language with four tones plus a neutral (light) tone. ' +
      'The tone changes the meaning of a syllable completely.\n\n' +
      '• Tone 1 (ā) — high and level: 妈 (mā) = mother\n' +
      '• Tone 2 (á) — rising: 麻 (má) = hemp / numb\n' +
      '• Tone 3 (ǎ) — dipping (fall-rise): 马 (mǎ) = horse\n' +
      '• Tone 4 (à) — falling: 骂 (mà) = to scold\n' +
      '• Neutral tone (ma) — light and short: 吗 (ma) = question particle\n\n' +
      'Getting tones right is essential — mā (mother) and mǎ (horse) sound very different to native ears!',
    examples: [
      { target: '妈 (mā), 麻 (má), 马 (mǎ), 骂 (mà)', english: 'mother, hemp, horse, scold — same syllable, four meanings' },
      { target: '八 (bā) vs. 爸 (bà)', english: 'eight (tone 1) vs. dad (tone 4)' },
      { target: '书 (shū) vs. 树 (shù)', english: 'book (tone 1) vs. tree (tone 4)' },
    ],
  },
  {
    id: 'zh_a1_g003', language: lang, level,
    title: '是 (shì) — "To Be"',
    explanation:
      '是 (shì) is used to link a subject to a NOUN or noun phrase — similar to ' +
      '"am / is / are" in English.\n\n' +
      '• 我是学生。(Wǒ shì xuéshēng.) — I am a student.\n' +
      '• 她是中国人。(Tā shì Zhōngguó rén.) — She is Chinese.\n\n' +
      'IMPORTANT: 是 is NOT used with adjectives! To say "I am happy", ' +
      'use 很 (hěn) instead: 我很高兴 (Wǒ hěn gāoxìng), NOT *我是高兴.',
    examples: [
      { target: '我是学生。(Wǒ shì xuéshēng.)', english: 'I am a student.' },
      { target: '他是老师。(Tā shì lǎoshī.)', english: 'He is a teacher.' },
      { target: '这是我的书。(Zhè shì wǒ de shū.)', english: 'This is my book.' },
    ],
  },
  {
    id: 'zh_a1_g004', language: lang, level,
    title: 'Negation with 不 (bù) and 没 (méi)',
    explanation:
      'Chinese has two main negation words:\n\n' +
      '• 不 (bù) — negates habits, preferences, the future, and adjectives.\n' +
      '  我不喜欢咖啡。(Wǒ bù xǐhuan kāfēi.) — I don\'t like coffee.\n\n' +
      '• 没 (méi) — negates past actions and 有 (yǒu, "to have").\n' +
      '  我没去。(Wǒ méi qù.) — I didn\'t go.\n' +
      '  我没有钱。(Wǒ méi yǒu qián.) — I don\'t have money.\n\n' +
      'Tone sandhi: 不 is normally bù (tone 4), but before another tone 4 ' +
      'it changes to bú. Example: 不是 → bú shì.',
    examples: [
      { target: '我不吃肉。(Wǒ bù chī ròu.)', english: 'I don\'t eat meat.' },
      { target: '他没来。(Tā méi lái.)', english: 'He didn\'t come.' },
      { target: '我没有时间。(Wǒ méi yǒu shíjiān.)', english: 'I don\'t have time.' },
    ],
  },
  {
    id: 'zh_a1_g005', language: lang, level,
    title: 'Questions with 吗 (ma)',
    explanation:
      'The simplest way to form a yes/no question in Chinese is to add the ' +
      'particle 吗 (ma) to the end of a statement. The word order stays exactly the same!\n\n' +
      '• Statement: 你好。(Nǐ hǎo.) — You are well.\n' +
      '• Question:  你好吗？(Nǐ hǎo ma?) — Are you well? / How are you?\n\n' +
      'To answer, simply repeat the verb (positive) or negate it:\n' +
      '你是中国人吗？→ 是。/ 不是。(Shì. / Bú shì.)',
    examples: [
      { target: '你好吗？(Nǐ hǎo ma?)', english: 'How are you?' },
      { target: '你是中国人吗？(Nǐ shì Zhōngguó rén ma?)', english: 'Are you Chinese?' },
      { target: '你喜欢茶吗？(Nǐ xǐhuan chá ma?)', english: 'Do you like tea?' },
    ],
  },
  {
    id: 'zh_a1_g006', language: lang, level,
    title: 'Measure Words (量词)',
    explanation:
      'In Chinese, you cannot say "one book" directly. Every noun requires a MEASURE WORD ' +
      '(量词, liàngcí) between the number (or demonstrative) and the noun.\n\n' +
      '• 一个人 (yī gè rén) — one person (个 = general MW)\n' +
      '• 两本书 (liǎng běn shū) — two books (本 = books MW)\n' +
      '• 这杯茶 (zhè bēi chá) — this cup of tea (杯 = cups MW)\n\n' +
      'The default measure word 个 (gè) can be used when you don\'t know the ' +
      'specific classifier, but learning the correct one for common nouns is important.',
    examples: [
      { target: '一个人 (yī gè rén)', english: 'one person (个 = general)' },
      { target: '两本书 (liǎng běn shū)', english: 'two books (本 = books)' },
      { target: '这杯茶 (zhè bēi chá)', english: 'this cup of tea (杯 = cups)' },
    ],
  },
  {
    id: 'zh_a1_g007', language: lang, level,
    title: '的 (de) — Possessive / Attributive Particle',
    explanation:
      '的 (de) is one of the most common characters in Chinese. It marks possession ' +
      '(like English \'s or "of") and connects modifiers to nouns.\n\n' +
      '• 我的书 (wǒ de shū) — my book\n' +
      '• 红色的花 (hóngsè de huā) — red flower (lit. "red-coloured DE flower")\n' +
      '• 妈妈做的菜 (māma zuò de cài) — food (that) mom made\n\n' +
      'Exception: With close relationships, 的 is often dropped:\n' +
      '我妈妈 (wǒ māma) = my mom (not 我的妈妈, though that is also correct).',
    examples: [
      { target: '我的书 (wǒ de shū)', english: 'my book' },
      { target: '红色的花 (hóngsè de huā)', english: 'red flower' },
      { target: '我妈妈 (wǒ māma)', english: 'my mom (的 dropped for close relationships)' },
    ],
  },
];
