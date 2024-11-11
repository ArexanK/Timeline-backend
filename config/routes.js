const express = require("express");
const route = express.Router();
const controller = require("../controller/controller");

route.get("/", controller.getHomePage)
route.post("/add-user", controller.newUser);

module.exports = route;
