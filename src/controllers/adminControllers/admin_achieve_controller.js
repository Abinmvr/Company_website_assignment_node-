const { get_achievements_model,
        add_Achieve_model,
        delete_achieve_model,
        get_achievements_model_ById,
        update_achievements_model}=require('../../models/adminModels/admin_achieve_model');

const get_achievements_Controller = async(req,res)=>{
    try{
        const result = await get_achievements_model();
        if(result.data){
            res.status(200).json({message:result.data});
        }
        else{
            throw(result.error)
        }
    }
    catch(e){
        res.status(500).json({success:false,message:'Internal server error'});
    }
}

const get_achievements_controller_ById = async(req,res)=>{
    try{
        const id = req.query.id;
        if((!id)){
            res.status(200).send({success:false,message:"id is empty"});
        }
        else{
            const result = await get_achievements_model_ById(id);
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

const add_achieve_Controller = async(req,res)=>{
    try{
        const {title,details} = req.body;
        const image=req.file.filename;
        const addData ={'title':title,'details':details,'image':image};
        
        if((!title)||(!details)||(!image)){
            res.status(200).send({success:false,message:"fields cannot be empty"});
        }
        else{
            const result=await add_Achieve_model(addData);
            if(result){
            res.status(200).json({success:true,message:'Added successfully'});
            }
        }
    }
    catch(error){
            res.status(500).json({success:false,message:'Internal server error'})
    
    }
}

const delete_achieve_Controller = async(req,res)=>{
    try{
        const id = req.query.id;
        if((!id)){
            res.status(200).send({success:false,message:"id is empty"});
        }
        else{
            const result=await delete_achieve_model(id);
            if(result){
            res.status(200).json({success:true,message:'Deleted successfully'});
            }
        }
    }
    catch(error){
            res.status(500).json({success:false,message:'Internal server error'})
    
    }
}

const update_achieve_Controller = async(req,res)=>{
    try{
        const {id,title,details} = req.body;
        let image
        if(req.file==undefined){
            // console.log('file4',req.file);
            image ='';
        }else{
            // console.log('file4',req.file);
            image=req.file.filename;
        }
        const editData ={'id':id,'title':title,'details':details,'image':image};
        if((!title)||(!details)||(!id)){
            res.status(200).send({success:false,message:"fields cannot be empty"});
        }
        else{
            const result=await update_achievements_model(editData);
            if(result){
            res.status(200).json({success:true,message:'Updated successfully'});
            }
        }
    }
    catch(error){
            console.log('controller',error);
            res.status(500).json({success:false,message:'Internal server error'})
    
    }
}

module.exports= {get_achievements_Controller,add_achieve_Controller,delete_achieve_Controller,get_achievements_controller_ById,update_achieve_Controller};