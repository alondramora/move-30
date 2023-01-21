const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');
const upload = require('../middleware/multer');

router.get('/', homeController.getIndex);
router.get('/about', homeController.getAbout);
router.post('/new', upload.single('file'), homeController.createPost);
// upload is a multer method that will store our file until we're ready to write it to cloudinary
router.get('/profile', homeController.getProfile);

module.exports = router;