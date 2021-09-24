// this file is to grep data from db & deliver them to router on Expressjs server

const knex = require
('knex')

const config = require('./knexfile')
const db =knex(config.development
    )

module.exports = {

    findPatient
   
}

async function findPatient(){

    return db('patient_questionnaire').select()
}

