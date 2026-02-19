# API Documentation - Vaniya Pet App

Base URL: `http://localhost/vaniya-pet-api`

## Authentication

Currently uses simple email/password authentication. JWT recommended for production.

---

## Breeds API

### Get All Breeds
```
GET /api/breeds.php
```

**Query Parameters:**
- `page` (optional) - Page number (default: 1)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Golden Retriever",
      "origin": "Scotland",
      "size": "Large",
      "temperament": "Friendly, Intelligent, Devoted",
      "description": "...",
      "image_url": "...",
      "friendliness": 5,
      "energy_level": 4,
      "trainability": 5,
      "exercise_needs": 4
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "pages": 8
  }
}
```

### Get Breed Details
```
GET /api/breed-detail.php?id={breed_id}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Golden Retriever",
    "origin": "Scotland",
    ...
  }
}
```

---

## Vaccination API

### Get All Vaccinations
```
GET /api/vaccinations.php
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "DHPP - First Dose",
      "description": "Core vaccine protecting against...",
      "age_months": 2,
      "dose_number": 1,
      "is_core": true
    }
  ]
}
```

### Get Pet Vaccination Records
```
GET /api/pet-vaccinations.php?pet_id={pet_id}
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "pet_id": 1,
      "vaccination_id": 1,
      "name": "DHPP - First Dose",
      "date_given": "2024-09-15",
      "date_scheduled": null,
      "status": "completed",
      "notes": "First vaccine completed successfully"
    }
  ]
}
```

### Add Vaccination Record
```
POST /api/add-vaccination.php
Content-Type: application/json
```

**Request Body:**
```json
{
  "pet_id": 1,
  "vaccination_id": 1,
  "date_given": "2024-11-01",
  "date_scheduled": null,
  "status": "completed",
  "notes": "Vaccine administered successfully"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Vaccination record added successfully",
  "id": 5
}
```

---

## Diet API

### Get Diet Recommendations
```
GET /api/diet.php?breed_id={breed_id}&age={age_in_months}
```

**Query Parameters:**
- `breed_id` (optional) - Breed ID for breed-specific recommendations
- `age` (optional) - Pet age in months

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "breed_id": null,
      "min_age_months": 2,
      "max_age_months": 12,
      "frequency_per_day": 4,
      "portion_guideline": "Small, frequent meals",
      "food_type": "High-quality puppy food",
      "recommendations": "Protein-rich diet...",
      "tips": "Always use puppy-specific formulas..."
    }
  ]
}
```

---

## Boarding/Caretakers API

### Get All Caretakers
```
GET /api/caretakers.php?location={location}
```

**Query Parameters:**
- `location` (optional) - Filter by location

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Happy Paws Boarding",
      "location": "Downtown",
      "address": "123 Main Street",
      "phone": "+1234567800",
      "email": "info@happypaws.com",
      "rating": 4.8,
      "reviews": 124,
      "price_per_day": 30.00,
      "capacity": 10,
      "available": true,
      "services": ["Feeding", "Walking", "Play Time", "Grooming"],
      "image_url": "...",
      "description": "Professional pet boarding..."
    }
  ]
}
```

### Get Caretaker Details
```
GET /api/caretaker-detail.php?id={caretaker_id}
```

### Book Caretaker
```
POST /api/book-caretaker.php
Content-Type: application/json
```

**Request Body:**
```json
{
  "user_id": 1,
  "pet_id": 1,
  "caretaker_id": 1,
  "start_date": "2024-12-20",
  "end_date": "2024-12-22",
  "total_days": 2,
  "total_price": 60.00,
  "notes": "Max is friendly but shy initially"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Booking created successfully",
  "booking_id": 1
}
```

---

## User & Pets API

### User Login
```
POST /api/login.php
Content-Type: application/json
```

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "address": "123 Pet Street"
  }
}
```

### User Registration
```
POST /api/register.php
Content-Type: application/json
```

**Request Body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "password123",
  "phone": "+1234567891",
  "address": "456 Animal Avenue"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Registration successful",
  "user_id": 2
}
```

### Get User Pets
```
GET /api/pets.php?user_id={user_id}
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "user_id": 1,
      "name": "Max",
      "breed_id": 1,
      "breed_name": "Golden Retriever",
      "birth_date": "2024-08-01",
      "gender": "male",
      "weight": 8.5,
      "image_url": "..."
    }
  ]
}
```

### Add Pet
```
POST /api/add-pet.php
Content-Type: application/json
```

**Request Body:**
```json
{
  "user_id": 1,
  "name": "Buddy",
  "breed_id": 2,
  "birth_date": "2024-06-15",
  "gender": "male",
  "weight": 10.5,
  "image_url": "https://..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Pet added successfully",
  "pet_id": 3
}
```

---

## Error Responses

All endpoints return errors in this format:

```json
{
  "success": false,
  "message": "Error description here"
}
```

**Common HTTP Status Codes:**
- `200` - Success
- `400` - Bad Request
- `404` - Not Found
- `500` - Server Error

---

## Rate Limiting

Currently no rate limiting. Recommended to implement for production.

## CORS

CORS is enabled for all origins (`*`). Restrict in production:

```php
header("Access-Control-Allow-Origin: https://yourdomain.com");
```
