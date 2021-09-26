
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('questionnaire_question2').del()
    .then(function () {
      // Inserts seed entries
      return knex('questionnaire_question2').insert([
        {id: 77701, description: 'What is your blood pressure?',short_code:'code1',patient_id:88801},
        {id: 77702, description: 'What is your blood suger?',short_code:'code2',patient_id:88802},
        {id: 77703, description: 'Do you have headache?',short_code:'code3',patient_id:88803}
      ]);
    });
};
