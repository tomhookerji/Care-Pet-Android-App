-- Sample data for Vaniya Pet App

USE vaniya_pet_db;

-- Insert sample users
INSERT INTO users (name, email, password, phone, address) VALUES
('John Doe', 'john@example.com', MD5('password123'), '+1234567890', '123 Pet Street, Dog City'),
('Jane Smith', 'jane@example.com', MD5('password123'), '+1234567891', '456 Animal Avenue, Pet Town');

-- Insert dog breeds
INSERT INTO breeds (name, origin, size, temperament, description, image_url, friendliness, energy_level, trainability, exercise_needs) VALUES
('Golden Retriever', 'Scotland', 'Large', 'Friendly, Intelligent, Devoted', 'The Golden Retriever is a medium-large gun dog that was bred to retrieve shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.', 'https://images.dog.ceo/breeds/retriever-golden/n02099601_1003.jpg', 5, 4, 5, 4),
('German Shepherd', 'Germany', 'Large', 'Confident, Courageous, Smart', 'The German Shepherd is a breed of medium to large-sized working dog that originated in Germany. They are known for their intelligence, strength, and versatility.', 'https://images.dog.ceo/breeds/germanshepherd/n02106662_10307.jpg', 4, 5, 5, 5),
('Labrador Retriever', 'Canada', 'Large', 'Outgoing, Even Tempered, Gentle', 'The Labrador Retriever is a British breed of retriever gun dog. It was developed in the United Kingdom from fishing dogs imported from Newfoundland.', 'https://images.dog.ceo/breeds/labrador/n02099712_3503.jpg', 5, 5, 5, 5),
('Beagle', 'England', 'Small to Medium', 'Gentle, Friendly, Curious', 'The Beagle is a breed of small scent hound, similar in appearance to the much larger foxhound. The beagle was developed primarily for hunting hare.', 'https://images.dog.ceo/breeds/beagle/n02088364_11136.jpg', 5, 4, 3, 4),
('Poodle', 'Germany/France', 'Small to Large', 'Intelligent, Active, Elegant', 'The Poodle is a dog breed that comes in three varieties: Standard Poodle, Miniature Poodle, and Toy Poodle. They are known for their intelligence and hypoallergenic coat.', 'https://images.dog.ceo/breeds/poodle-standard/n02113799_3215.jpg', 4, 4, 5, 4),
('Bulldog', 'England', 'Medium', 'Docile, Willful, Friendly', 'The Bulldog is a British breed of dog of mastiff type. It may also be known as the English Bulldog or British Bulldog. It is a medium-sized, muscular dog.', 'https://images.dog.ceo/breeds/bulldog-english/jager-1.jpg', 4, 2, 3, 2),
('Rottweiler', 'Germany', 'Large', 'Loyal, Loving, Confident', 'The Rottweiler is a breed of domestic dog, regarded as medium-to-large or large. The dogs were known in German as Rottweiler Metzgerhund.', 'https://images.dog.ceo/breeds/rottweiler/n02106550_3864.jpg', 3, 4, 4, 4),
('Pug', 'China', 'Small', 'Charming, Mischievous, Loving', 'The pug is a breed of dog originally from China, with physically distinctive features of a wrinkly, short-muzzled face and curled tail.', 'https://images.dog.ceo/breeds/pug/n02110958_10753.jpg', 5, 2, 3, 2);

-- Insert standard vaccination schedule
INSERT INTO vaccinations (name, description, age_months, dose_number, is_core) VALUES
('DHPP - First Dose', 'Core vaccine protecting against Distemper, Hepatitis, Parvovirus, and Parainfluenza', 2, 1, TRUE),
('DHPP - Second Dose', 'Second dose of core vaccine for better immunity', 3, 2, TRUE),
('DHPP - Third Dose', 'Third dose completing the initial vaccination series', 4, 3, TRUE),
('Rabies Vaccine', 'Essential vaccine required by law in most areas', 4, 1, TRUE),
('Bordetella (Kennel Cough)', 'Recommended for dogs in social settings like boarding or daycare', 6, 1, FALSE),
('Lyme Disease', 'Recommended for dogs in tick-prone areas', 6, 1, FALSE),
('Leptospirosis', 'Protects against bacterial disease spread through water', 6, 1, FALSE),
('Influenza', 'Recommended for dogs frequently exposed to other dogs', 7, 1, FALSE),
('DHPP - Annual Booster', 'Annual booster to maintain immunity', 12, 4, TRUE),
('Rabies - Booster', 'Required annual or triennial booster depending on vaccine type', 16, 2, TRUE);

