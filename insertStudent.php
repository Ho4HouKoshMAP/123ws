<?php
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$age = $_POST['age'];
$gender = $_POST['gender'];

require_once ("config.php");

//соединение с БД
$connect = new mysqli(HOST, USER, PASSWORD, DB);
if($connect->connect_error){
    exit("Ошибка подключения к БД: ".$connect->connect_error);
}
//установить кодировку
$connect->set_charset("utf8");

//Код запроса переменная sql 
$sql = "INSERT INTO 'students' (`fname`, `lname`, `gender`, `age`) VALUES (`$fname`, `$lname`, `$gender` , `$age`)";
$result = $connect->query($sql);
if($result){
    echo "<p>OK</p>";
}
else {
    echo "<p>Error</p>";
}