

exports.up = function(knex) {
    return knex.schema.createTable('questionnaire_answer2', tbl =>{
  
        tbl.increments('id').primary() // id field
        tbl.text('answer')
          .notNullable()
        tbl.text('Date_of_Answer')
          .notNullable()
       
        tbl.timestamps(true,true)
        tbl.integer('question_id')
        .unsigned()
        .references('id')
          
    })
    
  };
  
  exports.down = function(knex) {
     return knex.schema.dropTableIfExists('questionnaire_answer2')
  };
     
