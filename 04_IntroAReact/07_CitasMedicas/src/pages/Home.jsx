import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="page">
            <h1>🏥 Bienvenido a la Clínica</h1>
            <p className="descripcion">
                Plataforma para la gestión de citas médicas. Aquí puedes ver las citas programadas y
                acceder a los detalles de cada una.
            </p>

            <div className="acciones">
                <Link to="/citas" className="btn">
                    📅 Ver Citas
                </Link>
                <Link to="/nueva-cita" className="btn btn-secundario">
                    ➕ Agendar Nueva Cita
                </Link>
            </div>

            <div className="info">
                <h3>¿Qué puedes hacer aquí?</h3>
                <ul>
                    <li>✅ Consultar las citas programadas</li>
                    <li>✅ Ver los detalles de cada cita</li>
                    <li>✅ Agendar nuevas citas</li>
                    <li>✅ Navegar entre las diferentes secciones</li>
                </ul>
            </div>
        </div>
    );
}

export default Home;