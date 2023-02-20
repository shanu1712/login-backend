import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
    const [email,setemail] =useState("")
    const [password,setPassword] =useState("")
    const [error,setError] =useState(false)
    const [loading,setloading] =useState(false)
    const navigate= useNavigate()

    const submithandler=async(e)=>{
        e.preventDefault()
        //console.log(email,password)
       const {data} =await axios.post('http://localhost:4000/api/users/login',{
        email,
        password
       })
       console.log(data)
    }
    
  return (
    <>
    <div>
      <h1>login</h1>
    </div>
    <div>
        <label>
            Email
        </label>
    <input type="text"  value={email} onChange={(e)=>setemail(e.target.value)}/>
    
    <label>
            Password
        </label>
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <button onClick={submithandler}>Login</button>
    <p>New user ? Signup</p>
    <button onClick={()=>navigate('/register')}>Register</button>
    </div>
    </>
  )
}

export default Login
