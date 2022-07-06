const mongoose = require('mongoose')

require('dotenv').config({ path: 'variables.env' })

// Connects to the database and handles any bad connections
mongoose.connect(process.env.DATABASE, { useUnifiedTopology: true, useNewUrlParser: true })
mongoose.Promise = global.Promise // Tells mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
    console.error(`${err.message}`)
})

mongoose.connection.once('open', () => {
    console.log('connected to mongoose');
})

// import all models
require('dotenv').config({ path: 'variables.env' })

// start the app
const server = require('./app')
server.listen(process.env.PORT, () => {
    console.log(`Server running on PORT ${process.env.PORT}`)
})