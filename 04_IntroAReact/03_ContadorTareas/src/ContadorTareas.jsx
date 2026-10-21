// ============================================
// COMPONENTE: ContadorTareas.jsx
// useEffect y useMemo en acción
// ============================================

import { useState, useEffect, useMemo } from "react";

function ContadorTareas() {
    // ========== ESTADOS ==========
    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState("");
    const [duracion, setDuracion] = useState("");
    const [filtro, setFiltro] = useState("todas"); // "todas", "cortas", "largas"

    // ========== useMemo: Cálculo del tiempo total ==========
    // Solo se recalcula cuando el arreglo de tareas cambia
    const tiempoTotal = useMemo(() => {
        console.log("🔄 Calculando tiempo total...");
        return tareas.reduce((total, tarea) => total + tarea.duracion, 0);
    }, [tareas]);

    // ========== useMemo: Tareas filtradas ==========
    const tareasFiltradas = useMemo(() => {
        console.log("🔄 Filtrando tareas...");
        switch (filtro) {
            case "cortas":
                return tareas.filter((t) => t.duracion < 30);
            case "largas":
                return tareas.filter((t) => t.duracion >= 30);
            default:
                return tareas;
        }
    }, [tareas, filtro]);

    // ========== useEffect: Actualizar el título del documento ==========
    useEffect(() => {
        document.title = `⏱️ Total: ${tiempoTotal} minutos`;
    }, [tiempoTotal]);

    // ========== useEffect: Persistencia en localStorage ==========
    // Cargar tareas al montar el componente
    useEffect(() => {
        const tareasGuardadas = localStorage.getItem("tareas");
        if (tareasGuardadas) {
            try {
                setTareas(JSON.parse(tareasGuardadas));
            } catch (error) {
                console.error("Error al cargar tareas:", error);
            }
        }
    }, []);

    // Guardar tareas cada vez que cambian
    useEffect(() => {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }, [tareas]);

    // ========== FUNCIÓN: agregarTarea() ==========
    const agregarTarea = () => {
        const nombre = nuevaTarea.trim();
        const duracionNum = parseInt(duracion);

        if (!nombre || isNaN(duracionNum) || duracionNum <= 0) {
            alert("Por favor, ingresa un nombre y una duración válida (mayor a 0).");
            return;
        }

        const nuevaTareaObj = {
            id: Date.now(), // ID único
            nombre,
            duracion: duracionNum,
        };

        setTareas([...tareas, nuevaTareaObj]);
        setNuevaTarea("");
        setDuracion("");
    };

    // ========== FUNCIÓN: eliminarTarea(id) ==========
    const eliminarTarea = (id) => {
        setTareas(tareas.filter((t) => t.id !== id));
    };

    // ========== FUNCIÓN: limpiarTareas() ==========
    const limpiarTareas = () => {
        if (tareas.length === 0) return;
        if (confirm("¿Estás seguro de que quieres eliminar todas las tareas?")) {
            setTareas([]);
        }
    };

    // ========== RENDER ==========
    return (
        <div className="contador-tareas">
            <h2>⏱️ Contador de Tareas</h2>
            <p className="subtitulo">Agrega tareas con su duración y calcula el tiempo total.</p>

            {/* Formulario para agregar tareas */}
            <div className="formulario">
                <input
                    type="text"
                    value={nuevaTarea}
                    onChange={(e) => setNuevaTarea(e.target.value)}
                    placeholder="Nombre de la tarea"
                />
                <input
                    type="number"
                    value={duracion}
                    onChange={(e) => setDuracion(e.target.value)}
                    placeholder="Duración (min)"
                    min="1"
                />
                <button onClick={agregarTarea}>➕ Agregar</button>
            </div>

            {/* Filtros */}
            {tareas.length > 0 && (
                <div className="filtros">
                    <span>Filtrar: </span>
                    <button
                        className={filtro === "todas" ? "activo" : ""}
                        onClick={() => setFiltro("todas")}
                    >
                        Todas ({tareas.length})
                    </button>
                    <button
                        className={filtro === "cortas" ? "activo" : ""}
                        onClick={() => setFiltro("cortas")}
                    >
                        Cortas (&lt;30 min)
                    </button>
                    <button
                        className={filtro === "largas" ? "activo" : ""}
                        onClick={() => setFiltro("largas")}
                    >
                        Largas (≥30 min)
                    </button>
                </div>
            )}

            {/* Lista de tareas */}
            {tareasFiltradas.length === 0 ? (
                <p className="lista-vacia">
                    {tareas.length === 0
                        ? "📭 No hay tareas. ¡Agrega tu primera tarea!"
                        : "🔍 No hay tareas que coincidan con el filtro."}
                </p>
            ) : (
                <ul className="lista-tareas">
                    {tareasFiltradas.map((tarea) => (
                        <li key={tarea.id} className="tarea-item">
                            <span className="tarea-nombre">{tarea.nombre}</span>
                            <span className="tarea-duracion">{tarea.duracion} min</span>
                            <button
                                className="btn-eliminar"
                                onClick={() => eliminarTarea(tarea.id)}
                                title="Eliminar tarea"
                            >
                                🗑️
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            {/* Total de tiempo */}
            <div className="total">
                <h3>⏱️ Tiempo total: {tiempoTotal} minutos</h3>
                {tiempoTotal > 0 && (
                    <p className="equivalencia">
                        ({(tiempoTotal / 60).toFixed(1)} horas)
                    </p>
                )}
            </div>

            {/* Botón limpiar */}
            {tareas.length > 0 && (
                <button className="btn-limpiar" onClick={limpiarTareas}>
                    🗑️ Limpiar todas las tareas
                </button>
            )}
        </div>
    );
}

export default ContadorTareas;