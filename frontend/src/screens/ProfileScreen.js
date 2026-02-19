import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ProfileScreen() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    address: '123 Pet Street, Dog City',
  });

  const [pets, setPets] = useState([
    {
      id: 1,
      name: 'Max',
      breed: 'Golden Retriever',
      age: '3 months',
      image: 'https://images.dog.ceo/breeds/retriever-golden/n02099601_1003.jpg',
    },
    {
      id: 2,
      name: 'Bella',
      breed: 'Labrador',
      age: '6 months',
      image: 'https://images.dog.ceo/breeds/labrador/n02099712_3503.jpg',
    },
  ]);

  const menuItems = [
    { icon: 'person-outline', title: 'Edit Profile', color: '#FF6B6B' },
    { icon: 'paw-outline', title: 'Manage Pets', color: '#4ECDC4' },
    { icon: 'notifications-outline', title: 'Notifications', color: '#45B7D1' },
    { icon: 'calendar-outline', title: 'Booking History', color: '#FFA07A' },
    { icon: 'document-text-outline', title: 'Medical Records', color: '#9C27B0' },
    { icon: 'settings-outline', title: 'Settings', color: '#607D8B' },
    { icon: 'help-circle-outline', title: 'Help & Support', color: '#4CAF50' },
    { icon: 'log-out-outline', title: 'Logout', color: '#F44336' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Icon name="person" size={50} color="#fff" />
        </View>
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
      </View>

      <View style={styles.petsSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>My Pets</Text>
          <TouchableOpacity style={styles.addButton}>
            <Icon name="add-circle" size={24} color="#FF6B6B" />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {pets.map((pet) => (
            <View key={pet.id} style={styles.petCard}>
              <Image
                source={{ uri: pet.image }}
                style={styles.petImage}
                resizeMode="cover"
              />
              <Text style={styles.petName}>{pet.name}</Text>
              <Text style={styles.petBreed}>{pet.breed}</Text>
              <Text style={styles.petAge}>{pet.age}</Text>
            </View>
          ))}
          <TouchableOpacity style={styles.addPetCard}>
            <Icon name="add-circle-outline" size={40} color="#4ECDC4" />
            <Text style={styles.addPetText}>Add Pet</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.statsSection}>
        <View style={styles.statCard}>
          <Icon name="calendar" size={24} color="#FF6B6B" />
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Bookings</Text>
        </View>
        <View style={styles.statCard}>
          <Icon name="medical" size={24} color="#4ECDC4" />
          <Text style={styles.statNumber}>8</Text>
          <Text style={styles.statLabel}>Vaccines</Text>
        </View>
        <View style={styles.statCard}>
          <Icon name="heart" size={24} color="#FF6B6B" />
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Favorites</Text>
        </View>
      </View>

      <View style={styles.menuSection}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <Icon name={item.icon} size={24} color={item.color} />
            </View>
            <Text style={styles.menuTitle}>{item.title}</Text>
            <Icon name="chevron-forward" size={20} color="#ccc" />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.versionInfo}>
        <Text style={styles.versionText}>Vaniya Pet v1.0.0</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#FF6B6B',
    padding: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
  },
  petsSection: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    padding: 5,
  },
  petCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginRight: 15,
    width: 120,
    elevation: 2,
  },
  petImage: {
    width: 96,
    height: 96,
    borderRadius: 8,
    marginBottom: 8,
  },
  petName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  petBreed: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  petAge: {
    fontSize: 12,
    color: '#999',
  },
  addPetCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E0E0E0',
    borderStyle: 'dashed',
  },
  addPetText: {
    fontSize: 14,
    color: '#4ECDC4',
    marginTop: 8,
    fontWeight: '500',
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    elevation: 2,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  menuSection: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  menuTitle: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  versionInfo: {
    padding: 20,
    alignItems: 'center',
  },
  versionText: {
    fontSize: 12,
    color: '#999',
  },
});
