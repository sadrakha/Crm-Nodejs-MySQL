const Sequeliz=require('sequelize')
const sequelize=require('../utils/sequelize')

const subCategory=sequelize.define('subCategory',{
    title:{
        type:Sequeliz.STRING
    }
},{
    timestamps:false
})

module.exports=subCategory