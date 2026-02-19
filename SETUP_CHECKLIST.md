# ✅ VANIYA PET APP - SETUP CHECKLIST

## FRONTEND (MOBILE APP) - ✅ COMPLETE!
- [x] React Native project created
- [x] All 8 screens implemented
- [x] Dependencies installed (React Navigation, Axios, etc.)
- [x] Expo development server running
- [x] App ready to scan with Expo Go
- [x] Frontend API configuration updated

**Status: ✅ READY TO USE** (with sample data)

---

## BACKEND & DATABASE - ⏳ PENDING SETUP

### ☐ STEP 1: Install XAMPP
- [ ] Download XAMPP from https://www.apachefriends.org/download.html
- [ ] Install XAMPP (default: C:\xampp)
- [ ] Open XAMPP Control Panel (as Administrator)
- [ ] Start Apache (click Start button)
- [ ] Start MySQL (click Start button)
- [ ] Verify both show green "Running" status

### ☐ STEP 2: Create Database
- [ ] Open browser
- [ ] Go to: http://localhost/phpmyadmin
- [ ] Click "New" in left sidebar
- [ ] Enter database name: `vaniya_pet_db`
- [ ] Select collation: utf8_general_ci
- [ ] Click "Create" button
- [ ] Verify database appears in left sidebar

### ☐ STEP 3: Import Database Schema
- [ ] Click on `vaniya_pet_db` database in left sidebar
- [ ] Click "Import" tab at top
- [ ] Click "Choose File" button
- [ ] Navigate to: `C:\Users\smarty\Desktop\Jivraj\VaniyaPetApp\backend\database\schema.sql`
- [ ] Click "Import" button at bottom
- [ ] Wait for success message
- [ ] Click "Structure" tab and verify 8 tables exist:
  - [ ] users
  - [ ] breeds
  - [ ] pets
  - [ ] vaccinations
  - [ ] pet_vaccination_records
  - [ ] diet_recommendations
  - [ ] caretakers
  - [ ] bookings

### ☐ STEP 4: Import Sample Data
- [ ] Still in `vaniya_pet_db`, click "Import" tab again
- [ ] Click "Choose File"
- [ ] Navigate to: `C:\Users\smarty\Desktop\Jivraj\VaniyaPetApp\backend\database\seed.sql`
- [ ] Click "Import" button
- [ ] Wait for success message
- [ ] Click "Browse" tab next to any table (e.g., breeds)
- [ ] Verify data is present (should see 8 dog breeds)

### ☐ STEP 5: Setup Backend Files

**Option A - Use Automated Script (Recommended):**
- [ ] Navigate to: `C:\Users\smarty\Desktop\Jivraj\VaniyaPetApp\`
- [ ] Double-click `setup-backend.bat`
- [ ] Wait for success message
- [ ] Verify folder exists: `C:\xampp\htdocs\vaniya-pet-backend`

**Option B - Manual Copy:**
- [ ] Open File Explorer
- [ ] Go to: `C:\Users\smarty\Desktop\Jivraj\VaniyaPetApp\backend`
- [ ] Copy the entire `backend` folder (Ctrl+C)
- [ ] Go to: `C:\xampp\htdocs\`
- [ ] Paste and rename to: `vaniya-pet-backend`
- [ ] Verify structure:
  ```
  C:\xampp\htdocs\vaniya-pet-backend\
  ├── api\
  ├── config\
  └── database\
  ```

### ☐ STEP 6: Test Backend Connection
- [ ] Open browser
- [ ] Go to: `http://localhost/vaniya-pet-backend/api/breeds.php`
- [ ] Should see JSON data with 8 dog breeds
- [ ] Test: `http://localhost/vaniya-pet-backend/api/vaccinations.php`
- [ ] Should see JSON data with 10 vaccinations
- [ ] Test: `http://localhost/vaniya-pet-backend/api/caretakers.php`
- [ ] Should see JSON data with 5 caretakers

**If all 3 URLs show data → Backend is working! ✅**

---

## TESTING THE COMPLETE APP

### ☐ Test with Expo Go (Sample Data)
- [ ] Make sure Expo dev server is running
- [ ] Open Expo Go app on your phone
- [ ] Scan QR code from terminal
- [ ] App loads successfully
- [ ] Navigate through all screens

