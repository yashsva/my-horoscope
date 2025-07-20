const express = require('express');
const connectDB = require('./config/db');
const app = express();
require('dotenv').config();

connectDB();
app.use(express.json());

app.use('/auth', require('./routes/auth.routes'));
app.use('/horoscope', require('./routes/horoscope.routes'));

app.listen(process.env.PORT, () => console.log(`Server on ${process.env.PORT}`));
