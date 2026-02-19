import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import { View, Text, TextField, Button, Card, Colors } from 'react-native-ui-lib';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { register } from '../services/api';
import Icon from 'react-native-vector-icons/Ionicons';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async () => {
    // Validation
    if (!name || !email || !phone || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    try {
      const response = await register(name, email, phone, password);
      
      if (response.success) {
        // Auto-login after registration
        await AsyncStorage.setItem('userToken', response.token || 'logged_in');
        await AsyncStorage.setItem('userData', JSON.stringify(response.user));
        
        Alert.alert('Success', 'Account created successfully!', [
          {
            text: 'OK',
            onPress: () => navigation.replace('MainApp')
          }
        ]);
      } else {
        Alert.alert('Error', response.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      Alert.alert('Error', 'Failed to create account. Please try again.');
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
          <Icon name="person-add" size={50} color={Colors.violet30} />
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Join Vaniya Pet Care</Text>
        </View>

        <Card style={styles.card}>
          <TextField
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
            containerStyle={styles.textField}
            floatingPlaceholder
            floatingPlaceholderColor={Colors.violet30}
            fieldStyle={styles.fieldStyle}
            leadingAccessory={
              <Icon name="person-outline" size={20} color={Colors.grey40} style={styles.icon} />
            }
          />

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
            placeholder="Phone Number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            containerStyle={styles.textField}
            floatingPlaceholder
            floatingPlaceholderColor={Colors.violet30}
            fieldStyle={styles.fieldStyle}
            leadingAccessory={
              <Icon name="call-outline" size={20} color={Colors.grey40} style={styles.icon} />
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

          <TextField
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showPassword}
            containerStyle={styles.textField}
            floatingPlaceholder
            floatingPlaceholderColor={Colors.violet30}
            fieldStyle={styles.fieldStyle}
            leadingAccessory={
              <Icon name="lock-closed-outline" size={20} color={Colors.grey40} style={styles.icon} />
            }
          />

          <Button
            label="Create Account"
            onPress={handleRegister}
            disabled={loading}
            backgroundColor={Colors.violet30}
            style={styles.registerButton}
            labelStyle={styles.buttonLabel}
            enableShadow
          />

          <Button
            label="Already have an account? Login"
            onPress={() => navigation.goBack()}
            link
            color={Colors.violet30}
            style={styles.loginLink}
            labelStyle={styles.linkLabel}
          />
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
    fontSize: 28,
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
  registerButton: {
    marginTop: 20,
    height: 50,
    borderRadius: 10,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  loginLink: {
    marginTop: 15,
  },
  linkLabel: {
    fontSize: 14,
  },
});

export default RegisterScreen;
