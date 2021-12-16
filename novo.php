<?php
require "conf.php";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $marca = $_POST['marca'];
    $modelo = $_POST['modelo'];
    $placa = $_POST['placa'];
}
$maxid = "SELECT MAX(ID) FROM ONIBUS;";
$max = $conn->query($maxid);

$sql = "INSERT INTO ONIBUS (MARCA, MODELO, PLACA) VALUES ('$marca', '$modelo', '$placa');";

$result = $conn->query($sql);