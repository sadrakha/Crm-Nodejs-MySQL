const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const fs = require("fs");
const multer=require('multer')
const upload=multer()
require("dotenv").config();

const sequelize = require("./utils/sequelize");
const userRouts = require("./app/user/userRouter");
const adminRouts=require("./app/admin/admin.router")
const verify = require("./middleware/loginVerify");


const app = express();

const accesslogsystem = fs.createWriteStream(
  path.join(__dirname, "logs/access.log"),
  { flags: "a" }
);


app.use(morgan("combined", { stream: accesslogsystem }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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
app.use(upload.array());

app.use(userRouts);
app.use('/admin/',verify.verifyToken,adminRouts)

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).send("oops");
});

sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT||3000);
  })
  .catch((e) => {
    console.log(e);
  });
