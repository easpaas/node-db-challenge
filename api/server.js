const express = require('express');
const helmet = require('helmet');

const db = require('../data/dbConfig');

const Projects = require("./projects/project_model.js");
const Resources = require("./resources/resource_model.js");
const Tasks = require("./tasks/task_model.js");

const server = express();

server.use(helmet());
server.use(express.json());


// server.get("/", (req, res) => {
//   res.status(200).json({ api: "up" });
// })

server.get("/api/projects", (req, res) => {
  // TODO route for list of projects
});

server.post("/api/projects", (req, res) => {
  // TODO route for adding a project
});

server.get("/api/resources", (req, res) => {
  // TODO route for list of resources
});

server.post("/api/resources", (req, res) => {
  // TODO route for adding a resource
});

server.get("/api/tasks", (req, res) => {
  // TODO route for list of tasks
});

server.post("/api/tasks", (req, res) => {
  // TODO route for adding a task
});

module.exports = server;