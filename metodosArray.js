
let numeros = [ 12, 54, 66]

numeros.push(15)

numeros.includes(54)

numeros.indexOf(12)

// Callback ---> Funcion que se pasa como argumento a otra funcion

// FILTER
let libros = [
    {
      nombre: "historiasInconscientes",
      autor: "Gabriel Rolón",
      paginas: 352,
    },
    {
      nombre: "operacionMasacre",
      autor: "Rodolfo Walsh",
      paginas: 236,
    },
    {
      nombre: "elAlquimista",
      autor: "Paulo Coehlo",
      paginas: 192,
    },
    {
      nombre: "elCampamento",
      autor: "Blue Jeans",
      paginas: 480,
    },
  ];

//   const filtrar = (arr)=>{
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i].paginas > 300){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
//   }

// FILTER ---> retornar un nuevo arreglo con todos los elementos que cumplan la condicion
// ---> Me pide que en cada vuelta retorne una condicion

let arrayFiltrado = libros.filter( (libro)=> libro.paginas > 300 ) 
console.log(arrayFiltrado)


// MAP ---> siempre siempre me devuelve un nuevo arreglo de la misma longitud  
// Me pide que le diga que agregar en cada vuelta
let arrayMapeado = libros.map( (libro, i)=> {
    // return {...libro, id: i+1  }
    // return {nombre: libro.nombre, autor: libro.autor, paginas: libro.paginas, id: i+1  }
    
    return {nombre: libro.nombre}
} ) // --> [ , , , ]


console.log(arrayMapeado)


// FIND ---> Devuelve el elemento que cumpla la condicion ---> siempre se queda con el primero
// Si no encuentra devuelve undefined

let libroEncontrado = libros.find( (libro)=> libro.nombre === "pepe" )

console.log(libroEncontrado)

let newA = []
libros.forEach( (elemento)=> {
    newA.push(elemento)
} )


libros.sort( (a,b)=>  a.paginas - b.paginas )

console.log(libros)

// REDUCE ---> llevar un arreglo a su minima expresion 

let items = [
    {
      nombre: "motorola",
      precio: 40,
      cantidad: 5,
      categoria: "telefonia",
    },
    {
      nombre: "notebook",
      precio: 80,
      cantidad: 10,
      categoria: "computacion",
    },
    {
      nombre: "zapatilla",
      precio: 20,
      cantidad: 2,
      categoria: "indumentaria",
    },
    {
      nombre: "Macbook",
      precio: 100,
      cantidad: 7,
      categoria: "computacion",
    },
    {
      nombre: "samsung",
      precio: 35,
      cantidad: 15,
      categoria: "telefonia",
    },
    {
      nombre: "monitor",
      precio: 30,
      cantidad: 5,
      categoria: "computacion",
    },
  ];

  let total = items.reduce( (acc, item)=>{
    return acc + (item.cantidad * item.precio )
  }, 0)



console.log(total)
// // total
// let numeros2 = [ 3, 5, 1]

//   let total = numeros2.reduce( (acc, numero)=>{
//     return acc + numero
//   })

//   console.log(total) 

//   // 3 ---> 


// SOME Y EVERY ---> alguno o todos
// ---> devuelve un booleano

let items2 = [
    {
      nombre: "motorola",
      precio: 40,
      cantidad: 5,
      categoria: "telefonia",
    },
    {
      nombre: "notebook",
      precio: 80,
      cantidad: 10,
      categoria: "computacion",
    },
    {
      nombre: "zapatilla",
      precio: 20,
      cantidad: 2,
      categoria: "indumentaria",
    },
    {
      nombre: "Macbook",
      precio: 100,
      cantidad: 7,
      categoria: "computacion",
    },
    {
      nombre: "samsung",
      precio: 35,
      cantidad: 15,
      categoria: "telefonia",
    },
    {
      nombre: "monitor",
      precio: 30,
      cantidad: 5,
      categoria: "computacion",
    },
  ];

//  let sinStock =  items.some( (elemento)=> elemento.cantidad < 1 )
//  console.log(sinStock)

 let sinStock =  items.every( (elemento)=> elemento.cantidad < 5 )
 
 console.log(sinStock)