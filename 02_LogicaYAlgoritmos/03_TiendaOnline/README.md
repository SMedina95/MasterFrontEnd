# Reto 03 : Filtro y Orden de Productos de una Tienda Online

## 📌 Descripción

Este proyecto consiste en gestionar los datos de una tienda online aplicando los métodos de arreglos más usados en JavaScript: **filter()**, **sort()** y **map()**. Se parte de un arreglo de objetos que representan productos con nombre, precio y categoría, y se aplican transformaciones para filtrar, ordenar y extraer información útil.

## 🎯 Objetivo

Practicar los métodos de arreglos más comunes en JavaScript para manipular datos de forma funcional y eficiente.

## 📋 Instrucciones del Reto

1. Crear un arreglo de objetos con al menos 5 productos (nombre, precio, categoría).
2. Usar `filter()` para obtener los productos que cuesten menos de $100.
3. Usar `sort()` para ordenar esos productos alfabéticamente por su nombre.
4. Usar `map()` para generar un nuevo arreglo que contenga solo los nombres.
5. Mostrar los resultados de cada método en consola.
6. **(Opcional)** Incluir otros métodos como `reduce()`, `some()`, `every()`, `includes()` y `find()`.

## 🧠 Métodos Practicados

| Método | Descripción | Uso en el reto |
|--------|-------------|----------------|
| `filter()` | Filtra elementos según una condición | Obtener productos con precio < $100 |
| `sort()` | Ordena los elementos de un arreglo | Ordenar productos alfabéticamente por nombre |
| `map()` | Transforma cada elemento del arreglo | Extraer solo los nombres de los productos |
| `reduce()` | Reduce el arreglo a un único valor | Calcular el valor total del inventario |
| `some()` | Verifica si **al menos un** elemento cumple una condición | ¿Hay productos gratis? |
| `every()` | Verifica si **todos** los elementos cumplen una condición | ¿Todos cuestan más de $1? |
| `includes()` | Verifica si un valor existe en el arreglo | ¿La lista incluye "Laptop"? |
| `find()` | Devuelve el primer elemento que cumple una condición | Primer producto de "Papelería" |

## 📂 Archivos

- `tienda.js`: Contiene el arreglo de productos y la aplicación de todos los métodos.
- `index.html`: Página que muestra los resultados en el navegador.
- `README.md`: Este archivo con la documentación del reto.

## ⚙️ Cómo Ejecutar

### En la terminal (con Node.js)
```bash
node tienda.js