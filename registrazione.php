<?php

  $nome = $_POST["nome"];
	$cognome = $_POST["cognome"];
	$giorno = $_POST["giorno"];
	$mese = $_POST["mese"];
	$anno = $_POST["anno"];
	$username = $_POST["username"];
	$password = $_POST["password"];
  $confermapassword = $_POST["confermapassword"];

  include_once('connessione.php');

  if($password == $confermapassword) {
    $sql = "SELECT password
            FROM User
            WHERE username = '$username'";
    $sth = $db->query($sql);
    $row = $sth->fetchAll(PDO::FETCH_OBJ);
    if ($row) {
      echo "L'username esiste già";
     }
    else {
      $sql =("INSERT INTO User (Nome, Cognome, giorno, mese, anno, username, password)
              VALUES ('$nome', '$cognome', '$giorno', '$mese', '$anno', '$username', '$password')");
      $sth = $db->query($sql);

     header("location: index.php");
    }
  }
  else {
    echo "Le password sono diverse";
  }
