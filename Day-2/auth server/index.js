const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const PORT = 3000
const {mongoUrl} = require('./keys')


require('./models/User')
require('./models/Blog')
const authRoutes = require('./routes/authRoutes')
app.use(bodyParser.json())
app.use(authRoutes)


mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
    console.log("Connected to mongo server")
})

mongoose.connection.on('error',(err)=>{
    console.log("Connection Faild", err)
})


app.listen(PORT,()=>{
    console.log("Server Running : "+PORT)
})