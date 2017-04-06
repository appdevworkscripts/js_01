var app=angular.module('myapp',['ngRoute']);
app.value('max1',{a:2,b:4});
app.constant('max2',34);
app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	$routeProvider.when('/',{
		templateUrl:'views/home.html'
	});
	$routeProvider.when('/about_us',{
		templateUrl:'views/aboutus.html'
	});
	$routeProvider.when('/contact_us',{
		templateUrl:'views/contactus.html',
		controller:'ContactUsController'
	});
	$locationProvider.html5Mode(true);
}]);

app.factory('Mymath',[function(){
	var obj={
		square:function(num){
			return num*num;
		},
		cube:function(num){
			return num*num*num;
		}
	};
	return obj;
}])

app.service('MymathService',[function(){
	
		this.square=function(num){
			return num*num;
		},
		this.cube=function(num){
			return num*num*num;
		}
	
}])


app.controller('ContactUsController',['$scope','max1','max2','Mymath','MymathService',function($scope,max1,max2,Mymath,MymathService){
	$scope.submitForm=function(){
		console.log($scope.o);
	}
	console.log(max1);
	console.log(max2);
	console.log(Mymath.square(4));
	console.log(MymathService.square(5));
}]);