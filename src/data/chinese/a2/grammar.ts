/**
 * Chinese (Mandarin) A2 Grammar Rules
 *
 * Core grammar concepts for elementary learners, mapped to
 * CEFR A2 / HSK 2 expectations. Covers aspect markers (了, 过),
 * progressive aspect (在), comparisons (比), modal verbs
 * (能/会/可以), and the 把 construction.
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
      '• 我吃了饭。(Wǒ chī le fàn.) — I ate. / I\'ve eaten.\n' +
      '• 她买了两本书。(Tā mǎi le liǎng běn shū.) — She bought two books.\n\n' +
      'Sentence-final 了 signals a CHANGE OF STATE:\n' +
      '• 天冷了。(Tiān lěng le.) — It\'s gotten cold.\n' +
      '• 下雨了。(Xià yǔ le.) — It\'s started to rain.\n\n' +
      'IMPORTANT: 了 is NOT a "past tense" marker — it marks completion, ' +
      'which can occur in the past, present, or even the future. ' +
      'To negate, use 没 and DROP 了: 我没吃饭 (I didn\'t eat).',
    examples: [
      { target: '我吃了饭。(Wǒ chī le fàn.)', english: 'I ate. / I\'ve eaten.' },
      { target: '她买了两本书。(Tā mǎi le liǎng běn shū.)', english: 'She bought two books.' },
      { target: '天冷了。(Tiān lěng le.)', english: 'It\'s gotten cold. (change of state)' },
    ],
  },
  {
    id: 'zh_a2_g002', language: lang, level,
    title: '过 (guò) — Experience',
    explanation:
      '过 (guò) after a verb means "have ever done" — it describes a life experience ' +
      'at an unspecified time in the past.\n\n' +
      '• 我去过中国。(Wǒ qù guò Zhōngguó.) — I have been to China.\n' +
      '• 你吃过寿司吗？(Nǐ chī guò shòusī ma?) — Have you ever eaten sushi?\n\n' +
      'Negative: 没 + verb + 过\n' +
      '• 我没去过日本。(Wǒ méi qù guò Rìběn.) — I have never been to Japan.\n\n' +
      'Compare with 了: 我吃了烤鸭 (I ate Peking duck — specific event) vs. ' +
      '我吃过烤鸭 (I have had Peking duck — life experience).',
    examples: [
      { target: '我去过中国。(Wǒ qù guò Zhōngguó.)', english: 'I have been to China.' },
      { target: '你吃过寿司吗？(Nǐ chī guò shòusī ma?)', english: 'Have you ever eaten sushi?' },
      { target: '我没看过这个电影。(Wǒ méi kàn guò zhè ge diànyǐng.)', english: 'I have never seen this movie.' },
    ],
  },
  {
    id: 'zh_a2_g003', language: lang, level,
    title: '在 (zài) + Verb — Progressive',
    explanation:
      '在 (zài) placed before a verb indicates an action currently in progress, ' +
      'similar to English "-ing".\n\n' +
      '• 他在看电视。(Tā zài kàn diànshì.) — He is watching TV.\n' +
      '• 我在学中文。(Wǒ zài xué Zhōngwén.) — I am studying Chinese.\n\n' +
      'Emphatic form: 正在 (zhèngzài) ... 呢 (ne)\n' +
      '• 她正在做饭呢。(Tā zhèngzài zuò fàn ne.) — She is cooking right now.\n\n' +
      'Negative: 没在 + verb\n' +
      '• 我没在睡觉。(Wǒ méi zài shuì jiào.) — I\'m not sleeping.',
    examples: [
      { target: '他在看电视。(Tā zài kàn diànshì.)', english: 'He is watching TV.' },
      { target: '我在学中文。(Wǒ zài xué Zhōngwén.)', english: 'I am studying Chinese.' },
      { target: '她正在做饭呢。(Tā zhèngzài zuò fàn ne.)', english: 'She is cooking right now.' },
    ],
  },
  {
    id: 'zh_a2_g004', language: lang, level,
    title: '比 (bǐ) — Comparisons',
    explanation:
      '比 (bǐ) is the main comparison word in Chinese. A 比 B + adjective.\n\n' +
      '• 他比我高。(Tā bǐ wǒ gāo.) — He is taller than me.\n' +
      '• 今天比昨天冷。(Jīntiān bǐ zuótiān lěng.) — Today is colder than yesterday.\n\n' +
      'Negative comparison uses 没有 (méiyǒu): A 没有 B + adjective\n' +
      '• 我没有他高。(Wǒ méiyǒu tā gāo.) — I\'m not as tall as him.\n\n' +
      'IMPORTANT: Do NOT use 很 with 比. Say 他比我高, NOT *他比我很高. ' +
      'To express degree, use 多了 or a specific amount: 他比我高多了 / 他比我高五厘米.',
    examples: [
      { target: '他比我高。(Tā bǐ wǒ gāo.)', english: 'He is taller than me.' },
      { target: '今天比昨天冷。(Jīntiān bǐ zuótiān lěng.)', english: 'Today is colder than yesterday.' },
      { target: '我没有他高。(Wǒ méiyǒu tā gāo.)', english: 'I\'m not as tall as him.' },
    ],
  },
  {
    id: 'zh_a2_g005', language: lang, level,
    title: '能/会/可以 — Modal Verbs',
    explanation:
      'Chinese has three main modal verbs for ability and permission:\n\n' +
      '• 能 (néng) — physical ability or circumstantial permission\n' +
      '  我能跑十公里。(Wǒ néng pǎo shí gōnglǐ.) — I can run 10 km.\n\n' +
      '• 会 (huì) — learned skill or future probability\n' +
      '  她会说三种语言。(Tā huì shuō sān zhǒng yǔyán.) — She can speak three languages.\n' +
      '  明天会下雨。(Míngtiān huì xià yǔ.) — It will rain tomorrow.\n\n' +
      '• 可以 (kěyǐ) — permission\n' +
      '  我可以进来吗？(Wǒ kěyǐ jìnlái ma?) — May I come in?\n\n' +
      'Negative: 不能, 不会, 不可以.',
    examples: [
      { target: '我能跑十公里。(Wǒ néng pǎo shí gōnglǐ.)', english: 'I can run 10 km. (physical ability)' },
      { target: '她会说三种语言。(Tā huì shuō sān zhǒng yǔyán.)', english: 'She can speak three languages. (learned skill)' },
      { target: '我可以进来吗？(Wǒ kěyǐ jìnlái ma?)', english: 'May I come in? (permission)' },
    ],
  },
  {
    id: 'zh_a2_g006', language: lang, level,
    title: '把 (bǎ) — Object Preposing',
    explanation:
      'The 把 (bǎ) construction moves the OBJECT before the verb to emphasise ' +
      'what happens to the object. The verb must describe a result or action on the object.\n\n' +
      '• 请把门关上。(Qǐng bǎ mén guān shang.) — Please close the door.\n' +
      '• 他把作业做完了。(Tā bǎ zuòyè zuò wán le.) — He finished his homework.\n\n' +
      'Structure: Subject + 把 + Object + Verb + result/complement\n\n' +
      'IMPORTANT: The verb in a 把 sentence cannot stand alone — it must have a complement, ' +
      '了, or some other element after it. You CANNOT say *我把书看 — you need: 我把书看了 / 我把书看完了.',
    examples: [
      { target: '请把门关上。(Qǐng bǎ mén guān shang.)', english: 'Please close the door.' },
      { target: '他把作业做完了。(Tā bǎ zuòyè zuò wán le.)', english: 'He finished his homework.' },
      { target: '我把水喝了。(Wǒ bǎ shuǐ hē le.)', english: 'I drank the water. (emphasis on the water being consumed)' },
    ],
  },
];
