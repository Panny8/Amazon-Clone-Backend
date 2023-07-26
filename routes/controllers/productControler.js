const Product = require('../../models/productModel');
const getProducts = async(req, res) => {
    try {
       const product = await Product.find(req.body);
       res.status(200).json(product)
    } catch (error) {
      console.log(error) 
    }
}

const createProducts = async(req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.log(error)
    }
}

const upDateProduct = async(req, res) => {
   try {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body)
    res.status(200).json(product)
   } catch (error) {
    console.log(error)
   }
}

const deleteProduct = async(req, res) => {
   try {
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id, req.body)
    res.status(200).json(product)
    if(!product) {
        console.log("Product does not exist")
    }
   } catch (error) {
    console.log(error)
   }
}

module.exports =  {
    getProducts,
    createProducts,
    upDateProduct,
    deleteProduct
}