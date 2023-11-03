const SequelizeService = require("../sequelize/sequelize.service");
const permissionModel = require("../../models/permission.model");

class permission {
  constructor() {
    this.permission = new SequelizeService(permissionModel);
  }
  async add(req) {
    try {
      const title = req.body.title;
      const result = await this.permission.create({ title });
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
  async edit(req) {
    try {
      const title = req.body.title;
      const id = req.params.id;
      const result = await this.permission.findOneAndUpdate({ title }, id);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = permission;
