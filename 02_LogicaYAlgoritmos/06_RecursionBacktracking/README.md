# Reto 06 (Módulo 02): Recursión y Backtracking

## 📌 Descripción

Este proyecto aplica el concepto de **recursión** para buscar un regalo específico dentro de una lista de regalos. La función se llama a sí misma avanzando un índice hasta encontrar el regalo o llegar al final de la lista (caso base).

## 🎯 Objetivo

Practicar el uso de recursión para buscar un elemento en un arreglo, dividiendo el problema en partes más pequeñas y deteniendo la recursión en un caso base.

## 📋 Instrucciones del Reto

1. Escribir una función recursiva que busque un regalo específico en un arreglo.
2. Si el regalo se encuentra, devolver un mensaje indicando su posición.
3. Si no se encuentra, devolver un mensaje diciendo que no está en la lista.

## 🧠 Conceptos Practicados

- **Recursión:** técnica donde una función se llama a sí misma.
- **Caso base:** condición que detiene la recursión.
- **Llamada recursiva:** la función se invoca con un índice incrementado.
- **Parámetros por defecto:** `index = 0`.
- **Retorno de valores:** devolvemos strings con el resultado.
- **Funciones de flecha** (en el bonus).

## 📂 Archivos

- `recursion-backtracking.js`: Contiene la función recursiva y las pruebas.
- `index.html`: Página que muestra los resultados en el navegador.
- `README.md`: Este archivo con la documentación del reto.

## ⚙️ Cómo Ejecutar

### En la terminal (con Node.js)
```bash
node recursion-backtracking.js