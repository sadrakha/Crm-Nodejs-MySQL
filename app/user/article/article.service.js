const { validationResult } = require("express-validator");

const SequelizeService = require("../../sequelize/sequelize.service");
const Article = require("../../../models/article.model");
const { thumbGenerator } = require("../../../helper/imageConvertor");
const pagination=require('../../../helper/pagination').pagination

class ArticleService {
  constructor() {
    this.Article = new SequelizeService(Article);
  }

  async articles(req) {
    
    try {
      const articles = await pagination(3,this.Article,req)
      return articles;
    } catch (error) {
      return error;
    }
  }

  async article(req) {
    const articleId = req.params.id

    try {
      const article = await this.Article.findOne({where:{id:articleId}}      );
      return article;
    } catch (error) {
      return error;
    }
  }

  async searchArticle(id) {
    try {
        const title=req.body.title
      const article = await this.Article.findOne({where:{title}});
      return article;
    } catch (error) {
      return error;
    }
  }
}

module.exports = ArticleService;
