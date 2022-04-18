const express = require('express');
const router = express.Router();
const composeController = require('../controllers/composeController');

router.get('/', composeController.showCompose);
router.post('/', composeController.createPost);

module.exports = router;