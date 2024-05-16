import { http } from "./http";

export const apiGetProducts = (page = 1, limit = 8) => {
  return http.get(`/products`, { params: { page, limit } });
};

export const apiCreateProducts = (data) => {
  return http.post(`products`, data , {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const apiDeleteProduct = (id) => {
  return http.delete(`products/${id}`);
};

export const apiUpdateProduct = (id, value) => {
  return http.put(`products/${id}`, value, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const apiGetCategories = () => {
  return http.get(`product-categories`); 
}
