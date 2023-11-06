const Sequilize = require("sequelize");
const sequelize = require("../utils/sequelize");
const article = require("./article.model");

const User = sequelize.define("user", {
  userName: {
    type: Sequilize.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequilize.STRING,
    allowNull: false,
  },
  roleId: {
    type: Sequilize.INTEGER,
    default: 1,
  },
  password: {
    type: Sequilize.STRING,
    allowNull: false,
  },
  profile: {
    type: Sequilize.STRING,
  },
});

article.belongsTo(User);

module.exports = User;
