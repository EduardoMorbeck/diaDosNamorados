let nao = document.querySelector('#nao');
let sim = document.querySelector('#sim');
let painel = document.querySelector('.painel');
let btn = document.querySelector('.btn');
let txt = document.querySelector('.txt');
let titulo = document.querySelector('.titulo');
let music = document.querySelector('#music');
let count = 0

function fuja(){

    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    let maxX = windowWidth - nao.offsetWidth;
    let maxY = windowHeight - nao.offsetWidth;

    let aleatorioX = Math.floor(Math.random() * maxX);
    let aleatorioY = Math.floor(Math.random() * maxY);

    nao.style.left = aleatorioX + "px";
    nao.style.top = aleatorioY + "px";

    count ++

    if(count == 1){
        music.src = 'img/Mantis Lords.mp3';
        music.play();
    }

    if(count == 5){
        titulo.classList.toggle('active');
        txt.innerHTML = 'Desiste, não tem como clicar no "Não" ksksks';
    }

    if(count == 10){
        txt.innerHTML = 'É sério...';
    }

    if(count == 15){
        txt.innerHTML = 'Então tá bom, pode continuar...';
    }

    if(count == 20){
        txt.innerHTML = 'Mds que persistente mano kkkkk';
    }

    if(count == 25){
        txt.innerHTML = 'Tenta mais umas 5 vezes que eu te conto um segredo...';
    }

    if(count == 30){
        txt.innerHTML = 'Mas tem que clicar no "Sim" pra descobrir...';
    }
}

function clicou(){
    if(count == 0){
        titulo.classList.toggle('active');
    }

    painel.style.backgroundImage = `url(img/hollowKnight-Hornet.png)`;
    btn.classList.toggle('active');
    txt.innerHTML = 'Resposta certa kkkkkk, eu te amo ;)';
    music.src = 'img/Hollow Knight (Title Theme).mp3';
    music.play();
}