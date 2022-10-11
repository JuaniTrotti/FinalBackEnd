
# Proyecto final Backend | CoderHouse

Para la entrega la idea fue crear una api para un e-commerce.




## Primer inicio en forma local

Instalar Nodemon
```bash
  npm install nodemon
```

Iniciar proyecto con nodemon
```bash
  nodemon src/sercer -p PORT -u USER 
```
#### PORT
Puerto para iniciar el servidor
Puerto default: 8080

#### USER
User va a ser el usuario Admin, tiene que ser un mail. Ya que ahi van a llegar los avisos cuando un nuevo usuario crea una cuenta
User default: juan.ignacio.tr@gmail.com

## API Reference


### SignUp
Crea un usuario nuevo, solo puede haber un usuario por mail.

```http
  POST /users/sign-up
```
#### Required body
```javascript
{
	"user": "Juan Trotti",
	"email": "juan.ignacio.tr@gmail.com",
	"pass": "Pelota25",
	"number": "1130400999",
	"photo": "fotodeperil.com",
	"admin": "false"
}
```
![App Screenshot](https://github.com/JuaniTrotti/FinalBackEnd/blob/master/files/users/screen/signup.PNG)



### LogIn
```http
  POST /users/log-in
```
#### Required body
```javascript
{
	"email": "juan.ignacio.tr@gmail.com",
	"pass": "Pelota25"
}
```
![App Screenshot](https://github.com/JuaniTrotti/FinalBackEnd/blob/master/files/users/screen/login.PNG)


### LogOut
Desloguea un usuario
```http
  POST /users/log-out
```
#### Required body
```javascript
{
	"email": "juan.ignacio.tr@gmail.com"
}
```
![App Screenshot](https://github.com/JuaniTrotti/FinalBackEnd/blob/master/files/users/screen/logout.PNG)



### Get Session
Devuelve la session activa en el navegador
```http
  GET /users/session-use
```
![App Screenshot](https://github.com/JuaniTrotti/FinalBackEnd/blob/master/files/users/screen/getsession.PNG)



### Get User
Devuelve todos los datos de un usuario apartir de su mail
```http
  GET /users/get-user/:emailUser
```

#### Required Parms
#### :emailUser Email del usuario requerido

![App Screenshot](https://github.com/JuaniTrotti/FinalBackEnd/blob/master/files/users/screen/getuser.PNG)



### Get cart
Devuelve el carrito del usuario requerido (:emailUser)
```http
  GET /cart/get-cart/:emailUser
```
#### Required Parms
#### :emailUser Email del usuario requerido

![App Screenshot](https://github.com/JuaniTrotti/FinalBackEnd/blob/master/files/cart/screen/getcart.PNG)



### Add to cart
Agrega un producto (:idProd) al carrito de un usuario (:emailUser)
```http
  POST /cart/add-to-cart/:emailUser/:idProd
```
#### :idProd Id del producto requerido
![App Screenshot](https://github.com/JuaniTrotti/FinalBackEnd/blob/master/files/cart/screen/pushcart.PNG)



### Delete product
Elimina un producto (:idProd) del carrito de un usuario (:emailUser)
```http
  POST /cart/delete-one/:emailUser/:idProd
```
#### Required Parms
#### :emailUser Email del usuario requerido
#### :idProd Id del producto requerido
![App Screenshot](https://github.com/JuaniTrotti/FinalBackEnd/blob/master/files/cart/screen/deleteone.PNG)


### Buy cart
Finaliza la compra y envía el resumen del pedido por mail al usuario
```http
  POST /cart/buy-cart/:emailUser
```
#### Required Parms
#### :emailUser Email del usuario requerido
![App Screenshot](https://github.com/JuaniTrotti/FinalBackEnd/blob/master/files/cart/screen/buycart.PNG)



### Get product
Devuelve los o un producto
```http
  GET /product/get-product/:idProd
```
idProd = all
![App Screenshot](https://github.com/JuaniTrotti/FinalBackEnd/blob/master/files/products/screen/productall.PNG)
idProd = 1
![App Screenshot](https://github.com/JuaniTrotti/FinalBackEnd/blob/master/files/products/screen/productone.PNG)
idProd = 'un id que no existe'
![App Screenshot](https://github.com/JuaniTrotti/FinalBackEnd/blob/master/files/products/screen/productnot.PNG)



### Add product
Crea un producto nuevo
```http
  POST /product/create-product
```
#### :idProd Id del producto requerido

#### Required body
```javascript
{
	"title": "Obra Ejemplo",
	"desc": "obra de ejemplo",
	"thumbnail": "fotoobra.com",
	"price": "8000",
	"stock": "5",
	"tags": {
		"color1": "amarillo",
		"color2": "verde",
		"keyWord": "arte"
	}
}
```
![App Screenshot](https://github.com/JuaniTrotti/FinalBackEnd/blob/master/files/products/screen/createproduct.PNG)



## Deploy en Heroku

[HerokuApp](https://aripto.herokuapp.com/)
