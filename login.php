<?php
  session_start();

  $username=$_POST['username'];
  $password=$_POST['password'];

  include_once('connessione.php');

  $sql = "SELECT password
          FROM User
          WHERE username = '$username'";

  $sth = $db->query($sql);
  $row = $sth->fetchAll(PDO::FETCH_OBJ);

  if ($row) {
    //$row = mysql_fetch_assoc($pw);
    if($password == $row[0]->password) {
      $_SESSION['login_user']=$username; // Inizializzazione Sessione
      header("location: index.php");
    }
    else {
      echo "Password wrong";
    }
  }
  else echo "The username does not exist";
