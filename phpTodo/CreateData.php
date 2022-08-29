<?php
  class MyDB extends SQLite3 {
    function __construct() {
       $this->open('test.db');
    }
 }
 $db = new MyDB();
 if(!$db) {
    echo $db->lastErrorMsg();
 } else {
    echo "Opened database successfully\n";
 }
 

$title=$_POST['title'];
$date=$_POST['date'];

 
$AddingQuery =$db->query("INSERT INTO tablecreate(title,date)VALUES('$title','$date')");
$db=null;
 ?>