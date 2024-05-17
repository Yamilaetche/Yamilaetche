"use strict";
/*Dado el siguiente arreglo
[4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cuál es el número
más grande del arreglo e imprimirlo por consola
- Almacenar el número más grande en una variable
global y pasarlo a una función para determinar si el
número es par o impar*/
Object.defineProperty(exports, "__esModule", { value: true });
var arreglo = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
var nroMax = arreglo[0];
//Encontrar el número mayor
for (var _i = 0, arreglo_1 = arreglo; _i < arreglo_1.length; _i++) {
    var num = arreglo_1[_i];
    if (num > nroMax) {
        nroMax = num;
    }
}
console.log("el numero mas grande es: ", nroMax);
//Determinamos si el número es par o impar
function parOImpar(num) {
    return num % 2 === 0 ? "par" : "impar";
}
console.log("El numero mayor es: ", nroMax, "Y es ", (parOImpar(nroMax)));
