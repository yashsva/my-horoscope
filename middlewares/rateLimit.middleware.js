const rateMap = new Map();

module.exports = (req, res, next) => {
  const user = req.user.id;
  const now = Date.now();

  if (!rateMap.has(user)) rateMap.set(user, []);
  const timestamps = rateMap.get(user).filter(ts => now - ts < 60000);
  timestamps.push(now);
  rateMap.set(user, timestamps);

  if (timestamps.length > 5) {
    return res.status(429).json({ message: "Rate limit exceeded (5/min)" });
  }
  next();
};
