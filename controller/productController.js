const productModel = require('../model/productModel')

exports.createProduct = async (req, res) => {
  const { productName, price, quantity, description } = req.body
  try {
    const checkProduct = await productModel.findOne({ productName })
    if (checkProduct) {
      res.status(400).json({
        message: `${productName} already exists`,
      })
    }
    // console.log(checkProduct)

    // const addQuantity = (checkProduct.quantity += quantity)
    // console.log(addQuantity)

    const newProduct = await productModel.create({ productName, price, quantity, description })

    return res.status(201).json({
      message: 'Product created successfully',
      data: newProduct,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Error creating product',
      error: error.message,
    })
  }
}

exports.getOneProduct = async (req, res) => {
  const { productId } = req.params
  try {
    const product = await productModel.findById(productId)
    if (!product) {
      res.status(404).json({
        message: `${productName}does not exists`,
      })
    }
    return res.status(200).json({
      message: 'Product found',
      data: product,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Error creating product',
      error: error.message,
    })
  }
}
exports.getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find()
    if (!products) {
      res.status(404).json({
        message: `No products found`,
      })
    }
    return res.status(200).json({
      message: 'Products found',
      data: products,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Error creating product',
      error: error.message,
    })
  }
}

exports.updateProduct = async (req, res) => {
  const { productId } = req.params
  const { productName, price, quantity, description } = req.body
  try {
    const product = await productModel.findById(productId)
    if (!product) {
      res.status(404).json({
        message: `No product found`,
      })
    }

    const data = { productName, price, quantity, description }
    const updatedProduct = await productModel.findByIdAndUpdate(productId, data, { new: true })
    return res.status(200).json({
      message: 'Product updated',
      data: updatedProduct,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Error creating product',
      error: error.message,
    })
  }
}

exports.deleteProduct = async (req, res) => {
  const { productId } = req.params
  try {
    const product = await productModel.findById(productId)
    if (!product) {
      res.status(404).json({
        message: `No product found`,
      })
    }

    const deletedProduct = await productModel.findByIdAndDelete(productId)
    return res.status(200).json({
      message: 'Product deleted',
      data: deletedProduct,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Error deleting product',
      error: error.message,
    })
  }
}
