var app = require('express')(),
    bodyParser = require('body-parser'),
    tool = require('./lib/tool.js');

app.use(bodyParser.urlencoded({
  extended:false
}));

// 交给具体的包，比如url出现/api就交给routers里面的api包处理
app.use('/api',require('./lib/routers/api'));
app.use('/*',function(req, res, next){
  res.status(404).send('Not Found.');
});

app.listen(3000,function(){
  tool.printLine();
  tool.printDate();
  tool.printLine();
  console.log('lesson6 homework.');
  tool.printLine();
});
