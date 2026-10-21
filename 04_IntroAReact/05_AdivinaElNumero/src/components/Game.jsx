// ============================================
// COMPONENTE: Game.jsx
// Lógica principal del juego Adivina el Número
// ============================================

import { useState } from "react";
import InputNumber from "./InputNumber";
import Message from "./Message";
import RestartButton from "./RestartButton";

function Game() {
    // ========== ESTADOS ==========
    const [numeroSecreto, setNumeroSecreto] = useState(
        () => Math.floor(Math.random() * 100) + 1
    );
    const [numeroJugador, setNumeroJugador] = useState("");
    const [mensaje, setMensaje] = useState({ tipo: "", texto: "" });
    const [intentos, setIntentos] = useState(0);
    const [juegoTerminado, setJuegoTerminado] = useState(false);

    // ========== FUNCIÓN: verificarNumero() ==========
    const verificarNumero = () => {
        const numero = parseInt(numeroJugador);

        // Validación
        if (isNaN(numero) || numero < 1 || numero > 100) {
            setMensaje({
                tipo: "error",
                texto: "Por favor, ingresa un número válido entre 1 y 100.",
            });
            return;
        }

        const nuevosIntentos = intentos + 1;
        setIntentos(nuevosIntentos);

        // Comparación (renderizado condicional)
        if (numero === numeroSecreto) {
            setMensaje({
                tipo: "success",
                texto: `¡Felicidades! Adivinaste el número en ${nuevosIntentos} intento(s).`,
            });
            setJuegoTerminado(true);
        } else if (numero < numeroSecreto) {
            setMensaje({
                tipo: "hint",
                texto: "El número secreto es más alto.",
            });
        } else {
            setMensaje({
                tipo: "hint",
                texto: "El número secreto es más bajo.",
            });
        }

        setNumeroJugador("");
    };

    // ========== FUNCIÓN: reiniciarJuego() ==========
    const reiniciarJuego = () => {
        setNumeroSecreto(Math.floor(Math.random() * 100) + 1);
        setNumeroJugador("");
        setMensaje({ tipo: "", texto: "" });
        setIntentos(0);
        setJuegoTerminado(false);
    };

    // ========== RENDER ==========
    return (
        <div className="game-container">
            <h2>Adivina el Número</h2>
            <p className="instrucciones">
                La computadora ha generado un número entre 1 y 100. ¡Intenta adivinarlo!
            </p>

            <div className="juego-input">
                <InputNumber
                    value={numeroJugador}
                    onChange={(e) => setNumeroJugador(e.target.value)}
                    onEnter={verificarNumero}
                    disabled={juegoTerminado}
                />

                {!juegoTerminado && (
                    <button className="btn-adivinar" onClick={verificarNumero}>
                        Adivinar
                    </button>
                )}
            </div>

            <Message tipo={mensaje.tipo} texto={mensaje.texto} />

            <div className="intentos">
                Intentos: <strong>{intentos}</strong>
            </div>

            <RestartButton onRestart={reiniciarJuego} visible={juegoTerminado} />
        </div>
    );
}

export default Game;