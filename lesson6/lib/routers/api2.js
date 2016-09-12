var router = require('express').Router(),
    newsModel = require('../models/news.js');

  router.route('/')
    .get(function(req, res, next){
        res.status(200).send('api2 is ready.');
        res.status(200).send(news);
    });

  
  router.route('/news/:id')
    .get(function(req,res,next){
      var id = req.params.id;
      if (newsModel[id]){
        res.status(200).send(newsModel[id]);
      } else {
        res.status(404).send('news not found.')
      }
    });

  router.route('/news/:id')
    .delete(function(req,res,next){
      var id = req.params.id;
      if (newsModel[id]){
        res.status(200).delete(newsModel[id])
      } else {
        res.status(403).send('fail to delete.')
      }
    })；

module.exports = router;
