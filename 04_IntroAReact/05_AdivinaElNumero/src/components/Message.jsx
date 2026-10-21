// ============================================
// COMPONENTE: Message.jsx
// Muestra mensajes de pista o éxito
// ============================================

function Message({ tipo, texto }) {
    // Renderizado condicional: si no hay mensaje, no muestra nada
    if (!texto) return null;

    return (
        <div className={`message ${tipo}`}>
            {tipo === "success" && "🎉 "}
            {tipo === "hint" && "💡 "}
            {tipo === "error" && "⚠️ "}
            {texto}
        </div>
    );
}

export default Message;