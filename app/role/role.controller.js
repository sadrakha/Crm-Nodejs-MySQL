const roleSequelize = require("./role.service");
const roleService = new roleSequelize();

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
    const newRole = await roleService.editRole(req);
    res.send(newRole);
  } catch (error) {
    return error;
  }
};
