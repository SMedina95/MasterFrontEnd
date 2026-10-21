// ============================================
// COMPONENTE: InventoryManager.jsx
// Gestor de Inventario con useReducer, useRef y useCallback
// ============================================

import { useReducer, useRef, useCallback, useState, useEffect } from "react";

// ========== REDUCER ==========
const initialState = {
    products: JSON.parse(localStorage.getItem("inventario")) || [],
};

function reducer(state, action) {
    switch (action.type) {
        case "add":
            return {
                products: [
                    ...state.products,
                    {
                        id: Date.now(),
                        name: action.name,
                        quantity: 1,
                    },
                ],
            };
        case "increment":
            return {
                products: state.products.map((p) =>
                    p.id === action.id ? { ...p, quantity: p.quantity + 1 } : p
                ),
            };
        case "decrement":
            return {
                products: state.products.map((p) =>
                    p.id === action.id && p.quantity > 1
                        ? { ...p, quantity: p.quantity - 1 }
                        : p
                ),
            };
        case "remove":
            return {
                products: state.products.filter((p) => p.id !== action.id),
            };
        case "clear":
            return initialState;
        default:
            return state;
    }
}

// ========== COMPONENTE ==========
function InventoryManager() {
    // ========== HOOKS ==========
    const [state, dispatch] = useReducer(reducer, initialState);
    const inputRef = useRef(null);
    const [busqueda, setBusqueda] = useState("");

    // ========== EFECTO: Guardar en localStorage ==========
    useEffect(() => {
        localStorage.setItem("inventario", JSON.stringify(state.products));
    }, [state.products]);

    // ========== CALLBACKS OPTIMIZADOS ==========
    const handleAddProduct = useCallback(() => {
        const nombre = inputRef.current.value.trim();
        if (nombre === "") {
            alert("Por favor, ingresa un nombre de producto.");
            return;
        }
        dispatch({ type: "add", name: nombre });
        inputRef.current.value = "";
        inputRef.current.focus();
    }, []);

    const handleIncrement = useCallback((id) => {
        dispatch({ type: "increment", id });
    }, []);

    const handleDecrement = useCallback((id) => {
        dispatch({ type: "decrement", id });
    }, []);

    const handleRemove = useCallback((id) => {
        if (confirm("¿Eliminar este producto del inventario?")) {
            dispatch({ type: "remove", id });
        }
    }, []);

    const handleClear = useCallback(() => {
        if (confirm("¿Vaciar todo el inventario?")) {
            dispatch({ type: "clear" });
        }
    }, []);

    // ========== FILTRADO DE PRODUCTOS ==========
    const productosFiltrados = state.products.filter((p) =>
        p.name.toLowerCase().includes(busqueda.toLowerCase())
    );

    // ========== RENDER ==========
    return (
        <div className="inventory-manager">
            <h2>🛒 Gestor de Inventario</h2>
            <p className="subtitulo">Administra los productos de tu tienda en línea.</p>

            {/* Formulario de agregar producto */}
            <div className="formulario">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Nombre del producto"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleAddProduct();
                    }}
                />
                <button onClick={handleAddProduct}>➕ Agregar</button>
            </div>

            {/* Buscador */}
            <div className="buscador-container">
                <input
                    type="text"
                    placeholder="🔍 Buscar producto..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                />
            </div>

            {/* Lista de productos */}
            <h3>Productos ({productosFiltrados.length})</h3>

            {productosFiltrados.length === 0 ? (
                <p className="lista-vacia">
                    {state.products.length === 0
                        ? "📭 No hay productos en el inventario."
                        : "🔍 No se encontraron productos con ese nombre."}
                </p>
            ) : (
                <ul className="lista-productos">
                    {productosFiltrados.map((product) => (
                        <li key={product.id} className="producto-item">
                            <span className="producto-nombre">{product.name}</span>
                            <span className="producto-cantidad">Cantidad: {product.quantity}</span>
                            <div className="producto-acciones">
                                <button
                                    className="btn-increment"
                                    onClick={() => handleIncrement(product.id)}
                                >
                                    +
                                </button>
                                <button
                                    className="btn-decrement"
                                    onClick={() => handleDecrement(product.id)}
                                    disabled={product.quantity <= 1}
                                >
                                    -
                                </button>
                                <button
                                    className="btn-remove"
                                    onClick={() => handleRemove(product.id)}
                                >
                                    🗑️
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            {/* Botón para vaciar inventario */}
            {state.products.length > 0 && (
                <button className="btn-clear" onClick={handleClear}>
                    🗑️ Vaciar Inventario
                </button>
            )}
        </div>
    );
}

export default InventoryManager;