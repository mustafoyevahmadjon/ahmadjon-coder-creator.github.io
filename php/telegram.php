<?php

// https://api.telegram.org/2011017808:AAF5sWsYNfCv-Nc2Na3HkQeZ7y0rWPkgSu4/getUpdates 

// bot degan joyidan keyin o`z botingiz tokenini qoyasz albatta avval botni yaratib olshingiz kerak
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$comment = $_POST['comment'];
$surname = $_POST['surname'];
$token = "2011017808:AAF5sWsYNfCv-Nc2Na3HkQeZ7y0rWPkgSu4";
$subject = "Mail From Website";
$chat_id = "-1001376829125";
$arr = array(
    '👨 Ism :' => $name,
    ' Familya :'=> $surname,
    '📱 Telefon Raqami :' => $phone,
    '📧 Emaili :' => $email,
    '💬 Foydalanuvchi Fikri:' =>$comment
);
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram){
    header('Location: telegram.php');
}else{
    echo 'error';
}