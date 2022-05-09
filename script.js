// A variável acumoloDeCurtidas recebe uma valor nulo para receber um valor incrementado.
var curtidas = document.querySelector('div.curtir');
var curtidasAcumuladas;
var requestCurtidas;
var acumuloDeCurtidas;
var xhr = new XMLHttpRequest();
var xml = new XMLHttpRequest(); 

// Iniciar uma requisição.
function requisicao(){

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        requestCurtidas = xhr.responseText;
        acumuloDeCurtidas = Number(parseInt(requestCurtidas));
        mostra.innerHTML = acumuloDeCurtidas;
    }
}
xhr.open("GET", "http://botao-de-curtir.atwebpages.com/request.php");
xhr.send();
}


// permite retornar o valor do elemento ao recarregar a página.
function recarregar(){
    requisicao();
}

// Incrementa uma curtida e chama a função abaixo.
function maisUmaCurtida(){
    if(acumuloDeCurtidas){
        acumuloDeCurtidas++;
        curtidasAcumuladas = acumuloDeCurtidas;
    }
    GravaCurtida();
}

// conecta ao servidor e envia dados para o servidor.
function GravaCurtida(){
    
    var url = "http://botao-de-curtir.atwebpages.com/grava-curtida.php?maisumacurtida=" + curtidasAcumuladas; 
	xml.open("GET", url, true);
	xml.send();
        requisicao();
}

// Chama a função que incrementa curtida.
curtidas.onclick = maisUmaCurtida;


// Permite que os dados não deixem a tela com refresh.
recarregar();