
var router = require('express').Router(),
    userModel = require('../Models/user.js');

router.route('/')
  .get(function(req,res,next){
    res.status(200).send(userModel);
    console.log('user get route test succeed.');
});

//返回用户年龄的平均值：
router.route('/ageAvg').get(function(req,res,next){
  for (i=0; i< userModel.length; i=i+1){
    var ageTotal = 0;
    ageTotal = ageTotal + userModel[i].age;
    var ageAvg = ageTotal/(userModel.length);
    res.status(200).send('平均年龄是' + ageAvg + '岁。');
  }
});

//search公司名称
router.route('/search').get(function(req,res,next){
var searchCompany = [];
var key = req.query.company.toLowerCase();
//console.log(key);
for (i=0; i < userModel.length; i=i+1){
  var company1 = userModel[i].company.toLowerCase();
  var index = company1.indexOf(key);
  if (index !== -1) {
    searchCompany = searchCompany.concat(userModel[i]);
  }
  }

  if (searchCompany.length === 0){
  res.status(404).send('没有相关记录');
  } else {
  res.status(200).send(searchCompany);
  }

});


//获得姓名的语句：
router.route('/:id').get(function(req,res,next){
  var id = req.params.id;
  if (userModel[id-1]) {
    res.status(200).send(userModel[id-1].firstName + ' ' + userModel[id-1].lastName);
  } else {
    res.status(404).send('没有这个ID');
  }
});

//修改年龄的语句：
router.route('/:id').put(function(req, res, next) {
var id = req.params.id-1;
var ageinput = req.query.age;
var ageNumber = parseInt(ageinput);
//第一种提交if从句的方法，试验已成功
if (userModel[id]) {
  if (ageNumber){
  userModel[id].age = ageNumber;
  res.status(200).send(userModel[id]);
  } else {
  res.status(403).send('需要修改age,并提交数字。');
  }
} else {
  res.status(404).send('PUT.没有这个ID');
}});

/*
if (userModel[id] && ageNumber) {
  userModel[id].age = ageNumber;
  res.status(200).send(userModel[id]);
} else if (userModel[id] || ageNumber) {
  res.status(403).send('请检查ID是否存在，及年龄是否是数字');
} else {
  res.status(403).send('这个判断方式没有上面那个好。');
}});*/

//统计性别的语句：
router.route('/count/:sex').get(function(req,res,next){
  var sexx = req.params.sex;
/*以下思路测试失败，因为[]内只能识别Array内的序号
  var countGender = userModel[sex].length;
  res.status(200).send(countsex);*/
  if (sexx !== 'male' && sexx !== 'female'){
    res.status(404).send('请输入male或者female。');
  } else {
      var count = 0;
      for (i = 0;i < userModel.length; i = i + 1){
          if (userModel[i].sex === sexx){
              count = count + 1 }}}
  res.status(200).send(sexx + '一共有' + count + '人。');
});




module.exports = router;
