// A variável acumoloDeCurtidas recebe uma valor nulo para receber um valor incrementado.
var curtidas = document.querySelector('div.curtir');
var acumuloDeCurtidas = null;
var curtidasAcumuladas;

// permite retornar o valor do elemento ao recarregar a página.
function recarregar(){
    mostra.innerHTML = localStorage.info;
}

// Se não houver um banco de dados local definido, será criado. 

    if(localStorage.info == undefined){
        localStorage.info = 0;
    }

// Incrementa ou decrementa uma curtida, salvando-a no banco de dados criado pela condição acima.
function numeroDeCurtidas(){
    if(localStorage.info == 0){
        localStorage.info++;
        mostra.innerHTML = localStorage.info;
    }else{
        localStorage.info--;
        mostra.innerHTML = localStorage.info;
    }
}

// Incrementa uma curtida e chama a função acima, que contabiliza o total de curtidas.
function maisUmaCurtida(){
    if(curtidas){
        acumuloDeCurtidas++;
        curtidasAcumuladas = acumuloDeCurtidas;
    }
    numeroDeCurtidas();
}

// Chama a função acima.
curtidas.onclick = maisUmaCurtida;

// Garante que os dados retorne à tela.
recarregar();

// Recebendo dados do servidor.

// var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function(){
//     if(xhr.readyState == 4){
//         console.log(xhr);
//     }
// }

// xhr.open("GET", "https://helenosalgado.github.io/botao-de-curtir/curtida.php");
// xhr.send();
        
// Enviando dados para o servidor.

var xhr = new XMLHttpRequest();
var document = {
    "numero": localStorage.info,
}

xhr.onreadystatechange = function(){

    if(xhr.readyState == 4){
        console.log(xhr);
    }

}
xhr.open("POST", "https://helenosalgado.github.io/botao-de-curtir/curtida.php");
xhr.send(document);
