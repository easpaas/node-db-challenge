
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {
          id: 1,
          name: 'Bruce Wayne',
          description: 'casting for head villian role'
        },
        {
          id: 2,
          name: 'Harley Quinn',
          description: 'casting for women hero squad leader'
        },
        {
          id: 3,
          name: 'John Wayne',
          description: 'casting as background cast'
        },
        {
          id: 4,
          name: 'Sally Wayne',
          description: 'casting as background cast'
        },
        {
          id: 5,
          name: 'Joker',
          description: 'casting for head hero role'
        },
        {
          id: 6, 
          name: "Policy Documentation", 
          description: "Must be signed and returned to HR"
        }
      ]);
    });
};
