
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('questionnaire_answer2').del()
    .then(function () {
      // Inserts seed entries
      return knex('questionnaire_answer2').insert([
        {id: 99901, answer: 'higt:125,low:90',Date_of_Answer:'Sept_01_01',question_id:77701},
        {id: 99902, answer: '650',Date_of_Answer:'Sept_02_09',question_id:77702},
        {id: 99903, answer: 'Yes, have headache',Date_of_Answer:'Sept_01_03',question_id:77703}
      ]);
    });
};
