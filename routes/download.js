const express = require('express');
const router = express.Router();
const downloadControllers = require('../controllers/download');

router.get('/cv', downloadControllers.getCv);

module.exports = router;
