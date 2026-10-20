# Reto 06 (Módulo 03): Validación de Formularios con Zod

## 📌 Descripción

Este proyecto consiste en un formulario de registro que solicita **nombre**, **correo electrónico**, **contraseña** y **confirmación de contraseña**. Los datos se validan utilizando **Zod**, una biblioteca de validación de esquemas que permite definir reglas claras y mostrar mensajes de error amigables. La validación se realiza en tiempo real.

## 🎯 Objetivos

- Practicar el uso de Zod para validar datos de un formulario.
- Implementar validación en tiempo real.
- Comprender cómo manejar errores de validación y mostrar mensajes amigables.

## ✨ Validaciones Implementadas con Zod

| Campo | Validación |
|-------|-----------|
| **Nombre** | Mín. 3 caracteres, máx. 50, solo letras y espacios. |
| **Correo** | Obligatorio, formato válido de email. |
| **Contraseña** | Mín. 8 caracteres, al menos una mayúscula, una minúscula y un número. |
| **Confirmar contraseña** | Debe coincidir con la contraseña (usando `.refine()`). |

## 🧠 Conceptos Practicados

| Concepto | Uso en el reto |
|----------|----------------|
| **Zod** | Biblioteca de validación de esquemas. |
| **`z.object()`** | Definir un esquema para un objeto. |
| **`z.string()`** | Validar cadenas. |
| **`.min()` / `.max()`** | Longitud mínima y máxima. |
| **`.email()`** | Validar formato de correo. |
| **`.regex()`** | Validar con expresiones regulares. |
| **`.refine()`** | Validación personalizada (confirmar contraseña). |
| **`safeParse()`** | Validar sin lanzar errores (devuelve `success` y `error`). |
| **`error.issues`** | Lista de errores de validación. |
| **Validación en tiempo real** | Eventos `input` y `blur`. |

## 📂 Archivos

- `index.html`: Estructura del formulario.
- `styles.css`: Estilos con tema oscuro.
- `app.js`: Lógica de validación con Zod.
- `README.md`: Este archivo con la documentación.

## ⚙️ Cómo Ejecutar

### En el navegador (GitHub Pages)
Visita la URL del proyecto en GitHub Pages y haz clic en el reto **"Validación con Zod"**.

### En tu equipo local
Abre el archivo `index.html` en tu navegador.

## 🧪 Cómo probarlo

1. Intenta enviar el formulario vacío → verás errores en cada campo.
2. Escribe un nombre con números → error.
3. Escribe un correo inválido → error.
4. Escribe una contraseña corta → error.
5. Escribe una contraseña sin mayúsculas → error.
6. Escribe contraseñas que no coincidan → error.
7. Completa todo correctamente → verás el mensaje de éxito.

## 💡 Explicación de Zod

### ¿Qué es un esquema?
Un esquema en Zod es una definición de las reglas que deben cumplir los datos. Por ejemplo:

```javascript
const schema = z.object({
    nombre: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
    correo: z.string().email("El correo no es válido"),
});