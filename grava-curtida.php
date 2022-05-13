<?php
// Carrega os dados do arquivo conexão.
   include("conexao.php");	 
   // Testa se existe valores na URL!
   if($_GET){
   try{ 
   // Faz a conexão e insere valor.      
	$conecta = new PDO("mysql:host=$servidor;dbname=$banco", $usuario , $senha); 
	$conecta->exec("set names utf8");
	$comandoSQL = ("UPDATE ncurtidas SET curtidas = '$_GET[maisumacurtida]' WHERE id = '0'");
	$grava = $conecta->prepare($comandoSQL); //testa o comando SQL
	$grava->execute(array()); 			
   }               
   catch(PDOException $e){ 
  // casso retorne erro
  echo('Erro: ' . $e->getMessage()); 
 }
}