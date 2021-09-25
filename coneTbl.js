// this file is to grep data from db & deliver them to router on Expressjs server

const knex = require
('knex')

const config = require('./knexfile')
const db =knex(config.development
    )

module.exports = {

    findPatient,
    findPatientById,
    addPatient,
    updatePatn,
    deletePatn
   
}

async function findPatient(data=db){
    
    return db('patient_questionnaire')
              .select()
              .then( patns =>{
                  let patn1={}
                 return patns.map(patn =>{
                    patn1.Date_of_Birth =patn.Date_of_Birth

                    patn1.First_Name =patn.First_Name

                    patn1.Last_Name = patn.Last_Name

                    patn1.Allergies = patn.Allergie

                    patn1.Medications = patn.Medication

                    return patn1
                 })
                  
              })
}

async function findPatientById(id,data=db){

    return db('patient_questionnaire').select().where('id',id).first()
      .then(patn =>{
        let patn1={}
        patn1.Date_of_Birth =patn.Date_of_Birth

        patn1.First_Name =patn.First_Name

        patn1.Last_Name = patn.Last_Name

        patn1.Allergies = patn.Allergie

        patn1.Medications = patn.Medication

         return patn1
})
}


async function addPatient(newPatn,data = db){
   
    return db('patient_questionnaire').insert(newPatn)
      .then( ids => {findPatientById(ids[0])})
}  

async function updatePatn(id,updatedPatn){
    console.log("coneTbl.js/updatePatn(id) id=",id,data=db)
    return db('patient_questionnaire')
           .where('id',id)
           .update(updatedPatn)
           .then((itemsChanged)=>{

               return findPatientById(id)
           })
}      

async function deletePatn(id,data = db){

     console.log("coneTbl.js/deletePatn(id) id=",id)

     return db('patient_questionnaire')
             .where('id',id)
             .delete()
}