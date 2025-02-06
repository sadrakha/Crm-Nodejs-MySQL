const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const fs = require("fs");
const multer = require("multer");
const upload = multer();
require("dotenv").config();

const sequelize = require("./utils/sequelize");
const userRoutes = require("./app/user/userRouter"); // Fixed naming
const adminRoutes = require("./app/admin/admin.router"); // Fixed naming
const verify = require("./middleware/loginVerify");

const app = express();

// Logging
const accesslogsystem = fs.createWriteStream(
  path.join(__dirname, "logs/access.log"),
  { flags: "a" }
);
app.use(morgan("combined", { stream: accesslogsystem }));

// Body Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.array());

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// CORS Middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200); // Properly handle preflight requests
  }

  next();
});

// Routes
app.use(userRoutes);
app.use("/admin", verify.verifyToken, adminRoutes);

// Error Handling Middleware
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: "Internal Server Error", error: error.message });
});

// Start Server Only if DB Connects
sequelize
  .sync()
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((e) => {
    console.error("Database connection failed:", e);
    process.exit(1);
  });
