// ============================================
// COMPONENTE: InputNumber.jsx
// Campo de entrada para el número del jugador
// ============================================

function InputNumber({ value, onChange, onEnter, disabled }) {
    return (
        <div className="input-number">
            <input
                type="number"
                value={value}
                onChange={onChange}
                onKeyDown={(e) => {
                    if (e.key === "Enter") onEnter();
                }}
                placeholder="Ingresa un número (1-100)"
                min="1"
                max="100"
                disabled={disabled}
            />
        </div>
    );
}

export default InputNumber;