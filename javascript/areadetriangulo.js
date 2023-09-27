// funcion que no recibe parametros  y no retorna nada
function saltodelinea(){
    document.write("<br> <br><br>");
}
// funcion que recibe un parametros  y no retorna nada
function imprimir(frase){
    document.write(frase);
    saltodelinea();
}

function areadeltriangulo(altura,base){
    let resultado= (base*altura)/2;
    imprimir("el area de un triangulo es: " + resultado)
}

let base= prompt("¿cual es la base del triangulo?");
let altura= prompt("¿cual es la altura del triangulo");

areadeltriangulo(base,altura);

