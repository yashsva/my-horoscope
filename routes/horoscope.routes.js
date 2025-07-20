const router = require('express').Router();
const { getToday, getHistory } = require('../controllers/horoscope.controller');
const auth = require('../middlewares/auth.middleware');
const rateLimit = require('../middlewares/rateLimit.middleware');

router.get('/today', auth, rateLimit, getToday);
router.get('/history', auth, getHistory);

module.exports = router;
