const express = require("express");
const ejs = require("ejs");
const path = require("path");
const session = require("express-session");

const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/static", express.static("public"));

// on initalise la variable task

let task = [];

// On render la page TODO
app.get("/", (req, res) => {
  const data = {
    task: task,
  };
  res.render("pages/todo.ejs", data);
});

app.post("/", (req, res, next) => {
  if (req.body.task != "") {
    task.push(req.body.task);
  } else {
    console.log("input empty !");
  }
  console.log(task);
  next();
});

app.use((req, res) => {
  res.redirect("/");
});

app.listen(port, () => {
  console.log("Serveur lancé !");
});
