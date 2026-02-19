<?php
require_once '../config/database.php';

// Get database connection
$database = new Database();
$conn = $database->getConnection();

try {
    // Get parameters
    $breed_id = isset($_GET['breed_id']) ? (int)$_GET['breed_id'] : 0;
    $age = isset($_GET['age']) ? (int)$_GET['age'] : 0;

    $query = "SELECT * FROM diet_recommendations WHERE 1=1";
    
    if ($breed_id > 0) {
        $query .= " AND (breed_id = :breed_id OR breed_id IS NULL)";
    }
    
    if ($age > 0) {
        $query .= " AND min_age_months <= :age AND max_age_months >= :age";
    }
    
    $query .= " ORDER BY breed_id DESC, min_age_months ASC";

    $stmt = $conn->prepare($query);
    
    if ($breed_id > 0) {
        $stmt->bindParam(':breed_id', $breed_id, PDO::PARAM_INT);
    }
    
    if ($age > 0) {
        $stmt->bindParam(':age', $age, PDO::PARAM_INT);
    }

    $stmt->execute();
    $recommendations = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        'success' => true,
        'data' => $recommendations
    ]);

} catch(PDOException $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Error: ' . $e->getMessage()
    ]);
}
?>
