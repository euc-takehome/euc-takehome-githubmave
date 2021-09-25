
//This file is to grep data from data object and deliver them to the front end
const express = require('express')
const router = express.Router()
const {findPatient,findPatientById,addPatient,updatePatn,deletePatn
} = require('./coneTbl')

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
    
    })

module.exports = router