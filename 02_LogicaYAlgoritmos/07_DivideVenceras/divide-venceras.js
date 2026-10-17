// ============================================
// RETO 07 (Módulo 02): DIVIDE Y VENCERÁS
// Encontrar el número máximo en un arreglo
// ============================================

// ============================================
// Función: findMax(arr)
// Usa el enfoque Divide and Conquer para
// encontrar el número máximo en un arreglo.
// ============================================
function findMax(arr) {
    // Caso base 1: arreglo vacío (no debería ocurrir si validamos antes)
    if (arr.length === 0) {
        return null;
    }

    // Caso base 2: un solo elemento (el máximo es él mismo)
    if (arr.length === 1) {
        return arr[0];
    }

    // Dividir: calcular el punto medio y partir el arreglo en dos mitades
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Conquistar: llamada recursiva para ambas mitades
    const leftMax = findMax(left);
    const rightMax = findMax(right);

    // Combinar: devolver el mayor entre leftMax y rightMax
    return Math.max(leftMax, rightMax);
}

// ============================================
// PRUEBAS: Ejecutamos con varios arreglos
// ============================================

console.log("🔢 ===== BÚSQUEDA DEL MÁXIMO (DIVIDE Y VENCERÁS) =====\n");

// --- Prueba 1: Arreglo del ejemplo ---
const numbers1 = [3, 8, 2, 10, 5, 7];
console.log(`📋 Arreglo 1: [${numbers1.join(", ")}]`);
console.log(`   → Máximo: ${findMax(numbers1)}\n`);

// --- Prueba 2: Máximo al inicio ---
const numbers2 = [100, 20, 30, 40, 50];
console.log(`📋 Arreglo 2: [${numbers2.join(", ")}]`);
console.log(`   → Máximo: ${findMax(numbers2)}\n`);

// --- Prueba 3: Máximo al final ---
const numbers3 = [1, 2, 3, 4, 5, 99];
console.log(`📋 Arreglo 3: [${numbers3.join(", ")}]`);
console.log(`   → Máximo: ${findMax(numbers3)}\n`);

// --- Prueba 4: Todos negativos ---
const numbers4 = [-10, -5, -20, -1, -8];
console.log(`📋 Arreglo 4: [${numbers4.join(", ")}]`);
console.log(`   → Máximo: ${findMax(numbers4)}\n`);

// --- Prueba 5: Un solo elemento ---
const numbers5 = [42];
console.log(`📋 Arreglo 5: [${numbers5.join(", ")}]`);
console.log(`   → Máximo: ${findMax(numbers5)}\n`);

// --- Prueba 6: Arreglo vacío ---
const numbers6 = [];
console.log(`📋 Arreglo 6: []`);
console.log(`   → Máximo: ${findMax(numbers6)}\n`);

// ============================================
// BONUS: Rastro de la recursión paso a paso
// ============================================
console.log("🎁 BONUS: Rastro de la recursión paso a paso\n");

const findMaxConRastro = (arr, nivel = 0) => {
    const indent = "  ".repeat(nivel);

    // Caso base: un solo elemento
    if (arr.length === 1) {
        console.log(`${indent}✔ Caso base: [${arr[0]}] → máximo = ${arr[0]}`);
        return arr[0];
    }

    // Dividir
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    console.log(`${indent}🔀 Dividir: [${arr.join(", ")}] → izquierda: [${left.join(", ")}], derecha: [${right.join(", ")}]`);

    // Conquistar
    const leftMax = findMaxConRastro(left, nivel + 1);
    const rightMax = findMaxConRastro(right, nivel + 1);

    // Combinar
    const max = Math.max(leftMax, rightMax);
    console.log(`${indent}🔗 Combinar: max(${leftMax}, ${rightMax}) = ${max}`);

    return max;
};

const numbersBonus = [3, 8, 2, 10, 5, 7];
console.log(`📋 Arreglo: [${numbersBonus.join(", ")}]\n`);
const maxBonus = findMaxConRastro(numbersBonus);
console.log(`\n✅ Máximo final: ${maxBonus}\n`);