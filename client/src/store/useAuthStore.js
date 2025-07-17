import { create } from "zustand";
import { jwtDecode } from "jwt-decode";
import useCartStore from "./cartStore";
let logoutTimer;

const useAuthStore = create((set) => ({
  token: localStorage.getItem("token") || null,
  role: localStorage.getItem("role") || null,
  user: JSON.parse(localStorage.getItem("user")) || null,

  login: ({ token, role, user }) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    localStorage.setItem("user", JSON.stringify(user));
    set({ token, role, user });
    //   Sync cart after login
    useCartStore.getState().fetchCart();
    // Decode the token to get expiration time
    const decoded = jwtDecode(token);
    const expiry = decoded.exp * 1000;
    const timeUntilExpiry = expiry - Date.now();

    // Auto logout when token expires
    if (logoutTimer) clearTimeout(logoutTimer);
    logoutTimer = setTimeout(() => {
      useAuthStore.getState().logout(true);
    }, timeUntilExpiry);
  },
logout: (auto = false) => {
  if (auto) {
    window.alert("Your session has expired.");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    set({ token: null, role: null, user: null });

    // Clear cart on logout
    useCartStore.getState().setCart([]);
    window.location.href = "/login";
  } else {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("user");
      set({ token: null, role: null, user: null });

      // Clear cart on logout
      useCartStore.getState().setCart([]);
      window.location.href = "/login";
    }
  }
}

}));

export default useAuthStore;
