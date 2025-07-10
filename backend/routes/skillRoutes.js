const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skillController');

router.post('/analyze-skill', skillController.analyzeSkill);

module.exports = router;
