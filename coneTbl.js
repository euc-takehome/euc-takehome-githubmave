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

async function findPatient(){

    return db('patient_questionnaire')
              .select()
}

async function findPatientById(id,db){

    return db('patient_questionnaire').select().where('id',id).first()
}

async function addPatient(newPatn,db){
   
    return db('patient_questionnaire').insert(newPatn)
      .then( ids => {findPatientById(ids[0])})
}  

async function updatePatn(id,updatedPatn){
    console.log("coneTbl.js/updatePatn(id) id=",id)
    return db('patient_questionnaire')
           .where('id',id)
           .update(updatedPatn)
           .then((itemsChanged)=>{

               return findPatientById(id)
           })
}      

async function deletePatn(id){

     console.log("coneTbl.js/deletePatn(id) id=",id)

     return db('patient_questionnaire')
             .where('id',id)
             .delete()
}