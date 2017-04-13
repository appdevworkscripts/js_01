var usersmodule=angular.module('UsersModule',[]);


usersmodule.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/users',{
        templateUrl:'views/users/users.html',
        controller:'UsersController'
    });
}])

usersmodule.controller('UsersController',['$scope','FormService',function($scope,FormService){
    $scope.users=FormService.getAllUsers();
}]);



usersmodule.directive('singleUser',[function(){
    return {
        restrict:'E',
        replace:true,
        scope:{
            user:'='
        },
        controller:['$scope',function($scope){
            $scope.myclick=function(){
                var modalId='myModal'+$scope.user.mobileNumber;
                // Open Bootstrap modal
                $('#'+modalId).modal('show')
            }
        }],
        templateUrl:'components/singleuser.html'
    }
}]);