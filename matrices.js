// ANCHOR ---> Matrices --- array bidimensional

//
let matriz = [
  [2, 4, 6], // fila 0
  [1, 7, 2], // fila 1
  [9, 2, 4] // fila 2
];



// matriz[2][0]
// matriz[2][1]
// matriz[2][2]

//TODO ---> fila

const recorrerFila = (mat, numFila) => {
  for (let i = 0; i < mat[numFila].length; i++) {
    mat[numFila][i] = "hola";
  }
};

recorrerFila(matriz, 0);
console.table(matriz);

//TODO ---> columna
let matrix = [
    [2, 3, 6], // fila 0
    [1], // fila 1
    [9, "pepe", 4, 6], // fila 2
];

//   matrix[0][1]
//   matrix[1][1]
//   matrix[2][1]

const recorrerCol = (mat)=>{
    let acc = 0
    for(let i = 0; i < mat.length; i++ ){
        if(mat[i][1] !== undefined){
            acc += mat[i][1]
        }
    }
    return acc
}

let res2 = recorrerCol(matrix)
console.table(res2)



//TODO ---> matriz ---> doble ciclo for --> anidado

//TODO ---> diagonal principal

//TODO ---> diagonal secundaria


const crearMatrizDiez = ()=>{


    return mat
}

 console.table()

 let matriz3 = [
    [2, 4, 6], // fila 0
    [1, 7, 2], // fila 1
    [9, 2, 4] // fila 2
  ];
//   matriz3[0][0]
//   matriz3[1][1]
//   matriz3[2][2]
matriz3[0][2]
matriz3[1][1]
matriz3[2][0]