import './index.css'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { useEffect, useRef } from 'react'
import { jwtDecode } from 'jwt-decode'
import useAuthStore from './store/useAuthStore'

function App() {
  const logoutTimerRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      const expiry = decoded.exp * 1000;
      const timeUntilExpiry = expiry - Date.now();

      if (timeUntilExpiry <= 0) {
        useAuthStore.getState().logout(true);
      } else {
        if (logoutTimerRef.current) clearTimeout(logoutTimerRef.current);
        logoutTimerRef.current = setTimeout(() => {
          useAuthStore.getState().logout(true);
        }, timeUntilExpiry);
      }
    }
  }, []);

  return (
    <div>
      <AppRoutes />
    </div>
  )
}

export default App;
