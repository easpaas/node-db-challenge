
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          id: 99, 
          description: 'find and locate',
          completed: false,
          project_id: 1
        },
        {
          id: 100, 
          description: 'find and locate',
          completed: false,
          notes: 'still searching',
          project_id: 1
        },
        {
          id: 101, 
          description: 'find and locate',
          completed: false,
          notes: 'still searching',
          project_id: 2
        },
        {
          id: 102, 
          description: 'find and locate',
          completed: false,
          project_id: 2
        },
        {
          id: 103, 
          description: 'find and locate',
          completed: false,
          project_id: 3
        },
        {
          id: 104, 
          description: 'find and locate',
          completed: false,
          notes: 'still searching',
          project_id: 3
        },
        {
          id: 105, 
          description: 'find and locate',
          completed: false,
          project_id: 4
        },
        {
          id: 106, 
          description: 'find and locate',
          completed: false,
          project_id: 4
        },
        {
          id: 107, 
          description: 'find and locate',
          completed: false,
          notes: 'still searching',
          project_id: 5
        },
        {
          id: 108, 
          description: 'find and locate',
          completed: false,
          project_id: 5
        }
      ]);
    });
};
