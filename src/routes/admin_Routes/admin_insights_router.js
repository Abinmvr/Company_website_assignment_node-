const express = require('express');
const router = express.Router();
const { get_insight_Controller,
        delete_insights_Controller,
        add_insights_Controller,
        get_insights_controller_ById,
        update_insights_Controller} =require('../../controllers/adminControllers/admin_insights_controller');
const {uploadImages} =require('../../Middleware/uploadImages');
const checkError=(req,res,next)=>{
    const uploadStatus=uploadImages.single('image');
    uploadStatus(req,res,(err)=>{
        if(err){
            if(err.code==='LIMIT_FILE_SIZE'){
                // console.log(err.code);
                res.json({success:false,message:'* File size too large (Max 1mb)'})
            }
            else if(req.file==undefined){
                // console.log('file is empty');
                next();
            }
            else{
                console.log('other');
                res.status(500).json({success:false,message:'* Fileupload error'})
            }
        }
        else{
            next();
        }
    })
}
router.post("/addInsights",checkError,add_insights_Controller);
router.get("/insight",get_insight_Controller);
router.delete("/deleteinsights",delete_insights_Controller);
router.get("/getinsightsbyid", get_insights_controller_ById);
router.post("/editinsights",checkError,update_insights_Controller );

module.exports = router;