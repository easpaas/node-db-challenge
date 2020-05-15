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
  Projects.find()
    .then(projects => {
      console.log(projects)
      res.status(201).json({ data: projects })
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ errorMessage: error.message })
    })
});

server.post("/api/projects", (req, res) => {
  const project = req.body;

  Projects.add(project)
    .then(id => {
      console.log(id);
      res.status(201).json({ data: `Success! Project assigned id of ${id}.` })
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ errorMessage: error.message })
    })
});

server.get("/api/resources", (req, res) => {
  Resources.find()
    .then(resources => {
      console.log(resources)
      res.status(201).json({ data: resources })
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ errorMessage: error.message })
    })
});

server.post("/api/resources", (req, res) => {
  const resource = req.body;

  Resources.add(resource)
    .then(id => {
      console.log(id);
      res.status(201).json({ data: `Success! resource assigned id of ${id}.` })
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ errorMessage: error.message })
    })
});

server.get("/api/tasks", (req, res) => {

  // list of tasks should include project name and description 

  Tasks.find()
  .then(tasks => {
    console.log(tasks)
    res.status(201).json({ data: tasks })
  })
  .catch(error => {
    console.log(error)
    res.status(500).json({ errorMessage: error.message })
  })
});

server.post("/api/tasks", (req, res) => {
  const task = req.body;

  Tasks.add(task)
    .then(id => {
      console.log(id);
      res.status(201).json({ data: `Success! task assigned id of ${id}.` })
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ errorMessage: error.message })
    })
});

module.exports = server;