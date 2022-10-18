// Actividades avanzadas en JavaScript

// ACTIVIDAD 8
// Mostrar por pantalla si es par o impar
function typeNum(num) {
  if (typeof num != "number") {
    alert("No es un numero");
  } else {
    if(num%2 == 0){
        alert(num+" es par");
    }
    else{
        alert(num+" es impar");
    }
  }
};

// ACTIVIDAD 9
// Comprobacion de String Mayus-Minus
function mayusMinus(){
    let mayus=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let minus=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    let text = prompt("Escriba una frase: ");
    let numMayus = 0;
    let numMinus = 0;
    for(let i = 0; i < text.length; i++){
        if(mayus.includes(text.charAt(i))){
            numMayus = numMayus+1;
        }
        if(minus.includes(text.charAt(i))){
            numMinus = numMinus+1;
        }
    }

    if(numMayus == text.length){
        alert("todas son mayusculas");
    }if(numMinus == text.length){
        alert("todas son minusculas");
    }else{
        alert("combinacion de mayusculas y minusculas");
    }


};

// ACTIVIDAD 10
// Palindromo

function palin(){
    let text = prompt("Escriba una frase: ");
    let numText = text.length;
    let arr=[];
    let cacEsp=[" ",",",".","¿","?"];
    let num = 0;
    let inverseText;
    for(let i = 0; i<text.length; i++){
        if(cacEsp.includes(text[i])){
            arr.push();
        }
    }
    for(numText; numText>0;numText--){
        console.log(inverseText);
        inverseText+=text[numText];
    }
    
    alert("\n"+arr);
    alert(text+"\n"+inverseText)
}