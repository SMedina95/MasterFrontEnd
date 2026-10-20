# Reto 03 (Módulo 03): Fetch y Axios

## 📌 Descripción

Este proyecto consiste en una aplicación web que consume la API de **Rick & Morty** para obtener y mostrar información de personajes. El usuario puede elegir entre dos botones: uno que utiliza **`fetch`** y otro que utiliza **`axios`**, permitiendo comparar ambas herramientas en términos de sintaxis, manejo de errores y rendimiento.

## 🎯 Objetivo

- Realizar solicitudes HTTP con `fetch` y `axios`.
- Manejar datos obtenidos de una API.
- Practicar el manejo de errores.
- Representar datos en una interfaz gráfica sencilla.
- Comparar el uso de ambas herramientas.

## ✨ Funcionalidades

- **Botón Fetch:** Obtiene los personajes usando `fetch` y `async/await`.
- **Botón Axios:** Obtiene los personajes usando `axios` y `async/await`.
- **Renderizado dinámico:** Muestra tarjetas con la imagen, nombre, estado y especie de cada personaje.
- **Indicador de carga:** Muestra un mensaje de "Cargando..." mientras se realiza la solicitud.
- **Medición de tiempo:** Muestra cuántos milisegundos tardó cada solicitud.
- **Manejo de errores:** Muestra mensajes claros si algo falla.
- **Botones deshabilitados:** Se desactivan durante la carga para evitar solicitudes múltiples.

## 🧠 Conceptos Practicados

| Concepto | Uso en el reto |
|----------|----------------|
| **`fetch`** | Solicitud HTTP con la API nativa del navegador. |
| **`axios`** | Solicitud HTTP con la biblioteca externa. |
| **`async/await`** | Manejo de asincronía de forma limpia. |
| **`try/catch`** | Manejo de errores. |
| **`response.ok`** | Verificación del estado de la respuesta en `fetch`. |
| **`response.data`** | Acceso a los datos en `axios` (ya viene parseado). |
| **`performance.now()`** | Medición del tiempo de respuesta. |
| **Manipulación del DOM** | Renderizado dinámico de tarjetas. |
| **`Promise.all` / `catch`** | Manejo de errores en ambas herramientas. |

## 🔍 Diferencias entre Fetch y Axios

| Aspecto | `fetch` | `axios` |
|---------|---------|---------|
| **Instalación** | Nativo del navegador | Requiere CDN o instalación |
| **Parseo de JSON** | Manual: `.json()` | Automático: `response.data` |
| **Errores HTTP (404, 500)** | No lanza error, hay que verificar `response.ok` | Lanza error automáticamente |
| **Tamaño** | 0 KB (nativo) | ~13 KB (CDN) |
| **Soporte en navegadores antiguos** | Limitado | Amplio |
| **Interceptores** | No | Sí |

## 📂 Archivos

- `index.html`: Estructura de la interfaz.
- `styles.css`: Estilos visuales con tema oscuro.
- `app.js`: Lógica de las solicitudes con Fetch y Axios.
- `README.md`: Este archivo con la documentación.

## ⚙️ Cómo Ejecutar

### En el navegador (GitHub Pages)
Visita la URL del proyecto en GitHub Pages y haz clic en el reto **"Fetch y Axios"**.

### En tu equipo local
Abre el archivo `index.html` en tu navegador.

> ⚠️ **Nota:** Algunas APIs requieren que la página se sirva desde `http://` o `https://` (no `file://`). Si tienes problemas, usa un servidor local como `npx serve`.

## 🧪 Cómo probarlo

1. Haz clic en **"🌐 Obtener con Fetch"**.
2. Observa cómo se cargan las tarjetas de los personajes.
3. Haz clic en **"⚡ Obtener con Axios"**.
4. Compara los tiempos de respuesta en el mensaje de estado.

## 💡 Aprendizaje

Gracias a este reto, comprendí las diferencias clave entre `fetch` y `axios`. Mientras que `fetch` es nativo y ligero, requiere más código para manejar errores y parsear JSON. Axios, por su parte, simplifica estas tareas al lanzar errores automáticamente y parsear la respuesta, pero requiere una dependencia externa. Ambos son herramientas poderosas y la elección depende del contexto del proyecto.

## 📅 Fecha

Octubre 2025