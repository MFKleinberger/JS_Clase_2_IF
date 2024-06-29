// Condicionales

// ESTRUCTURA IF: valuamos una condición para saber si entramos o no en el bloque de código. Nuestro bloque de código se encierra entre llaves. Para saber si ejecuta o no, utilizamos booleanos (true or false).

/*

Ejemplo genérico:

if(condicionACumplir){
    // Bloque de código a ejecutar
}

Si condicionACumplir es true, va a ejecutar // Bloque
Si condicionACumplir es false, no va a ejecutar // Bloque

*/

// if(true){
//     alert("Entró al IF");
// };

// if(false){
//     alert("Entró al IF");
// };

// let numeroIngresado = parseInt(prompt("Ingrese un número"));

// let validarOcho = numeroIngresado === 8;
// let validarDiez = numeroIngresado === 10;

// if(validarOcho){
//     alert("Ingresaste el número del Chavo");
// } else if(validarDiez){
//     alert("Ingresaste el número de Diego y Lionel");
// } else if(!numeroIngresado){
//     alert("Cancelaste el prompt");
// } else {
//     alert("Le erraste al número que quería que ingreses");
// };


/*

Ejemplo genérico:

if(condicionACumplir){
    // Bloque de código a ejecutar
} else {
    // Otro bloque
}

Si condicionACumplir es true, va a ejecutar // Bloque
Si condicionACumplir es false, no va a ejecutar // Bloque, va a ejecutar // Otro bloque

*/

// Si ponemos =, estamos haciendo ASIGNACIÓN de variable (o sea, darle valor)

// Si ponemos ==, estamos haciendo COMPARACIÓN (o sea, preguntando si eso se cumple o no, para recibir TRUE or FALSE)

// Operadores lógicos

// let pass = "profecoder";

// let ingresePass = prompt("Ingrese su contraseña");

// if(pass == ingresePass){
//     alert("Bienvenido, profesor");
// } else {
//     alert("Clave inválida");
// };

// if(pass != ingresePass){
//     alert("Clave inválida");
// } else {
//     alert("Bienvenido. Inició bien");
// };

// Operador DISTINTO != ---> Es igual al de comparación == pero reemplazamos un igual por un signo de exclamación

// Operador NOT ! ---> Cambia el valor del booleano. Es decir, NIEGA.


// "8" === 8 ????????

// $1365 == U$S 1 SIIII TRUE

// $1365 === U$S 1 NO

// let edad = (prompt("Ingrese su edad"));

// if(edad > 17){
//     alert("Podés pasar");
// } else {
//     alert("Sos menor de edad, no pasás");
// };

// Operador AND (&&), equivale a un "y" ---> Para que dos o más comparaciones unidas con && den true, TODO tiene que dar true. Es decir, si una no se cumple, ya es falso

// let usuario = prompt("Ingrese su usuario");

// let clave = prompt("Ingrese su clave");

// if(usuario === "lucascoder" && clave === "clavecoder"){
//     alert("Bienvenido, profesor Lucas (17 años de edad)");
// } else {
//     alert("CREDENCIALES INVÁLIDAS");
// };

// let edad = parseInt(prompt("Ingrese su edad. Este establecimiento acepta personas entre 18 y 30 años de edad"));

// // edad > 17 o edad >= 18 ambos funcionan con 18 o más y ambos rechazan a 17

// if(edad >= 18 && edad <= 30){
//     alert("Adelante, barriga picante");
// } else {
//     alert("Estás fuera de rango, bro");
// };

// Operador OR (||), equivale a un "o" ---> Para que dos o más comparaciones unidas con || den false, TODO tiene que dar false. Es decir, si una se cumple, ya es true

// let nombre = prompt("Ingrese su nombre").toUpperCase();

// // toUpperCase() o toLowerCase()

// if(nombre === "LUCAS"){
//     alert("HOLA LUCAS");
// };

// let color = prompt("Ingrese el color que quiera traducir").toUpperCase();

// if (color === "ROJO") {
//     alert("RED");
// } else if (color === "AZUL") {
//     alert("BLUE");
// } else if (color === "NEGRO") {
//     alert("BLACK");
// } else {
//     alert("UNKNOWN COLOR");
// };

// switch (color) {
//     case "ROJO":
//         alert("RED");
//         break;
//     case "AZUL":
//         alert("BLUE");
//         break;
//     case "VERDE":
//         alert("GREEN");
//         break;
//     default:
//         alert("UNKNOWN COLOR");
//         break;
// };

// let opcion = prompt("Ingrese la opción deseada?\n\n1. Comprar\n2. Vender\n3. Ver precios");

// switch(opcion){
//     case "1":
//         alert("VAS A COMPRAR");
//         break;
//     case "2":
//         alert("VAS A VENDER");
//         break;
//     case "3":
//         alert("VAS A VER PRECIOS");
//         break;
//     default:
//         alert("NO TENÉS ESA OPCIÓN");
//         break;
// }


/*

Tarea: desarrollar un algoritmo que solicite un número y diga si ese número:

-Es mayor a 10.
-Es par (AVERIGUAR. Pista: operador MÓDULO %)
-Es negativo.

*/

let insertNumber = parseInt(prompt("Ingrese un número para ser analizado"))

if (insertNumber >10 && insertNumber % 2 === 0){
        alert("El número ingresado es MAYOR a 10 y asimismo es PAR")

    } else if(insertNumber % 2 === 0 && insertNumber >= 0) {
        alert("El número ingresado es MAYOR o IGUAL a 0 (cero) y MENOR o IGUAL a 10 y es PAR")

    } else if(insertNumber % 2 === 0) {
        alert("El número ingresado es MENOR a 0 y es PAR")

    } else if(insertNumber >10){
            alert("El número ingresado es MAYOR a 10 y es IMPAR")
    
    } else if(insertNumber >= 0){
        alert("El número ingresado es MAYOR o IGUAL a 0 (cero) y MENOR o IGUAL a 10 y es IMPAR")
    } else{
        alert("El número ingresado es MENOR a 0 e IMPAR")
    }       

