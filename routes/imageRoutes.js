const express = require('express');
const imageController = require('../controllers/imageController');
const imageUploader = require('../helpers/imageUploader');
const checkAuth = require('../middleware/checkAuth');

const router = express.Router();

router.post('/upload', checkAuth.checkAuth, imageUploader.upload.single('image'), imageController.upload);

module.exports = router;