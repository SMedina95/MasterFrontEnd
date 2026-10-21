# Reto 06 (Módulo 04): Gestor de Inventario con Hooks Avanzados

## 📌 Descripción

Este proyecto es un **Gestor de Inventario** para una tienda de e-commerce, desarrollado con React. Permite agregar productos, aumentar o disminuir cantidades, eliminarlos, buscarlos y vaciar el inventario. Se utilizan los hooks avanzados `useReducer`, `useRef` y `useCallback` para manejar el estado y optimizar el rendimiento.

## 🎯 Objetivos

- Utilizar `useReducer` para manejar estados complejos.
- Implementar `useRef` para interactuar con el DOM.
- Aplicar `useCallback` para optimizar funciones.
- Crear una aplicación funcional con React y Vite.

## ✨ Funcionalidades

- **Agregar productos:** Con nombre y cantidad inicial de 1.
- **Incrementar/Decrementar:** Cambiar la cantidad de cada producto.
- **Eliminar:** Quitar productos del inventario con confirmación.
- **Buscar:** Filtrar productos por nombre.
- **Vaciar inventario:** Eliminar todos los productos.
- **Persistencia:** Los productos se guardan en `localStorage`.
- **Foco automático:** El input de agregar producto se enfoca al cargar.

## 🧠 Hooks Practicados

| Hook | Uso en el reto |
|------|----------------|
| **`useReducer`** | Manejar el estado del inventario con acciones (`add`, `increment`, `decrement`, `remove`, `clear`). |
| **`useRef`** | Referencia al input para limpiarlo y enfocarlo después de agregar un producto. |
| **`useCallback`** | Memorizar las funciones de los botones para evitar recreaciones innecesarias. |
| **`useState`** | Manejar el término de búsqueda. |
| **`useEffect`** | Guardar el inventario en `localStorage` cuando cambia. |

## 📂 Archivos

- `src/App.jsx`: Componente principal.
- `src/InventoryManager.jsx`: Lógica del gestor de inventario.
- `src/App.css`: Estilos.
- `src/index.css`: Estilos globales.
- `README.md`: Este archivo.

## ⚙️ Cómo Ejecutar

```bash
npm install
npm run dev