
//This file is to grep data from data object and deliver them to the front end
const express = require('express')
const router = express.Router()

const {findPatient,findPatientById,findQuestionById,findAnswerById} = require('./coneTbl')

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



router.get('/:id',(req,res)=>{
    const id = Number(req.params.id)
    findPatientById(id)
     .then(patn =>{
       res.json(patn)
        
     })
     .catch(err =>{

         console.log(err)
         res.status(500)
     })
})


router.get('/:id/questions',(req,res)=>{
  const id = Number(req.params.id)
  findQuestionById(id)
   .then(quesLs =>{
     res.json(quesLs)
      
   })
   .catch(err =>{

       console.log(err)
       res.status(500)
   })
})

router.get('/:id/questions/:quesId',(req,res)=>{
  const id = Number(req.params.id)
  const quesId =req.params.quesId

  findAnswerById(quesId)
   .then(ansLs =>{
     res.json(ansLs)
      
   })
   .catch(err =>{

       console.log(err)
       res.status(500)
   })
})



module.exports = router