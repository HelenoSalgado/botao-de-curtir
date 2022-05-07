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

        
curtidas.onclick = maisUmaCurtid;