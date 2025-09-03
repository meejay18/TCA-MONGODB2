const express = require('express')
const { createProduct, getOneProduct, getAllProducts } = require('../controller/productController')
const route = express.Router()

route.post('/product', createProduct)
route.get('/product/:productId', getOneProduct)
route.get('/product', getAllProducts)

module.exports = route