-- Insert diet recommendations
INSERT INTO diet_recommendations (breed_id, min_age_months, max_age_months, frequency_per_day, portion_guideline, food_type, recommendations, tips) VALUES
(NULL, 2, 12, 4, 'Small, frequent meals', 'High-quality puppy food with DHA', 'Protein-rich diet (22-32% protein), Balanced calcium and phosphorus for bone growth', 'Always use puppy-specific formulas, Transition slowly between foods, Avoid table scraps'),
(NULL, 12, 84, 2, 'Measured portions based on weight', 'High-quality adult dog food', 'Protein content 18-25%, Balanced nutrients for maintenance', 'Maintain consistent feeding schedule, Adjust portions based on activity'),
(NULL, 84, 240, 2, 'Reduced portions, easier to digest', 'Senior-specific formula', 'Lower calorie content, Joint support supplements, Easy-to-digest proteins', 'Monitor for weight gain, Softer food for dental issues');

-- Insert caretakers/boarding centers
INSERT INTO caretakers (name, location, address, phone, email, rating, reviews, price_per_day, capacity, available, services, image_url, description) VALUES
('Happy Paws Boarding', 'Downtown', '123 Main Street, City Center', '+1234567800', 'info@happypaws.com', 4.8, 124, 30.00, 10, TRUE, '["Feeding", "Walking", "Play Time", "Grooming"]', 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b', 'Professional pet boarding with loving care and spacious facilities.'),
('Cozy Kennel Care', 'Suburbs', '456 Oak Avenue, Suburbia', '+1234567801', 'contact@cozykennel.com', 4.6, 89, 25.00, 8, TRUE, '["Feeding", "Walking", "Play Time"]', 'https://images.unsplash.com/photo-1561037404-61cd46aa615b', 'Family-run boarding facility with personal attention to each pet.'),
('Pampered Pets Resort', 'City Center', '789 Luxury Lane, Downtown', '+1234567802', 'hello@pamperedpets.com', 4.9, 156, 45.00, 15, TRUE, '["Feeding", "Walking", "Play Time", "Grooming", "Training", "Spa"]', 'https://images.unsplash.com/photo-1544568104-5b7eb8189dd4', 'Luxury pet resort offering premium boarding and spa services.'),
('Friendly Tails Lodge', 'North Side', '321 Park Road, North District', '+1234567803', 'info@friendlytails.com', 4.5, 67, 28.00, 6, FALSE, '["Feeding", "Walking", "Play Time"]', 'https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf', 'Small, intimate boarding with personalized care for each guest.'),
('Pet Paradise Boarding', 'East End', '555 Garden Street, East Side', '+1234567804', 'care@petparadise.com', 4.7, 98, 35.00, 12, TRUE, '["Feeding", "Walking", "Play Time", "Grooming", "Training"]', 'https://images.unsplash.com/photo-1587300003388-59208cc962cb', 'Modern facilities with indoor and outdoor play areas.');

-- Insert sample pet for demo user
INSERT INTO pets (user_id, name, breed_id, birth_date, gender, weight, image_url) VALUES
(1, 'Max', 1, '2024-08-01', 'male', 8.5, 'https://images.dog.ceo/breeds/retriever-golden/n02099601_1003.jpg'),
(1, 'Bella', 3, '2024-05-01', 'female', 12.3, 'https://images.dog.ceo/breeds/labrador/n02099712_3503.jpg');

-- Insert sample vaccination records for Max (3 months old)
INSERT INTO pet_vaccination_records (pet_id, vaccination_id, date_given, date_scheduled, status, notes) VALUES
(1, 1, '2024-09-15', NULL, 'completed', 'First vaccine completed successfully'),
(1, 2, '2024-10-15', NULL, 'completed', 'Second dose administered'),
(1, 3, NULL, '2024-12-01', 'upcoming', 'Scheduled for next month'),
(1, 4, NULL, '2024-12-01', 'upcoming', 'Rabies vaccine scheduled');

-- Insert sample booking
INSERT INTO bookings (user_id, pet_id, caretaker_id, start_date, end_date, total_days, total_price, status, notes) VALUES
(1, 1, 1, '2024-12-20', '2024-12-22', 2, 60.00, 'confirmed', 'Max is friendly but shy with new people initially');
