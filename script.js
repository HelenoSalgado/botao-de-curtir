// Descontar a interface de navegadores em dispositivos móveis.
var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
// fim
// Variáveis para receber e tratar curtidas.
var curtidas = document.querySelector('.curtir');
var requestCurtidas;
var curtidasTotal;
var xhr = new XMLHttpRequest();
var xml = new XMLHttpRequest(); 
// Fim

// Variáveis para o player e animações.
var audio = document.querySelector('audio');
var player = document.querySelector('.play');
var discPlay = document.querySelector('.disc-play');
var animationHeart = document.querySelector('.curtir img');
var count = 0;
var botaoPlay = document.querySelector(".reproduzir");
var botaoPause = document.querySelector(".pause");
var capaNaruto = document.querySelector(".capa");
var animationMusic = document.querySelector(".slide");
var slides = document.getElementsByClassName("narutoSlide");
// Fim

// Cria tabela no banco de dados local para tratamento de curtidas.
if(localStorage.curtidas == undefined){
    localStorage.curtidas = 0;
}
// Fim

// Inicia uma requisição.
function requisicao(){
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        requestCurtidas = xhr.responseText;
        curtidasTotal = Number(requestCurtidas);
        mostra.innerHTML = curtidasTotal;
    }
}
xhr.open("GET", "http://botao-de-curtir.atwebpages.com/request.php");
xhr.send();
}
// Fim

// Permite retornar o valor do elemento/id (div.curtir) ao recarregar a página.
function recarregar(){
    requisicao();
}
// Fim

// Incrementa uma curtida e chama a função abaixo.
function maisUmaCurtida(){
    if(localStorage.curtidas == 0){
        localStorage.curtidas++;
        curtidasTotal++;
    }else{
        localStorage.curtidas = 0;
        curtidasTotal--;
    }
    GravaCurtida();
    animationHeart.style.animation = "pulsar 1s infinite"
}
// Fim

// conecta ao servidor e envia dados para o servidor.
function GravaCurtida(){
    var url = "http://botao-de-curtir.atwebpages.com/grava-curtida.php?maisumacurtida=" + curtidasTotal; 
	xml.open("GET", url, true);
	xml.send();
    setTimeout(requisicao, 1000)
}
// Fim

// Chama a função que incrementa curtida.
curtidas.onclick = maisUmaCurtida;
// Fim

// Permite que os dados não deixem a tela ao recarregar a página.
recarregar();
// Fim

// Sessão responsável pelo player e animações.

function audioplayer(){
    if(count == 0){
        count = 1;
            audio.play();
            botaoPlay.style.display = "none";
            botaoPause.style.display = "flex";
            showSlides();
            animationMusic.style.display = "block";
            capaNaruto.style.display = "none";
            discPlay.style.display = "block"
        }else{
            count = 0;
            audio.pause();
            botaoPlay.style.display = "block";
            botaoPause.style.display = "none";
            animationMusic.style.display = "none";
            capaNaruto.style.display = "block";
            discPlay.style.display = "none"
        }     
}
// Fim

var slideIndex = 0;  
function showSlides() {
     var i;
     for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
     }
     slideIndex++;
     if (slideIndex > slides.length){
         slideIndex = 1
     }    
     slides[slideIndex-1].style.display = "block";  
     setTimeout(showSlides, 6000); // Change image every 2 seconds
}