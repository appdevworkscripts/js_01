var array=[
	{name:'Nadeem',roll:7},
	{name:'Mukul',roll:3},
	{name:'Shubham',roll:5},
	{name:'abhay',roll:4},
	{name:'Xyz',roll:14}
];


array.forEach(function(item){
	console.log(item.name+ ' - ' +item.roll);
});

console.log('-----------------');
//array.splice(2,4);
//[1,3)

array.forEach(function(item){
	console.log(item.name+ ' - ' +item.roll);
});


var xyz=array.filter(function(item){
	return item.roll>=5;
});
console.log('-----------------');
xyz.forEach(function(item){
	console.log(item.name);
});
console.log('-----------------');

var t1=array.filter(function(item){
	return  item.name.charAt(0)=='A'||item.name.charAt(0)=='X';
	
});

console.log('-----------------');
t1.forEach(function(item){
	console.log(item.name);
});
console.log('-----------------');



var a=[1,4,5,10];
//x->[1,16,25,100]


var x=a.map(function(item){
	return item*item;
});

console.log('-----------------');
x.forEach(function(item){
	console.log(item);
});
console.log('-----------------');


console.log(array);

var mappedArray=array.map(function(item){
	item.isValid=item.roll>=5;
	return item;
});

console.log(mappedArray);



var x=[14,11,88,33,44];

x.sort();
console.log(x);


array.sort(function(obj1,obj2){
	if(obj1.name.toLowerCase()1>obj2.name.toLowerCase()) return 1;
	else if(obj1.name.toLowerCase()<obj2.name.toLowerCase()) return -1;
	else return 0
});

console.log(array);