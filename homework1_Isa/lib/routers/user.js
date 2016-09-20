
var router = require('express').Router(),
    userModel = require('../Models/user.js');

//返回全部
router.route('/')
  .get(function(req,res,next){
    res.status(200).send(userModel);
    console.log('user get route test succeed.');
});

//返回用户年龄的平均值：
router.route('/ageAvg').get(function(req,res,next){
  var ageTotal = 0;//初始值要定义在for之外，不然每次开始都是零

  for (i=0; i< userModel.length; i=i+1){

    ageTotal = ageTotal + userModel[i].age;
    console.log(ageTotal);
  }//for语句结束

  var ageAvg = ageTotal/(userModel.length);
  res.status(200).send(ageAvg.toString());
});

//search公司名称
router.route('/search').get(function(req,res,next){
var searchCompany = [];
var key = req.query.company.toLowerCase();
//console.log(key);
//Search逻辑：用for语句一个一个检查是否有关键词，并将包含关键词的语句导入数组保存。
for (i=0; i < userModel.length; i=i+1){
  var company1 = userModel[i].company.toLowerCase();
  var index = company1.indexOf(key);
  if (index !== -1) {
    searchCompany = searchCompany.concat(userModel[i]);
  }//if语句结束
} //for语句结束
//最后输出search结果
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
//用ageinput保存用户输入的年龄数值，再存成Number
var ageinput = req.body.age;
var ageNumber = parseInt(ageinput);

//第一层if判断，是否有对应的ID
if (userModel[id]) {
  //第二层if判断，判断是否输入了数字
  if (ageNumber){
  userModel[id].age = ageNumber;
  res.status(200).send(userModel[id]);
  } else {
  res.status(403).send('需要修改age,并提交数字。');
  }//第二层判断结束
} else {
  res.status(404).send('PUT.没有这个ID');
}//第一层判断结束
});

/* 第二种方法
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
  res.status(200).send(count.toString());
});




module.exports = router;
