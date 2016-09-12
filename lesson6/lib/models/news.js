var news;
var id=require('../routers/api2.js');

var news = [news1, news2, news3, news4];

var news1 ={
  'title': 'first news',
  'content': 'Isa came at 5 PM today.',
  'auther' : 'real Isa.'}
var news2 = {
  'title': 'Isa is coming to class!',
  'content': 'Isa comes at 5 PM today.',
  'auther' : 'real Isa.'}

var news3 = {
  'title': 'Isa will come to class!',
  'content': 'Isa will come at 5 PM today.',
  'auther' : 'real Isa.'}

var news4 ={
  'title': 'not recent days',
  'content': 'No recent days.',
  'auther' : 'Not Isa.'
}

module.exports.news = news;
