// import { useState } from 'react'
import Counter from './pages/Dash/components/Counter';
import Dash from './pages/Dash';
import Home from './pages/Home/Home';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './Home'
import './App.css';
import Products from './pages/Products/index.jsx';

function App() {
  return (
   
    <Router>
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dash />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/product' element={<Products />} />
        
        
      </Routes>
    </Router>
    
   
    );
  }


export default App;
