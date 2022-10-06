const {insights} =require('../../models/userModels/insightsModel');
const insightController = async(req,res)=>{
    try{
        const result = await insights();
        res.status(200).json({message:result});
    }
    catch(e){
        res.status(500).json({success:false,message:'Internal server error'});
    }
}
module.exports= {insightController};