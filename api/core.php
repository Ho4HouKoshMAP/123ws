<?php
Abstract class Core{
    protected $connect; //Соединение БД
    public function __construct(){
        $this->connect = new mysqli(HOST, USER, PASSWORD, DB);
if($this->connect->connect_error){
    exit("Ошибка подключения к БД: ".$this->connect->connect_error);
}
    $this->connect->set_charset("utf8");
    }
    public function __destruct(){
        $this->connect->close();
    }
    public function get_body(){
        include "template/index.php";
    }
}