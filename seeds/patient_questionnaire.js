
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('patient_questionnaire').del()
    .then(function () {
      // Inserts seed entries
      return knex('patient_questionnaire').insert([
        {First_Name:"Jill", Last_Name:"Bodland",Date_of_Birth:"Jan_01_01",Allergies:"peanut",Medications:"panadol"}
        
      ]);
    });
};
  