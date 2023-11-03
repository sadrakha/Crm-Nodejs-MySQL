const [check] = require("express-validator");

const User = require("../models/userModel");
const sequelizeService = require("../app/sequelize/sequelize.service");
class validation {
  constructor() {
    this.check=check;
  }

  async signUp(req, res, next) {
    try {
      check("email")
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
        });
      check("password").trim().isLength({ min: 8 });
      check("comfirmPassword").trim();
      check("userName")
        .trim()
        .not()
        .isEmpty()
        .custom(async (value, req) => {
          const username = await sequelizeService(User).findOne({
            where: { userName: value },
          });
          if (username) {
            return Promise.reject();
          }
        });
        next()
    } catch (error) {
      return error;
    }
  }
}
module.exports=validation