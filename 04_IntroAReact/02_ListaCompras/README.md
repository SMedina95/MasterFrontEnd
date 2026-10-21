# Reto 02 (Módulo 04): Lista de Compras Interactiva con useState

## 📌 Descripción

Este proyecto consiste en una **Lista de Compras Interactiva** desarrollada con **React** y el Hook **`useState`**. El usuario puede agregar productos a la lista, eliminarlos cuando los haya comprado y ver el contador de productos en tiempo real. Es una práctica fundamental para manejar arreglos en el estado de React.

## 🎯 Objetivos

- Crear un proyecto de React con Vite.
- Usar `useState` para manejar arreglos en el estado.
- Agregar y eliminar elementos de un arreglo en el estado.
- Renderizar listas dinámicas con `.map()`.
- Actualizar el estado de forma inmutable.

## ✨ Funcionalidades

- **Agregar productos:** Con validación para no agregar vacíos ni duplicados.
- **Eliminar productos:** Con un botón 🗑️ en cada elemento.
- **Contador dinámico:** Muestra el total de productos en la lista.
- **Mensaje de lista vacía:** Cuando no hay productos, muestra un mensaje amigable.
- **Soporte para Enter:** Permite agregar productos presionando Enter.
- **Diseño moderno:** Fondo con degradado, tarjeta blanca y animaciones.

## 🧠 Conceptos Practicados

| Concepto | Uso en el reto |
|----------|----------------|
| **React** | Biblioteca para construir interfaces. |
| **`useState`** | Hook para manejar el estado. |
| **Arreglos en el estado** | `useState([])` para la lista. |
| **Spread operator** | `[...productos, nuevoProducto]` para agregar. |
| **`.filter()`** | Para eliminar un producto por índice. |
| **`.map()`** | Para renderizar la lista de productos. |
| **`key` prop** | Para identificar cada elemento de la lista. |
| **Manejo de eventos** | `onClick`, `onChange`, `onKeyDown`. |
| **Renderizado condicional** | Mostrar mensaje si la lista está vacía. |

## 📂 Archivos

- `index.html`: Estructura base.
- `src/main.jsx`: Punto de entrada de React.
- `src/App.jsx`: Componente principal.
- `src/ListaCompras.jsx`: Componente de la lista de compras.
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