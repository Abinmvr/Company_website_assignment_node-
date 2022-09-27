const {insights} =require('../models/insightsModel');
console.log('insight controller');
const insightController = async(req,res)=>{
    try{
        const result = await insights();
        console.log("result",result);
        res.status(200).json({message:result});
    }
    catch(e){
        res.status(500).json({success:false,message:'Internal server error'});
    }
}
module.exports= {insightController};