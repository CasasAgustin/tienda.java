/*
let nombre = prompt("ingrese su nombre porfavor")


if (nombre == "andres") {
    alert("andres el que viene una vez al mes ")
} else if(nombre == "roberto") {
    alert("el que te dejo el culo abierto");
}else if (nombre == "")
alert("no me jodas")

alerto ("bueno andate")


if(edad < 15){
    alert("No puedes entrar");
  }else if(edad < 18){
    alert("Puedes entrar con un adulto");
  }else{
    alert("Puedes entrar");
  }




----------------------------------

estructura del FOR (bucle)

for (desde ; hasta ; actualizacion){
codigo a repetir }

for(let i =0;i<100;i++){
    console.log("hola",i);
}

console.log("terminamos");

BREAK rompe/corta el bucle 

for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        break;
    }
  console.log(i);
}
console.log("terminamos");

CONTINUE es como un pozo que salta el numero o variable de 1 a 5 (evita el 3, cuenta : 1 2 4 5)
for(let i = 1;i <=10 ; i++){
    if(i===6){
        continue;
    }
    console.log(i);
}

console.log("terminamos");

switch es como una tecla, va viendo que es cada cosa dependiendo el valor que pongas 

let moneda = "ars";

switch(moneda){
  case "cop":
    console.log("es de colombia");
    break;

  case "ars":
    console.log("es de argentina");
    break;

  case "clp":
    console.log("es de chile");
    break;

  default:
    console.log("ingresaste una moneda diferente");
    break;
}
*/


// let elija = prompt("elija la moneda a convertir dolar o euro")
//let dolar = prompt("el valor del dolar es de $290")
// const DOLAR= 290

// if(dolar){("$valor * 290")
// alert=("")
// }
// let euro = prompt ("el valor del euro es de $300")
// const EURO= 300
// let valor = prompt("")


// let dolar;
// let euro;
// let terminamos;

// for (let )


alert("Bienvenido a nuestra pagina web!")
for(let i =1; i <=3; i++){
  if(i ===5){
    continue;
}
}
    console.log(i);
console.log("terminamos")   

let usuario = prompt("Ingrese el usuario");
while(usuario != "agustin"){
    alert("usuario incorrecto");
    usuario = prompt("Ingrese el usuario")
}
alert("Bienvenid@ Ya podes hacer tu pedido")