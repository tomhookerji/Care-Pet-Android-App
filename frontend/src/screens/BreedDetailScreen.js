import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function BreedDetailScreen({ route }) {
  const { breed } = route.params;

  const characteristics = [
    { icon: 'heart', label: 'Friendliness', value: 5, color: '#FF6B6B' },
    { icon: 'flash', label: 'Energy Level', value: 4, color: '#FFA07A' },
    { icon: 'school', label: 'Trainability', value: 5, color: '#4ECDC4' },
    { icon: 'fitness', label: 'Exercise Needs', value: 4, color: '#45B7D1' },
  ];

  const renderStars = (value) => {
    return (
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Icon
            key={star}
            name={star <= value ? 'star' : 'star-outline'}
            size={16}
            color={star <= value ? '#FFD700' : '#ccc'}
          />
        ))}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: breed.image_url }}
        style={styles.headerImage}
        resizeMode="cover"
      />
      
      <View style={styles.contentContainer}>
        <Text style={styles.breedName}>{breed.name}</Text>
        
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Icon name="location" size={20} color="#FF6B6B" />
            <View style={styles.infoText}>
              <Text style={styles.infoLabel}>Origin</Text>
              <Text style={styles.infoValue}>{breed.origin}</Text>
            </View>
          </View>
          
          <View style={styles.infoRow}>
            <Icon name="resize" size={20} color="#4ECDC4" />
            <View style={styles.infoText}>
              <Text style={styles.infoLabel}>Size</Text>
              <Text style={styles.infoValue}>{breed.size}</Text>
            </View>
          </View>
          
          <View style={styles.infoRow}>
            <Icon name="happy" size={20} color="#45B7D1" />
            <View style={styles.infoText}>
              <Text style={styles.infoLabel}>Temperament</Text>
              <Text style={styles.infoValue}>{breed.temperament}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Characteristics</Text>
        <View style={styles.characteristicsContainer}>
          {characteristics.map((char, index) => (
            <View key={index} style={styles.charCard}>
              <Icon name={char.icon} size={24} color={char.color} />
              <Text style={styles.charLabel}>{char.label}</Text>
              {renderStars(char.value)}
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Feeding Recommendations</Text>
        <View style={styles.feedingCard}>
          <View style={styles.feedingRow}>
            <Icon name="restaurant" size={20} color="#FF6B6B" />
            <Text style={styles.feedingText}>
              Feed 2-3 times daily for adults
            </Text>
          </View>
          <View style={styles.feedingRow}>
            <Icon name="water" size={20} color="#4ECDC4" />
            <Text style={styles.feedingText}>
              Always provide fresh water
            </Text>
          </View>
          <View style={styles.feedingRow}>
            <Icon name="nutrition" size={20} color="#45B7D1" />
            <Text style={styles.feedingText}>
              High-quality protein-rich diet recommended
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Care Tips</Text>
        <View style={styles.tipsCard}>
          <Text style={styles.tipText}>
            • Regular exercise is essential for this breed's health and happiness
          </Text>
          <Text style={styles.tipText}>
            • Brush coat weekly to maintain healthy fur
          </Text>
          <Text style={styles.tipText}>
            • Schedule regular vet check-ups every 6 months
          </Text>
          <Text style={styles.tipText}>
            • Early socialization and training are highly recommended
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerImage: {
    width: '100%',
    height: 250,
  },
  contentContainer: {
    padding: 20,
  },
  breedName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoText: {
    marginLeft: 15,
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    color: '#888',
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
    marginBottom: 15,
  },
  characteristicsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  charCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    width: '48%',
    marginBottom: 10,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  charLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
    marginBottom: 5,
  },
  starsContainer: {
    flexDirection: 'row',
  },
  feedingCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  feedingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  feedingText: {
    fontSize: 15,
    color: '#333',
    marginLeft: 15,
    flex: 1,
  },
  tipsCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  tipText: {
    fontSize: 15,
    color: '#333',
    marginBottom: 10,
    lineHeight: 22,
  },
});
