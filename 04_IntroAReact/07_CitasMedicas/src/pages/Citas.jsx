import { Link } from "react-router-dom";
import { citasData } from "../data/citas";

function Citas() {
    return (
        <div className="page">
            <h1>📅 Lista de Citas</h1>
            <p className="descripcion">Consulta todas las citas programadas en la clínica.</p>

            <div className="lista-citas">
                {citasData.map((cita) => (
                    <div key={cita.id} className={`cita-card estado-${cita.estado.toLowerCase()}`}>
                        <div className="cita-header">
                            <h3>{cita.paciente}</h3>
                            <span className={`badge badge-${cita.estado.toLowerCase()}`}>
                                {cita.estado}
                            </span>
                        </div>
                        <p>
                            <strong>Especialidad:</strong> {cita.especialidad}
                        </p>
                        <p>
                            <strong>Doctor:</strong> {cita.doctor}
                        </p>
                        <p>
                            <strong>Fecha:</strong> {cita.fecha} a las {cita.hora}
                        </p>
                        <Link to={`/cita/${cita.id}`} className="btn btn-small">
                            Ver detalles →
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Citas;