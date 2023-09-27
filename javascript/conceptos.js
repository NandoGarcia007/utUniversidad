//creando objetos
/*
var Automodelo = "March";
var Automotor = 1.2;
var Autocolor = "March";
var Autoanio = 2018;

var auto ={
    nombre:'march',
    motor:1.2,
    color:'azul',
    anio:2018
}
console.log(auto.motor);
console.log(auto.color);
document.write(auto.color);

//arreglos
var ligamx =['America', 'Chivas', 'Cruz Azul'];
console.log(ligamx);
console.log(ligamx[0]);
console.log(ligamx.length);
console.log(ligamx[1]);

//quitar elemento
ligamx.pop();
console.log(ligamx[2]);

ligamx.splice(1,1);
console.log(ligamx);
ligamx.splice(1,2);
console.log(ligamx);

//agregar un elemento a la ultima poscion del arreglo
ligamx.push("atlas");
ligamx.push("puebla");
console.log(ligamx);

//agregar un elemento a la primera poscion del arreglo
ligamx.unshift("mazatlan");
console.log(ligamx);

//agregar un elemento en un lugar especifico del arreglo
ligamx.splice(2,1, "santos");
console.log(ligamx);

//numeros
var numero1 = "15";
var numero2 = 20;
var numero3 = 21.5;
var numero4 = "12.1458412";
var numero5 = 304015;
var numero6 = true;

console.log(typeof(numero1));
console.log(typeof(numero2));
console.log(typeof(numero3));
console.log(typeof(numero4));
console.log(typeof(numero5));
console.log(typeof(numero6));

var numero7 = parseFloat(numero4);
console.log(typeof(numero7));
console.log(numero7.toFixed(2));

//fechas
var fecha = new Date();
console.log(fecha);
console.log("el año actual es "+ fecha.getFullYear());
console.log("el dia actual es "+ fecha.getDay());
console.log("la fecha actual es "+ fecha.getDate());
console.log("la hora actual es "+ fecha.getHours());
console.log("los minutos actuales son "+ fecha.getMinutes());
console.log("la hora actual es "+ fecha.getHours() + ":"+ fecha.getMinutes());
console.log("el mes actual es "+ fecha.getMont());



var texto = "esto es una cadena de texto";
console.log(texto);
console.log(typeof(texto));
//Pasara letras a mayusculas
console.log(texto.toUpperCase());
//Nos da la cantidad de caracteres de string
console.log(texto.length);
//Convierte un string a arreglo
console.log(texto.split(" "));
//Buscar un caracter o texto especifico
console.log(texto.indexOf("cadena"));
//Muestra el texto apartir de la posicion indicada
console.log(texto.silice(0,11));
var texto2 = "hello world";
console.log(texto2.toLocaleLowerCase());

IF
if(condicion){
    // codigo
}
con if else
if(condicion){
    // codigo
}else{
    // codigo
}

estrucutura IF, else if, else
if(condicion){
    // codigo
}else if (condicion){
    // codigo
}else{
    // codigo
}

var numero = prompt("dame un numero");
if (numero>8) {
    console.log("el numero proporcionado es mayor a 8");
}else{
    console.log("el numero proporcionado es menor a 8");
}

var numero = prompt("dame un numero");
if (numero % 2==0) {
    console.log("el numero es par");
}else{
    console.log("el numero es inpar");
}*/

for (let i = 1; i <= 100; i++) {
    if (i % 3==0) {
      console.log(i, "UT");
      
    } if (i % 5==0) {
        console.log(i, "Ingeneria");
    }else {
      console.log(i);
    }
  }
  
  /*var metododepago = "paypal";
  switch (metododepago) {
    case 'TC':
        console.log("pago con tarjeta de credito");
        break;
        case 'Efectivo':
            console.log("pago con efectivo");
            break;
            case 'paypal':
                console.log("pago con playpal");
                break;
  
    default:
        console.log("pago invalido");
        break;
  }

  var numero10=20;

  numero10= numero10 + 20;
  console.log(numero10);

  numero10= numero10 +=20;
  console.log(numero10);

  numero10= numero10 -=20;
  console.log(numero10);

  numero10= numero10 *=20;
  console.log(numero10);

  numero10= numero10 /=20;
  console.log(numero10);*/