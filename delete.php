<?php include 'db.php'; ?>

<!DOCTYPE html>
<html>
<head>
<title>Delete Student</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
<?php include 'navbar.php'; ?>

<div class="container mt-4">

<h3>Delete Student</h3>

<form method="POST" class="row g-3">
    <div class="col-md-6">
        <input name="rollno" class="form-control" placeholder="Roll No" required>
    </div>

    <div class="col-md-6">
        <button name="delete" class="btn btn-danger">Delete</button>
    </div>
</form>

<?php
if (isset($_POST['delete'])) {
    $conn->query("DELETE FROM students WHERE rollno='$_POST[rollno]'");
    echo "<div class='alert alert-danger mt-3'>Deleted Successfully</div>";
}
?>

</div>
</body>
</html>