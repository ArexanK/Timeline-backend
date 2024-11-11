const express = require("express");
require("./config/mongoose");
require("dotenv").config();
const app = express();
const PORT = 3200;
const route = require("./config/routes");



//EJS
app.set("view engine", "ejs");

//middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to parse the req body

//Routes
app.use(route);

//server

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
