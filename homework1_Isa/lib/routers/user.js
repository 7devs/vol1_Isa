//
var router = require('express').Router(),
    userModel = require('../Models/user.js');

//

router.route('/')
  .get(function(req,res,next){
    res.status(200).send(userModel);
    console.log('user get route test succeed.');
});

//获得姓名的语句：
router.route('/:id').get(function(req,res,next){
  var id = req.params.id;
  if (userModel[id-1]) {
    res.status(200).send(userModel[id-1].firstName + ' ' + userModel[id-1].lastName);
  } else {
    res.status(404).send('Get.没有这个ID');
  }
});

//修改年龄的语句：
router.route('/:id').put(function(req, res, next) {
var id = req.params.id-1;
var ageinput = req.query.age;
var ageNumber = parseInt(ageinput);


/* 第一种提交if从句的方法，试验已成功
if (userModel[id]) {

  if (ageNumber){
  userModel[id].age = ageNumber;
  res.status(200).send(userModel[id]);
  } else {
  res.status(403).send('需要修改age,并提交数字。');
  }

} else {
  res.status(404).send('Post.没有这个ID');
}
});
*/

if (userModel[id] && ageNumber) {
  userModel[id].age = ageNumber;
  res.status(200).send(userModel[id]);
} else if (userModel[id] || ageNumber) {
  res.status(403).send('请检查ID是否存在，及年龄是否是数字');
} else {
  res.status(403).send('这个判断方式没有上面那个好。');
}

});



//统计性别的语句：
router.route('/count/:sex').get(function(req,res,next){
  var sexx = req.params.sex;
/*以下思路测试失败，因为[]内只能识别Array内的序号
  //var thisGender = userModel[sex];
  //var countGender = thisGender.length;
  //var countsex = userModel[sex].length;
  //res.status(200).send(countsex);
*/
//换一种思路，那我就先把user两个gender的性别统计出来不就行了么。就酱试试。
  if (sexx !== 'male' && sexx !== 'female'){
    res.status(404).send('xxx');
  } else {
      var count = 0;
      for (i = 0;i < (userModel.length-1); i = i + 1){
          if (userModel[i].sex === sexx){
              count = count + 1 }}}
  res.status(200).send( sexx + '一共有' + count + '人。');

});
module.exports = router;
