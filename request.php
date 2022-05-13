<?php 
// Busca curtidas acumuladas no banco de dados.
$mysqli = new mysqli("fdb29.awardspace.net", "3521549_labutar", "Labutar-12", "3521549_labutar");
$res = $mysqli->query("SELECT curtidas FROM ncurtidas");
$row = $res->fetch_assoc();
foreach($row as $echada_curtida){
        echo $echada_curtida;
}
?>