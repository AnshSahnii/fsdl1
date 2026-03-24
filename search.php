<?php include 'db.php'; ?>

<!DOCTYPE html>
<html>
<head>
<title>Search Student</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
<?php include 'navbar.php'; ?>

<div class="container mt-4">

<h3>Search Student</h3>

<form method="POST" class="row g-3">
    <div class="col-md-6">
        <input name="rollno" class="form-control" placeholder="Roll No" required>
    </div>

    <div class="col-md-6">
        <button name="search" class="btn btn-info">Search</button>
    </div>
</form>

<?php
if (isset($_POST['search'])) {
    $result = $conn->query("SELECT * FROM students WHERE rollno='$_POST[rollno]'");

    if ($result->num_rows > 0) {
        echo "<table class='table table-bordered mt-3 text-center'>
        <tr class='table-dark'><th>ID</th><th>Name</th><th>Roll</th><th>Contact</th></tr>";

        while ($row = $result->fetch_assoc()) {
            echo "<tr>
                <td>{$row['id']}</td>
                <td>{$row['fname']} {$row['lname']}</td>
                <td>{$row['rollno']}</td>
                <td>{$row['contact']}</td>
            </tr>";
        }

        echo "</table>";
    } else {
        echo "<div class='alert alert-warning mt-3'>No record found</div>";
    }
}
?>

</div>
</body>
</html>