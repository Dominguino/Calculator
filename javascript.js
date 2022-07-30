

const button1 = document.getElementById("b1");
const button2 = document.getElementById("b2");
const button3 = document.getElementById("b3");
const button4 = document.getElementById("b4");
const button5 = document.getElementById("b5");
const button6 = document.getElementById("b6");
const button7 = document.getElementById("b7");
const button8 = document.getElementById("b8");
const button9 = document.getElementById("b9");
const button0 = document.getElementById("b0");
const buttonClear = document.getElementById("clear");
const buttonSuma = document.getElementById("suma");
const buttonResta = document.getElementById("resta");
const buttonPunto = document.getElementById("punto");
const buttonMultip = document.getElementById("multip");
const buttonDivisor = document.getElementById("divisor");
const buttonIgual = document.getElementById("igual");

const screen = document.getElementById("screen");

let valor1;
let valor2; 
let resul;
let input =""; 

let operacion; 


button1.addEventListener('click', añadirValor)
button2.addEventListener('click', añadirValor)
button3.addEventListener('click', añadirValor)
button4.addEventListener('click', añadirValor)
button5.addEventListener('click', añadirValor)
button6.addEventListener('click', añadirValor)
button7.addEventListener('click', añadirValor)
button8.addEventListener('click', añadirValor)
button9.addEventListener('click', añadirValor)
button0.addEventListener('click', añadirValor)
buttonPunto.addEventListener('click', añadirValor)

buttonIgual.addEventListener('click', mostrarResul)
buttonMultip.addEventListener('click', seleccionarOp)
buttonSuma.addEventListener('click', seleccionarOp)
buttonResta.addEventListener('click', seleccionarOp)
buttonDivisor.addEventListener('click', seleccionarOp)

buttonClear.addEventListener('click', clear)







function añadirValor(){
    input = input + this.innerText; 
    screen.innerText = input;
}


function pasarValor(){
    if (valor1 == null){
        valor1 = Number(input);    
        console.log("el valor de valor1: " + valor1)
    }
    else {
        valor2 = Number(input);
        console.log("el valor de valor2: " + valor2)

    }
}

function clearScreen(){
    input = "";
    screen.innerText = "0";
}






function seleccionarOp(){
    console.log("este es el valor de valor2: "+valor2);
    pasarValor();

    if(valor2==null){
    operacion=this.id; 
    clearScreen();
    }
    else {
         
        mostrarResul();
        valor1=resul;
        clearScreen();
        console.log("este es el valor de valor1: " + valor1 );
        console.log("este es el valor de resul: " + resul );
        operacion=this.id;

    }
}




function seleccionarCalculo(){
    if(operacion=="suma"){
         suma();
    }
    if(operacion=="resta"){
         resta();
    }
    if(operacion=="multip"){
        multip();
    }
    if(operacion=="divisor"){
    divisor();
    }
}



//FUNCIONES MATEMÁTICAS
function suma(){
    resul=  valor1 + valor2; 
}
function resta(){
    resul= valor1 - valor2; 
}
function multip (){
    resul = valor1 * valor2; 
}
function divisor (){
    if(valor2==0){
        alert("don't, just don't")
    }
    else{
    resul = valor1/valor2;
    }
}


function clear(){
    valor1=null; 
    valor2=null;
    operacion="";
    clearScreen();
}




function mostrarResul(){
    pasarValor();
    seleccionarCalculo();
    if(resul%1==0){
    screen.innerText = resul;
    }
    else{
    screen.innerText = resul.toFixed(5);
    }
    input = screen.innerText;
    console.log("valor final de valor1: " + valor1)
    console.log("valor final de valor2: " + valor2)

    console.log("el resultado es= " + resul);
    valor1= resul; 
    valor2= null;
}
