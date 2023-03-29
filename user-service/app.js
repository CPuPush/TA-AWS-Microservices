require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const pasienRouter = require('./routes/pasiens');
const dokterRouter = require('./routes/dokters');
const adminRouter = require('./routes/admin');
const refreshTokenRouter = require('./routes/refresh-tokens');
const cors = require('cors');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/pasien', pasienRouter);
app.use('/dokter', dokterRouter);
app.use('/admin', adminRouter);
app.use('/refresh-token', refreshTokenRouter);

module.exports = app;
