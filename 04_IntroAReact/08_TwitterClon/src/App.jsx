import { BrowserRouter, Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import "./App.css";

// ========== NAVBAR ==========
function Navbar() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">
                🐦 TwitterClon
            </Link>

            {user && (
                <div className="navbar-links">
                    <NavLink to="/" end>
                        Inicio
                    </NavLink>
                    <NavLink to="/profile">Mi Perfil</NavLink>
                    <button className="btn-logout" onClick={handleLogout}>
                        Cerrar sesión
                    </button>
                </div>
            )}
        </nav>
    );
}

// ========== APP ==========
function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <div className="app">
                    <Navbar />
                    <main className="main-content">
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route
                                path="/"
                                element={
                                    <ProtectedRoute>
                                        <Home />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/profile"
                                element={
                                    <ProtectedRoute>
                                        <Profile />
                                    </ProtectedRoute>
                                }
                            />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </main>
                </div>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;