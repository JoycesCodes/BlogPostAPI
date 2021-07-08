module.exports = (app) => {
  const router = require("express").Router();
  const controller = require("../controllers/todos.controller");

  router.get("/", controller.findAll);
  router.get("/:id", controller.findTodosById);

  app.use("/api/todos", router);
};
