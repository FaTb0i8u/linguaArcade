/**
 * SpeakButton — a small speaker icon button that pronounces text via TTS.
 *
 * Tap once for normal speed, long-press for slow pronunciation.
 */

import React, { useState, useCallback } from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { speak, speakSlow } from '../../utils/speech';
import type { SupportedLanguage } from '../../types';
import { Colors, BorderRadius, Spacing } from '../../config/theme';

interface SpeakButtonProps {
  /** The text to pronounce */
  text: string;
  /** Language for TTS */
  language: SupportedLanguage;
  /** Button size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Optional style override */
  style?: ViewStyle;
}

export function SpeakButton({ text, language, size = 'md', style }: SpeakButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePress = useCallback(() => {
    setIsPlaying(true);
    speak({ text, language });
    // Reset after a reasonable time (TTS doesn't always fire onDone on all platforms)
    setTimeout(() => setIsPlaying(false), 1500);
  }, [text, language]);

  const handleLongPress = useCallback(() => {
    setIsPlaying(true);
    speakSlow({ text, language });
    setTimeout(() => setIsPlaying(false), 2500);
  }, [text, language]);

  const iconSize = size === 'sm' ? 18 : size === 'lg' ? 32 : 24;

  return (
    <TouchableOpacity
      style={[styles.button, sizeStyles[size], isPlaying && styles.playing, style]}
      onPress={handlePress}
      onLongPress={handleLongPress}
      activeOpacity={0.6}
      accessibilityRole="button"
      accessibilityLabel={`Listen to pronunciation of ${text}`}
      accessibilityHint="Tap to hear, long press for slow pronunciation"
    >
      <Text style={{ fontSize: iconSize }}>{isPlaying ? '🔊' : '🔈'}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  playing: {
    backgroundColor: Colors.primaryLight,
    borderColor: Colors.primary,
  },
});

const sizeStyles: Record<string, ViewStyle> = {
  sm: { width: 32, height: 32 },
  md: { width: 40, height: 40 },
  lg: { width: 52, height: 52 },
};
