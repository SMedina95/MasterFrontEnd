# Reto 05 (Módulo 03): Formulario de Registro de Eventos

## 📌 Descripción

Este proyecto consiste en un formulario web para el registro de asistentes a un evento. Permite capturar datos personales (nombre, correo, teléfono), seleccionar intereses, elegir un horario, seleccionar una fecha y hora, y opcionalmente subir un documento de identificación. Incluye validaciones en tiempo real y mensajes de error personalizados.

## 🎯 Objetivo

- Capturar datos del usuario (nombre, correo, teléfono).
- Seleccionar intereses con casillas de verificación.
- Elegir horario con botones de radio.
- Seleccionar fecha y hora del evento.
- Subir un archivo opcional (identificación).
- Validar los datos antes de enviarlos.

## ✨ Validaciones Implementadas

### Validaciones básicas (del código original)
1. Todos los campos obligatorios deben estar llenos.
2. Al menos un interés seleccionado.
3. Un horario seleccionado.

### Validaciones adicionales (agregadas)
4. **Nombre:** Solo letras y espacios, mínimo 3 caracteres.
5. **Correo:** Formato válido (usuario@dominio.com).
6. **Teléfono:** Exactamente 10 dígitos numéricos.
7. **Fecha:** No puede ser una fecha en el pasado.
8. **Hora:** Debe estar entre las 08:00 y las 20:00.
9. **Archivo:** Máximo 2 MB y solo formatos PDF, JPG, JPEG, PNG.

## 🧠 Conceptos Practicados

| Concepto | Uso en el reto |
|----------|----------------|
| **Captura de datos** | `document.getElementById().value` |
| **Checkboxes** | `querySelectorAll('input[name="intereses"]:checked')` |
| **Radios** | `querySelector('input[name="horario"]:checked')` |
| **Validación con regex** | Patrones para nombre, correo, teléfono. |
| **Validación de fechas** | Comparación con `new Date()`. |
| **Validación de archivos** | Tamaño (`file.size`) y extensión (`file.name`). |
| **Eventos** | `submit`, `blur`, `change`. |
| **`preventDefault()`** | Evitar el envío automático del formulario. |
| **Manipulación del DOM** | Mostrar mensajes de error y éxito. |
| **`Array.from()`** | Convertir `NodeList` a arreglo. |
| **`scrollIntoView()`** | Llevar al usuario al primer error. |

## 📂 Archivos

- `index.html`: Estructura del formulario.
- `styles.css`: Estilos visuales modernos.
- `app.js`: Lógica de validación y manejo del formulario.
- `README.md`: Este archivo con la documentación.

## ⚙️ Cómo Ejecutar

### En el navegador (GitHub Pages)
Visita la URL del proyecto en GitHub Pages y haz clic en el reto **"Registro de Eventos"**.

### En tu equipo local
Abre el archivo `index.html` en tu navegador.

## 🧪 Cómo probarlo

1. Intenta enviar el formulario vacío → verás errores en cada campo.
2. Escribe un nombre con números → error.
3. Escribe un correo inválido → error.
4. Escribe un teléfono de menos de 10 dígitos → error.
5. Selecciona una fecha pasada → error.
6. Selecciona una hora fuera del rango (ej. 22:00) → error.
7. Sube un archivo mayor a 2 MB → error.
8. Completa todo correctamente → verás el mensaje de éxito con el resumen.

## 💡 Aprendizaje

Gracias a este reto, comprendí la importancia de validar los datos antes de enviarlos, tanto en el frontend como en el backend. Aprendí a usar expresiones regulares para validar formatos, a comparar fechas y a validar archivos. También reforcé el manejo de eventos (`submit`, `blur`, `change`) y la manipulación del DOM para mostrar mensajes de error y éxito de forma clara para el usuario.

## 📅 Fecha

Octubre 2026