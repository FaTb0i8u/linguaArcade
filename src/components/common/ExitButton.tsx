/**
 * ExitButton — small X button for exiting a game or lesson mid-session.
 * Shows a confirmation alert before actually navigating back.
 */

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { Colors, FontSizes, FontWeights, BorderRadius } from '../../config/theme';

interface ExitButtonProps {
  onExit: () => void;
  confirmMessage?: string;
}

export function ExitButton({
  onExit,
  confirmMessage = 'Are you sure you want to quit? Your progress will be lost.',
}: ExitButtonProps) {
  const handlePress = () => {
    Alert.alert('Exit?', confirmMessage, [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Quit', style: 'destructive', onPress: onExit },
    ]);
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={handlePress}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      accessibilityLabel="Exit"
      accessibilityRole="button"
    >
      <Text style={styles.icon}>✕</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 100,
    width: 36,
    height: 36,
    borderRadius: BorderRadius.full,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: FontSizes.lg,
    fontWeight: FontWeights.bold,
    color: Colors.textLight,
  },
});
