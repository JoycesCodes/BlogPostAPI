module.exports = (app) => {
  const router = require("express").Router();
  const controller = require("../controllers/blogposts.controller");

  //   router.get("/", function (req, res) {
  //     res.send("You have reached the router handler for get all blog posts.");
  //   });
  router.get("/", controller.findAll);

  router.get(`/:id`, controller.findById);
  router.post("/", controller.create);
  router.put("/:id", controller.update);
  router.delete("/:id", controller.deletePost);

  app.use("/api/blogposts", router);
};
