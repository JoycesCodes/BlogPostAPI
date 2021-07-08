module.exports = (app) => {
  const controller = require("../controllers/user.controller");
  const router = require("express").Router();

  router.get("/", controller.findAll);
  router.get(`/:id`, controller.findUserById);
  //   router.post("/", controller.create);
  router.put("/:id", controller.update);

  app.use("/api/users", router);
};
