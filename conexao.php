<?php
   $Host = 'fdb29.awardspace.net';
   $Username = '3521549_labutar';
   $Password = 'Labutar-12';
   $Name = '3521549_labutar';

   $conexao = new mysqli($Host,$Username,$Password,$Name);
   
   if($conexao->connect_errno)
   {
       echo "Não foi possível enviar sua mensagem de contato. Tente novamente dentro de alguns instantes.";
   }
   else
   {
      echo '<META HTTP-EQUIV="Refresh" Content="1; URL=index.html">';
   }
?>