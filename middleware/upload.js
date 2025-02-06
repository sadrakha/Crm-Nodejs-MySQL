const multer=require('multer')

exports.uploadImage=(req,res,next)=>{
    try {
        const fileStorage=multer.diskStorage({
            destination:(req,file,cb)=>{
              cb(null,'public/uploads/images')
            },
            filename:(req,file,cb)=>{
              cb(null,file.originalname)
            }
          })
          const fileFilter=(req,file,cb)=>{
            if(file.mimetype === 'image/png' ||
            file.mimetype === 'image/jpg' ||
            file.mimetype === 'image/jpeg'){
              cb(null,true)
            }else{
              cb(null,false)
            }
          }
        multer({storage:fileStorage,fileFilter})
        next()
    } catch (error) {
        return error
    }
}