//This file is to initiate a RESTful server with expressjs

const express = require('express')
const server = express()
const path = require('path')
const myRoute = require('./routers')


server.use(express.json())
server.use(express.static(path.join()))

server.use('/api/v1/patn1',myRoute)


const PORT = process.env.PORT || 8000

server.listen(PORT,()=>{

    console.log('server listen on port:',PORT)
})

   