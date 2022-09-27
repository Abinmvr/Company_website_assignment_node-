it const {achievements} =require('../models/achievementmodel');
console.log('insight controller');
const achievementsController = async(req,res)=>{
    try{
        const result = await achievements();
        console.log("result",result);
        res.status(200).json({message:result});
    }
    catch(e){
        res.status(500).json({success:false,message:'Internal server error'});
    }
}
module.exports= {achievementsController};