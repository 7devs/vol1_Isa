var router = require('express').Router(),
    userModel = require('../models/user1.js');
    //引入了数据模型。

router.route('/')
  .get(function(req,res,next){
    res.status(200).send({
      msg:'api is ok.'
    });
  });

router.route('/')
  .post(function(req,res,next){
    res.status(200).send('testing POST.')
  });

router.route('/:key')
    .get(function(req,res,next){
      var key = req.params.key;
      if(userModel[key]){
        res.status(200).send(userModel[key]);
      } else {
        res.status(404).send('user not existing.');
      }
    });

    module.exports = router;
