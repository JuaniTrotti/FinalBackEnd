const express = require('express')
const session = require('express-session')
const {PORT, name} = require('./configuration/config')

//routers
const mainRouters = require('./routes/main')

console.log(PORT)
console.log(name)

//init server
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//routas
app.use('/', mainRouters)

//server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
app.on('error', error => console.log(`Error en servidor ${error}`))