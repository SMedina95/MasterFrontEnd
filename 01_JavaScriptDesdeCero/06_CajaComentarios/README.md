# Reto 06: Caja de Comentarios (Simple Comment Box)

## 📌 Descripción

Este proyecto consiste en una página web interactiva que permite a los usuarios escribir comentarios, verlos aparecer debajo del formulario, y eliminarlos si lo desean. Cada comentario incluye la fecha y hora de publicación.

## 🎯 Objetivo

Aplicar los conceptos básicos de manipulación del DOM con JavaScript, manejo de eventos de formularios y modificación dinámica del contenido de una página.

## 📋 Instrucciones del Reto

- Crear una página con un formulario que tenga un campo de texto y un botón para agregar el comentario.
- Cuando el usuario haga clic en el botón, el comentario debe aparecer debajo del formulario.
- **Opcional:** Agregar un botón para eliminar comentarios.
- **Opcional:** Mostrar la fecha y hora de publicación.

## 🧠 Conceptos Practicados

- Selección de elementos del DOM: `getElementById`, `querySelector`, `querySelectorAll`
- Manejo de eventos: `addEventListener("submit", ...)` y `addEventListener("click", ...)`
- Prevención del comportamiento por defecto: `event.preventDefault()`
- Creación dinámica de elementos: `document.createElement()`, `appendChild()`
- Eliminación de elementos: `.remove()`
- Manipulación de contenido: `.innerHTML`, `.textContent`
- Uso de atributos personalizados: `dataset`
- Métodos de arreglos: `.push()`, `.filter()`
- Formateo de fechas: `toLocaleDateString()`
- Template literals (`` `${variable}` ``)

## 📂 Archivos

- `index.html`: Estructura de la página (formulario + contenedor de comentarios).
- `styles.css`: Estilos visuales modernos y responsivos.
- `app.js`: Lógica de la aplicación (agregar, mostrar, eliminar comentarios).
- `README.md`: Este archivo con la documentación del reto.

## ⚙️ Cómo Ejecutar

### En el navegador (GitHub Pages)
Visita la URL del proyecto en GitHub Pages y haz clic en el reto **"Caja de Comentarios"**.

### En tu equipo local
Abre el archivo `index.html` con tu navegador (doble clic o clic derecho → "Abrir con").

## ✨ Funcionalidades

1. **Agregar comentarios:** Escribe un texto y presiona el botón "Agregar Comentario".
2. **Ver comentarios:** Aparecen debajo del formulario con la fecha y hora.
3. **Eliminar comentarios:** Haz clic en el ícono 🗑️ para eliminar un comentario.
4. **Contador dinámico:** El número total de comentarios se actualiza automáticamente.
5. **Mensaje vacío:** Cuando no hay comentarios, se muestra un mensaje invitando a escribir el primero.
6. **Validación:** No se permiten comentarios vacíos.

## 💡 Aprendizaje

Gracias a este reto, comprendí cómo manipular el DOM de forma dinámica: crear elementos, agregarlos a la página y eliminarlos. También reforcé el manejo de eventos de formularios con `addEventListener` y `event.preventDefault()`, y aprendí a usar `dataset` para asociar información a los elementos. Es un ejemplo muy claro de cómo JavaScript puede hacer que una página web sea interactiva.

