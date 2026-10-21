# Reto 08 (Módulo 04): Clon de Twitter con Autenticación

## 📌 Descripción

Este proyecto es un **Clon Simplificado de Twitter** desarrollado con React. Permite a los usuarios autenticarse, publicar tweets, dar "me gusta" y ver su perfil. Incluye **rutas protegidas** para que solo los usuarios autenticados puedan acceder a ciertas funcionalidades, y utiliza `localStorage` para persistir los datos.

## 🎯 Objetivos

- Implementar autenticación simulada con `useState` y `localStorage`.
- Proteger rutas con `react-router-dom` y un componente `ProtectedRoute`.
- Manejar estado global con **Context API**.
- Persistir tweets y usuarios en `localStorage`.
- Aplicar renderizado condicional.

## ✨ Funcionalidades

- **Login simulado:** Cualquier nombre de usuario (mín. 3 caracteres) permite el acceso.
- **Persistencia de sesión:** El usuario se mantiene autenticado al recargar (gracias a `localStorage`).
- **Rutas protegidas:** `/` y `/profile` solo son accesibles si hay sesión.
- **Publicar tweets:** Con validación (máximo 280 caracteres).
- **Dar likes:** Contador de likes por tweet.
- **Eliminar tweets:** Solo el autor puede eliminar sus propios tweets.
- **Perfil del usuario:** Muestra tweets propios y estadísticas.
- **Cerrar sesión:** Elimina el usuario y protege las rutas.
- **Página 404:** Para rutas no encontradas.

## 🧠 Conceptos Practicados

| Concepto | Uso en el reto |
|----------|----------------|
| **Context API** | `AuthContext` para manejar el usuario globalmente. |
| **`useContext`** | Hook personalizado `useAuth` para consumir el contexto. |
| **Rutas protegidas** | `ProtectedRoute` redirige al login si no hay usuario. |
| **`react-router-dom`** | Rutas, `Navigate`, `NavLink`, `useNavigate`. |
| **`useState`** | Estado de tweets, usuario, formulario. |
| **`useEffect`** | Cargar/guardar datos en `localStorage`. |
| **`localStorage`** | Persistencia de usuarios y tweets. |
| **Renderizado condicional** | Mostrar navbar solo si hay sesión; botón de eliminar solo para el autor. |
| **Composición** | `Tweet`, `TweetList`, `TweetForm`, `ProtectedRoute`, `Navbar`. |

## 📂 Archivos

- `src/App.jsx`: Configuración de rutas y navbar.
- `src/context/AuthContext.jsx`: Contexto de autenticación.
- `src/components/ProtectedRoute.jsx`: Protección de rutas.
- `src/components/Tweet.jsx`: Tweet individual.
- `src/components/TweetList.jsx`: Lista de tweets.
- `src/components/TweetForm.jsx`: Formulario de publicación.
- `src/pages/Login.jsx`: Inicio de sesión.
- `src/pages/Home.jsx`: Línea de tiempo.
- `src/pages/Profile.jsx`: Perfil del usuario (protegido).
- `src/pages/NotFound.jsx`: Página 404.
- `src/App.css`: Estilos (tema oscuro tipo Twitter).
- `README.md`: Este archivo.

## ⚙️ Cómo Ejecutar

```bash
npm install
npm run dev