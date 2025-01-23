window.addEventListener("scroll", function(){
    let botao = document.querySelector('#botao')

    botao.classList.toggle('aparecer',window.scrollY > 0)
})