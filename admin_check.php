<?php
session_start();

$MASTER = "12345";  // ← あなた専用のマスターキーを設定！

if ($_POST["key"] === $MASTER) {
    $_SESSION["admin"] = true;
    header("Location: admin_panel.php");
    exit;
} else {
    echo "マスターキーが違います。";
}
?>
