# Proyecto final BackEnc || CoderHouse

## Rutas

### Crear un nuevo producto
<img style="display: block;-webkit-user-select: none;margin: auto;background-color: hsl(0, 0%, 90%);" src="https://raw.githubusercontent.com/JuaniTrotti/FinalBackEnd/master/files/products/gif-grande/create-product_AdobeExpress.gif" width="80%" height="auto" >


# Proyecto final Backend | CoderHouse

Para la entrega la idea fue crear una api para un e-commerce.

## API Reference

#### Users
##### SignUp

```http
  POST /users/sign-up
```
##### LogIn

```http
  POST /users/log-in
```
##### LogOut

```http
  POST /users/log-out
```
##### Get Session

```http
  GET /users/session-use
```
##### Get User

```http
  GET /users/get-user/:emailUser
```

#### Cart
##### Get cart

```http
  GET /cart/get-cart/:emailUser
```
##### Add to cart

```http
  POST /cart/add-to-cart/:emailUser/:idProd
```
##### Delete product

```http
  POST /cart/delete-one/:emailUser/:idProd
```
##### Buy cart

```http
  POST /cart/buy-cart/:emailUser
```

#### Product
##### Create product

```http
  POST /product/create-product
```
<img style="display: block;-webkit-user-select: none;margin: auto;background-color: hsl(0, 0%, 90%);" src="https://raw.githubusercontent.com/JuaniTrotti/FinalBackEnd/master/files/products/gif-grande/create-product_AdobeExpress.gif" width="80%" height="auto" >
##### Get product


```http
  GET /product/get-product/:idProd
```
