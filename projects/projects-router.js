const express = require("express");

const db = require("./projects-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.json(await db.getProjects());
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    await db.addProject(req.body);
    res.json(req.body);
  } catch (err) {
    next(err);
  }
});

router.get("/resources", async (req, res, next) => {
  try {
    res.json(await db.getResources());
  } catch (err) {
    next(err);
  }
});

router.post("/:id/resources", async (req, res, next) => {
  try {
    await db.addResource(req.body);
    res.json(req.body);
  } catch (err) {
    next(err);
  }
});

router.get("/:id/tasks", async (req, res, next) => {
  const id = req.params.id;
  console.log(id)
  try {
    res.json(await db.getTasks(id));
  } catch (err) {
    next(err);
  }
});

router.post("/:id/tasks", async (req, res, next) => {
  try {
    await db.addTask(req.body);
    res.json(req.body);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
