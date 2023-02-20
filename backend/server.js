const express =require('express')
const notes= require('./data/notes')
const app =express()
const dotenv =require('dotenv')
const userRoutes =require('./routes/userRoutes')
const mongoose=require('mongoose')
const cors= require('cors')
const { notFound, errorHandler } = require('./middlewares/errormiddlewares')
dotenv.config()
app.use(express.json())
app.use(cors())
//////mongoose//
mongoose.connect('mongodb+srv://shanuchaturvedi345:tDACDPbbGcuwaa35@cluster0.o5kdkye.mongodb.net/notezipper?retryWrites=true&w=majority')
.then((res)=>{
    console.log('database connected')
}).catch((err)=>{
    console.log('error connecting db',err)
})
app.get('/',(req,res)=>{
    res.send('api is running')
})

app.get('/api/notes',(req,res)=>{
    res.json(notes)
})

// app.get('/api/notes/:id',(req,res)=>{
//     const note= notes.find((n)=>n._id===req.params.id)
//     res.send(note)
// })

app.use('/api/users',userRoutes)
const PORT= process.env.PORT ||4000
app.use(notFound)
app.use(errorHandler)
app.listen(PORT,()=>{
    console.log('server is running on 4000')
})