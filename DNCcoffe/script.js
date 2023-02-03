const atendimentoBtn = document.querySelector("#atendimento");
const modalAtendimento = document.querySelector("#modalAtendimento");
const desfoque = document.querySelector('#desfoque');
const fechar = document.querySelector('#fechar');

atendimento.addEventListener("click", function(){
    desfoque.style.visibility = "visible";
    modalAtendimento.style.visibility = "visible";
});

fechar.addEventListener('click', ()=>{
    desfoque.style.visibility = "hidden";
    modalAtendimento.style.visibility = "hidden";
});