// this file is to grep data from db & deliver them to router on Expressjs server

const knex = require
('knex')

const config = require('./knexfile')
const db =knex(config.development
    )



module.exports = {

    findPatient,
    findQuestionById,
    findPatientById,
    findAnswerById,
    addPatient,
    updatePatn,
    deletePatn
   
}

async function findPatient(data=db){
    const cols=['id','Date_of_Birth','First_Name','Last_Name','Allergies','Medications']
    return db('patient_questionnaire2')
              .select(cols)
            
           
}


async function findQuestionById(id,data=db){
    
   // const cols=['id','description']
    return db('questionnaire_question2')
            .join('patient_questionnaire2','patient_questionnaire2.id','questionnaire_question2.patient_id')
            .select('questionnaire_question2.id as ID','questionnaire_question2.description').where('patient_questionnaire2.id',id)
        
}

async function findAnswerById(id,data=db){
    
    //const cols=['id','answer']
    return db('questionnaire_answer2')
            .join('questionnaire_question2','questionnaire_question2.id','questionnaire_answer2.question_id')
            .select('questionnaire_answer2.id as ID','questionnaire_answer2.answer').where('questionnaire_question2.id',id)
        
}


async function findPatientById(id,data=db){
    const cols=['Date_of_Birth','First_Name','Last_Name','Allergies','Medications']
    return db('patient_questionnaire2').select(cols).where('id',id).first()

}


async function addPatient(newPatn,data = db){
   
    return db('patient_questionnaire2').insert(newPatn)
      .then( ids => {findPatientById(ids[0])})
}  

async function updatePatn(id,updatedPatn){
    console.log("coneTbl.js/updatePatn(id) id=",id,data=db)
    return db('patient_questionnaire2')
           .where('id',id)
           .update(updatedPatn)
           .then((itemsChanged)=>{

               return findPatientById(id)
           })
}      

async function deletePatn(id,data = db){

     console.log("coneTbl.js/deletePatn(id) id=",id)

     return db('patient_questionnaire2')
             .where('id',id)
             .delete()
}