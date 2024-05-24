const express= require('express');
const UserController= require('../../controllers/user-controller')
const {validator}=require('../../middlewares/index')
const router=express.Router();
router.post('/signup',validator,UserController.create);
router.post('/signin',validator,UserController.signIn);
module.exports=router;