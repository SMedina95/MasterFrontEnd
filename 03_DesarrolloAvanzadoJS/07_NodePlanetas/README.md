# Reto 07 (Módulo 03): Node.js para Novatos Aventureros

## 📌 Descripción

Este proyecto consiste en una aplicación de consola desarrollada con **Node.js** que muestra una lista de planetas favoritos. Se practican los conceptos básicos de Node.js: configuración de un proyecto con `npm init`, uso de módulos con `require()` y `module.exports`, y creación de scripts personalizados en `package.json`. Además, se explora el uso de argumentos de línea de comandos y la instalación de paquetes externos (opcional).

## 🎯 Objetivos

- Configurar un proyecto Node.js desde cero.
- Utilizar el sistema de módulos de Node.js para organizar el código.
- Crear scripts en `package.json` para automatizar tareas.
- Mostrar la lista de planetas favoritos en la consola de forma amigable.

## ✨ Funcionalidades

- **Lista de 6 planetas** con información detallada: nombre, descripción, año de descubrimiento, distancia a la Tierra y tipo.
- **Script `explorar`** para ejecutar el proyecto con `npm run explorar`.
- **Scripts adicionales** para filtrar por tipo: `explorar:rocoso` y `explorar:gaseoso`.
- **Filtrado por argumento** desde la línea de comandos (ej. `node index.js rocoso`).
- **Cowsay (opcional):** Un mensaje animado con la vaca espacial al iniciar el reporte.
- **`.gitignore`** para evitar subir `node_modules/` al repositorio.

## 🧠 Conceptos Practicados

| Concepto | Uso en el reto |
|----------|----------------|
| **`npm init -y`** | Inicializar un proyecto Node.js con un `package.json`. |
| **`require()`** | Importar módulos (como `planetas.js`). |
| **`module.exports`** | Exportar el arreglo de planetas desde `planetas.js`. |
| **`package.json`** | Configurar scripts personalizados (`explorar`). |
| **`npm run`** | Ejecutar scripts definidos en `package.json`. |
| **`process.argv`** | Leer argumentos de la línea de comandos. |
| **Métodos de arreglos** | `.forEach()`, `.filter()`. |
| **`npm install`** | Instalar dependencias (opcional, `cowsay`). |
| **`.gitignore`** | Evitar subir `node_modules/` al repositorio. |

