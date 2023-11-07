const permissionService = require("./permission.service");
const permissionServiceFunc = new permissionService();
const permissionModel = require("../../../models/permission.model");

exports.addPermission = async (req, res, next) => {
  try {
    if (!req.permissions.includes("role")) {
      throw Error("not allowed");
    }
    const result = await permissionServiceFunc.add(req);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

exports.editPermission = async (req, res, next) => {
  try {
    if (!req.permissions.includes("role")) {
      throw Error("not allowed");
    }
    if (!(await permissionModel.findOne({ where: { id: req.params.id } }))) {
      throw Error;
    }
    const result = await permissionServiceFunc.edit(req);
    res.send(result);
  } catch (error) {
    next(error);
  }
};
