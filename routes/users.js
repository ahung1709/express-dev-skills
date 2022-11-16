var express = require('express');
var router = express.Router();
// GET/users/profile/new

/* GET users listing. */
router.get('/profile/new', function(req, res, next) {
// router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
