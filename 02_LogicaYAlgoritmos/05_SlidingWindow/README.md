# Reto 05 (Módulo 02): Sliding Window - Palabra Más Larga

## 📌 Descripción

Este proyecto aplica la técnica **Sliding Window** (ventana deslizante) para encontrar la palabra más larga en un texto ingresado por el usuario. Se recorre el arreglo de palabras deslizando una "ventana" de un elemento a la vez y comparando la longitud de cada palabra con la más larga encontrada hasta el momento.

## 🎯 Objetivo

Usar la técnica Sliding Window para identificar la palabra más larga en una cadena de texto.

## 📋 Instrucciones del Reto

1. Dividir el texto en palabras individuales usando `.split(" ")`.
2. Deslizar una ventana que recorra cada palabra del arreglo y compare su longitud con la palabra más larga encontrada hasta ese momento.
3. Devolver la palabra más larga al final del proceso.

## 🧠 Conceptos Practicados

- **Sliding Window:** técnica para analizar subconjuntos continuos de datos.
- **`.split()`:** convertir una cadena en un arreglo de palabras.
- **`.trim()`:** eliminar espacios al inicio y final.
- **Expresiones regulares** (`/\s+/`) para manejar múltiples espacios.
- **Bucle `for`:** para recorrer el arreglo de palabras.
- **`.length`:** comparar longitudes de palabras.
- **`.reduce()`** (en el bonus): para simplificar la búsqueda.
- **`.replace()`** (en el bonus): para quitar signos de puntuación.

## 📂 Archivos

- `sliding-window.js`: Contiene la lógica del algoritmo y las pruebas.
- `index.html`: Página que muestra los resultados en el navegador.
- `README.md`: Este archivo con la documentación del reto.

## ⚙️ Cómo Ejecutar

### En la terminal (con Node.js)
```bash
node sliding-window.js