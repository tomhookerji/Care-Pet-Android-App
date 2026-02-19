<?php
require_once '../config/database.php';

// Get database connection
$database = new Database();
$conn = $database->getConnection();

try {
    // Get caretaker ID from query parameter
    $caretaker_id = isset($_GET['id']) ? (int)$_GET['id'] : 0;

    if ($caretaker_id > 0) {
        $query = "SELECT * FROM caretakers WHERE id = :id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':id', $caretaker_id, PDO::PARAM_INT);
        $stmt->execute();

        $caretaker = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($caretaker) {
            // Parse services JSON
            if (isset($caretaker['services'])) {
                $caretaker['services'] = json_decode($caretaker['services']);
            }

            echo json_encode([
                'success' => true,
                'data' => $caretaker
            ]);
        } else {
            echo json_encode([
                'success' => false,
                'message' => 'Caretaker not found'
            ]);
        }
    } else {
        echo json_encode([
            'success' => false,
            'message' => 'Invalid caretaker ID'
        ]);
    }

} catch(PDOException $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Error: ' . $e->getMessage()
    ]);
}
?>
