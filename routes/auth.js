const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const upload = require('../middleware/multer');

router.get('/login', authController.loginUser);

module.exports = router;