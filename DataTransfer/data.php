<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "forminfo";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$FirstName=$_POST["FirstName"];
$MiddleName=$_POST["MiddleName"];
$LastName=$_POST["LastName"];
$MobNo=$_POST["MobNo"];
$Email=$_POST["Email"];
$Gender=$_POST["Gender"];
$Address=$_POST["Address"];
$SelectState=$_POST["SelectState"];
$Language=$_POST["SelectedValue"];


$sql = "Insert into selfinfo1(FirstName,MiddleName,LastName,MobNo,Email,Gender,Address,          SelectState,Language)
        value('".$FirstName."','".$MiddleName."','".$LastName."',".$MobNo.",'".$Email."','".$Gender."','".$Address."','".$SelectState."','".$Language."')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>