<?php
$conn = new mysqli("localhost", "root", "", "student_db", 3306);
// remove 3307 if using default port

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>