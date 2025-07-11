const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploads');
const { uploadMultipleImages } = require('../controllers/uploadController');

router.post('/', upload.array('images', 5), uploadMultipleImages);

module.exports = router;
