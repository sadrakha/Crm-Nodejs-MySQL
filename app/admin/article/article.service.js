const { validationResult } = require("express-validator");

const SequelizeService = require("../../sequelize/sequelize.service");
const Article = require("../../../models/article.model");
const subCategory=require('../../../models/subCategory.model')
const { thumbGenerator } = require("../../../helper/imageConvertor");
const { deleteArticle } = require("./article.controller");

class ArticleService {
  constructor() {
    this.Article = new SequelizeService(Article);
  }

  async createArticle(req) {
    
    // thumbGenerator(req.body.img)
    try {const title = req.body.user;
    const description = req.body.body;
    let status = req.body.status;
    const userId = req.body.id;
    const subCategoryId = req.body.subCategoryId;
console.log(title,description);

    if (!status) {
      status = "private";
    }
    
      const article = await this.Article.create({
        title,
        description,
        // status:'1',
        userId,
        // subCategoryId:1,
      });
    console.log(32);

      return article;
    } catch (error) {
      return error;
    }
  }

  async editArticle(req) {
    const title = req.body.title;
    const description = req.body.description;
    let status = req.body.status;
    const subCategoryId = req.body.subCategory;

    try {
      const editedArticle = await this.Article.findOneAndUpdate(
        { title, description, status, subCategoryId },
        req.params.id
      );
      return editedArticle;
    } catch (error) {
      return error;
    }
  }

  async deleteArticle(id) {
    try {
      const deleteArticle = await this.Article.findOneAndDelete(id);
      return 1;
    } catch (error) {
      return error;
    }
  }
}

module.exports = ArticleService;
