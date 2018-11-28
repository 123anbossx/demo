var regmodel=require('../models/user');
exports.regist=function (req,res,next) {
    var postData={
        username:req.body.username,
        password:req.body.password
    };
   regmodel.create(postData,function (err,data) {
       if(err)throw err;
        res.send('注册成功')
   })
};
exports.dologin=function (req,res,next) {
    var postData={
        username:req.body.username,
        password:req.body.password,
    };
    regmodel.find(postData,function (err,data) {
      if(err)throw err;

      if(data[0].username==postData.username && data[0].password==postData.password){
          res.send('登陆成功')
      }
    })
};
exports.upload=function (req,res,next) {
    res.render('uploda')
};
