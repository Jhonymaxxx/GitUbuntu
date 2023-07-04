let paragrafo = document.querySelector("#para1");

/*paragrafo.innerHTML="oooo"*/

paragrafo.addEventListener("click",troca_texto);
/*paragrafo.addEventListener("mouseover",mudaVerde);
paragrafo.addEventListener("mouseout",mudaVermelho);*/

function troca_texto(){
    paragrafo.innerHTML = "Olá Mundo";
}

/*function mudaVerde(){
    paragrafo.style.backgraud="green";
}
function mudaVermelho(){
    paragrafo.style.backgraud="red";
}*/