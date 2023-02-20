import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const [name,setname] =useState("")
    const [email,setemail] =useState("")
    const [password,setPassword] =useState("")
 const [pic,setpic] =useState("")
 const [picMessage,setPicmessage] =useState(null)
const navigate =useNavigate()
    const submithandler=async(e)=>{
        e.preventDefault()
        console.log(email)
        
       const {data} =await axios.post('http://localhost:4000/api/users',{
        name,
        email,
        password
       })
       console.log(data)
    }

    ///post pic//
    // const postdetails=(pics)=>{
    //   if(!pics){
    //     return setPicmessage("please select an image")
    //   }
    //   setPicmessage(null)
    //   if(pics.type==='image/jpeg'||pics.type==='image/png'){
    //     const data= new FormData()
    //     data.append('file',pics)
    //     data.append('upload_preset','notezipper')
        
    //     data.append('cloud_name','divyanshu')
    //     fetch("https://ik.imagekit.io/gskum3gxsx/",{
    //       method:'post',
    //       body:data
    //     }).then((res)=>res.json()).then((data)=>{
    //       console.log(data)
    //       setpic(data.url.toString())
    //     }).catch((err)=>{
    //       console.log(err)
    //     })
    //   }
    // }
  return (
    <div>
      <h1>register</h1>
      
    <div>
    <label>
            Name
        </label>
    <input type="text"  value={name} onChange={(e)=>setname(e.target.value)}/>
    <br/>
    
        <label>
            Email
        </label>
    <input type="text" name={email} value={email} onChange={(e)=>setemail(e.target.value)}/>
    <br/>
    <label>
            Password
        </label>
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <br/>
    <button onClick={submithandler}>Register</button>
    <p> already registered?Login</p>
    <button onClick={()=>navigate('/login')}>Login</button>
    {/* <input onClick={""} onChange={(e)=>postdetails(e.target.files[0])}
     id="custom-file"
     type="image/png"
     label="upload profilepicture"
    />
    <button type="submit">Upload</button> */}
    
    </div>

    </div>
  )
}

export default Register
