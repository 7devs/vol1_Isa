//此处包括三部分
//包引入，路由表，监听
//第一部分 包引入
var app = require('express')(),
    bodyParser = require('body-parser');
    //aaaa = require('./lib/ifyoucallmetools.js')

//中间件
app.use(bodyParser.urlencoded({
  extended: true
}));

//第二部分 路由
app.use('/user',require('./lib/routers/user.js'));
app.use('/album',require('./lib/routers/album.js'));
//app.use('/album',require('./lib/routers/album.js'));
app.use('/*', function(req,res,next){
  res.status(404).send('没有！你赶紧检查一下网页输对了没有。要么就是你程序（又）写错了，哈哈');
});

//第三部分 监听
app.listen('3000',function(){
  console.log('准备好了招呼吧！')
});
