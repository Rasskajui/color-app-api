const Palette = require('../models/palette');
const { BadRequestError, NotFoundError, ForbiddenError } = require('../utils/errors');

module.exports.getUserPalettes = (req, res, next) => {
  Palette.find({ owner: req.user._id })
    .then((palettes) => res.send(palettes))
    .catch((next));
};

module.exports.createPalette = (req, res, next) => {
  const {
    name, colors,
  } = req.body;

  Palette.create({
    name, colors, owner: req.user._id,
  })
    .then((palette) => res.send(palette))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы некорректные данные при сохранении палитры.'));
      } else {
        next(err);
      }
    });
};

module.exports.updatePalette = (req, res, next) => {
  const {
    name, colors,
  } = req.body;

  Palette.findByIdAndUpdate(
    req.params.paletteId,
    { name, colors },
    { new: true, runValidators: true },
  )
    .then((palette) => {
      if (palette) {
        res.send(palette);
      } else {
        next(new NotFoundError('Палитра не найдена.'));
      }
    })
    .catch(next);
};

module.exports.deletePalette = (req, res, next) => {
  const { paletteId } = req.params;
  Palette.findById(paletteId).populate('owner')
    .then((palette) => {
      if (!palette) {
        next(new NotFoundError('Палитра не найдена.'));
      } else if (req.user._id !== palette.owner.id) {
        next(new ForbiddenError('Нельзя удалить чужую палитру.'));
      } else {
        Palette.findByIdAndDelete(paletteId).then(() => res.send({ message: 'Палитра удалена.' }));
      }
    })
    .catch(next);
};
