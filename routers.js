const express = require('express')
const router = express.Router()


router.get('/',(req,res)=>{

         res.json( {Instagram:"New songs has been released by Lorde"})
    })

module.exports = router