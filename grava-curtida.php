<?php
   include("conexao.php"); // Carrega os dados da conexão!	
        
     // Testa se existe valores na URL!
     if($_GET){
        try{ 
        // tenta fazer a conexão e executar o INSERT
                
	$conecta = new PDO("mysql:host=$servidor;dbname=$banco", $usuario , $senha); //istancia a classe PDO
	$conecta->exec("set names utf8"); //permite caracteres latinos.
	$comandoSQL = ("UPDATE ncurtidas SET curtidas = '$_GET[maisumacurtida]' WHERE id = '0'");
	$grava = $conecta->prepare($comandoSQL); //testa o comando SQL
	$grava->execute(array()); 			
      } 
                
   catch(PDOException $e){ 
  // casso retorne erro
  echo('Erro: ' . $e->getMessage()); 
 }
} 

//UPDATE tabela SET campoaseralterado = 'valor novo do campo' WHERE tabela_id = '1';
//("UPDATE ncurtidas SET curtidas = '$_GET[maisumacurtida]' WHERE id = '1'");
//("INSERT INTO ncurtidas (curtidas) VALUES('$_GET[maisumacurtida]');");