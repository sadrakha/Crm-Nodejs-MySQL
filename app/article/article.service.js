const {validationResult}=require('express-validator')

const SequelizeService=require('../sequelize/sequelize.service')
const Article=require('../../models/article.model')
const {thumbGenerator}=require('../../helper/imageConvertor')
const { deleteArticle } = require('./article.controller')

class ArticleService{
    constructor(){
        this.Article=new SequelizeService(Article)
    }

    async createArticle(req){
        const title=req.body.title
        const description=req.body.description
        // thumbGenerator(req.body.img)
        try {
            const article=await this.Article.create({title,description})
            return article
        } catch (error) {
            return error
        }
    }

    async editArticle(req){
        const title=req.body.title
        const description=req.body.description

        try {
            const editedArticle=await this.Article.findOneAndUpdate({title,description},req.params.id)
            return editedArticle
        } catch (error) {
            return error
        }
    }

    async deleteArticle(id){
        try {
            const deleteArticle=await this.Article.findOneAndDelete(id)
            return deleteArticle
        } catch (error) {
            return error
        }
    }
}

module.exports=ArticleService