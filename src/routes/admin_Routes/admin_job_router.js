const express = require('express');
const router = express.Router();
const { admin_getjob_Controller,
        get_job_controller_ById,
        update_job_Controller,
        get_positions_controller,
        add_job_Controller,
        delete_job_Controller} = require('../../controllers/adminControllers/admin_job_controller');
router.get('/getjobs',admin_getjob_Controller);
router.get('/getjobssbyid',get_job_controller_ById);
router.post('/editjobs',update_job_Controller);
router.post('/addjobs',add_job_Controller);
router.get('/getposition',get_positions_controller);
router.delete('/deletejobs',delete_job_Controller);
module.exports = router;