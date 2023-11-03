const roleModel = require("../../models/role.model");
const rolePermissionModel = require("../../models/rolePermission.model");
const sequelizeService = require("../sequelize/sequelize.service");

class roleService {
  constructor() {
    this.role = new sequelizeService(roleModel);
    this.rolePermission=new sequelizeService(rolePermissionModel)
  }

  async addRole(req) {
    const title = req.body.title;
    let permissionId = req.body.permissionId;
    try {
      const role = await this.role.create({ title, permissionId });

      let roles = [];
      let roleId = role.id;
      if (!Array.isArray(permissionId)) {
        permissionId = [req.body.permissionId];
      }

      let keys = Object.keys(permissionId);
      keys.forEach((key) => {
        roles.push({ roleId, permissionId: permissionId[key] });
      });
      const AssignPermissionResult = await rolePermissionModel.bulkCreate(
        roles
      );
      return AssignPermissionResult;
    } catch (error) {
      throw new Error(error);
    }
  }
  async editRole(req) {
   const title = req.body.title;
    let permissionId = req.body.permissionId;
    const roleId = req.params.id;
    let roles = []; 

    try {
      const updatedRole=await this.role.findOneAndUpdate({title},roleId)

    if (!Array.isArray(permissionId)) {
      permissionId = [req.body.permissionId];
    }

    let keys = Object.keys(permissionId);
    keys.forEach((key) => {
      roles.push({ roleId,permissionId: permissionId[key] });
    });
    console.log(roleId);
    const lastRolePermission=await this.rolePermission.delete({where:{roleId}})
    const updatedRolePermission=await this.rolePermission.bulkCreate(roles)
    console.log(updatedRolePermission)
    return updatedRolePermission
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = roleService;
