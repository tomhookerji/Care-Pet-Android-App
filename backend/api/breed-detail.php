<?php
require_once '../config/database.php';

// Get database connection
$database = new Database();
$conn = $database->getConnection();

try {
    // Get breed ID from query parameter
    $breed_id = isset($_GET['id']) ? (int)$_GET['id'] : 0;

    if ($breed_id > 0) {
        $query = "SELECT * FROM breeds WHERE id = :id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':id', $breed_id, PDO::PARAM_INT);
        $stmt->execute();

        $breed = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($breed) {
            echo json_encode([
                'success' => true,
                'data' => $breed
            ]);
        } else {
            echo json_encode([
                'success' => false,
                'message' => 'Breed not found'
            ]);
        }
    } else {
        echo json_encode([
            'success' => false,
            'message' => 'Invalid breed ID'
        ]);
    }

} catch(PDOException $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Error: ' . $e->getMessage()
    ]);
}
?>
