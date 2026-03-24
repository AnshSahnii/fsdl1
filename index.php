<?php include 'db.php'; ?>

<!DOCTYPE html>
<html>
<head>
<title>Student System</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>

<?php include 'navbar.php'; ?>

<div class="container mt-4">

<h3>Add Student</h3>

<form method="POST" class="row g-3">
    <div class="col-md-3"><input name="fname" class="form-control" placeholder="First Name" required></div>
    <div class="col-md-3"><input name="lname" class="form-control" placeholder="Last Name" required></div>
    <div class="col-md-3"><input name="rollno" class="form-control" placeholder="Roll No" required></div>
    <div class="col-md-3"><input name="contact" class="form-control" placeholder="Contact" required></div>

    <div class="col-md-3"><input type="password" name="password" class="form-control" placeholder="Password" required></div>
    <div class="col-md-3"><input type="password" name="cpassword" class="form-control" placeholder="Confirm Password" required></div>

    <div class="col-12">
        <button name="insert" class="btn btn-success">Insert</button>
    </div>
</form>

<?php
if (isset($_POST['insert'])) {
    if ($_POST['password'] != $_POST['cpassword']) {
        echo "<div class='alert alert-danger mt-3'>Passwords do not match</div>";
    } else {
        $sql = "INSERT INTO students (fname,lname,rollno,password,contact)
                VALUES ('$_POST[fname]','$_POST[lname]','$_POST[rollno]','$_POST[password]','$_POST[contact]')";
        if ($conn->query($sql)) {
            echo "<div class='alert alert-success mt-3'>Inserted Successfully</div>";
        }
    }
}
?>

<hr>

<h3>All Students</h3>

<table class="table table-bordered text-center">
<tr class="table-dark">
    <th>ID</th><th>Name</th><th>Roll</th><th>Contact</th>
</tr>

<?php
$result = $conn->query("SELECT * FROM students");
while ($row = $result->fetch_assoc()) {
    echo "<tr>
        <td>{$row['id']}</td>
        <td>{$row['fname']} {$row['lname']}</td>
        <td>{$row['rollno']}</td>
        <td>{$row['contact']}</td>
    </tr>";
}
?>

</table>

</div>
</body>
</html>