window.addEventListener("scroll", function(){
    let botao = document.querySelector('#botao')

    botao.classList.toggle('aparecer',window.scrollY > 0)
})

function voltar(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

function mostrar_historia(){
    let txtHistoria = document.querySelector('#txt_historia')

    txtHistoria.style.transition = 'max-height .8s ease-in-out, padding .8s ease-in-out';

    if(txtHistoria.style.maxHeight === '0px' || txtHistoria.style.maxHeight === ''){
        txtHistoria.style.maxHeight = '359px'
}   else{
        txtHistoria.style.maxHeight = '0px'
}}
