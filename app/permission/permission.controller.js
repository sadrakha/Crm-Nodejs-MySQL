const permissionService = require("./permission.service");
const permissionServiceFunc = new permissionService();

exports.addPermission = async (req, res, next) => {
  try {
    if (!req.permissions.includes("role")) {
      throw Error('not allowed')
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
        throw Error('not allowed')
      }
    const result = await permissionServiceFunc.edit(req);
    res.send(result);
  } catch (error) {
    next(error);
  }
};
