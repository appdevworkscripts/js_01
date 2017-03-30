var a=[1,'Abc',234.56,true];

console.log(a);
console.log(a[0]);
console.log(a[4]);
console.log(a[-1]);
console.log(a[-4]);
console.log(a.length);


for(var i=0;i<a.length;i++){
	console.log(a[i]);
}

function f1(item,index){
	console.log('Hello '+item+index);
}


a.push('XYZ');

a.forEach(f1);

console.log('---------------');
a.forEach(function(item){
	console.log(item);
});




a.pop();


console.log('---------------');
a.forEach(function(item){
	console.log(item);
});








