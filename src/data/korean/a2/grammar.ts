/**
 * Korean A2 Grammar Rules
 *
 * Builds on A1 with past tense, connecting particles,
 * ability/desire expressions, and basic honorifics.
 */

import type { GrammarRule } from '../../../types';

const lang = 'ko' as const;
const level = 'A2' as const;

export const KOREAN_A2_GRAMMAR: GrammarRule[] = [
  {
    id: 'ko_a2_g001', language: lang, level,
    title: 'Past Tense (았/었/했)',
    explanation:
      'Korean past tense follows vowel harmony:\n\n' +
      '• Stem ends in ㅏ/ㅗ → add 았어요\n' +
      '• Other vowels → add 었어요\n' +
      '• 하다 verbs → always 했어요\n\n' +
      'The verb always goes at the end — just change the ending to past.',
    examples: [
      { target: '어제 학교에 갔어요.', english: 'I went to school yesterday. (가다 → 갔어요)' },
      { target: '밥을 먹었어요.', english: 'I ate rice. (먹다 → 먹었어요)' },
      { target: '운동했어요.', english: 'I exercised. (운동하다 → 운동했어요)' },
    ],
  },
  {
    id: 'ko_a2_g002', language: lang, level,
    title: 'Want To — -고 싶다',
    explanation:
      'To express "want to do something", attach -고 싶다 to the verb stem:\n\n' +
      '• verb stem + 고 싶어요 (polite)\n' +
      '• 먹다 → 먹고 싶어요 (I want to eat)\n\n' +
      'For third person, use -고 싶어하다: 그녀는 가고 싶어해요.',
    examples: [
      { target: '한국에 가고 싶어요.', english: 'I want to go to Korea.' },
      { target: '커피를 마시고 싶어요.', english: 'I want to drink coffee.' },
      { target: '영화를 보고 싶어요.', english: 'I want to watch a movie.' },
    ],
  },
  {
    id: 'ko_a2_g003', language: lang, level,
    title: 'Can / Cannot — -(으)ㄹ 수 있다/없다',
    explanation:
      'To express ability or possibility:\n\n' +
      '• verb stem + (으)ㄹ 수 있어요 = can\n' +
      '• verb stem + (으)ㄹ 수 없어요 = cannot\n\n' +
      'Add 을 if stem ends in consonant, ㄹ if it ends in vowel.',
    examples: [
      { target: '한국어를 할 수 있어요.', english: 'I can speak Korean.' },
      { target: '수영할 수 없어요.', english: 'I cannot swim.' },
      { target: '내일 올 수 있어요?', english: 'Can you come tomorrow?' },
    ],
  },
  {
    id: 'ko_a2_g004', language: lang, level,
    title: 'Connecting Sentences — -고 (and then)',
    explanation:
      'To list actions or connect clauses, attach -고 to the first verb stem:\n\n' +
      '• verb stem + 고 + next clause\n' +
      '• 밥을 먹고 공부해요. (I eat and then study.)\n\n' +
      'Only the LAST verb gets a tense ending; -고 stays the same.',
    examples: [
      { target: '아침을 먹고 학교에 가요.', english: 'I eat breakfast and go to school.' },
      { target: '운동하고 샤워해요.', english: 'I exercise and take a shower.' },
      { target: '커피를 마시고 일해요.', english: 'I drink coffee and work.' },
    ],
  },
  {
    id: 'ko_a2_g005', language: lang, level,
    title: 'Because / So — -(으)니까',
    explanation:
      'To give reasons, attach -(으)니까 to the verb stem (more spoken/casual):\n\n' +
      '• 비가 오니까 우산을 가져가세요. (Because it rains, take an umbrella.)\n' +
      '• Consonant-ending stem: 먹 → 먹으니까\n' +
      '• Vowel-ending stem: 가 → 가니까',
    examples: [
      { target: '배가 고프니까 밥을 먹어요.', english: "Because I'm hungry, I eat." },
      { target: '시간이 없으니까 빨리 가세요.', english: "Because there's no time, please go quickly." },
      { target: '피곤하니까 일찍 자요.', english: "Because I'm tired, I go to bed early." },
    ],
  },
  {
    id: 'ko_a2_g006', language: lang, level,
    title: 'Location Actions — 에서 vs 에',
    explanation:
      'Both 에서 and 에 mark location, but they have different uses:\n\n' +
      '• 에 = destination / static location (with 있다, 가다, 오다)\n' +
      '• 에서 = place where an ACTION happens\n\n' +
      '학교에 가요. (I go TO school.) vs 학교에서 공부해요. (I study AT school.)',
    examples: [
      { target: '도서관에서 책을 읽어요.', english: 'I read books at the library.' },
      { target: '집에 가요.', english: 'I go home.' },
      { target: '카페에서 커피를 마셔요.', english: 'I drink coffee at the café.' },
    ],
  },
];
