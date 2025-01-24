window.addEventListener("scroll", function(){
    let botao = document.querySelector('#botao')

    botao.classList.toggle('aparecer',window.scrollY > 0)
})

/* function voltar(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}; */

document.