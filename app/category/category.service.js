const sequelize=require('../sequelize/sequelize.service')
const categoryModel=require('../../models/category.model')
const subCategoryModel=require('../../models/subCategory.model')

class category{
    constructor(){
        this.category=new sequelize(categoryModel)
        this.subCategory=new sequelize(subCategoryModel)
    }

    async addCategory(req){
        const title=req.body.title
    }
}