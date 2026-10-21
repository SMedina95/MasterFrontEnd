import { useState } from "react";

function ListaCompras() {
    const [productos, setProductos] = useState([]);
    const [nuevoProducto, setNuevoProducto] = useState("");

    const agregarProducto = () => {
        const producto = nuevoProducto.trim();
        if (producto === "") {
            alert("Por favor, escribe un producto antes de agregarlo.");
            return;
        }
        if (productos.some((p) => p.toLowerCase() === producto.toLowerCase())) {
            alert(`El producto "${producto}" ya está en la lista.`);
            return;
        }
        setProductos([...productos, producto]);
        setNuevoProducto("");
    };

    const eliminarProducto = (index) => {
        const nuevaLista = productos.filter((_, i) => i !== index);
        setProductos(nuevaLista);
    };

    const manejarEnter = (event) => {
        if (event.key === "Enter") {
            agregarProducto();
        }
    };

    return (
        <div className="lista-compras">
            <h2>🛒 Lista de Compras</h2>
            <p className="subtitulo">Agrega productos y elimínalos cuando los hayas comprado.</p>

            <div className="input-container">
                <input
                    type="text"
                    value={nuevoProducto}
                    onChange={(e) => setNuevoProducto(e.target.value)}
                    onKeyDown={manejarEnter}
                    placeholder="Ej: Manzanas"
                />
                <button onClick={agregarProducto}>➕ Agregar</button>
            </div>

            {productos.length === 0 ? (
                <p className="lista-vacia">📭 Tu lista está vacía. ¡Agrega tu primer producto!</p>
            ) : (
                <ul className="lista-productos">
                    {productos.map((producto, index) => (
                        <li key={index} className="producto-item">
                            <span>{producto}</span>
                            <button
                                className="btn-eliminar"
                                onClick={() => eliminarProducto(index)}
                                title="Eliminar producto"
                            >
                                🗑️
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            {productos.length > 0 && (
                <p className="contador">
                    Total de productos: <strong>{productos.length}</strong>
                </p>
            )}
        </div>
    );
}

export default ListaCompras;