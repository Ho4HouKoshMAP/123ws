<?php
header("Content-Type:text/html; charset=UTF-8");


require_once("api/config.php");
require_once("api/core.php");

if(file_exists("api/main.php")){
    include("api/main.php");
    if (class_exists("Main")){
        $obj = new Main;
        $obj->get_body();
    }else {
        exit("<p>Неверный класс</p>");
    }
}else {
        exit("<p>Неверный путь</p>");
    }
 //Проверка


