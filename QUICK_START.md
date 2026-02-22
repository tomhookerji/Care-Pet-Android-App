# 📋 QUICK START GUIDE - Vaniya Pet App

## ✅ FRONTEND - ALREADY RUNNING!

Your React Native app is already running on Expo. You can scan the QR code to view the app on your phone.

**Current Status:**
- ✅ All dependencies installed
- ✅ Expo development server running
- ✅ App ready to scan with Expo Go (SDK 54)
- ✅ All screens working with sample data

---

## 🗄️ BACKEND & DATABASE - SETUP REQUIRED

The app currently shows sample/demo data. To connect to real database:

### **Database Name:** `vaniya_pet_db`

### **Quick Setup (3 Easy Steps):**

#### **Step 1: Install & Start XAMPP**
1. Download XAMPP: https://www.apachefriends.org/download.html
2. Install it (default location: `C:\xampp`)
3. Open **XAMPP Control Panel** (Run as Administrator)
4. Click **Start** for both **Apache** and **MySQL**

#### **Step 2: Create Database & Import Data**
1. Open browser → `http://localhost/phpmyadmin`
2. Click **"New"** → Enter database name: **`vaniya_pet_db`** → Click **"Create"**
3. Select `vaniya_pet_db` → Click **"Import"** tab
4. Import **schema.sql**:
   - Click "Choose File"
   - Navigate to: `C:\Users\smarty\Desktop\Jivraj\VaniyaPetApp\backend\database\schema.sql`
   - Click "Import"
5. Import **seed.sql** (sample data):
   - Click "Import" tab again
   - Choose: `C:\Users\smarty\Desktop\Jivraj\VaniyaPetApp\backend\database\seed.sql`
   - Click "Import"

#### **Step 3: Copy Backend Files to XAMPP**

**Option A - Automatic (Recommended):**
1. Double-click: `C:\Users\smarty\Desktop\Jivraj\VaniyaPetApp\setup-backend.bat`
2. Follow the prompts

**Option B - Manual:**
1. Copy the entire `backend` folder from:
   - `C:\Users\smarty\Desktop\Jivraj\VaniyaPetApp\backend`
2. Paste it into XAMPP htdocs as:
   - `C:\xampp\htdocs\vaniya-pet-backend`

---

## 🧪 TEST YOUR SETUP

### Test Database Connection:
Open in browser: `http://localhost/vaniya-pet-backend/api/breeds.php`

**Expected Result:** JSON data showing 8 dog breeds

If you see the data → ✅ **Backend is working!**

### Test Other APIs:
- Vaccinations: `http://localhost/vaniya-pet-backend/api/vaccinations.php`
- Caretakers: `http://localhost/vaniya-pet-backend/api/caretakers.php`

---

## 📱 CONNECT APP TO BACKEND

Your frontend is already configured to connect to:
```
http://localhost/vaniya-pet-backend/api
```

**Important:** 
- If testing on **physical device**, you need to use your computer's IP address instead of `localhost`
- Example: `http://192.168.1.100/vaniya-pet-backend/api`
- Find your IP: Open Command Prompt → type `ipconfig` → look for IPv4 Address

To change API URL:
1. Open: `frontend\src\config\api.js`
2. Update `API_BASE_URL` to your computer's IP if needed

---

## 👤 DEFAULT LOGIN CREDENTIALS

After importing seed.sql, you can login with:

**User 1:**
- Email: `john@example.com`
- Password: `password123`

**User 2:**
- Email: `jane@example.com`
- Password: `password123`

---

## 📊 WHAT'S IN THE DATABASE

After setup, you'll have:

**8 Tables:**
1. users - User accounts
2. breeds - 8 dog breeds with info
3. pets - User's registered pets
4. vaccinations - 10 common vaccines
5. pet_vaccination_records - Vaccination history
6. diet_recommendations - Diet plans
7. caretakers - 5 boarding providers
8. bookings - Boarding reservations

**Sample Data:**
- ✅ 2 demo users
- ✅ 8 dog breeds (Labrador, German Shepherd, etc.)
- ✅ 10 vaccinations (Rabies, Distemper, etc.)
- ✅ 5 caretakers with services
- ✅ Demo pets and records

---

## 🔧 TROUBLESHOOTING

### "XAMPP not found" error
→ Install XAMPP from the link above

### "Connection error" in API
→ Make sure MySQL is running in XAMPP (green status)

### "Unknown database" error
→ Create the database `vaniya_pet_db` in phpMyAdmin (Step 2)

### "Table doesn't exist" error
→ Import schema.sql (Step 2.4)

### API returns empty/no data
→ Import seed.sql (Step 2.5)

### App can't connect to backend
→ Check if using physical device - use computer's IP instead of localhost

---

## 📚 DETAILED GUIDES

For more detailed information, check these files:

1. **DATABASE_SETUP_GUIDE.md** - Complete database setup instructions
2. **README.md** - Full project documentation
3. **SETUP.md** - Complete setup guide
4. **API_DOCUMENTATION.md** - All API endpoints documentation

---

## 🎯 YOUR CURRENT STATUS

✅ **Completed:**
- React Native app created with 8 screens
- All dependencies installed correctly
- Expo development server running
- Backend API files ready
- Database schema ready
- Sample data ready

⏳ **Next Steps:**
1. Install XAMPP (5 minutes)
2. Create database and import data (5 minutes)
3. Copy backend files (1 minute)
4. Test backend connection (1 minute)
5. **Total: ~15 minutes to complete backend setup!**

---

## 📞 NEED HELP?

Check the error logs:
- MySQL errors: `C:\xampp\mysql\data\mysql_error.log`
- Apache errors: `C:\xampp\apache\logs\error.log`

Make sure:
- XAMPP Apache & MySQL are both running (green in control panel)
- Database name is exactly: `vaniya_pet_db`
- Backend folder is at: `C:\xampp\htdocs\vaniya-pet-backend`
- You imported both schema.sql and seed.sql

---

## 🚀 QUICK REFERENCE

| Item | Value |
|------|-------|
| **Database Name** | `vaniya_pet_db` |
| **Database User** | `root` |
| **Database Password** | _(empty)_ |
| **Backend Location** | `C:\xampp\htdocs\vaniya-pet-backend` |
| **API Base URL** | `http://localhost/vaniya-pet-backend/api` |
| **phpMyAdmin** | `http://localhost/phpmyadmin` |
| **Schema File** | `backend\database\schema.sql` |
| **Seed File** | `backend\database\seed.sql` |
| **Test API** | `http://localhost/vaniya-pet-backend/api/breeds.php` |

---

**You're almost done! Just need to set up the backend and you'll have a fully functional pet care app! 🐾**
