// ============================================
// RETO 03: CLASIFICACIÓN DE FRUTAS
// ============================================
// Este programa clasifica frutas según su tipo
// y cuenta cuántas hay de cada tipo usando
// arreglos (arrays) y ciclos (loops).
// ============================================

// 1. Declaramos un arreglo con varios tipos de frutas
const frutas = [
    "manzana",
    "plátano",
    "manzana",
    "naranja",
    "plátano",
    "manzana",
    "fresa",
    "naranja",
    "kiwi",
    "plátano",
    "manzana",
    "fresa"
];

// ============================================
// SOLUCIÓN 1: Usando un ciclo FOR
// ============================================
console.log("===== Solución con ciclo FOR =====");

const conteoFor = {};

for (let i = 0; i < frutas.length; i++) {
    const fruta = frutas[i];
    if (conteoFor[fruta]) {
        conteoFor[fruta]++;
    } else {
        conteoFor[fruta] = 1;
    }
}

// Imprimimos el resultado
for (const fruta in conteoFor) {
    console.log(`${fruta}: ${conteoFor[fruta]}`);
}

// ============================================
// SOLUCIÓN 2: Usando un ciclo WHILE
// ============================================
console.log("\n===== Solución con ciclo WHILE =====");

const conteoWhile = {};
let j = 0;

while (j < frutas.length) {
    const fruta = frutas[j];
    if (conteoWhile[fruta]) {
        conteoWhile[fruta]++;
    } else {
        conteoWhile[fruta] = 1;
    }
    j++;
}

// Imprimimos el resultado
for (const fruta in conteoWhile) {
    console.log(`${fruta}: ${conteoWhile[fruta]}`);
}

// ============================================
// BONUS: Usando forEach (método de arreglos)
// ============================================
console.log("\n===== Bonus: Solución con forEach =====");

const conteoForEach = {};

frutas.forEach(fruta => {
    conteoForEach[fruta] = (conteoForEach[fruta] || 0) + 1;
});

for (const fruta in conteoForEach) {
    console.log(`${fruta}: ${conteoForEach[fruta]}`);
}