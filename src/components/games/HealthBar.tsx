/**
 * Health bar used in the Conjugation Fighter game.
 * Visually represents player or enemy HP with smooth width transitions.
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, BorderRadius, FontSizes, FontWeights, Spacing } from '../../config/theme';

interface HealthBarProps {
  current: number;
  max: number;
  label: string;
  side: 'left' | 'right';
}

export function HealthBar({ current, max, label, side }: HealthBarProps) {
  const ratio = Math.max(0, Math.min(1, current / max));
  const color = ratio > 0.5 ? Colors.healthGreen : ratio > 0.25 ? Colors.warning : Colors.healthRed;

  return (
    <View
      style={[styles.container, side === 'right' && styles.rightAligned]}
      accessibilityRole="progressbar"
      accessibilityLabel={`${label}: ${current} of ${max} health`}
      accessibilityValue={{ min: 0, max, now: current }}
    >
      <Text style={styles.label}>{label}</Text>
      <View style={styles.track}>
        <View
          style={[
            styles.fill,
            {
              width: `${ratio * 100}%`,
              backgroundColor: color,
              alignSelf: side === 'right' ? 'flex-end' : 'flex-start',
            },
          ]}
        />
      </View>
      <Text style={styles.hpText}>{current}/{max}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  rightAligned: { alignItems: 'flex-end' },
  label: {
    fontSize: FontSizes.sm,
    fontWeight: FontWeights.bold,
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  track: {
    width: '100%',
    height: 16,
    backgroundColor: Colors.surfaceAlt,
    borderRadius: BorderRadius.full,
    overflow: 'hidden',
  },
  fill: {
    height: 16,
    borderRadius: BorderRadius.full,
  },
  hpText: {
    fontSize: FontSizes.xs,
    color: Colors.textSecondary,
    marginTop: 2,
  },
});
