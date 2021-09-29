
//This file is to grep data from data object and deliver them to the front end
const express = require('express')
const router = express.Router()

const {findPatient,findPatientById,findQuestionById,findAnswerById, addPatient, updatedpatn, deeletePatn, deletePatn} = require('./coneTbl')

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


// retreive the whole & singleton item, add to , update and //// delete from patient table

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

// add a new patient

router.post ('/',(req,res)=>{
  const newPatn = req.body
   addPatient(newPatn)
   .then(patn =>{
     res.json(patn)
      
   })
   .catch(err =>{

       console.log(err)
       res.sendStatus(500)
   })
})

//========== update a patient

router.patch ('/:id',(req,res)=>{

  const id =req.params.id
  const updatedPatn = req.body
   updatePatn(id,updatedPatn)
   .then(patn =>{
     res.json(patn)
      
   })
   .catch(err =>{

       console.log(err)
       res.sendStatus(500)
   })
})

//=========== delete a patient====

router.delete('/:id',(req,res)=>{

     deletePatn()
       .then( =>{
          res.json()     
      })
      .catch(err =>
          res.sendStatus(500))

})


//==========================================


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