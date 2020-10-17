var express = require('express');
var router = express.Router();

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send('Birds home page')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

router.get('/error', function (req, res) {
  throw new Error('a bird error');
})

module.exports = router;
