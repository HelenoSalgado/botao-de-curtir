<?php
	include("conexao.php"); // Carrega os dados da conexão!	
	if ($_GET) // Testa se existe valores na URL!
	{
		try { // tenta fazer a conexão e executar o INSERT
			$conecta = new PDO("mysql:host=$servidor;dbname=$banco", $usuario , $senha); //istancia a classe PDO
			$conecta->exec("set names utf8"); //permite caracteres latinos.
			$comandoSQL = "INSERT INTO curtidas (numero) VALUES ('$_GET[maiscurtida]');";
			$grava = $conecta->prepare($comandoSQL); //testa o comando SQL
			$grava->execute(array()); 			
		} catch(PDOException $e) { // casso retorne erro
			echo('Erro: ' . $e->getMessage()); 
		}
	} 