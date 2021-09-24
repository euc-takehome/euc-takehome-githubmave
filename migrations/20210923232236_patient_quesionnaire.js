
exports.up = function(knex) {
    return knex.schema.createTable('patient_questionnaire', tbl =>{
  
        tbl.increments() // id field
        tbl.text('First_Name',128)
          .notNullable()
        tbl.text('Last_Name')
          .notNullable()
        tbl.text('Date_of_Birth')
          .notNullable()
        tbl.text('Allergies')
          .notNullable()
        tbl.text('Medications')
          .notNullable()
        tbl.timestamps(true,true)
          
    })
    
  };
  
  exports.down = function(knex) {
     return knex.schema.dropTableIfExists('patient_questionnaire')
  };
     