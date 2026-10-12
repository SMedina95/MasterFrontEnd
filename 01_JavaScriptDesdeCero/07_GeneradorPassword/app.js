// ============================================
// RETO 07: GENERADOR DE CONTRASEÑAS SEGURAS
// ============================================

document.addEventListener("DOMContentLoaded", () => {
    // ========== SELECTORES ==========
    const passwordOutput = document.getElementById("passwordOutput");
    const btnCopiar = document.getElementById("btnCopiar");
    const longitudSlider = document.getElementById("longitud");
    const valorLongitud = document.getElementById("valorLongitud");
    const incluirMayusculas = document.getElementById("incluirMayusculas");
    const incluirMinusculas = document.getElementById("incluirMinusculas");
    const incluirNumeros = document.getElementById("incluirNumeros");
    const incluirSimbolos = document.getElementById("incluirSimbolos");
    const btnGenerar = document.getElementById("btnGenerar");
    const fuerzaLabel = document.getElementById("fuerzaLabel");
    const fuerza = document.querySelector(".fuerza");

    // ========== CARACTERES DISPONIBLES ==========
    const MAYUSCULAS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const MINUSCULAS = "abcdefghijklmnopqrstuvwxyz";
    const NUMEROS = "0123456789";
    const SIMBOLOS = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    // ========== ACTUALIZAR LONGITUD ==========
    longitudSlider.addEventListener("input", () => {
        valorLongitud.textContent = longitudSlider.value;
    });

    // ========== GENERAR CONTRASEÑA ==========
    function generarPassword() {
        let caracteres = "";

        if (incluirMayusculas.checked) caracteres += MAYUSCULAS;
        if (incluirMinusculas.checked) caracteres += MINUSCULAS;
        if (incluirNumeros.checked) caracteres += NUMEROS;
        if (incluirSimbolos.checked) caracteres += SIMBOLOS;

        // Si no hay ninguna opción seleccionada
        if (caracteres === "") {
            alert("Debes seleccionar al menos una opción.");
            return "";
        }

        const longitud = parseInt(longitudSlider.value);
        let password = "";

        // Usamos crypto.getRandomValues para mayor seguridad
        const randomValues = new Uint32Array(longitud);
        crypto.getRandomValues(randomValues);

        for (let i = 0; i < longitud; i++) {
            password += caracteres[randomValues[i] % caracteres.length];
        }

        return password;
    }

    // ========== CALCULAR FUERZA ==========
    function calcularFuerza(password, opcionesActivas) {
        if (password.length === 0) return 0;

        let puntuacion = 0;

        // Sumamos puntos por cada criterio
        if (password.length >= 8) puntuacion++;
        if (password.length >= 12) puntuacion++;
        if (opcionesActivas >= 3) puntuacion++;
        if (opcionesActivas === 4 && password.length >= 12) puntuacion++;

        return Math.min(puntuacion, 4);
    }

    // ========== ACTUALIZAR INDICADOR DE FUERZA ==========
    function actualizarFuerza(password) {
        const opcionesActivas = [
            incluirMayusculas.checked,
            incluirMinusculas.checked,
            incluirNumeros.checked,
            incluirSimbolos.checked,
        ].filter(Boolean).length;

        const nivel = calcularFuerza(password, opcionesActivas);

        const etiquetas = ["", "TOO WEAK!", "WEAK", "MEDIUM", "STRONG"];
        fuerzaLabel.textContent = etiquetas[nivel] || "";
        fuerza.setAttribute("data-nivel", nivel);
    }

    // ========== BOTÓN GENERAR ==========
    btnGenerar.addEventListener("click", () => {
        const password = generarPassword();
        if (password) {
            passwordOutput.value = password;
            actualizarFuerza(password);
        }
    });

    // ========== BOTÓN COPIAR ==========
    btnCopiar.addEventListener("click", async () => {
        if (!passwordOutput.value) return;

        try {
            await navigator.clipboard.writeText(passwordOutput.value);
            btnCopiar.textContent = "✅";
            btnCopiar.classList.add("copiado");

            setTimeout(() => {
                btnCopiar.textContent = "📋";
                btnCopiar.classList.remove("copiado");
            }, 1500);
        } catch (err) {
            console.error("Error al copiar:", err);
        }
    });

    // ========== GENERAR AL INICIO ==========
    btnGenerar.click();
});