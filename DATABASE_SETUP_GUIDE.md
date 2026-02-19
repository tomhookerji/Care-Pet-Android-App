# Database Setup Guide for Vaniya Pet App

## Database Configuration

**Database Name:** `vaniya_pet_db`  
**Database User:** `root`  
**Database Password:** _(empty/blank)_  
**Database Host:** `localhost`

---

## Step-by-Step Setup Instructions

### Step 1: Install XAMPP (if not already installed)

1. Download XAMPP from: https://www.apachefriends.org/download.html
2. Install XAMPP (default location: `C:\xampp`)
3. Run XAMPP Control Panel as Administrator

### Step 2: Start MySQL Server

1. Open XAMPP Control Panel
2. Click **Start** next to **Apache** (for backend API)
3. Click **Start** next to **MySQL** (for database)
4. Both should show green "Running" status

### Step 3: Create Database

**Option A: Using phpMyAdmin (Recommended for Beginners)**

1. Open your browser and go to: `http://localhost/phpmyadmin`
2. Click on **"New"** in the left sidebar
3. Enter database name: `vaniya_pet_db`
4. Select collation: `utf8_general_ci`
5. Click **"Create"**

**Option B: Using MySQL Command Line**

```sql
CREATE DATABASE vaniya_pet_db CHARACTER SET utf8 COLLATE utf8_general_ci;
```

### Step 4: Import Database Schema

1. In phpMyAdmin, select the `vaniya_pet_db` database (click on it in left sidebar)
2. Click on the **"Import"** tab at the top
3. Click **"Choose File"** button
4. Navigate to: `C:\Users\smarty\Desktop\Jivraj\VaniyaPetApp\backend\database\schema.sql`
5. Click **"Import"** button at the bottom
6. You should see: "Import has been successfully finished"

### Step 5: Import Sample Data (Optional but Recommended)

1. Still in phpMyAdmin with `vaniya_pet_db` selected
2. Click on the **"Import"** tab again
3. Click **"Choose File"**
4. Navigate to: `C:\Users\smarty\Desktop\Jivraj\VaniyaPetApp\backend\database\seed.sql`
5. Click **"Import"** button
6. You should see: "Import has been successfully finished"

### Step 6: Setup Backend Files

1. Copy the entire `backend` folder to XAMPP's htdocs:
   - **From:** `C:\Users\smarty\Desktop\Jivraj\VaniyaPetApp\backend`
   - **To:** `C:\xampp\htdocs\vaniya-pet-backend`

2. The structure should look like:
   ```
   C:\xampp\htdocs\vaniya-pet-backend\
   ├── api\
   │   ├── breeds.php
   │   ├── vaccinations.php
   │   ├── login.php
   │   └── ... (other API files)
   ├── config\
   │   └── database.php
   └── .htaccess
   ```

### Step 7: Update Frontend API Configuration

1. Open: `C:\Users\smarty\Desktop\Jivraj\VaniyaPetApp\frontend\src\services\api.js`
2. Update the BASE_URL to:
   ```javascript
   const BASE_URL = 'http://localhost/vaniya-pet-backend/api';
   ```

### Step 8: Test Database Connection

1. Open browser and go to: `http://localhost/vaniya-pet-backend/api/breeds.php`
2. You should see JSON data with dog breeds
3. If you see error, check:
   - MySQL is running in XAMPP
   - Database `vaniya_pet_db` exists
   - Schema and seed data are imported
   - Backend files are in correct location

---

## Database Tables Created

After importing schema.sql, you'll have these 8 tables:

1. **users** - User accounts and profiles
2. **breeds** - Dog breed information
3. **pets** - User's registered pets
4. **vaccinations** - Available vaccination types
5. **pet_vaccination_records** - Vaccination history for each pet
6. **diet_recommendations** - Diet plans by breed and age
7. **caretakers** - Pet boarding service providers
8. **bookings** - Boarding reservations

---

## Sample Data Included

After importing seed.sql, you'll have:

- ✅ 2 demo user accounts
- ✅ 8 popular dog breeds (Labrador, German Shepherd, Golden Retriever, etc.)
- ✅ 10 common vaccinations (Rabies, Distemper, Parvovirus, etc.)
- ✅ 5 caretakers with different services
- ✅ Sample pets and vaccination records

---

## Testing the API

### Test Endpoints in Browser:

1. **Get All Breeds:**  
   `http://localhost/vaniya-pet-backend/api/breeds.php`

2. **Get All Vaccinations:**  
   `http://localhost/vaniya-pet-backend/api/vaccinations.php`

3. **Get All Caretakers:**  
   `http://localhost/vaniya-pet-backend/api/caretakers.php`

### Test Login (Use Postman or similar):

**URL:** `http://localhost/vaniya-pet-backend/api/login.php`  
**Method:** POST  
**Body (JSON):**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

---

## Troubleshooting

### Error: "Connection error: Access denied"
- Check MySQL is running in XAMPP
- Verify username is `root` and password is empty in `config/database.php`

### Error: "Unknown database 'vaniya_pet_db'"
- Database not created. Follow Step 3 again
- Make sure database name is exactly `vaniya_pet_db`

### Error: "Table doesn't exist"
- Schema not imported. Follow Step 4 again
- Check all 8 tables exist in phpMyAdmin

### API Returns Empty or No Data
- Seed data not imported. Follow Step 5
- Check tables have data in phpMyAdmin

### Cannot Access API URLs
- Apache not running in XAMPP - start it
- Backend files not in correct location - check Step 6
- Check URL is exactly: `http://localhost/vaniya-pet-backend/api/...`

---

## Default Login Credentials (From Seed Data)

**User 1:**
- Email: `john@example.com`
- Password: `password123`

**User 2:**
- Email: `jane@example.com`
- Password: `password123`

---

## Next Steps After Database Setup

1. ✅ Make sure XAMPP (Apache + MySQL) is running
2. ✅ Backend files copied to htdocs
3. ✅ Database created and data imported
4. ✅ Test API endpoints in browser
5. ✅ Update frontend API URL (if needed)
6. ✅ Run your React Native app with `npx expo start`
7. ✅ App will now connect to real backend data!

---

## Need Help?

- Check XAMPP error logs: `C:\xampp\mysql\data\mysql_error.log`
- Check Apache error logs: `C:\xampp\apache\logs\error.log`
- Verify backend URL in frontend matches your XAMPP setup
