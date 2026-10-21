# Reto 05 (Módulo 04): Adivina el Número con React

## 📌 Descripción

Este proyecto es un juego interactivo llamado **"Adivina el Número"**, desarrollado con **React**. La computadora genera un número aleatorio entre 1 y 100, y el jugador debe adivinarlo recibiendo pistas. Se aplican los conceptos de **renderizado condicional** y **composición de componentes** para estructurar la interfaz de manera modular.

## 🎯 Objetivos

- Practicar el renderizado condicional en React.
- Componer la interfaz con múltiples componentes reutilizables.
- Manejar el estado con `useState`.
- Pasar props entre componentes.

## ✨ Funcionalidades

- **Generación aleatoria:** El número secreto se genera entre 1 y 100.
- **Pistas dinámicas:** Indica si el número es más alto o más bajo.
- **Contador de intentos:** Muestra cuántos intentos lleva el jugador.
- **Validación:** Verifica que el número esté entre 1 y 100.
- **Reinicio:** Permite jugar de nuevo sin recargar la página.
- **Soporte para Enter:** Permite enviar el número presionando Enter.
- **Renderizado condicional:** El botón de reinicio solo aparece cuando el juego termina.
- **Diseño moderno:** Fondo con degradado y tarjeta blanca.

## 🧠 Conceptos Practicados

| Concepto | Uso en el reto |
|----------|----------------|
| **Renderizado condicional** | Mostrar mensajes y botón de reinicio según el estado. |
| **Composición de componentes** | `Game`, `InputNumber`, `Message`, `RestartButton`. |
| **Props** | Pasar datos y funciones entre componentes. |
| **`useState`** | Manejar el número secreto, el intento, el mensaje y el estado del juego. |
| **Operador ternario** | Para mostrar diferentes mensajes. |
| **`onClick` / `onKeyDown`** | Manejo de eventos. |

## 📂 Archivos

- `src/App.jsx`: Componente principal.
- `src/components/Game.jsx`: Lógica del juego.
- `src/components/InputNumber.jsx`: Campo de entrada.
- `src/components/Message.jsx`: Mensajes de pista/éxito.
- `src/components/RestartButton.jsx`: Botón de reinicio.
- `src/App.css`: Estilos.
- `src/index.css`: Estilos globales.
- `README.md`: Este archivo.

## ⚙️ Cómo Ejecutar

```bash
npm install
npm run dev