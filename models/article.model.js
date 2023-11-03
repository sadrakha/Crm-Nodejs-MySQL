const Sequilize = require("sequelize");

const sequelize = require("../utils/sequelize");

const Article = sequelize.define("article", {
  title: {
    type: Sequilize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequilize.TEXT,
  },
  images: {
    type: Sequilize.STRING,
  }
});

module.exports = Article;
