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
	$routeProvider.when('/http',{
		templateUrl:'views/http.html',
		controller:'HttpController'
	});
	$locationProvider.html5Mode(true);
}]);

app.factory('Mymath',['$timeout','$q',function($timeout,$q){
	var obj={
		square:function(num){
			return $q(function(resolve,reject){
				$timeout(function(){
					if(num==0){
						reject('Eror cannot resolve 0')
					}
					resolve(num*num);
				},2000);
			});		
		},
		cube:function(num){
			return $q(function(resolve,reject){
				$timeout(function(){
					if(num==0){
						reject('Eror cannot resolve 0')
					}
					resolve(num*num*num);
				},3000);
			});	
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
	
	console.log(MymathService.square(5));
	
	Mymath.square(4).then(function(result){
		return Mymath.cube(result);
	},function(err){
		console.log('reject'+err);
	}).then(function(result){
		console.logFi('nal result = '+result);
	},function(){
	});
}]);


app.controller('HttpController',['$scope','$http',function($scope,$http){
	$scope.submitForm=function(){
		$http({
			url:'http://api.fixer.io/latest'
		}).then(function(response){
			console.log(response);
		},function(){});
	}	
}]);