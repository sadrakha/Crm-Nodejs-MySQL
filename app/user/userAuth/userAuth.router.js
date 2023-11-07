const router = require("express").Router();
const { check } = require("express-validator");

const userController = require("./userAuth.controller");
const verify=require('../../../middleware/loginVerify')
const validation=require('../../../middleware/validations');
const {signUp,login}=new validation()

router.post("/signUp",signUp, userController.signUp);

router.post("/logIn",login, userController.logIn);

router.get("/usersList",verify.verifyToken, userController.usersList);

router.post("/deleteUser/:id",verify.verifyToken, userController.deleteUser);

router.get("/profile/:id",verify.verifyToken, userController.user);

router.post("/editUser/:id",verify.verifyToken, userController.editUser);

module.exports = router;
