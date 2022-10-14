// ACTIVIDAD 1
//Saltara un mensaje en el navegador de hola mundo
// alert("Hola mundo");

//Mensaje de primer script
// alert("Primer Script klk");

// ACTIVIDAD2
// Variable mensaje para el nuevo alert
// var mensaje = "Hola Mundo!\nQue facil es incluir 'comillas simples'\n y\"dobles\"";

// Alert con el mensaje
// alert(mensaje);

// ACTIVIDAD 3
// var meses = [
//   "Enero",
//   "Febrero",
//   "Marzo",
//   "Abril",
//   "Mayo",
//   "Junio",
//   "Julio",
//   "Agosto",
//   "Septiembre",
//   "Octubre",
//   "Noviembre",
//   "Diciembre",
// ];
// alert(meses);

// ACTIVIDAD 4
var valores = [true, 5, false, "hola", "adios", 2];
// 4.1 Determina el texto mas largo
function textLengt() {
  var count = 0;
  var wordLong = "";
  for (var i = 0; i <= valores.length; i++) {
    if (typeof valores[i] == "string" && valores[i].length > count) {
      count = valores[i].length;
      wordLong = valores[i];
    }
  }
  console.log(count + "\n" + wordLong);
}
// textLengt(valores);

// 4.2 TRUE, FALSE || &&
function trueFalse() {
  var t;
  var f;
  for (var i = 0; i <= valores.length; i++) {
    if (typeof valores[i] == "boolean" && valores[i] == true) {
      t = valores[i];
    } else if (typeof valores[i] == "boolean" && valores[i] == false) {
      f = valores[i];
    }
  }
  console.log(t && f);
  console.log(t || f);
}
// trueFalse(valores);

// 4.3 Operaciones
function allOperation() {
  var n1 = 0;
  var n2 = 0;
  for (var i = 0; i <= valores.length; i++) {
    if (typeof valores[i] == "number" && valores[i] == 5) {
      n1 = valores[i];
    } else if (typeof valores[i] == "number" && valores[i] == 2) {
      n2 = valores[i];
    }
  }
  console.log(n1 + n2);
  console.log(n1 - n2);
  console.log(n1 * n2);
  console.log(n1 / n2);
}
// allOperation(valores);

//ACTIVIDAD 5
// Completar condiciones
function cond() {
  var numero1 = 5;
  var numero2 = 8;
  if (numero1 < numero2) {
    alert("numero1 no es mayor que numero2");
  }
  if (numero2 > 0) {
    alert("numero2 es positivo");
  }
  if (numero1 <= 0) {
    alert("numero1 es negativo o distinto de cero");
  }
  if (numero1 + 1 != numero2) {
    alert(
      "Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2"
    );
  }
}

// ACCTIVIDAD 6
// ALMACENAR DNI, COMPROBAR LA NUMERACION DEL DNI, CALCULACION DE LA LETRA, COMPARACION DE LA LERTA Y MENSAJE AL USUARIO
var letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
  "T",
];

function userDNI() {
  var userN = prompt("Escriba el numero del DNI: ");
  var userW = prompt("Escriba su letra del DNI: ");
  userN = parseInt(userN);
  if (typeof userN != "number" || userN < 0 || userN > 99999999) {
    console.log(typeof userN);
    console.log(userN);
    alert("Escriba el numero de DNI correctamente");
  } else {
    var result = userN % 23;
    var letraCalc = letras[result];
    if (userW != letraCalc) {
      alert("La letra que ha introducido no es correcta");
    } else {
      alert("Todo esta correcto, puede continuar mi loko");
    }
  }
}

// userDNI();

// ACTICIDAD 7
// FACTORIALES
function factorial() {
  var finalFac = 1;
  var numberFac = prompt("Escriba el numero que quiere calcular");
  numberFac = parseInt(numberFac);
  for (var i = 1; i <= numberFac; i++) {
    finalFac = finalFac*i;   
  }
  alert("El resultado de "+numberFac+" es: "+finalFac);
}

// factorial();

// ACTIVIDAD B1
function weigthMoon(){
    var weight = prompt("Diga el peso que quiere calcular: ");
    var moonWeigth = weight*0.83;
    alert("Peso luna: "+moonWeigth+"\n"+"Peso tierra: "+weight);
}

// weigthMoon();

// ACTIVIDAD B2
function IMC(){
    var peso = prompt("indique el peso: ");
    var altura = prompt("Indique la altura en mts: ");
    var  imc = peso / (altura*altura);
    if(imc<18){
        alert("Peso bajo");
    }if (imc>18 && imc<25) {
        alert("normal");      
    }if (imc>25 && imc<27) {
        alert("sobrepeso");      
    }if (imc>27 && imc<30) {
        alert("Obesidad l");      
    }if (imc>30 && imc<40) {
        alert("Obesidad ll");      
    }else{
        alert("Obesidad lll");
    }
}

// IMC();

// ACTIVIDAD B3
//Actividad B3
function pies(){
    let pies = prompt('Introduce una medida en pies');
    let regex = /^[0-9]*\.?[0-9]*$/;
    if(regex.test(pies)){
    alert(pies + ' pies son ' + pies*12 +' pulgadas');
    }
    else{
    alert('Introduce datos válidos');
    }
   }
   
   //Actividad B4
   function pulgadas(){
    let pulgadas = prompt('Introduce una medida en pulgadas');
    let regex = /^[0-9]*\.?[0-9]*$/;
    if(regex.test(pulgadas)){
    alert(pulgadas + ' pulgadas son ' + pulgadas*2.54 + ' centímetros y ' + pulgadas * 0.254 + ' metros');
    }
    else{
    alert('Introduce datos válidos');
    }
   }
   //Actividad B5
   function notas(){
    let notas = [7, 5.5, 8, 5];
    let media = 0;
    for(let i in notas){
    media += notas[i];
    }
    alert('La nota media es ' + media/notas.length)
   }
   //Actividad B6
   function horas(){
   let precioH = 10;
   let precioHEx = 15;
   let horas = 40;
   let horasEx = 4;
   let salario = precioH*horas + precioHEx*horasEx;
   alert(salario);
   }
   //Actividad B7
   function numAl(){
    let x = (Math.floor((Math.random()*50)+1)).toFixed();
    alert(x);
   }
   //Actividad B8
   function mayor(){
    let x = parseInt(prompt('Introduce un número'));
    let y = parseInt(prompt('Introduce otro número'));
    alert(Math.max(x,y));
   }
   function menor(){
    let x = parseInt(prompt('Introduce un número'));
    let y = parseInt(prompt('Introduce otro número'));
    let z = parseInt(prompt('Introduce otro número'));
    alert(Math.min(x,y,z));
   }
   
   //Actividad B9
   function ordenar(){
    let a = prompt('Introduce un número');
    let b = prompt('Introduce otro número');
    let c =prompt('Introduce otro número');
    if(a>b && b>c){
    alert('El orden es ' + c +' ' + b +' ' + a);
    }
    else if(a>b && b<c && c<a){
    alert('El orden es ' + b +' ' + c +' ' + a);
    }
    else if (b>a && a>c){
    alert('El orden es ' + c +' ' + a +' ' + b);
    }
    else if (b>a && a<c && b>c){
    alert('El orden es ' + a +' ' + c +' ' + b);
    }
    else if(c>a && a>b){
    alert('El orden es ' + b +' ' + a +' ' + c);
    }
    else if(c>a && a<b && c>b){
    alert('El orden es ' + a +' ' + b +' ' + c);
    }
   }
