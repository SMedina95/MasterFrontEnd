// ============================================
// MÓDULO: datos.js
// Configuración de destinos, transportes y descuentos
// ============================================

// Costos base por destino
export const COSTOS_DESTINO = {
    "Paris": 500,
    "Londres": 400,
    "New York": 600,
    "Tokio": 800,
    "Roma": 450,
    "Cancún": 350
};

// Costos adicionales por transporte
export const COSTOS_TRANSPORTE = {
    "Avión": 200,
    "Tren": 100,
    "Autobús": 50,
    "Barco": 150
};

// Descuentos según el número de personas
export const DESCUENTOS_PERSONAS = [
    { minPersonas: 4, descuento: 0.15 }, // 15% para 4 o más
    { minPersonas: 3, descuento: 0.10 }, // 10% para 3
    { minPersonas: 2, descuento: 0.05 }, // 5% para 2
    { minPersonas: 1, descuento: 0 }     // 0% para 1
];