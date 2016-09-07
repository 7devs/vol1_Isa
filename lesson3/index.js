var express = require('express');
var utility = require('utility');
var superagent = require('superagent');
var cheerio = require('cheerio');

var app = express();
app.get = ('/',function(req,res,next){
    superagent.get('http://cnodejs.org/').end(function(err,sres){
        if(err){
            retern next(err);
            console.log('err');
            var $ = cheerio.load(sres.text);
            var items = [];
            $('#topic_list.topic_title').each(function(idx,element){
                var $element = $(element);
                items.push({
                    title: $element.attr('title'),
                    href: $element.attr('href')
                });
            });
            res.send(items);
        } else {
            console.log('no err');
        }
    });
});
