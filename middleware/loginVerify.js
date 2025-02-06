const jwt = require("jsonwebtoken");

const User = require("../models/userModel");
const permission = require("../models/permission.model");
const rolePermission = require("../models/rolePermission.model");
const sequelizeService = require("../app/sequelize/sequelize.service");

exports.verifyToken = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(400).send("invalid");
  }
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, process.env.JWT_KEY, async (err, user) => {
    if (err) {
      return res.status(400).send("invalid token");
    }
    const findUser = await User.findOne({ where: { id: user.id } });
    req.user = findUser;
    const allowedPermission = [];
    let assignedPermission = await rolePermission.findAll({
      attributes: ["permissionId"],
      include: [{ model: permission }],
      where: { roleId: findUser.roleId },
    });

    assignedPermission.forEach((role) => {
      allowedPermission.push(role.permission.title);
    });
    req.permissions = allowedPermission;
    next();
  });
};
exports.verifyAdmin=async (req, res, next) => {
    try {
      console.log(2);

        // if (!req.permissions.includes('manage')) {
        //     return res.status(405).send({error:'not allowed'});
        //   }
            next();
    } catch (error) {
        return error

    }
   }