# Reto 03 (Módulo 04): Contador de Tareas con useEffect y useMemo

## 📌 Descripción

Este proyecto consiste en un **Contador de Tareas** desarrollado con **React** que permite agregar tareas con su duración, filtrarlas y calcular el tiempo total invertido. Se utilizan los hooks `useEffect` y `useMemo` para gestionar efectos secundarios y optimizar cálculos.

## 🎯 Objetivos

- Practicar la creación de un proyecto React con Vite.
- Utilizar `useEffect` para efectos secundarios (título del documento, persistencia).
- Utilizar `useMemo` para evitar cálculos innecesarios (tiempo total, filtros).
- Manejar estado con `useState`.

## ✨ Funcionalidades

- **Agregar tareas:** Con nombre y duración en minutos.
- **Lista de tareas:** Con botón 🗑️ para eliminar cada una.
- **Filtros:** Ver todas, solo cortas (<30 min) o largas (≥30 min).
- **Tiempo total:** Calculado con `useMemo` (solo se recalcula cuando cambian las tareas).
- **Título dinámico:** Se actualiza con el total de minutos (usando `useEffect`).
- **Persistencia:** Las tareas se guardan en `localStorage` y persisten al recargar.
- **Diseño moderno:** Fondo con degradado, tarjeta blanca y animaciones.

## 🧠 Conceptos Practicados

| Concepto | Uso en el reto |
|----------|----------------|
| **`useState`** | Manejar tareas, nueva tarea, duración y filtro. |
| **`useEffect`** | Actualizar el título y guardar/cargar de `localStorage`. |
| **`useMemo`** | Calcular el tiempo total y filtrar tareas. |
| **Arreglos en el estado** | Agregar, eliminar y filtrar tareas. |
| **Spread operator** | `[...tareas, nuevaTarea]` para agregar. |
| **`.filter()`** | Para eliminar y filtrar tareas. |
| **`.reduce()`** | Para calcular el tiempo total. |
| **`localStorage`** | Persistencia de datos. |
| **`document.title`** | Actualizar el título de la página. |

## 📂 Archivos

- `index.html`: Estructura base.
- `src/main.jsx`: Punto de entrada de React.
- `src/App.jsx`: Componente principal.
- `src/ContadorTareas.jsx`: Componente del contador de tareas.
- `src/App.css`: Estilos del componente principal y la lista.
- `src/index.css`: Estilos globales.
- `package.json`: Dependencias y scripts.
- `README.md`: Este archivo con la documentación.

## ⚙️ Cómo Ejecutar

### Requisitos
- Tener **Node.js** instalado.

### Instalación
```bash
npm install