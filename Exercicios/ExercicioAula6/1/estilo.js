let botao = document.querySelector("#botao"); //# a partir do ID
botao.style.background="blue";                // . a partir da classe

var quebrou=false
contaclicks=0;

botao.addEventListener("mouseover",ficaVerde) //botao.addEventListener("mouseover",e =>{
function ficaVerde(){                           //botao.style.background="green"
        if(!quebrou){                          // });
        botao.style.background="green";  
        botao.style.color="white"
        }                                                              
};                                     


botao.addEventListener("mouseout",ficaAzul);
function ficaAzul(){
    if(!quebrou)
    botao.style.background="blue";
       
};


botao.addEventListener("click",ficaVermelho);
function ficaVermelho(){
    contaclicks+=1  //contaclicks++ também dá certo
    if(contaclicks >= 10){
    botao.style.background="red";
          botao.innerHTML="quebrei";
          quebrou=true
        
    }
};
