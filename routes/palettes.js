const router = require('express').Router();
const {
  getUserPalettes,
  createPalette,
  updatePalette,
  deletePalette,
} = require('../controllers/palettes');

router.get('/', getUserPalettes);
router.post('/', createPalette);
router.patch('/:paletteId', updatePalette);
router.delete('/:paletteId', deletePalette);

module.exports = router;
