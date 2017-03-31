
var setNewX=(function(){
    var x=0;
    return function(){
        x++;
        return x;
    }
})();

console.log(setNewX());
console.log(setNewX());
console.log(setNewX());
console.log(setNewX());
console.log(setNewX());
console.log(setNewX());
