const express = require('express');
const {checkLogged} =require('../Middleware/checkLogged');
const router = express.Router();
const {insightController} =require('../controllers/insightsController');
console.log('insight router reached');
router.get("/insights",checkLogged,insightController);
module.exports = router;