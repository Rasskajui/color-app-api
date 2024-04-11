const router = require('express').Router();
const {
  getUser,
  createUser,
  updateProfile,
} = require('../controllers/users');

router.get('/:userId', getUser);
router.post('/', createUser);
router.patch('/me', updateProfile);

module.exports = router;
