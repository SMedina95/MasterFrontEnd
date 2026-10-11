// ============================================
// RETO 05: CREAR OBJETO A PARTIR DE UN LIBRO
// ============================================
// Este programa crea un objeto "libro" con
// propiedades y métodos para describirlo y
// gestionar sus capítulos.
// ============================================

// Creamos el objeto libro con la sintaxis de objeto literal
const libro = {
    // Propiedades requeridas
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anio: 1967,
    estado: "disponible",

    // Propiedad opcional: lista de capítulos
    capitulos: [
        "Capítulo 1: Macondo",
        "Capítulo 2: José Arcadio Buendía",
        "Capítulo 3: La peste del insomnio"
    ],

    // ============================================
    // MÉTODO: describirLibro()
    // Imprime la información básica del libro
    // ============================================
    describirLibro: function () {
        console.log(`📖 Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    },

    // ============================================
    // MÉTODOS OPCIONALES PARA GESTIONAR CAPÍTULOS
    // ============================================
    agregarCapitulo: function (capitulo) {
        if (capitulo && typeof capitulo === "string" && capitulo.trim() !== "") {
            this.capitulos.push(capitulo.trim());
            console.log(`✅ Capítulo agregado: "${capitulo}"`);
        } else {
            console.log(`⚠️ Capítulo inválido: "${capitulo}"`);
        }
    },

    eliminarCapitulo: function (capitulo) {
        const index = this.capitulos.indexOf(capitulo);
        if (index !== -1) {
            this.capitulos.splice(index, 1);
            console.log(`🗑️ Capítulo eliminado: "${capitulo}"`);
        } else {
            console.log(`⚠️ No se encontró el capítulo: "${capitulo}"`);
        }
    },

    mostrarCapitulos: function () {
        console.log(`\n📚 Capítulos de "${this.titulo}":`);
        if (this.capitulos.length === 0) {
            console.log("   (No hay capítulos registrados)");
            return;
        }
        this.capitulos.forEach((cap, index) => {
            console.log(`   ${index + 1}. ${cap}`);
        });
    }
};

// ============================================
// PRUEBAS: Ejecutamos los métodos del objeto
// ============================================
console.log("===== Sistema de Libro =====\n");

// 1. Describimos el libro
libro.describirLibro();

// 2. Mostramos los capítulos iniciales
libro.mostrarCapitulos();

// 3. Agregamos un nuevo capítulo
libro.agregarCapitulo("Capítulo 4: Los sueños premonitorios");

// 4. Intentamos agregar un capítulo inválido
libro.agregarCapitulo("");

// 5. Eliminamos un capítulo
libro.eliminarCapitulo("Capítulo 2: José Arcadio Buendía");

// 6. Mostramos los capítulos actualizados
libro.mostrarCapitulos();

// 7. Cambiamos el estado del libro
libro.estado = "prestado";
console.log("\n🔄 Cambiando el estado del libro...");
libro.describirLibro();