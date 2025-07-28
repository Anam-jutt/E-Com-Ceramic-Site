import './index.css'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { useEffect, useRef } from 'react'
import { jwtDecode } from 'jwt-decode'
import useAuthStore from './store/useAuthStore'
import useCartStore from './store/cartStore'
function App() {
  const logoutTimerRef = useRef(null);
  const fetchCart = useCartStore((state) => state.fetchCart);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      const expiry = decoded.exp * 1000;
      const timeUntilExpiry = expiry - Date.now();
      // console.log('Time until expiry:', timeUntilExpiry);
      if (timeUntilExpiry <= 0) {
        useAuthStore.getState().logout(true);
      } else {
        if (logoutTimerRef.current) clearTimeout(logoutTimerRef.current);
        logoutTimerRef.current = setTimeout(() => {
          useAuthStore.getState().logout(true);
        }, timeUntilExpiry);
      }
        fetchCart();
    }
  }, [fetchCart]);

  return (
    <div>
      <AppRoutes />
    </div>
  )
}

export default App;
