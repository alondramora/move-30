const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');
const upload = require('../middleware/mutler');

router.get('/', homeController.getIndex);
router.get('/about', homeController.getAbout);
router.post('/new', upload.single('file'), homeController.createPost);

module.exports = router;