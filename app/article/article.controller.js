
const ArticleService=require('./article.service')
const ArticleServiceUse=new ArticleService()

exports.createArticle=async(req,res,next)=>{
    try {
        const article=await ArticleServiceUse.createArticle(req)
        res.send(article)
    } catch (error) {
        next(error)
    }
    
}

exports.editArticle=async (req,res,next)=>{
    try {
        const editArticle=await ArticleServiceUse.editArticle(req)
        res.send(editArticle)
    } catch (error) {
        next(error)
    }
}

exports.deleteArticle=async(req,res,next)=>{
    try {
        const deleteArticle=await ArticleServiceUse.deleteArticle(req.params.id)
        res.send(deleteArticle)
    } catch (error) {
        next(error)
    }
}