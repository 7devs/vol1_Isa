var router = require('express').Router(),
    newsModel = require('../models/news.js');

  router.route('/')
    .get(function(req, res, next){
        //res.status(200).send('api2 is ready.');
        res.status(200).send(newsModel);
    });
//send只能进行一次，否则会报错
//所以第一句不用
  router.route('/:id')
    .get(function(req,res,next){
      var id = req.params.id;
      id=id-1;
      if (newsModel[id]){
        res.status(200).send(newsModel[id]);
      } else {
        res.status(404).send('news not found.');
      }
    });

  router.route('/:id')
    .delete(function(req,res,next){
      var id = req.params.id;
      id = id -1;
      if (newsModel[id]){
        newsModel.splice(id,1);
        res.status(200).send(newsModel);
      } else {
        res.status(404).send('ID not existing, fail to delete.');
      }
    })
module.exports = router;
