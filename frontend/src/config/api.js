// API Configuration
// Update this URL after setting up XAMPP and backend
// Use your computer's IP address instead of localhost when testing on device
export const API_BASE_URL = 'http://192.168.29.153/vaniya-pet-backend/api';

// API Endpoints
export const API_ENDPOINTS = {
  // Breeds
  GET_BREEDS: '/breeds.php',
  GET_BREED_DETAIL: '/breed-detail.php',
  
  // Vaccination
  GET_VACCINATIONS: '/vaccinations.php',
  GET_PET_VACCINATIONS: '/pet-vaccinations.php',
  ADD_VACCINATION_RECORD: '/add-vaccination.php',
  
  // Diet
  GET_DIET_RECOMMENDATIONS: '/diet.php',
  
  // Boarding
  GET_CARETAKERS: '/caretakers.php',
  GET_CARETAKER_DETAIL: '/caretaker-detail.php',
  BOOK_CARETAKER: '/book-caretaker.php',
  
  // User & Pets
  USER_LOGIN: '/login.php',
  USER_REGISTER: '/register.php',
  GET_USER_PETS: '/pets.php',
  ADD_PET: '/add-pet.php',
  UPDATE_PET: '/update-pet.php',
};

export default API_BASE_URL;
