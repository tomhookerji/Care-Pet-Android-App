-- Enhanced Sample Data for Vaniya Pet App
-- This file contains comprehensive test data

USE vaniya_pet_db;

-- Clear existing data (optional - be careful in production!)
SET FOREIGN_KEY_CHECKS = 0;

SET FOREIGN_KEY_CHECKS = 1;

-- Insert sample users with varied profiles
INSERT INTO users (name, email, password, phone, address) VALUES
('John Doe', 'john@example.com', MD5('password123'), '+1234567890', '123 Pet Street, Dog City, CA 90210'),
('Jane Smith', 'jane@example.com', MD5('password123'), '+1234567891', '456 Animal Avenue, Pet Town, NY 10001'),
('Mike Johnson', 'mike@example.com', MD5('password123'), '+1234567892', '789 Paw Place, Canine County, TX 75001'),
('Sarah Williams', 'sarah@example.com', MD5('password123'), '+1234567893', '321 Bark Boulevard, Hound Hills, FL 33101');

-- Insert dog breeds with images
INSERT INTO breeds (name, origin, size, temperament, description, image_url, friendliness, energy_level, trainability, exercise_needs) VALUES
('Golden Retriever', 'Scotland', 'Large', 'Friendly, Intelligent, Devoted', 'The Golden Retriever is a medium-large gun dog that was bred to retrieve shot waterfowl. Known for their gentle mouths and loving temperament, they make excellent family pets and service dogs.', 'https://images.dog.ceo/breeds/retriever-golden/n02099601_1003.jpg', 5, 4, 5, 4),
('German Shepherd', 'Germany', 'Large', 'Confident, Courageous, Smart', 'The German Shepherd is a versatile working dog known for intelligence, strength, and trainability. Often used in police and military roles, they are also loyal family companions.', 'https://images.dog.ceo/breeds/germanshepherd/n02106662_10307.jpg', 4, 5, 5, 5),
('Labrador Retriever', 'Canada', 'Large', 'Outgoing, Even Tempered, Gentle', 'The Labrador Retriever is one of the most popular dog breeds worldwide. Originally bred as fishing and hunting dogs, they are now beloved family pets known for their friendly nature.', 'https://images.dog.ceo/breeds/labrador/n02099712_3503.jpg', 5, 5, 5, 5),
('Beagle', 'England', 'Small to Medium', 'Gentle, Friendly, Curious', 'The Beagle is a small scent hound bred for hunting. With their excellent nose and friendly personality, they make wonderful family pets but can be stubborn during training.', 'https://images.dog.ceo/breeds/beagle/n02088364_11136.jpg', 5, 4, 3, 4),
('Poodle', 'Germany/France', 'Small to Large', 'Intelligent, Active, Elegant', 'The Poodle comes in three sizes and is known for exceptional intelligence and hypoallergenic coat. Originally water retrievers, they excel in obedience and agility competitions.', 'https://images.dog.ceo/breeds/poodle-standard/n02113799_3215.jpg', 4, 4, 5, 4),
('Bulldog', 'England', 'Medium', 'Docile, Willful, Friendly', 'The Bulldog is a British breed known for its distinctive wrinkled face and pushed-in nose. Despite their tough appearance, they are gentle, affectionate, and great with children.', 'https://images.dog.ceo/breeds/bulldog-english/jager-1.jpg', 4, 2, 3, 2),
('Rottweiler', 'Germany', 'Large', 'Loyal, Loving, Confident', 'The Rottweiler is a powerful breed that served as herding and guard dogs. With proper training and socialization, they are devoted family protectors and companions.', 'https://images.dog.ceo/breeds/rottweiler/n02106550_3864.jpg', 3, 4, 4, 4),
('Pug', 'China', 'Small', 'Charming, Mischievous, Loving', 'The Pug is an ancient Chinese breed with a distinctive wrinkly face. Known for their charming personality and love of human companionship, they adapt well to apartment living.', 'https://images.dog.ceo/breeds/pug/n02110958_10753.jpg', 5, 2, 3, 2),
('Siberian Husky', 'Siberia', 'Medium to Large', 'Outgoing, Alert, Gentle', 'The Siberian Husky is a medium-sized working dog breed that originated in Northeast Siberia. Known for their endurance, striking appearance, and friendly temperament.', 'https://images.dog.ceo/breeds/husky/n02110185_1478.jpg', 4, 5, 3, 5),
('Dachshund', 'Germany', 'Small', 'Clever, Stubborn, Devoted', 'The Dachshund, also known as the wiener dog, was bred to hunt badgers. Their elongated body and short legs make them distinctive, and they are known for their bold personality.', 'https://images.dog.ceo/breeds/dachshund/dog-634543_1280.jpg', 4, 3, 3, 3),
('Border Collie', 'Scotland/England', 'Medium', 'Intelligent, Energetic, Responsive', 'The Border Collie is considered the most intelligent dog breed. Originally bred for herding sheep, they excel in dog sports and require significant mental and physical stimulation.', 'https://images.dog.ceo/breeds/collie-border/n02106166_3347.jpg', 4, 5, 5, 5),
('Shih Tzu', 'China', 'Small', 'Affectionate, Playful, Outgoing', 'The Shih Tzu is an ancient toy breed originally kept by Chinese royalty. Known for their long, flowing coat and friendly personality, they make excellent companion dogs.', 'https://images.dog.ceo/breeds/shihtzu/n02086240_1083.jpg', 5, 3, 3, 2);

