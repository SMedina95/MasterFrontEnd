# Reto 01 (Módulo 02): Planificador de Viajes con ECMAScript 6+

## 📌 Descripción

Este proyecto es la refactorización de un planificador de viajes originalmente escrito con JavaScript antiguo (`var`, funciones tradicionales, un solo archivo). El objetivo es aplicar las características modernas de ECMAScript 6+ para mejorar la legibilidad, organización y mantenibilidad del código.

## 🎯 Objetivo

- Aplicar las nuevas características de ECMAScript (ES6 y posteriores).
- Reemplazar funciones tradicionales por funciones de flecha.
- Sustituir `var` por `let` y `const` según corresponda.
- Dividir el código en módulos para separar responsabilidades.

## 🔄 Cambios aplicados desde el código original

| Antes (ES5) | Después (ES6+) |
|-------------|----------------|
| `var destinos = []` | `const viajes = []` |
| Funciones tradicionales `function()` | Funciones de flecha `() => {}` |
| Un solo archivo `viajes.js` + `app.js` | Tres módulos: `datos.js`, `viajes.js`, `app.js` |
| Concatenación con `+` | Template literals `` `${variable}` `` |
| `if / else if` para costos | Objetos literales y `find()` |
| Bucle `for` clásico | `forEach` y `reduce` |

## ✨ Funcionalidades Extendidas (opcionales)

- **Más destinos:** Paris, Londres, New York, Tokio, Roma, Cancún.
- **Más transportes:** Avión, Tren, Autobús, Barco.
- **Descuento por número de personas:**
  - 4 o más personas: 15% de descuento.
  - 3 personas: 10% de descuento.
  - 2 personas: 5% de descuento.
  - 1 persona: sin descuento.
- **Total general:** Al final del itinerario se muestra la suma de todos los viajes.
- **Validación:** Advertencia si se registra un destino no reconocido.


## 🧠 Conceptos de ECMAScript practicados

- `let` y `const`
- Funciones de flecha (`=>`)
- Módulos (`import` / `export`)
- Template literals
- Destructuring (en `viajes.js`)
- Métodos de arreglos: `forEach`, `find`, `reduce`
- Objetos literales como diccionarios
- Parámetros por defecto (`personas = 1`)
- Operador de encadenamiento opcional (`?.`)

## ⚙️ Cómo Ejecutar

### En el navegador (GitHub Pages)
Visita la versión publicada en GitHub Pages.

