var myApp = angular.module('myApp', []);

myApp.controller('todoC', function($scope){
  console.log($scope);
  $scope.name = 'liming'
});
