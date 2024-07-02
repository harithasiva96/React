import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, selectCountValue } from "../../../store/counter";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';

export default function Counter() {
  const count = useSelector(selectCountValue);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleButton = () => {
    navigate('/');
  }
  return (
    <div>
      <div>
        <Stack spacing={2} direction="row" justifyContent="center">
          <Button variant="contained" onClick={() => dispatch(increment())}>
            Increment
          </Button>
          <span>{count}</span>
          <Button variant="contained" onClick={() => dispatch(decrement())}>
            Counter
          </Button>
          <Button variant="contained"  onClick = {handleButton}>Home</Button>
        </Stack>
      </div>
    </div>
  );
}
