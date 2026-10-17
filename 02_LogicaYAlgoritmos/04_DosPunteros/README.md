# Reto 04: Algoritmo de los Dos Punteros

## 📌 Descripción

Este proyecto aplica el **algoritmo de los dos punteros** para encontrar el primer par de invitados consecutivos cuyos nombres comienzan con la misma letra. Se parte de una lista de invitados ordenada alfabéticamente y se recorre de forma eficiente (O(n)) comparando cada par de nombres consecutivos.

## 🎯 Objetivo

Usar el algoritmo de los dos punteros para identificar rápidamente el primer par de invitados cuyos nombres comienzan con la misma letra.

## 📋 Instrucciones del Reto

1. Usar un puntero al inicio del arreglo y otro al siguiente elemento.
2. Comparar las iniciales de los nombres en las posiciones de ambos punteros.
3. Si coinciden, detener la búsqueda y devolver los nombres.
4. Si no coinciden, avanzar ambos punteros y repetir.
5. Detener la búsqueda si se recorre toda la lista sin encontrar un par.

## 🧠 Conceptos Practicados

- **Algoritmo de los dos punteros:** técnica que recorre un arreglo usando dos índices (en este caso, `i` y `j = i + 1`).
- **Complejidad O(n):** una sola pasada por el arreglo en lugar de bucles anidados.
- **Funciones de flecha** (`=>`).
- **Objetos de retorno:** devolvemos un objeto con `encontrado`, `pareja`, `mensaje`, etc.
- **Validaciones:** verificar que el arreglo tenga al menos 2 elementos.
- **`charAt(0)`** y **`.toUpperCase()`** para obtener la inicial de cada nombre.
- **BONUS:** encontrar todas las parejas posibles con un bucle `for`.

## 📂 Archivos

- `dos-punteros.js`: Contiene la lógica del algoritmo y las pruebas.
- `index.html`: Página que muestra los resultados en el navegador.
- `README.md`: Este archivo con la documentación del reto.

## ⚙️ Cómo Ejecutar

### En la terminal (con Node.js)
```bash
node dos-punteros.js