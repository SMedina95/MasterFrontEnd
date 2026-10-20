// ============================================
// RETO 07 (Módulo 03): INDEX PRINCIPAL
// ============================================
// Este archivo importa los planetas y los
// muestra en la consola de forma organizada.
// ============================================

// Importamos el arreglo de planetas desde planetas.js
const planetas = require("./planetas");

// ============================================
// FUNCIÓN: mostrarPlanetas()
// Recorre el arreglo y muestra la información
// ============================================
const mostrarPlanetas = () => {
    console.log("\n🚀 ===== MIS PLANETAS FAVORITOS ===== 🚀\n");
    console.log(`   Total de planetas descubiertos: ${planetas.length}\n`);

    planetas.forEach((planeta, index) => {
        console.log(`   ⭐ Planeta #${index + 1}`);
        console.log(`   🌍 Nombre: ${planeta.nombre}`);
        console.log(`   📝 Descripción: ${planeta.descripcion}`);
        console.log(`   🔭 Descubierto en: ${planeta.descubiertoEn}`);
        console.log(`   📏 Distancia a la Tierra: ${planeta.distanciaTierra}`);
        console.log(`   🪨 Tipo: ${planeta.tipo}`);
        console.log("   -----------------------------------");
    });

    console.log("\n🌟 ===== FIN DEL REPORTE ===== 🌟\n");
};

// ============================================
// BONUS: Filtrar planetas por tipo
// ============================================
const mostrarPorTipo = (tipo) => {
    const filtrados = planetas.filter(
        (p) => p.tipo.toLowerCase() === tipo.toLowerCase()
    );

    console.log(`\n🔍 Planetas de tipo "${tipo}":\n`);

    if (filtrados.length === 0) {
        console.log("   (No se encontraron planetas de ese tipo)\n");
        return;
    }

    filtrados.forEach((planeta) => {
        console.log(`   🪐 ${planeta.nombre} - ${planeta.distanciaTierra}`);
    });
    console.log("");
};

// ============================================
// EJECUCIÓN
// ============================================
mostrarPlanetas();

// Si se pasa un argumento por la línea de comandos, filtramos
// Ejemplo: node index.js rocoso
const argTipo = process.argv[2];
if (argTipo) {
    mostrarPorTipo(argTipo);
}