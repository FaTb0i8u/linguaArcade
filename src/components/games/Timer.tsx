/**
 * Countdown timer used in game modes.
 *
 * Uses a ref for the onTimeUp callback to avoid resetting the
 * interval every time the parent re-renders with a new closure.
 */

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, FontSizes, FontWeights, BorderRadius } from '../../config/theme';

interface TimerProps {
  durationMs: number;
  onTimeUp: () => void;
  isPaused?: boolean;
  /** When this value changes, the timer resets. */
  resetKey?: number;
}

export function Timer({ durationMs, onTimeUp, isPaused = false, resetKey = 0 }: TimerProps) {
  const [remaining, setRemaining] = useState(durationMs);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const onTimeUpRef = useRef(onTimeUp);
  const firedRef = useRef(false);

  // Keep the callback ref current without triggering the interval effect
  useEffect(() => {
    onTimeUpRef.current = onTimeUp;
  }, [onTimeUp]);

  // Reset timer and fired flag when duration or resetKey changes
  useEffect(() => {
    setRemaining(durationMs);
    firedRef.current = false;
  }, [durationMs, resetKey]);

  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 100) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          // Guard against double-fire
          if (!firedRef.current) {
            firedRef.current = true;
            onTimeUpRef.current();
          }
          return 0;
        }
        return prev - 100;
      });
    }, 100);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isPaused, resetKey]);

  const seconds = Math.ceil(remaining / 1000);
  const ratio = remaining / durationMs;
  const color = ratio > 0.5 ? Colors.accent : ratio > 0.25 ? Colors.warning : Colors.danger;

  return (
    <View
      style={styles.container}
      accessibilityRole="timer"
      accessibilityLabel={`${seconds} seconds remaining`}
      accessibilityLiveRegion="polite"
    >
      <Text style={[styles.text, { color }]}>{seconds}s</Text>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${ratio * 100}%`, backgroundColor: color }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  text: { fontSize: FontSizes.lg, fontWeight: FontWeights.bold, marginBottom: 4 },
  track: {
    width: '100%',
    height: 6,
    backgroundColor: Colors.surfaceAlt,
    borderRadius: BorderRadius.full,
    overflow: 'hidden',
  },
  fill: { height: 6, borderRadius: BorderRadius.full },
});
