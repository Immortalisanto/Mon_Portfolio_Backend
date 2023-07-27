const express = require('express');
const router = express.Router();
const formControllers = require('../controllers/form');

router.post('/sendEmail', formControllers.sendEmail);

module.exports = router;
