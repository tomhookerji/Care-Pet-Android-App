<?php
require_once '../config/database.php';

// Get database connection
$database = new Database();
$conn = $database->getConnection();

try {
    // Get location parameter if provided
    $location = isset($_GET['location']) ? $_GET['location'] : '';

    $query = "SELECT * FROM caretakers WHERE status = 'active'";
    
    if (!empty($location)) {
        $query .= " AND location LIKE :location";
    }
    
    $query .= " ORDER BY rating DESC, name ASC";

    $stmt = $conn->prepare($query);
    
    if (!empty($location)) {
        $searchLocation = "%{$location}%";
        $stmt->bindParam(':location', $searchLocation);
    }

    $stmt->execute();
    $caretakers = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Parse services JSON for each caretaker
    foreach ($caretakers as &$caretaker) {
        if (isset($caretaker['services'])) {
            $caretaker['services'] = json_decode($caretaker['services']);
        }
    }

    echo json_encode([
        'success' => true,
        'data' => $caretakers
    ]);

} catch(PDOException $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Error: ' . $e->getMessage()
    ]);
}
?>
