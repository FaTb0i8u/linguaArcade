/**
 * Chinese (Mandarin) A2 Grammar Rules
 *
 * Core grammar concepts for elementary learners, mapped to
 * CEFR A2 / HSK 2 expectations. Covers aspect markers (了, 過),
 * progressive aspect (在), comparisons (比), modal verbs
 * (能/會/可以), and the 把 construction.
 */

import type { GrammarRule } from '../../../types';

const lang = 'zh' as const;
const level = 'A2' as const;

export const CHINESE_A2_GRAMMAR: GrammarRule[] = [
  {
    id: 'zh_a2_g001', language: lang, level,
    title: '了 (le) — Completed Action',
    explanation:
      '了 (le) placed directly after a verb indicates that the action has been completed.\n\n' +
      '• 我吃了飯。(Wǒ chī le fàn.) — I ate. / I\'ve eaten.\n' +
      '• 她買了兩本書。(Tā mǎi le liǎng běn shū.) — She bought two books.\n\n' +
      'Sentence-final 了 signals a CHANGE OF STATE:\n' +
      '• 天冷了。(Tiān lěng le.) — It\'s gotten cold.\n' +
      '• 下雨了。(Xià yǔ le.) — It\'s started to rain.\n\n' +
      'IMPORTANT: 了 is NOT a "past tense" marker — it marks completion, ' +
      'which can occur in the past, present, or even the future. ' +
      'To negate, use 沒 and DROP 了: 我沒吃飯 (I didn\'t eat).',
    examples: [
      { target: '我吃了飯。(Wǒ chī le fàn.)', english: 'I ate. / I\'ve eaten.' },
      { target: '她買了兩本書。(Tā mǎi le liǎng běn shū.)', english: 'She bought two books.' },
      { target: '天冷了。(Tiān lěng le.)', english: 'It\'s gotten cold. (change of state)' },
    ],
  },
  {
    id: 'zh_a2_g002', language: lang, level,
    title: '過 (guò) — Experience',
    explanation:
      '過 (guò) after a verb means "have ever done" — it describes a life experience ' +
      'at an unspecified time in the past.\n\n' +
      '• 我去過中國。(Wǒ qù guò Zhōngguó.) — I have been to China.\n' +
      '• 你吃過壽司嗎？(Nǐ chī guò shòusī ma?) — Have you ever eaten sushi?\n\n' +
      'Negative: 沒 + verb + 過\n' +
      '• 我沒去過日本。(Wǒ méi qù guò Rìběn.) — I have never been to Japan.\n\n' +
      'Compare with 了: 我吃了烤鴨 (I ate Peking duck — specific event) vs. ' +
      '我吃過烤鴨 (I have had Peking duck — life experience).',
    examples: [
      { target: '我去過中國。(Wǒ qù guò Zhōngguó.)', english: 'I have been to China.' },
      { target: '你吃過壽司嗎？(Nǐ chī guò shòusī ma?)', english: 'Have you ever eaten sushi?' },
      { target: '我沒看過這個電影。(Wǒ méi kàn guò zhè ge diànyǐng.)', english: 'I have never seen this movie.' },
    ],
  },
  {
    id: 'zh_a2_g003', language: lang, level,
    title: '在 (zài) + Verb — Progressive',
    explanation:
      '在 (zài) placed before a verb indicates an action currently in progress, ' +
      'similar to English "-ing".\n\n' +
      '• 他在看電視。(Tā zài kàn diànshì.) — He is watching TV.\n' +
      '• 我在學中文。(Wǒ zài xué Zhōngwén.) — I am studying Chinese.\n\n' +
      'Emphatic form: 正在 (zhèngzài) ... 呢 (ne)\n' +
      '• 她正在做飯呢。(Tā zhèngzài zuò fàn ne.) — She is cooking right now.\n\n' +
      'Negative: 沒在 + verb\n' +
      '• 我沒在睡覺。(Wǒ méi zài shuì jiào.) — I\'m not sleeping.',
    examples: [
      { target: '他在看電視。(Tā zài kàn diànshì.)', english: 'He is watching TV.' },
      { target: '我在學中文。(Wǒ zài xué Zhōngwén.)', english: 'I am studying Chinese.' },
      { target: '她正在做飯呢。(Tā zhèngzài zuò fàn ne.)', english: 'She is cooking right now.' },
    ],
  },
  {
    id: 'zh_a2_g004', language: lang, level,
    title: '比 (bǐ) — Comparisons',
    explanation:
      '比 (bǐ) is the main comparison word in Chinese. A 比 B + adjective.\n\n' +
      '• 他比我高。(Tā bǐ wǒ gāo.) — He is taller than me.\n' +
      '• 今天比昨天冷。(Jīntiān bǐ zuótiān lěng.) — Today is colder than yesterday.\n\n' +
      'Negative comparison uses 沒有 (méiyǒu): A 沒有 B + adjective\n' +
      '• 我沒有他高。(Wǒ méiyǒu tā gāo.) — I\'m not as tall as him.\n\n' +
      'IMPORTANT: Do NOT use 很 with 比. Say 他比我高, NOT *他比我很高. ' +
      'To express degree, use 多了 or a specific amount: 他比我高多了 / 他比我高五厘米.',
    examples: [
      { target: '他比我高。(Tā bǐ wǒ gāo.)', english: 'He is taller than me.' },
      { target: '今天比昨天冷。(Jīntiān bǐ zuótiān lěng.)', english: 'Today is colder than yesterday.' },
      { target: '我沒有他高。(Wǒ méiyǒu tā gāo.)', english: 'I\'m not as tall as him.' },
    ],
  },
  {
    id: 'zh_a2_g005', language: lang, level,
    title: '能/會/可以 — Modal Verbs',
    explanation:
      'Chinese has three main modal verbs for ability and permission:\n\n' +
      '• 能 (néng) — physical ability or circumstantial permission\n' +
      '  我能跑十公里。(Wǒ néng pǎo shí gōnglǐ.) — I can run 10 km.\n\n' +
      '• 會 (huì) — learned skill or future probability\n' +
      '  她會說三種語言。(Tā huì shuō sān zhǒng yǔyán.) — She can speak three languages.\n' +
      '  明天會下雨。(Míngtiān huì xià yǔ.) — It will rain tomorrow.\n\n' +
      '• 可以 (kěyǐ) — permission\n' +
      '  我可以進來嗎？(Wǒ kěyǐ jìnlái ma?) — May I come in?\n\n' +
      'Negative: 不能, 不會, 不可以.',
    examples: [
      { target: '我能跑十公里。(Wǒ néng pǎo shí gōnglǐ.)', english: 'I can run 10 km. (physical ability)' },
      { target: '她會說三種語言。(Tā huì shuō sān zhǒng yǔyán.)', english: 'She can speak three languages. (learned skill)' },
      { target: '我可以進來嗎？(Wǒ kěyǐ jìnlái ma?)', english: 'May I come in? (permission)' },
    ],
  },
  {
    id: 'zh_a2_g006', language: lang, level,
    title: '把 (bǎ) — Object Preposing',
    explanation:
      'The 把 (bǎ) construction moves the OBJECT before the verb to emphasise ' +
      'what happens to the object. The verb must describe a result or action on the object.\n\n' +
      '• 請把門關上。(Qǐng bǎ mén guān shang.) — Please close the door.\n' +
      '• 他把作業做完了。(Tā bǎ zuòyè zuò wán le.) — He finished his homework.\n\n' +
      'Structure: Subject + 把 + Object + Verb + result/complement\n\n' +
      'IMPORTANT: The verb in a 把 sentence cannot stand alone — it must have a complement, ' +
      '了, or some other element after it. You CANNOT say *我把書看 — you need: 我把書看了 / 我把書看完了.',
    examples: [
      { target: '請把門關上。(Qǐng bǎ mén guān shang.)', english: 'Please close the door.' },
      { target: '他把作業做完了。(Tā bǎ zuòyè zuò wán le.)', english: 'He finished his homework.' },
      { target: '我把水喝了。(Wǒ bǎ shuǐ hē le.)', english: 'I drank the water. (emphasis on the water being consumed)' },
    ],
  },
];
