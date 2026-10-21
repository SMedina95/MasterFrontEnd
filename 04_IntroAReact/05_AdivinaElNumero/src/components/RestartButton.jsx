// ============================================
// COMPONENTE: RestartButton.jsx
// Botón para reiniciar el juego
// ============================================

function RestartButton({ onRestart, visible }) {
    // Renderizado condicional: solo se muestra si visible es true
    if (!visible) return null;

    return (
        <button className="btn-reiniciar" onClick={onRestart}>
            🔄 Jugar de nuevo
        </button>
    );
}

export default RestartButton;