exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("project")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("project").insert([
        {
          id: 1,
          name: "Hero Recruitment",
          description: "Recruit local hero squad talent",
          completed: false
        },
        {
          id: 2,
          name: "Villian Recruitment",
          description: "Recruit local villian squad talent",
          completed: false
        },
        {
          id: 3,
          name: "Movie Scene Recruitment",
          description: "Discover local scenes for movie shots",
          completed: false
        },
        {
          id: 4,
          name: "Cast Recruitment",
          description: "Recruit local cast to place as background",
          completed: false
        },
        {
          id: 5,
          name: "Policies document",
          description:
            "Create a policy document to hand out to all onboarding staff",
          completed: false
        }
      ]);
    });
};
