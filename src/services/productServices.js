const {getProductDTO} = require('../dto/product/productDto')
const productConstructor = require('../dao/constructor/productContainer')
const { number } = require('yargs')
const productMongo = new productConstructor()

async function createProductService(newprod) {
    await productMongo.connectoMongo()
    return (
        await productMongo.newProd(newprod)
        ? true
        : false
    ) 
}

async function updateProductService() {

}

async function getProductService(id) {
    await productMongo.connectoMongo()
    if(id =='all') {
        responseprod = await productMongo.getAll()
    } else {
        responseprod = await productMongo.getById(id)
    }
    await productMongo.disconnectMongo()
    if(responseprod !== undefined) {
        return (
            Object.keys(responseprod).length !== 0 
            ? responseprod
            : 'product-doesnt-exist'
        )
    } else {
        return 'invalid-params'
    }
}

// async function searchProductService() {}
// lo dejo para el front

async function productExistService() {}

module.exports = {
    createProductService,
    updateProductService,
    getProductService,
    productExistService
}