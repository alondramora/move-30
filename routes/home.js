const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');

router.get('/', homeController.getIndex);
router.get('/about', homeController.getAbout);
router.post('/new', homeController.createEntry);

module.exports = router;