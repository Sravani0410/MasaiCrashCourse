const express=require("express");
const connect =require("./configs/db");

const userController=require("./controllers/user.controller")
const {register,login}=require("./controllers/auth.controller")

const app=express();
app.use(express.json());

app.use("/users",userController)
app.post("/register",register)
app.post("/login",login)

app.listen(2245,async ()=>{
    try{
        await connect();
        console.log("lisenting on port 2245")
    }
    catch(err){
        console.log(err.message);
    }
});
