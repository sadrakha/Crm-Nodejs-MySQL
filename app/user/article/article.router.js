const router = require("express").Router();

const articleController = require("./article.controller");

router.get(
  "/article/allArticles",
  articleController.articles
);

router.get('/article/:id',articleController.readArticle)

router.post('/article/search',articleController.searchArticle)

module.exports = router;
