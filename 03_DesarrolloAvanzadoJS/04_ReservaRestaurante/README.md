# Reto 04 (Módulo 03): Sistema de Reservas para un Restaurante

## 📌 Descripción

Este proyecto consiste en un sistema de reservas para un restaurante que utiliza **Promesas** y **`async/await`** para manejar operaciones asincrónicas. El sistema verifica la disponibilidad de mesas y, si hay suficientes, envía un correo de confirmación. Se manejan adecuadamente los errores en cada paso del proceso.

## 🎯 Objetivo

Construir un sistema de reservas utilizando Promesas y `async/await`, con manejo de errores adecuado.

## 📋 Flujo del Sistema

1. **Verificar disponibilidad:** Se comprueba si hay suficientes mesas para la reserva.
2. **Confirmar reserva:** Si hay mesas, se confirma la reserva.
3. **Enviar correo:** Se simula el envío de un correo de confirmación.
4. **Manejar errores:** Si no hay mesas o falla el correo, se captura el error.

## ✨ Funcionalidades

- **Verificación de disponibilidad:** Con un retraso de 2 segundos (simulando una consulta a la base de datos).
- **Envío de correo:** Con un retraso de 1.5 segundos (simulando el envío real).
- **Simulación de éxito/error:** Usa `Math.random()` para que el envío de correo falle el 20% de las veces.
- **Validaciones:**
  - El número de mesas solicitadas debe ser mayor a 0.
  - No se pueden reservar más mesas de las disponibles.
- **Manejo de errores:** Con `try/catch` en la función principal.
- **Múltiples escenarios de prueba:** Reservas exitosas, reservas fallidas y valores inválidos.

## 🧠 Conceptos Practicados

| Concepto | Uso en el reto |
|----------|----------------|
| **Promesas** | Creación con `new Promise((resolve, reject) => {})`. |
| **`resolve()`** | Se llama cuando la operación es exitosa. |
| **`reject()`** | Se llama cuando la operación falla. |
| **`async/await`** | Manejo de asincronía de forma secuencial. |
| **`try/catch`** | Captura de errores en el flujo asincrónico. |
| **`setTimeout`** | Simular retrasos en las operaciones. |
| **`Math.random()`** | Simular éxito o fallo en el envío del correo. |
| **Validaciones** | Verificar que los datos de entrada sean válidos. |

## 📂 Archivos

- `reservaRestaurante.js`: Lógica completa del sistema de reservas.
- `README.md`: Este archivo con la documentación.

## ⚙️ Cómo Ejecutar

### En la terminal (con Node.js)
```bash
node reservaRestaurante.js