const express = require("express");
const app = express();

//must add a middleware in order to make content type avaible -- default is json
app.use(express.json());

app.get("/", function (req, res) {
  res.send("This is the top route in the Blog Post API");
});

require("./src/routes/blogposts.route")(app);
require("./src/routes/user.route")(app);
require("./src/routes/todos.route")(app);

app.listen(3000, function () {
  console.log("BlogPostAPI is listening on port 3000");
});
