
import axios from 'axios';

export const postProducts = (data,successCB, errorCB ) => { 
  console.log("data",data)
  const url = `${import.meta.env.VITE_PRODUCT_URL}/products`
  console.log(url)
  return (
    axios.post(url,data).then(
      (res)=> {
        console.log(data,"api data")
        successCB()
        if (successCB) successCB("Success")
        return  res.data;
      },
      (error)=>{
            console.log("errorrrrrrrrrrr", error)
            if (errorCB) errorCB("An error occurred");
      }
    ))}