const db = require("../../data/dbConfig.js");

module.exports = {
  find, 
  add
};

function find() {
  /* 
    select t.id, t.description, t.notes, t.completed, p.name as ProjectName,      p.description as projectDescription from tasks as t
      join project as p
        on t.project_id = p.id; 
  */

  return db("tasks as t")
    .join("project as p", "t.project_id", "=", "p.id")
    .select("t.*", "p.name as Project Name", "p.description as Project Description");
}

function add(task) {
  return db("tasks").insert(task);
}