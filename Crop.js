const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  nameHindi: {
    type: String,
    required: true
  },
  fertilizerRates: {
    urea: Number,
    dap: Number,
    mop: Number
  },
  soilFactors: {
    loamy: { urea: Number, dap: Number, mop: Number },
    clay: { urea: Number, dap: Number, mop: Number },
    sandy: { urea: Number, dap: Number, mop: Number },
    red: { urea: Number, dap: Number, mop: Number },
    black: { urea: Number, dap: Number, mop: Number },
    alluvial: { urea: Number, dap: Number, mop: Number }
  }
});

module.exports = mongoose.model('Crop', cropSchema);