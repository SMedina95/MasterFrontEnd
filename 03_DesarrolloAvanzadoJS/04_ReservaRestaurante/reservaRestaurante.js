// ============================================
// RETO 04 (Módulo 03): SISTEMA DE RESERVAS
// Promesas y async/await con manejo de errores
// ============================================

// ============================================
// SIMULACIÓN DE BASE DE DATOS DE MESAS
// ============================================
const mesasDisponibles = 5;

// ============================================
// FUNCIÓN: verificarDisponibilidad(mesasSolicitadas)
// Devuelve una promesa que se resuelve si hay
// suficientes mesas, o se rechaza si no.
// ============================================
function verificarDisponibilidad(mesasSolicitadas) {
    return new Promise((resolve, reject) => {
        console.log(`⏳ Verificando disponibilidad para ${mesasSolicitadas} mesa(s)...`);

        setTimeout(() => {
            // Validación extra: mesas solicitadas debe ser un número positivo
            if (typeof mesasSolicitadas !== "number" || mesasSolicitadas <= 0) {
                reject("El número de mesas solicitadas debe ser un número mayor a 0.");
                return;
            }

            if (mesasSolicitadas <= mesasDisponibles) {
                resolve({
                    disponible: true,
                    mesasSolicitadas,
                    mensaje: `✅ Hay ${mesasDisponibles} mesas disponibles. Se pueden reservar ${mesasSolicitadas}.`
                });
            } else {
                reject(
                    `❌ No hay suficientes mesas. Solicitadas: ${mesasSolicitadas}. Disponibles: ${mesasDisponibles}.`
                );
            }
        }, 2000); // Simula un retraso de 2 segundos
    });
}

// ============================================
// FUNCIÓN: enviarConfirmacionReserva(nombreCliente)
// Simula el envío de un correo de confirmación.
// Usa Math.random() para simular éxito o error.
// ============================================
function enviarConfirmacionReserva(nombreCliente) {
    return new Promise((resolve, reject) => {
        console.log(`📧 Enviando correo de confirmación a ${nombreCliente}...`);

        setTimeout(() => {
            // Math.random() devuelve un número entre 0 y 1.
            // Si es mayor a 0.2 (80% de probabilidad), el correo se envía.
            const exito = Math.random() > 0.2;

            if (exito) {
                resolve(`✅ Correo de confirmación enviado exitosamente a ${nombreCliente}.`);
            } else {
                reject(`❌ Error: No se pudo enviar el correo de confirmación a ${nombreCliente}.`);
            }
        }, 1500); // Simula un retraso de 1.5 segundos
    });
}

// ============================================
// FUNCIÓN PRINCIPAL: hacerReserva(nombreCliente, mesasSolicitadas)
// Usa async/await con try/catch para manejar todo el flujo.
// ============================================
async function hacerReserva(nombreCliente, mesasSolicitadas) {
    console.log("\n============================================");
    console.log(`🍽️  NUEVA RESERVA: ${nombreCliente}`);
    console.log(`   Mesas solicitadas: ${mesasSolicitadas}`);
    console.log("============================================\n");

    try {
        // 1. Verificar disponibilidad
        const resultado = await verificarDisponibilidad(mesasSolicitadas);
        console.log(resultado.mensaje + "\n");

        // 2. Si hay disponibilidad, enviar confirmación
        const confirmacion = await enviarConfirmacionReserva(nombreCliente);
        console.log(confirmacion + "\n");

        console.log(`🎉 ¡Reserva confirmada para ${nombreCliente}!`);
        console.log("============================================\n");
    } catch (error) {
        // Manejo de errores (tanto de disponibilidad como de correo)
        console.log(`⚠️  Error en la reserva: ${error}`);
        console.log("============================================\n");
    }
}

// ============================================
// PRUEBAS: Diferentes escenarios
// ============================================
const ejecutarPruebas = async () => {
    // Prueba 1: Reserva exitosa (3 mesas, hay 5 disponibles)
    await hacerReserva("Juan Pérez", 3);

    // Prueba 2: Reserva exitosa (5 mesas, justo el límite)
    await hacerReserva("María López", 5);

    // Prueba 3: Reserva fallida (7 mesas, solo hay 5)
    await hacerReserva("Carlos Ruiz", 7);

    // Prueba 4: Reserva con valor inválido (0 mesas)
    await hacerReserva("Ana Gómez", 0);

    // Prueba 5: Reserva con valor inválido (número negativo)
    await hacerReserva("Pedro Martínez", -2);
};

// Ejecutar todas las pruebas
ejecutarPruebas();