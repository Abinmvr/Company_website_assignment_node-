const {jobs} = require('../../models/userModels/jobModel');
console.log('jobcontroller');
const jobController = async(req,res)=>{
    try{
        const result = await jobs();
        res.status(200).json({message:result});
    }
    catch(e){
        res.status(500).json({success:false,message:'Internal server error'});
    }
}

module.exports= {jobController};