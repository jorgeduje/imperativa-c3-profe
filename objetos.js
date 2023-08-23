// ANCHOR ---> Objetos literales

// const nombrePerro = "jack"
// const edad = 22
// const raza = "callejero"

// propiedades y metodos 
// pares clave : valor

const perro = {
    nombre: "pepe",
    edad: 2,
    raza: "callejero",
    ladrar: function(){
        return "Wouf y me llamo " + this.nombre
    },
    color: "blanco",
    direccion: {
        calle: "italia",
        numero: 222
    }
}
// perro.direccion.calle

let x =  perro.ladrar()
console.log(x)


// BRACKET NOTATION ---> avanzado 
// console.log( perro["nombre"] )
// const mostrarPropiedad = (prop)=>{
//     console.log( perro[prop] )
// }

// mostrarPropiedad("edad")

// DOT NOTATION 
// console.log( perro.nombre )


// MANIPULACION DE OBJETOS
// MODIFICAR 
perro.edad = 3
perro.nombre = "firulais"

// AGREGAR
perro.tamaño = "mediano"
perro.sexo = "hembra"

perro.sexo = "macho"


// BORRAR PROPIEDAS

console.log(perro)

delete perro.raza

console.log(perro)

// [12, 12, "fasf ", " dasda"]

// [ {}, {}, {}, {} ]

// productos

const productos = [
    {
        nombre:"celular",
        precio: 2,
        stock: 5
    },
    {
        nombre:"tablet",
        precio: 3,
        stock: 4
    },
    {
        nombre:"tv",
        precio: 2,
        stock: 12
    },

]

const verProductos = ()=>{

    for(let i = 0; i < productos.length; i++){

      productos[i].stock += 10

    }
}

verProductos()

console.log(productos)


let promediarFn = function(){
    let acc = 0
    for( let i = 0; i <  this.notas.length; i++ ){
        acc += this.notas[i]
    }
    return acc / this.notas.length
}

let estudiantes = [
    {
        nombre: "pepe",
        notas: [7, 8, 9],
        promediar: promediarFn
    },
    {
        nombre: "maria",
        notas: [9, 10, 10],
        promediar: promediarFn
    },
    {
        nombre: "juancito",
        notas: [2, 4, 2],
        promediar: promediarFn
    }
]

const funcionParaQueLaProfesoraEjecute = ()=>{
    for(let i = 0; i < estudiantes.length; i++ ){
        console.log( `El promedio de ${estudiantes[i].nombre} es ${estudiantes[i].promediar()}`)
    }
}



const agregarEstudiante = (nombre, notas)=>{
    estudiantes.push({
        nombre: nombre,
        notas: notas,
        promediar: promediarFn
    })
}

agregarEstudiante("jorgito", [10, 10, 10])



funcionParaQueLaProfesoraEjecute()


