// ============================================
// COMPONENTE: ProtectedRoute.jsx
// Protege rutas que requieren autenticación
// ============================================

import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
    const { user } = useAuth();

    // Si no hay usuario, redirigir al login
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute;