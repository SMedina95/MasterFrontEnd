# Reto 07 (Módulo 04): Plataforma de Gestión de Citas Médicas

## 📌 Descripción

Este proyecto es una **Plataforma de Gestión de Citas Médicas** desarrollada con React y `react-router-dom`. Permite navegar entre diferentes vistas, ver la lista de citas, acceder a los detalles de cada cita mediante rutas dinámicas y agendar nuevas citas.

## 🎯 Objetivos

- Aplicar `react-router-dom` para manejar rutas estáticas y dinámicas.
- Implementar navegación entre diferentes vistas.
- Usar `useParams` para acceder a parámetros de la URL.
- Crear una página 404 para rutas no encontradas.

## ✨ Funcionalidades

- **Rutas estáticas:** `/` (inicio), `/citas` (lista), `/nueva-cita` (formulario).
- **Rutas dinámicas:** `/cita/:id` (detalles de una cita).
- **Página 404:** Para rutas no encontradas.
- **Navegación:** Con `Link` y `NavLink` (con estilos activos).
- **Lista de citas:** Con estados (confirmada, pendiente, cancelada).
- **Detalles de cita:** Muestra toda la información de la cita seleccionada.
- **Formulario:** Para agendar nuevas citas (simulación).

## 🧠 Conceptos Practicados

| Concepto | Uso en el reto |
|----------|----------------|
| **`react-router-dom`** | Manejo de rutas. |
| **`BrowserRouter`** | Envolver la aplicación. |
| **`Routes` / `Route`** | Definir las rutas. |
| **`Link` / `NavLink`** | Navegación interna. |
| **`useParams`** | Acceder al `id` de la URL. |
| **Ruta dinámica** | `/cita/:id` |
| **Ruta comodín** | `*` para la página 404. |

## 📂 Archivos

- `src/App.jsx`: Configuración de rutas.
- `src/pages/Home.jsx`: Página de inicio.
- `src/pages/Citas.jsx`: Lista de citas.
- `src/pages/CitaDetalle.jsx`: Detalles de una cita (ruta dinámica).
- `src/pages/NuevaCita.jsx`: Formulario de nueva cita.
- `src/pages/NotFound.jsx`: Página 404.
- `src/data/citas.js`: Datos de ejemplo.
- `src/App.css`: Estilos.
- `README.md`: Este archivo.

## ⚙️ Cómo Ejecutar

```bash
npm install
npm run dev