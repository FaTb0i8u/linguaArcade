/**
 * Korean A1 Sentence Patterns
 *
 * Pre-built sentences for the Sentence Builder game.
 * Korean word order is SOV, and particles are attached to words.
 * At A1 we keep particles attached to their nouns for simplicity.
 */

import type { SentencePattern } from '../../../types';

const lang = 'ko' as const;
const level = 'A1' as const;

export const KOREAN_A1_SENTENCES: SentencePattern[] = [
  // ── Basic statements ──────────────────────────────────────────
  {
    id: 'ko_a1_s001', language: lang, level, category: 'basic_statements',
    words: ['저는', '학생이에요'],
    translation: 'I am a student.',
    hint: 'Topic + noun이에요',
  },
  {
    id: 'ko_a1_s002', language: lang, level, category: 'basic_statements',
    words: ['친구가', '학교에', '가요'],
    translation: 'My friend goes to school.',
    hint: 'Subject + location에 + verb',
    distractors: ['에서', '를'],
  },
  {
    id: 'ko_a1_s003', language: lang, level, category: 'basic_statements',
    words: ['저는', '밥을', '먹어요'],
    translation: 'I eat rice.',
    hint: 'Topic + object를 + verb',
    distractors: ['가', '에'],
  },
  {
    id: 'ko_a1_s004', language: lang, level, category: 'basic_statements',
    words: ['날씨가', '좋아요'],
    translation: 'The weather is nice.',
    hint: 'Subject + adjective',
    distractors: ['는', '을'],
  },
  {
    id: 'ko_a1_s005', language: lang, level, category: 'basic_statements',
    words: ['엄마가', '요리를', '해요'],
    translation: 'Mom cooks.',
    hint: 'Subject + object를 + 하다 verb',
    distractors: ['는', '에서'],
  },

  // ── Questions ─────────────────────────────────────────────────
  {
    id: 'ko_a1_s010', language: lang, level, category: 'questions',
    words: ['이것은', '뭐예요'],
    translation: 'What is this?',
    hint: 'Topic + question word예요',
  },
  {
    id: 'ko_a1_s011', language: lang, level, category: 'questions',
    words: ['어디에', '가요'],
    translation: 'Where are you going?',
    hint: 'Question word에 + verb',
    distractors: ['에서', '뭐'],
  },
  {
    id: 'ko_a1_s012', language: lang, level, category: 'questions',
    words: ['이거', '얼마예요'],
    translation: 'How much is this?',
    hint: 'Demonstrative + question word예요',
  },
  {
    id: 'ko_a1_s013', language: lang, level, category: 'questions',
    words: ['뭐를', '좋아해요'],
    translation: 'What do you like?',
    hint: 'Question word를 + verb',
    distractors: ['가', '어디'],
  },

  // ── Daily activities ──────────────────────────────────────────
  {
    id: 'ko_a1_s020', language: lang, level, category: 'daily_activities',
    words: ['아침에', '커피를', '마셔요'],
    translation: 'I drink coffee in the morning.',
    hint: 'Time에 + object를 + verb',
    distractors: ['에서', '은'],
  },
  {
    id: 'ko_a1_s021', language: lang, level, category: 'daily_activities',
    words: ['주말에', '친구를', '만나요'],
    translation: 'I meet a friend on the weekend.',
    hint: 'Time에 + object를 + verb',
    distractors: ['가', '에서'],
  },
  {
    id: 'ko_a1_s022', language: lang, level, category: 'daily_activities',
    words: ['저녁에', '집에서', '쉬어요'],
    translation: 'I rest at home in the evening.',
    hint: 'Time에 + place에서 + verb',
    distractors: ['를', '에'],
  },
  {
    id: 'ko_a1_s023', language: lang, level, category: 'daily_activities',
    words: ['매일', '한국어를', '공부해요'],
    translation: 'I study Korean every day.',
    hint: 'Time + object를 + verb',
    distractors: ['이', '에서'],
  },

  // ── Negation ──────────────────────────────────────────────────
  {
    id: 'ko_a1_s030', language: lang, level, category: 'negation',
    words: ['저는', '고기를', '안', '먹어요'],
    translation: "I don't eat meat.",
    hint: 'Topic + object를 + 안 + verb',
    distractors: ['못', '는'],
  },
  {
    id: 'ko_a1_s031', language: lang, level, category: 'negation',
    words: ['오늘은', '안', '바빠요'],
    translation: "Today I'm not busy.",
    hint: 'Topic + 안 + adjective',
    distractors: ['못', '를'],
  },
];

export function getSentencesByCategory(category: string): SentencePattern[] {
  return KOREAN_A1_SENTENCES.filter((s) => s.category === category);
}

export function getSentenceCategories(): string[] {
  return [...new Set(KOREAN_A1_SENTENCES.map((s) => s.category))];
}
