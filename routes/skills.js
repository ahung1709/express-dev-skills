var express = require('express');
var router = express.Router();
const skillsDB = require('../models/skill')

/* GET users listing. */
router.get('/', function(req, res, next) {
    // console.log("GET user listing before!!!")
  res.render('skills/index', {skills: skillsDB.getAll()});
//   console.log("GET user listing after!!!")
});

module.exports = router;
