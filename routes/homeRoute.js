const express = require('express'); 
const router = express.Router();
const indexController = require('../controllers/homeController'); 

router.get('/', indexController.showHomepage); 
router.get('/posts/:id', indexController.showOnePost);

module.exports = router;