-- Insert comprehensive vaccination schedule
INSERT INTO vaccinations (name, description, age_months, dose_number, is_core) VALUES
('DHPP - First Dose', 'Core vaccine protecting against Distemper, Hepatitis, Parvovirus, and Parainfluenza. First dose in puppy series.', 2, 1, TRUE),
('DHPP - Second Dose', 'Second dose of core vaccine for building immunity. Administered 3-4 weeks after first dose.', 3, 2, TRUE),
('DHPP - Third Dose', 'Third dose completing the initial puppy vaccination series for full protection.', 4, 3, TRUE),
('Rabies Vaccine', 'Essential vaccine required by law in most areas. Protects against fatal viral disease.', 4, 1, TRUE),
('Bordetella (Kennel Cough)', 'Recommended for dogs in social settings like boarding, daycare, or dog parks.', 6, 1, FALSE),
('Lyme Disease', 'Recommended for dogs in tick-prone areas or those frequently in wooded areas.', 6, 1, FALSE),
('Leptospirosis', 'Protects against bacterial disease spread through water contaminated by wildlife urine.', 6, 1, FALSE),
('Canine Influenza (H3N2/H3N8)', 'Recommended for dogs frequently exposed to other dogs in group settings.', 7, 1, FALSE),
('DHPP - Annual Booster', 'Annual booster to maintain immunity against core diseases.', 12, 4, TRUE),
('Rabies - 1-Year Booster', 'Required booster one year after initial rabies vaccine.', 16, 2, TRUE),
('Bordetella - Annual Booster', 'Annual booster for continued protection against kennel cough.', 18, 2, FALSE),
('DHPP - 3-Year Booster', 'After initial series, DHPP can be given every 3 years per veterinarian recommendation.', 36, 5, TRUE);

-- Insert age-specific diet recommendations
INSERT INTO diet_recommendations (breed_id, min_age_months, max_age_months, frequency_per_day, portion_guideline, food_type, recommendations, tips) VALUES
-- Puppy stage (all breeds)
(NULL, 2, 12, 4, '1/4 to 1 cup per meal based on weight', 'High-quality puppy food with DHA', 'Protein-rich diet (22-32% protein), Balanced calcium and phosphorus for bone growth, DHA for brain development', 'Always use puppy-specific formulas, Transition slowly between foods over 7-10 days, Avoid table scraps and human food, Ensure fresh water always available'),

-- Adult stage (all breeds)
(NULL, 12, 84, 2, 'Measured portions based on weight and activity level', 'High-quality adult dog food', 'Protein content 18-25%, Balanced nutrients for maintenance, Appropriate fat levels based on activity', 'Maintain consistent feeding schedule (morning and evening), Adjust portions based on activity level and body condition, Monitor weight regularly'),

