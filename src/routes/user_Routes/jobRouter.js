const express = require('express');
const {upload}= require('../../Middleware/uploadFiles');
const router = express.Router();
const {checkLogged} =require('../../Middleware/checkLogged');
const {jobController,apply_job_Controller,get_apply_controller_ById} = require('../../controllers/userControllers/jobController');
const checkError=(req,res,next)=>{
    const uploadStatus=upload.single('resumes');
    uploadStatus(req,res,(err)=>{
            if(err){
                if(err.code==='LIMIT_FILE_SIZE'){
                    console.log(err.code);
                    res.json({success:false,message:'* File size too large (Max 2mb)'})
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
router.get('/jobs',checkLogged,jobController);
router.post('/applyjob',checkError,apply_job_Controller);
router.get('/getapplicantbyid',get_apply_controller_ById);
module.exports = router;