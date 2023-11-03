const Sequelize = require("sequelize");

const sequelize = require("../utils/sequelize");

const Permission = sequelize.define(
  "permission",
  {
    title: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Permission;
