import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import { View, Text, TextField, Button, Card, Colors } from 'react-native-ui-lib';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from '../services/api';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }

    setLoading(true);
    try {
      const response = await login(email, password);
      
      if (response.success) {
        // Store user data and token
        await AsyncStorage.setItem('userToken', response.token || 'logged_in');
        await AsyncStorage.setItem('userData', JSON.stringify(response.user));
        
        Alert.alert('Success', 'Login successful!');
        // Navigation will be handled by App.js auth check
        navigation.replace('MainApp');
      } else {
        Alert.alert('Error', response.message || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Error', 'Failed to login. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Icon name="paw" size={60} color={Colors.violet30} />
          <Text style={styles.title}>Vaniya Pet</Text>
          <Text style={styles.subtitle}>Pet Care Management</Text>
        </View>

        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Login to Your Account</Text>
          
          <TextField
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            containerStyle={styles.textField}
            floatingPlaceholder
            floatingPlaceholderColor={Colors.violet30}
            fieldStyle={styles.fieldStyle}
            leadingAccessory={
              <Icon name="mail-outline" size={20} color={Colors.grey40} style={styles.icon} />
            }
          />

          <TextField
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            containerStyle={styles.textField}
            floatingPlaceholder
            floatingPlaceholderColor={Colors.violet30}
            fieldStyle={styles.fieldStyle}
            leadingAccessory={
              <Icon name="lock-closed-outline" size={20} color={Colors.grey40} style={styles.icon} />
            }
            trailingAccessory={
              <Icon 
                name={showPassword ? "eye-outline" : "eye-off-outline"} 
                size={20} 
                color={Colors.grey40}
                onPress={() => setShowPassword(!showPassword)}
              />
            }
          />

          <Button
            label="Login"
            onPress={handleLogin}
            disabled={loading}
            backgroundColor={Colors.violet30}
            style={styles.loginButton}
            labelStyle={styles.buttonLabel}
            enableShadow
          />

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.dividerLine} />
          </View>

          <Button
            label="Create New Account"
            onPress={() => navigation.navigate('Register')}
            outline
            outlineColor={Colors.violet30}
            color={Colors.violet30}
            style={styles.registerButton}
            labelStyle={styles.registerButtonLabel}
          />

          <Text style={styles.demoText}>
            Demo Account:{'\n'}
            Email: john@example.com{'\n'}
            Password: password123
          </Text>
        </Card>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey80,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.violet30,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.grey30,
    marginTop: 5,
  },
  card: {
    padding: 20,
    borderRadius: 15,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.grey10,
    marginBottom: 20,
    textAlign: 'center',
  },
  textField: {
    marginBottom: 15,
  },
  fieldStyle: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey50,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  loginButton: {
    marginTop: 20,
    height: 50,
    borderRadius: 10,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.grey60,
  },
  dividerText: {
    marginHorizontal: 10,
    color: Colors.grey40,
    fontSize: 14,
  },
  registerButton: {
    height: 50,
    borderRadius: 10,
    borderWidth: 1.5,
  },
  registerButtonLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  demoText: {
    marginTop: 20,
    textAlign: 'center',
    color: Colors.grey40,
    fontSize: 12,
    lineHeight: 18,
  },
});

export default LoginScreen;
