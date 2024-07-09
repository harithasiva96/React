import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, selectCountValue } from "../../../store/counter";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Fragment } from "react";

export default function Counter() {
  const count = useSelector(selectCountValue);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleButton = () => {
    navigate('/');
  }
  return (
    <div>
       <Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: 'violet', height: '50vh' }}>
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
      </Box>
      </Container>
    </Fragment>
    </div>
  );
}








