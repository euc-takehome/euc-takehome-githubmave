const express = require('express')
const server = express()
//const path = require('path')
const myRoute = require('./server/routers')


server.use(express.json())
// server.use(express.static(path.join()))

server.use('/quizs/v1/quiz1',myRoute)


const PORT = process.env.PORT || 8000

server.listen(PORT,()=>{

    console.log('server listen on port:',PORT)
})

   