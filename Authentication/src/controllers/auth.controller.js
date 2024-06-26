const User =require("../models/user.models")
const jwt = require('jsonwebtoken');
require('dotenv').config()
const generateToken=(user)=>{  
    return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
}
const register=async(req,res)=>{
    try{
        let user=await User.findOne({email:req.body.email})
       if(user){
           return res.status(400).send({message:"Email already exists"})
       }
       
      user=await User.create(req.body);
      const token = generateToken(user)  
      return res.status(200).send({user,token});
    }
    catch(err){
        res.status(400).send({message:err.message})
    }
}



const login=async(req,res)=>{
    try{
        const user=await User.findOne({email:req.body.email})
       

        if(!user){
            return res.status(400).send("wrong email or password")
        }
        //if email exists,check password
        const match=user.checkPassword(req.body.password)
       //if it does't match
       if(!match){
        return res.status(400).send("wrong email or password")
       }
     //if it matches
       const token = generateToken(user)  
      return res.status(200).send({user,token});
    }
    catch(err){
        res.status(400).send({message:err.message})
    }
}

module.exports={register,login}