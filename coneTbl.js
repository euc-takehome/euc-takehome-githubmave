const knex = require
('knex')

const config = require('./knexfile')
const db =knex(config.development
    )

module.exports = {

    findPatient
}

async function findPatient(){

    return db('patient_questionnaire')
}