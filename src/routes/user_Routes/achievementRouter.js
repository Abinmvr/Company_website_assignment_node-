const express = require('express');
const {checkLogged} =require('../../Middleware/checkLogged');
const router = express.Router();
const {achievementsController} =require('../../controllers/userControllers/achieveController');
router.get("/achievements",checkLogged, achievementsController);
module.exports = router;