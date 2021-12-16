<?php
$servidor = "127.0.0.1";
$usuario = "joao";
$senha = "qwer123";
$bancodeDados = "3DAW";
$conn = new mysqli($servidor, $usuario, $senha, $bancodeDados);
if ($conn->connect_error) {
    die("Sem conexão");
}