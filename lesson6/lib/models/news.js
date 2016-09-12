//var news;
//var id=require('../routers/api2.js');
//和业务逻辑无关，没必要定义id，只定义数据



var news1 ={
  'title': 'first news',
  'content': 'Isa came at 5 PM today.',
  'auther' : 'real Isa.'};
//title content auther 外面的引号可以不加
var news2 = {
  'title': 'Isa is coming to class!',
  'content': 'Isa comes at 5 PM today.',
  'auther' : 'real Isa.'};

var news3 = {
  'title': 'Isa will come to class!',
  'content': 'Isa will come at 5 PM today.',
  'auther' : 'real Isa.'};

var news4 ={
  'title': 'not recent days',
  'content': 'No recent days.',
  'auther' : 'Not Isa.'
};

var news = [news1, news2, news3, news4];//先定义后引用！！！！同时，注意顺序，数组的0123
module.exports= news;
