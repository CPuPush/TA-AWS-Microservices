require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const userRoute = require('./routes/userService');
const refreshTokenRoute = require('./routes/refreshTokens');
const medicalRoute = require('./routes/medicalService')
const mediaRoute = require('./routes/mediaService');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/user', userRoute);
app.use('/refresh-token', refreshTokenRoute);
app.use('/medical-record', medicalRoute);
app.use('/media', mediaRoute);

module.exports = app;
