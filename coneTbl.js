// this file is to grep data from db & deliver them to router on Expressjs server

const knex = require
('knex')

const config = require('./knexfile')
const db =knex(config.development
    )

module.exports = {

    findPatient,
    findPatientById
}

async function findPatient(){

    return db('patient_questionnaire').select()
}

async function findPatientById(id, db){

    return db('patient_questionnaire').select().where({id}).first
}