// ============================================
// COMPONENTE: Tarjeta.jsx
// Tarjeta de presentación con información estática
// ============================================
import React from 'react';
function Tarjeta() {
    const nombre = "Stephanie Elizabeth Medina Ponce";
    const profesion = "Desarrolladora Web";
    const mensaje = "¡Bienvenido a mi tarjeta de presentación!";
    const email = "s.e.medina.ponce@gmail.com";
    const ubicacion = "Tijuana Baja California, México";
    const habilidades = ["JavaScript", "React", "Node.js", "CSS"];

    const estilos = {
        card: {
            border: "1px solid #e0e0e0",
            borderRadius: "15px",
            padding: "30px",
            width: "350px",
            textAlign: "center",
            backgroundColor: "#ffffff",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            fontFamily: "'Segoe UI', sans-serif",
            margin: "20px auto",
        },
        avatar: {
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: "#667eea",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2.5em",
            fontWeight: "bold",
            margin: "0 auto 15px",
        },
        nombre: { fontSize: "1.5em", color: "#333", margin: "0 0 5px" },
        profesion: { fontSize: "1em", color: "#667eea", fontWeight: "600", margin: "0 0 15px" },
        mensaje: { fontSize: "0.95em", color: "#666", lineHeight: "1.5", margin: "0 0 20px" },
        info: { display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.85em", color: "#888", marginBottom: "20px" },
        skillsContainer: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px" },
        skill: { backgroundColor: "#f0f0ff", color: "#667eea", padding: "5px 12px", borderRadius: "20px", fontSize: "0.8em", fontWeight: "600" },
    };

    return (
        <div style={estilos.card}>
            <div style={estilos.avatar}>{nombre.charAt(0)}</div>
            <h2 style={estilos.nombre}>{nombre}</h2>
            <h4 style={estilos.profesion}>{profesion}</h4>
            <p style={estilos.mensaje}>{mensaje}</p>
            <div style={estilos.info}>
                <span>📧 {email}</span>
                <span>📍 {ubicacion}</span>
            </div>
            <div style={estilos.skillsContainer}>
                {habilidades.map((skill, index) => (
                    <span key={index} style={estilos.skill}>{skill}</span>
                ))}
            </div>
        </div>
    );
}

export default Tarjeta;