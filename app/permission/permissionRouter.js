const router=require('express').Router()

const verify=require('../../middleware/loginVerify')
const permissionController=require('./permission.controller')

router.post('/permission/add',verify.verifyToken,permissionController.addPermission)

router.post('/permission/edit/:id',verify.verifyToken,permissionController.editPermission)

module.exports=router