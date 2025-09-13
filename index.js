const express = require('express')
const mongoose = require("mongoose")
require('dotenv').config()
const Product = require("./models/product.model")
const productsRoute = require('./routes/productsRoutes')
const app = express()


//middleware
app.use(express.json())// middleware to parse json body
app.use(express.urlencoded({extended: true}))// middleware to parse urlencoded body


//routes
app.use('/api/products', productsRoute )

/* app.get('/', (req,res)=>{
    res.send("hello from node api")
}); */

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("connected to mongoDB")
    app.listen(3000, ()=>{
    console.log(`server is running on port ${process.env.PORT} `)
})
})
.catch((err)=>{
    console.log(err)
})
