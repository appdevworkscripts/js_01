function abc(){
	return 1;
}

var xyz=function(){
	return 1;
}

function square(x){
	return x*x;
}

function exp(fun,a){
	return fun(a)*fun(a+1)
}

function multiarg(a,b){
	console.log('called',a,b);
}

function area(a,b,c){
	if(a ==undefined){
		throw 'No value passed';
	}
	if(c == undefined){
		if(b == undefined){
			return Math.PI*a*a;
		}else{
			return a*b;
		}
	}else{
		return 2*(a*b+b*c+c*a);
	}
}


console.log(xyz);
console.log(Math.PI);
console.log(Math.E);
console.log(square(Math.sin(Math.PI)));
console.log(exp(Math.sin,Math.PI));
console.log(square('Hello'));
multiarg();
multiarg(4);
multiarg(4,5);
multiarg(4,5,6);


console.log(area(2));
console.log(area(2,4));
console.log(area(6,7,2));


function defarg(x,y){
	y=y||4;
	return x+y;
}
console.log(defarg(3,3));
console.log(defarg(3));