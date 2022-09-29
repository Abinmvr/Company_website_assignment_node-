const express = require('express');
const {checkLogged} =require('../Middleware/checkLogged');
const router = express.Router();
const {achievementsController} =require('../controllers/achieveController');
// const authMiddleware=require('../Middleware/checkLogged');
console.log('achieve router reached');
router.get("/achievements",checkLogged, achievementsController);
module.exports = router;