# Reto 02 (Módulo 03): Callbacks y JSON - Gestión de Biblioteca

## 📌 Descripción

Este proyecto consiste en una aplicación de consola que gestiona el inventario de una biblioteca local. Utiliza un objeto **JSON** para almacenar los datos de los libros y **callbacks** para simular operaciones asincrónicas de lectura y escritura, como si interactuara con un archivo real.

## 🎯 Objetivo

Crear una aplicación de consola que permita:

1. **Consultar libros:** Mostrar todos los libros almacenados en formato JSON.
2. **Agregar libros:** Permitir al usuario agregar un libro a la colección.
3. **Actualizar la disponibilidad:** Cambiar el estado de un libro a "prestado" o "disponible".
4. **(Opcional) Simular un archivo JSON:** Usar callbacks para simular la lectura y escritura de datos.

## ✨ Funcionalidades

- **Inventario inicial:** 3 libros de ejemplo con título, autor, género y disponibilidad.
- **Leer datos:** Simula la lectura de un archivo JSON con un retraso de 1 segundo.
- **Escribir datos:** Simula la escritura con un retraso de 0.8 segundos.
- **Mostrar libros:** Lista todos los libros con su estado y estadísticas.
- **Agregar libro:** Añade un nuevo libro (valida que no exista duplicado).
- **Actualizar disponibilidad:** Cambia el estado de un libro (prestado/disponible).
- **Buscar por género:** Filtra libros por género (funcionalidad extra).
- **Eliminar libro:** Elimina un libro por título (funcionalidad extra).

## 🧠 Conceptos Practicados

| Concepto | Uso en el reto |
|----------|----------------|
| **JSON** | Estructura de datos para almacenar los libros. |
| **Callbacks** | Funciones que se pasan como argumento y se ejecutan después de una operación asincrónica. |
| **`setTimeout`** | Simular el retraso de lectura y escritura. |
| **Objetos literales** | Modelar cada libro con sus propiedades. |
| **Métodos de arreglos** | `.forEach()`, `.push()`, `.filter()`, `.find()`, `.some()`, `.splice()`. |
| **Funciones de flecha** | Sintaxis concisa para las funciones. |

## 📂 Archivos

- `libraryManagement.js`: Lógica completa del sistema de biblioteca.
- `README.md`: Este archivo con la documentación.

## ⚙️ Cómo Ejecutar

### En la terminal (con Node.js)
```bash
node libraryManagement.js