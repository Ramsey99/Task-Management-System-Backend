const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
//this is for json data
app.use(express.json({limit:"16kb"}))

//this is for url data
app.use(express.urlencoded({
    extended:true,
    limit:"16kb"
}))

app.use(express.static("public"))


const userRouter=require('./routes/user.routes');
app.use("/api/users",userRouter);
app.use("/api/task",)







module.exports={app};