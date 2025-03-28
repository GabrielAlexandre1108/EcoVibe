var cont = 3

document.getElementById('radio3').checked = true

setInterval(() => {
proximoCard()
}, 7000)

function proximoCard(){
cont++

if(cont > 5){
    cont = 1
}

document.getElementById('radio' + cont).checked = true
}

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

/* Mostra o menu quando o icone e clicado */

document.querySelector('#img_menu').addEventListener("click", function(){
    document.querySelector('#menu').style.display = 'flex'
    document.querySelector('#fundo_menu').style.display = 'block'
})

/* Oculta o menu ao clicar nele ou no fundo */

function ocultar_menu(){
    document.querySelector('#menu').style.display = 'none'
    document.querySelector('#fundo_menu').style.display = 'none'
}

/* Mostra o texto ao clicar no título "HISTÓRIA" */

function mostrar_historia(){
    let txtHistoria = document.querySelector('#txt_historia')

    txtHistoria.style.transition = 'max-height .8s ease-in-out, padding .8s ease-in-out';

    if(txtHistoria.style.maxHeight === '0px' || txtHistoria.style.maxHeight === ''){
        txtHistoria.style.maxHeight = '359px'
}   else{
        txtHistoria.style.maxHeight = '0px'
}}


