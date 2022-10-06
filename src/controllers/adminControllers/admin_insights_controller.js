const { get_insights_model,
        add_insights_model,
        delete_insights_model,
        get_insights_model_ById,
        update_insights_model} =require('../../models/adminModels/admin_insights_model');

const get_insight_Controller = async(req,res)=>{
    try{
        const result = await get_insights_model();
        res.status(200).json({message:result});
    }
    catch(e){
        res.status(500).json({success:false,message:'Internal server error'});
    }
}

const get_insights_controller_ById = async(req,res)=>{
    const id = req.query.id;
    try{
        if((!id)){
            res.status(200).send({success:false,message:"id is empty"});
        }
        else{
            const result = await get_insights_model_ById(id);
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

const add_insights_Controller = async(req,res)=>{
    const {title,details,image} = req.body;
    const addData ={'title':title,'details':details,'image':image};
    console.log(addData);
    try{
        if((!title)||(!details)||(!image)){
            res.status(200).send({success:false,message:"fields cannot be empty"});
        }
        else{
            const result=await add_insights_model(addData);
            if(result){
            res.status(200).json({success:true,message:'Added successfully'});
            }
        }
    }
    catch(error){
            res.status(500).json({success:false,message:'Internal server error'})
    
    }
}
const delete_insights_Controller = async(req,res)=>{
    const id = req.query.id;
    try{
        if((!id)){
            res.status(200).send({success:false,message:"id is empty"});
        }
        else{
            const result=await  delete_insights_model(id);
            if(result){
            res.status(200).json({success:true,message:'Deleted successfully'});
            }
        }
    }
    catch(error){
            res.status(500).json({success:false,message:'Internal server error'})
    
    }
}

const update_insights_Controller = async(req,res)=>{
    const {id,title,details,image} = req.body;
    const editData ={'id':id,'title':title,'details':details,'image':image};
    console.log(editData)
    
    try{
        if((!title)||(!details)||(!image)||(!id)){
            res.status(200).send({success:false,message:"fields cannot be empty"});
        }
        else{
            const result=await update_insights_model(editData);
            if(result){
            res.status(200).json({success:true,message:'Updated successfully'});
            }
        }
    }
    catch(error){
            res.status(500).json({success:false,message:'Internal server error'})
    
    }
}
module.exports= {get_insight_Controller,delete_insights_Controller,add_insights_Controller,get_insights_controller_ById,update_insights_Controller};