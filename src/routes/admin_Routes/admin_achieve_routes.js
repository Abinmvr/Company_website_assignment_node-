const express = require('express');
const router = express.Router();
const { get_achievements_Controller,
        add_achieve_Controller,
        delete_achieve_Controller,
        get_achievements_controller_ById,
        update_achieve_Controller } = require('../../controllers/adminControllers/admin_achieve_controller');
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
router.get("/achieve", get_achievements_Controller);
router.get("/getachievebyid", get_achievements_controller_ById);
router.post("/addachieve",checkError,add_achieve_Controller);
router.post("/editachieve",checkError,update_achieve_Controller );
router.delete("/deleteachieve", delete_achieve_Controller);
module.exports = router;