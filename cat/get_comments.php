<?php
// Connect to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "comments";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT name, comment FROM comments_table";
$result = $conn->query($sql);

$comments = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $comments[] = array(
            'name' => $row['name'],
            'comment' => $row['comment']
        );
    }
}

$conn->close();

echo json_encode($comments);
?>
