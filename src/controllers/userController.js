const database = require('../models/userModel');
const signupController =async(req,res)=>{
     try{
        const username=req.body.username;
        const email=req.body.email;
        const password=req.body.password;
        const signupdata ={'username':username,'email':email,'password':password}
        if((username!=='')&&(email!=='')&&(password!=='')){
                    const result=await database.signup(signupdata);
                    if(result.err){
                        res.json({success:false,message:result.err});
                    }
                    if(result.value){
                        res.json({success:true,message:result.value});
                    }
        }
    }
    catch(e){
        return res.status(500).json({ success: false })
    }
};
const loginController =async(req,res)=>{
    try{
        const username=req.body.username;
        const password=req.body.password;
        const logdata = {"username":username,"password":password}
        // console.log("controller login reached1");
        const result = await database.login(logdata);
        console.log(result.values);
        if((result.values).length>0){
            // console.log('result.values');
            res.json({success:true,message:result.values});
        }
        else{
            res.json({success:false,message:"wrong credential"});
        }  
}
catch(err){
    res.status(500).json({success:false});
}
}
module.exports = {signupController,loginController};

