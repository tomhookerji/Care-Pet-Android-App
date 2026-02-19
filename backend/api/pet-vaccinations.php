<?php
require_once '../config/database.php';

// Get database connection
$database = new Database();
$conn = $database->getConnection();

try {
    // Get pet ID from query parameter
    $pet_id = isset($_GET['pet_id']) ? (int)$_GET['pet_id'] : 0;

    if ($pet_id > 0) {
        $query = "SELECT 
                    pvr.*,
                    v.name,
                    v.description,
                    v.age_months,
                    v.dose_number
                  FROM pet_vaccination_records pvr
                  JOIN vaccinations v ON pvr.vaccination_id = v.id
                  WHERE pvr.pet_id = :pet_id
                  ORDER BY pvr.date_given DESC, pvr.date_scheduled ASC";
        
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':pet_id', $pet_id, PDO::PARAM_INT);
        $stmt->execute();

        $records = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode([
            'success' => true,
            'data' => $records
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'message' => 'Invalid pet ID'
        ]);
    }

} catch(PDOException $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Error: ' . $e->getMessage()
    ]);
}
?>
