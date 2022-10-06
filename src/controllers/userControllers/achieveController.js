const {achievements} =require('../../models/userModels/achievementmodel');
const achievementsController = async(req,res)=>{
    try{
        const result = await achievements();
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
module.exports= {achievementsController};