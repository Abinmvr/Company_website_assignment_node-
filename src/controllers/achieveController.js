const {achievements} =require('../models/achievementmodel');
console.log('insight controller');
const achievementsController = async(req,res)=>{
    try{
        const result = await achievements();
        if(result.data){
            console.log(result);
            res.status(200).json({message:result.data});
        }
        else{
            console.log(result.error);
            throw(result.error)
        }
        
    }
    catch(e){
        res.status(500).json({success:false,message:'Internal server error'});
    }
}
module.exports= {achievementsController};