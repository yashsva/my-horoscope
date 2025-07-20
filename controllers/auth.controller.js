const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { getZodiacSign } = require('../utils/zodiac');
require('dotenv').config();

exports.signup = async (req, res) => {
  const { name, email, password, birthdate } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 8);
    const zodiacSign = getZodiacSign(birthdate);
    const user = await User.create({ name, email, password: hashed, birthdate, zodiacSign });
    res.json({ message: "User created", zodiacSign });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user._id, zodiacSign: user.zodiacSign }, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.json({ token });
};
