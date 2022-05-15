<?php 
 $PDO = new PDO("mysql:host=localhost;database=posts", "root", "");
 $PDO->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
