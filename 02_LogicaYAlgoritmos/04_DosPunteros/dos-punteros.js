// ============================================
// RETO 04: ALGORITMO DE LOS DOS PUNTEROS
// ============================================
// Encuentra el primer par de invitados consecutivos
// cuyos nombres comienzan con la misma letra.
// ============================================

// ============================================
// Función: encontrarParejaInvitados(invitados)
// Usa dos punteros para recorrer el arreglo
// ============================================
const encontrarParejaInvitados = (invitados) => {
    // Validación: necesitamos al menos 2 invitados
    if (!Array.isArray(invitados) || invitados.length < 2) {
        return {
            encontrado: false,
            mensaje: "Se necesitan al menos 2 invitados para encontrar una pareja."
        };
    }

    // Dos punteros: uno en el inicio (i) y otro en el siguiente (j)
    let i = 0;
    let j = 1;

    // Recorremos mientras j no se salga del arreglo
    while (j < invitados.length) {
        const nombreA = invitados[i];
        const nombreB = invitados[j];

        // Obtenemos la inicial de cada nombre (en mayúscula)
        const inicialA = nombreA.charAt(0).toUpperCase();
        const inicialB = nombreB.charAt(0).toUpperCase();

        console.log(`   🔍 Comparando "${nombreA}" (${inicialA}) con "${nombreB}" (${inicialB})`);

        if (inicialA === inicialB) {
            return {
                encontrado: true,
                pareja: [nombreA, nombreB],
                inicial: inicialA,
                posicion: i,
                mensaje: `✅ ¡Encontrados! "${nombreA}" y "${nombreB}" pueden sentarse juntos (ambos empiezan con "${inicialA}").`
            };
        }

        // Si no coinciden, avanzamos ambos punteros
        i++;
        j++;
    }

    // Si llegamos al final sin encontrar pareja
    return {
        encontrado: false,
        mensaje: "❌ No se encontró ningún par de invitados con la misma inicial."
    };
};

// ============================================
// PRUEBAS: Ejecutamos con varias listas
// ============================================

// --- Prueba 1: Lista ordenada con pareja ---
console.log("🧪 Prueba 1: Lista ordenada con pareja\n");
const invitados1 = [
    "Ana",
    "Andrés",
    "Beatriz",
    "Carlos",
    "Daniela"
];
console.log("📋 Lista de invitados:");
invitados1.forEach((n, i) => console.log(`   ${i + 1}. ${n}`));
console.log("\n🔎 Buscando el primer par con la misma inicial...\n");

const resultado1 = encontrarParejaInvitados(invitados1);
console.log("\n" + resultado1.mensaje + "\n");

// --- Prueba 2: Lista sin pareja ---
console.log("🧪 Prueba 2: Lista sin pareja\n");
const invitados2 = [
    "Ana",
    "Beatriz",
    "Carlos",
    "Daniela",
    "Elena"
];
console.log("📋 Lista de invitados:");
invitados2.forEach((n, i) => console.log(`   ${i + 1}. ${n}`));
console.log("\n🔎 Buscando el primer par con la misma inicial...\n");

const resultado2 = encontrarParejaInvitados(invitados2);
console.log("\n" + resultado2.mensaje + "\n");

// --- Prueba 3: Lista con pareja al final ---
console.log("🧪 Prueba 3: Lista con pareja al final\n");
const invitados3 = [
    "Ana",
    "Beatriz",
    "Carlos",
    "Daniela",
    "Elena",
    "Fernanda",
    "Gabriel",
    "Gabriela"
];
console.log("📋 Lista de invitados:");
invitados3.forEach((n, i) => console.log(`   ${i + 1}. ${n}`));
console.log("\n🔎 Buscando el primer par con la misma inicial...\n");

const resultado3 = encontrarParejaInvitados(invitados3);
console.log("\n" + resultado3.mensaje + "\n");

// --- Prueba 4: Lista vacía o con un solo invitado ---
console.log("🧪 Prueba 4: Lista con un solo invitado\n");
const invitados4 = ["Ana"];
const resultado4 = encontrarParejaInvitados(invitados4);
console.log(resultado4.mensaje + "\n");

// ============================================
// BONUS: Encontrar TODAS las parejas posibles
// ============================================
console.log("🎁 BONUS: Encontrar TODAS las parejas con la misma inicial\n");

const encontrarTodasLasParejas = (invitados) => {
    const parejas = [];
    for (let i = 0; i < invitados.length - 1; i++) {
        const inicialA = invitados[i].charAt(0).toUpperCase();
        const inicialB = invitados[i + 1].charAt(0).toUpperCase();
        if (inicialA === inicialB) {
            parejas.push([invitados[i], invitados[i + 1]]);
        }
    }
    return parejas;
};

const todasLasParejas = encontrarTodasLasParejas(invitados3);
if (todasLasParejas.length > 0) {
    todasLasParejas.forEach(([a, b], i) => {
        console.log(`   ${i + 1}. ${a} ↔ ${b}`);
    });
} else {
    console.log("   No se encontraron parejas.");
}
console.log("");