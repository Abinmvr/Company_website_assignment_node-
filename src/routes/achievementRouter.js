const express = require('express');
const checklogged =require('../Middleware/checkLogged');
const router = express.Router();
const {insightController} =require('../controllers/insightsController');
console.log('insight router rached');
router.get("/insights",insightController);
module.exports = router;