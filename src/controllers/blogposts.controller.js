const axios = require("axios");

exports.findAll = (req, res) => {
  //   res.send("You have reached the controller method for get all blog posts");
  //   axios;
  // using axios to fetch data
  axios.get(`https://jsonplaceholder.typicode.com/posts`).then((apicall) => {
    res.send(apicall.data);
  });
};

exports.findById = (req, res) => {
  //   res.send(
  //     `You have reached the controller method requesting the blog post with id of ${req.params.id}`
  //   );
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`)
    .then((apicall) => {
      res.send(apicall.data);
    });
};

exports.create = (req, res) => {
  axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      title: req.body.title,
      body: req.body.body,
      userId: req.body.userId,
    })
    .then((apicall) => {
      res.send(apicall.data);
    });
};

exports.update = (req, res) => {
  axios
    .put("https://jsonplaceholder.typicode.com/posts/" + req.params.id, {
      title: req.body.title,
    })
    .then((apicall) => {
      res.send(apicall.data);
    });
};

exports.deletePost = (req, res) => {
  axios
    .delete(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`)
    .then((apicall) => {
      res.send(apicall.data);
    });
};
