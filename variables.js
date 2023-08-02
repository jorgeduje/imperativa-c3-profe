// ANCHOR variables --->  let - const

let nombre = "Pepe";

const apellido = "Perez";

console.log(nombre);
console.log("apellido: ", apellido)

// let nombre_usuario = "dasdas"
// let nombreDelUsuario = "dasdas"

nombre = "Carmen";
console.log(nombre);

// apellido = "gonzalez"
// console.log(apellido)

// ANCHOR ---> Tipo de datos ---> primitivos

// STRINGS o cadena de texto

let frase = 'hola como estas?'

// NUMBER ---> numeros

let edad = 12

// BOOLEAN ---> (true/verdadero) o (false/falso)

let esMayorDeEdad = false
let isLogged = true

// UNDEFINED
// NULL
// NaN

let email = undefined

let stock = null 


let y = 1
let z = "pepe"
let x = y * z

console.log("email: ", email)
console.log( "x: ",  x )

console.log("-----------")

// ANCHOR ---> OPERADORES

// LINK ---> matematicos

let n1 = 9
let n2 = 2
console.log( n1 + n2 )
console.log( n1 - n2 )
console.log( n1 * n2 )
console.log( n1 / n2 )
// MODULO
console.log( n1 % n2 )

// CONCATENAR --- JUNTAR 

let palabraUno = "hola"
let palabraDos = "como estas?"

let fraseCompleta = palabraUno + " pepe " + palabraDos
console.log(fraseCompleta)
// TEMPLATE LITERALS ---> BACKSTICKS ``

let fraseCompleta2 = `${palabraUno} pepe ${palabraDos} , yo muy bien!`
console.log(fraseCompleta2)

// LINK ---> de comparacion

let num1 = 6
let num2 = "6"

// console.log( num1 == num2 ) // ---> SIMPLE 
// console.log( num1 != num2 ) // ---> SIMPLE
console.log( num1 === num2 ) // ---> ESTRICTA
console.log( num1 !== num2 ) // ---> ESTRICTA 

// console.log( num1 > num2 )
// console.log( num1 < num2 )
// console.log( num1 >= num2 )
// console.log( num1 <= num2 )

// LINK ---> logicos