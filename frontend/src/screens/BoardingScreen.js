import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, TextInput, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { getCaretakers } from '../services/api';

export default function BoardingScreen({ navigation }) {
  const [caretakers, setCaretakers] = useState([]);
  const [filteredCaretakers, setFilteredCaretakers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCaretakers();
  }, []);

  const fetchCaretakers = async () => {
    try {
      setLoading(true);
      const response = await getCaretakers();
      if (response.success) {
        setCaretakers(response.data);
        setFilteredCaretakers(response.data);
      }
    } catch (error) {
      console.error('Error loading caretakers:', error);
      // Demo data fallback
      const demoCaretakers = [
        {
          id: 1,
          name: 'Happy Paws Boarding',
          location: 'Downtown',
          rating: 4.8,
          reviews: 124,
          price_per_day: 30,
          capacity: 10,
          available: true,
          image_url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b',
          services: ['Feeding', 'Walking', 'Play Time', 'Grooming'],
        },
        {
          id: 2,
          name: 'Cozy Kennel Care',
          location: 'Suburbs',
          rating: 4.6,
          reviews: 89,
          price_per_day: 25,
          capacity: 8,
          available: true,
          image_url: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b',
          services: ['Feeding', 'Walking', 'Play Time'],
        },
        {
          id: 3,
          name: 'Pampered Pets Resort',
          location: 'City Center',
          rating: 4.9,
          reviews: 156,
          price_per_day: 45,
          capacity: 15,
          available: true,
          image_url: 'https://images.unsplash.com/photo-1544568104-5b7eb8189dd4',
          services: ['Feeding', 'Walking', 'Play Time', 'Grooming', 'Training', 'Spa'],
        },
        {
          id: 4,
          name: 'Friendly Tails Lodge',
          location: 'North Side',
          rating: 4.5,
          reviews: 67,
          price_per_day: 28,
          capacity: 6,
          available: false,
          image_url: 'https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf',
          services: ['Feeding', 'Walking', 'Play Time'],
        },
        {
          id: 5,
          name: 'Pet Paradise Boarding',
          location: 'East End',
          rating: 4.7,
          reviews: 98,
          price_per_day: 35,
          capacity: 12,
          available: true,
          image_url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb',
          services: ['Feeding', 'Walking', 'Play Time', 'Grooming', 'Training'],
        },
      ];
      setCaretakers(demoCaretakers);
      setFilteredCaretakers(demoCaretakers);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text === '') {
      setFilteredCaretakers(caretakers);
    } else {
      const filtered = caretakers.filter(caretaker =>
        caretaker.name.toLowerCase().includes(text.toLowerCase()) ||
        caretaker.location.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredCaretakers(filtered);
    }
  };

  const renderCaretakerCard = ({ item }) => (
    <TouchableOpacity
      style={styles.caretakerCard}
      onPress={() => navigation.navigate('BoardingDetail', { caretaker: item })}
    >
      <Image
        source={{ uri: item.image_url }}
        style={styles.caretakerImage}
        resizeMode="cover"
      />
      <View style={styles.caretakerInfo}>
        <View style={styles.headerRow}>
          <Text style={styles.caretakerName}>{item.name}</Text>
          {!item.available && (
            <View style={styles.unavailableBadge}>
              <Text style={styles.unavailableText}>Full</Text>
            </View>
          )}
        </View>

        <View style={styles.infoRow}>
          <Icon name="location-outline" size={16} color="#666" />
          <Text style={styles.location}>{item.location}</Text>
        </View>

        <View style={styles.ratingRow}>
          <Icon name="star" size={16} color="#FFD700" />
          <Text style={styles.rating}>{item.rating}</Text>
          <Text style={styles.reviews}>({item.reviews} reviews)</Text>
        </View>

        <View style={styles.servicesRow}>
          {item.services.slice(0, 3).map((service, index) => (
            <View key={index} style={styles.serviceBadge}>
              <Text style={styles.serviceText}>{service}</Text>
            </View>
          ))}
          {item.services.length > 3 && (
            <Text style={styles.moreServices}>+{item.services.length - 3}</Text>
          )}
        </View>

        <View style={styles.footer}>
          <Text style={styles.price}>${item.price_per_day}/day</Text>
          <TouchableOpacity
            style={[
              styles.viewButton,
              !item.available && styles.viewButtonDisabled,
            ]}
          >
            <Text style={styles.viewButtonText}>
              {item.available ? 'View Details' : 'Not Available'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF6B6B" />
        <Text style={styles.loadingText}>Loading caretakers...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search-outline" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name or location..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <FlatList
        data={filteredCaretakers}
        renderItem={renderCaretakerCard}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  searchContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  listContainer: {
    padding: 15,
  },
  caretakerCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 2,
  },
  caretakerImage: {
    width: '100%',
    height: 150,
  },
  caretakerInfo: {
    padding: 15,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  caretakerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  unavailableBadge: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  unavailableText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rating: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 5,
  },
  reviews: {
    fontSize: 13,
    color: '#888',
    marginLeft: 5,
  },
  servicesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  serviceBadge: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 5,
    marginBottom: 5,
  },
  serviceText: {
    fontSize: 11,
    color: '#1976D2',
  },
  moreServices: {
    fontSize: 11,
    color: '#666',
    alignSelf: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
  viewButton: {
    backgroundColor: '#4ECDC4',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },
  viewButtonDisabled: {
    backgroundColor: '#ccc',
  },
  viewButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
