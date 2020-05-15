
exports.up = function(knex) {
  return knex.schema
    .createTable("project", projects_table => {
      projects_table.increments();

      projects_table.string("name", 255).notNullable();
      projects_table.string("description", 255).notNullable();
      projects_table.boolean("completed", false).notNullable();
    })
    .createTable("tasks", tasks_table => {
      tasks_table.increments();

      tasks_table.string("description", 255).notNullable();
      tasks_table.string("notes", 255);
      tasks_table.boolean("completed", false).notNullable();

      // Create a foreign key linked to project table id
      tasks_table.integer("project")
      .unsigned()
      .notNullable()
      .references("project.id")
      .onUpdate("CASCADE")
      .onDelete("RESTRICT");
    })
    .createTable("resource", resources_table => {
      resources_table.increments();

      resources_table.string("name", 255).notNullable();
      resources_table.string("description", 255);
      
      // Create a foreign key linked to project table id
      resources_table.integer("project")
      .unsigned()
      .notNullable()
      .references("project.id")
      .onUpdate("CASCADE")
      .onDelete("RESTRICT");
    })
    .createTable("project_resources", pr_table => {
      pr_table.increments();

      // Create a foreign key linked to project table
      pr_table.integer("project")
      .unsigned()
      .notNullable()
      .references("project.id")
      .onUpdate("CASCADE")
      .onDelete("RESTRICT");

      // Create a foreign key linked to resource table
      pr_table.integer("resource")
      .unsigned()
      .notNullable()
      .references("resource.id")
      .onUpdate("CASCADE")
      .onDelete("RESTRICT");
    })
};

exports.down = function(knex) {
  
};
