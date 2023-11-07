
exports.pagination=async (ps,model,req)=>{
    const limit=ps
    const page=req.query.page||1
    const count=await model.findAndCountAll()
    const items=await model.findAll({limit,offset:(page-1)*limit})
    return {items,count:count.count}
}