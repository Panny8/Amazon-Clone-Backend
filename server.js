const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const ProductRoute = require('./routes/productRoutes');
const PORT = process.env.PORT || 5000
const app = express();
app.use(express.json())

app.use('/api/products', ProductRoute);
app.get('/', (req, res) => {
    res.send("Amazon-Clone-Product")
})
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('connected to mongodb')
    app.listen(PORT, () => {
        console.log(`Server is up and running at port 3000`)
    })
}).catch((error) => {
    console.log(error)
})