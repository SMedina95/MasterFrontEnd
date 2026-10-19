// ============================================
// RETO 08 (Módulo 02): GESTOR DE NOTAS PERSONALES
// ============================================
// Este programa permite crear, listar y eliminar
// notas guardadas en un archivo JSON usando el
// módulo 'fs' de Node.js.
// ============================================

const fs = require("fs");

// Ruta del archivo de notas
const filePath = "./notas.json";

// ============================================
// Función: leerNotas()
// Lee el archivo JSON y devuelve un arreglo de notas.
// Si el archivo no existe, devuelve un arreglo vacío.
// ============================================
const leerNotas = () => {
    if (!fs.existsSync(filePath)) return [];
    const data = fs.readFileSync(filePath, "utf8");
    try {
        return JSON.parse(data);
    } catch (error) {
        console.warn("⚠️ El archivo notas.json estaba corrupto. Se reinicia.");
        return [];
    }
};

// ============================================
// Función: guardarNotas(notas)
// Sobrescribe el archivo JSON con el arreglo de notas.
// ============================================
const guardarNotas = (notas) => {
    fs.writeFileSync(filePath, JSON.stringify(notas, null, 2), "utf8");
};

// ============================================
// Función: agregarNota(titulo, contenido)
// Agrega una nueva nota al archivo.
// ============================================
const agregarNota = (titulo, contenido) => {
    if (!titulo || !contenido) {
        console.log("⚠️ El título y el contenido son obligatorios.");
        return;
    }

    const notas = leerNotas();

    // Verificamos que no exista ya una nota con el mismo título
    if (notas.some((nota) => nota.titulo === titulo)) {
        console.log(`⚠️ Ya existe una nota con el título "${titulo}".`);
        return;
    }

    const nuevaNota = { titulo, contenido };
    notas.push(nuevaNota);
    guardarNotas(notas);
    console.log(`✅ Nota agregada con éxito: "${titulo}"`);
};

// ============================================
// Función: listarNotas()
// Lee el archivo y muestra todas las notas en consola.
// ============================================
const listarNotas = () => {
    const notas = leerNotas();

    if (notas.length === 0) {
        console.log("📭 No hay notas guardadas.");
        return;
    }

    console.log(`\n📒 ===== NOTAS GUARDADAS (${notas.length}) =====`);
    notas.forEach((nota, index) => {
        console.log(`\n   ${index + 1}. 📌 ${nota.titulo}`);
        console.log(`      ${nota.contenido}`);
    });
    console.log("\n====================================\n");
};

// ============================================
// Función: eliminarNota(titulo)
// Elimina una nota por su título.
// ============================================
const eliminarNota = (titulo) => {
    const notas = leerNotas();

    if (notas.length === 0) {
        console.log("📭 No hay notas para eliminar.");
        return;
    }

    const notasRestantes = notas.filter((nota) => nota.titulo !== titulo);

    if (notasRestantes.length === notas.length) {
        console.log(`⚠️ No se encontró ninguna nota con el título "${titulo}".`);
        return;
    }

    guardarNotas(notasRestantes);
    console.log(`🗑️ Nota con título "${titulo}" eliminada.`);
};

// ============================================
// EJECUCIÓN DE EJEMPLO
// ============================================
console.log("📝 ===== GESTOR DE NOTAS PERSONALES =====\n");

// 1. Agregamos algunas notas
agregarNota("Compras", "Comprar leche y pan.");
agregarNota("Trabajo", "Terminar reporte semanal.");
agregarNota("Estudio", "Repasar los conceptos de Node.js y fs.");

// 2. Intentamos agregar una nota duplicada
agregarNota("Compras", "Otra lista de compras.");

// 3. Listamos todas las notas
listarNotas();

// 4. Eliminamos una nota
eliminarNota("Compras");

// 5. Intentamos eliminar una que no existe
eliminarNota("Inexistente");

// 6. Listamos de nuevo para ver el resultado
listarNotas();

// 7. Agregamos una nota más
agregarNota("Recordatorio", "Llamar al dentista el viernes.");

// 8. Listamos por última vez
listarNotas();