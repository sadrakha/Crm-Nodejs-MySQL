const router=require('express').Router()

const verify=require('../../middleware/loginVerify')
const articleController=require('./article.controller')

router.post('/article/createArticle',verify.verifyToken,articleController.createArticle)

router.post('/article/edit/:id',verify.verifyToken,articleController.editArticle)

router.delete('/article/delete/:id',verify.verifyToken,articleController.deleteArticle)

module.exports=router