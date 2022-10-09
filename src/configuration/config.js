//yargs 
const parseArgs = require('yargs/yargs')
const yargs = parseArgs(process.argv.slice(2))
const { PORT, name, _ } = yargs 
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
    .argv

module.exports = {
    PORT,
    name
}