# Reto 05: Crear Objeto a partir de un Libro

## 📌 Descripción

Este proyecto consiste en la creación de un objeto `libro` en JavaScript que contiene varias propiedades (título, autor, año, estado) y métodos para describirlo y gestionar su lista de capítulos. Se practican los conceptos fundamentales de **objetos** en JavaScript.

## 🎯 Objetivo

Aplicar los conceptos básicos de objetos en JavaScript, incluyendo propiedades, métodos, y la referencia `this` para acceder a los valores del propio objeto.

## 📋 Instrucciones del Reto

Cada libro debe ser un objeto con las siguientes propiedades:

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `titulo` | string | El título del libro |
| `autor` | string | El autor del libro |
| `anio` | number | El año de publicación |
| `estado` | string | Estado del libro: 'disponible' o 'prestado' |

Además, debe incluir un método `describirLibro()` que imprima algo como:

> "Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado]."

**Opcional:** Agregar una propiedad `capitulos` (array) y métodos para agregar, eliminar y mostrar capítulos.

## 🧠 Conceptos Practicados

- Sintaxis de objeto literal `{ }`
- Propiedades (clave-valor)
- Métodos de objeto (funciones dentro del objeto)
- Uso de `this` para referirse al propio objeto
- Métodos de arreglos: `.push()`, `.splice()`, `.indexOf()`, `.forEach()`
- Template literals (`` `${variable}` ``)
- Validación de datos (truthy / falsy)

## 📂 Archivos

- `libro.js`: Contiene el objeto libro con sus propiedades y métodos.
- `index.html`: Página que muestra los resultados del programa en el navegador.
- `README.md`: Este archivo con la documentación del reto.

## ⚙️ Cómo Ejecutar

### En la terminal (con Node.js)
```bash
node libro.js