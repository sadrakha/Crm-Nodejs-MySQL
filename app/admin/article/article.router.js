const router = require("express").Router();

const articleController = require("./article.controller");
const uploads=require('../../../middleware/upload').uploadImage

router.post(
  "/article/createArticle",uploads,
  articleController.createArticle
);

router.post(
  "/article/edit/:id",uploads,
  articleController.editArticle
);

router.delete(
  "/article/delete/:id",
  articleController.deleteArticle
);

module.exports = router;
