// ANCHOR ---> Matrices --- array bidimensional

//
let matriz = [
  [2, 4, 6], // fila 0
  [1, 7, 2], // fila 1
  [9, 2, 4], // fila 2
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

const recorrerCol = (mat) => {
  let acc = 0;
  for (let i = 0; i < mat.length; i++) {
    if (mat[i][1] !== undefined) {
      acc += mat[i][1];
    }
  }
  return acc;
};

let res2 = recorrerCol(matrix);
console.table(res2);

let matriz3 = [
  [2, 4, 6], // fila 0
  [1, 7, 2], // fila 1
  [9, 2, 4], // fila 2
];

// matriz3[0][0]
// matriz3[1][1]
// matriz3[2][2]
//TODO ---> diagonal principal

console.log("-----")
const recorrerPrincipal = (mat)=>{

  for (let i = 0; i < mat.length; i++) {
    console.log(mat[i][i])
  }

}

recorrerPrincipal(matriz3)


//TODO ---> diagonal secundaria

let matriz4 = [
  [2, 4, 1], // fila 0
  [1, 6, 2], // fila 1
  [5, 2, 4], // fila 2
]

matriz4[0][2]
matriz4[1][1]
matriz4[2][0]

const recorrerSec = (mat)=>{

  let acc = 0
  for (let i = 0; i < mat.length; i++) {
     acc += mat[i][mat.length - (1 + i)].edad
  }
return acc
}
let res4 = recorrerSec(matriz4)
console.log(res4)



//TODO ---> matriz completa ---> doble ciclo for --> anidado

let matri = [
  [2, 4, 1], // fila 0
  [1, 6, 2], // fila 1
  [5, 2, 4], // fila 2

]
console.log("-----")

const recorrerMat = (mat)=>{

  for(let fila = 0; fila < mat.length; fila++){

    for(let col = 0; col < mat[fila].length; col++ ){
      console.log("estoy recorriendo la fila " + fila + " en la columna " + col)
      console.log( mat[fila][col] )
     }

  }

}

recorrerMat(matri)
