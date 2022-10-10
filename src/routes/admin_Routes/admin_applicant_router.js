const express = require('express');
const router = express.Router();
const {admin_applicant_Controller,delete_applicant_Controller } = require('../../controllers/adminControllers/admin_applicant_controller');
router.get('/getapplicant',admin_applicant_Controller);
router.delete('/deleteapplicant',delete_applicant_Controller);
module.exports = router;