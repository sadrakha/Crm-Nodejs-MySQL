const Sequelize=require('sequelize')
const sequelize=new Sequelize(
    process.env.SQL_DB,
    process.env.SQL_USER,
    process.env.SQL_PASS,{
        dialect:'mysql',
        port:process.env.SQL_PORT
    }
)

module.exports=sequelize