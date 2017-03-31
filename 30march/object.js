var obj={
	a:1,
	b:2,
	5:'xyz',
	s5:'cdscsd'
}

console.log(obj[5]);
console.log(obj['a']);
console.log(obj['b']);
console.log(obj.a);
console.log(obj.b);
console.log(obj.s5);

var car={
	model:1990,
	model:1993,
	price:'54000',
	city:['Agra','New Delhi','Lucknow'],
	address:{
		pincode:226021,
		city:'Jaipur'
	},
	display:function(){
		console.log(this.model);
	}
}

car.model=1994;
car.xyz='hello';

delete car.price;
console.log(car.model);

car.city.forEach(function(item){
	console.log(item)
})

console.log(car.address.pincode);
console.log(car['address']['pincode']);


console.log('--------------------');


car.display();



function abc(){
	this.x='hello';
}

var i=abc();

console.log(i.x);

