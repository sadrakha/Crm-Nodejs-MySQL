const Sequelize=require('sequelize')

const sequelize=require('../utils/sequelize')

const category=sequelize.define('category',{
    title:{
        type:Sequelize.STRING,
    }
});

module.exports=category