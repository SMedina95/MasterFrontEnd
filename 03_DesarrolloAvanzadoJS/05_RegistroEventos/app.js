// ============================================
// RETO 05 (Módulo 03): FORMULARIO DE REGISTRO DE EVENTOS
// ============================================

document.addEventListener("DOMContentLoaded", () => {
    // ========== SELECTORES ==========
    const formulario = document.getElementById("registroEvento");
    const successMessage = document.getElementById("successMessage");

    // Campos
    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const telefono = document.getElementById("telefono");
    const intereses = document.querySelectorAll('input[name="intereses"]');
    const horarios = document.querySelectorAll('input[name="horario"]');
    const fecha = document.getElementById("fecha");
    const hora = document.getElementById("hora");
    const archivo = document.getElementById("archivo");

    // Mensajes de error
    const errorNombre = document.getElementById("error-nombre");
    const errorCorreo = document.getElementById("error-correo");
    const errorTelefono = document.getElementById("error-telefono");
    const errorIntereses = document.getElementById("error-intereses");
    const errorHorario = document.getElementById("error-horario");
    const errorFecha = document.getElementById("error-fecha");
    const errorHora = document.getElementById("error-hora");
    const errorArchivo = document.getElementById("error-archivo");

    // ========== FUNCIONES DE VALIDACIÓN ==========

    // Validar nombre (solo letras y espacios, mínimo 3 caracteres)
    const validarNombre = () => {
        const valor = nombre.value.trim();
        const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/;

        if (valor === "") {
            errorNombre.textContent = "El nombre es obligatorio.";
            nombre.classList.add("error");
            nombre.classList.remove("success");
            return false;
        }
        if (!regex.test(valor)) {
            errorNombre.textContent = "El nombre solo puede contener letras y espacios (mín. 3 caracteres).";
            nombre.classList.add("error");
            nombre.classList.remove("success");
            return false;
        }
        errorNombre.textContent = "";
        nombre.classList.remove("error");
        nombre.classList.add("success");
        return true;
    };

    // Validar correo (formato estándar)
    const validarCorreo = () => {
        const valor = correo.value.trim();
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (valor === "") {
            errorCorreo.textContent = "El correo es obligatorio.";
            correo.classList.add("error");
            correo.classList.remove("success");
            return false;
        }
        if (!regex.test(valor)) {
            errorCorreo.textContent = "El correo no tiene un formato válido (ej: usuario@dominio.com).";
            correo.classList.add("error");
            correo.classList.remove("success");
            return false;
        }
        errorCorreo.textContent = "";
        correo.classList.remove("error");
        correo.classList.add("success");
        return true;
    };

    // Validar teléfono (exactamente 10 dígitos)
    const validarTelefono = () => {
        const valor = telefono.value.trim();
        const regex = /^\d{10}$/;

        if (valor === "") {
            errorTelefono.textContent = "El teléfono es obligatorio.";
            telefono.classList.add("error");
            telefono.classList.remove("success");
            return false;
        }
        if (!regex.test(valor)) {
            errorTelefono.textContent = "El teléfono debe tener exactamente 10 dígitos numéricos.";
            telefono.classList.add("error");
            telefono.classList.remove("success");
            return false;
        }
        errorTelefono.textContent = "";
        telefono.classList.remove("error");
        telefono.classList.add("success");
        return true;
    };

    // Validar intereses (al menos uno seleccionado)
    const validarIntereses = () => {
        const seleccionados = document.querySelectorAll('input[name="intereses"]:checked');

        if (seleccionados.length === 0) {
            errorIntereses.textContent = "Debes seleccionar al menos un interés.";
            return false;
        }
        errorIntereses.textContent = "";
        return true;
    };

    // Validar horario (uno seleccionado)
    const validarHorario = () => {
        const seleccionado = document.querySelector('input[name="horario"]:checked');

        if (!seleccionado) {
            errorHorario.textContent = "Debes seleccionar un horario.";
            return false;
        }
        errorHorario.textContent = "";
        return true;
    };

    // Validar fecha (no puede ser en el pasado)
    const validarFecha = () => {
        const valor = fecha.value;

        if (valor === "") {
            errorFecha.textContent = "La fecha es obligatoria.";
            fecha.classList.add("error");
            fecha.classList.remove("success");
            return false;
        }

        // Comparar con la fecha actual (sin hora)
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);
        const fechaSeleccionada = new Date(valor + "T00:00:00");

        if (fechaSeleccionada < hoy) {
            errorFecha.textContent = "La fecha no puede ser en el pasado.";
            fecha.classList.add("error");
            fecha.classList.remove("success");
            return false;
        }
        errorFecha.textContent = "";
        fecha.classList.remove("error");
        fecha.classList.add("success");
        return true;
    };

    // Validar hora (entre 08:00 y 20:00)
    const validarHora = () => {
        const valor = hora.value;

        if (valor === "") {
            errorHora.textContent = "La hora es obligatoria.";
            hora.classList.add("error");
            hora.classList.remove("success");
            return false;
        }

        const [horas] = valor.split(":").map(Number);

        if (horas < 8 || horas >= 20) {
            errorHora.textContent = "La hora debe estar entre las 08:00 y las 20:00.";
            hora.classList.add("error");
            hora.classList.remove("success");
            return false;
        }
        errorHora.textContent = "";
        hora.classList.remove("error");
        hora.classList.add("success");
        return true;
    };

    // Validar archivo (opcional, pero si se sube, que sea válido)
    const validarArchivo = () => {
        if (archivo.files.length === 0) {
            // Es opcional, así que no es un error
            errorArchivo.textContent = "";
            return true;
        }

        const file = archivo.files[0];
        const maxSize = 2 * 1024 * 1024; // 2 MB
        const tiposPermitidos = ["application/pdf", "image/jpeg", "image/png"];
        const extensionesPermitidas = [".pdf", ".jpg", ".jpeg", ".png"];

        // Verificar tamaño
        if (file.size > maxSize) {
            errorArchivo.textContent = "El archivo no debe superar los 2 MB.";
            archivo.classList.add("error");
            return false;
        }

        // Verificar extensión
        const nombreArchivo = file.name.toLowerCase();
        const extensionValida = extensionesPermitidas.some((ext) =>
            nombreArchivo.endsWith(ext)
        );

        if (!extensionValida) {
            errorArchivo.textContent = "Solo se permiten archivos PDF, JPG o PNG.";
            archivo.classList.add("error");
            return false;
        }

        errorArchivo.textContent = "";
        archivo.classList.remove("error");
        archivo.classList.add("success");
        return true;
    };

    // ========== VALIDACIÓN EN TIEMPO REAL ==========
    nombre.addEventListener("blur", validarNombre);
    correo.addEventListener("blur", validarCorreo);
    telefono.addEventListener("blur", validarTelefono);
    fecha.addEventListener("change", validarFecha);
    hora.addEventListener("change", validarHora);
    archivo.addEventListener("change", validarArchivo);

    intereses.forEach((checkbox) => {
        checkbox.addEventListener("change", validarIntereses);
    });

    horarios.forEach((radio) => {
        radio.addEventListener("change", validarHorario);
    });

    // ========== EVENTO SUBMIT ==========
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        // Ejecutamos todas las validaciones
        const esNombreValido = validarNombre();
        const esCorreoValido = validarCorreo();
        const esTelefonoValido = validarTelefono();
        const esInteresesValido = validarIntereses();
        const esHorarioValido = validarHorario();
        const esFechaValida = validarFecha();
        const esHoraValida = validarHora();
        const esArchivoValido = validarArchivo();

        const todoValido =
            esNombreValido &&
            esCorreoValido &&
            esTelefonoValido &&
            esInteresesValido &&
            esHorarioValido &&
            esFechaValida &&
            esHoraValida &&
            esArchivoValido;

        if (!todoValido) {
            // Hacemos scroll al primer error
            const primerError = document.querySelector(".error");
            if (primerError) {
                primerError.scrollIntoView({ behavior: "smooth", block: "center" });
                primerError.focus();
            }
            return;
        }

        // Si todo es válido, recopilamos los datos
        const interesesSeleccionados = Array.from(
            document.querySelectorAll('input[name="intereses"]:checked')
        ).map((cb) => cb.value);

        const horarioSeleccionado = document.querySelector('input[name="horario"]:checked').value;

        const datos = {
            nombre: nombre.value.trim(),
            correo: correo.value.trim(),
            telefono: telefono.value.trim(),
            intereses: interesesSeleccionados,
            horario: horarioSeleccionado,
            fecha: fecha.value,
            hora: hora.value,
            archivo: archivo.files.length > 0 ? archivo.files[0].name : "Ninguno",
        };

        console.log("📋 Datos del formulario:", datos);

        // Mostrar mensaje de éxito
        mostrarExito(datos);

        // Resetear formulario
        formulario.reset();
        document.querySelectorAll(".success").forEach((el) => el.classList.remove("success"));
    });

    // ========== FUNCIÓN: mostrarExito(datos) ==========
    const mostrarExito = (datos) => {
        successMessage.classList.remove("hidden");
        successMessage.innerHTML = `
            <h2>✅ ¡Registro exitoso!</h2>
            <p>Gracias por registrarte, <strong>${datos.nombre}</strong>. Aquí está el resumen:</p>
            <ul>
                <li><strong>Correo:</strong> ${datos.correo}</li>
                <li><strong>Teléfono:</strong> ${datos.telefono}</li>
                <li><strong>Intereses:</strong> ${datos.intereses.join(", ")}</li>
                <li><strong>Horario:</strong> ${datos.horario}</li>
                <li><strong>Fecha:</strong> ${datos.fecha}</li>
                <li><strong>Hora:</strong> ${datos.hora}</li>
                <li><strong>Archivo:</strong> ${datos.archivo}</li>
            </ul>
        `;

        successMessage.scrollIntoView({ behavior: "smooth", block: "start" });

        // Ocultar el mensaje después de 10 segundos
        setTimeout(() => {
            successMessage.classList.add("hidden");
        }, 10000);
    };
});