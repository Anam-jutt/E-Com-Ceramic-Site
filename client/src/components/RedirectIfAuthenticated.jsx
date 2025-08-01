import { Navigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

const RedirectIfAuthenticated = ({ children }) => {
    const { token } = useAuthStore();
    if (token) return <Navigate to="/" replace />; 
    return <>{children}</>; 
};

export default RedirectIfAuthenticated;