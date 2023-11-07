const express = require("express")
const router = express.Router();

const articleRouts = require("./article/article.router");
const verify = require("../../middleware/loginVerify");
const categoryRouts = require("./category/category.router");
const permissionRouts = require("./permission/permissionRouter");
const roleRouts = require("./role/role.router");

router.all('/admin/*',verify.verifyToken)
router.use(verify.verifyAdmin,articleRouts);
router.use(verify.verifyAdmin,categoryRouts);
router.use(verify.verifyAdmin,permissionRouts);
router.use(verify.verifyAdmin,roleRouts);

module.exports = router;
