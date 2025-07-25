const express = require('express');
const router = express.Router();
const healthController = require('../controllers/healthController');

router.get('/hello', healthController.hello);

module.exports = router;
