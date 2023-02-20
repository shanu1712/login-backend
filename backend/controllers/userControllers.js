const User=require('../models/userModel')
const asyncHandler=require('express-async-handler')
const generateToken = require('../utils/generateToken')
const registerUser =asyncHandler(async(req,res)=>{
    const {name,email,password} =req.body
    const userExists= await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error("user already exists")
    }
    const user=await User.create({
        name,
        email,
        password,
        
    })
    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
           email:user.email,
           isAdmin:user.isAdmin,
           
           token:generateToken(user._id)
        })
    }
else{
    res.status(400)
    throw new Error('error occured')
}
    // res.json({
    //     name,
    //     email
    // })   ///now not needed just needed for testing endpoint//
})

///////////login user method//
const authUser =asyncHandler(async(req,res)=>{
    const {name,email,password} =req.body
    const user=await User.findOne({email})
    if(user && (await user.matchPassword(password))){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('invalid credentials')
    }
})
module.exports={registerUser,authUser}