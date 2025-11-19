<?php
session_start();
if (!isset($_SESSION["admin"])) {
    header("Location: admin_login.html");
    exit;
}

$data = file("data.txt");

echo "<h1>予約一覧</h1>";
echo "<ul>";
foreach($data as $line){
    echo "<li>$line</li>";
}
echo "</ul>";
?>
