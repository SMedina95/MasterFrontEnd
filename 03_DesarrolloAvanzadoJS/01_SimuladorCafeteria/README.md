# Reto 01 (Módulo 03): Simulador de Pedidos en una Cafetería

## 📌 Descripción

Este proyecto simula el sistema de pedidos de una cafetería moderna. Los usuarios pueden agregar pedidos que se procesan de forma **asincrónica**, mostrando su estado en tiempo real (`En Proceso` → `Completado`). Se utilizan `setTimeout`, Promises y `async/await` para simular el Event Loop de JavaScript.

## 🎯 Objetivo

- Crear una simulación interactiva de pedidos en una cafetería.
- Procesar cada pedido de forma asincrónica con un tiempo de preparación simulado.
- Actualizar el estado de cada pedido en la interfaz en tiempo real.
- Practicar `setTimeout`, Promises y `async/await`.

## ✨ Funcionalidades

- **Agregar pedido:** Genera un pedido con ID único y estado "En Proceso".
- **Procesamiento asincrónico:** Cada pedido tiene un tiempo de preparación aleatorio (2–5 segundos).
- **Actualización en tiempo real:** El estado cambia a "Completado" cuando termina la preparación.
- **Estadísticas en vivo:** Muestra el total de pedidos, los que están en proceso y los completados.
- **Spinner animado:** Indica visualmente que un pedido se está preparando.
- **Limpieza:** Botón para eliminar todos los pedidos con confirmación.
- **Fechas:** Se muestra la hora de creación y de finalización de cada pedido.

## 🧠 Conceptos Practicados

| Concepto | Uso en el reto |
|----------|----------------|
| **`setTimeout`** | Simular el tiempo de preparación de cada pedido. |
| **`Promise`** | Encapsular la operación asincrónica (`processOrder`). |
| **`async/await`** | Manejar el flujo asincrónico de forma limpia y legible. |
| **Event Loop** | El código principal no se bloquea mientras se procesan los pedidos. |
| **`Math.random()`** | Generar tiempos de preparación aleatorios. |
| **`Date` / `toLocaleTimeString`** | Mostrar la hora de creación y finalización. |
| **Manipulación del DOM** | Crear, actualizar y eliminar elementos dinámicamente. |
| **`try/catch`** | Manejar posibles errores durante el procesamiento. |

## 📂 Archivos

- `index.html`: Estructura de la interfaz.
- `styles.css`: Estilos visuales con animaciones.
- `app.js`: Lógica del simulador con asincronicidad.
- `README.md`: Este archivo con la documentación.

## ⚙️ Cómo Ejecutar

### En el navegador (GitHub Pages)
Visita la URL del proyecto en GitHub Pages y haz clic en el reto **"Simulador de Cafetería"**.

### En tu equipo local
Abre el archivo `index.html` en tu navegador.

## 🧪 Cómo probarlo

1. Haz clic en **"Agregar Pedido"** varias veces seguidas.
2. Observa cómo cada pedido aparece con un **spinner animado** (En Proceso).
3. Después de un tiempo aleatorio (2–5 segundos), el pedido cambia a **✅ Completado**.
4. Las estadísticas se actualizan en tiempo real.
5. Usa **"Limpiar Pedidos"** para reiniciar la simulación.

## 💡 Explicación del Event Loop

El Event Loop es el mecanismo que permite a JavaScript manejar operaciones asincrónicas sin bloquear el hilo principal. En este simulador:

1. **Clic en "Agregar Pedido":** Se ejecuta el código de forma síncrona hasta llegar al `await`.
2. **`processOrder()`:** Devuelve una Promise que se resuelve con `setTimeout`.
3. **El Event Loop:** Mientras espera, sigue procesando otros pedidos (puedes agregar más).
4. **Al resolverse:** El `await` continúa y actualiza el estado del pedido.

**Ejemplo visual:**
[Pedido 1] → En Proceso → (espera 3s) → Completado
[Pedido 2] → En Proceso → (espera 2s) → Completado
[Pedido 3] → En Proceso → (espera 5s) → Completado

Todos los pedidos se procesan **en paralelo**, no uno detrás de otro. Eso es gracias al Event Loop.

## 📅 Fecha

Octubre 2025
