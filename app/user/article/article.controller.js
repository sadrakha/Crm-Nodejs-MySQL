const ArticleService = require("./article.service");
const ArticleServiceUse = new ArticleService();
const articleModel = require("../../../models/article.model");

exports.articles = async (req, res, next) => {
  try {
    const articles = await ArticleServiceUse.articles(req);
    res.send(articles);
  } catch (error) {
    next(error);
  }
};

exports.readArticle = async (req, res, next) => {
  try {
    if (!(await articleModel.findOne({ where: { id: req.params.id } }))) {
      throw Error;
    }
    const article = await ArticleServiceUse.article(req);
    res.send(article);
  } catch (error) {
    next(error);
  }
};

exports.searchArticle = async (req, res, next) => {
  try {
    const searchArticle = await ArticleServiceUse.searchArticlerticle(req.params.id);
    res.send(searchArticle);
  } catch (error) {
    next(error);
  }
};
