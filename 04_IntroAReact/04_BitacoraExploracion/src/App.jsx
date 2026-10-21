import { useState, useEffect, useRef, useMemo } from "react";
import Planeta from "./Planeta";
import "./App.css";

function App() {
    // ========== ESTADOS ==========
    // Cargar planetas desde localStorage (o array vacío)
    const [planetas, setPlanetas] = useState(() => {
        const guardados = localStorage.getItem("planetas");
        return guardados ? JSON.parse(guardados) : [];
    });

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [imagen, setImagen] = useState(null);
    const [filtro, setFiltro] = useState("");

    // useRef para limpiar el input de archivo
    const inputImagenRef = useRef(null);

    // ========== useMemo: Planetas filtrados ==========
    const planetasFiltrados = useMemo(() => {
        if (!filtro.trim()) return planetas;
        return planetas.filter((p) =>
            p.nombre.toLowerCase().includes(filtro.toLowerCase())
        );
    }, [planetas, filtro]);

    // ========== useEffect: Guardar en localStorage ==========
    useEffect(() => {
        localStorage.setItem("planetas", JSON.stringify(planetas));
    }, [planetas]);

    // ========== FUNCIÓN: agregarPlaneta() ==========
    const agregarPlaneta = (e) => {
        e.preventDefault();

        if (!nombre.trim() || !descripcion.trim()) {
            alert("Por favor, completa el nombre y la descripción.");
            return;
        }

        const nuevoPlaneta = {
            id: Date.now(),
            nombre: nombre.trim(),
            descripcion: descripcion.trim(),
            imagen: imagen ? URL.createObjectURL(imagen) : null,
        };

        setPlanetas([...planetas, nuevoPlaneta]);

        // Limpiar formulario
        setNombre("");
        setDescripcion("");
        setImagen(null);
        if (inputImagenRef.current) inputImagenRef.current.value = "";
    };

    // ========== FUNCIÓN: eliminarPlaneta(nombre) ==========
    const eliminarPlaneta = (nombre) => {
        const confirmar = confirm(`¿Eliminar el planeta "${nombre}"?`);
        if (!confirmar) return;

        setPlanetas(planetas.filter((p) => p.nombre !== nombre));
    };

    // ========== RENDER ==========
    return (
        <div className="bitacora">
            <h1>🚀 Bitácora de Exploración</h1>
            <p className="subtitulo">Registra los planetas que has visitado en tu viaje espacial.</p>

            {/* Formulario */}
            <form onSubmit={agregarPlaneta} className="formulario">
                <input
                    type="text"
                    placeholder="Nombre del planeta"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <textarea
                    placeholder="Descripción del planeta"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    rows="2"
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImagen(e.target.files[0])}
                    ref={inputImagenRef}
                />
                <button type="submit">➕ Registrar Planeta</button>
            </form>

            {/* Buscador */}
            {planetas.length > 0 && (
                <input
                    type="text"
                    placeholder="🔍 Buscar planeta..."
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                    className="buscador"
                />
            )}

            {/* Lista de planetas */}
            <h2>Planetas Registrados ({planetasFiltrados.length})</h2>

            {planetasFiltrados.length === 0 ? (
                <p className="lista-vacia">
                    {planetas.length === 0
                        ? "📭 No has registrado ningún planeta. ¡Empieza tu bitácora!"
                        : "🔍 No se encontraron planetas con ese nombre."}
                </p>
            ) : (
                <div className="lista-planetas">
                    {planetasFiltrados.map((planeta) => (
                        <Planeta
                            key={planeta.id}
                            nombre={planeta.nombre}
                            descripcion={planeta.descripcion}
                            imagen={planeta.imagen}
                            onEliminar={eliminarPlaneta}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;