// ============================================
// RETO 04: SEGUIMIENTO DE LIBROS
// ============================================
// Este programa permite llevar un registro de
// los libros leídos usando funciones y arreglos.
// ============================================

// Arreglo global donde se guardarán los libros leídos
const librosLeidos = [];

// ============================================
// FUNCIÓN: agregarLibro(titulo)
// Añade un libro al arreglo librosLeidos
// ============================================
function agregarLibro(titulo) {
    // Validamos que el título sea un string válido (truthy)
    if (titulo && typeof titulo === "string" && titulo.trim() !== "") {
        librosLeidos.push(titulo.trim());
        console.log(`✅ Libro agregado: "${titulo}"`);
    } else {
        console.log(`⚠️ Título inválido: "${titulo}". Debe ser una cadena no vacía.`);
    }
}

// ============================================
// FUNCIÓN: mostrarLibrosLeidos()
// Imprime todos los libros que has leído
// ============================================
function mostrarLibrosLeidos() {
    console.log("\n📚 Libros leídos hasta ahora:");

    if (librosLeidos.length === 0) {
        console.log("   (Aún no has agregado ningún libro)");
        return;
    }

    // Recorremos el arreglo con forEach y mostramos el índice
    librosLeidos.forEach((libro, index) => {
        console.log(`   ${index + 1}. ${libro}`);
    });

    console.log(`\nTotal de libros leídos: ${librosLeidos.length}`);
}

// ============================================
// FUNCIÓN EXTRA: eliminarLibro(titulo)
// Elimina un libro del arreglo por su título
// ============================================
function eliminarLibro(titulo) {
    const index = librosLeidos.indexOf(titulo);
    if (index !== -1) {
        librosLeidos.splice(index, 1);
        console.log(`🗑️ Libro eliminado: "${titulo}"`);
    } else {
        console.log(`⚠️ No se encontró el libro: "${titulo}"`);
    }
}

// ============================================
// PRUEBAS: Ejecutamos el sistema paso a paso
// ============================================
console.log("===== Sistema de Seguimiento de Libros =====\n");

// Agregamos varios libros
agregarLibro("Cien años de soledad");
agregarLibro("El principito");
agregarLibro("Don Quijote de la Mancha");
agregarLibro("1984");
agregarLibro("Crónica de una muerte anunciada");

// Mostramos la lista
mostrarLibrosLeidos();

// Probamos con un título inválido
agregarLibro("");
agregarLibro(null);

// Eliminamos un libro
eliminarLibro("El principito");

// Mostramos la lista actualizada
mostrarLibrosLeidos();

// Mostramos la lista vacía (opcional, para probar)
console.log("\n===== Prueba con lista vacía =====");
const librosLeidosBackup = [...librosLeidos]; // Respaldamos
librosLeidos.length = 0; // Vaciamos el arreglo
mostrarLibrosLeidos();
librosLeidos.push(...librosLeidosBackup); // Restauramos