const userModel = require("../model/userModel");

//homepage
const getHomePage = (req, res) => {
  res.status(200).send("welcome to homepage");
};

//create post
const newUser = (req, res) => {
  console.log(req.body);
  let NewUser = new userModel(req.body);
  console.log(NewUser);
  NewUser.save()
    .then(() => {
      res.redirect("/");
      console.log("new user is added");
    })
    .catch((err) => {
      console.log(err);
    });
};

//delete post

//add comment

module.exports = {
  newUser,
  getHomePage,
};
