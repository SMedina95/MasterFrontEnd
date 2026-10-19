// ============================================
// RETO 02 (Módulo 03): CALLBACKS Y JSON
// Gestión de una Biblioteca de Libros
// ============================================

// ============================================
// DATOS INICIALES (simulando un archivo JSON)
// ============================================
let biblioteca = {
    libros: [
        {
            titulo: "Cien años de soledad",
            autor: "Gabriel García Márquez",
            genero: "Realismo mágico",
            disponible: true,
        },
        {
            titulo: "1984",
            autor: "George Orwell",
            genero: "Distopía",
            disponible: true,
        },
        {
            titulo: "El principito",
            autor: "Antoine de Saint-Exupéry",
            genero: "Fábula",
            disponible: false,
        },
    ],
};

// ============================================
// FUNCIÓN: leerDatos(callback)
// Simula la lectura de un archivo JSON
// ============================================
const leerDatos = (callback) => {
    console.log("📂 Leyendo datos del archivo...");
    setTimeout(() => {
        // Simulamos la lectura con un retraso de 1 segundo
        callback(biblioteca);
    }, 1000);
};

// ============================================
// FUNCIÓN: escribirDatos(datos, callback)
// Simula la escritura en un archivo JSON
// ============================================
const escribirDatos = (datos, callback) => {
    console.log("💾 Guardando cambios en el archivo...");
    setTimeout(() => {
        biblioteca = datos;
        console.log("✅ Cambios guardados correctamente.\n");
        if (callback) callback();
    }, 800);
};

// ============================================
// FUNCIÓN: mostrarLibros()
// Muestra todos los libros del inventario
// ============================================
const mostrarLibros = () => {
    leerDatos((datos) => {
        console.log("\n📚 ===== INVENTARIO DE LIBROS =====\n");

        if (datos.libros.length === 0) {
            console.log("   (No hay libros en la biblioteca)\n");
            return;
        }

        datos.libros.forEach((libro, index) => {
            const estado = libro.disponible ? "✅ Disponible" : "❌ Prestado";
            console.log(`   ${index + 1}. 📖 "${libro.titulo}"`);
            console.log(`      ✍️  Autor: ${libro.autor}`);
            console.log(`      🏷️  Género: ${libro.genero}`);
            console.log(`      📌 Estado: ${estado}\n`);
        });

        const disponibles = datos.libros.filter((l) => l.disponible).length;
        const prestados = datos.libros.length - disponibles;

        console.log("   -----------------------------------");
        console.log(`   Total: ${datos.libros.length} libros`);
        console.log(`   Disponibles: ${disponibles} | Prestados: ${prestados}`);
        console.log("   ===================================\n");
    });
};

// ============================================
// FUNCIÓN: agregarLibro(titulo, autor, genero, disponible)
// Agrega un nuevo libro a la biblioteca
// ============================================
const agregarLibro = (titulo, autor, genero, disponible = true) => {
    leerDatos((datos) => {
        // Validamos que no exista ya un libro con el mismo título
        const existe = datos.libros.some(
            (libro) => libro.titulo.toLowerCase() === titulo.toLowerCase()
        );

        if (existe) {
            console.log(`⚠️ Ya existe un libro con el título "${titulo}".\n`);
            return;
        }

        // Agregamos el nuevo libro
        const nuevoLibro = { titulo, autor, genero, disponible };
        datos.libros.push(nuevoLibro);

        // Simulamos la escritura
        escribirDatos(datos, () => {
            console.log(`✅ Libro agregado: "${titulo}"\n`);
        });
    });
};

// ============================================
// FUNCIÓN: actualizarDisponibilidad(titulo, nuevoEstado)
// Cambia la disponibilidad de un libro
// ============================================
const actualizarDisponibilidad = (titulo, nuevoEstado) => {
    leerDatos((datos) => {
        // Buscamos el libro por título
        const libro = datos.libros.find(
            (l) => l.titulo.toLowerCase() === titulo.toLowerCase()
        );

        if (!libro) {
            console.log(`⚠️ No se encontró el libro "${titulo}".\n`);
            return;
        }

        // Actualizamos la disponibilidad
        libro.disponible = nuevoEstado;

        // Simulamos la escritura
        escribirDatos(datos, () => {
            const estado = nuevoEstado ? "disponible" : "prestado";
            console.log(`✅ El libro "${titulo}" ahora está ${estado}.\n`);
        });
    });
};

// ============================================
// FUNCIÓN EXTRA: buscarPorGenero(genero)
// Filtra libros por género
// ============================================
const buscarPorGenero = (genero) => {
    leerDatos((datos) => {
        const resultados = datos.libros.filter(
            (l) => l.genero.toLowerCase() === genero.toLowerCase()
        );

        console.log(`\n🔍 Libros del género "${genero}":\n`);

        if (resultados.length === 0) {
            console.log("   (No se encontraron libros de ese género)\n");
            return;
        }

        resultados.forEach((libro, index) => {
            console.log(`   ${index + 1}. ${libro.titulo} - ${libro.autor}`);
        });
        console.log("");
    });
};

// ============================================
// FUNCIÓN EXTRA: eliminarLibro(titulo)
// Elimina un libro por su título
// ============================================
const eliminarLibro = (titulo) => {
    leerDatos((datos) => {
        const index = datos.libros.findIndex(
            (l) => l.titulo.toLowerCase() === titulo.toLowerCase()
        );

        if (index === -1) {
            console.log(`⚠️ No se encontró el libro "${titulo}".\n`);
            return;
        }

        datos.libros.splice(index, 1);
        escribirDatos(datos, () => {
            console.log(`🗑️ Libro "${titulo}" eliminado.\n`);
        });
    });
};

// ============================================
// SIMULACIÓN DE LA APLICACIÓN
// ============================================
console.log("📚 ===== SISTEMA DE GESTIÓN DE BIBLIOTECA =====\n");

// 1. Mostrar los libros iniciales
mostrarLibros();

// 2. Agregar un nuevo libro
setTimeout(() => {
    agregarLibro("Don Quijote de la Mancha", "Miguel de Cervantes", "Novela", true);
}, 2000);

// 3. Actualizar la disponibilidad de un libro
setTimeout(() => {
    actualizarDisponibilidad("1984", false);
}, 4500);

// 4. Mostrar los libros actualizados
setTimeout(() => {
    mostrarLibros();
}, 7000);

// 5. Buscar por género
setTimeout(() => {
    buscarPorGenero("Distopía");
}, 9000);

// 6. Agregar otro libro y luego mostrarlo
setTimeout(() => {
    agregarLibro("Fahrenheit 451", "Ray Bradbury", "Distopía", true);
}, 11000);

// 7. Mostrar el inventario final
setTimeout(() => {
    mostrarLibros();
}, 14000);