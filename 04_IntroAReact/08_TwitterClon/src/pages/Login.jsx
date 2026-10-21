// ============================================
// PÁGINA: Login.jsx
// Inicio de sesión (simulado)
// ============================================

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmed = username.trim();

        if (!trimmed) {
            setError("Por favor, ingresa un nombre de usuario.");
            return;
        }

        if (trimmed.length < 3) {
            setError("El nombre de usuario debe tener al menos 3 caracteres.");
            return;
        }

        // Iniciar sesión (simulado)
        login(trimmed);
        navigate("/");
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h1>🐦 Bienvenido a Twitter</h1>
                <p className="auth-subtitle">Inicia sesión para continuar</p>

                <form onSubmit={handleSubmit} className="auth-form">
                    <input
                        type="text"
                        placeholder="Nombre de usuario"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                            if (error) setError("");
                        }}
                        autoFocus
                    />
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit">Iniciar sesión</button>
                </form>

                <p className="auth-note">
                    💡 Esta es una autenticación simulada. Cualquier nombre de usuario funciona.
                </p>
            </div>
        </div>
    );
}

export default Login;