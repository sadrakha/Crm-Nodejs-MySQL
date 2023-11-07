const ArticleService = require("./article.service");
const ArticleServiceUse = new ArticleService();
const subCategory = require("../../../models/subCategory.model");
const articleModel = require("../../../models/article.model");

exports.createArticle = async (req, res, next) => {
  try {
    const subCategoryId = req.body.subCategoryId;
    if (!subCategory.findOne({ where: { id: subCategoryId } })) {
      throw new Error();
    }
    const article = await ArticleServiceUse.createArticle(req);
    res.send(article);
  } catch (error) {
    next(error);
  }
};

exports.editArticle = async (req, res, next) => {
  try {
    if (!(await articleModel.findOne({ where: { id: req.params.id } }))) {
      throw new Error();
    }
    const subCategoryId = req.body.subCategoryId;
    if (!subCategory.findOne({ where: { id: subCategoryId } })) {
      throw new Error();
    }
    const editArticle = await ArticleServiceUse.editArticle(req);
    res.send(editArticle);
  } catch (error) {
    next(error);
  }
};

exports.deleteArticle = async (req, res, next) => {
  try {
    if (!(await articleModel.findOne({ where: { id: req.params.id } }))) {
      throw new Error();
    }
    const deleteArticle = await ArticleServiceUse.deleteArticle(req.params.id);
    res.send(deleteArticle);
  } catch (error) {
    next(error);
  }
};
