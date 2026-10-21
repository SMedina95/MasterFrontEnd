import { Link } from "react-router-dom";
import { useState } from "react";

function NuevaCita() {
    const [formulario, setFormulario] = useState({
        paciente: "",
        doctor: "",
        especialidad: "",
        fecha: "",
        hora: "",
        motivo: "",
    });

    const [mensaje, setMensaje] = useState("");

    const handleChange = (e) => {
        setFormulario({ ...formulario, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMensaje("✅ Cita agendada correctamente (simulación).");
        setFormulario({
            paciente: "",
            doctor: "",
            especialidad: "",
            fecha: "",
            hora: "",
            motivo: "",
        });
    };

    return (
        <div className="page">
            <Link to="/" className="btn-volver">
                ← Volver al inicio
            </Link>
            <h1>➕ Agendar Nueva Cita</h1>

            {mensaje && <p className="mensaje-exito">{mensaje}</p>}

            <form onSubmit={handleSubmit} className="formulario-cita">
                <input
                    type="text"
                    name="paciente"
                    placeholder="Nombre del paciente"
                    value={formulario.paciente}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="doctor"
                    placeholder="Nombre del doctor"
                    value={formulario.doctor}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="especialidad"
                    placeholder="Especialidad"
                    value={formulario.especialidad}
                    onChange={handleChange}
                    required
                />
                <input
                    type="date"
                    name="fecha"
                    value={formulario.fecha}
                    onChange={handleChange}
                    required
                />
                <input
                    type="time"
                    name="hora"
                    value={formulario.hora}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="motivo"
                    placeholder="Motivo de la cita"
                    value={formulario.motivo}
                    onChange={handleChange}
                    rows="3"
                />
                <button type="submit" className="btn">
                    Agendar Cita
                </button>
            </form>
        </div>
    );
}

export default NuevaCita;