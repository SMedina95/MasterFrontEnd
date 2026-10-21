import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="page not-found">
            <h1>404 - Página no encontrada</h1>
            <p>La ruta que buscas no existe.</p>
            <Link to="/" className="btn">
                🏠 Volver al inicio
            </Link>
        </div>
    );
}

export default NotFound;