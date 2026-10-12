// ============================================
// MÓDULO: viajes.js
// Lógica de gestión de viajes (registrar, calcular, mostrar)
// ============================================

import {
    COSTOS_DESTINO,
    COSTOS_TRANSPORTE,
    DESCUENTOS_PERSONAS
} from "./datos.js";

// Arreglo de viajes (const porque la referencia no cambia, aunque el contenido sí)
const viajes = [];

// ============================================
// Función: calcularCosto(destino, transporte, personas)
// Usa función de flecha y retorna el costo total
// ============================================
export const calcularCosto = (destino, transporte, personas = 1) => {
    const costoDestino = COSTOS_DESTINO[destino] || 0;
    const costoTransporte = COSTOS_TRANSPORTE[transporte] || 0;
    const costoBase = costoDestino + costoTransporte;

    // Aplicamos descuento según el número de personas
    const descuento = DESCUENTOS_PERSONAS.find(
        (d) => personas >= d.minPersonas
    )?.descuento || 0;

    const costoTotal = costoBase * personas * (1 - descuento);

    return Math.round(costoTotal * 100) / 100; // Redondeo a 2 decimales
};

// ============================================
// Función: registrarDestino(destino, fecha, transporte, personas)
// Usa función de flecha para agregar un nuevo viaje
// ============================================
export const registrarDestino = (destino, fecha, transporte, personas = 1) => {
    // Validación con destructuring
    const { [destino]: costoDestino } = COSTOS_DESTINO;
    if (!costoDestino) {
        console.warn(`⚠️ Destino no reconocido: "${destino}". Se agregará con costo base 0.`);
    }

    const nuevoViaje = {
        destino,
        fecha,
        transporte,
        personas,
        costo: calcularCosto(destino, transporte, personas)
    };

    viajes.push(nuevoViaje);
    return nuevoViaje; // Retornamos el viaje creado (útil para tests)
};

// ============================================
// Función: mostrarItinerario()
// Usa forEach (ES6) y template literals
// ============================================
export const mostrarItinerario = () => {
    if (viajes.length === 0) {
        console.log("📭 No hay viajes registrados todavía.");
        return;
    }

    console.log("✈️ ====== ITINERARIO DE VIAJES ======\n");

    viajes.forEach((viaje, index) => {
        console.log(`📍 Viaje #${index + 1}`);
        console.log(`   Destino: ${viaje.destino}`);
        console.log(`   Fecha: ${viaje.fecha}`);
        console.log(`   Transporte: ${viaje.transporte}`);
        console.log(`   Personas: ${viaje.personas}`);
        console.log(`   Costo total: $${viaje.costo.toFixed(2)}`);
        console.log("   ---------------------------");
    });

    // Mostramos el total general
    const total = viajes.reduce((acc, v) => acc + v.costo, 0);
    console.log(`\n💰 Costo total de todos los viajes: $${total.toFixed(2)}`);
};

// ============================================
// Función: obtenerViajes()
// Retorna una copia del arreglo (útil para tests)
// ============================================
export const obtenerViajes = () => [...viajes];