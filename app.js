require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { PORT = 3000, NODE_ENV, DB_URL } = process.env;
const routes = require('./routes');
const errorHandler = require('./middlewares/errors');
const { DB_URL_DEV } = require('./utils/constants');

const app = express();

mongoose.connect(NODE_ENV === 'production' ? DB_URL : DB_URL_DEV, {
  useNewUrlParser: true,
});

app.use(bodyParser.json());
app.use(routes);
app.use(errorHandler);

app.listen(PORT);