-- Large breed adults (specific needs)
(1, 12, 84, 2, '3-4 cups per day divided into 2 meals', 'Large breed adult formula', 'Controlled calcium for joint health, Glucosamine and chondroitin supplements, L-carnitine for heart health', 'Monitor for bloat risk - avoid exercise immediately after meals, Consider raised feeding bowls'),
(2, 12, 84, 2, '3-4 cups per day divided into 2 meals', 'Large breed adult formula', 'High protein (25-30%), Joint support nutrients, Digestive enzymes', 'German Shepherds prone to digestive issues - high-quality, easily digestible proteins'),
(3, 12, 84, 2, '3-5 cups per day divided into 2 meals', 'Active breed adult formula', 'Higher fat content (12-18%) for energy, Omega-3 and omega-6 fatty acids for coat', 'Labradors prone to obesity - strict portion control essential'),

-- Small breed adults (specific needs)
(4, 12, 84, 2, '1-1.5 cups per day divided into 2 meals', 'Small breed adult formula', 'Smaller kibble size, Higher calorie density, Dental care formula', 'Beagles prone to overeating - measured portions only'),
(6, 12, 84, 2, '1-1.5 cups per day divided into 2 meals', 'Small to medium breed formula', 'Easy-to-digest proteins, Moderate fat content, Fiber for weight management', 'Bulldogs prone to weight gain and breathing issues - monitor portions carefully'),
(8, 12, 84, 2, '3/4-1 cup per day divided into 2 meals', 'Small breed formula', 'Calorie-controlled for weight management, Small kibble size, Joint support', 'Pugs prone to obesity - strict feeding schedule and limited treats'),

-- Senior stage (all breeds)
(NULL, 84, 240, 2, 'Reduced portions, adjust for decreased activity', 'Senior-specific formula', 'Lower calorie content to prevent weight gain, Joint support (glucosamine, chondroitin), Easy-to-digest proteins, Antioxidants for cognitive function', 'Monitor for weight gain due to decreased activity, Softer food options for dental issues, Consider adding warm water to kibble, More frequent vet check-ups for dietary adjustments');

