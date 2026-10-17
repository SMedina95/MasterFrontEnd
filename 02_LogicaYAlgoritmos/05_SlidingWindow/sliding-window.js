// ============================================
// RETO 05 (Módulo 02): SLIDING WINDOW
// Encontrar la palabra más larga en un texto
// ============================================

// ============================================
// Función: encontrarPalabraMasLarga(texto)
// Usa la técnica Sliding Window para recorrer
// las palabras y encontrar la más larga.
// ============================================
const encontrarPalabraMasLarga = (texto) => {
    // Validación: que sea un string no vacío
    if (typeof texto !== "string" || texto.trim() === "") {
        return {
            encontrada: false,
            mensaje: "⚠️ El texto está vacío o no es válido."
        };
    }

    // 1. Dividimos el texto en palabras usando .split(" ")
    // Usamos una expresión regular para manejar múltiples espacios
    const palabras = texto.trim().split(/\s+/);

    // 2. Inicializamos la ventana con la primera palabra
    let longestWord = palabras[0];
    let longestLength = longestWord.length;

    // 3. Deslizamos la ventana por cada palabra
    for (let i = 1; i < palabras.length; i++) {
        const palabraActual = palabras[i];
        const longitudActual = palabraActual.length;

        console.log(
            `   🔍 Ventana [${i}]: "${palabraActual}" (${longitudActual} letras) vs "${longestWord}" (${longestLength} letras)`
        );

        // 4. Si la palabra actual es más larga, actualizamos
        if (longitudActual > longestLength) {
            longestWord = palabraActual;
            longestLength = longitudActual;
        }
    }

    return {
        encontrada: true,
        palabra: longestWord,
        longitud: longestLength,
        totalPalabras: palabras.length,
        mensaje: `✅ La palabra más larga es: "${longestWord}" con ${longestLength} letras.`
    };
};

// ============================================
// PRUEBAS: Ejecutamos con varios textos
// ============================================

console.log("📝 ===== BUSCADOR DE LA PALABRA MÁS LARGA =====\n");

// --- Prueba 1: Texto de ejemplo ---
const texto1 = "El rápido zorro marrón salta sobre el perro perezoso";
console.log(`📄 Texto 1: "${texto1}"\n`);
const resultado1 = encontrarPalabraMasLarga(texto1);
console.log("\n" + resultado1.mensaje + "\n");
console.log("-------------------------------------------\n");

// --- Prueba 2: Texto con palabras de igual longitud ---
const texto2 = "sol mar luz paz";
console.log(`📄 Texto 2: "${texto2}"\n`);
const resultado2 = encontrarPalabraMasLarga(texto2);
console.log("\n" + resultado2.mensaje + "\n");
console.log("-------------------------------------------\n");

// --- Prueba 3: Texto con una sola palabra ---
const texto3 = "Extraordinario";
console.log(`📄 Texto 3: "${texto3}"\n`);
const resultado3 = encontrarPalabraMasLarga(texto3);
console.log("\n" + resultado3.mensaje + "\n");
console.log("-------------------------------------------\n");

// --- Prueba 4: Texto vacío ---
const texto4 = "   ";
console.log(`📄 Texto 4: "${texto4}"\n`);
const resultado4 = encontrarPalabraMasLarga(texto4);
console.log(resultado4.mensaje + "\n");
console.log("-------------------------------------------\n");

// --- Prueba 5: Texto con signos de puntuación ---
const texto5 = "¡Hola, mundo! ¿Cómo estás hoy?";
console.log(`📄 Texto 5: "${texto5}"\n`);
const resultado5 = encontrarPalabraMasLarga(texto5);
console.log("\n" + resultado5.mensaje + "\n");
console.log("-------------------------------------------\n");

// ============================================
// BONUS: Versión que ignora signos de puntuación
// ============================================
console.log("🎁 BONUS: Versión mejorada que ignora signos de puntuación\n");

const encontrarPalabraMasLargaLimpia = (texto) => {
    if (typeof texto !== "string" || texto.trim() === "") {
        return "⚠️ Texto inválido";
    }

    const palabras = texto
        .replace(/[.,;:!?¡¿()"']/g, "") // Quitamos signos
        .trim()
        .split(/\s+/);

    return palabras.reduce(
        (masLarga, actual) => (actual.length > masLarga.length ? actual : masLarga),
        palabras[0]
    );
};

const textoBonus = "¡Hola, mundo! ¿Cómo estás hoy?";
console.log(`📄 Texto original: "${textoBonus}"`);
console.log(`✅ Palabra más larga (sin signos): "${encontrarPalabraMasLargaLimpia(textoBonus)}"\n`);