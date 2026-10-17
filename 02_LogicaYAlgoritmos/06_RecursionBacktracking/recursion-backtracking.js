// ============================================
// RETO 06 (Módulo 02): RECURSIÓN Y BACKTRACKING
// Buscar un regalo en una lista usando recursión
// ============================================

// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

// ============================================
// Función: findGift(gifts, giftName, index)
// Búsqueda recursiva de un regalo en la lista
// ============================================
function findGift(gifts, giftName, index = 0) {
    // Caso base 1: Llegamos al final de la lista sin encontrar el regalo
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }

    // Caso base 2: Encontramos el regalo en la posición actual
    if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index}.`;
    }

    // Llamada recursiva: avanzamos al siguiente índice
    return findGift(gifts, giftName, index + 1);
}

// ============================================
// PRUEBAS: Ejecutamos con diferentes regalos
// ============================================

console.log("🎁 ===== BUSCADOR DE REGALOS (RECURSIÓN) =====\n");

console.log("📋 Lista de regalos:");
gifts.forEach((gift, i) => console.log(`   ${i}. ${gift}`));
console.log("\n");

// --- Prueba 1: Buscar "Lego" (está en la lista) ---
let giftToFind = "Lego";
console.log(`🔎 Buscando: "${giftToFind}"`);
console.log(`   → ${findGift(gifts, giftToFind)}\n`);

// --- Prueba 2: Buscar "Camión" (no está en la lista) ---
giftToFind = "Camión";
console.log(`🔎 Buscando: "${giftToFind}"`);
console.log(`   → ${findGift(gifts, giftToFind)}\n`);

// --- Prueba 3: Buscar "Muñeca" (primera posición) ---
giftToFind = "Muñeca";
console.log(`🔎 Buscando: "${giftToFind}"`);
console.log(`   → ${findGift(gifts, giftToFind)}\n`);

// --- Prueba 4: Buscar "Pelota" (última posición) ---
giftToFind = "Pelota";
console.log(`🔎 Buscando: "${giftToFind}"`);
console.log(`   → ${findGift(gifts, giftToFind)}\n`);

// --- Prueba 5: Buscar "Rompecabezas" (posición intermedia) ---
giftToFind = "Rompecabezas";
console.log(`🔎 Buscando: "${giftToFind}"`);
console.log(`   → ${findGift(gifts, giftToFind)}\n`);

// ============================================
// BONUS: Mostrar el rastro de la recursión
// ============================================
console.log("🎁 BONUS: Rastro de la recursión paso a paso\n");

const findGiftConRastro = (gifts, giftName, index = 0) => {
    const indent = "  ".repeat(index);
    console.log(`${indent}→ Llamada con index = ${index} (buscando "${giftName}" en "${gifts[index] || "—"}")`);

    // Caso base 1: fin de la lista
    if (index === gifts.length) {
        console.log(`${indent}✖ Fin de la lista. No encontrado.`);
        return `${giftName} no está en la lista.`;
    }

    // Caso base 2: encontrado
    if (gifts[index] === giftName) {
        console.log(`${indent}✔ ¡Encontrado en la posición ${index}!`);
        return `${giftName} está en la posición ${index}.`;
    }

    // Recursión
    return findGiftConRastro(gifts, giftName, index + 1);
};

console.log(`🔎 Buscando "Lego" con rastro:\n`);
console.log(`   → Resultado: ${findGiftConRastro(gifts, "Lego")}\n`);

console.log(`🔎 Buscando "Camión" con rastro:\n`);
console.log(`   → Resultado: ${findGiftConRastro(gifts, "Camión")}\n`);