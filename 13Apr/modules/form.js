var formModule=angular.module('formModule',[]);

formModule.service('FormService',['$rootScope',function($rootScope){
    this.saveUser=function(obj){
        $rootScope.users.push(obj);
    }
    
    this.getAllUsers=function(){
        return $rootScope.users;
    }
}]);

formModule.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/form',{
        templateUrl:'views/form/registration.html',
        controller:'FormController'
    })
}])

formModule.controller('FormController',['$scope','FormService',function($scope,FormService){
    $scope.submitForm=function(){
        FormService.saveUser($scope.user);
        $scope.user={};
        
        
        // Code to remove validations  from form
    }
}]);