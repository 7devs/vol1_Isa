var obj = {
    name: 'Isa',
    xxx:[
        1,
        'str',
        {x:1},
        [1,2,3]
    ],
    walk:function(x) {
        console.log('walk for',x,'min.')
    }
}

var arr = [1,2,3];

console.log(arr[0]);
console.log(obj.xxx[2]);

console.log(obj.name);

obj.walk(5);
