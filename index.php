<?php
  session_start();

  include_once('connessione.php');
?>

<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="utf-8">
    <title>SuperEnalotto</title>
  </head>

  <body>

    <h1>Superenalotto</h1>

    <?php
      if(isset($_SESSION['login_user'])) {
        echo "Ciao ".$_SESSION['login_user'];
        echo "<a href='logout.php'>Esci</a>";
      }
      else {
        echo "<a href='login.html'>Login</a>";
      }
    ?>

  </body>
<html>
