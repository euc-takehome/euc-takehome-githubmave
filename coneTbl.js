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
    const cols=['id','Date_of_Birth','First_Name','Last_Name','Allergies','Medications']
    return db('patient_questionnaire')
              .select(cols)
            
           
}

async function findPatientById(id,data=db){
    const cols=['Date_of_Birth','First_Name','Last_Name','Allergies','Medications']
    return db('patient_questionnaire').select(cols).where('id',id).first()

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