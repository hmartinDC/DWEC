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
  var fac = numberFac
  for (var i = 1; i < fac; i++) {
    var calFact= i*fac;
    finalFac =calFact*finalFac; 
    console.log(i)
    console.log(finalFac);
  }
  alert("El resultado de "+numberFac+" es: "+finalFac);
}

factorial();
