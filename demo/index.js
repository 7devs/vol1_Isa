var express =require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use(bodyParser.urlencoded({
    extended:false
}));

app.all('/test',function(req, res, next){
    console.log('xxx');
    if(true){
        next();
    }else{
        res.status(403).send({msg:Fail to test});
    }
})

app.get('/', function(req,res,next){

});
