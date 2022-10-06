const database = require('../../models/userModels/userModel');
const jwt =require('jsonwebtoken');
createToken = (id)=>{
	return jwt.sign({id},'secret_token');	
}

const signupController =async(req,res)=>{
    const {username,email,password} = req.body;
    const signupdata ={'username':username,'email':email,'password':password};
    try{ 
        if((!username)||(!email)||(!password)){
            res.status(200).send({success:false,message:"Fields cannot be empty"});
        }
        else{
            const result=await database.signup(signupdata);
            if(result){
            res.status(200).json({success:true,message:'Signup successfull'});
            }
        }
    }
    catch(error){
        if(error.errno===1062){
            res.status(200).json({success:false,message:'Email already exists'});
        }
        else{
            res.status(500).json({success:false,message:'Internal server error'})
        }
    }
}

const loginController =async(req,res)=>{
    try{
        const {username,password} = req.body;
        const logdata = {"username":username,"password":password};
        if((!username)||(!password)){
            res.status(200).send({success:false,message:"Fields cannot be empty"});
        }
        else{
            const result = await database.login(logdata);
            if(result.length>0){
                const id = result[0].id;
                const token = createToken(id);
                res.status(200).send({success:true,message:'Login successfull',token:token});
            }
            else{
                res.status(200).send({success:false,message:"Wrong credential"});
            } 
       }
    }
    catch(err){
        res.status(500).json({success:false,message:'Internal server error'});
    }
}

module.exports = {signupController,loginController};

