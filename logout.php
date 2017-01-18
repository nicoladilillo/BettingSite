<?php
  session_start();

  // elimina tutte le variabili di sessione
  session_unset();

  // elimina la sessione
  session_destroy();
  header('Location: index.php');
