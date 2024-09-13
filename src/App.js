import React from 'react'
import Login from './Components/login'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div class name ='container-fluid'>
      <Router>
        <Routes>

          <Route path = '/' element={<Login />} />
   
        </Routes>
      </Router>

      
    </div>
  )
}

export default App
