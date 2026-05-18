/**
 * Score / XP display with animated pop effect.
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, FontSizes, FontWeights, Spacing } from '../../config/theme';

interface ScoreDisplayProps {
  score: number;
  label?: string;
  icon?: string;
}

export function ScoreDisplay({ score, label = 'Score', icon = '⭐' }: ScoreDisplayProps) {
  return (
    <View style={styles.container} accessibilityLabel={`${label}: ${score}`}>
      <Text style={styles.icon}>{icon}</Text>
      <View>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.score}>{score.toLocaleString()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  icon: { fontSize: FontSizes.xl },
  label: { fontSize: FontSizes.xs, color: Colors.textSecondary },
  score: {
    fontSize: FontSizes.lg,
    fontWeight: FontWeights.bold,
    color: Colors.xpGold,
  },
});
