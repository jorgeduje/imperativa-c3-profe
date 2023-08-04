


function f1 (){

    console.log("hola")

}

f1()

function saludar ( nombre, apellido){
    
    // BLOQUE DE CODIGO
    
    let saludoFinal = `hola ${nombre} ${apellido} como estas?`
    return saludoFinal // corta la ejecucion y devuelve lo que tenga que devolver
}

let saludoListo = saludar("carmen", "rodriguez" )
console.log(saludoListo)

let saludoListo2 = saludar("juancito", "gonzalez")
console.log(saludoListo2)


function sumar (numeroUno, numeroDos){
    return numeroUno + numeroDos
}


let res = sumar(15, 12)
console.log(res)

let res2 = sumar(3, 1)
console.log(res2)
