const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");
require("dotenv").config();

const sequelize = require("./utils/sequelize");
const userRouts = require("./app/user/userRouter");
const articleRouts = require("./app/article/article.router");
const permissionRouts = require("./app/permission/permissionRouter");
const roleRouts = require("./app/role/role.router");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCG,DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-type",
    "Authorization"
  );
  next();
});

app.use(userRouts);
app.use(articleRouts);
app.use(permissionRouts);
app.use(roleRouts);

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).send("oops");
});

sequelize
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((e) => {
    console.log(e);
  });
