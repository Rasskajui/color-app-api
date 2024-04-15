require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');

const { PORT = 3000, NODE_ENV, DB_URL } = process.env;
const routes = require('./routes');
const errorHandler = require('./middlewares/errors');
const { DB_URL_DEV, limiter } = require('./utils/constants');

const app = express();

mongoose.connect(NODE_ENV === 'production' ? DB_URL : DB_URL_DEV, {
  useNewUrlParser: true,
});

app.use(limiter);
app.use(helmet());
app.use(bodyParser.json());
app.use(routes);
app.use(errors());
app.use(errorHandler);

app.listen(PORT);
