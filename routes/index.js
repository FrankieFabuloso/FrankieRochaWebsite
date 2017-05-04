var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('hello:')
  res.render('projects/index', { title: 'Frankie' });
});

router.get('/blog', function(req, res, next) {
  console.log('hello:')
  res.render('projects/index', { title: 'blog' });
});

router.get('/about', function(req, res, next) {
  console.log('hello:')
  res.render('projects/index', { title: 'about' });
});

router.get('/contact', function(req, res, next) {
  console.log('hello:')
  res.render('contact/index', { title: 'contact' });
});

module.exports = router;