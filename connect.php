<?php
$domain = "hawaiigov/url/";
$servername = "localhost";
$username = "root";
$password = "";
$dbname='url shortener';
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
	die("Connection fa8iled: " . $conn->connect_error);
}
?>