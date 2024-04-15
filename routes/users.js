const router = require('express').Router();
const {
  getUser,
  updateProfile,
} = require('../controllers/users');
const { updateUserInfoValidation } = require('../utils/validation');

router.get('/me', getUser);
router.patch('/me', updateUserInfoValidation, updateProfile);

module.exports = router;
