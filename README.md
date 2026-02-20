# Vaniya Pet App

A comprehensive mobile application built with React Native and PHP backend for pet care management, especially designed for dog owners.

## 🐾 Features

### Dog Breed Information
- Browse 150+ dog breeds with images and detailed descriptions
- Learn about breed characteristics (friendliness, energy level, trainability)
- Get feeding recommendations specific to each breed
- View temperament and care requirements

### Vaccination Tracker
- Track vaccination schedules based on pet's age
- View recommended vaccines with timeline
- Get reminders for upcoming vaccinations
- Track vaccination history with status indicators

### Diet & Feeding Guidelines
- Age-based diet recommendations (puppy, adult, senior)
- Breed-specific nutrition advice
- Feeding frequency and portion guidelines
- Foods to avoid and safety tips

### Pet Boarding Services
- Find nearby pet caretakers and boarding centers
- View ratings, reviews, and pricing
- See available services (feeding, walking, grooming, training)
- Book boarding directly through the app
- Contact caretakers via phone or email.

### Profile Management
- Manage multiple pets
- Track booking history
- View vaccination records
- Manage notifications and settings

## 🛠 Technology Stack

### Frontend
- **React Native** - Cross-platform mobile framework
- **Expo** - Development and build tools
- **React Navigation** - Navigation library
- **Axios** - HTTP client for API calls
- **React Native Vector Icons** - Icon library
- **NativeWind** - Tailwind CSS for React Native

### Backend
- **Core PHP** - RESTful API server
- **MySQL** - Relational database
- **PDO** - Database access layer

## 📁 Project Structure

```
VaniyaPetApp/
├── frontend/                  # React Native app
│   ├── src/
│   │   ├── screens/          # Screen components
│   │   │   ├── HomeScreen.js
│   │   │   ├── BreedListScreen.js
│   │   │   ├── BreedDetailScreen.js
│   │   │   ├── VaccinationScreen.js
│   │   │   ├── DietScreen.js
│   │   │   ├── BoardingScreen.js
│   │   │   ├── BoardingDetailScreen.js
│   │   │   └── ProfileScreen.js
│   │   ├── services/         # API service layer
│   │   │   └── api.js
│   │   └── config/           # Configuration files
│   │       └── api.js
│   ├── App.js                # Main app component
│   ├── package.json
│   ├── app.json
│   ├── babel.config.js
│   └── tailwind.config.js
│
└── backend/                   # PHP backend
    ├── config/
    │   └── database.php      # Database configuration
    ├── api/                  # API endpoints
    │   ├── breeds.php
    │   ├── breed-detail.php
    │   ├── vaccinations.php
    │   ├── pet-vaccinations.php
    │   ├── add-vaccination.php
    │   ├── diet.php
    │   ├── caretakers.php
    │   ├── caretaker-detail.php
    │   ├── book-caretaker.php
    │   ├── login.php
    │   ├── register.php
    │   ├── pets.php
    │   └── add-pet.php
    └── database/
        ├── schema.sql        # Database schema
        └── seed.sql          # Sample data
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- XAMPP or WAMP (for PHP and MySQL)
- Android Studio or Xcode (for emulator/simulator)

### Backend Setup

1. **Install XAMPP/WAMP**
   - Download and install XAMPP from [https://www.apachefriends.org/](https://www.apachefriends.org/)
   - Start Apache and MySQL services

2. **Setup Database**
   ```bash
   # Open phpMyAdmin (http://localhost/phpmyadmin)
   # Create a new database named 'vaniya_pet_db'
   # Import the schema and seed data
   ```

   Or run SQL files manually:
   ```sql
   -- Run in MySQL:
   source C:/Users/smarty/Desktop/Jivraj/VaniyaPetApp/backend/database/schema.sql
   source C:/Users/smarty/Desktop/Jivraj/VaniyaPetApp/backend/database/seed.sql
   ```

3. **Configure Backend**
   - Copy backend folder to XAMPP's htdocs directory:
   ```bash
   copy C:\Users\smarty\Desktop\Jivraj\VaniyaPetApp\backend C:\xampp\htdocs\vaniya-pet-api
   ```

   - Update database credentials in `backend/config/database.php` if needed:
   ```php
   define('DB_HOST', 'localhost');
   define('DB_NAME', 'vaniya_pet_db');
   define('DB_USER', 'root');
   define('DB_PASS', '');
   ```

4. **Test API**
   - Open browser and visit: `http://localhost/vaniya-pet-api/api/breeds.php`
   - You should see JSON response with breed data

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd C:\Users\smarty\Desktop\Jivraj\VaniyaPetApp\frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API endpoint**
   - Update API base URL in `src/config/api.js`:
   ```javascript
   export const API_BASE_URL = 'http://localhost/vaniya-pet-api';
   // For physical device, use your computer's IP:
   // export const API_BASE_URL = 'http://192.168.1.x/vaniya-pet-api';
   ```

