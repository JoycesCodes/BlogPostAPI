module.exports = (app) => {
  const controller = require("../controllers/user.controller");
  const router = require("express").Router();

  router.get("/", controller.findAll);
  router.get(`/:id`, controller.findUserById);

  app.use("/api/users", router);
};
