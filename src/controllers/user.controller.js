const axios = require("axios");

exports.findAll = (req, res) => {
  axios.get("https://jsonplaceholder.typicode.com/users").then((apicall) => {
    res.send(apicall.data);
  });
};

exports.findUserById = (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/users/" + req.params.id)
    .then((apicall) => {
      res.send(apicall.data);
    });
};

exports.update = (req, res) => {
  axios
    .put(`https://jsonplaceholder.typicode.com/users/${req.params.id}`, {
      name: req.body.name,
    })
    .then((apicall) => {
      res.send(apicall.data);
    });
};

// exports.create = (req, res) => {
//   axios
//     .post("https://jsonplaceholder.typicode.com/users", {})
//     .then((apicall) => {
//       res.send(apicall.data);
//     });
// };
