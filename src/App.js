import React from 'react'
import './App.css'
import Login from './Components/login'
import Signup from './Components/Signup'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard'


function App() {
  return (
    <div class name ='container-fluid'>
      <Router>
        <Routes>

          <Route path = '/' element={<Login />} />
          <Route path =  '/signup' element={<Signup/>} />
          <Route path =  '/dashboard' element={<Dashboard />} />
          
          
   
        </Routes>
      </Router>

      
    </div>
  )
}

export default App
