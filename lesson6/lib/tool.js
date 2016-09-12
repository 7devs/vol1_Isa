function printDate(){
  var day = new Date();
  console.log(day.toString());
}

function printLine(){
  console.log('-----------------------------');
}

//对外开放接口非常重要
module.exports.printDate = printDate;
module.exports.printLine = printLine;
