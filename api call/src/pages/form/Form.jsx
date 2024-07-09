
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postFormData } from "../../store/form.js";

import { TextField, Button,Box,Modal,Dialog, Snackbar} from '@mui/material';


const Form = ({open,handleClose}) => {

  const dispatch = useDispatch()
    const initialValues = {
    productName:"",
    price:"",
    offer:"",
    categoryName:"", 
    image:""
  };

    
  const[product,setProduct] = useState(initialValues)
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleSuccessCB =()=>{
    setSuccessMessage("Product added successfully!");
    handleClose() 
  }

  const handleErrorCB = () => {
    setErrorMessage("An error occured while adding product.");
  }

  const handleCloseSnackbar = () => {
    setSuccessMessage("");
    setErrorMessage("");
  };



  // submit button
  const handleAddProduct = (e) => {
    e.preventDefault();
    console.log('Form submitted:', product); 
    dispatch(postFormData({
      data:product,
      successCB:handleSuccessCB,
      errorCB: handleErrorCB,
      
    })
  )


  }
  
  const handleCloseModal =()=>{
    handleClose()
  }

  return (
    <div>
      <Dialog  open={open} onClose={handleClose}>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
      
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <TextField
          fullWidth
          label="Product name"
          value={product.productName}
          onChange={(e) => setProduct({ ...product, productName: e.target.value })}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Price"
          type="number"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Offer"
          value={product.offer}
          onChange={(e) => setProduct({ ...product, offer: e.target.value })}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Category name"
          value={product.categoryName}
          onChange={(e) => setProduct({ ...product, categoryName: e.target.value })}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Image"
          value={product.image}
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
          sx={{ mb: 2 }}
        />
        

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" color="primary" onClick={handleAddProduct}>
            Save
          </Button>
          <Button sx={{ ml: 2 }} variant="outlined" onClick={handleCloseModal}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
    </Dialog>

    <Snackbar
        open={!!successMessage}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={successMessage}
      />

      {/* Snackbar for error message */}
      <Snackbar
        open={!!errorMessage}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={errorMessage}
      />

    </div>
  );
};

export default Form;
