// ============================================
// RETO 02 (Módulo 02): GESTIÓN DE LISTA DE COMPRAS
// ============================================
// Este programa permite gestionar una lista de
// compras usando arreglos, objetos y ES6+.
// ============================================

// Arreglo vacío donde guardaremos los productos
const listaDeCompras = [];

// ============================================
// Función: agregarProducto(producto)
// Agrega un producto al final, evitando duplicados
// ============================================
const agregarProducto = (producto) => {
    const nombre = producto.trim();

    if (nombre === "") {
        console.log("⚠️ No puedes agregar un producto vacío.");
        return false;
    }

    if (listaDeCompras.includes(nombre)) {
        console.log(`⚠️ El producto "${nombre}" ya está en la lista.`);
        return false;
    }

    listaDeCompras.push(nombre);
    console.log(`✅ Producto agregado: "${nombre}"`);
    return true;
};

// ============================================
// Función: eliminarProducto(producto)
// Elimina un producto de la lista
// ============================================
const eliminarProducto = (producto) => {
    const nombre = producto.trim();
    const index = listaDeCompras.indexOf(nombre);

    if (index === -1) {
        console.log(`⚠️ El producto "${nombre}" no se encuentra en la lista.`);
        return false;
    }

    listaDeCompras.splice(index, 1);
    console.log(`🗑️ Producto eliminado: "${nombre}"`);
    return true;
};

// ============================================
// Función: mostrarLista()
// Imprime todos los productos de la lista
// ============================================
const mostrarLista = () => {
    console.log("\n🛒 ===== LISTA DE COMPRAS =====");

    if (listaDeCompras.length === 0) {
        console.log("   (La lista está vacía)");
        return;
    }

    listaDeCompras.forEach((producto, index) => {
        console.log(`   ${index + 1}. ${producto}`);
    });

    console.log(`\n   Total de productos: ${listaDeCompras.length}`);
    console.log("================================\n");
};

// ============================================
// FUNCIÓN EXTRA: buscarProducto(producto)
// Verifica si un producto está en la lista
// ============================================
const buscarProducto = (producto) => {
    const existe = listaDeCompras.includes(producto.trim());
    console.log(
        existe
            ? `🔍 "${producto}" SÍ está en la lista.`
            : `🔍 "${producto}" NO está en la lista.`
    );
    return existe;
};

// ============================================
// FUNCIÓN EXTRA: limpiarLista()
// Elimina todos los productos
// ============================================
const limpiarLista = () => {
    listaDeCompras.length = 0;
    console.log("🧹 Lista de compras vaciada.");
};

// ============================================
// PRUEBAS: Ejecutamos el sistema paso a paso
// ============================================
console.log("🛒 Sistema de Lista de Compras\n");

// 1. Agregamos varios productos
agregarProducto("Manzanas");
agregarProducto("Pan");
agregarProducto("Leche");
agregarProducto("Huevos");
agregarProducto("Queso");

// 2. Intentamos agregar un duplicado
agregarProducto("Pan");

// 3. Intentamos agregar un producto vacío
agregarProducto("");

// 4. Mostramos la lista
mostrarLista();

// 5. Buscamos un producto
buscarProducto("Leche");
buscarProducto("Tomates");

// 6. Eliminamos un producto
eliminarProducto("Leche");

// 7. Intentamos eliminar uno que no existe
eliminarProducto("Tomates");

// 8. Mostramos la lista actualizada
mostrarLista();

// 9. Limpiamos la lista
limpiarLista();

// 10. Mostramos la lista final (vacía)
mostrarLista();