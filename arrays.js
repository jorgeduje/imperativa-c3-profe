// ANCHOR ---> Array - Arreglo - Coleccion 

let numeroDeLaSuerteUno = 15
let numeroDeLaSuerteDos = 27 
let numeroDeLaSuerteTres = 153
let numeroDeLaSuerteCuatro= 151

let numerosDeLaSuerte = [ 15, 27, 43, 65 ]

let palabras = [ "casa", "avion", "perro", "gato" ]

console.log( numerosDeLaSuerte[1]  )

let nombre = "pepe"

console.log(nombre)

nombre = nombre.toUpperCase()

console.log(nombre)

let x = nombre.includes("E") 
console.log(x)

console.log( nombre.length )
console.log(numerosDeLaSuerte.length)

console.log( numerosDeLaSuerte.includes(423) )

let numeros = [1, 4, 5, 7, 12, 44, 13, 47]

// numeros.push(15)


console.log(numeros)

let borrado = numeros.pop()

console.log(numeros)


let numeritos = [ 43, 105, 87, 12]
let arrayInvertido = [] // [12, 87, 105, 43]


arrayInvertido.push(numeritos.pop())
arrayInvertido.push(numeritos.pop())
arrayInvertido.push(numeritos.pop())

arrayInvertido.push(numeritos.pop())

console.log(arrayInvertido)


let palabras2 = [ "casa", "avion", "perro", "gato", "luna", "sol" ] // 3


// console.log(palabras2[0])
// console.log(palabras2[1])
// console.log(palabras2[2])
// console.log(palabras2[3])

const mostrarElementos = ()=>{

    for( let i = 0; i < palabras2.length ; i++ ){
        console.log( palabras2[i] )
    }

}

mostrarElementos()


let notasPepito = [ 8, 9, 10 ]

const promediar = ( arreglo )=>{

    let acumulador = 0 // 27

    for(let i = 0; i < arreglo.length; i++){
        acumulador += arreglo[i]
    }

    let resultado = acumulador / arreglo.length
    return resultado
    
}

let promedioPepito = promediar( notasPepito )
console.log(promedioPepito)

let notasMaria = [10, 9, 10, 9]
let promedioMaria = promediar(notasMaria)
console.log(promedioMaria)
