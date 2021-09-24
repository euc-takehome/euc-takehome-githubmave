const knex = require
('knex')

const config = require('./knexfile')
const db =knex(config.development
    )

module.exports = {

    findPatient
}

async function find(id,db){

    return db('patient_questionnaire').select().where(
       {id}.first() 
    )


}