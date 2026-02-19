<?php
require_once '../config/database.php';

// Get database connection
$database = new Database();
$conn = $database->getConnection();

// Get request method
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    // Add new vaccination record
    $data = json_decode(file_get_contents("php://input"));

    try {
        $query = "INSERT INTO pet_vaccination_records 
                  (pet_id, vaccination_id, date_given, date_scheduled, status, notes) 
                  VALUES 
                  (:pet_id, :vaccination_id, :date_given, :date_scheduled, :status, :notes)";
        
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':pet_id', $data->pet_id);
        $stmt->bindParam(':vaccination_id', $data->vaccination_id);
        $stmt->bindParam(':date_given', $data->date_given);
        $stmt->bindParam(':date_scheduled', $data->date_scheduled);
        $stmt->bindParam(':status', $data->status);
        $stmt->bindParam(':notes', $data->notes);

        if ($stmt->execute()) {
            echo json_encode([
                'success' => true,
                'message' => 'Vaccination record added successfully',
                'id' => $conn->lastInsertId()
            ]);
        } else {
            echo json_encode([
                'success' => false,
                'message' => 'Unable to add vaccination record'
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
