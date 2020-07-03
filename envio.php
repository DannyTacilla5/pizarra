<?php
  // session_start();
  // $id = session_id();
  $img = $_POST['imgPizarra'];
  $nombre = $_POST['nombre'];
  $img = str_replace('data:image/png;base64,', '', $img);
  $fileData = base64_decode($img);
  $fileName = 'imagenes/'.$nombre.'.png';

  file_put_contents($fileName, $fileData);

   header("refresh:5;url=index.html");
    echo "<h2>". "Hemos generado tu imagen puedes revisar en la carpeta de IMAGENES"."</h2>";

// $archivo = 'imagenes/gente.txt';
// // Abre el archivo para obtener el contenido existente
// $actual = file_get_contents($archivo);
// // A�ade una nueva persona al archivo
// $actual .= "John Smith\n";
// // Escribe el contenido al archivo
// file_put_contents($archivo, $actual);


?>