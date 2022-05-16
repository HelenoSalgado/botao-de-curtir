<?php
require_once 'conexao.php';
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");

try {
  // $result = $PDO->query("UPDATE posts.postagens SET curtidas WHERE id = 1;");
  $queryLikes = $PDO->query("SELECT curtidas FROM posts.postagens WHERE id = 1;");
  $currentlikes = $queryLikes->fetch(PDO::FETCH_ASSOC);
  $newLikes = $currentlikes['curtidas'] + 1;

  $updateLikes = $PDO->prepare("UPDATE posts.postagens SET curtidas = $newLikes WHERE id = 1");
  $updateLikes->execute();

  header('Content-type: application/json');
  echo json_encode(array(
    'curtidas' => $newLikes
  ), true);
} catch (PDOException $e) {
  echo $e->getMessage();
}
