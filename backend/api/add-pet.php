<?php
require_once '../config/database.php';

// Get database connection
$database = new Database();
$conn = $database->getConnection();

// Get request method
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    // Add new pet
    $data = json_decode(file_get_contents("php://input"));

    try {
        $query = "INSERT INTO pets 
                  (user_id, name, breed_id, birth_date, gender, weight, image_url) 
                  VALUES 
                  (:user_id, :name, :breed_id, :birth_date, :gender, :weight, :image_url)";
        
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':user_id', $data->user_id);
        $stmt->bindParam(':name', $data->name);
        $stmt->bindParam(':breed_id', $data->breed_id);
        $stmt->bindParam(':birth_date', $data->birth_date);
        $stmt->bindParam(':gender', $data->gender);
        $stmt->bindParam(':weight', $data->weight);
        $stmt->bindParam(':image_url', $data->image_url);

        if ($stmt->execute()) {
            echo json_encode([
                'success' => true,
                'message' => 'Pet added successfully',
                'pet_id' => $conn->lastInsertId()
            ]);
        } else {
            echo json_encode([
                'success' => false,
                'message' => 'Unable to add pet'
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
