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
