// ============================================
// COMPONENTE: App.jsx
// Componente principal que renderiza la tarjeta
// ============================================
import React from 'react';
import Tarjeta from "./Tarjeta";
import "./App.css";

function App() {
    return (
        <div className="app-container">
            <h1 className="titulo">🌟 Tarjeta de Presentación 🌟</h1>
            <Tarjeta />
        </div>
    );
}

export default App;