const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  date: String,
  zodiacSign: String,
  content: String
});

module.exports = mongoose.model('HoroscopeHistory', historySchema);
