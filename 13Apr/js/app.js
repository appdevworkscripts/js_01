var app=angular.module('registerApp',['ngRoute','formModule','ngMessages','UsersModule']);


app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
    
    $routeProvider.when('/',{
        templateUrl:'views/landing.html'
    })
    $routeProvider.otherwise({
        redirectTo:'/'
    });
    $locationProvider.html5Mode(true);
}])

app.run(['$rootScope',function($rootScope){
    $rootScope.users=[];
}])