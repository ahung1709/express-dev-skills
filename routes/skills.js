var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills')

// REST: Representational State Transfer

/* GET skills listing. */
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/edit/:id', skillsCtrl.edit); 

router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);

router.put('/edit/:id', skillsCtrl.update);

module.exports = router;
