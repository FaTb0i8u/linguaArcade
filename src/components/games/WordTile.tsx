/**
 * Draggable word tile for the Sentence Builder game.
 */

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { Colors, BorderRadius, Spacing, FontSizes, FontWeights, Shadows } from '../../config/theme';

interface WordTileProps {
  word: string;
  onPress: () => void;
  isSelected?: boolean;
  isCorrect?: boolean | null; // null = not yet checked
  disabled?: boolean;
  style?: ViewStyle;
}

export function WordTile({
  word,
  onPress,
  isSelected = false,
  isCorrect = null,
  disabled = false,
  style,
}: WordTileProps) {
  const tileStyle: ViewStyle[] = [
    styles.tile,
    isSelected && styles.selected,
    isCorrect === true && styles.correct,
    isCorrect === false && styles.incorrect,
    disabled && styles.disabled,
    style as ViewStyle,
  ].filter(Boolean) as ViewStyle[];

  return (
    <TouchableOpacity
      style={tileStyle}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
      accessibilityRole="button"
      accessibilityLabel={`Word: ${word}`}
      accessibilityState={{
        disabled,
        selected: isSelected,
      }}
    >
      <Text style={[styles.text, isSelected && styles.selectedText]}>{word}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tile: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.surface,
    borderWidth: 2,
    borderColor: Colors.border,
    margin: 4,
    ...Shadows.sm,
  },
  selected: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primaryLight,
  },
  correct: {
    borderColor: Colors.correctGreen,
    backgroundColor: '#E6FFF5',
  },
  incorrect: {
    borderColor: Colors.incorrectRed,
    backgroundColor: '#FFF0ED',
  },
  disabled: { opacity: 0.4 },
  text: {
    fontSize: FontSizes.md,
    fontWeight: FontWeights.medium,
    color: Colors.textPrimary,
  },
  selectedText: {
    color: Colors.white,
  },
});
