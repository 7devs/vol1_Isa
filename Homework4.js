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
document.write(Isa.toSource);
//16
arr.concat(arr1); arr1.concat(arr);
//wiil combine w/o changing any of the arr. Pay attention to order
arr.join(' '); arr.join(',');
//'1 2 3 4 5 6 7' To generate string AND to put a space or comma in between
arr.pop(); arr.shift();
// To remove. To remove and populate the last or first one
arr.push();arr.unshift();
//To add one at the end and return the total number in the arry
arr.reverse();
//To chagne order
arr.slice(1,3); arr.slice(-3);
// to pick out a few characters from an arry without really taking it out
//[2,3] //in case negative, it means to count from the end [5,6,7]
arr.sort();
// in side (), you can put + or - numbers to decide the order
arr.splice();
//will remove from *** of *** objects and then add *** at that place
arr.toString(',');
//change all the objects in an arry to ONE string
try
