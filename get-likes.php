<?php
require_once 'conexao.php';
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");

try {
  $result = $PDO->query("SELECT curtidas FROM posts.postagens WHERE id = 1;");

  if ($result) {
    $rows = $result->fetchAll(PDO::FETCH_ASSOC);

    header('Content-type: application/json');
    echo json_encode($rows[0], true);
  }
} catch (PDOException $e) {
  echo $e->getMessage();
}
