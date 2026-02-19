-- Vaniya Pet App - MySQL Database Schema

-- Create database
CREATE DATABASE IF NOT EXISTS vaniya_pet_db;
USE vaniya_pet_db;

-- Users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Breeds table
CREATE TABLE breeds (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    origin VARCHAR(100),
    size VARCHAR(50),
    temperament TEXT,
    description TEXT,
    image_url VARCHAR(255),
    friendliness INT DEFAULT 3,
    energy_level INT DEFAULT 3,
    trainability INT DEFAULT 3,
    exercise_needs INT DEFAULT 3,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Pets table
CREATE TABLE pets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    breed_id INT,
    birth_date DATE,
    gender ENUM('male', 'female') DEFAULT 'male',
    weight DECIMAL(5,2),
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (breed_id) REFERENCES breeds(id) ON DELETE SET NULL
);

-- Vaccinations table (standard vaccination schedule)
CREATE TABLE vaccinations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    age_months INT NOT NULL,
    dose_number INT DEFAULT 1,
    is_core BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Pet vaccination records
CREATE TABLE pet_vaccination_records (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pet_id INT NOT NULL,
    vaccination_id INT NOT NULL,
    date_given DATE,
    date_scheduled DATE,
    status ENUM('completed', 'upcoming', 'pending', 'overdue') DEFAULT 'pending',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (pet_id) REFERENCES pets(id) ON DELETE CASCADE,
    FOREIGN KEY (vaccination_id) REFERENCES vaccinations(id) ON DELETE CASCADE
);

-- Diet recommendations table
CREATE TABLE diet_recommendations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    breed_id INT,
    min_age_months INT NOT NULL,
    max_age_months INT NOT NULL,
    frequency_per_day INT DEFAULT 2,
    portion_guideline TEXT,
    food_type TEXT,
    recommendations TEXT,
    tips TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (breed_id) REFERENCES breeds(id) ON DELETE CASCADE
);

-- Caretakers/Boarding centers table
CREATE TABLE caretakers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    location VARCHAR(200) NOT NULL,
    address TEXT,
    phone VARCHAR(20),
    email VARCHAR(100),
    rating DECIMAL(3,2) DEFAULT 0.00,
    reviews INT DEFAULT 0,
    price_per_day DECIMAL(10,2) NOT NULL,
    capacity INT DEFAULT 5,
    available BOOLEAN DEFAULT TRUE,
    services JSON,
    image_url VARCHAR(255),
    description TEXT,
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Bookings table
CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    pet_id INT NOT NULL,
    caretaker_id INT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    total_days INT NOT NULL,
    total_price DECIMAL(10,2) NOT NULL,
    status ENUM('pending', 'confirmed', 'cancelled', 'completed') DEFAULT 'pending',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (pet_id) REFERENCES pets(id) ON DELETE CASCADE,
    FOREIGN KEY (caretaker_id) REFERENCES caretakers(id) ON DELETE CASCADE
);

-- Indexes for better performance
CREATE INDEX idx_pets_user ON pets(user_id);
CREATE INDEX idx_pets_breed ON pets(breed_id);
CREATE INDEX idx_vaccination_records_pet ON pet_vaccination_records(pet_id);
CREATE INDEX idx_bookings_user ON bookings(user_id);
CREATE INDEX idx_bookings_caretaker ON bookings(caretaker_id);
CREATE INDEX idx_caretakers_location ON caretakers(location);
CREATE INDEX idx_caretakers_rating ON caretakers(rating);
