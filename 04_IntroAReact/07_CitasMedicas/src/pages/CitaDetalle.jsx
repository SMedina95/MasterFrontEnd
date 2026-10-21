import { useParams, Link } from "react-router-dom";
import { citasData } from "../data/citas";

function CitaDetalle() {
    const { id } = useParams();
    const cita = citasData.find((c) => c.id === parseInt(id));

    if (!cita) {
        return (
            <div className="page">
                <h1>❌ Cita no encontrada</h1>
                <p>No existe una cita con el ID {id}.</p>
                <Link to="/citas" className="btn">
                    ← Volver a la lista
                </Link>
            </div>
        );
    }

    return (
        <div className="page">
            <Link to="/citas" className="btn-volver">
                ← Volver a la lista
            </Link>

            <h1>📋 Detalles de la Cita</h1>

            <div className="detalle-cita">
                <div className="detalle-item">
                    <span className="detalle-label">ID de la cita:</span>
                    <span className="detalle-valor">{cita.id}</span>
                </div>
                <div className="detalle-item">
                    <span className="detalle-label">Paciente:</span>
                    <span className="detalle-valor">{cita.paciente}</span>
                </div>
                <div className="detalle-item">
                    <span className="detalle-label">Doctor:</span>
                    <span className="detalle-valor">{cita.doctor}</span>
                </div>
                <div className="detalle-item">
                    <span className="detalle-label">Especialidad:</span>
                    <span className="detalle-valor">{cita.especialidad}</span>
                </div>
                <div className="detalle-item">
                    <span className="detalle-label">Fecha:</span>
                    <span className="detalle-valor">{cita.fecha}</span>
                </div>
                <div className="detalle-item">
                    <span className="detalle-label">Hora:</span>
                    <span className="detalle-valor">{cita.hora}</span>
                </div>
                <div className="detalle-item">
                    <span className="detalle-label">Estado:</span>
                    <span className={`detalle-valor badge badge-${cita.estado.toLowerCase()}`}>
                        {cita.estado}
                    </span>
                </div>
                <div className="detalle-item">
                    <span className="detalle-label">Motivo:</span>
                    <span className="detalle-valor">{cita.motivo}</span>
                </div>
            </div>
        </div>
    );
}

export default CitaDetalle;