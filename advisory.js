const express = require('express');
const router = express.Router();
const advisoryController = require('../controllers/advisoryController');

router.post('/fertilizer', advisoryController.getFertilizerRecommendation);
router.get('/crops', advisoryController.getAllCrops);

module.exports = router;