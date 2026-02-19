<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once '../config/database.php';

// Get database connection
$database = new Database();
$conn = $database->getConnection();

// Get request method
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    // User registration
    $data = json_decode(file_get_contents("php://input"));

    try {
        // Check if email already exists
        $checkQuery = "SELECT id FROM users WHERE email = :email";
        $checkStmt = $conn->prepare($checkQuery);
        $checkStmt->bindParam(':email', $data->email);
        $checkStmt->execute();

        if ($checkStmt->fetch()) {
            echo json_encode([
                'success' => false,
                'message' => 'Email already registered'
            ]);
            exit;
        }

        // Insert new user
        $query = "INSERT INTO users 
                  (name, email, password, phone, address) 
                  VALUES 
                  (:name, :email, :password, :phone, :address)";
        
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':name', $data->name);
        $stmt->bindParam(':email', $data->email);
        $hashedPassword = md5($data->password); // In production, use password_hash()
        $stmt->bindParam(':password', $hashedPassword);
        $stmt->bindParam(':phone', $data->phone);
        $stmt->bindParam(':address', $data->address);

        if ($stmt->execute()) {
            $userId = $conn->lastInsertId();
            
            // Generate a simple token (in production, use JWT)
            $token = base64_encode($data->email . ':' . time());
            
            // Get the newly created user data
            $user = [
                'id' => $userId,
                'name' => $data->name,
                'email' => $data->email,
                'phone' => $data->phone,
                'address' => $data->address
            ];
            
            echo json_encode([
                'success' => true,
                'message' => 'Registration successful',
                'token' => $token,
                'user' => $user
            ]);
        } else {
            echo json_encode([
                'success' => false,
                'message' => 'Unable to register user'
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
