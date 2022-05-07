<?php
if(isset($_POST['submit']))
{
    include_once('conexao.php');
    $nome = ($_POST['nome']);
    $email = ($_POST['email']);

    $result = mysqli_query($conexao, "INSERT INTO dbCurtidasTeste(id, email) VALUES ('$nome', '$email')");
}
?>