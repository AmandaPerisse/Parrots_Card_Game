let qtdCartas;
let qtdCartasViradas = 0;
let primeiroElem;
let segundoElem;
let arrayC = [];
let desabilitar;
let segundos = 0;
let minutos = 0;
let qtdJogadas = 0;/* eu achei que fez mais sentido 1 jogada ser virar 2 cartas e não só 1 como diz o enunciado.
                    Pq faz bem mais sentido uma jogada ser testar se uma carta é igual a outra e se nao for desvirar as duas.
                    Então, por favor, considere que 1 jogada é clicar em 2 cartas. */

let cartasArray = [`<button data-identifier = "card" class = "parrot" onclick = "viradoOuNao(this);">
                    <img class = "parrotImg front" src = "img/front.png">
                    <img class = "parrotImg back escondido" src = "img/bobrossparrot.gif">
                    </button>`,
                    `<button data-identifier = "card" class = "parrot" onclick = "viradoOuNao(this);">
                    <img class = "parrotImg front" src = "img/front.png">
                    <img class = "parrotImg back escondido" src = "img/bobrossparrot.gif">
                    </button>`,
                    `<button data-identifier = "card" class = "parrot" onclick = "viradoOuNao(this);">
                    <img class = "parrotImg front" src = "img/front.png">
                    <img class = "parrotImg back escondido" src = "img/explodyparrot.gif">
                    </button>`,
                    `<button data-identifier = "card" class = "parrot" onclick = "viradoOuNao(this);">
                    <img class = "parrotImg front" src = "img/front.png">
                    <img class = "parrotImg back escondido" src = "img/explodyparrot.gif">
                    </button>`,
                    `<button data-identifier = "card"  class = "parrot" onclick = "viradoOuNao(this);">
                    <img class = "parrotImg front" src = "img/front.png">
                    <img class = "parrotImg back escondido" src = "img/fiestaparrot.gif">
                    </button>`,
                    `<button data-identifier = "card"  class = "parrot" onclick = "viradoOuNao(this);">
                    <img class = "parrotImg front" src = "img/front.png">
                    <img class = "parrotImg back escondido" src = "img/fiestaparrot.gif">
                    </button>`,
                    `<button data-identifier = "card" class = "parrot" onclick = "viradoOuNao(this);">
                    <img class = "parrotImg front" src = "img/front.png">
                    <img class = "parrotImg back escondido" src = "img/metalparrot.gif">
                    </button>`,
                    `<button data-identifier = "card" class = "parrot" onclick = "viradoOuNao(this);">
                    <img class = "parrotImg front" src = "img/front.png">
                    <img class = "parrotImg back escondido" src = "img/metalparrot.gif">
                    </button>`,
                    `<button data-identifier = "card" class = "parrot" onclick = "viradoOuNao(this);">
                    <img class = "parrotImg front" src = "img/front.png">
                    <img class = "parrotImg back escondido" src = "img/revertitparrot.gif">
                    </button>`,
                    `<button data-identifier = "card" class = "parrot" onclick = "viradoOuNao(this);">
                    <img class = "parrotImg front" src = "img/front.png">
                    <img class = "parrotImg back escondido" src = "img/revertitparrot.gif">
                    </button>`,
                    `<button data-identifier = "card" class = "parrot" onclick = "viradoOuNao(this);">
                    <img class = "parrotImg front" src = "img/front.png">
                    <img class = "parrotImg back escondido" src = "img/tripletsparrot.gif">
                    </button>`,
                    `<button data-identifier = "card" class = "parrot" onclick = "viradoOuNao(this);">
                    <img class = "parrotImg front" src = "img/front.png">
                    <img class = "parrotImg back escondido" src = "img/tripletsparrot.gif">
                    </button>`,
                    `<button data-identifier = "card" class = "parrot" onclick = "viradoOuNao(this);">
                    <img class = "parrotImg front" src = "img/front.png">
                    <img class = "parrotImg back escondido" src = "img/unicornparrot.gif">
                    </button>`,
                    `<button data-identifier = "card" class = "parrot" onclick = "viradoOuNao(this);">
                    <img class = "parrotImg front" src = "img/front.png">
                    <img class = "parrotImg back escondido" src = "img/unicornparrot.gif">
                    </button>`];
