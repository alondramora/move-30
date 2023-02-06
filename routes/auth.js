const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const upload = require('../middleware/multer');
const { ensureAuth } = require('../middleware/auth');

router.get('/login', authController.getLogin);
router.get('/signup', authController.getSignup);
router.post('/signup', authController.postSignup);


module.exports = router;