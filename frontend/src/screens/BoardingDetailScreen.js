import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function BoardingDetailScreen({ route }) {
  const { caretaker } = route.params;
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleBooking = () => {
    if (!startDate || !endDate) {
      Alert.alert('Missing Information', 'Please enter start and end dates');
      return;
    }

    Alert.alert(
      'Booking Confirmation',
      `Do you want to book ${caretaker.name} from ${startDate} to ${endDate}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Confirm',
          onPress: () => {
            Alert.alert('Success!', 'Your booking has been confirmed. We\'ll send you a confirmation email shortly.');
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: caretaker.image_url }}
        style={styles.headerImage}
        resizeMode="cover"
      />

      <View style={styles.contentContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.caretakerName}>{caretaker.name}</Text>
          {caretaker.available ? (
            <View style={styles.availableBadge}>
              <Text style={styles.availableText}>Available</Text>
            </View>
          ) : (
            <View style={styles.unavailableBadge}>
              <Text style={styles.unavailableText}>Full</Text>
            </View>
          )}
        </View>

        <View style={styles.ratingCard}>
          <View style={styles.ratingSection}>
            <Icon name="star" size={24} color="#FFD700" />
            <Text style={styles.ratingNumber}>{caretaker.rating}</Text>
            <Text style={styles.ratingText}>({caretaker.reviews} reviews)</Text>
          </View>
          <View style={styles.locationSection}>
            <Icon name="location" size={20} color="#FF6B6B" />
            <Text style={styles.locationText}>{caretaker.location}</Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Icon name="cash" size={20} color="#4ECDC4" />
            <View style={styles.infoText}>
              <Text style={styles.infoLabel}>Price per day</Text>
              <Text style={styles.infoValue}>${caretaker.price_per_day}</Text>
            </View>
          </View>
          <View style={styles.infoRow}>
            <Icon name="paw" size={20} color="#45B7D1" />
            <View style={styles.infoText}>
              <Text style={styles.infoLabel}>Capacity</Text>
              <Text style={styles.infoValue}>{caretaker.capacity} pets</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Services Offered</Text>
        <View style={styles.servicesContainer}>
          {caretaker.services.map((service, index) => (
            <View key={index} style={styles.serviceCard}>
              <Icon name="checkmark-circle" size={20} color="#4CAF50" />
              <Text style={styles.serviceText}>{service}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Facilities</Text>
        <View style={styles.facilitiesCard}>
          <View style={styles.facilityRow}>
            <Icon name="home" size={20} color="#666" />
            <Text style={styles.facilityText}>Indoor & Outdoor Play Areas</Text>
          </View>
          <View style={styles.facilityRow}>
            <Icon name="water" size={20} color="#666" />
            <Text style={styles.facilityText}>Climate Controlled Environment</Text>
          </View>
          <View style={styles.facilityRow}>
            <Icon name="camera" size={20} color="#666" />
            <Text style={styles.facilityText}>24/7 Security Cameras</Text>
          </View>
          <View style={styles.facilityRow}>
            <Icon name="medical" size={20} color="#666" />
            <Text style={styles.facilityText}>On-site Veterinary Support</Text>
          </View>
        </View>

        {caretaker.available && (
          <>
            <Text style={styles.sectionTitle}>Book Your Stay</Text>
            <View style={styles.bookingCard}>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Start Date</Text>
                <TextInput
                  style={styles.input}
                  placeholder="YYYY-MM-DD"
                  value={startDate}
                  onChangeText={setStartDate}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>End Date</Text>
                <TextInput
                  style={styles.input}
                  placeholder="YYYY-MM-DD"
                  value={endDate}
                  onChangeText={setEndDate}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Special Instructions (Optional)</Text>
                <TextInput
                  style={[styles.input, styles.textArea]}
                  placeholder="Any special needs or requests..."
                  value={notes}
                  onChangeText={setNotes}
                  multiline
                  numberOfLines={4}
                />
              </View>

              <TouchableOpacity style={styles.bookButton} onPress={handleBooking}>
                <Icon name="calendar" size={20} color="#fff" />
                <Text style={styles.bookButtonText}>Book Now</Text>
              </TouchableOpacity>
            </View>
          </>
        )}

        <View style={styles.contactCard}>
          <Text style={styles.contactTitle}>Need More Information?</Text>
          <TouchableOpacity style={styles.contactButton}>
            <Icon name="call" size={20} color="#4ECDC4" />
            <Text style={styles.contactButtonText}>Call Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactButton}>
            <Icon name="mail" size={20} color="#4ECDC4" />
            <Text style={styles.contactButtonText}>Send Email</Text>
          </TouchableOpacity>
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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  caretakerName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  availableBadge: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  availableText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  unavailableBadge: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  unavailableText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  ratingCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 2,
  },
  ratingSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 8,
  },
  ratingText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
  locationSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 8,
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    elevation: 2,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoText: {
    marginLeft: 15,
  },
  infoLabel: {
    fontSize: 12,
    color: '#888',
  },
  infoValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  serviceCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginRight: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },
  serviceText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
  },
  facilitiesCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    elevation: 2,
  },
  facilityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  facilityText: {
    fontSize: 15,
    color: '#333',
    marginLeft: 15,
  },
  bookingCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  bookButton: {
    backgroundColor: '#FF6B6B',
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    elevation: 3,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  contactCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  contactButton: {
    borderWidth: 2,
    borderColor: '#4ECDC4',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactButtonText: {
    color: '#4ECDC4',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
