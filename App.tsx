/**
 * LinguaArcade — App Entry Point
 *
 * Wraps the entire app in providers (Auth, Progress, SafeArea, Gestures)
 * and renders the root navigator which switches between Auth and Main stacks.
 */

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/context/AuthContext';
import { ProgressProvider } from './src/context/ProgressContext';
import { ErrorBoundary } from './src/components/common/ErrorBoundary';
import { AppNavigator } from './src/navigation/AppNavigator';

// Import language packs — each auto-registers with the content registry.
// To add a new language, create its data pack and import it here.
import './src/data/spanish';
import './src/data/korean';
import './src/data/chinese';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ErrorBoundary>
          <AuthProvider>
            <ProgressProvider>
              <AppNavigator />
              <StatusBar style="auto" />
            </ProgressProvider>
          </AuthProvider>
        </ErrorBoundary>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
