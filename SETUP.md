# Quick Setup Guide - Vaniya Pet App

Follow these steps to get the app running quickly:

## Step 1: Backend Setup (5 minutes)

### 1.1 Install XAMPP
- Download from: https://www.apachefriends.org/
- Install and start Apache + MySQL

### 1.2 Create Database
```sql
1. Open http://localhost/phpmyadmin
2. Create database: vaniya_pet_db
3. Import files in this order:
   - backend/database/schema.sql
   - backend/database/seed.sql
```

### 1.3 Copy Backend Files
```powershell
# Copy backend to XAMPP htdocs
xcopy /E /I "C:\Users\smarty\Desktop\Jivraj\VaniyaPetApp\backend" "C:\xampp\htdocs\vaniya-pet-api"
```

### 1.4 Test Backend
Open browser: http://localhost/vaniya-pet-api/api/breeds.php
✅ Should show JSON with dog breeds

## Step 2: Frontend Setup (3 minutes)

### 2.1 Install Dependencies
```powershell
cd C:\Users\smarty\Desktop\Jivraj\VaniyaPetApp\frontend
npm install
```

### 2.2 Update API URL (if needed)
Edit `frontend/src/config/api.js`:
```javascript
// For emulator use:
export const API_BASE_URL = 'http://localhost/vaniya-pet-api';

// For physical device use your PC's IP:
// export const API_BASE_URL = 'http://192.168.1.X/vaniya-pet-api';
```

To find your IP:
```powershell
ipconfig
# Look for IPv4 Address under your network adapter
```

### 2.3 Start the App
```powershell
npm start
```

### 2.4 Run on Device
- **Android Emulator**: Press `a`
- **iOS Simulator** (Mac only): Press `i`
- **Physical Device**: 
  1. Install "Expo Go" app from Play Store/App Store
  2. Scan the QR code shown in terminal

## Step 3: Test the App

### Test Login (Optional)
```
Email: john@example.com
Password: password123
```

### Features to Test:
1. ✅ Browse dog breeds
2. ✅ View breed details
3. ✅ Check vaccination schedule
4. ✅ View diet recommendations
5. ✅ Browse boarding services
6. ✅ Book a caretaker

## Common Issues & Fixes

### ❌ "Network request failed"
**Solution**: Update API base URL to your PC's IP address

### ❌ "Database connection error"
**Solution**: 
1. Check XAMPP MySQL is running
2. Verify database name in `backend/config/database.php`
3. Ensure schema.sql was imported

### ❌ "Port 19000 already in use"
**Solution**: 
```powershell
npx expo start -c --port 19001
```

### ❌ App shows blank screen
**Solution**:
```powershell
# Clear cache and restart
npx expo start -c
```

## Next Steps

1. **Customize Branding**: Update colors in screens
2. **Add More Breeds**: Insert more breeds in database
3. **Production Build**: Use `expo build:android` or `expo build:ios`
4. **Deploy Backend**: Move to web hosting with PHP/MySQL support

## File Structure Verification

Check you have these key files:
```
✅ frontend/package.json
✅ frontend/App.js
✅ frontend/src/screens/HomeScreen.js
✅ frontend/src/services/api.js
✅ backend/config/database.php
✅ backend/api/breeds.php
✅ backend/database/schema.sql
✅ README.md
```

## Support

If you encounter issues:
1. Check XAMPP Control Panel (Apache & MySQL green)
2. Verify database was created and populated
3. Ensure API URL matches your setup
4. Try clearing Metro cache: `npx expo start -c`

---

**Happy Building! 🚀🐾**
