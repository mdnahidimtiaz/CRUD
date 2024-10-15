const mongoose = require('mongoose');

const learnSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phn_no: {
    type: String,
    required: true,
    
  },
  email: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
    
  }
});

const learn = mongoose.model('User', learnSchema);

module.exports = learn;
