import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {useNavigate} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)
const navigate= useNavigate()
  return (
    <div className="App">
      <h1>Move to login or signup page?</h1>
      <button onClick={()=>navigate('/login')}>Login</button>
      <br/>
      <br/>
      
      <button onClick={()=>navigate('/register')}>Register</button>
    </div>
  )
}

export default App
