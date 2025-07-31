
import api from './api';

export const getProducts = () => api.get('/products');
export const getProductById = (id) => api.get(`/products/${id}`);
export const deleteProduct = async (id) => await api.delete(`/products/${id}`);
export const createProduct = async (productData, token) => {
  return api.post("/products", productData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const updateProduct = async (id, data, token) => {
  return api.put(`/products/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
