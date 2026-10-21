import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Página no encontrada</p>
            <Link to="/" className="btn">
                🏠 Volver al inicio
            </Link>
        </div>
    );
}

export default NotFound;