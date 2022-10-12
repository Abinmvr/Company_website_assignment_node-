const {jobs,apply_job_model,get_apply_model_ById} = require('../../models/userModels/jobModel');

const jobController = async(req,res)=>{
    try{
        const result = await jobs();
        res.status(200).json({message:result});
    }
    catch(e){
        res.status(500).json({success:false,message:'Internal server error'});
    }
}

const apply_job_Controller = async(req,res)=>{
    try{
        const {id,name,email,experience}= req.body;
        console.log('req send',req.file.filename)
        const resume=req.file.filename
        const addData ={job_id:id,
                        name:name,
                        email:email,
                        resumes:resume,
                        experience:experience};
                        console.log('job',addData);
        if((!id)||(!name)||(!email)||(!resume)||(!experience)){
            res.status(200).send({success:false,message:"fields cannot be empty"});
        }
        else{
            const result=await apply_job_model(addData);
            if(result){
            res.status(200).json({success:true,message:'Added successfully'});
            }
        }
    }
    catch(error){
            res.status(500).json({success:false,message:'Internal server error'})
    
    }
    }

    
const get_apply_controller_ById = async(req,res)=>{
    const id = req.query.id;
    try{
        if((!id)){
            res.status(200).send({success:false,message:"id is empty"});
        }
        else{
            const result = await get_apply_model_ById(id);
            if(result.data){
                res.status(200).json({message:result.data});
            }
            else{
                throw(result.error)
            }
        }
    }
    catch(error){
        res.status(500).json({success:false,message:'Internal server error'})

}
}

module.exports= {jobController,apply_job_Controller,get_apply_controller_ById};