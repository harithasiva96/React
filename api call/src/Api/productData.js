import axios from 'axios';

const url= import.meta.env.VITE_PRODUCT_URL

const instance = axios.create({
  baseURL: url,
});

export const getProducts = () => {    
  console.log(url,"url")                                                                                                                                                                                                                                                                                                                                                                                                                              
  return instance.get('/product').then(
    (res) => {
      console.log(res.data)
      return res.data;
    })

    .catch(error => {
      // console.error("Error:", error);
      throw error;
    }
  );
    
};