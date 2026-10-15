// ============================================
// RETO 03: FILTRO Y ORDEN DE PRODUCTOS
// ============================================
// Este programa practica los métodos de arreglos
// filter(), sort() y map(), además de algunos
// métodos opcionales como reduce(), some() y every().
// ============================================

// ============================================
// 1. Arreglo de objetos con al menos 5 productos
// ============================================
const productos = [
    { nombre: "Laptop", precio: 850, categoria: "Electrónica" },
    { nombre: "Audífonos", precio: 45, categoria: "Electrónica" },
    { nombre: "Cuaderno", precio: 15, categoria: "Papelería" },
    { nombre: "Mochila", precio: 75, categoria: "Accesorios" },
    { nombre: "Reloj", precio: 120, categoria: "Accesorios" },
    { nombre: "Bolígrafo", precio: 5, categoria: "Papelería" },
    { nombre: "Teclado", precio: 95, categoria: "Electrónica" },
    { nombre: "Botella de agua", precio: 30, categoria: "Accesorios" },
];

console.log("📦 Lista completa de productos:\n");
console.table(productos);

// ============================================
// 2. filter(): productos que cuestan menos de $100
// ============================================
const productosBaratos = productos.filter((producto) => producto.precio < 100);

console.log("\n🔍 Productos con precio menor a $100 (filter):\n");
console.table(productosBaratos);

// ============================================
// 3. sort(): ordenar alfabéticamente por nombre
// ============================================
const productosOrdenados = [...productosBaratos].sort((a, b) =>
    a.nombre.localeCompare(b.nombre)
);

console.log("\n🔤 Productos ordenados alfabéticamente (sort):\n");
console.table(productosOrdenados);

// ============================================
// 4. map(): generar un arreglo solo con los nombres
// ============================================
const nombresProductos = productosOrdenados.map((producto) => producto.nombre);

console.log("\n📝 Nombres de los productos (map):\n");
console.log(nombresProductos);

// ============================================
// 5. Encadenamiento de métodos (filter + sort + map)
// ============================================
const nombresBaratosOrdenados = productos
    .filter((p) => p.precio < 100)
    .sort((a, b) => a.nombre.localeCompare(b.nombre))
    .map((p) => p.nombre);

console.log("\n⚡ Encadenamiento (filter + sort + map):\n");
console.log(nombresBaratosOrdenados);

// ============================================
// 6. MÉTODOS OPCIONALES
// ============================================

// ---------- reduce(): calcular el valor total del inventario ----------
const valorTotal = productos.reduce((total, p) => total + p.precio, 0);

console.log("\n💰 Valor total del inventario (reduce):");
console.log(`   $${valorTotal.toFixed(2)}`);

// ---------- reduce(): contar productos por categoría ----------
const productosPorCategoria = productos.reduce((acc, p) => {
    acc[p.categoria] = (acc[p.categoria] || 0) + 1;
    return acc;
}, {});

console.log("\n📊 Productos por categoría (reduce):");
console.log(productosPorCategoria);

// ---------- some(): ¿hay algún producto gratis o con precio 0? ----------
const hayGratis = productos.some((p) => p.precio === 0);

console.log("\n🎁 ¿Hay productos gratis? (some):");
console.log(hayGratis ? "   Sí, hay al menos uno." : "   No, ninguno es gratis.");

// ---------- every(): ¿todos los productos cuestan más de $1? ----------
const todosCuestanMasDe1 = productos.every((p) => p.precio > 1);

console.log("\n💵 ¿Todos los productos cuestan más de $1? (every):");
console.log(todosCuestanMasDe1 ? "   Sí, todos." : "   No, hay productos muy baratos.");

// ---------- includes(): ¿hay algún producto llamado "Laptop"? ----------
const nombres = productos.map((p) => p.nombre);
const incluyeLaptop = nombres.includes("Laptop");

console.log("\n🔎 ¿La lista incluye 'Laptop'? (includes):");
console.log(incluyeLaptop ? "   Sí, está en la lista." : "   No, no está.");

// ---------- find(): encontrar el primer producto de categoría "Papelería" ----------
const primerPapeleria = productos.find((p) => p.categoria === "Papelería");

console.log("\n✏️ Primer producto de Papelería (find):");
console.log(primerPapeleria);

// ============================================
// RESUMEN FINAL
// ============================================
console.log("\n✅ ===== RESUMEN DE RESULTADOS =====");
console.log(`   Total de productos: ${productos.length}`);
console.log(`   Productos baratos (<$100): ${productosBaratos.length}`);
console.log(`   Nombres ordenados: ${nombresProductos.join(", ")}`);
console.log(`   Valor total del inventario: $${valorTotal.toFixed(2)}`);
console.log("=====================================\n");