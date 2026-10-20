// ============================================
// RETO 06 (Módulo 03): VALIDACIÓN CON ZOD
// ============================================

document.addEventListener("DOMContentLoaded", () => {
    // ========== VERIFICAR QUE ZOD ESTÉ CARGADO ==========
    const { z } = window.Zod;

    if (!z) {
        console.error("❌ Zod no se cargó correctamente. Verifica el CDN.");
        return;
    }

    console.log("✅ Zod cargado correctamente");

    // ========== SELECTORES ==========
    const form = document.getElementById("registerForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const errorsContainer = document.getElementById("errors");
    const successMessage = document.getElementById("successMessage");

    // ========== ESQUEMA DE VALIDACIÓN CON ZOD ==========
    const registerSchema = z.object({
        // El nombre debe ser una cadena no vacía (mínimo 2 caracteres)
        name: z
            .string()
            .min(1, "El nombre es obligatorio")
            .min(2, "El nombre debe tener al menos 2 caracteres"),

        // El correo debe tener formato válido
        email: z
            .string()
            .min(1, "El correo es obligatorio")
            .email("El correo no tiene un formato válido"),

        // La contraseña debe tener al menos 6 caracteres
        password: z
            .string()
            .min(1, "La contraseña es obligatoria")
            .min(6, "La contraseña debe tener al menos 6 caracteres"),
    });

    // ========== MOSTRAR ERRORES ==========
    const mostrarErrores = (issues) => {
        // Limpiamos el contenedor
        errorsContainer.innerHTML = "";
        errorsContainer.classList.remove("visible");

        // Quitamos las clases de error de los inputs
        [nameInput, emailInput, passwordInput].forEach((input) => {
            input.classList.remove("error", "success");
        });

        if (issues.length === 0) return;

        // Agrupamos los errores por campo
        const erroresPorCampo = {};
        issues.forEach((issue) => {
            const campo = issue.path[0];
            if (!erroresPorCampo[campo]) {
                erroresPorCampo[campo] = [];
            }
            erroresPorCampo[campo].push(issue.message);
        });

        // Marcamos los inputs con error
        Object.keys(erroresPorCampo).forEach((campo) => {
            const input = document.getElementById(campo);
            if (input) input.classList.add("error");
        });

        // Mostramos los errores en el contenedor
        const ul = document.createElement("ul");
        issues.forEach((issue) => {
            const li = document.createElement("li");
            li.textContent = issue.message;
            ul.appendChild(li);
        });

        errorsContainer.appendChild(ul);
        errorsContainer.classList.add("visible");
    };

    // ========== LIMPIAR ERRORES Y MARCAR ÉXITO ==========
    const limpiarErrores = () => {
        errorsContainer.innerHTML = "";
        errorsContainer.classList.remove("visible");
        [nameInput, emailInput, passwordInput].forEach((input) => {
            input.classList.remove("error");
            input.classList.add("success");
        });
    };

    // ========== EVENTO SUBMIT ==========
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Capturamos los valores del formulario
        const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            password: passwordInput.value,
        };

        try {
            // Validamos con .parse() (lanza error si falla)
            const datosValidados = registerSchema.parse(formData);

            // Si llegamos aquí, los datos son válidos
            console.log("✅ Datos validados:", datosValidados);

            // Limpiamos errores y mostramos éxito
            limpiarErrores();

            successMessage.classList.remove("hidden");
            successMessage.innerHTML = `
                <h2>✅ ¡Registro exitoso!</h2>
                <p>Bienvenido, <strong>${datosValidados.name}</strong>.</p>
                <p>Hemos enviado un correo de confirmación a <strong>${datosValidados.email}</strong>.</p>
            `;

            // Resetear formulario
            form.reset();

            // Ocultar mensaje después de 5 segundos
            setTimeout(() => {
                successMessage.classList.add("hidden");
                [nameInput, emailInput, passwordInput].forEach((input) => {
                    input.classList.remove("success");
                });
            }, 5000);
        } catch (error) {
            // Si la validación falla, mostramos los errores
            console.log("❌ Errores de validación:", error.issues);
            successMessage.classList.add("hidden");
            mostrarErrores(error.issues);
        }
    });

    // ========== INICIALIZACIÓN ==========
    console.log("🔐 Formulario de registro con validación Zod iniciado");
});