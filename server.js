const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const productRoute = require('./routes/productRoutes')

 const app = express()
  app.use(express.json())
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send('Amazon-clone-Products');
})

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('sucessfully connected to database');
    app.listen(3000, () => {
        console.log(`server is up and running at Port 3000`)
    })
}).catch((error) => {
    console.log(error)
})