const cart = require('express').Router()

//middleware
const {
    createCart, 
    clearCart, 
    addToCart, 
    getCart, 
    deleteCart,
    deleteOneCart,
    parseParamsCart,
    parseParamsCartProduct
} = require('../controllers/cart')

const {
    emailExist
} = require('../controllers/user')

//create cart se hace automatico cuando se crea una cuenta

//clear cart (todo o un elemento especifico)
// cart.post('/clear-cart/:userId/:id', clearCart)

//add to cart
cart.post('/add-to-cart/:emailUser/:idProduct', parseParamsCart, parseParamsCartProduct, emailExist, addToCart)

//read
cart.get('/get-cart/:emailUser', parseParamsCart, emailExist, getCart)

//delete product
cart.post('/delete-one/:emailUser/:idProduct', parseParamsCart, parseParamsCartProduct, emailExist, deleteOneCart)

//delete cart (solo pasaria cuando se elimina un usuario por completo)
cart.delete('/delete-cart/:userId', deleteCart)

module.exports = cart