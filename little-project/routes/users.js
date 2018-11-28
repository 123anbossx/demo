var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/index',function (req,res,next) {
    res.send('欢迎来到用户首页')
});
module.exports = router;
