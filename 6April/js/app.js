var app=angular.module('myapp',['ngRoute']);

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


app.controller('ContactUsController',['$scope',function($scope){
	$scope.submitForm=function(){
		console.log($scope.o);
	}
}]);