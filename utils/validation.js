const { celebrate, Joi } = require('celebrate');

const loginValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const createUserValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    username: Joi.string().required().min(2).max(30),
  }),
});

const updateUserInfoValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    username: Joi.string().min(2).max(30).required(),
  }),
});

const createPaletteValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    colors: Joi.array().items(Joi.string()).required(),
  }),
});

const updatePaletteValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    colors: Joi.array().items(Joi.string()).required(),
  }),
});

module.exports = {
  createUserValidation,
  loginValidation,
  updateUserInfoValidation,
  createPaletteValidation,
  updatePaletteValidation,
};
