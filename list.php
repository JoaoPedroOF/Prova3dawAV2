<?php
require "conf.php";

$sql = "SELECT * FROM ONIBUS";
$result = $conn->query($sql);

$arrayOnibus[] = array();
$i = 0;
While ($Line = $result->fetch_assoc()){
    $arrayOnibus[$i] = $Line;
     $i++;
}
echo json_encode($arrayOnibus, JSON_UNESCAPED_UNICODE);
?>