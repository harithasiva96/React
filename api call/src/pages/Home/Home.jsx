// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/dashboard');
    };
    const handleClick = () => {
        navigate('/counter');
    };
    return(
        <div>
        <h1>Welcome to cart</h1>
       
        {/* <li><Link to = '/dashboard'>Login details</Link></li>
        <li><Link to = '/counter'>Counter</Link></li> */}
        <button onClick = {handleOnClick}>Login details</button>
        <button onClick = {handleClick}>Counter</button>
       
        </div>
    );
};

export default Home;