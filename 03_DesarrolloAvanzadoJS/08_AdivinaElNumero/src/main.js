// ============================================
// RETO 08 (Módulo 03): ADIVINA EL NÚMERO CON VITE
// ============================================

import "./style.css";

// ========== SELECTORES ==========
const inputNumero = document.getElementById("numero");
const botonAdivinar = document.getElementById("adivinar");
const mensaje = document.getElementById("mensaje");
const intentosEl = document.getElementById("intentos");
const botonReiniciar = document.getElementById("reiniciar");

// ========== ESTADO DEL JUEGO ==========
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let juegoTerminado = false;

console.log("🔢 Número secreto (solo para tramposos):", numeroSecreto);

// ========== FUNCIÓN: reiniciarJuego() ==========
const reiniciarJuego = () => {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    intentos = 0;
    juegoTerminado = false;
    intentosEl.textContent = "0";
    mensaje.textContent = "";
    mensaje.className = "mensaje";
    inputNumero.value = "";
    inputNumero.disabled = false;
    botonAdivinar.disabled = false;
    botonReiniciar.classList.add("hidden");
    inputNumero.focus();

    console.log("🔄 Juego reiniciado. Nuevo número secreto:", numeroSecreto);
};

// ========== FUNCIÓN: verificarNumero() ==========
const verificarNumero = () => {
    if (juegoTerminado) return;

    const numeroJugador = parseInt(inputNumero.value);

    // Validación
    if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
        mensaje.textContent = "⚠️ Por favor, ingresa un número válido entre 1 y 100.";
        mensaje.className = "mensaje error";
        return;
    }

    intentos++;
    intentosEl.textContent = intentos;

    // Comparación
    if (numeroJugador === numeroSecreto) {
        mensaje.textContent = `🎉 ¡Felicidades! ¡Adivinaste el número en ${intentos} intento(s)!`;
        mensaje.className = "mensaje acierto";
        juegoTerminado = true;
        inputNumero.disabled = true;
        botonAdivinar.disabled = true;
        botonReiniciar.classList.remove("hidden");
    } else if (numeroJugador < numeroSecreto) {
        mensaje.textContent = "📈 El número es más alto.";
        mensaje.className = "mensaje pista";
    } else {
        mensaje.textContent = "📉 El número es más bajo.";
        mensaje.className = "mensaje pista";
    }

    inputNumero.value = "";
    inputNumero.focus();
};

// ========== EVENTOS ==========
botonAdivinar.addEventListener("click", verificarNumero);

// Permitir presionar Enter
inputNumero.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        verificarNumero();
    }
});

botonReiniciar.addEventListener("click", reiniciarJuego);

// ========== INICIALIZACIÓN ==========
inputNumero.focus();
console.log("🎮 ¡Bienvenido a Adivina el Número!");