// ============================================
// RETO 09: BIBLIOTECA CRUD
// Sistema de gestión de libros con capítulos
// ============================================

document.addEventListener("DOMContentLoaded", () => {
    // ========== SELECTORES ==========
    const formulario = document.getElementById("formularioLibro");
    const tituloFormulario = document.getElementById("tituloFormulario");
    const libroIdInput = document.getElementById("libroId");
    const inputTitulo = document.getElementById("titulo");
    const inputAutor = document.getElementById("autor");
    const inputAnio = document.getElementById("anio");
    const inputEstado = document.getElementById("estado");
    const btnGuardar = document.getElementById("btnGuardar");
    const btnCancelar = document.getElementById("btnCancelar");
    const listaLibros = document.getElementById("listaLibros");
    const contadorLibros = document.getElementById("contadorLibros");
    const buscador = document.getElementById("buscador");

    // Modal de capítulos
    const modal = document.getElementById("modalCapitulos");
    const modalTitulo = document.getElementById("modalTitulo");
    const btnCerrarModal = document.getElementById("btnCerrarModal");
    const formularioCapitulo = document.getElementById("formularioCapitulo");
    const nuevoCapitulo = document.getElementById("nuevoCapitulo");
    const listaCapitulos = document.getElementById("listaCapitulos");

    // ========== ESTADO ==========
    const STORAGE_KEY = "biblioteca_libros";
    let libros = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    let libroEditandoId = null;
    let libroCapitulosId = null;

    // ========== PERSISTENCIA ==========
    function guardarEnStorage() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(libros));
    }

    // ========== UTILIDADES ==========
    function generarId() {
        return Date.now() + Math.floor(Math.random() * 1000);
    }

    function actualizarContador() {
        const filtro = buscador.value.trim().toLowerCase();
        const librosFiltrados = filtro
            ? libros.filter(
                  (l) =>
                      l.titulo.toLowerCase().includes(filtro) ||
                      l.autor.toLowerCase().includes(filtro)
              )
            : libros;

        contadorLibros.textContent = `(${librosFiltrados.length})`;
    }

    // ========== MÉTODOS DEL LIBRO ==========
    function describirLibro(libro) {
        return `Libro titulado "${libro.titulo}", escrito por ${libro.autor} en el año ${libro.anio}, el estado es: ${libro.estado}.`;
    }

    // ========== RENDERIZADO DE LIBROS ==========
    function crearElementoLibro(libro) {
        const card = document.createElement("div");
        card.classList.add("libro-card");
        card.dataset.id = libro.id;
        card.dataset.estado = libro.estado;

        const numCapitulos = libro.capitulos ? libro.capitulos.length : 0;

        card.innerHTML = `
            <div class="libro-info">
                <p class="libro-titulo">${libro.titulo}</p>
                <p class="libro-detalles">
                    ✍️ ${libro.autor} · 📅 ${libro.anio} · 📖 ${numCapitulos} capítulo${numCapitulos !== 1 ? "s" : ""}
                </p>
                <span class="libro-estado ${libro.estado}">${libro.estado}</span>
            </div>
            <div class="libro-acciones">
                <button class="btn-accion btn-capitulos" data-accion="capitulos">📖 Capítulos</button>
                <button class="btn-accion btn-editar" data-accion="editar">✏️ Editar</button>
                <button class="btn-accion btn-eliminar" data-accion="eliminar">🗑️ Eliminar</button>
            </div>
        `;

        // Eventos de los botones
        card.querySelector('[data-accion="capitulos"]').addEventListener("click", () =>
            abrirModalCapitulos(libro.id)
        );
        card.querySelector('[data-accion="editar"]').addEventListener("click", () =>
            cargarLibroParaEditar(libro.id)
        );
        card.querySelector('[data-accion="eliminar"]').addEventListener("click", () =>
            eliminarLibro(libro.id)
        );

        return card;
    }

    function renderizarLibros() {
        const filtro = buscador.value.trim().toLowerCase();
        const librosFiltrados = filtro
            ? libros.filter(
                  (l) =>
                      l.titulo.toLowerCase().includes(filtro) ||
                      l.autor.toLowerCase().includes(filtro)
              )
            : libros;

        listaLibros.innerHTML = "";

        if (librosFiltrados.length === 0) {
            listaLibros.innerHTML = `
                <p class="sin-libros">
                    ${libros.length === 0
                        ? "Aún no tienes libros. ¡Agrega el primero!"
                        : "No se encontraron libros con ese criterio."}
                </p>
            `;
        } else {
            librosFiltrados.forEach((libro) => {
                listaLibros.appendChild(crearElementoLibro(libro));
            });
        }

        actualizarContador();
    }

    // ========== CRUD: AGREGAR / EDITAR ==========
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const titulo = inputTitulo.value.trim();
        const autor = inputAutor.value.trim();
        const anio = parseInt(inputAnio.value);
        const estado = inputEstado.value;

        if (!titulo || !autor || !anio) return;

        if (libroEditandoId) {
            // EDITAR
            const libro = libros.find((l) => l.id === libroEditandoId);
            if (libro) {
                libro.titulo = titulo;
                libro.autor = autor;
                libro.anio = anio;
                libro.estado = estado;
            }
            mostrarNotificacion("✅ Libro actualizado correctamente");
        } else {
            // AGREGAR
            const nuevoLibro = {
                id: generarId(),
                titulo,
                autor,
                anio,
                estado,
                capitulos: [],
            };
            libros.push(nuevoLibro);
            mostrarNotificacion("✅ Libro agregado correctamente");
        }

        guardarEnStorage();
        resetearFormulario();
        renderizarLibros();
    });

    function cargarLibroParaEditar(id) {
        const libro = libros.find((l) => l.id === id);
        if (!libro) return;

        libroEditandoId = id;
        libroIdInput.value = id;
        inputTitulo.value = libro.titulo;
        inputAutor.value = libro.autor;
        inputAnio.value = libro.anio;
        inputEstado.value = libro.estado;

        tituloFormulario.textContent = "✏️ Editar Libro";
        btnGuardar.textContent = "💾 Actualizar Libro";
        btnCancelar.style.display = "block";

        // Scroll hacia el formulario
        formulario.scrollIntoView({ behavior: "smooth", block: "center" });
        inputTitulo.focus();
    }

    function resetearFormulario() {
        formulario.reset();
        libroEditandoId = null;
        libroIdInput.value = "";
        tituloFormulario.textContent = "➕ Agregar Nuevo Libro";
        btnGuardar.textContent = "💾 Guardar Libro";
        btnCancelar.style.display = "none";
    }

    btnCancelar.addEventListener("click", resetearFormulario);

    // ========== CRUD: ELIMINAR ==========
    function eliminarLibro(id) {
        const libro = libros.find((l) => l.id === id);
        if (!libro) return;

        if (!confirm(`¿Estás seguro de que quieres eliminar "${libro.titulo}"?`)) return;

        libros = libros.filter((l) => l.id !== id);
        guardarEnStorage();
        renderizarLibros();
        mostrarNotificacion("🗑️ Libro eliminado");
    }

    // ========== MODAL DE CAPÍTULOS ==========
    function abrirModalCapitulos(id) {
        libroCapitulosId = id;
        const libro = libros.find((l) => l.id === id);
        if (!libro) return;

        modalTitulo.textContent = `📖 Capítulos de: ${libro.titulo}`;
        renderizarCapitulos();
        modal.classList.add("active");
        nuevoCapitulo.focus();
    }

    function renderizarCapitulos() {
        const libro = libros.find((l) => l.id === libroCapitulosId);
        if (!libro) return;

        listaCapitulos.innerHTML = "";

        if (!libro.capitulos || libro.capitulos.length === 0) {
            listaCapitulos.innerHTML = `<li class="sin-capitulos">No hay capítulos registrados.</li>`;
            return;
        }

        libro.capitulos.forEach((capitulo, index) => {
            const li = document.createElement("li");
            li.classList.add("capitulo-item");
            li.innerHTML = `
                <span>${index + 1}. ${capitulo}</span>
                <button class="btn-eliminar-capitulo" title="Eliminar capítulo">🗑️</button>
            `;
            li.querySelector(".btn-eliminar-capitulo").addEventListener("click", () =>
                eliminarCapitulo(index)
            );
            listaCapitulos.appendChild(li);
        });
    }

    formularioCapitulo.addEventListener("submit", (event) => {
        event.preventDefault();
        const texto = nuevoCapitulo.value.trim();
        if (!texto) return;

        const libro = libros.find((l) => l.id === libroCapitulosId);
        if (!libro) return;

        if (!libro.capitulos) libro.capitulos = [];
        libro.capitulos.push(texto);

        guardarEnStorage();
        nuevoCapitulo.value = "";
        nuevoCapitulo.focus();
        renderizarCapitulos();
        renderizarLibros(); // Para actualizar el conteo en la tarjeta
    });

    function eliminarCapitulo(index) {
        const libro = libros.find((l) => l.id === libroCapitulosId);
        if (!libro || !libro.capitulos) return;

        libro.capitulos.splice(index, 1);
        guardarEnStorage();
        renderizarCapitulos();
        renderizarLibros();
    }

    btnCerrarModal.addEventListener("click", () => {
        modal.classList.remove("active");
        libroCapitulosId = null;
    });

    // Cerrar modal al hacer clic fuera
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.remove("active");
            libroCapitulosId = null;
        }
    });

    // ========== BUSCADOR ==========
    buscador.addEventListener("input", renderizarLibros);

    // ========== NOTIFICACIONES ==========
    function mostrarNotificacion(mensaje) {
        const notif = document.createElement("div");
        notif.textContent = mensaje;
        notif.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #28a745;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            font-weight: 600;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 2000;
            animation: aparecer 0.3s ease;
        `;
        document.body.appendChild(notif);

        setTimeout(() => {
            notif.style.opacity = "0";
            notif.style.transition = "opacity 0.3s ease";
            setTimeout(() => notif.remove(), 300);
        }, 2000);
    }

    // ========== INICIALIZACIÓN ==========
    renderizarLibros();

    // Si no hay libros, agregamos un par de ejemplo
    if (libros.length === 0) {
        libros.push(
            {
                id: generarId(),
                titulo: "Cien años de soledad",
                autor: "Gabriel García Márquez",
                anio: 1967,
                estado: "disponible",
                capitulos: ["Capítulo 1: Macondo", "Capítulo 2: José Arcadio Buendía"],
            },
            {
                id: generarId(),
                titulo: "1984",
                autor: "George Orwell",
                anio: 1949,
                estado: "prestado",
                capitulos: [],
            }
        );
        guardarEnStorage();
        renderizarLibros();
    }
});