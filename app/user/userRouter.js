const router = require("express").Router();

const articleRouts=require('./article/article.router')
const userAuthRouts=require('./userAuth/userAuth.router')
const verify=require('../../middleware/loginVerify')
const validation=require('../../middleware/validations');
const {signUp,login}=new validation()

router.use(userAuthRouts)

router.use(articleRouts)
module.exports = router;
