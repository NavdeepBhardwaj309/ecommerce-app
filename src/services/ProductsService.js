import api from'../api';

 export const getAllProducts = async () => {
  const response = await api.get("/api/products");
  return response.data;
};