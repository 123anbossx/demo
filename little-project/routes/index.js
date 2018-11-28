var express = require('express');
var router = express.Router();
var url=require('url');
var controller=require('../controller/index');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');

});
router.get('/login', function(req, res, next) {
    res.render('login');
});
router.post('/regist',controller.regist);
router.post('/dologin',controller.dologin);
router.get('/upload',controller.upload);

module.exports = router;
