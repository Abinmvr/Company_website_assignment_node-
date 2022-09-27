const express = require('express');
const checklogged =require('../Middleware/checkLogged');
const router = express.Router();
const controller =require('../controllers/userController');
router.post("/signup",controller.signupController);
router.post('/login',controller.loginController);
module.exports = router;