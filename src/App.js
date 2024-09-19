import React from 'react';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import CartPage from './Components/CartPage';
import Camera from './pages/Camera';
import Headphone from './pages/Headphone';
import Laptop from './pages/Laptop';


function App() {
  return (
    <div className='container-fluid'>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/CartPage' element={<CartPage/>} />
          <Route path='/camera' element={<Camera />} />
          <Route path='/headphone' element={<Headphone />} />
          <Route path='/laptop' element={< Laptop/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

