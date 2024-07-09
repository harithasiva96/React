import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';




const Home = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/dashboard');
    };
    const handleClick = () => {
        navigate('/counter');
    };
    const handleButtonClick = () => {
        navigate(('/product'));
    };
    
   
    return(
        <div id="d">
        <h1>Welcome to cart</h1>
        <Stack spacing={2} direction="row" justifyContent="center">
        <Button variant="contained"  onClick = {handleOnClick}>Login details</Button>
        <Button variant="contained"  onClick = {handleClick}>Counter</Button>
        <Button variant="contained"  onClick = {handleButtonClick}>Products</Button>
       
        </Stack>
        
       
        </div>
    );
};

export default Home;