const {Router}=require("express");
const {getCategories}=require('../controllers/category.controller');
const {verifyJWT}=require('../middlewares/auth.middileware');
const router = Router();
router.use(verifyJWT);
router.route("/getCategories").get(getCategories);
module.exports=router;