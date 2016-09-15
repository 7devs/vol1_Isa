//
var router = require('express').Router(),
    userModel = require('../Models/user.js');

//

router.route('/')
  .get(function(req,res,next){
    res.status(200).send(userModel);
    console.log('user get route test succeed.');
});

router.route('/:id').get(function(req,res,next){
  var id = req.params.id;
  if (userModel[id-1]) {
    res.status(200).send(userModel[id-1].firstName + ' ' + userModel[id-1].lastName);
  } else {
    res.status(404).send('Get.没有这个ID');
  }
});

router.route('/:id').put(function(req, res, next) {
var id = req.params.id;
var ageinput = req.query.age;
var ageNumber = parseInt(ageinput);

if (userModel[id-1]){

  if (ageNumber){
  userModel[id-1].age = ageNumber;
  res.status(200).send(userModel[id-1]);
  } else {
  res.status(403).send('这不是数字。');
  }

}else {
  res.status(404).send('Post.没有这个ID');
}

});

module.exports = router;
