/**
 * Speech utility — provides text-to-speech pronunciation using expo-speech.
 *
 * Uses the device's built-in TTS engine (free, works offline).
 * Maps our language codes to BCP-47 locale tags for accurate pronunciation.
 */

import * as Speech from 'expo-speech';
import type { SupportedLanguage } from '../types';

/** Map our internal language codes to BCP-47 locale codes for TTS */
const LANGUAGE_LOCALE_MAP: Record<SupportedLanguage, string> = {
  es: 'es-ES',  // Spanish (Spain)
  ko: 'ko-KR',  // Korean
  zh: 'zh-TW',  // Chinese (Taiwan) — traditional characters
  fr: 'fr-FR',  // French
  de: 'de-DE',  // German
  ja: 'ja-JP',  // Japanese
  pt: 'pt-BR',  // Portuguese (Brazil)
  it: 'it-IT',  // Italian
  en: 'en-US',  // English
};

interface SpeakOptions {
  /** The text to speak */
  text: string;
  /** Language code — defaults to 'es' */
  language?: SupportedLanguage;
  /** Speech rate: 0.1 (slowest) to 2.0 (fastest). Default 0.85 for clarity */
  rate?: number;
  /** Pitch: 0.5 to 2.0. Default 1.0 */
  pitch?: number;
}

/**
 * Speak a word or phrase in the target language.
 * Stops any current speech before starting.
 */
export function speak({ text, language = 'es', rate = 0.85, pitch = 1.0 }: SpeakOptions): void {
  // Stop any ongoing speech first
  Speech.stop();

  Speech.speak(text, {
    language: LANGUAGE_LOCALE_MAP[language] ?? 'en-US',
    rate,
    pitch,
  });
}

/**
 * Speak slowly — useful for learning pronunciation.
 * Uses 0.6 rate for extra clarity.
 */
export function speakSlow({ text, language = 'es', pitch = 1.0 }: Omit<SpeakOptions, 'rate'>): void {
  speak({ text, language, rate: 0.6, pitch });
}

/** Stop any ongoing speech */
export function stopSpeech(): void {
  Speech.stop();
}

/** Check if TTS is currently speaking */
export async function isSpeaking(): Promise<boolean> {
  return Speech.isSpeakingAsync();
}
