const express = require('express');
const {checkLogged} =require('../../Middleware/checkLogged');
const router = express.Router();
console.log('jobrouter');
const {jobController} = require('../../controllers/userControllers/jobController');
router.get('/jobs',jobController);
module.exports = router;