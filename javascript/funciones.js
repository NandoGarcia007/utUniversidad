// funcion que no recibe parametros  y no retorna nada
function saltodelinea(){
    document.write("<br> <br><br>");
}
// funcion que recibe un parametros  y no retorna nada
function imprimir(frase){
    document.write(frase);
    saltodelinea();
}

//imprimir("Jesus");
//imprimir("Fernando");
//imprimir("Garcia");
//imprimir("Calvillo");
//imprimir("21");
function calculadoraIMC(nombre,peso,altura){
    let imc= peso/(altura*peso);
    imprimir("el IMC de: " +nombre+ "es de:" +imc)
}

let nombre= prompt("¿cual es tu nombre?");
let peso= prompt("¿cual es tu peso?");
let altura= prompt("¿cual es tu altura?");

calculadoraIMC(nombre,peso,altura);