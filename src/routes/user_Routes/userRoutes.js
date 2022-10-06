const express = require('express');
const router = express.Router();
const controller =require('../../controllers/userControllers/userController');
router.post("/signup",controller.signupController);
router.post('/login',controller.loginController);
module.exports = router;