4. **Start the app**
   ```bash
   npm start
   ```

5. **Run on device/emulator**
   - Press `a` for Android emulator
   - Press `i` for iOS simulator (Mac only)
   - Scan QR code with Expo Go app on physical device

## 📱 Running the App

### Development Mode

```bash
# Start Metro bundler
npm start

# Run on Android
npm run android

# Run on iOS (Mac only)
npm run ios

# Run on web
npm run web
```

### Building for Production

```bash
# Build Android APK
expo build:android

# Build iOS (Mac only)
expo build:ios
```

## 🗄 Database Schema

### Main Tables

- **users** - User account information
- **breeds** - Dog breed data with characteristics
- **pets** - User's pet profiles
- **vaccinations** - Standard vaccination schedule
- **pet_vaccination_records** - Individual pet's vaccination tracking
- **diet_recommendations** - Feeding guidelines by age/breed
- **caretakers** - Boarding centers and caretakers
- **bookings** - Pet boarding reservations

## 🔌 API Endpoints

### Breeds
- `GET /api/breeds.php` - Get all breeds
- `GET /api/breed-detail.php?id={id}` - Get breed details

### Vaccinations
- `GET /api/vaccinations.php` - Get vaccination schedule
- `GET /api/pet-vaccinations.php?pet_id={id}` - Get pet's vaccination records
- `POST /api/add-vaccination.php` - Add vaccination record

### Diet
- `GET /api/diet.php?breed_id={id}&age={months}` - Get diet recommendations

### Boarding
- `GET /api/caretakers.php?location={location}` - Get caretakers
- `GET /api/caretaker-detail.php?id={id}` - Get caretaker details
- `POST /api/book-caretaker.php` - Create booking

### Users & Pets
- `POST /api/login.php` - User login
- `POST /api/register.php` - User registration
- `GET /api/pets.php?user_id={id}` - Get user's pets
- `POST /api/add-pet.php` - Add new pet

## 🎨 Design Features

- Clean, modern UI with intuitive navigation
- Bottom tab navigation for easy access
- Visual vaccination timeline
- Rating and review system for caretakers
- Image galleries for breeds and boarding facilities
- Responsive design for various screen sizes

## 🔒 Security Notes

**Important**: The current implementation uses MD5 for password hashing for demonstration purposes. For production:

1. Use `password_hash()` and `password_verify()` in PHP
2. Implement JWT or session-based authentication
3. Add input validation and sanitization
4. Use HTTPS for all API communications
5. Implement rate limiting
6. Add CSRF protection

## 📝 Default Test Credentials

```
Email: john@example.com
Password: password123
```

## 🐛 Troubleshooting

### API Connection Issues
- Ensure XAMPP Apache and MySQL are running
- Check if API base URL matches your backend location
- For physical devices, use computer's IP address instead of localhost
- Verify CORS headers in `config/database.php`

### Database Connection Errors
- Verify database credentials in `config/database.php`
- Check if database exists and tables are created
- Ensure MySQL service is running

### App Won't Start
- Clear Metro bundler cache: `npx expo start -c`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check for port conflicts (default: 19000)

## 📄 License

This project is created for educational purposes.

## 👥 Contributors

Developed as a comprehensive pet care management solution.

## 📞 Support

For issues and questions:
- Check the troubleshooting section
- Review API documentation
- Verify database schema and seed data

---

**Happy Pet Care! 🐕🐾**
