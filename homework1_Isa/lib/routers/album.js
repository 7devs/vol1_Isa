var router = require('express').Router(),
    albumModel = require('../Models/album.js');

//返回所有专辑
router.route('/').get(function(req,res,next){
    res.status(200).send(albumModel);
});

//返回歌曲时间大于3分钟的歌曲
router.route('/longerSong').get(function(req,res,next){
var songList = [];
  for (i=0; i < albumModel.length; i=i+1){
    var minLength = albumModel[i].length/60;
    //console.log(minLength);
    if (minLength > 3){
      songList = songList.concat(albumModel[i]);
    }//if语句结束
  }//for语句结束
res.status(200).send(songList);
});

//返回制定索引的唱片数据
router.route('/:id').get(function(req,res,next){
  var id = req.params.id-1;
  if (albumModel[id]){
    res.status(200).send(albumModel[id]);
  }else{
    res.status(404).send('没有相关数据')//为什么这里加上分号就报错？
  }
});
//用put修改制定id唱片的时长和标题并返回结果
router.route('/:id').put(function(req,res,next){
  var id = req.params.id-1;
  var newLength = parseInt(req.body.length);
  //console.log(newLength);
  var newTitle = req.body.title;
  //console.log(newTitle);

//第一层if语句判断是否存在ID，并替换歌名
if (albumModel[id]){
  albumModel[id].title = newTitle;

//第二层if语句判断是否输入数字修改长度
  if (newLength){
    albumModel[id].length = newLength;
    res.status(200).send(albumModel[id]);
  }
  else{
    res.status(404).send('修改需要输入数字')
  }//第二层if结束

} else {
  res.status(404).send('没有这条记录。')
}//第一层if结束

});

//返回指定歌手的全部歌曲
router.route('/singer/:name').get(function(req,res,next){
  var singerName = req.params.name;
  //console.log('url中输入的歌手名称是 '+ singerName);
  var hisSong = [];
  for (i=0; i<albumModel.length; i=i+1){
    //console.log('try to match ' + singerName);
    //console.log('with ' + albumModel[i].singer);
    if (albumModel[i].singer === singerName){
      hisSong = hisSong.concat(albumModel[i]);
    } //if语句判断结束
  }//for语句判断结束

//第二个if，判断相关歌手，所有歌曲的数组是不是空的，如果是空的就是没找到；如果不是空的，就输出
  if (hisSong.length===0){
    res.status(404).send('没有这个歌手记录');
  } else {
    res.status(200).send(hisSong);
  }

});

//获取指定分类下的歌曲列表
router.route('/search').get(function(req,res,next){

});


module.exports = router;
