const express = require("express");
const hbs = require("hbs");
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Servir contenido estático
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Leandro",
    titulo: "Node JS",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Leandro",
    titulo: "Node JS",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Leandro",
    titulo: "Node JS",
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port);
