<?php
$gateType = htmlspecialchars($_POST["gate_type"]);
$width = htmlspecialchars($_POST["width"]);
$height = htmlspecialchars($_POST["height"]);
$name = htmlspecialchars($_POST["name"]);
$phone = htmlspecialchars($_POST["phone"]);
$email = htmlspecialchars($_POST["email"]);
$address = htmlspecialchars($_POST["address"]);
// Сообщение
$message = "Тип ворот: " . $gateType . "\r\nШирина: " . $width . "мм.\r\nВысота: " . $height . "мм.\r\nФИО: " . $name . "\r\nТелефон: " . $phone . "\r\nEmail: " . $email . "\r\nАдрес: " . $address;

// На случай если какая-то строка письма длиннее 70 символов мы используем wordwrap()
$message = wordwrap($message, 70, "\r\n");

$to = 'fablab1.test@gmail.com';

$subject = 'Заявка на ворота';

$headers = 'From: test@vorota.ru' . "\r\n" .
    'Reply-To: test@vorota.ru' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

// Отправляем
mail($to, $subject, $message, $headers);
?>