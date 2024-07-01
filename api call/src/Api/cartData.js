import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fakestoreapi.com/',
});

export const getCarts = () => {
  return instance.get('/carts')
  .then(
    res => {
      return res.data;
    })
    
    .catch(error => {
      console.error("Error:", error);
      throw error;
    }
  );
};
