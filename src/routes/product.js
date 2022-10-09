const product = require('express').Router()

//middleware
const {
    createProduct, 
    updateProduct, 
    getProduct, 
    parseParamProd,
    productExist
} = require('../controllers/product')

//create product
product.post('/create-product', createProduct)
//update product
product.post('/update-product', productExist, updateProduct)
//getProduct
product.get('/get-product/:id', parseParamProd, getProduct)
//searchProduct
// product.get('/search-product/:filter', searchProduct)

module.exports = product