const NODE_ENV_DEV = require('crypto').randomBytes(32).toString('hex');

const DB_URL_DEV = 'mongodb://localhost:27017/colorappdb';

module.exports = {
  NODE_ENV_DEV,
  DB_URL_DEV,
};