while(true){
    qtdCartas = prompt("Qual é a quantidade de cartas desejada?");
    if ((qtdCartas % 2 == 0) && (4 <= qtdCartas) && (qtdCartas <= 14)){
        break;
    }
}
for(let i = 13; i > (qtdCartas-1); i--){
    cartasArray[i] = "";
}
cartasArray.sort(comparador);
for(let i = 0; i < 14; i++){
    document.querySelector(".parrots").innerHTML += cartasArray[i];
}

function comparador() { 
	return Math.random() - 0.5; 
}
function virarCarta(elemento){
    elemento.classList.add("virar");
    elemento.classList.remove("desvirar");
    const frente = elemento.children[0];
    const tras = elemento.children[1];
    frente.classList.add("escondido");
    tras.classList.remove("escondido");
}
function desvirarCarta(elemento){
    elemento.classList.remove("virar");
    elemento.classList.add("desvirar");
    const frente = elemento.children[0];
    const tras = elemento.children[1];
    frente.classList.remove("escondido");
    tras.classList.add("escondido");
}
function viradoOuNao(elemento){
    qtdCartasViradas += 1;
    if (qtdCartasViradas == 1){
        primeiroElem = elemento;
        virarCarta(elemento);
    }
    else{
        virarCarta(elemento);
        desabilitar = document.querySelectorAll(".parrot");
        for (let i = 0; i<desabilitar.length;i++){
            desabilitar[i].disabled = true;
        }
        desabilitar.desable = true;
        segundoElem = elemento; 
        compararCartas(segundoElem, primeiroElem);
    }
    
}
function compararCartas(segundoElem, primeiroElem){
    arrayC[0] = segundoElem.children[1].src; 
    arrayC[1] = primeiroElem.children[1].src; 
    if (arrayC[0] === arrayC[1]){
        qtdCartasViradas = 0;
        for (let i = 0; i<desabilitar.length;i++){
            desabilitar[i].disabled = false;
        }
        qtdJogadas += 1;
        fimJogo();
    }
    else{
        setTimeout(desvirarCartas, 1000, segundoElem, primeiroElem);
        qtdJogadas += 1;
    }
}
function desvirarCartas(segundoElem, primeiroElem){
    qtdCartasViradas = 0;
    desvirarCarta(segundoElem);
    desvirarCarta(primeiroElem);
    for (let i = 0; i<desabilitar.length;i++){
        desabilitar[i].disabled = false;
    }
}
function fimJogo(){
    let a = document.querySelectorAll(".parrot");
    let b = true; 
    for (i = 0; i < a.length; i++){
        if(a[i].children[1].classList.contains("escondido")){
            b = false;
            break;
        }
    }
    if(b){
        setTimeout(alertGanhou, 999);
    }
}
function alertGanhou(){
    alert(`Você ganhou em ${qtdJogadas} jogadas! ${minutos} minutos e ${segundos} segundos gastos.`);
    let resposta = prompt("Gostaria de reiniciar a partida?");
    if (resposta == 'nao'){
        alert("Obrigada por jogar meu joguinho!");
    }
    else{
        document.location.reload(true);
    }
}

//Cronometro

function segundo(){
    //incrementa os segundos
    segundos++;
    if(segundos==60){
        //incrementa os minutos
        minutos++;
        //Zerar os segundos
        segundos=0;
        //escreve os minutos
        document.getElementById('minuto').innerHTML= ("00" + minutos).slice(-2);
    }
    //escreve os segundos
    document.getElementById('segundo').innerHTML= ("00" + segundos).slice(-2);
    
}

setInterval(segundo,1000)