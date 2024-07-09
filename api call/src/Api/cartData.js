import axios from 'axios';

const url= import.meta.env.VITE_API_URL
const instance = axios.create({
  baseURL: url,
});

export const getCarts = () => {
  return instance.get('/carts')
  .then(
    res => {
      return res.data;
    })
    
    .catch(error => {
      // console.error("Error:", error);
      throw error;
    }
  );
};
