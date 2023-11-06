const router = require("express").Router();

const verify = require("../../middleware/loginVerify");
const roleController = require("./role.controller");

router.post("/role/add", verify.verifyToken, roleController.addRole);

router.post("/role/edit/:id", verify.verifyToken, roleController.editRole);

module.exports = router;
