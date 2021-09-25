
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('patient_questionnaire').del()
    .then(function () {
      // Inserts seed entries
      return knex('patient_questionnaire').insert([
        {First_Name:"Jill", Last_Name:"Bodland",Date_of_Birth:"Jan_01_01",Allergies:"Peanut",Medications:"Panadol"},
        {First_Name:"Mendi", Last_Name:"Solemany",Date_of_Birth:"Jan_01_1980",Allergies:"Prawn",Medications:"Panicillin"},
        {First_Name:"Lizzie", Last_Name:"Bowers",Date_of_Birth:"Jan_01_1990",Allergies:"Seafood",Medications:"Zoloft"},
        
      ]);
    });
};
  