# Reto 08 (Módulo 02): Gestor de Notas Personales

## 📌 Descripción

Este proyecto consiste en un programa de consola desarrollado con **Node.js** que permite gestionar notas personales almacenadas en un archivo JSON. Utiliza el módulo `fs` (File System) para leer, escribir y eliminar archivos, practicando las operaciones fundamentales del manejo de archivos en el backend.

## 🎯 Objetivo

Construir un programa en Node.js que administre notas personales utilizando el módulo `fs`, practicando leer, escribir, verificar y eliminar archivos.

## 📋 Instrucciones del Reto

1. Crear un archivo `gestorNotas.js`.
2. Usar el módulo `fs` para las operaciones de manejo de archivos.
3. Almacenar las notas en un archivo JSON llamado `notas.json`.
4. Implementar las siguientes funcionalidades:
   - **Crear una nota:** Agregar una nueva nota con título y contenido.
   - **Listar notas:** Leer el archivo y mostrar todas las notas en consola.
   - **Eliminar una nota:** Borrar una nota específica según su título.

## ✨ Funcionalidades Extendidas

- **Validación de duplicados:** No permite crear dos notas con el mismo título.
- **Manejo de archivo corrupto:** Si el JSON está dañado, se reinicia con un arreglo vacío.
- **Validación de campos:** Título y contenido son obligatorios.
- **Confirmación de eliminación:** Avisa si la nota no existe.

## 🧠 Conceptos Practicados

- **Módulo `fs` de Node.js:**
  - `fs.existsSync()`: verificar si un archivo existe.
  - `fs.readFileSync()`: leer un archivo de forma síncrona.
  - `fs.writeFileSync()`: escribir/sobrescribir un archivo.
- **Manejo de JSON:**
  - `JSON.parse()`: convertir un string JSON a objeto.
  - `JSON.stringify()`: convertir un objeto a string JSON con formato.
- **Métodos de arreglos:** `.push()`, `.some()`, `.filter()`, `.forEach()`.
- **Funciones de flecha** (`=>`).
- **Manejo de errores** con `try/catch`.

## 📂 Archivos

- `gestorNotas.js`: Lógica completa del gestor de notas.
- `notas.json`: Archivo donde se almacenan las notas (formato JSON).
- `package.json`: Configuración del proyecto y script `start`.
- `README.md`: Este archivo con la documentación del reto.

## ⚙️ Cómo Ejecutar

### Requisitos
- Tener **Node.js** instalado (versión 14 o superior).

### Ejecutar el programa
Desde la carpeta del reto:

```bash
node gestorNotas.js