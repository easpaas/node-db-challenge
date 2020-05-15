const db = require('../../data/dbConfig.js');

module.exports = {
  find, 
  add
};

function find() {
  return db("resource");
}

function add(resource) {
  return db("resource").insert(resource);
}