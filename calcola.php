<html>

<head>
  <title>Scommessa</title>
</head>

<body>

<?php

	if (isset($_POST['n1'])) {
		echo "Numeri giocati: ";
		for ($i=1; $i<=6; $i++)
			echo $_POST['n'.$i]." ";
		echo "<br>";

		echo "Numeri estratti: ";
		$c = 0;

		for ($y=1; $y<=6; $y++) {
			do {
				$verifica = false;
				$estratti[$y-1] = rand(1,90);
				for ($j=0; $j<($y-1); $j++)
					if ($estratti[$j] == $estratti[$y-1])
						$verifica = true;
			} while($verifica == true);

			//Stampa numeri estratti
			echo $estratti[$y-1]."  ";

			for ($i=1; $i<=6; $i++) {
				if ($_POST['n'.$i] == $estratti[$y-1]) {
					$c++;
				}
			}
		}

		echo "<br><br>Numeri presi: ".$c;
	}
	else {
		echo "Gioca con noi!!";
	}


?>

</body>
</html>
