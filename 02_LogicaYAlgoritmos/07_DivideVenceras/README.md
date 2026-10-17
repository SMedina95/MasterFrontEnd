# Reto 07 (Módulo 02): Divide y Vencerás

## 📌 Descripción

Este proyecto aplica el paradigma **Divide and Conquer** (Divide y Vencerás) para encontrar el número máximo en un arreglo. El algoritmo divide el arreglo en dos mitades, encuentra el máximo de cada mitad de forma recursiva y luego combina los resultados comparándolos.

## 🎯 Objetivo

Usar el enfoque Divide and Conquer para encontrar el número máximo en un arreglo, practicando cómo dividir un problema en partes más pequeñas y detener la recursión en un caso base.

## 📋 Instrucciones del Reto

1. Dividir el arreglo en dos mitades.
2. Resolver el problema recursivamente para encontrar el máximo en cada mitad.
3. Combinar las soluciones comparando los máximos de ambas mitades.
4. Devolver el número máximo encontrado.

## 🧠 Conceptos Practicados

- **Divide and Conquer:** paradigma que divide un problema en subproblemas más pequeños, los resuelve recursivamente y combina los resultados.
- **Recursión:** la función se llama a sí misma con arreglos más pequeños.
- **Caso base:** condición que detiene la recursión (arreglo de un solo elemento).
- **`Math.floor()`:** para calcular el punto medio.
- **`.slice()`:** para dividir el arreglo en dos mitades.
- **`Math.max()`:** para combinar los resultados.
- **Funciones de flecha** (en el bonus).

## 📂 Archivos

- `divide-venceras.js`: Contiene la función `findMax` y las pruebas.
- `index.html`: Página que muestra los resultados en el navegador.
- `README.md`: Este archivo con la documentación del reto.

## ⚙️ Cómo Ejecutar

### En la terminal (con Node.js)
```bash
node divide-venceras.js