### ☐ Connect to Real Backend (After Backend Setup)

**If testing on SAME computer:**
- [ ] Backend URL is already set to: `http://localhost/vaniya-pet-backend/api`
- [ ] No changes needed

**If testing on PHYSICAL DEVICE (phone):**
- [ ] Open Command Prompt
- [ ] Type: `ipconfig`
- [ ] Find your IPv4 Address (e.g., 192.168.1.100)
- [ ] Open: `frontend\src\config\api.js`
- [ ] Change API_BASE_URL to: `http://YOUR_IP/vaniya-pet-backend/api`
- [ ] Example: `http://192.168.1.100/vaniya-pet-backend/api`
- [ ] Save file
- [ ] Reload app (press 'r' in terminal)

### ☐ Test App Features
- [ ] Home screen displays options
- [ ] View dog breeds list
- [ ] View breed details
- [ ] View vaccination schedule
- [ ] View diet recommendations
- [ ] View boarding services
- [ ] View caretaker details

---

## TROUBLESHOOTING CHECKLIST

### ☐ XAMPP Issues
- [ ] XAMPP installed in C:\xampp
- [ ] Apache shows green "Running" in XAMPP Control Panel
- [ ] MySQL shows green "Running" in XAMPP Control Panel
- [ ] No port conflicts (Apache needs port 80, MySQL needs port 3306)

### ☐ Database Issues
- [ ] phpMyAdmin accessible at http://localhost/phpmyadmin
- [ ] Database `vaniya_pet_db` exists
- [ ] All 8 tables exist in database
- [ ] Tables contain data (not empty)
- [ ] MySQL user is `root` with empty password

### ☐ Backend Issues
- [ ] Backend folder at: `C:\xampp\htdocs\vaniya-pet-backend`
- [ ] Folder contains: api, config, database folders
- [ ] config/database.php has correct database name
- [ ] Test URLs return JSON (not HTML error pages)

### ☐ Frontend Issues
- [ ] Expo dev server running (shows QR code)
- [ ] No errors in terminal
- [ ] API_BASE_URL correct in frontend\src\config\api.js
- [ ] If on physical device, using computer's IP (not localhost)

---

## QUICK VERIFICATION

Run through this quick test:

1. ✅ XAMPP Control Panel shows Apache and MySQL running (green)
2. ✅ http://localhost/phpmyadmin opens successfully
3. ✅ Database `vaniya_pet_db` visible in left sidebar
4. ✅ http://localhost/vaniya-pet-backend/api/breeds.php shows JSON data
5. ✅ Expo terminal shows QR code and "Metro waiting on exp://..."
6. ✅ Scan QR with Expo Go and app opens

**All green? You're done! 🎉**

---

## TIME ESTIMATE

- ☐ Install XAMPP: **5 minutes**
- ☐ Create database: **2 minutes**
- ☐ Import schema: **1 minute**
- ☐ Import seed data: **1 minute**
- ☐ Copy backend files: **1 minute**
- ☐ Test everything: **2 minutes**

**Total: ~12 minutes** ⏱️

---

## AFTER SETUP

Once everything is checked off:

✅ Your app connects to real database  
✅ Login works with demo accounts  
✅ All data is persistent (not sample/hardcoded)  
✅ You can add/edit pets, vaccinations, bookings  
✅ Full-featured pet care management app! 🐾

---

## DEMO LOGIN CREDENTIALS

After importing seed.sql:

**Account 1:**
- Email: `john@example.com`
- Password: `password123`

**Account 2:**
- Email: `jane@example.com`
- Password: `password123`

---

## FILES REFERENCE

| File | Purpose |
|------|---------|
| `QUICK_START.md` | Quick overview and setup guide |
| `DATABASE_SETUP_GUIDE.md` | Detailed database instructions |
| `setup-backend.bat` | Automated backend file copy |
| `backend/database/schema.sql` | Database structure |
| `backend/database/seed.sql` | Sample data |
| `frontend/src/config/api.js` | API configuration |

---

**Start with STEP 1 and work your way down! Each step takes just a few minutes. 🚀**
