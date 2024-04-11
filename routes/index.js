const router = require('express').Router();
const userRouter = require('./users');
const paletteRouter = require('./palettes');
const { NotFoundError } = require('../utils/errors');

// Хардкод авторизация
router.use((req, res, next) => {
  req.user = {
    _id: '66167426c44915b7af232804',
  };
  next();
});
router.use('/users', userRouter);
router.use('/palettes', paletteRouter);
router.use((req, res, next) => {
  next(new NotFoundError('Неправильный путь'));
});

module.exports = router;