-- Insert caretakers/boarding centers with detailed information
INSERT INTO caretakers (name, location, address, phone, email, rating, reviews, price_per_day, capacity, available, services, image_url, description) VALUES
('Happy Paws Boarding', 'Downtown', '123 Main Street, City Center, CA 90210', '+1234567800', 'info@happypaws.com', 4.8, 124, 30.00, 10, TRUE, '["24/7 Supervision", "Feeding", "Walking 3x Daily", "Play Time", "Basic Grooming", "Medication Administration"]', 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800', 'Professional pet boarding with loving care and spacious facilities. Climate-controlled environment with indoor and outdoor play areas. Experienced staff trained in pet first aid.'),

('Cozy Kennel Care', 'Suburbs', '456 Oak Avenue, Suburbia, CA 91234', '+1234567801', 'contact@cozykennel.com', 4.6, 89, 25.00, 8, TRUE, '["Home-style Boarding", "Feeding", "Walking 2x Daily", "Play Time", "Cuddle Time"]', 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=800', 'Family-run boarding facility with personal attention to each pet. Small group sizes ensure individual care. Pets stay in our home as part of the family.'),

('Pampered Pets Resort', 'City Center', '789 Luxury Lane, Downtown, CA 90211', '+1234567802', 'hello@pamperedpets.com', 4.9, 156, 45.00, 15, TRUE, '["Luxury Suites", "Feeding", "Walking 4x Daily", "Play Time", "Professional Grooming", "Training Sessions", "Spa Services", "Webcam Access"]', 'https://images.unsplash.com/photo-1544568104-5b7eb8189dd4?w=800', 'Luxury pet resort offering premium boarding and spa services. Private suites with orthopedic beds, TV, and webcam access. On-site veterinarian available. Pool and agility course.'),

('Friendly Tails Lodge', 'North Side', '321 Park Road, North District, CA 91000', '+1234567803', 'info@friendlytails.com', 4.5, 67, 28.00, 6, FALSE, '["Feeding", "Walking 2x Daily", "Play Time", "Social Time with Other Dogs"]', 'https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?w=800', 'Small, intimate boarding with personalized care for each guest. Large fenced yard for supervised group play. Currently at full capacity - booking for next month.'),

('Pet Paradise Boarding', 'East End', '555 Garden Street, East Side, CA 92000', '+1234567804', 'care@petparadise.com', 4.7, 98, 35.00, 12, TRUE, '["Feeding", "Walking 3x Daily", "Play Time", "Professional Grooming", "Basic Training", "Swimming Pool Access"]', 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800', 'Modern facilities with indoor and outdoor play areas. Swimming pool for water-loving dogs. Climate-controlled kennels with comfortable bedding. Daily report cards with photos.'),

('Country Canine Retreat', 'Rural Area', '888 Countryside Lane, Rural Valley, CA 93000', '+1234567805', 'stay@countrycanine.com', 4.9, 142, 32.00, 20, TRUE, '["Open Play Areas", "Feeding", "Hiking Trails", "Nature Walks", "Play Time", "Campfire Sessions"]', 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800', '10-acre property with hiking trails and open play areas. Perfect for energetic dogs who love the outdoors. Farm animals on property for socialization. Cage-free environment.'),

('City Paws Hotel', 'Downtown', '999 Urban Avenue, Metro Center, CA 90212', '+1234567806', 'reservations@citypawshotel.com', 4.6, 78, 40.00, 14, TRUE, '["Luxury Accommodation", "Feeding", "Walking 4x Daily", "Daycare Integration", "Grooming", "Training"]', 'https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?w=800', 'Boutique pet hotel in the heart of downtown. Rooftop play area with city views. Integration with our popular daycare program. Premium bedding and gourmet meal options available.');

-- Insert sample pets for multiple users
INSERT INTO pets (user_id, name, breed_id, birth_date, gender, weight, image_url) VALUES
-- John's pets
(1, 'Max', 1, '2024-03-15', 'male', 12.5, 'https://images.dog.ceo/breeds/retriever-golden/n02099601_100.jpg'),
(1, 'Bella', 3, '2023-01-20', 'female', 28.3, 'https://images.dog.ceo/breeds/labrador/n02099712_3500.jpg'),

-- Jane's pets
(2, 'Rocky', 2, '2022-06-10', 'male', 35.7, 'https://images.dog.ceo/breeds/germanshepherd/n02106662_10300.jpg'),
(2, 'Luna', 5, '2024-02-14', 'female', 18.2, 'https://images.dog.ceo/breeds/poodle-standard/n02113799_3200.jpg'),

-- Mike's pets
(3, 'Charlie', 4, '2023-09-05', 'male', 11.8, 'https://images.dog.ceo/breeds/beagle/n02088364_11100.jpg'),
(3, 'Daisy', 8, '2024-04-22', 'female', 7.2, 'https://images.dog.ceo/breeds/pug/n02110958_10700.jpg'),

-- Sarah's pets
(4, 'Cooper', 9, '2023-03-18', 'male', 22.5, 'https://images.dog.ceo/breeds/husky/n02110185_1400.jpg'),
(4, 'Sadie', 11, '2022-11-30', 'female', 16.3, 'https://images.dog.ceo/breeds/collie-border/n02106166_3300.jpg');

-- Insert comprehensive vaccination records for all pets
-- Max (9 months old - completed initial series)
INSERT INTO pet_vaccination_records (pet_id, vaccination_id, date_given, date_scheduled, status, notes) VALUES
(1, 1, '2024-05-15', NULL, 'completed', 'First vaccine completed successfully. No adverse reactions.'),
(1, 2, '2024-06-15', NULL, 'completed', 'Second dose administered. Puppy healthy and energetic.'),
(1, 3, '2024-07-15', NULL, 'completed', 'Third dose completed. Full immunity achieved.'),
(1, 4, '2024-07-15', NULL, 'completed', 'Rabies vaccine given. Received certificate.'),
(1, 5, '2024-09-15', NULL, 'completed', 'Bordetella administered before boarding.'),
(1, 9, NULL, '2025-07-15', 'scheduled', 'Annual DHPP booster scheduled'),
(1, 10, NULL, '2025-07-15', 'scheduled', 'Rabies 1-year booster scheduled');

-- Bella (22 months old - needs boosters)
INSERT INTO pet_vaccination_records (pet_id, vaccination_id, date_given, date_scheduled, status, notes) VALUES
(2, 1, '2023-03-20', NULL, 'completed', 'Initial series completed'),
(2, 2, '2023-04-20', NULL, 'completed', 'Second dose given'),
(2, 3, '2023-05-20', NULL, 'completed', 'Third dose completed'),
(2, 4, '2023-05-20', NULL, 'completed', 'Rabies completed'),
(2, 9, '2024-05-20', NULL, 'completed', 'Annual booster given'),
(2, 10, '2024-05-20', NULL, 'completed', 'Rabies booster given'),
(2, 9, NULL, '2025-05-20', 'scheduled', 'Next annual booster due'),
(2, 11, NULL, '2025-05-20', 'scheduled', 'Bordetella booster needed');

-- Rocky (30 months old - up to date)
INSERT INTO pet_vaccination_records (pet_id, vaccination_id, date_given, date_scheduled, status, notes) VALUES
(3, 1, '2022-08-10', NULL, 'completed', 'Initial series'),
(3, 2, '2022-09-10', NULL, 'completed', 'Second dose'),
(3, 3, '2022-10-10', NULL, 'completed', 'Third dose'),
(3, 4, '2022-10-10', NULL, 'completed', 'Rabies completed'),
(3, 9, '2023-10-10', NULL, 'completed', 'Year 1 booster'),
(3, 10, '2023-10-10', NULL, 'completed', 'Rabies booster'),
(3, 9, '2024-10-10', NULL, 'completed', 'Year 2 booster - just completed!'),
(3, 12, NULL, '2025-10-10', 'scheduled', 'Can switch to 3-year booster next year');

-- Luna (10 months old - on schedule)
INSERT INTO pet_vaccination_records (pet_id, vaccination_id, date_given, date_scheduled, status, notes) VALUES
(4, 1, '2024-04-14', NULL, 'completed', 'Started vaccines'),
(4, 2, '2024-05-14', NULL, 'completed', 'Second round'),
(4, 3, '2024-06-14', NULL, 'completed', 'Completed series'),
(4, 4, '2024-06-14', NULL, 'completed', 'Rabies given'),
(4, 5, '2024-08-14', NULL, 'completed', 'Bordetella for daycare'),
(4, 9, NULL, '2025-06-14', 'upcoming', 'Annual booster coming up'),
(4, 10, NULL, '2025-06-14', 'upcoming', 'Rabies booster upcoming');

-- Charlie (14 months old - needs attention)
INSERT INTO pet_vaccination_records (pet_id, vaccination_id, date_given, date_scheduled, status, notes) VALUES
(5, 1, '2023-11-05', NULL, 'completed', 'First dose given'),
(5, 2, '2023-12-05', NULL, 'completed', 'Second dose'),
(5, 3, '2024-01-05', NULL, 'completed', 'Series completed'),
(5, 4, '2024-01-05', NULL, 'completed', 'Rabies completed'),
(5, 9, NULL, '2025-01-05', 'overdue', 'OVERDUE - needs immediate attention!'),
(5, 10, NULL, '2025-01-05', 'overdue', 'OVERDUE - needs immediate attention!');

-- Daisy (7 months old - in progress)
INSERT INTO pet_vaccination_records (pet_id, vaccination_id, date_given, date_scheduled, status, notes) VALUES
(6, 1, '2024-06-22', NULL, 'completed', 'First vaccine'),
(6, 2, '2024-07-22', NULL, 'completed', 'Second vaccine'),
(6, 3, '2024-08-22', NULL, 'completed', 'Third vaccine completed'),
(6, 4, '2024-08-22', NULL, 'completed', 'Rabies vaccine given'),
(6, 5, NULL, '2024-12-22', 'scheduled', 'Bordetella scheduled for winter boarding');

-- Cooper (21 months old)
INSERT INTO pet_vaccination_records (pet_id, vaccination_id, date_given, date_scheduled, status, notes) VALUES
(7, 1, '2023-05-18', NULL, 'completed', 'Initial series started'),
(7, 2, '2023-06-18', NULL, 'completed', 'Second dose'),
(7, 3, '2023-07-18', NULL, 'completed', 'Completed initial series'),
(7, 4, '2023-07-18', NULL, 'completed', 'Rabies vaccine'),
(7, 6, '2023-09-18', NULL, 'completed', 'Lyme disease - lives in wooded area'),
(7, 9, '2024-07-18', NULL, 'completed', 'Annual booster completed'),
(7, 10, '2024-07-18', NULL, 'completed', 'Rabies booster completed'),
(7, 9, NULL, '2025-07-18', 'scheduled', 'Next annual booster');

-- Sadie (25 months old - very active dog)
INSERT INTO pet_vaccination_records (pet_id, vaccination_id, date_given, date_scheduled, status, notes) VALUES
(8, 1, '2023-01-30', NULL, 'completed', 'Started vaccination series'),
(8, 2, '2023-02-27', NULL, 'completed', 'Second vaccine'),
(8, 3, '2023-03-30', NULL, 'completed', 'Third vaccine'),
(8, 4, '2023-03-30', NULL, 'completed', 'Rabies vaccine'),
(8, 5, '2023-05-30', NULL, 'completed', 'Bordetella for agility classes'),
(8, 8, '2023-06-30', NULL, 'completed', 'Canine influenza - frequents dog park'),
(8, 9, '2024-03-30', NULL, 'completed', 'Annual booster'),
(8, 10, '2024-03-30', NULL, 'completed', 'Rabies booster'),
(8, 11, '2024-05-30', NULL, 'completed', 'Bordetella booster for continued classes'),
(8, 9, NULL, '2025-03-30', 'upcoming', 'Annual booster due next spring');

-- Insert sample bookings with various statuses
INSERT INTO bookings (user_id, pet_id, caretaker_id, start_date, end_date, total_days, total_price, status, notes) VALUES
-- Past bookings
(1, 1, 1, '2024-09-01', '2024-09-05', 4, 120.00, 'completed', 'Max had a great time! Very friendly with other dogs.'),
(2, 3, 3, '2024-08-15', '2024-08-20', 5, 225.00, 'completed', 'Rocky enjoyed the luxury suite and swimming pool.'),
(3, 5, 2, '2024-10-10', '2024-10-12', 2, 50.00, 'completed', 'Charlie was well-behaved. No issues.'),

-- Current/Confirmed bookings
(1, 2, 5, '2024-12-20', '2024-12-27', 7, 245.00, 'confirmed', 'Bella needs her morning medication at 8 AM. Medication included in bag.'),
(4, 7, 6, '2024-12-23', '2024-12-30', 7, 224.00, 'confirmed', 'Cooper loves hiking! He has lots of energy. Harness preferred over collar.'),
(2, 4, 3, '2024-12-24', '2024-12-26', 2, 90.00, 'confirmed', 'Luna is shy at first but warms up quickly. Hypoallergenic diet only.'),

-- Upcoming bookings
(3, 6, 7, '2025-01-05', '2025-01-08', 3, 120.00, 'confirmed', 'Daisy is a pug - watch for breathing issues in heat. Keep her cool and hydrated.'),
(4, 8, 5, '2025-02-14', '2025-02-16', 2, 70.00, 'pending', 'Sadie is very active. She needs lots of exercise and mental stimulation.'),

-- Cancelled booking
(1, 1, 1, '2024-11-01', '2024-11-03', 2, 60.00, 'cancelled', 'Plans changed - cancelled with 2 weeks notice. Full refund issued.');

-- Add some additional bookings for variety
INSERT INTO bookings (user_id, pet_id, caretaker_id, start_date, end_date, total_days, total_price, status, notes) VALUES
(2, 3, 1, '2025-03-15', '2025-03-18', 3, 90.00, 'pending', 'Rocky may need to visit beach-themed daycare - loves water!'),
(3, 5, 2, '2025-04-01', '2025-04-05', 4, 100.00, 'pending', 'Charlie gets along well with other small dogs. Sensitive stomach - premium food only.'),
(4, 7, 6, '2025-05-20', '2025-05-25', 5, 160.00, 'confirmed', 'Cooper confirmed for hiking retreat. Bring his own harness and leash.');

-- SUCCESS MESSAGE
SELECT 'Database seeded successfully with comprehensive sample data!' AS Status,
       (SELECT COUNT(*) FROM users) AS Users,
       (SELECT COUNT(*) FROM breeds) AS Breeds,
       (SELECT COUNT(*) FROM vaccinations) AS Vaccinations,
       (SELECT COUNT(*) FROM pets) AS Pets,
       (SELECT COUNT(*) FROM pet_vaccination_records) AS VaccinationRecords,
       (SELECT COUNT(*) FROM caretakers) AS Caretakers,
       (SELECT COUNT(*) FROM bookings) AS Bookings,
       (SELECT COUNT(*) FROM diet_recommendations) AS DietRecommendations;
