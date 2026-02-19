<?php
require_once '../config/database.php';

// Get database connection
$database = new Database();
$conn = $database->getConnection();

try {
    // Get all standard vaccinations
    $query = "SELECT * FROM vaccinations ORDER BY age_months ASC, dose_number ASC";
    $stmt = $conn->prepare($query);
    $stmt->execute();

    $vaccinations = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        'success' => true,
        'data' => $vaccinations
    ]);

} catch(PDOException $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Error: ' . $e->getMessage()
    ]);
}
?>
