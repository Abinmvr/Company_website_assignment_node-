const express = require('express');
const {upload}= require('../../Middleware/uploadFiles');
const router = express.Router();
const {checkLogged} =require('../../Middleware/checkLogged');
const {jobController,apply_job_Controller,get_apply_controller_ById} = require('../../controllers/userControllers/jobController');

router.get('/jobs',jobController);
router.post('/applyjob',upload.single('resumes'),apply_job_Controller);
router.get('/getapplicantbyid',get_apply_controller_ById);
module.exports = router;