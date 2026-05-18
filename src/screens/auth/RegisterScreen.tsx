/**
 * Registration screen.
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { showAlert } from '../../utils/alert';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components/common/Button';
import { Colors, Spacing, FontSizes, FontWeights, BorderRadius } from '../../config/theme';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '../../types';

type Props = NativeStackScreenProps<AuthStackParamList, 'Register'>;

export function RegisterScreen({ navigation }: Props) {
  const { signUp, isLoading } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleRegister = async () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      showAlert('Oops', 'Please fill in all fields.');
      return;
    }
    if (password !== confirm) {
      showAlert('Oops', 'Passwords do not match.');
      return;
    }
    if (password.length < 6) {
      showAlert('Oops', 'Password must be at least 6 characters.');
      return;
    }
    try {
      await signUp(email.trim(), password, name.trim());
    } catch (err: any) {
      showAlert('Registration failed', err.message ?? 'Something went wrong.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <View style={styles.hero}>
          <Text style={styles.emoji}>📝</Text>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Start your language journey</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Display Name"
            placeholderTextColor={Colors.textLight}
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
            accessibilityLabel="Display name"
            textContentType="name"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={Colors.textLight}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            accessibilityLabel="Email address"
            textContentType="emailAddress"
          />
          <TextInput
            style={styles.input}
            placeholder="Password (min 6 characters)"
            placeholderTextColor={Colors.textLight}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            accessibilityLabel="Password, minimum 6 characters"
            textContentType="newPassword"
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor={Colors.textLight}
            value={confirm}
            onChangeText={setConfirm}
            secureTextEntry
            accessibilityLabel="Confirm password"
            textContentType="newPassword"
          />

          <Button
            title="Create Account"
            onPress={handleRegister}
            loading={isLoading}
            style={styles.btn}
          />

          <Button
            title="← Back to Login"
            onPress={() => navigation.goBack()}
            variant="ghost"
            style={styles.btn}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: Colors.background },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: Spacing.lg,
  },
  hero: { alignItems: 'center', marginBottom: Spacing.xl },
  emoji: { fontSize: 48, marginBottom: Spacing.sm },
  title: {
    fontSize: FontSizes.xxl,
    fontWeight: FontWeights.bold,
    color: Colors.primary,
  },
  subtitle: {
    fontSize: FontSizes.md,
    color: Colors.textSecondary,
    marginTop: Spacing.xs,
  },
  form: { gap: Spacing.sm },
  input: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: BorderRadius.md,
    paddingVertical: Spacing.sm + 4,
    paddingHorizontal: Spacing.md,
    fontSize: FontSizes.md,
    color: Colors.textPrimary,
  },
  btn: { marginTop: Spacing.xs },
});
