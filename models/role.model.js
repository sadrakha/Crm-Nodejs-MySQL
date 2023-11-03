const Sequeliz = require("sequelize");

const sequelize = require("../utils/sequelize");
const permission=require('./permission.model')
const rolePermission=require('./rolePermission.model')

const Role = sequelize.define(
  "role",
  {
    title: {
      type: Sequeliz.STRING,
    },
  },
  {
    timestamps: false,
  }
);

Role.belongsToMany(permission,{through:rolePermission})
permission.belongsToMany(Role,{through:rolePermission})
rolePermission.belongsTo(Role);
rolePermission.belongsTo(permission);

module.exports=Role