# Reto 09: Biblioteca CRUD

## 📌 Descripción

Este proyecto consiste en un sistema de gestión de libros (CRUD: Crear, Leer, Actualizar, Eliminar) que permite al usuario agregar, editar y eliminar libros, además de administrar sus capítulos. Cada libro es un objeto con propiedades específicas y métodos para describirse y gestionar sus capítulos.

## 🎯 Objetivo

Aplicar los conceptos básicos del DOM con JavaScript para construir una aplicación interactiva que gestione una colección de libros, practicando la creación de objetos, el manejo de eventos, la manipulación dinámica del DOM y la persistencia de datos con `localStorage`.

## 📋 Estructura de cada Libro

Cada libro es un objeto con las siguientes propiedades:

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `id` | number | Identificador único |
| `titulo` | string | Título del libro |
| `autor` | string | Autor del libro |
| `anio` | number | Año de publicación |
| `estado` | string | `"disponible"` o `"prestado"` |
| `capitulos` | array | Lista de capítulos del libro |

### Métodos

- `describirLibro()`: Devuelve un string como `"Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado]."`
- `agregarCapitulo(capitulo)`: Añade un capítulo al arreglo `capitulos`.
- `eliminarCapitulo(index)`: Elimina un capítulo según su índice.

## ✨ Funcionalidades

- **Crear:** Agregar nuevos libros con título, autor, año y estado.
- **Leer:** Ver la lista completa de libros con su información y número de capítulos.
- **Actualizar:** Editar la información de un libro existente.
- **Eliminar:** Borrar libros con confirmación previa.
- **Gestionar capítulos:** Abrir un modal para agregar o eliminar capítulos de cada libro.
- **Buscar:** Filtrar libros por título o autor.
- **Persistencia:** Los datos se guardan en `localStorage` y persisten al recargar la página.
- **Notificaciones:** Mensajes visuales al realizar acciones.
- **Contador dinámico:** Muestra el número total de libros (o filtrados).

## 🧠 Conceptos Practicados

- Objetos literales con propiedades y métodos
- Arreglos de objetos
- Métodos de arreglos: `.push()`, `.filter()`, `.find()`, `.splice()`, `.forEach()`
- Manipulación del DOM: `createElement`, `appendChild`, `innerHTML`
- Manejo de eventos: `submit`, `click`, `input`
- Formularios y validación
- `localStorage` con `JSON.stringify()` y `JSON.parse()`
- Modales
- Uso de `dataset` para asociar datos a elementos
- Template literals y formateo dinámico

## 📂 Archivos

- `index.html`: Estructura de la aplicación (formulario, lista de libros, modal).
- `styles.css`: Estilos visuales modernos y responsivos.
- `app.js`: Lógica completa del CRUD y la gestión de capítulos.
- `README.md`: Este archivo.

## ⚙️ Cómo Ejecutar

### En el navegador
Abre el archivo `index.html` o visita la versión publicada en GitHub Pages.

## 💡 Aprendizaje

Gracias a este reto, comprendí cómo construir una aplicación CRUD completa con JavaScript, usando objetos para modelar entidades del mundo real (libros) y arreglos para gestionar colecciones. También reforcé el uso de `localStorage` para persistir datos, y el manejo de modales para funcionalidades secundarias como la gestión de capítulos.

