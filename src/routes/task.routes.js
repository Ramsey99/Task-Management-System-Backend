const {Router}=require("express");
const{
    createTask,
    getTask
}=require("../controllers/task.controller")
const {verifyJWT}=require('../middlewares/auth.middileware');
const router = Router();
router.use(verifyJWT);
router.route("/create/:category_id").post(createTask);
router.route("/getTask").get(getTask);
module.exports=router;