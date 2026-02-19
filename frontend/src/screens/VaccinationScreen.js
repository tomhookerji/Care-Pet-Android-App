import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, ActivityIndicator, Alert, RefreshControl } from 'react-native';
import { View, Text, Card, Button, Badge, Colors, Picker, Modal, TextField, DateTimePicker } from 'react-native-ui-lib';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import { getUserPets, getPetVaccinations, addVaccinationRecord } from '../services/api';

export default function VaccinationScreen() {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [vaccinations, setVaccinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newVaccination, setNewVaccination] = useState({
    vaccination_id: '',
    date_given: new Date(),
    notes: '',
  });

  useEffect(() => {
    loadPetsAndVaccinations();
  }, []);

  const loadPetsAndVaccinations = async () => {
    try {
      setLoading(true);
      const userData = await AsyncStorage.getItem('userData');
      if (userData) {
        const user = JSON.parse(userData);
        
        const petsResponse = await getUserPets(user.id);
        if (petsResponse && petsResponse.length > 0) {
          setPets(petsResponse);
          setSelectedPet(petsResponse[0]);
          await loadVaccinationsForPet(petsResponse[0].id);
        }
      }
    } catch (error) {
      console.error('Error loading data:', error);
      Alert.alert('Error', 'Failed to load vaccination data');
    } finally {
      setLoading(false);
    }
  };

  const loadVaccinationsForPet = async (petId) => {
    try {
      const response = await getPetVaccinations(petId);
      setVaccinations(response || []);
    } catch (error) {
      console.error('Error loading vaccinations:', error);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadPetsAndVaccinations();
    setRefreshing(false);
  };

  const handlePetChange = async (pet) => {
    setSelectedPet(pet);
    setLoading(true);
    await loadVaccinationsForPet(pet.id);
    setLoading(false);
  };

  const handleAddVaccination = async () => {
    try {
      if (!newVaccination.vaccination_id || !newVaccination.date_given) {
        Alert.alert('Error', 'Please fill all required fields');
        return;
      }

      const response = await addVaccinationRecord({
        pet_id: selectedPet.id,
        ...newVaccination,
      });

      if (response.success) {
        Alert.alert('Success', 'Vaccination record added successfully');
        setShowAddModal(false);
        setNewVaccination({ vaccination_id: '', date_given: new Date(), notes: '' });
        await loadVaccinationsForPet(selectedPet.id);
      }
    } catch (error) {
      console.error('Error adding vaccination:', error);
      Alert.alert('Error', 'Failed to add vaccination record');
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed': return Colors.green30;
      case 'scheduled': return Colors.blue30;
      case 'upcoming': return Colors.orange30;
      case 'overdue': return Colors.red30;
      default: return Colors.grey40;
    }
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed': return 'checkmark-circle';
      case 'scheduled': return 'calendar';
      case 'upcoming': return 'time';
      case 'overdue': return 'alert-circle';
      default: return 'information-circle';
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Not set';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const calculatePetAge = (birthDate) => {
    const birth = new Date(birthDate);
    const now = new Date();
    const months = (now.getFullYear() - birth.getFullYear()) * 12 + now.getMonth() - birth.getMonth();
    return months;
  };

  const getUpcomingVaccinations = () => {
    return vaccinations.filter(v => 
      v.status === 'upcoming' || v.status === 'scheduled' || v.status === 'overdue'
    );
  };

  const getCompletedVaccinations = () => {
    return vaccinations.filter(v => v.status === 'completed');
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.violet30} />
        <Text marginT-10 grey30>Loading vaccination records...</Text>
      </View>
    );
  }

  if (!pets || pets.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Icon name="medical-outline" size={80} color={Colors.grey50} />
        <Text text60 marginT-20>No Pets Found</Text>
        <Text text70 grey40 marginT-10>Add a pet in your profile to track vaccinations</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Card style={styles.headerCard}>
        <Text text60 marginB-10>Vaccination Tracker</Text>
        
        {pets.length > 1 ? (
          <Picker
            placeholder="Select a pet"
            value={selectedPet}
            onChange={handlePetChange}
            topBarProps={{ title: 'Select Pet' }}
            renderPicker={() => (
              <View style={styles.pickerButton}>
                <Icon name="paw" size={20} color={Colors.violet30} />
                <Text text70 marginL-10>{selectedPet?.name || 'Select Pet'}</Text>
                <Icon name="chevron-down" size={20} color={Colors.grey40} style={{ marginLeft: 'auto' }} />
              </View>
            )}
          >
            {pets.map(pet => (
              <Picker.Item key={pet.id} value={pet} label={pet.name} />
            ))}
          </Picker>
        ) : (
          <View row centerV>
            <Icon name="paw" size={20} color={Colors.violet30} />
            <Text text70 marginL-10>{selectedPet?.name}</Text>
          </View>
        )}

        {selectedPet && (
          <View row spread marginT-15>
            <View>
              <Text grey40 text80>Age</Text>
              <Text text70>{calculatePetAge(selectedPet.birth_date)} months</Text>
            </View>
            <View>
              <Text grey40 text80>Breed</Text>
              <Text text70>{selectedPet.breed_name || 'Unknown'}</Text>
            </View>
            <View>
              <Text grey40 text80>Weight</Text>
              <Text text70>{selectedPet.weight} kg</Text>
            </View>
          </View>
        )}
      </Card>

      <ScrollView 
        style={styles.scrollView}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <View row spread marginH-20 marginV-15>
          <Card style={styles.summaryCard} backgroundColor={Colors.green70}>
            <Text text40 white>{getCompletedVaccinations().length}</Text>
            <Text text80 white>Completed</Text>
          </Card>
          <Card style={styles.summaryCard} backgroundColor={Colors.orange70}>
            <Text text40 white>{getUpcomingVaccinations().length}</Text>
            <Text text80 white>Upcoming</Text>
          </Card>
        </View>

        {getUpcomingVaccinations().length > 0 && (
          <View marginH-20 marginB-20>
            <Text text60 marginB-15>
              <Icon name="calendar-outline" size={24} color={Colors.violet30} /> Upcoming
            </Text>
            {getUpcomingVaccinations().map((vaccination) => (
              <Card key={vaccination.id} style={styles.vaccinationCard} marginB-10>
                <View row spread centerV marginB-10>
                  <View row centerV flex>
                    <Icon 
                      name={getStatusIcon(vaccination.status)} 
                      size={24} 
                      color={getStatusColor(vaccination.status)} 
                    />
                    <Text text70 marginL-10 flex numberOfLines={2}>
                      {vaccination.vaccination_name}
                    </Text>
                  </View>
                  <Badge 
                    label={vaccination.status} 
                    backgroundColor={getStatusColor(vaccination.status)}
                    size={20}
                  />
                </View>
                
                <Text text80 grey30 marginB-5>{vaccination.description}</Text>
                
                <View row spread marginT-10>
                  <View>
                    <Text grey40 text90>Scheduled</Text>
                    <Text text80>{formatDate(vaccination.date_scheduled)}</Text>
                  </View>
                  <View>
                    <Text grey40 text90>Age</Text>
                    <Text text80>{vaccination.age_months} months</Text>
                  </View>
                  <View>
                    <Text grey40 text90>Dose</Text>
                    <Text text80>#{vaccination.dose_number}</Text>
                  </View>
                </View>
              </Card>
            ))}
          </View>
        )}

        {getCompletedVaccinations().length > 0 && (
          <View marginH-20 marginB-20>
            <Text text60 marginB-15>
              <Icon name="checkmark-done-outline" size={24} color={Colors.green30} /> Completed
            </Text>
            {getCompletedVaccinations().map((vaccination) => (
              <Card key={vaccination.id} style={styles.vaccinationCard} marginB-10>
                <View row spread centerV marginB-10>
                  <View row centerV flex>
                    <Icon name="checkmark-circle" size={24} color={Colors.green30} />
                    <Text text70 marginL-10 flex numberOfLines={2}>
                      {vaccination.vaccination_name}
                    </Text>
                  </View>
                  <Badge label="Completed" backgroundColor={Colors.green30} size={20} />
                </View>
                
                <Text text80 grey30 marginB-5>{vaccination.description}</Text>
                
                <View row spread marginT-10>
                  <View>
                    <Text grey40 text90>Given On</Text>
                    <Text text80>{formatDate(vaccination.date_given)}</Text>
                  </View>
                  <View>
                    <Text grey40 text90>Dose</Text>
                    <Text text80>#{vaccination.dose_number}</Text>
                  </View>
                </View>

                {vaccination.notes && (
                  <View marginT-10 padding-10 backgroundColor={Colors.grey70} br20>
                    <Text text90 grey20>Notes: {vaccination.notes}</Text>
                  </View>
                )}
              </Card>
            ))}
          </View>
        )}

        {vaccinations.length === 0 && (
          <View center padding-40>
            <Icon name="medical-outline" size={60} color={Colors.grey50} />
            <Text text60 marginT-20 grey40>No vaccination records yet</Text>
            <Text text80 grey50 marginT-10 center>Add vaccination records to track your pet's health</Text>
          </View>
        )}
      </ScrollView>

      <View absB absR margin-20>
        <Button
          round
          size={Button.sizes.large}
          backgroundColor={Colors.violet30}
          onPress={() => setShowAddModal(true)}
          enableShadow
        >
          <Icon name="add" size={28} color="#fff" />
        </Button>
      </View>

      <Modal visible={showAddModal} onBackgroundPress={() => setShowAddModal(false)}>
        <Card style={styles.modalCard}>
          <Text text60 marginB-20>Add Vaccination Record</Text>
          
          <TextField
            placeholder="Vaccination Type"
            floatingPlaceholder
            value={newVaccination.vaccination_id}
            onChangeText={(text) => setNewVaccination({...newVaccination, vaccination_id: text})}
            containerStyle={styles.textField}
          />
          
          <DateTimePicker
            title="Date Given"
            placeholder="Select Date"
            mode="date"
            value={newVaccination.date_given}
            onChange={(date) => setNewVaccination({...newVaccination, date_given: date})}
            containerStyle={styles.textField}
          />
          
          <TextField
            placeholder="Notes (optional)"
            value={newVaccination.notes}
            onChangeText={(text) => setNewVaccination({...newVaccination, notes: text})}
            multiline
            numberOfLines={3}
            containerStyle={styles.textField}
          />
          
          <View row spread marginT-20>
            <Button 
              label="Cancel" 
              outline 
              outlineColor={Colors.grey40}
              onPress={() => setShowAddModal(false)}
              style={{ flex: 1, marginRight: 10 }}
            />
            <Button 
              label="Add" 
              backgroundColor={Colors.violet30}
              onPress={handleAddVaccination}
              style={{ flex: 1 }}
            />
          </View>
        </Card>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey80,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.grey80,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerCard: {
    margin: 15,
    padding: 20,
    borderRadius: 15,
  },
  pickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: Colors.grey70,
    borderRadius: 10,
    marginTop: 10,
  },
  scrollView: {
    flex: 1,
  },
  summaryCard: {
    flex: 1,
    marginHorizontal: 5,
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  vaccinationCard: {
    padding: 15,
    borderRadius: 12,
    elevation: 2,
  },
  modalCard: {
    padding: 20,
    margin: 20,
    borderRadius: 15,
  },
  textField: {
    marginBottom: 15,
  },
});
