// ============================================
// TIPOS DE DATOS EN JAVASCRIPT
// ============================================
// Este archivo muestra el tipo de dato de
// diferentes valores usando el operador typeof.
// ============================================

console.log("----- Tipos de datos básicos -----");

// 1. Número entero positivo
console.log("42 es de tipo:", typeof 42); // number

// 2. Cadena de texto (string)
console.log("'Veinticinco' es de tipo:", typeof 'Veinticinco'); // string

// 3. Número entero negativo
console.log("-666 es de tipo:", typeof -666); // number

// 4. Valor booleano verdadero
console.log("true es de tipo:", typeof true); // boolean

// 5. Número cero
console.log("0 es de tipo:", typeof 0); // number

// 6. Cadena de texto vacía
console.log("'' (cadena vacía) es de tipo:", typeof ''); // string

// 7. Valor nulo (null)
console.log("null es de tipo:", typeof null); // object (comportamiento histórico de JS)

// 8. Valor indefinido (undefined)
console.log("undefined es de tipo:", typeof undefined); // undefined

// 9. Valor booleano falso (en mayúsculas, JS lo interpreta como variable no definida)
console.log("FALSE es de tipo:", typeof FALSE); // undefined (porque FALSE no está definido)

// ============================================
// EJEMPLOS ADICIONALES
// ============================================

console.log("\n----- Ejemplos adicionales -----");

// Número decimal
console.log("3.1416 es de tipo:", typeof 3.1416); // number

// Cadena con comillas dobles
console.log('"Hola Mundo" es de tipo:', typeof "Hola Mundo"); // string

// Booleano falso (correctamente escrito)
console.log("false es de tipo:", typeof false); // boolean

// Arreglo (array)
console.log("[1, 2, 3] es de tipo:", typeof [1, 2, 3]); // object

// Objeto
console.log("{ nombre: 'Juan' } es de tipo:", typeof { nombre: 'Juan' }); // object

// Función
console.log("function() {} es de tipo:", typeof function() {}); // function

// BigInt
console.log("9007199254740991n es de tipo:", typeof 9007199254740991n); // bigint

// Symbol
console.log("Symbol('id') es de tipo:", typeof Symbol('id')); // symbol