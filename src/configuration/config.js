//yargs 
const parseArgs = require('yargs/yargs')
const yargs = parseArgs(process.argv.slice(2))

//mailing
const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
    user: 'juan.ignacio.tr@gmail.com',
    pass: 'liemysjxtkwjrzcc',
    },
})


const { PORT, name, modoCluster, _ } = yargs 
    .alias({
        p: 'PORT'
    })
    .default({
        p: 8080
    })
    .alias({
        n: 'name'
    })
    .default({
        n: 'juan.ignacio.tr@gmail.com'
    })
    .alias({
        m: 'modo'
    })
    .default({
        m: 'CLUSTER'
    })
    .argv

module.exports = {
    PORT,
    name,
    transporter,
    modoCluster
}