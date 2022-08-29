<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
     <link rel="stylesheet" href="./styles/index.css">
 
    <title>Document</title>
 
 </head>
<body>

<header class="navbar navbar-expand-lg bg-danger  d-flex justify-content-around">
        <a href="./Home.php" class="btn btn-light">back</a>
        <a href="./Create.php" class="btn btn-primary w-25 ">create data</a>
     </header>
     <div class="vw-100 vh-100 d-flex justify-content-center align-items-center text-center "> 

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
    echo "Opened database successfull\n";
 }
 








 $sql="SELECT * FROM tablecreate";
 $result=$db->query($sql);
 $mysqli->close();

  ?> 

<table  class="table table-danger w-50  shadow-lg rounded text-primary">
    <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>date</th>
          <th>action</th>
        </tr>
    </thead>
    <tbody>
        <?php 
         while($rows=$result->fetch_assoc()){
            ?>
          <tr>
         <td><?php echo  $rows['title']; ?></td>
         <td><?php echo $rows['date']; ?></td>
             <td>
            <a href="./Edit.php" class="btn btn-primary">Edit</a>
            <button class="btn btn-danger">Delete</button>
           </td>
        </tr>
        <?php }?>
     </tbody>
</table>
</div>
 
 </body>
</html>