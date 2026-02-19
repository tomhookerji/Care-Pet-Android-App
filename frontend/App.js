import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';

// Import screens
import HomeScreen from './src/screens/HomeScreen';
import BreedListScreen from './src/screens/BreedListScreen';
import BreedDetailScreen from './src/screens/BreedDetailScreen';
import VaccinationScreen from './src/screens/VaccinationScreen';
import DietScreen from './src/screens/DietScreen';
import BoardingScreen from './src/screens/BoardingScreen';
import BoardingDetailScreen from './src/screens/BoardingDetailScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const AuthStack = createStackNavigator();

// Auth Stack Navigator
function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
}

// Breed Stack Navigator
function BreedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="BreedList" 
        component={BreedListScreen} 
        options={{ title: 'Dog Breeds' }}
      />
      <Stack.Screen 
        name="BreedDetail" 
        component={BreedDetailScreen} 
        options={{ title: 'Breed Details' }}
      />
    </Stack.Navigator>
  );
}

// Boarding Stack Navigator
function BoardingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="BoardingList" 
        component={BoardingScreen} 
        options={{ title: 'Pet Boarding' }}
      />
      <Stack.Screen 
        name="BoardingDetail" 
        component={BoardingDetailScreen} 
        options={{ title: 'Caretaker Details' }}
      />
    </Stack.Navigator>
  );
}

// Main Tab Navigator
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Breeds') {
            iconName = focused ? 'paw' : 'paw-outline';
          } else if (route.name === 'Vaccination') {
            iconName = focused ? 'medical' : 'medical-outline';
          } else if (route.name === 'Diet') {
            iconName = focused ? 'restaurant' : 'restaurant-outline';
          } else if (route.name === 'Boarding') {
            iconName = focused ? 'business' : 'business-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#8B5CF6',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Breeds" component={BreedStack} />
      <Tab.Screen name="Vaccination" component={VaccinationScreen} />
      <Tab.Screen name="Diet" component={DietScreen} />
      <Tab.Screen name="Boarding" component={BoardingStack} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// Main App Navigator with Auth
function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="MainApp" component={MainTabs} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      setIsAuthenticated(!!token);
    } catch (error) {
      console.error('Error checking auth:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#8B5CF6" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
