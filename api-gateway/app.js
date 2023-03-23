require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const userRoute = require('./routes/userService');
const refreshTokenRoute = require('./routes/refreshTokens');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', userRoute);
app.use('/refresh-token', refreshTokenRoute);

module.exports = app;
