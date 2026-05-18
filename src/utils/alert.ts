/**
 * Cross-platform alert utility.
 *
 * React Native's `Alert.alert()` is a no-op on web.
 * This module detects the platform and uses `window.confirm()`
 * on web, falling back to `Alert.alert()` on native.
 */

import { Alert, Platform } from 'react-native';

/**
 * Show a confirm dialog that works on both native and web.
 * Returns a Promise that resolves to `true` if the user confirmed.
 */
export function confirmAlert(
  title: string,
  message: string,
): Promise<boolean> {
  return new Promise((resolve) => {
    if (Platform.OS === 'web') {
      // eslint-disable-next-line no-restricted-globals
      const result = window.confirm(`${title}\n\n${message}`);
      resolve(result);
    } else {
      Alert.alert(title, message, [
        { text: 'Cancel', style: 'cancel', onPress: () => resolve(false) },
        { text: 'OK', onPress: () => resolve(true) },
      ]);
    }
  });
}

/**
 * Show a simple informational alert (no confirmation needed).
 */
export function showAlert(title: string, message: string): void {
  if (Platform.OS === 'web') {
    window.alert(`${title}\n\n${message}`);
  } else {
    Alert.alert(title, message);
  }
}
