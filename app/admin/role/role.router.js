const router = require("express").Router();

const verify = require("../../../middleware/loginVerify");
const roleController = require("./role.controller");

router.post("/role/add", roleController.addRole);

router.post("/role/edit/:id",roleController.editRole);

module.exports = router;
