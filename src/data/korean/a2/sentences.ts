/**
 * Korean A2 Sentence Patterns
 *
 * Past tense, desire expressions, ability, and connected clauses.
 */

import type { SentencePattern } from '../../../types';

const lang = 'ko' as const;
const level = 'A2' as const;

export const KOREAN_A2_SENTENCES: SentencePattern[] = [
  // ── Past tense ────────────────────────────────────────────────
  {
    id: 'ko_a2_s001', language: lang, level, category: 'past_actions',
    words: ['어제', '학교에', '갔어요'],
    translation: 'I went to school yesterday.',
    hint: 'Time + place-에 + past verb',
    distractors: ['가요', '오늘'],
  },
  {
    id: 'ko_a2_s002', language: lang, level, category: 'past_actions',
    words: ['밥을', '먹었어요'],
    translation: 'I ate rice.',
    hint: 'Object-을 + past verb',
    distractors: ['먹어요', '마셨어요'],
  },
  {
    id: 'ko_a2_s003', language: lang, level, category: 'past_actions',
    words: ['어제', '영화를', '봤어요'],
    translation: 'I watched a movie yesterday.',
    hint: 'Time + object-를 + past verb',
    distractors: ['봐요', '읽었어요'],
  },
  {
    id: 'ko_a2_s004', language: lang, level, category: 'past_actions',
    words: ['작년에', '한국에', '갔어요'],
    translation: 'I went to Korea last year.',
    hint: 'Time expression + destination-에 + past verb',
    distractors: ['가요', '일본에'],
  },
  // ── Want to (고 싶다) ─────────────────────────────────────────
  {
    id: 'ko_a2_s005', language: lang, level, category: 'desires',
    words: ['한국에', '가고', '싶어요'],
    translation: 'I want to go to Korea.',
    hint: 'Destination-에 + verb stem-고 + 싶어요',
    distractors: ['갔어요', '와요'],
  },
  {
    id: 'ko_a2_s006', language: lang, level, category: 'desires',
    words: ['커피를', '마시고', '싶어요'],
    translation: 'I want to drink coffee.',
    hint: 'Object-를 + verb stem-고 + 싶어요',
    distractors: ['먹고', '마셨어요'],
  },
  // ── Can/Cannot ────────────────────────────────────────────────
  {
    id: 'ko_a2_s007', language: lang, level, category: 'ability',
    words: ['한국어를', '할', '수', '있어요'],
    translation: 'I can speak Korean.',
    hint: 'Object-를 + verb stem-ㄹ + 수 + 있어요',
    distractors: ['없어요', '해요'],
  },
  {
    id: 'ko_a2_s008', language: lang, level, category: 'ability',
    words: ['수영할', '수', '없어요'],
    translation: 'I cannot swim.',
    hint: 'Verb stem-ㄹ + 수 + 없어요',
    distractors: ['있어요', '싶어요'],
  },
  // ── Connected clauses (고) ────────────────────────────────────
  {
    id: 'ko_a2_s009', language: lang, level, category: 'connected',
    words: ['아침을', '먹고', '학교에', '가요'],
    translation: 'I eat breakfast and go to school.',
    hint: 'Object-을 + verb-고 + destination-에 + verb',
    distractors: ['먹어요', '갔어요'],
  },
  {
    id: 'ko_a2_s010', language: lang, level, category: 'connected',
    words: ['운동하고', '샤워해요'],
    translation: 'I exercise and take a shower.',
    hint: 'Verb-고 + verb (listing actions)',
    distractors: ['운동해요', '했어요'],
  },
  // ── Because (니까) ────────────────────────────────────────────
  {
    id: 'ko_a2_s011', language: lang, level, category: 'reasons',
    words: ['비가', '오니까', '우산을', '가져가세요'],
    translation: 'Because it rains, please take an umbrella.',
    hint: 'Reason-니까 + request',
    distractors: ['와요', '가방을'],
  },
  {
    id: 'ko_a2_s012', language: lang, level, category: 'reasons',
    words: ['피곤하니까', '일찍', '자요'],
    translation: "Because I'm tired, I go to bed early.",
    hint: 'Reason-니까 + adverb + verb',
    distractors: ['피곤해요', '늦게'],
  },
];
