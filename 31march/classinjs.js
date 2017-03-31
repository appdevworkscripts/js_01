var Car=function(){
    this.model='';
    this.year='';
}
Car.prototype.getName=function(){
    return this.model;
}
var x=new Car();
x.model='maruti';
x.year='1990';

var y=new Car();
y.model='Ford';
y.year=1992;

console.log(x.getName())
console.log(y.getName())