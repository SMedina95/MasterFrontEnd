// ============================================
// COMPONENTE: TweetForm.jsx
// Formulario para publicar tweets
// ============================================

import { useState } from "react";

function TweetForm({ onAddTweet }) {
    const [text, setText] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmed = text.trim();

        if (!trimmed) {
            setError("El tweet no puede estar vacío.");
            return;
        }

        if (trimmed.length > 280) {
            setError("El tweet no puede superar los 280 caracteres.");
            return;
        }

        onAddTweet(trimmed);
        setText("");
        setError("");
    };

    return (
        <form className="tweet-form" onSubmit={handleSubmit}>
            <textarea
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                    if (error) setError("");
                }}
                placeholder="¿Qué estás pensando?"
                rows="3"
                maxLength="280"
            />
            <div className="tweet-form-footer">
                <span className={`char-counter ${text.length > 280 ? "error" : ""}`}>
                    {text.length}/280
                </span>
                <button type="submit">🐦 Twittear</button>
            </div>
            {error && <p className="error-message">{error}</p>}
        </form>
    );
}

export default TweetForm;