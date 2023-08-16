// ANCHOR ---> Estructuras de repeticion

// for
// inicializacion ; condicion ; modificador

// mostar los numeros desde y hasta x inclusive donde x se recibe por parametros

let numero = 15 
    numero = numero + 3
    numero += 3

    numero++

const mostrarCasa = ( y, x )=>{

    for( let i = y; i <= x ; i++ ){ 
        console.log(i)
    }
   
}

mostrarCasa( 41 , 44)





// while

const contarHastaVeinte = ()=>{

    // for(let i = 1 ; i < 21 ; i++){
    //     console.log(i)
    // }

    let i = 1
    while(i < 21){
        console.log(i)

        i++
    }

}

// do while
console.log("---------------")

const saludarDiez = ()=>{
    let i = 1

    do{
        console.log(i)
        i++
    }while(i < 10)

    console.log("termine")
}
 saludarDiez()

// mostrar por consola la tabla de multiplicar de x numero

// 2
// 2 * 1 = 2
// 2 * 2 = 4
// 2 * 3 = 6
// ...
// 2 * 10 = 20

const tabla = ( numero )=> {

    for(let i = 1 ; i <= 10; i++){
        // console.log( `${numero} x ${i} = ${numero * i}` )
        console.log(numero + " x " + i + " = " + (numero * i))
        // console.log(numero, i, " = " )
        // console.log(numero)
        // console.log( i )
        // console.log( " = " )
    }

}

tabla(7)

// saber el total de la sumatoria del 1 al 15
// saber cuantos impares hay entre desde el 1 al q15

const sumatoria = ()=>{

    let acumulador = 0

    for(let i = 1 ; i <= 15 ; i++){

       if( i % 2 !== 0){
        acumulador++
       }

    }

    return acumulador

}

let x = sumatoria()
console.log(x)

