let nao = document.querySelector('#nao');
let sim = document.querySelector('#sim');
let painel = document.querySelector('.painel');
let btn = document.querySelector('.btn');
let txt = document.querySelector('.txt');
let titulo = document.querySelector('.titulo');



function fuja(){

    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    let maxX = windowWidth - nao.offsetWidth;
    let maxY = windowHeight - nao.offsetWidth;

    let aleatorioX = Math.floor(Math.random() * maxX);
    let aleatorioY = Math.floor(Math.random() * maxY);

    nao.style.left = aleatorioX + "px";
    nao.style.top = aleatorioY + "px";
}

function clicou(){
    painel.style.backgroundImage = `url(img/hollowKnight-Hornet.png)`;
    btn.classList.toggle('active');
    titulo.classList.toggle('active');
    txt.innerHTML = 'Eu já sabia kkkkkk, também te amo ;)';
}