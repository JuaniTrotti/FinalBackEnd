
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
Uuser default: juan.ignacio.tr@gmail.com

## API Reference


### SignUp

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

```http
  GET /users/session-use
```
![App Screenshot](https://github.com/JuaniTrotti/FinalBackEnd/blob/master/files/users/screen/getsession.PNG)
### Get User

```http
  GET /users/get-user/:emailUser
```
![App Screenshot](https://github.com/JuaniTrotti/FinalBackEnd/blob/master/files/users/screen/getuser.PNG)
### Get cart

```http
  GET /cart/get-cart/:emailUser
```
![App Screenshot](https://github.com/JuaniTrotti/FinalBackEnd/blob/master/files/cart/screen/getcart.PNG)
### Add to cart

```http
  POST /cart/add-to-cart/:emailUser/:idProd
```
![App Screenshot](https://github.com/JuaniTrotti/FinalBackEnd/blob/master/files/cart/screen/pushcart.PNG)
### Delete product

```http
  POST /cart/delete-one/:emailUser/:idProd
```
![App Screenshot](https://github.com/JuaniTrotti/FinalBackEnd/blob/master/files/cart/screen/deleteone.PNG)
### Buy cart

```http
  POST /cart/buy-cart/:emailUser
```
![App Screenshot](https://github.com/JuaniTrotti/FinalBackEnd/blob/master/files/cart/screen/buycart.PNG)

### Get product

```http
  GET /product/create-product
```
![App Screenshot](https://github.com/JuaniTrotti/FinalBackEnd/blob/master/files/products/screen/productall.PNG)
![App Screenshot](https://github.com/JuaniTrotti/FinalBackEnd/blob/master/files/products/screen/productone.PNG)
![App Screenshot](https://github.com/JuaniTrotti/FinalBackEnd/blob/master/files/products/screen/productnot.PNG)
### Add product

```http
  POST /product/get-product/:idProd
```

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


