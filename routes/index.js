const router = require('express').Router();
const userRouter = require('./users');
const { NotFoundError } = require('../utils/errors');

router.use('/users', userRouter);
router.use((req, res, next) => {
  next(new NotFoundError('Неправильный путь'));
});

module.exports = router;
