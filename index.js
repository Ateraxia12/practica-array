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

//---------------------------------------------------
// Función para generar valores dinámicamente //--array dinamico
function generarValores(numElementos) {
    let array = [];
    for (let i = 0; i < numElementos; i++) {
        array.push(Math.random() * 100); // Generar valores aleatorios entre 0 y 100
    }
    return array;
}

let arrayGenerado = generarValores(5);

console.log(arrayGenerado); 

let miarreglo = [1, 2, 3, 4, 5];//array longitud

let longitud = miarreglo.length;

console.log("La longitud del array es:", longitud);

//-----------------------------------------------
const miArray6 = [1, 2, 3, 4, 5];//array de agregar elementos
miArray6.push(6);
miArray6.push(7);

console.log(miArray6);
//------------------------------------------------array eliminar ultimo
let miArray7 = [1, 2, 3, 4, 5];

// Eliminar el último elemento del array usando pop()
let elementoEliminado = miArray7.pop();

console.log("Elemento eliminado:", elementoEliminado); 
console.log("Array después de eliminar el último elemento:", miArray7);

//-------------------------------array de agregar al inicio
let miArray8 = [2, 3, 4, 5];
// Agregar elementos al principio del array usando unshift()
miArray8.unshift(1);
miArray8.unshift(0);

console.log(miArray8);
//-------------------------array de eliminar primero
let miArray9 = [1, 2, 3, 4, 5];
// Eliminar el primer elemento del array usando shift()
let elementoEliminado2 = miArray9.shift();

console.log("Elemento eliminado:", elementoEliminado2);
console.log("Array después de eliminar el primer elemento:", miArray9);

//---------------------------------array de usando

let miArray10 = [15, 30, 35, 40, 45];

// Obtener una porción del array usando slice()
let porcionArray = miArray10.slice(1, 4);

console.log("Porción del array:", porcionArray); // Imprimirá la porción del array
console.log("Array original:", miArray10);

//-----------------------array de convertir a string
let miArray11 = ["Hola", "mundo", "cómo", "están?"];

let miString = miArray11.join(" ");

console.log(miString);

//-----------------------------array desde un índice negativo
let miArray12 = [1, 2, 3, 4, 5];
let subseccionArray = miArray12.slice(-3);

console.log("Subsección del array:", subseccionArray); 
console.log("Array original:", miArray12);

//-------------------------Array de Eliminar una porción del array sin modificar el original 

let miArray13 = [1, 2, 3, 4, 5];
let nuevaArray = miArray13.slice(0, 2).concat(miArray13.slice(3));

console.log("Nuevo array:", nuevaArray); 
console.log("Array original:", miArray13);