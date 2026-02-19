@echo off
echo ========================================
echo Vaniya Pet App - Backend Setup Script
echo ========================================
echo.

REM Check if XAMPP exists
IF NOT EXIST "C:\xampp\htdocs" (
    echo ERROR: XAMPP not found at C:\xampp
    echo Please install XAMPP first from: https://www.apachefriends.org/download.html
    echo.
    pause
    exit /b
)

echo XAMPP found! Proceeding with backend setup...
echo.

REM Create backup if folder exists
IF EXIST "C:\xampp\htdocs\vaniya-pet-backend" (
    echo Backend folder already exists. Creating backup...
    move "C:\xampp\htdocs\vaniya-pet-backend" "C:\xampp\htdocs\vaniya-pet-backend-backup-%date:~-4,4%%date:~-10,2%%date:~-7,2%-%time:~0,2%%time:~3,2%%time:~6,2%" 2>nul
    echo Backup created.
    echo.
)

REM Copy backend files
echo Copying backend files to XAMPP htdocs...
xcopy "%~dp0backend" "C:\xampp\htdocs\vaniya-pet-backend\" /E /I /Y

IF %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo SUCCESS! Backend files copied.
    echo ========================================
    echo.
    echo Location: C:\xampp\htdocs\vaniya-pet-backend
    echo.
    echo NEXT STEPS:
    echo 1. Open XAMPP Control Panel
    echo 2. Start Apache and MySQL
    echo 3. Open phpMyAdmin: http://localhost/phpmyadmin
    echo 4. Create database: vaniya_pet_db
    echo 5. Import schema.sql from: backend\database\schema.sql
    echo 6. Import seed.sql from: backend\database\seed.sql
    echo 7. Test API: http://localhost/vaniya-pet-backend/api/breeds.php
    echo.
    echo For detailed instructions, see: DATABASE_SETUP_GUIDE.md
    echo.
) ELSE (
    echo.
    echo ERROR: Failed to copy files!
    echo Please copy manually from:
    echo   FROM: %~dp0backend
    echo   TO:   C:\xampp\htdocs\vaniya-pet-backend
    echo.
)

pause
