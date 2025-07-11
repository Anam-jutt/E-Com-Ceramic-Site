import { create } from "zustand";
import api from "../services/api";

const useCartStore = create((set, get) => ({
  cart: [],
  
  fetchCart: async () => {
    try {
      const res = await api.get("/cart");
      set({ cart: res.data.products || [] });
    } catch (err) {
      console.error("Failed to fetch cart", err);
    }
  },

  // Add to Cart
 addToCart: (product) => {
  const existing = get().cart.find(item => item.product._id === product._id);

  if (existing) {
    set({
      cart: get().cart.map(item =>
        item.product._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    });
  } else {
    set({
      cart: [...get().cart, { product, quantity: 1 }]
    });
  }
},


  // Remove from Cart
removeFromCart: (id) => {
  set({
    cart: get().cart.filter(item => item.product._id !== id)
  });
},


  // Decrease Quantity
  decreaseQuantity: (id) => {
    const item = get().cart.find(item => item._id === id);
    if (item.quantity === 1) {
      get().removeFromCart(id);
    } else {
      set({
        cart: get().cart.map(item =>
          item._id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      });
    }
  },

  // Total Price
  getTotal: () => {
    return get().cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}));
export default useCartStore;
