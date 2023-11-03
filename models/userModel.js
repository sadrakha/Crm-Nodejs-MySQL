const Sequilize=require('sequelize')
const sequelize=require('../utils/sequelize')

const User=sequelize.define('user',{
    userName:{
        type:Sequilize.STRING,
        allowNull:false,
        unique:true
    },
    email:{
        type:Sequilize.STRING,
        allowNull:false
    },
    roleId:{
        type:Sequilize.INTEGER,
        default:1
    },
    password:{
        type:Sequilize.STRING,
        allowNull:false
    },
    profile:{
        type:Sequilize.STRING
    }
});

module.exports=User