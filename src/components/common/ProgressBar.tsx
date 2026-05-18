/**
 * Animated progress bar with colour transitions.
 */

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Colors, BorderRadius, FontSizes, FontWeights } from '../../config/theme';

interface ProgressBarProps {
  progress: number; // 0 – 1
  height?: number;
  color?: string;
  backgroundColor?: string;
  showLabel?: boolean;
  label?: string;
}

export function ProgressBar({
  progress,
  height = 12,
  color,
  backgroundColor = Colors.surfaceAlt,
  showLabel = false,
  label,
}: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(1, progress));
  const fillColor = color ?? (clamped >= 0.7 ? Colors.healthGreen : clamped >= 0.4 ? Colors.warning : Colors.danger);

  return (
    <View>
      {showLabel && (
        <Text style={styles.label}>
          {label ?? `${Math.round(clamped * 100)}%`}
        </Text>
      )}
      <View
        style={[styles.track, { height, backgroundColor }]}
        accessibilityRole="progressbar"
        accessibilityLabel={label ?? `Progress: ${Math.round(clamped * 100)}%`}
        accessibilityValue={{ min: 0, max: 100, now: Math.round(clamped * 100) }}
      >
        <View
          style={[
            styles.fill,
            {
              width: `${clamped * 100}%`,
              height,
              backgroundColor: fillColor,
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    width: '100%',
    borderRadius: BorderRadius.full,
    overflow: 'hidden',
  },
  fill: {
    borderRadius: BorderRadius.full,
  },
  label: {
    fontSize: FontSizes.xs,
    fontWeight: FontWeights.medium,
    color: Colors.textSecondary,
    marginBottom: 4,
    textAlign: 'right',
  },
});
