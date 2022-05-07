<?php

    include_once('curtida.php');
    $numero = ($_POST['numero']);
    $id = ($_POST['default']);

    $result = mysqli_query($conexao, "INSERT INTO curtidas(id, numero) 
    
    VALUES 
    ('$id', '$numero')");

?>