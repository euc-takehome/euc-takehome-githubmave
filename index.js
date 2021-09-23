const express = require('express')
const server = express()
//const path = require('path')
const router = express.Router()


server.use(express.json())
// server.use(express.static(path.join()))


router.get('/',(req,res)=>{

     res.json( {message:"A new sone has been released by Lorde"})
})


server.use('/quizs/v1/quiz1',router)

// server.get('/',(req,res)=>{

//    res.json({text:"Lorde has released a new song!"})
// })



//const PORT= 8000

const PORT = process.env.PORT || 8000

server.listen(PORT,()=>{

    console.log('server listen on port:',PORT)
})

   