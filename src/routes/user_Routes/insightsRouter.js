const express = require('express');
const {checkLogged} =require('../../Middleware/checkLogged');
const router = express.Router();
const {insightController} =require('../../controllers/userControllers/insightsController');
router.get("/insights",checkLogged,insightController);
module.exports = router;