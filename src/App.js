import React from 'react';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/dashboard';
import CartPage from './Components/CartPage';
import Camera from './Pages/Camera';
import Headphone from './Pages/Headphone';
import Laptop from './Pages/Laptop'; 



function App() {
  return (
    <div className='container-fluid'>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/camera' element={<Camera />} />
          <Route path='/headphone' element={<Headphone />} />
          <Route path='/laptop' element={<Laptop />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
