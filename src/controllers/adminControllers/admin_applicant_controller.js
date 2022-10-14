const { get_applicant_model,
        delete_applicant_model } = require('../../models/adminModels/admin_applicant_model');

const admin_applicant_Controller = async(req,res)=>{
try{
    const result = await get_applicant_model();
    res.status(200).json({message:result});
}
catch(e){
    res.status(500).json({success:false,message:'Internal server error'});
}
}

const delete_applicant_Controller = async(req,res)=>{
    try{
        const id = req.query.id;

        if((!id)){
            res.status(200).send({success:false,message:"id is empty"});
        }
        else{
            const result=await delete_applicant_model(id);
            if(result){
            res.status(200).json({success:true,message:'Deleted successfully'});
            }
        }
    }
    catch(error){
            res.status(500).json({success:false,message:'Internal server error'})
    
    }
    }
module.exports={admin_applicant_Controller,delete_applicant_Controller}