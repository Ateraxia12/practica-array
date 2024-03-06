let miArray = []; // Array vacío

let miArray2 = [1, 2, 3, 4]; // Array con elementos segunda rama

let miArray3 = [1, "Stiven", false, {nombre: "anyi"}, ["verde", "verde", "verde"]];

let miArray4 = new Array(10, 27, 31, 43, 56);//array constructor

let arraySecuencia = Array.from({ length: 15 }, (_, index) => index + 1);//array secuencia numérica

let array5 = new Array(5).fill(0);//array de repeticion

let cadena = "Hola, cómo estás? Espero que bien.";//array de cadena texto

let arrayDePalabras = cadena.split(" ");

console.log(arrayDePalabras);

let array1 = [1, 2, 3];//array combinado 
let array2 = [4, 5, 6];

let arrayCombinado = [...array1, ...array2];

console.log(arrayCombinado);

let arrayConRepetidos = [1, 2, 2, 3, 4, 4, 5];//array repetitidos

let conjunto = new Set(arrayConRepetidos);

let arraySinRepetidos = [...conjunto];

console.log(arraySinRepetidos); 