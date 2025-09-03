const express = require('express')
const {
  createProduct,
  getOneProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require('../controller/productController')
const route = express.Router()

route.post('/product', createProduct)
route.get('/product/:productId', getOneProduct)
route.get('/product', getAllProducts)
route.put('/product/:productId', updateProduct)
route.delete('/product/:productId', deleteProduct)

module.exports = route
