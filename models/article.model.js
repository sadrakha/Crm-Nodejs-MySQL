const Sequelize = require("sequelize");

const sequelize = require("../utils/sequelize");
const category = require("./category.model");
const subCategory = require("./subCategory.model");

const Article = sequelize.define("article", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  images: {
    type: Sequelize.STRING,
  },
  status: {
    type: Sequelize.STRING,
  },
});

subCategory.belongsTo(category);
Article.belongsTo(subCategory);

module.exports = Article;
