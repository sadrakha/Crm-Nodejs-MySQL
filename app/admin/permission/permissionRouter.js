const router = require("express").Router();

const verify = require("../../../middleware/loginVerify");
const permissionController = require("./permission.controller");

router.post(
  "/permission/add",
  permissionController.addPermission
);

router.post(
  "/permission/edit/:id",
  permissionController.editPermission
);

module.exports = router;
