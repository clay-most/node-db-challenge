const db = require("../data/config");

function getProjects() {
  return db("projects").select("*");
}

function addProject(project) {
  return db("projects")
    .insert(project)
    .then(id => {
      return getById(id[0]);
    });
}

function getById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function getResources() {
  return db("resources").select("*");
}

function addResource(resource) {
  return db("resources").insert(resource);
}

function getTasks(id) {
  return db("tasks")
    .join("projects", "projects.id", "tasks.projects_id")
    // .where("tasks.projects_id" == id)
    .select("projects.name", "projects.description", "tasks.*")
}

function addTask(task) {
  return db("tasks").insert(task);
}

module.exports = {
  getProjects,
  addProject,
  getResources,
  addResource,
  getTasks,
  addTask
};
