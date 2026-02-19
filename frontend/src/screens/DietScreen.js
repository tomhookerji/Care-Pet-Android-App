import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function DietScreen() {
  const [selectedAge, setSelectedAge] = useState('puppy');

  const ageCategories = [
    { id: 'puppy', label: 'Puppy (2-12 months)', icon: 'paw' },
    { id: 'adult', label: 'Adult (1-7 years)', icon: 'body' },
    { id: 'senior', label: 'Senior (7+ years)', icon: 'time' },
  ];

  const dietRecommendations = {
    puppy: {
      title: 'Puppy Diet Guidelines',
      frequency: '3-4 times per day',
      portions: 'Small, frequent meals',
      foods: [
        'High-quality puppy food with DHA for brain development',
        'Protein-rich diet (22-32% protein)',
        'Balanced calcium and phosphorus for bone growth',
        'Soft or moistened kibble for young puppies',
      ],
      tips: [
        'Always use puppy-specific formulas',
        'Transition slowly between foods',
        'Avoid table scraps and human food',
        'Monitor weight gain regularly',
      ],
    },
    adult: {
      title: 'Adult Dog Diet Guidelines',
      frequency: '2 times per day',
      portions: 'Measured portions based on weight',
      foods: [
        'High-quality adult dog food',
        'Protein content 18-25%',
        'Balanced nutrients for maintenance',
        'Appropriate for activity level',
      ],
      tips: [
        'Maintain consistent feeding schedule',
        'Adjust portions based on activity',
        'Include healthy treats (max 10% of diet)',
        'Regular weight monitoring',
      ],
    },
    senior: {
      title: 'Senior Dog Diet Guidelines',
      frequency: '2 times per day',
      portions: 'Reduced portions, easier to digest',
      foods: [
        'Senior-specific formula',
        'Lower calorie content',
        'Joint support supplements (glucosamine)',
        'Easy-to-digest proteins',
      ],
      tips: [
        'Monitor for weight gain',
        'Softer food for dental issues',
        'Add supplements as needed',
        'More frequent vet check-ups',
      ],
    },
  };

  const currentDiet = dietRecommendations[selectedAge];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="restaurant" size={40} color="#45B7D1" />
        <Text style={styles.headerTitle}>Diet & Feeding Guide</Text>
        <Text style={styles.headerSubtitle}>Nutrition for your pet's health</Text>
      </View>

      <View style={styles.ageSelectorContainer}>
        {ageCategories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.ageButton,
              selectedAge === category.id && styles.ageButtonActive,
            ]}
            onPress={() => setSelectedAge(category.id)}
          >
            <Icon
              name={category.icon}
              size={24}
              color={selectedAge === category.id ? '#fff' : '#45B7D1'}
            />
            <Text
              style={[
                styles.ageButtonText,
                selectedAge === category.id && styles.ageButtonTextActive,
              ]}
            >
              {category.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.dietTitle}>{currentDiet.title}</Text>

        <View style={styles.summaryCard}>
          <View style={styles.summaryRow}>
            <Icon name="time-outline" size={24} color="#FF6B6B" />
            <View style={styles.summaryText}>
              <Text style={styles.summaryLabel}>Frequency</Text>
              <Text style={styles.summaryValue}>{currentDiet.frequency}</Text>
            </View>
          </View>
          <View style={styles.summaryRow}>
            <Icon name="pizza-outline" size={24} color="#4ECDC4" />
            <View style={styles.summaryText}>
              <Text style={styles.summaryLabel}>Portions</Text>
              <Text style={styles.summaryValue}>{currentDiet.portions}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Recommended Foods</Text>
        <View style={styles.card}>
          {currentDiet.foods.map((food, index) => (
            <View key={index} style={styles.listItem}>
              <Icon name="checkmark-circle" size={20} color="#4CAF50" />
              <Text style={styles.listItemText}>{food}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Feeding Tips</Text>
        <View style={styles.card}>
          {currentDiet.tips.map((tip, index) => (
            <View key={index} style={styles.listItem}>
              <Icon name="bulb" size={20} color="#FFA726" />
              <Text style={styles.listItemText}>{tip}</Text>
            </View>
          ))}
        </View>

        <View style={styles.warningCard}>
          <Icon name="warning" size={24} color="#FF6B6B" />
          <View style={styles.warningText}>
            <Text style={styles.warningTitle}>Important Note</Text>
            <Text style={styles.warningDescription}>
              Always consult with your veterinarian before making significant changes to your pet's diet.
              These are general guidelines and individual needs may vary.
            </Text>
          </View>
        </View>

        <View style={styles.toxicFoodsCard}>
          <Text style={styles.toxicFoodsTitle}>
            <Icon name="alert-circle" size={20} color="#fff" /> Foods to Avoid
          </Text>
          <Text style={styles.toxicFoodsText}>
            Chocolate • Grapes/Raisins • Onions • Garlic • Avocado • Xylitol • Alcohol • Caffeine
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
  header: {
    backgroundColor: '#fff',
    padding: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  ageSelectorContainer: {
    padding: 20,
  },
  ageButton: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E0E0E0',
    elevation: 2,
  },
  ageButtonActive: {
    backgroundColor: '#45B7D1',
    borderColor: '#45B7D1',
  },
  ageButtonText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
    fontWeight: '500',
  },
  ageButtonTextActive: {
    color: '#fff',
  },
  contentContainer: {
    padding: 20,
  },
  dietTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  summaryCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
  },
  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  summaryText: {
    marginLeft: 15,
    flex: 1,
  },
  summaryLabel: {
    fontSize: 12,
    color: '#888',
    marginBottom: 2,
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    elevation: 2,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  listItemText: {
    flex: 1,
    fontSize: 15,
    color: '#333',
    marginLeft: 12,
    lineHeight: 22,
  },
  warningCard: {
    backgroundColor: '#FFF3E0',
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#FF6B6B',
  },
  warningText: {
    marginLeft: 15,
    flex: 1,
  },
  warningTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E65100',
    marginBottom: 5,
  },
  warningDescription: {
    fontSize: 14,
    color: '#E65100',
    lineHeight: 20,
  },
  toxicFoodsCard: {
    backgroundColor: '#FF6B6B',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  toxicFoodsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  toxicFoodsText: {
    fontSize: 14,
    color: '#fff',
    lineHeight: 22,
  },
});
