import axios from 'axios';
import { API_BASE_URL, API_ENDPOINTS } from '../config/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Breeds API
export const getBreeds = async () => {
  try {
    const response = await api.get(API_ENDPOINTS.GET_BREEDS);
    return response.data;
  } catch (error) {
    console.error('Error fetching breeds:', error);
    throw error;
  }
};

export const getBreedDetail = async (breedId) => {
  try {
    const response = await api.get(`${API_ENDPOINTS.GET_BREED_DETAIL}?id=${breedId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching breed detail:', error);
    throw error;
  }
};

// Vaccination API
export const getVaccinations = async () => {
  try {
    const response = await api.get(API_ENDPOINTS.GET_VACCINATIONS);
    return response.data;
  } catch (error) {
    console.error('Error fetching vaccinations:', error);
    throw error;
  }
};

export const getPetVaccinations = async (petId) => {
  try {
    const response = await api.get(`${API_ENDPOINTS.GET_PET_VACCINATIONS}?pet_id=${petId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching pet vaccinations:', error);
    throw error;
  }
};

export const addVaccinationRecord = async (data) => {
  try {
    const response = await api.post(API_ENDPOINTS.ADD_VACCINATION_RECORD, data);
    return response.data;
  } catch (error) {
    console.error('Error adding vaccination record:', error);
    throw error;
  }
};

// Diet API
export const getDietRecommendations = async (breedId, age) => {
  try {
    const response = await api.get(`${API_ENDPOINTS.GET_DIET_RECOMMENDATIONS}?breed_id=${breedId}&age=${age}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching diet recommendations:', error);
    throw error;
  }
};

// Boarding API
export const getCaretakers = async (location = '') => {
  try {
    const url = location 
      ? `${API_ENDPOINTS.GET_CARETAKERS}?location=${location}` 
      : API_ENDPOINTS.GET_CARETAKERS;
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching caretakers:', error);
    throw error;
  }
};

export const getCaretakerDetail = async (caretakerId) => {
  try {
    const response = await api.get(`${API_ENDPOINTS.GET_CARETAKER_DETAIL}?id=${caretakerId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching caretaker detail:', error);
    throw error;
  }
};

export const bookCaretaker = async (bookingData) => {
  try {
    const response = await api.post(API_ENDPOINTS.BOOK_CARETAKER, bookingData);
    return response.data;
  } catch (error) {
    console.error('Error booking caretaker:', error);
    throw error;
  }
};

// User & Pets API
export const loginUser = async (email, password) => {
  try {
    const response = await api.post(API_ENDPOINTS.USER_LOGIN, { email, password });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await api.post(API_ENDPOINTS.USER_REGISTER, userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const getUserPets = async (userId) => {
  try {
    const response = await api.get(`${API_ENDPOINTS.GET_USER_PETS}?user_id=${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user pets:', error);
    throw error;
  }
};

export const addPet = async (petData) => {
  try {
    const response = await api.post(API_ENDPOINTS.ADD_PET, petData);
    return response.data;
  } catch (error) {
    console.error('Error adding pet:', error);
    throw error;
  }
};

// Authentication APIs
export const login = async (email, password) => {
  try {
    const response = await api.post(API_ENDPOINTS.USER_LOGIN, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

export const register = async (name, email, phone, password) => {
  try {
    const response = await api.post(API_ENDPOINTS.USER_REGISTER, {
      name,
      email,
      phone,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
};

export default api;
