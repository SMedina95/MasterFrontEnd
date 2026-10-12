// ============================================
// RETO 06: CAJA DE COMENTARIOS
// ============================================
// Este programa permite agregar comentarios
// dinámicamente a la página, mostrarlos con
// fecha y hora, y eliminarlos si se desea.
// ============================================

document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formularioComentario");
    const inputComentario = document.getElementById("comentario");
    const listaComentarios = document.getElementById("listaComentarios");
    const contador = document.getElementById("contador");

    let comentarios = [];

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        const texto = inputComentario.value.trim();
        if (texto === "") return;

        // Crear el elemento
        const div = document.createElement("div");
        div.className = "comentario";
        div.innerHTML = `
            <div class="comentario-contenido">
                <p class="comentario-texto">${texto}</p>
                <p class="comentario-fecha">📅 ${new Date().toLocaleString("es-MX")}</p>
            </div>
            <button class="btn-eliminar">🗑️</button>
        `;

        // Eliminar comentario
        div.querySelector(".btn-eliminar").addEventListener("click", () => {
            div.remove();
            comentarios = comentarios.filter((c) => c.texto !== texto);
            contador.textContent = `(${comentarios.length})`;
        });

        // Agregar al DOM
        listaComentarios.appendChild(div);
        comentarios.push({ texto });
        contador.textContent = `(${comentarios.length})`;

        // Limpiar input
        inputComentario.value = "";
        inputComentario.focus();
    });
});