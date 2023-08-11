// ANCHOR ---> Estructuras de control

// IF - else

// CREAR UNA FUNCION QUE ME DEVUELVA LOS PERMISOS QUE TIENE EL USUARIO

// user ---> tiene permiso a muy poco
// admin --> tiene permiso casi completo
// superAdmin ---> tiene permisio a todo

const determinarPermiso = (rolUsuario) => {
  let condicionFinal = "";

  if (rolUsuario === "superAdmin") {
    // BLOQUE NUEVO
    condicionFinal = "acceso a todo";
  } else if (rolUsuario === "admin") {
    // BLOQUE NUEVO
    condicionFinal = "acceso a casi todo";
  } else if (rolUsuario === "user") {
    // BLOQUE NUEVO
    condicionFinal = " acceso a muy poco";
  } else {
    // BLOQUE NUEVO
    condicionFinal = "no tiene acceso";
  }

  return condicionFinal;
};

let permisos = determinarPermiso("admin");
console.log(permisos);

// console.log(  determinarPermiso("superAdmin") )

// TERNARIO

// CREAR UNA FUNCION QUE DEVUELVA UN STRING
// DICIENDO SI LLEVO PARAGUAS O NO
// SI EL CLIMA ESTA LLUVIOSO ---> "si, llevalo"
// SI EL CLIMA no  ESTA LLUVIOSO ---> "no, no hace falta"

const llevoParaguas = (clima) => {
  // if(clima === "lluvioso"){
  //     return "si, llevalo"
  // }else{
  //     return "no, no hace falta"
  // }

  // TERNARIO
  // condicion ? verdadero : falso

  let x = clima === "lluvioso" ? "si, llevalo" : "no, no hace falta";
  return x;
};

let resultado = llevoParaguas("lluvioso");
console.log(resultado);

// SWITCH ---> case

// SISTEMA QUE DETERMINE EL TOTAL DEL IMPUESTO A PAGAR DEPENDIENDO LA MARCA DEL AUTO
// COMO BASE SON 100 Y DESPUES HAY QUE SUMARLE DEPENDIENDO LO SIGUIENTE
// VW --> 10
// bmw --> 20
// audi --> 30
// volvo --> 40
// reanault --> 50
// citroen ---> 60
// SI NO ES NINGUNA ESTA EXENTO

const determinarImpuesto = (marcaAuto) => {
  let impuesto = 100;

  switch (marcaAuto) {
    case "audi":
      impuesto += 10;
      break;
    case "citroen":
    case "vw":
      impuesto += 30;
      break;
    default:
      //bloque
      impuesto = 0;
  }

  return impuesto > 0
    ? impuesto
    : "Su auto esta exento de impuesto, no debe pagar nada";
};

let totalPagar = determinarImpuesto("audi");
console.log(totalPagar);

// let x = 10

// x = x + 50
// x += 50


// CREAR UNA FUNCION QUE DE ACCESO A UN RECITAL
// UNICAMENTE A LAS PERSONAS QUE TENGAN MAS DE 18 AÑOS 
// Y QUE TAMBIEN TENGAN TICKET

const determinarIngreso = (edad, siTieneTicket)=>{

    // if(edad > 18 && siTieneTicket === true){
    //     return "si puede pasar"
    // }else{
    //     return "no puede pasar"
    // }

    return  edad > 18 && siTieneTicket === true ? "si puede pasar" : "no puede pasar"

}

let puedePasar = determinarIngreso(12, true)
console.log(puedePasar)