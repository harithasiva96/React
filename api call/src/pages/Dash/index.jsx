import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getCartData } from "../../store/cart.js";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Dashboard = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartData.data);
  const isLoading = useSelector((state) => state.cartData.status);
  const navigate = useNavigate();
  const handleButton = () => {
    navigate('/');
};
  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      {isLoading === "pending" ? (
        <div>LOADING ...</div>
      ) : (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">User ID</TableCell>
              <TableCell align="center">Date</TableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {cartData.map((data) => (
              <TableRow
                key={data.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                
                <TableCell align="center">{data.id}</TableCell>
                <TableCell align="center">{data.userId}</TableCell>
                <TableCell align="center">{formatDate(data.date)}</TableCell>
               
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        )}
 
    <Stack spacing={2} direction="row" justifyContent="center">
    <Button variant="contained"  onClick = {handleButton}>Home</Button>
    </Stack>
  

    </>
  );
};
export default Dashboard;

