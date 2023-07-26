const express = require('express');
const router = express.Router()
const {getProducts, createProducts, upDateProduct, deleteProduct} = require('./controllers/productControler')

router.get('/', getProducts)

router.post('/', createProducts)

router.put('/:id', upDateProduct )

router.delete('/:id', deleteProduct)
module.exports = router