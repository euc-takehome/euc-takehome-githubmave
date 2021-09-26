
exports.up = function(knex) {
    return knex.schema.createTable('questionnaire_question2', tbl =>{
  
        tbl.increments('id').primary() // id field
        tbl.text('description')
          .notNullable()
        tbl.text('short_code')
          .notNullable()
       
        tbl.timestamps(true,true)
        tbl.integer('patient_id')
        .unsigned()
        .references('id')
          
    })
    
  };
  
  exports.down = function(knex) {
     return knex.schema.dropTableIfExists('questionnaire_question2')
  };
     