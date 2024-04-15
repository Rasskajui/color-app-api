const router = require('express').Router();
const userRouter = require('./users');
const paletteRouter = require('./palettes');
const { NotFoundError } = require('../utils/errors');
const { login, createUser } = require('../controllers/users');
const auth = require('../middlewares/auth');
const { createUserValidation, loginValidation } = require('../utils/validation');

router.post('/signin', loginValidation, login);
router.post('/signup', createUserValidation, createUser);
router.use(auth);
router.use('/users', userRouter);
router.use('/palettes', paletteRouter);
router.use((req, res, next) => {
  next(new NotFoundError('Неправильный путь'));
});

module.exports = router;
