/**
 * Login screen — email/password + guest access.
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

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export function LoginScreen({ navigation }: Props) {
  const { signIn, continueAsGuest, isLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      showAlert('Oops', 'Please enter both email and password.');
      return;
    }
    try {
      await signIn(email.trim(), password);
    } catch (err: any) {
      showAlert('Login failed', err.message ?? 'Something went wrong.');
    }
  };

  const handleGuest = async () => {
    try {
      await continueAsGuest();
    } catch (err: any) {
      showAlert('Error', err.message ?? 'Could not start guest session.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        {/* Logo / Title */}
        <View style={styles.hero}>
          <Text style={styles.logo}>🕹️</Text>
          <Text style={styles.title}>LinguaArcade</Text>
          <Text style={styles.subtitle}>Learn languages through play</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
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
            placeholder="Password"
            placeholderTextColor={Colors.textLight}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            accessibilityLabel="Password"
            textContentType="password"
          />

          <Button
            title="Log In"
            onPress={handleLogin}
            loading={isLoading}
            style={styles.btn}
          />

          <Button
            title="Create Account"
            onPress={() => navigation.navigate('Register')}
            variant="outline"
            style={styles.btn}
          />

          <View style={styles.divider}>
            <View style={styles.line} />
            <Text style={styles.or}>or</Text>
            <View style={styles.line} />
          </View>

          <Button
            title="Play as Guest"
            onPress={handleGuest}
            variant="ghost"
            icon="👤"
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
  logo: { fontSize: 64, marginBottom: Spacing.sm },
  title: {
    fontSize: FontSizes.hero,
    fontWeight: FontWeights.black,
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
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Spacing.sm,
  },
  line: { flex: 1, height: 1, backgroundColor: Colors.border },
  or: {
    marginHorizontal: Spacing.md,
    fontSize: FontSizes.sm,
    color: Colors.textLight,
  },
});
