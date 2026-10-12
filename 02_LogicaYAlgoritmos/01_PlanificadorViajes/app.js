// ============================================
// MÓDULO: app.js
// Punto de entrada de la aplicación
// ============================================

import { registrarDestino, mostrarItinerario } from "./viajes.js";

// ============================================
// Función: iniciarApp()
// Función de flecha que inicializa la app
// ============================================
const iniciarApp = () => {
    console.log("🌍 Bienvenido al Planificador de Viajes\n");

    // Ejemplo de cómo registrar destinos
    registrarDestino("Paris", "2024-06-15", "Avión", 2);
    registrarDestino("Londres", "2024-07-01", "Tren", 1);
    registrarDestino("New York", "2024-08-20", "Avión", 4);
    registrarDestino("Tokio", "2024-09-10", "Barco", 3);
    registrarDestino("Roma", "2024-10-05", "Autobús", 2);
    registrarDestino("Cancún", "2024-11-15", "Avión", 5);

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
};

// Ejecutar la aplicación
iniciarApp();