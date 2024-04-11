const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { PORT = 3000 } = process.env;
const routes = require('./routes');
const errorHandler = require('./middlewares/errors');

const app = express();

mongoose.connect('mongodb://localhost:27017/colorappdb', {
  useNewUrlParser: true,
});

app.use(bodyParser.json());
app.use(routes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log('app is good');
});
