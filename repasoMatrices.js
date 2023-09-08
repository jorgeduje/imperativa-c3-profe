let gastos = [
  // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
  // EL MES ES FEBRERO QUE TIENE 28 DIAS
  [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
  [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
  [1700, 1150, 1690, 1900, 1770, 4500, 2560], // semana 3
  [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
];

//TODO
// CREANDO UNA FUNCION REUTILIZABLE...
// CALCULAR GASTO TOTAL DE LA TERCER SEMANA

const calcularTotalPorSemana = (mat, numSemana) => {
  let fila = numSemana - 1;

  let acc = 0;
  for (let i = 0; i < mat[fila].length; i++) {
    acc += mat[fila][i];
  }
  return acc;
};

let totalSemanaTres = calcularTotalPorSemana(gastos, 3);
console.log(totalSemanaTres);


// TODO
// EN EL DIA QUE MAS SE GASTO, CUANTO FUE ?
// EN QUE DIA Y SEMANA , SE PRODUJO ESE GASTO?

let gastos2 = [
  // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
  // EL MES ES FEBRERO QUE TIENE 28 DIAS
  [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
  [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
  [1700, 1150, 1690, 1900, 1770, 4500, 2560], // semana 3
  [800, 1250, 50000, 2100, 1980, 1270, 950], // semana 4
];

// gastos ---> el mayor monto , el dia , la semana

const mayorGasto = (mat) => {
  let mayor = mat[0][0];
  let dia = 0;
  let semana = 0;

  for (let fila = 0; fila < mat.length; fila++) {
    for (let col = 0; col < mat[fila].length; col++) {
      if (mayor < mat[fila][col]) {
        mayor = mat[fila][col];
        dia = col;
        semana = fila;
      }
    }
  }

  return { monto: mayor, dia: dia, semana: semana + 1 };
};

let array = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]

const mayor = mayorGasto(gastos2);
console.log(mayor);

console.log(
  `El dia que mas se gasto fue un total de ${mayor.monto} que se produjo el dia 
  ${array[mayor.dia]} de la semana ${mayor.semana}`
);




//TODO
// CREANDO UNA FUNCION REUTILIZABLE...
// QUEREMOS SABER EL TOTAL DE LO QUE SE GASTO SUMANDO TOD´OS LOS DIAS SABADOS
// ¿COMO LO HARIAS?

//TODO
// CALCULAR EL TOTAL GASTADO DEL MES
