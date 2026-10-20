# Reto 08 (Módulo 03): Adivina el Número con Vite

## 📌 Descripción

Este proyecto consiste en un juego interactivo llamado **"Adivina el Número"**, desarrollado con **Vite** y **Vanilla JavaScript**. La computadora genera un número aleatorio entre 1 y 100, y el jugador debe adivinarlo recibiendo pistas ("más alto" o "más bajo"). Se practica el manejo de eventos, la manipulación del DOM y el uso de ES Modules.

## 🎯 Objetivos

- Instalar y configurar un proyecto con Vite.
- Comprender la estructura básica de un proyecto de Vite con Vanilla JavaScript.
- Manejar eventos en JavaScript para actualizar contenido dinámico en la página.
- Utilizar ES Modules para organizar el código de manera eficiente.

## ✨ Funcionalidades

- **Generación aleatoria:** El número secreto se genera entre 1 y 100.
- **Pistas dinámicas:** Indica si el número ingresado es más alto o más bajo.
- **Contador de intentos:** Muestra cuántos intentos lleva el jugador.
- **Validación:** Verifica que el número esté entre 1 y 100.
- **Reinicio:** Permite jugar de nuevo sin recargar la página.
- **Soporte para Enter:** Permite enviar el número presionando Enter.
- **Mensajes personalizados:** Diferentes estilos para pistas, errores y aciertos.
- **Diseño responsivo:** Adaptado para móviles y escritorio.

## 🧠 Conceptos Practicados

| Concepto | Uso en el reto |
|----------|----------------|
| **Vite** | Herramienta de desarrollo y empaquetado. |
| **`npm create vite@latest`** | Crear un proyecto desde cero. |
| **`npm install`** | Instalar dependencias. |
| **`npm run dev`** | Iniciar el servidor de desarrollo. |
| **ES Modules** | `import './style.css'` en `main.js`. |
| **`Math.random()`** | Generar el número secreto. |
| **`Math.floor()`** | Redondear el número aleatorio. |
| **`addEventListener`** | Manejo de eventos (`click`, `keypress`). |
| **`parseInt()`** | Convertir el valor del input a número. |
| **`isNaN()`** | Validar que el valor sea un número. |
| **`classList`** | Agregar/quitar clases para estilos dinámicos. |
| **Manipulación del DOM** | Actualizar el mensaje y el contador de intentos. |

## 📂 Archivos

- `index.html`: Estructura del juego.
- `main.js`: Lógica del juego.
- `style.css`: Estilos visuales.
- `package.json`: Dependencias y scripts de Vite.
- `README.md`: Este archivo con la documentación.

## ⚙️ Cómo Ejecutar

### Requisitos
- Tener **Node.js** instalado (versión 14 o superior).

### Instalación
```bash
npm install