# Reto 02: Gestión de Lista de Compras

## 📌 Descripción

Este proyecto consiste en un programa en JavaScript que permite gestionar una lista de compras. El usuario puede agregar productos, eliminarlos, buscarlos y ver la lista completa, evitando duplicados. Se practican conceptos fundamentales como **arreglos**, **objetos**, **funciones de flecha** y **métodos de arreglos** de ECMAScript 6+.

## 🎯 Objetivo

Aplicar los conceptos básicos de estructuras de datos sencillas (arreglos) para resolver un problema del mundo real usando JavaScript moderno (ES6+).

## 📋 Instrucciones del Reto

- Crear un arreglo vacío llamado `listaDeCompras`.
- Implementar una función `agregarProducto(producto)` que agregue un nuevo producto al final de la lista.
- Implementar una función `eliminarProducto(producto)` que elimine un producto de la lista.
- Implementar una función `mostrarLista()` que imprima todos los productos de la lista.
- Asegurar que no haya productos duplicados.
- Usar funciones de flecha y otras características de ECMAScript.

## ✨ Funcionalidades

- **Agregar productos** al final de la lista, evitando duplicados y entradas vacías.
- **Eliminar productos** por su nombre.
- **Mostrar la lista** completa numerada, con el total de productos.
- **Buscar productos** para verificar si están en la lista.
- **Limpiar la lista** por completo.

## 🧠 Conceptos Practicados

- Arreglos: `const listaDeCompras = []`
- Funciones de flecha (`=>`)
- Métodos de arreglos:
  - `.push()` para agregar
  - `.splice()` para eliminar por índice
  - `.indexOf()` para encontrar posición
  - `.includes()` para verificar existencia
  - `.forEach()` para recorrer
- Validación con condicionales (`if` / `else`)
- Template literals (`` `${variable}` ``)
- `return` para salir temprano de una función
- `.trim()` para limpiar strings

## 📂 Archivos

- `lista-compras.js`: Contiene toda la lógica del sistema y las pruebas.
- `index.html`: Página que muestra los resultados del programa en el navegador.
- `README.md`: Este archivo con la documentación del reto.

## ⚙️ Cómo Ejecutar

### En la terminal (con Node.js)
```bash
node lista-compras.js