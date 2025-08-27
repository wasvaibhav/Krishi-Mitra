// Unit conversion factors
const UNIT_CONVERSIONS = {
  acre: 0.40468564224,      // 1 acre = 0.40468564224 hectares
  hectare: 1,               // 1 hectare = 1 hectare
  bigha_punjab: 0.25,       // 1 bigha (Punjab) = 0.25 hectares
  bigha_up: 0.625,          // 1 bigha (UP) = 0.625 hectares
  nali: 0.0025,             // 1 nali = 0.0025 hectares
  custom: (value, factor) => value * factor * 0.40468564224
};

// Calculate fertilizer requirements
exports.calculateFertilizer = (cropData, area, unit, soilType) => {
  // Convert area to hectares
  let areaInHectares;
  if (unit === 'custom') {
    // For custom units, we need a conversion factor
    const factor = parseFloat(process.env.CUSTOM_UNIT_FACTOR) || 1;
    areaInHectares = UNIT_CONVERSIONS.custom(area, factor);
  } else {
    areaInHectares = area * (UNIT_CONVERSIONS[unit] || 1);
  }
  
  // Get soil factors
  const soilFactors = cropData.soilFactors[soilType] || {
    urea: 1,
    dap: 1,
    mop: 1
  };
  
  // Calculate fertilizer amounts
  const urea = cropData.fertilizerRates.urea * areaInHectares * soilFactors.urea;
  const dap = cropData.fertilizerRates.dap * areaInHectares * soilFactors.dap;
  const mop = cropData.fertilizerRates.mop * areaInHectares * soilFactors.mop;
  
  return {
    urea: Math.round(urea),
    dap: Math.round(dap),
    mop: Math.round(mop),
    areaInHectares: areaInHectares.toFixed(3)
  };
};