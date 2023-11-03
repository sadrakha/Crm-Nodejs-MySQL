const router = require("express").Router();
const { check } = require("express-validator");

const userController = require("./userAuth/userAuth.controller");
const verify=require('../../middleware/loginVerify')
// const validation=require('../../middleware/validations');
// const validator=new validation()

router.post("/signUp",[check("email")
.trim()
.isEmail()
.normalizeEmail()
.custom(async (value, { req }) => {
  const user = await sequelizeService(User).findOne({
    where: { email: value },
  });
  if (user) {
    return Promise.reject();
  }
}),
check("password").trim().isLength({ min: 8 }),
check("comfirmPassword").trim(),
check("userName")], userController.signUp);

router.post("/logIn",[check("password").trim().isLength({ min: 8 }),], userController.logIn);

router.get("/usersList",verify.verifyToken, userController.usersList);

router.post("/deleteUser/:id",verify.verifyToken, userController.deleteUser);

router.get("/profile/:id",verify.verifyToken, userController.user);

router.post("/editUser/:id",verify.verifyToken, userController.editUser);

module.exports = router;
