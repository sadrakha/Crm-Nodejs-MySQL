
const service=require('./category.service')
const categoryService=new service()

exports.addCategory=async(req,res,next)=>{
    try {
        if (!req.permissions.includes('category')) {
            throw Error
        }
        const category=await categoryService(req)
        res.send(category)
    } catch (error) {
        next(error)
    }
}