const Crop = require('../models/Crop');
const { calculateFertilizer } = require('../utils/calculations');

// Get fertilizer recommendation
exports.getFertilizerRecommendation = async (req, res) => {
  try {
    const { crop, area, unit, soilType, location } = req.body;
    
    // Get crop data
    const cropData = await Crop.findOne({ name: crop });
    if (!cropData) {
      return res.status(404).json({ message: 'Crop not found' });
    }
    
    // Calculate fertilizer requirements
    const recommendation = calculateFertilizer(cropData, area, unit, soilType);
    
    res.json({
      success: true,
      crop: cropData.nameHindi,
      recommendation,
      location
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all crops
exports.getAllCrops = async (req, res) => {
  try {
    const crops = await Crop.find({});
    res.json({
      success: true,
      crops: crops.map(crop => ({
        value: crop.name,
        label: crop.nameHindi
      }))
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};