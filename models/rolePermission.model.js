const Sequelize = require("sequelize");

const sequelize = require("../utils/sequelize");

const rolePermission = sequelize.define(
  "rolePermission",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = rolePermission;
