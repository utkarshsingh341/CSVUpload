// Importing Packages
const express = require('express');
const router = express.Router();
const multer = require('multer');

// Importing Controllers
const homeController = require('../controllers/home_controller');
const fileController = require('../controllers/file_controller');
const upload = multer({ dest: 'uploads/files'})

// Making Routes
router.get('/', homeController.home);
router.post('/upload', upload.single('file') ,fileController.upload);
router.get('/view/:id', fileController.view);
router.get('/delete/:id', fileController.delete);

module.exports = router;
