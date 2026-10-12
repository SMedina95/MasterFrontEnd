# Reto 07: Generador de Contraseñas Seguras

## 📌 Descripción

Este proyecto consiste en un generador de contraseñas seguras inspirado en el reto de Frontend Mentor. Permite al usuario personalizar la longitud y los tipos de caracteres que desea incluir (mayúsculas, minúsculas, números y símbolos), y muestra un indicador visual de la fuerza de la contraseña generada.

## 🎯 Objetivo

Aplicar los conceptos básicos del DOM con JavaScript para crear una herramienta interactiva que genere contraseñas seguras, practicando el manejo de eventos, la manipulación de elementos HTML y el uso de APIs del navegador como `crypto.getRandomValues` y `navigator.clipboard`.

## ✨ Funcionalidades

- Generar contraseñas de entre 4 y 30 caracteres.
- Incluir/excluir mayúsculas, minúsculas, números y símbolos.
- Indicador visual de fuerza (Too Weak, Weak, Medium, Strong).
- Copiar la contraseña al portapapeles con un clic.
- Generación inicial automática al cargar la página.
- Uso de `crypto.getRandomValues` para mayor seguridad.

## 🧠 Conceptos Practicados

- Selección de elementos del DOM
- Manejo de eventos: `addEventListener` para `input`, `click`
- Lectura de valores: `.value`, `.checked`
- Actualización dinámica del DOM: `.textContent`, `.setAttribute`
- Uso de atributos personalizados: `data-nivel`
- API del navegador: `crypto.getRandomValues` y `navigator.clipboard`
- Estilos dinámicos con CSS basados en atributos

## 📂 Archivos

- `index.html`: Estructura del generador.
- `styles.css`: Estilos con tema oscuro similar al diseño original.
- `app.js`: Lógica de la aplicación.
- `README.md`: Este archivo.

## ⚙️ Cómo Ejecutar

### En el navegador
Abre el archivo `index.html` en tu navegador o visita la versión publicada en GitHub Pages.

## 💡 Aprendizaje

Gracias a este reto, comprendí cómo construir una herramienta interactiva que combina HTML, CSS y JavaScript. Aprendí a usar `crypto.getRandomValues` para generar números aleatorios de forma segura, y `navigator.clipboard` para copiar al portapapeles. También reforcé el manejo de eventos y la actualización dinámica del DOM.
