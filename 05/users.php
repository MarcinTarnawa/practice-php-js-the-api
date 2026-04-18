<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$file = 'data.json';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($file)) {
        echo file_get_contents($file);
    } else {
        echo json_encode([]);
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents('php://input');
    $userData = json_decode($input, true);

    if ($userData) {
        $currentData = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
        $currentData[] = $userData;

        file_put_contents($file, json_encode($currentData, JSON_PRETTY_PRINT));
        echo json_encode(["message" => "Użytkownik dodany!"]);
    }
}
