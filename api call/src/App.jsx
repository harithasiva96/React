// import { useState } from 'react'
import Counter from './pages/Dash/components/Counter';
import Dash from './pages/Dash';
import Home from './pages/Home/Home.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './Home'
import './App.css';

function App() {
  return (
   
    <Router>
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dash />} />
        <Route path='/counter' element={<Counter />} />
      </Routes>
    </Router>
    
   
    );
  }


export default App;
