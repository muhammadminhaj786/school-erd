const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./routes')
const PORT = 8080

//body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

//mongo db connect
const DB_URI = mongoose.connect('mongodb+srv://eb20103087minhajwahid:School@cluster0.74h3z6i.mongodb.net/')
mongoose.connection.on('connected', ()=> console.log('mongodb connected sucessfuly'))
mongoose.connection.off('error', ()=> console.log(error.message))


app.use(router)

app.get('/',(req,res)=>{
    res.json({
        status: true,
        message: 'server is up',
    })
})


app.listen(PORT, ()=>{
    console.log('server is running')
})