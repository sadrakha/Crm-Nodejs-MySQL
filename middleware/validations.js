const validator = require("validator");

const SequelizeService = require("../app/sequelize/sequelize.service");
const User = require("../models/userModel");
const { options } = require("../app/user/userRouter");
class validation {
  constructor() {
    this.User = new SequelizeService(User);
  }

  async signUp(req, res, next) {
    try {
      const userName = req.body.userName;
      const email = req.body.email;
      const password = req.body.password;
      const comfirmPass = req.body.comfirmPass;

      if (!validator.isEmail(email)) {
        res.status(500).send({ error: "invalid email" });
        return new Error();
      }
    
      if (await User.findOne({where:{email}})) {
        res.status(500).send({ error: "invalid email" });
        throw new Error();
      }

      if (await User.findOne({ where: { userName } })) {
        res.status(500).send({ error: "invalid username" });
        throw new Error();
      }
      if (
        !validator.isLength(password, { min: 8 }) ||
        !validator.isLength(comfirmPass, { min: 8 })
      ) {
        res.status(500).send({ error: "invalid password" });
        throw new Error();
      }
      next();
    } catch (error) {
      return error;
    }

   
  } async login(req,res,next){
    try {
        const userName = req.body.userName;
        const password = req.body.password;
  
       
  
        if (!await User.findOne({ where: { userName } })) {
          res.status(500).send({ error: "invalid username" });
          throw new Error();
        }
        if (
          !validator.isLength(password, { min: 8 })
        ) {
          res.status(500).send({ error: "invalid password" });
          throw new Error();
        }
        next();
      } catch (error) {
        return error;
      }
    }
}
module.exports = validation;
