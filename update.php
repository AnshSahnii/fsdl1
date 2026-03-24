<?php include 'db.php'; ?>

<!DOCTYPE html>
<html>
<head>
<title>Update Student</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
<?php include 'navbar.php'; ?>

<div class="container mt-4">

<h3>Update Student</h3>

<form method="POST" class="row g-3">
    <div class="col-md-4">
        <input name="rollno" class="form-control" placeholder="Roll No" required>
    </div>

    <div class="col-md-4">
        <input name="contact" class="form-control" placeholder="New Contact" required>
    </div>

    <div class="col-md-4">
        <button name="update" class="btn btn-warning">Update</button>
    </div>
</form>

<?php
if (isset($_POST['update'])) {
    $conn->query("UPDATE students SET contact='$_POST[contact]' WHERE rollno='$_POST[rollno]'");
    echo "<div class='alert alert-success mt-3'>Updated Successfully</div>";
}
?>

</div>
</body>
</html>