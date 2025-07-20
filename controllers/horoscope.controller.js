const HoroscopeHistory = require('../models/HoroscopeHistory');
const data = require('../utils/horoscopeData');

exports.getToday = async (req, res) => {
  const { id, zodiacSign } = req.user;
  const today = new Date().toISOString().split('T')[0];
  const content = data[zodiacSign];

  await HoroscopeHistory.create({ userId: id, date: today, zodiacSign, content });
  res.json({ date: today, zodiacSign, content });
};

exports.getHistory = async (req, res) => {
  const { id } = req.user;
  const history = await HoroscopeHistory.find({ userId: id }).sort({ date: -1 }).limit(7);
  res.json(history);
};
