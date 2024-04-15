const router = require('express').Router();
const {
  getUserPalettes,
  createPalette,
  updatePalette,
  deletePalette,
} = require('../controllers/palettes');
const { createPaletteValidation, updatePaletteValidation } = require('../utils/validation');

router.get('/', getUserPalettes);
router.post('/', createPaletteValidation, createPalette);
router.patch('/:paletteId', updatePaletteValidation, updatePalette);
router.delete('/:paletteId', deletePalette);

module.exports = router;
