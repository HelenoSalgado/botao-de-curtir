var curtidas = document.querySelector('div.curtir');
var acumulosDeCurtidas = null;
var curtidasAcumuladas;


function numeroDeCurtidas(){
            
    if(localStorage.info){

        localStorage.info++;
        mostra.innerHTML = localStorage.info;

    }

}

function maisUmaCurtida(){

    if(curtidas){
        acumulosDeCurtidas++;
        curtidasAcumuladas = acumulosDeCurtidas;
    }
            numeroDeCurtidas();
}
        
curtidas.onclick = maisUmaCurtida;

// Recebendo dados do servidor.

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
                console.log(xhr);
    }
}

xhr.open("GET", "conexao.php");
xhr.send();
        

        // Enviando dados para o servidor.
