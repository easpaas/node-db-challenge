
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project_resources').insert([
        {
          id: 200, 
          project_id: 1, 
          resource_id: 1
        },
        {
          id: 201, 
          project_id: 2, 
          resource_id: 1
        },
        {
          id: 202, 
          project_id: 4, 
          resource_id: 3
        },
        {
          id: 203, 
          project_id: 4, 
          resource_id: 4
        },
        {
          id: 204, 
          project_id: 5, 
          resource_id: 6
        }
      ]);
    });
};
