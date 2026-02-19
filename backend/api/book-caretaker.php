<?php
require_once '../config/database.php';

// Get database connection
$database = new Database();
$conn = $database->getConnection();

// Get request method
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    // Create new booking
    $data = json_decode(file_get_contents("php://input"));

    try {
        $query = "INSERT INTO bookings 
                  (user_id, pet_id, caretaker_id, start_date, end_date, total_days, total_price, notes, status) 
                  VALUES 
                  (:user_id, :pet_id, :caretaker_id, :start_date, :end_date, :total_days, :total_price, :notes, 'pending')";
        
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':user_id', $data->user_id);
        $stmt->bindParam(':pet_id', $data->pet_id);
        $stmt->bindParam(':caretaker_id', $data->caretaker_id);
        $stmt->bindParam(':start_date', $data->start_date);
        $stmt->bindParam(':end_date', $data->end_date);
        $stmt->bindParam(':total_days', $data->total_days);
        $stmt->bindParam(':total_price', $data->total_price);
        $stmt->bindParam(':notes', $data->notes);

        if ($stmt->execute()) {
            echo json_encode([
                'success' => true,
                'message' => 'Booking created successfully',
                'booking_id' => $conn->lastInsertId()
            ]);
        } else {
            echo json_encode([
                'success' => false,
                'message' => 'Unable to create booking'
            ]);
        }

    } catch(PDOException $e) {
        echo json_encode([
            'success' => false,
            'message' => 'Error: ' . $e->getMessage()
        ]);
    }
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed'
    ]);
}
?>
