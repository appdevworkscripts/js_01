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
	model:'1990',
	price:'54000',
	city:['Agra','New Delhi','Lucknow'],
	address:{
		pincode:226021,
		city:'Jaipur'
	}
}


console.log(car.model);

car.city.forEach(function(item){
	console.log(item)
})

console.log(car.address.pincode);
console.log(car['address']['pincode']);


