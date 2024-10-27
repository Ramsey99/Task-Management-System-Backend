const {Router}=require("express");
const{
    createTask
}=require("../controllers/task.controller")
const router = Router()
router.route("/create").post(createTask);
module.exports=router;