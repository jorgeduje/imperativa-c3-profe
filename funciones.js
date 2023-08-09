// FUNCIONES DECLARADAS ---> Tienen Nombre
// HOISTING
f1()

function f1() {
  console.log("hola");
}

f1();

function saludar(nombre, apellido) {
  // BLOQUE DE CODIGO

  let saludoFinal = `hola ${nombre} ${apellido} como estas?`;
  return saludoFinal; // corta la ejecucion y devuelve lo que tenga que devolver
}

let saludoListo = saludar("carmen", "rodriguez");
console.log(saludoListo);

let saludoListo2 = saludar("juancito", "gonzalez");
console.log(saludoListo2);

function sumar(numeroUno, numeroDos) {
  return numeroUno + numeroDos;
}

let res = sumar(15, 12);
console.log(res);

let res2 = sumar(3, 1);
console.log(res2);

// FUNCIONES EXPRESADAS ---> ANONIMAS

// FUNCIONES EXPRASADAS TRADICIONAL

console.log("----------------------");
const restar = function (n1, n2) {
  return n1 - n2;
};

let resultado = restar(12, 22);
console.log(resultado);

// FUNCIONES EXPRESADAS FLECHA ---> ARROW FUNCTION

const saludar2 = (nombre) => {
  return `Hola ${nombre} como estas?`;
};

const multiplicar = (n1, n2) => n1 * n2;
multiplicar(12, 5)

// SCOPE ---> local


// let prueba = 1

// {
//     console.log(prueba)
//     let prueba2 = 5
// }

// console.log(prueba2)

let palabra = "casa"

const pruebaScope = ()=>{
    let palabra = "avion"
    return palabra
}

let resultadoPrueba = pruebaScope()
console.log(resultadoPrueba)


// CREAR UNA FUNCION QUE CONVIERTA PESOS A DOLARES 
// DANDO LA POSIBILIDAD DE QUE SEA DINAMICO LA CANTIDAD DE PESOS Y 
// TAMBIEN EL VALOR DEL DOLAR ACTUAL

// valor esta en 200 
// cantidad tengo 5000

const conversor = (cantidadPesos, valorDolar) => cantidadPesos / valorDolar

let cantidadDolares = conversor(5000, 200)


// UN PROFESOR QUIERE UN SISTEMA DONDE PUEDA INGRESAR 3 NOTAS 
// Y LE DEVUELVA EL PROMEDIO DEL ALUMNO
// QUE DEVUELVA UN STRING QUE DIGA , EL PROMEDIO ES ---> el resultado


const promediar = (nombre, notaUno, notaDos, notaTres)=>{

    let suma = (notaUno + notaDos + notaTres)
    let promedio = Math.round(suma / 3)
    return `El promedio de ${nombre} es ${promedio}`

}

let resultadoPepito = promediar("pepito", 8, 9, 10)
let resultadoJuancito= promediar("juancito", 5, 7, 10)
console.log(resultadoPepito)
console.log(resultadoJuancito)




