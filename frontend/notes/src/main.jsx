import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}/>
    
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
  </Routes>
  </BrowserRouter>
    
  //<App />
)
