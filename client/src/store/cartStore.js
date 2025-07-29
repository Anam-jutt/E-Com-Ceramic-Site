import { create } from "zustand";
import api from "../services/api";

const useCartStore = create((set, get) => ({
  cart: [],
  setCart: (cartData) => set({ cart: cartData }),
  fetchCart: async () => {
    try {
      const res = await api.get("/cart");
      set({ cart: res.data.products || [] });
    } catch (err) {
      console.error("Failed to fetch cart", err);
    }
  },

  addToCart: async (productId) => {
    try {
      const res = await api.post("/cart/add", { productId });
      set({ cart: res.data.products || [] });
    } catch (err) {
      console.error("Failed to add to cart", err);
    }
  },

  removeFromCart: async (productId) => {
    try {
      const res = await api.delete(`/cart/remove/${productId}`);
      set({ cart: res.data.products || [] });
    } catch (err) {
      console.error("Failed to remove from cart", err);
    }
  },

  decreaseQuantity: async (productId) => {
    try {
      const res = await api.post("/cart/decrease", { productId });
      set({ cart: res.data.products || [] });
    } catch (err) {
      console.error("Failed to decrease quantity", err);
    }
  },

    cartItems: () => get().cart.filter((item) => item?.product),
  getTotal: () => {
    return get().cart.reduce(
      (total, item) =>
        item.product ? total + item.product.price * item.quantity : total,
      0
    );
  },
}));

export default useCartStore;
