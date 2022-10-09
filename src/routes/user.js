const user = require('express').Router()
const session = require('express-session')
const MongoStore = require('connect-mongo')
//middleware
const {
    signUp, 
    logIn, 
    deleteUser, 
    updateUser, 
    getUser,
    emailExist,
    createSession,
    isAuth,
    logOut,
    parseParam
} = require('../controllers/user')

//session start
const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true }
user.use(
    session({
        store: MongoStore.create({
            mongoUrl: process.env.URLMONGOSESSION || "mongodb+srv://juanitrotti:LZKYuy4d6JQGAuyC@juanignaciomongo.25f7r.mongodb.net/sessions?retryWrites=true&w=majority",
            mongoOptions: advancedOptions,
            ttl: 6000,
        }),
        
        secret: 'obiwankenobi',
        resave: false,
        saveUninitialized: false,
    })
)
//session end

//sign up
user.post('/sign-up', emailExist, signUp, createSession)
//log in
user.post('/log-in', emailExist, logIn, createSession)
//log out
user.post('/log-out', emailExist, logOut)
//elimnar usuario
user.post('/delete-user', emailExist, deleteUser)
//actualizar datos
user.post('/update-user', emailExist, updateUser)
//get user
user.get('/get-user/:email', parseParam, emailExist, getUser)

module.exports = user