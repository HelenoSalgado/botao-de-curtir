<?php 
 $PDO = new PDO("mysql:host=mysql;dbname=posts", 'user', 'pass');
 $PDO->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
