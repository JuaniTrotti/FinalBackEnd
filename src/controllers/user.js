const {newUserDTO, userLoginDTO} = require('../dto/user/userDto')
const {
    signUpService, 
    loginService, 
    deleteUserService, 
    updateUserService,
    getUserService,
    emailExistService
} = require('../services/userServices')

async function signUp(req, res, next) {
    console.log(req.emailUserExist + ' sign email exist')
    if (!req.emailUserExist) {
        //dto
        let userDtoNew = newUserDTO(req.body)
        //create-user /services
        // req.json(signUpService(userDtoNew))
        await signUpService(userDtoNew)
        ? res.json('session starts')
        : res.json('pass-wrong')
    } else {
        res.json('email-exist')
    }
}

async function logIn(req, res, next) {
    if (req.emailUserExist) {
        //dto
        let userDtoLogin = userLoginDTO(req.body)
        //inicio-sesion /services
        await loginService(userDtoLogin)
        ? next()
        : res.json('pass-not-match')
    } else {
        res.json('email-doesnt-exist')
    }
}

function logOut() {
    if (req.emailUserExist) {
        //hacemos el logout
    }
    res.json('no-session-active')
}

function deleteUser(req, res, next) {
    //dto
    //delete-user /services
    req.json(deleteUserService(req.body))
}

function updateUser(req, res, next) {
    //dto
    let userDtoUpdate = newUserDTO(req.body)
    //update-user /services
    req.json(updateUserService(userDtoUpdate))
}

async function getUser(req, res, next) {
    //get user en /services
    // console.log(req.params.email + " estoy en getuser/controllers")
    if (req.emailUserExist) {
        let reponseUser = await getUserService(req.params.email)
        res.json(reponseUser)
    } else {
        res.json('user-doesnt-exist')
    }
}

//middlewares
function parseParam(req, res, next) {
    req.body.email = req.params.email
    next()
}

async function emailExist(req, res, next) {
    // console.log(req.params.email + " estoy en emailExist/controllers")
    req.emailUserExist = await emailExistService(req.body.email)
    next()
}

function createSession(req, res, next) {
    res.json('cree session')
    // if(!req.session.email) {
    //     req.session.email = req.body.email
    // }
    // next()
}

function isAuth(req, res, next) {}

module.exports = {
    signUp,
    logIn,
    logOut,
    deleteUser, 
    updateUser, 
    getUser,
    emailExist,
    createSession,
    isAuth,
    parseParam
}