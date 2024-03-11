<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the username and password from the POST request
    $username = $_POST["username"];
    $password = $_POST["password"];

    // TODO: Add your authentication logic here (e.g., check against a database)

    // For demonstration purposes, let's assume a hardcoded username and password
    $validUsername = "john";
    $validPassword = "password123";

    if ($username === $validUsername && $password === $validPassword) {
        echo "Login successful!";
    } else {
        echo "Invalid username or password.";
    }
}
?>
