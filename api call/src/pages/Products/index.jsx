import { useEffect,useState } from "react";
import {useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getProductData } from "../../store/product.js";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Form from "../form/Form.jsx";





const Products = () => {

const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const productData = useSelector((state) => state.productData.data);
  console.log("product data", productData)
  const isLoading = useSelector((state) => state.productData.status);
  console.log()

  const navigate = useNavigate();
  const handleButton = () => {
    navigate('/');
  };
  const handleClick = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false);
    // refresh the get product page
    dispatch(getProductData())
  

  };
  
  useEffect(() => {
    dispatch(getProductData());
  }, [dispatch]);


  return (
    <>
      {isLoading === "pending" ? (
        <div>LOADING ...</div>
      ) : (<div>
        <Stack spacing={2} direction="row" justifyContent="center">
    <Button variant="contained"  onClick = {handleButton}>Home</Button>
    <Button variant="contained"  onClick = {handleClick}>Add Products</Button>
    </Stack>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              
              <TableCell align="center" sx={{ fontWeight: 'bold'}}>Product Name</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>Price</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>Offer</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>Category Name</TableCell>
              <TableCell align="center"sx={{ fontWeight: 'bold' }}>Image</TableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {productData.map((data) => (
              <TableRow
                key={data.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                
               
                <TableCell align="center">{data.productname}</TableCell>
                <TableCell align="center">{data.price}</TableCell>
                <TableCell align="center">{data.offer}</TableCell>
                <TableCell align="center">{data.categoryName}</TableCell>
                <TableCell align="center"><img src={data.image} alt="product" style={{ maxWidth:'150px', maxHeight:'150px'}}/></TableCell>
               
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
        )}
 
    

    <Form open = {open}
    handleClose ={handleClose}/>
  

    </>
  );
};
export default Products;

