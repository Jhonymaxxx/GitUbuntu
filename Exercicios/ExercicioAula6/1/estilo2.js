let botao = document.querySelector("#botao");
botao.style.background="blue"

var quebrou=false;

botao.addEventListener("mouseover",e =>{
    if(quebrou===false)
    botao.style.background="green";
});
botao.addEventListener("mouseout",e =>{
    if(quebrou===false)
    botao.style.background="blue";
});
botao.addEventListener("click",e =>{
    botao.style.background="red";
      botao.innerHTML="quebrei";
      quebrou=true

});



    