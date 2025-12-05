//#region Atributos
// Elementos de atributos
let forca = document.getElementById("forBase");
let destreza = document.getElementById("desBase");
let constituicao = document.getElementById("conBase");
let inteligencia = document.getElementById("intBase");
let sabedoria = document.getElementById("sabBase");
let carisma = document.getElementById("carBase");
//#endregion

//#region D20 
// Elemento números aleatórios após rodar o D20
let forD20 = document.getElementById("forD20");
let desD20 = document.getElementById("desD20");
let conD20 = document.getElementById("conD20");
let intD20 = document.getElementById("intD20");
let sabD20 = document.getElementById("sabD20");
let carD20 = document.getElementById("carD20");
//#endregion

//#region Modificadores
// Marcadores de modificadores
let forMod = document.getElementById("forMod");
let desMod = document.getElementById("desMod");
let conMod = document.getElementById("conMod");
let intMod = document.getElementById("intMod");
let sabMod = document.getElementById("sabMod");
let carMod = document.getElementById("carMod");
//#endregion

//#region Total Elemento
// Elementos Total da soma
let totalForca = document.getElementById('forTotal');
let totalDestreza = document.getElementById('desTotal');
let totalConstituicao = document.getElementById('conTotal');
let totalInteligencia = document.getElementById('intTotal');
let totalSabedoria = document.getElementById('sabTotal');
let totalCarisma = document.getElementById('carTotal');
//#endregion

//#region Botões
//-Botões da página
let botaoDado = document.getElementById("dado");
let calcularBotao = document.getElementById("calcular");
let resetarBotao = document.getElementById("resetar");
//#endregion

//#region Eventos
calcularBotao.addEventListener('click', calcular);
resetarBotao.addEventListener('click', recarregarPagina);
botaoDado.addEventListener('click', camposD20);
forca.addEventListener('keyup',modificador)
destreza.addEventListener('keyup',modificador)
constituicao.addEventListener('keyup',modificador)
inteligencia.addEventListener('keyup',modificador)
sabedoria.addEventListener('keyup',modificador)
carisma.addEventListener('keyup',modificador)
//#endregion

function gerarNumeroAleatorio(){
    let array_numeros_aleatorios = []

    for(let i = 0; i < 6; i++){
        array_numeros_aleatorios[i] = Math.floor(20 * Math.random()+1)
    }
    
    return array_numeros_aleatorios;
}

function camposD20(){
    numeros_d20 = gerarNumeroAleatorio();
    forD20.value = numeros_d20[0];
    desD20.value = numeros_d20[1];    
    conD20.value = numeros_d20[2];    
    intD20.value = numeros_d20[3];    
    sabD20.value = numeros_d20[4];    
    carD20.value = numeros_d20[5];        
}

function modificador(event){
    var element = event.target.id 
    var x = document.getElementById(element).value
    if(x % 2 == 1){
        x = x-1;
    }
    x = x/2;
    x = x-5;
    document.getElementById(element.substr(0,3) + "Mod").value = x
}

function calcular(){
    totalForca.value = Number(forD20.value) + Number(forMod.value)
    totalDestreza.value = Number(desD20.value) + Number(desMod.value)
    totalConstituicao.value = Number(conD20.value) + Number(conMod.value)
    totalInteligencia.value = Number(intD20.value) + Number(intMod.value)
    totalSabedoria.value = Number(sabD20.value) + Number(sabMod.value)
    totalCarisma.value = Number(carD20.value) + Number(carMod.value)
}

function recarregarPagina(){
    window.location.reload(true)
}