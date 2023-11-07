const roleSequelize = require("./role.service");
const roleService = new roleSequelize();
const roleModel = require("../../../models/role.model");

exports.addRole = async (req, res, next) => {
  try {
    if (!req.permissions.includes("role")) {
      throw Error("not allowed");
    }
    const role = await roleService.addRole(req);
    res.send(role);
  } catch (error) {
    return error;
  }
};

exports.editRole = async (req, res, next) => {
  try {
    if (!req.permissions.includes("role")) {
      throw Error("not allowed");
    }
    if (!(await roleModel.findOne({ where: { id: req.params.id } }))) {
      throw Error;
    }
    const newRole = await roleService.editRole(req);
    res.send(newRole);
  } catch (error) {
    return error;
  }
};
