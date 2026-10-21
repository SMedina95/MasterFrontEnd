import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Citas from "./pages/Citas";
import CitaDetalle from "./pages/CitaDetalle";
import NotFound from "./pages/NotFound";
import NuevaCita from "./pages/NuevaCita";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <nav className="navbar">
                    <div className="navbar-brand">🏥 Clínica Salud</div>
                    <div className="navbar-links">
                        <NavLink to="/" end>
                            Inicio
                        </NavLink>
                        <NavLink to="/citas">Citas</NavLink>
                        <NavLink to="/nueva-cita">Nueva Cita</NavLink>
                    </div>
                </nav>

                <main className="contenido">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/citas" element={<Citas />} />
                        <Route path="/cita/:id" element={<CitaDetalle />} />
                        <Route path="/nueva-cita" element={<NuevaCita />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>

                <footer className="footer">
                    <p>© 2025 Clínica Salud - Gestión de Citas Médicas</p>
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;