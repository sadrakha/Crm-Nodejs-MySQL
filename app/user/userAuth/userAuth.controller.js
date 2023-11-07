const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const User = require("../../../models/userModel");
const { webpConvertor } = require("../../../helper/imageConvertor");
const AuthService = require("./userAuth.service");
const AuthServiceInstance = new AuthService();

exports.signUp = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty) {
    return res.status(405).send(validationResult.message);
  }
  try {
    console.log(req.body);
    const signUpRes = await AuthServiceInstance.signUp(req);
    return res.send(signUpRes);
  } catch (error) {
    next(error);
  }
  const webpresult=await webpConvertor(req.file.path,'public/uploads/images','kk',50,50)
};

exports.logIn = async (req, res, next) => {
  try {
    const logIn = await AuthServiceInstance.logIn(req);
    res.status(201).send(logIn);
  } catch (error) {
    next(error);
  }
};

exports.usersList = async (req, res, next) => {
  try {
    const users = await AuthServiceInstance.usersList();
    res.send(users);
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    if (!await User.findOne({where:{id:req.params.id}})) {
      throw Error
  }
    const deletedUser = await AuthServiceInstance.deleteUser(req.params.id);
    res.send("done");
  } catch (error) {
    next(error);
  }
};

exports.user = async (req, res, next) => {
  try {
    const user = await AuthServiceInstance.user(req.params.id);
    res.send(user);
  } catch (error) {
    next(error);
  }
};

exports.editUser = async (req, res, next) => {
  try {
    if (!await User.findOne({where:{id:req.params.id}})) {
      throw Error
  }
    const user = await AuthServiceInstance.edit(req);
    res.send(user);
  } catch (error) {
    next(error);
  }
};
