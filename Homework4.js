//to practice

var arr = [1,2,3,4,5,6,7];
var arr1= [0,'1','aa','Isa'];
var arr2= ['hello javascript, and hello to you too, node js.'];

arr.constructor;
//function Array(){[naive code]}
arr1.length;
//4
function person(name, gender, age){
    this.name=name;
    this.gender=gender;
    this.age=age;
}
var Isa = new person ('Isa','F','16');
document.write(Isa.age);
