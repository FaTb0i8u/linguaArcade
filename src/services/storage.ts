/**
 * Local storage helpers.
 *
 * Wraps AsyncStorage with JSON serialisation and typed getters so
 * no other module has to think about stringification.
 */

import AsyncStorage from '@react-native-async-storage/async-storage';

export const StorageService = {
  /** Save a value (automatically JSON-stringified). */
  async set<T>(key: string, value: T): Promise<void> {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error(`[Storage] Failed to set ${key}`, err);
    }
  },

  /** Retrieve and parse a value. Returns null when missing. */
  async get<T>(key: string): Promise<T | null> {
    try {
      const raw = await AsyncStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : null;
    } catch (err) {
      console.error(`[Storage] Failed to get ${key}`, err);
      return null;
    }
  },

  /** Delete a single key. */
  async remove(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (err) {
      console.error(`[Storage] Failed to remove ${key}`, err);
    }
  },

  /** Clear only LinguaArcade keys (those starting with @lingua_). */
  async clear(): Promise<void> {
    try {
      const allKeys = await AsyncStorage.getAllKeys();
      const linguaKeys = allKeys.filter((k) => k.startsWith('@lingua_'));
      if (linguaKeys.length > 0) {
        await AsyncStorage.multiRemove(linguaKeys);
      }
    } catch (err) {
      console.error('[Storage] Failed to clear', err);
    }
  },
};
