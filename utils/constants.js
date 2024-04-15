const NODE_ENV_DEV = require('crypto').randomBytes(32).toString('hex');

const DB_URL_DEV = 'mongodb://localhost:27017/colorappdb';
const limiter = require('express-rate-limit')({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

module.exports = {
  NODE_ENV_DEV,
  DB_URL_DEV,
  limiter,
};
