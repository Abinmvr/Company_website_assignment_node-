const { get_jobs_model,
        get_jobs_model_ById,
        update_job_model,
        get_positions_model,
        add_job_model,
        delete_job_model} = require('../../models/adminModels/admin_job_model');

const admin_getjob_Controller = async(req,res)=>{
    try{
        const result = await get_jobs_model();
        res.status(200).json({message:result});
    }
    catch(e){
        res.status(500).json({success:false,message:'Internal server error'});
    }
}
const get_positions_controller = async(req,res)=>{
    try{
        const result = await get_positions_model();
        res.status(200).json({message:result});
    }
    catch(e){
        res.status(500).json({success:false,message:'Internal server error'});
    }
}

const get_job_controller_ById = async(req,res)=>{
const id = req.query.id;
try{
    if((!id)){
        res.status(200).send({success:false,message:"id is empty"});
    }
    else{
        const result = await get_jobs_model_ById(id);
        if(result.data){
            res.status(200).json({message:result.data});
        }
        else{
            throw(result.error)
        }
    }
}
catch(e){
    res.status(500).json({success:false,message:'Internal server error'});
}
}

const add_job_Controller = async(req,res)=>{
const {position_id,location,details,expire,experience}= req.body;
const addData ={position_id:position_id,
                location:location,
                details:details,
                expire:expire,
                experience:experience};
                console.log('job',addData);

try{
    if((!position_id)||(!location)||(!details)||(!expire)||(!experience)){
        res.status(200).send({success:false,message:"fields cannot be empty"});
    }
    else{
        const result=await add_job_model(addData);
        if(result){
        res.status(200).json({success:true,message:'Added successfully'});
        }
    }
}
catch(error){
        res.status(500).json({success:false,message:'Internal server error'})

}
}

const delete_job_Controller = async(req,res)=>{
const id = req.query.id;
try{
    if((!id)){
        res.status(200).send({success:false,message:"id is empty"});
    }
    else{
        const result=await delete_job_model(id);
        if(result){
        res.status(200).json({success:true,message:'Deleted successfully'});
        }
    }
}
catch(error){
        res.status(500).json({success:false,message:'Internal server error'})

}
}

const update_job_Controller = async(req,res)=>{
const {id,description,location,expire_date,experience_in_years} = req.body;
const editData ={'id':id,'location':location,'experience':experience_in_years,'details':description,'expire':expire_date};

try{
    if((!location)||(!description)||(!id)||(!experience_in_years)||(!expire_date)){
        res.status(200).send({success:false,message:"fields cannot be empty"});
    }
    else{
        const result=await update_job_model(editData);
        if(result){
        res.status(200).json({success:true,message:'Updated successfully'});
        }
    }
}
catch(error){
        res.status(500).json({success:false,message:'Internal server error'})

}
}

module.exports= {admin_getjob_Controller,get_job_controller_ById,update_job_Controller,get_positions_controller,delete_job_Controller,add_job_Controller};