const db = require("../../data/dbConfig.js");

module.exports = {
  find, 
  add
};

function find() {
  return db("task");
}

function add(task) {
  return db("task").insert(task);
}