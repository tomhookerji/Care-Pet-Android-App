import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, TextInput, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { getBreeds } from '../services/api';

export default function BreedListScreen({ navigation }) {
  const [breeds, setBreeds] = useState([]);
  const [filteredBreeds, setFilteredBreeds] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBreeds();
  }, []);

  const fetchBreeds = async () => {
    try {
      setLoading(true);
      const response = await getBreeds();
      if (response.success) {
        setBreeds(response.data);
        setFilteredBreeds(response.data);
      }
    } catch (error) {
      console.error('Error loading breeds:', error);
      // Demo data fallback
      const demoBreeds = [
        {
          id: 1,
          name: 'Golden Retriever',
          origin: 'Scotland',
          size: 'Large',
          temperament: 'Friendly, Intelligent, Devoted',
          image_url: 'https://images.dog.ceo/breeds/retriever-golden/n02099601_1003.jpg',
        },
        {
          id: 2,
          name: 'German Shepherd',
          origin: 'Germany',
          size: 'Large',
          temperament: 'Confident, Courageous, Smart',
          image_url: 'https://images.dog.ceo/breeds/germanshepherd/n02106662_10307.jpg',
        },
        {
          id: 3,
          name: 'Labrador Retriever',
          origin: 'Canada',
          size: 'Large',
          temperament: 'Outgoing, Even Tempered, Gentle',
          image_url: 'https://images.dog.ceo/breeds/labrador/n02099712_3503.jpg',
        },
        {
          id: 4,
          name: 'Beagle',
          origin: 'England',
          size: 'Small to Medium',
          temperament: 'Gentle, Friendly, Curious',
          image_url: 'https://images.dog.ceo/breeds/beagle/n02088364_11136.jpg',
        },
        {
          id: 5,
          name: 'Poodle',
          origin: 'Germany/France',
          size: 'Small to Large',
          temperament: 'Intelligent, Active, Elegant',
          image_url: 'https://images.dog.ceo/breeds/poodle-standard/n02113799_3215.jpg',
        },
        {
          id: 6,
          name: 'Bulldog',
          origin: 'England',
          size: 'Medium',
          temperament: 'Docile, Willful, Friendly',
          image_url: 'https://images.dog.ceo/breeds/bulldog-english/jager-1.jpg',
        },
      ];
      setBreeds(demoBreeds);
      setFilteredBreeds(demoBreeds);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text === '') {
      setFilteredBreeds(breeds);
    } else {
      const filtered = breeds.filter(breed =>
        breed.name.toLowerCase().includes(text.toLowerCase()) ||
        breed.temperament.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredBreeds(filtered);
    }
  };

  const renderBreedCard = ({ item }) => (
    <TouchableOpacity
      style={styles.breedCard}
      onPress={() => navigation.navigate('BreedDetail', { breed: item })}
    >
      <Image
        source={{ uri: item.image_url }}
        style={styles.breedImage}
        resizeMode="cover"
      />
      <View style={styles.breedInfo}>
        <Text style={styles.breedName}>{item.name}</Text>
        <View style={styles.infoRow}>
          <Icon name="location-outline" size={14} color="#666" />
          <Text style={styles.origin}>{item.origin}</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="resize-outline" size={14} color="#666" />
          <Text style={styles.size}>{item.size}</Text>
        </View>
        <Text style={styles.temperament} numberOfLines={2}>
          {item.temperament}
        </Text>
      </View>
      <Icon name="chevron-forward" size={24} color="#ccc" style={styles.chevron} />
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF6B6B" />
        <Text style={styles.loadingText}>Loading breeds...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search-outline" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search breeds..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <FlatList
        data={filteredBreeds}
        renderItem={renderBreedCard}
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
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
  breedCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 15,
    flexDirection: 'row',
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  breedImage: {
    width: 100,
    height: 120,
  },
  breedInfo: {
    flex: 1,
    padding: 12,
  },
  breedName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  origin: {
    fontSize: 13,
    color: '#666',
    marginLeft: 5,
  },
  size: {
    fontSize: 13,
    color: '#666',
    marginLeft: 5,
  },
  temperament: {
    fontSize: 13,
    color: '#888',
    marginTop: 5,
  },
  chevron: {
    alignSelf: 'center',
    marginRight: 10,
  },
});
