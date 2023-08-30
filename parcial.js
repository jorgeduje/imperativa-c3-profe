// TODO ---> 1
// Realizar una función que reciba por parámetro dos valores,
// el primero será numérico y el segundo booleano.
// Si el número es par y el booleano es true entonces retornar “Ha pasado la condición”.
// En cambio, si el número es impar y el booleano es false retornar “No ha pasado
// la condición”.
// Para cualquier otro caso, retornar -1

const verificar = (numero, bool) => {
  if (numero % 2 === 0 && bool) {
    return "Ha pasado la condición";
  } else if (numero % 2 !== 0 && !bool) {
    return "No ha pasado la condición";
  } else {
    return -1;
  }
};

let resultado = verificar(3, false);
console.log(resultado);

// TODO ---> 2
// Realizar una función que indique si una persona se encuentra apta para una
// competencia física. Para eso, debemos realizar una función  que reciba dos parámetros
// La edad de la persona (Number)
// Si ha entregado sus estudios médicos (Booleano)
// La función deberá evaluar las siguientes condiciones y retornar
// en cada caso lo que se pida:
// Si ha entregado sus estudios y es mayor o igual de 18 años: retorna un
// valor booleano true.
// Si ha entregado sus estudios pero es menor de 18 años: retorna un string que
// diga “Sólo puedes competir con un adulto acompañante”.
// Para cualquier otro caso: retorna un valor booleano false.

const esApto = (edad, estudios) => {
  if (estudios) {
    return edad >= 18 ? true : "Sólo puedes competir con un adulto acompañante";
  } else {
    return false;
  }
};

let puedeCompetir = esApto(12, false);
console.log(puedeCompetir);

// TODO ---> 3
// Realizar una función que reciba un array como parámetro, y lo recorra
// para filtrar los objetos cuya cantidad de páginas sea mayor a 300.
// La función deberá retornar un nuevo arreglo con los libros que cumplan con la condición
// antes mencionada.

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

const filtrador = (arreglo) => {
  let filtrados = [];

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i].paginas > 300) {
      filtrados.push(arreglo[i]);
    }
  }

  return filtrados;
};

let librosGrandes = filtrador(libros);
console.log(librosGrandes);

// Agregar un id a cada libro

const agregadorDeId = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].id = i + 1;
  }
};

agregadorDeId(libros);
console.log(libros);

// TODO --->
// A partir de un array de correos, recorrerlo para corroborar si son válidos.
// Para ello, por el momento, debemos buscar el carácter “@” en cada elemento y
// agregar aquellos que lo tengan al array de correos admitidos. En caso de no encontrar
// el carácter, se deberá agregar al array de correos descartados.
// Desarrollar una función que realice la verificación de cada elemento del array
// de correos pendientes. En caso de validar, agregar al arrayCorreoAdmitidos.
// Caso contrario, agregar al arrayCorreoDescartados.
// Mostrar por pantalla la cantidad y los elementos de cada array.

let arrayCorreosPendientes = [
  "iroman@digitalhouse.com",
  "loki%digitalhouse.com",
  "loki@digitalhouse.com",
  "thanosdigitalhouse.com",
  "thanos@digitalhouse.com",
];
/* array de correos admitidos */
let arrayCorreosAdmitidos = [
  "thor@digitalhouse.com",
  "tucuMan@digitalhouse.com",
  "wanda@digitalhouse.com",
];
let arrayCorreosDescartados = [];

const verificarCorreos = (arreglo) => {
  for (let i = 0; i < arreglo.length; i++) {
    let correo = arreglo[i];
    if (correo.includes("@")) {
      arrayCorreosAdmitidos.push(correo);
    } else {
      arrayCorreosDescartados.push(correo);
    }
  }
  arrayCorreosPendientes = [];
};

verificarCorreos(arrayCorreosPendientes);

console.log(arrayCorreosPendientes);
console.log(arrayCorreosAdmitidos);
console.log(arrayCorreosDescartados);

let numeros = [10, 5, 2, 3];

// TODO --->
// crear una funcion que reciba un array por parametros y devuelva el menor numero

const devolverMenor = (arr) => {
  let menor = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (menor > arr[i]) {
      menor = arr[i];
    }
  }
  return menor;
};

const elMenor = devolverMenor(numeros);
console.log(elMenor);

// let librosFiltrados = libros.filter( elemento => elemento.paginas > 300)
// console.log(librosFiltrados)

const alicia = [10, 80, 75, 33];
const bob = [90, 20, 25, 11];

const determinarGanador = function (a, b) {
  let puntosA = 0;
  let puntosB = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      puntosA += 1;
      this.etapas.push("Alicia")
    } else if (a[i] < b[i]) {
      puntosB += 1;
      this.etapas.push("Bob")
    }else{
      this.etapas.push("Empate")
    }
  }

  let ganador;

  if (puntosA > puntosB) {
    ganador = "Alicia";
  } else if (puntosA < puntosB) {
    ganador = "Bob";
  } else {
    ganador = "Empate";
  }

  this.ganador = ganador;

  return ganador;
};

let concurso = {
  encontrarGanador: determinarGanador,
  etapas: [],
  ganador: "",
};

const ganadorConcurso = concurso.encontrarGanador(alicia, bob);
console.log(ganadorConcurso);

console.log(concurso.ganador);
console.log(concurso.etapas);
