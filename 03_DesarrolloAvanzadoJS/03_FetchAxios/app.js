// ============================================
// RETO 03 (Módulo 03): FETCH Y AXIOS
// Consumo de la API de Rick & Morty
// ============================================

// ========== SELECTORES ==========
const fetchBtn = document.getElementById("fetch-btn");
const axiosBtn = document.getElementById("axios-btn");
const dataContainer = document.getElementById("data-container");
const statusEl = document.getElementById("status");

// URL de la API
const API_URL = "https://rickandmortyapi.com/api/character";

// ========== FUNCIONES AUXILIARES ==========

// Actualizar el estado de la interfaz
const setStatus = (mensaje, tipo = "loading") => {
    statusEl.textContent = mensaje;
    statusEl.className = `status ${tipo}`;
};

// Limpiar el estado
const clearStatus = () => {
    statusEl.textContent = "";
    statusEl.className = "status";
};

// Deshabilitar/Habilitar botones durante la carga
const toggleButtons = (disabled) => {
    fetchBtn.disabled = disabled;
    axiosBtn.disabled = disabled;
};

// Obtener la clase de estado (para el punto de color)
const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
        case "alive": return "alive";
        case "dead": return "dead";
        default: return "unknown";
    }
};

// ========== RENDERIZADO DE PERSONAJES ==========
const renderCharacters = (characters) => {
    dataContainer.innerHTML = "";

    if (!characters || characters.length === 0) {
        dataContainer.innerHTML = `
            <div class="empty-state">
                <div class="icon">👽</div>
                <p>No se encontraron personajes.</p>
            </div>
        `;
        return;
    }

    characters.forEach((character) => {
        const card = document.createElement("div");
        card.classList.add("character-card");

        card.innerHTML = `
            <img src="${character.image}" alt="${character.name}" loading="lazy">
            <div class="character-info">
                <p class="character-name">${character.name}</p>
                <p class="character-status">
                    <span class="status-dot ${getStatusClass(character.status)}"></span>
                    ${character.status} - ${character.species}
                </p>
            </div>
        `;

        dataContainer.appendChild(card);
    });
};

// ========== FETCH ==========
fetchBtn.addEventListener("click", async () => {
    toggleButtons(true);
    setStatus("🌐 Cargando con Fetch...", "loading");
    dataContainer.innerHTML = "";

    const startTime = performance.now();

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const endTime = performance.now();
        const duration = (endTime - startTime).toFixed(2);

        renderCharacters(data.results);
        setStatus(`✅ Fetch completado en ${duration} ms (${data.results.length} personajes)`, "success");
        console.log("Fetch:", data.results);
    } catch (error) {
        console.error("Error con Fetch:", error);
        setStatus(`❌ Error con Fetch: ${error.message}`, "error");
        dataContainer.innerHTML = `
            <div class="empty-state">
                <div class="icon">⚠️</div>
                <p>Hubo un error al obtener los datos con Fetch.</p>
            </div>
        `;
    } finally {
        toggleButtons(false);
    }
});

// ========== AXIOS ==========
axiosBtn.addEventListener("click", async () => {
    toggleButtons(true);
    setStatus("⚡ Cargando con Axios...", "loading");
    dataContainer.innerHTML = "";

    const startTime = performance.now();

    try {
        const response = await axios.get(API_URL);
        const data = response.data;
        const endTime = performance.now();
        const duration = (endTime - startTime).toFixed(2);

        renderCharacters(data.results);
        setStatus(`✅ Axios completado en ${duration} ms (${data.results.length} personajes)`, "success");
        console.log("Axios:", data.results);
    } catch (error) {
        console.error("Error con Axios:", error);
        // Axios tiene una estructura de error más detallada
        const mensaje = error.response
            ? `Error ${error.response.status}: ${error.response.statusText}`
            : error.message;
        setStatus(`❌ Error con Axios: ${mensaje}`, "error");
        dataContainer.innerHTML = `
            <div class="empty-state">
                <div class="icon">⚠️</div>
                <p>Hubo un error al obtener los datos con Axios.</p>
            </div>
        `;
    } finally {
        toggleButtons(false);
    }
});

// ========== INICIALIZACIÓN ==========
console.log("👽 Rick & Morty: Fetch vs Axios");
console.log("   Haz clic en un botón para cargar los personajes");

dataContainer.innerHTML = `
    <div class="empty-state">
        <div class="icon">👽</div>
        <p>Haz clic en un botón para cargar los personajes.</p>
    </div>
`;