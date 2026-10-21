import { useEffect } from "react";

function Planeta({ nombre, descripcion, imagen, onEliminar }) {
    useEffect(() => {
        console.log(`¡El planeta ${nombre} ha aparecido!`); // Montaje

        return () => {
            console.log(`¡El planeta ${nombre} ha desaparecido!`); // Desmontaje
        };
    }, [nombre]);

    return (
        <div className="planeta-card">
            {imagen && <img src={imagen} alt={nombre} className="planeta-imagen" />}
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <button className="btn-eliminar" onClick={() => onEliminar(nombre)}>
                🗑️ Eliminar
            </button>
        </div>
    );
}

export default Planeta;
