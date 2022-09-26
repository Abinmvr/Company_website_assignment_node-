const database = require('../models/userModel');
const signupController =async(req,res)=>{
        const username=req.body.username;
        const email=req.body.email;
        const password=req.body.password;
        const signupdata ={'username':username,'email':email,'password':password};
        if(username.length==0){
            res.status(200).send({success:false,message:"Username is empty"});
        }
        else if(email.length==0){
            res.status(200).send({success:false,message:"Email is empty"});
        }
        else if(password.length==0){
            res.status(200).send({success:false,message:"Password is empty"});
        }
        else{
             const result=await database.signup(signupdata);
                if(result.values){
                        res.status(200).json({success:true,message:'Signup successfull'});
                    }
                else if (result.err){
                        console.log(result.err.errno);
                        if(result.err.errno===1062){
                                 res.status(200).json({success:false,message:'Email already exists'});
                        }
                        else{
                            console.log(result.err);
                            res.status(500).json({success:false,message:'Internal server error'})
                        }
                    }
        }
    }
    
const loginController =async(req,res)=>{
    try{
        const username=req.body.username;
        const password=req.body.password;
        const logdata = {"username":username,"password":password};
        console.log(username);
        if(username.length==0){
            res.status(200).send({success:false,message:"Username is empty"});
        }
        else if(password.length==0){
            res.status(200).send({success:false,message:"Password is empty"});
        }
       else{
        const result = await database.login(logdata);
            if((result.values).length>0){
                res.json({success:true,message:'Login successfull'});
            }
            else{
                res.json({success:false,message:"Wrong credential"});
            } 
       }
         
    }
    catch(err){
        res.status(500).json({success:false,message:'Internal server error'});
    }
}
module.exports = {signupController,loginController};

