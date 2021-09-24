const express = require('express')
const router = express.Router()
const {findPatient} = require('./coneTbl')

router.get('/',(req,res)=>{

       findPatient()
         .then((patientLs) =>{

          console.log("routers.js/router.get:findPatient",patientLs)
          res.json(patientLs)

         })
         .catch((err)=>{
            console.log(err)
            res.status(500)

         })
        //  res.json( {Instagram:"New songs has been released by Lorde"})
    })

module.exports = router